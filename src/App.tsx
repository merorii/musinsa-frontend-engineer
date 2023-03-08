//base
import React from "react";

//components
import { Header } from "components";

//pages
import { Product } from "pages/Product";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  );
};

export default App;
