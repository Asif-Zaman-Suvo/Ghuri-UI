import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/">
            <Header></Header>
            <Main></Main>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
