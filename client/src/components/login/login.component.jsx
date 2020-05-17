import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Card, TextInput, Container, Button } from "react-materialize";
import { authenticateUser } from "../../redux/actions/user";

function LoginPage({ user, loading }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  }, [user, history]);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Введите корректный адрес электронной почты.");
    } else if (!password) {
      setError("Длина пароля должна быть больше нуля.");
    } else {
      dispatch(authenticateUser(email, password));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Container>
        <Card style={{ padding: "3rem 0" }}>
          <h5 className="center" style={{ marginBottom: "2rem" }}>
            Войдите в систему!
          </h5>
          <Container>
            <form onSubmit={onSubmitHandle}>
              <TextInput
                id="email"
                label="Введите Ваш email"
                email
                validate
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                id="password"
                label="Введите Ваш пароль"
                validate
                password
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                small
                disabled={loading}
                className="#00838f cyan darken-3"
              >
                Войти
              </Button>
            </form>
            {error && (
              <p className="red-text center" style={{ marginTop: "2rem" }}>
                {error}
              </p>
            )}
          </Container>
        </Card>
      </Container>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.userState.loading
});

export default connect(mapStateToProps)(LoginPage);
