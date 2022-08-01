import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import { LocalGasStation } from '@material-ui/icons';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
