import React from "react";
import "./normalize.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
