import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Top from "./pages/Top";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import MoviePage from "./pages/MoviePage";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/top">
          <Top />
        </Route>
        <Route path="/popular">
            <Popular />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Movie/:id">
          <MoviePage />
        </Route>
        <Route path="/Search">
          <SearchResult />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
