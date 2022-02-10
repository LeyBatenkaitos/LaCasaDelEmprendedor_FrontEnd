const quoteRegister = async (payload) => {
  try {
    const resultado = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const obj = await resultado.json();
    if (!resultado.ok) throw new Error(obj.message);
    return { success: true };
  } catch (err) {
    console.log({ error: err });
    return { success: false, message: err };
  }
};

export default quoteRegister;
