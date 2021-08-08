import React from "react";
import "./App.css";
import { AuthProvider } from "../../features/auth/providers/AuthProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GuardedRouteContainer } from "../../features/auth/containers/GuardedRouteContainer";
import { LoginContainer } from "../../features/auth/containers/LoginContainer";
import { LOGIN, SEARCH } from "../definitions/routes";
import { SearchContainer } from "../../features/search/containers/SearchContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path={LOGIN} component={LoginContainer} />
          <GuardedRouteContainer path={SEARCH} component={SearchContainer} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
