import React from "react";
import quoteRegister from "../actions/QuoteRegister";
import { useHistory } from "react-router-dom";

const FormQuote = () => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    console.log(e.target);
    const payload = {};
    for (const [camp, val] of formData.entries()) payload[camp] = val;
    const quote = {
      //!Campos no son los oficiales
      name: payload.name,
      email: payload.email,
      petition: payload.petition,
    };
    console.log(quote);
    const createQuote = async () => {
      const { success, message } = await quoteRegister(quote);
      console.log({ success });

      if (success) {
        form
          .querySelectorAll(`ìnput:not([type="submit"])`)
          .forEach((input) => (input.value = ""));
        history.push("/dashboard");
      } else {
        window.alert(`No se pudo registrar formulario. ${message}`);
      }
    };
  };
  return (
    <>
      <h1>Hola</h1>
    </>
  );
};

export default FormQuote;
