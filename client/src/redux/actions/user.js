import axios from "axios";

export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user
  }
}

export function setLoading(value) {
  return {
    type: "SET_LOADING",
    payload: value
  }
}

export function authenticateUser(email, password) {
  return function (dispatch) {
    dispatch(setLoading(true));
    axios
      .get("/api/user", {
        params: {
          email,
          password,
        },
      })
      .then((req) => {
        setUserLocalStorage(req.data);
        dispatch(setUser(req.data));
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };
}

export function setUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearUserLocalStorage() {
  localStorage.setItem("user", null);
}

export function getUserLocalStorage() {
  const data = localStorage.getItem("user");
  const user = JSON.parse(data);
  if (user) {
    return setUser(user);
  }
  return setUser(null);
}
