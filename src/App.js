import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";

// Components HLL

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
