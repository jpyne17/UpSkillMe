import React from "react";
import "./App.css";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = React.useState([]);
  const [emailInput, setEmailInput] = React.useState("");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LogInPage emailInput={emailInput} setEmailInput={setEmailInput} />
          </Route>
          <Route path="/profile">
            <ProfilePage
              data={data}
              setData={setData}
              setEmailInput={setEmailInput}
              emailInput={emailInput}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
