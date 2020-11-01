import { Fragment } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className='container-custom'>
          <Alert />
          <Landing />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
