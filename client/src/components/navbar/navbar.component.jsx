import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import {useDispatch} from "react-redux";
import {clearUserLocalStorage, setUser} from "../../redux/actions/user";

export default function NavigationBar() {
  const dispatch = useDispatch();

  const logout = () => {
    clearUserLocalStorage();
    dispatch(setUser(null));
  };
  return (
    <Navbar menuIcon={"Открыть меню"} alignLinks="right" className="#00838f cyan darken-3">
      <Link to="/dashboard">Приход</Link>
      <Link to="/moving">Перемещение</Link>
      <Link to="/reports">Отчёты</Link>
      <Link onClick={logout} to="/">Выйти из личного кабинета</Link>
    </Navbar>
  );
}
