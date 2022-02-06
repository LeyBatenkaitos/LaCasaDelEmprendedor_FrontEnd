import React, { useEffect, useState } from "react";
import "./normalize.css";
import "./App.css";

const App = () => {
  const [msg, setMsg] = useState();
  useEffect(() => {
    //ajustar proxy con el link correctamente para hacer conexion con el backend
    fetch("/api")
      .then((res) => res.json())
      .then((js) => setMsg(js));
  }, []);
  return (
    <>
      <h2>
        Mensaje del backend: <code>{JSON.stringify(msg)}</code>
      </h2>
    </>
  );
};

export default App;
