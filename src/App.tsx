import React from "react";
import { Switch, Route } from "react-router-dom";
import Prediction from "./pages/Prediction/Prediction";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "7em" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prediction" component={Prediction} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
