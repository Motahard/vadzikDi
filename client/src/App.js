import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./components/login/login.component";
import DashboardPage from "./components/dashboard/dashboard.component";
import {getUserLocalStorage} from "./redux/actions/user";
import MovingPage from "./components/moving/moving.component";
import ReportsPage from "./components/reports/reports.component";

function App() {
  useEffect(() => {
    store.dispatch(getUserLocalStorage());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/moving">
            <MovingPage />
          </Route>
          <Route path="/reports">
            <ReportsPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
