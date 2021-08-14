import React from "react";
import { AuthProvider } from "../../features/auth/providers/AuthProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GuardedRouteContainer } from "../../features/auth/containers/GuardedRouteContainer";
import { LoginView } from "../views/LoginView";
import { BOOK, LIBRARY, LOGIN, SEARCH } from "../definitions/routes";
import { SearchView } from "../views/SearchView";
import { BookView } from "../views/BookView";
import { LibraryView } from "../views/LibraryView";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route path={LOGIN} component={LoginView} />
          <GuardedRouteContainer path={SEARCH} component={SearchView} />
          <GuardedRouteContainer path={BOOK} component={BookView} />
          <GuardedRouteContainer path={LIBRARY} component={LibraryView} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
