import { Fragment } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Showcase from "./layout/Showcase";
import Alert from "./layout/Alert";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path to='/' component={Showcase} />
          <Route path to='/:id' component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
