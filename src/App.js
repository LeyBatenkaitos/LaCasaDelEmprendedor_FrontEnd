import React from "react";
import "./normalize.css";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";

const App = () => {
  return <Route index element={<Dashboard />} />;
};

export default App;
