import React from 'react';
import Container from "./components/home/Container"
import LoginRedirect from "./containers/home/LoginRedirect"
import LogoutRedirect from "./containers/home/LogoutRedirect"
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container}>
        </Route>
        <Route path="/login" component={LoginRedirect}>
        </Route>
        <Route path="/logout" component={LogoutRedirect}>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
