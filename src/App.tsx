//base
import React from "react";

//components
import { Header } from "components";

//pages
import { Home } from "pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
