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
import ProductDetails from "./Components/ProductDetails/ProductDetails";


function App() {
  return (
    <div style={{backgroundColor:'#F2F3F7'}}className="App">

      <Router>
        <Switch>
          <Route exact path="/">           
            <Main></Main>
          </Route>

          <Route path="/productDetails/:productID">
            <ProductDetails></ProductDetails>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
