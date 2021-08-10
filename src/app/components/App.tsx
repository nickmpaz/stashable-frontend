import React from "react";
import { AuthProvider } from "../../features/auth/providers/AuthProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GuardedRouteContainer } from "../../features/auth/containers/GuardedRouteContainer";
import { LoginView } from "../../features/auth/views/LoginView";
import { BOOK, LOGIN, SEARCH } from "../definitions/routes";
import { SearchView } from "../../features/search/views/SearchView";
import { BookView } from "../../features/book/views/BookView";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path={LOGIN} component={LoginView} />
          <GuardedRouteContainer path={SEARCH} component={SearchView} />
          <GuardedRouteContainer path={BOOK} component={BookView} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
