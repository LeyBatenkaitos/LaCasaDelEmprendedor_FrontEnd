import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";

const Dashboard = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    //ajustar proxy con el link correctamente para hacer conexion con el backend
    //agregado de branch front-dev a repo
    fetch("/api/jsonTest")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      <Navbar />
      <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2>
    </>
  );
};

export default Dashboard;
