import React from "react";
import { v4 as uuid } from "uuid";
import "@material-tailwind/react/tailwind.css";

// import './App.css'

// importing react router dom
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import EditorComponent from "./components/Editor/EditorComponent";

const App = () => {
  const uniqueId = uuid();
  console.log(uniqueId);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <EditorComponent uniqueId={uniqueId}/>} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
