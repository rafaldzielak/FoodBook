import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Showcase from "./layout/Showcase";
import Alert from "./layout/Alert";
import Favourites from "./layout/Favourites";
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
          <Route exact path='/' component={Showcase} />
          <Route path='/restaurants/:id' component={Landing} />
          <Route path='/fav' component={Favourites} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
