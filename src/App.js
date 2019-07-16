import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import RegistrationForm from "./app/components/auth/Register";
import LoginForm from "./app/components/auth/Login";
import Home from "./app/components/Home";
import Navbar from "./app/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
      </Switch>
    </div>
  );
}

export default App;
