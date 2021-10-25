import React from "react";
import { Login } from "./pages/login";
import "./global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { RegisterPost } from "./pages/register-post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}/>
        <Route path="/register-post" component={RegisterPost}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
