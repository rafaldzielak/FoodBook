import { Fragment } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Landing />
      </div>
    </Fragment>
  );
}

export default App;
