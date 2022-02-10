import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    //ajustar proxy con el link correctamente para hacer conexion con el backend
    //agregado de branch front-dev a repo
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <h2>
      Mensaje del backend: <code>{JSON.stringify(msg)}</code>
    </h2>
  );
};

export default Dashboard;
