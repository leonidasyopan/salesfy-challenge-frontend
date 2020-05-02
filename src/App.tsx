import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      {/*
       *** This is a Style file responsible for resetting the CSS to no margins,
       *** styles and outlines and some other minor things.
       */}
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
