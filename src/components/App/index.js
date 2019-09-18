import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Footer from "../Footer/Footer";
const App = () => (
  <Router>
    <CssBaseline />
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
    <Footer />
  </Router>
);
export default App;
