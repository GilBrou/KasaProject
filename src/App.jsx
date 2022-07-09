import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ApartmentPage from "./Pages/ApartmentPage/ApartmentPage";
import Error404 from "./Pages/Error404/Error404";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/apartment/:id">
            <ApartmentPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
