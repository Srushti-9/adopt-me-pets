import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(SearchParams),
    React.createElement(SearchParams),
    React.createElement(SearchParams),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
