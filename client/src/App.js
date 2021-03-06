import React from "react";
import { BrowserRoute as Router, Switch} from "react-router-dom"
import Nav from './components/Nav'
import Books from "./pages/Books"
import Details from "./pages/Details"
import FourOhFour from './pages/FourOhFour'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = {['/', '/books']} compondent={Books}/>
          <Route exact path={'/books/:id'} component={Details}/>
          <Route component ={FourOhFour}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
