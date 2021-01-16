import React, {useState} from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import styles from './App.module.css';
import Dashboard from './containers/Dashboard';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        {/* <Route exact path="/courses" component={}/>
        <Route exact path="/analytics" component={}/>
        <Route exact path="/settings" component={}/> */}
      </Switch>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;

