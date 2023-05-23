import React from "react";
import "@material-tailwind/react/tailwind.css";


// importing react router dom
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditorComponent from "./components/Editor/EditorComponent";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <EditorComponent />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
