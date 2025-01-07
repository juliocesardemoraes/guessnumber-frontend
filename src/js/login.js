import Identicon from "identicon.js";

function generateRandomHash() {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

const criarConta = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get("username");
  const password = formData.get("password");

  const options = {
    background: [0, 0, 0, 255],
    margin: 0.2,
    size: 50,
  };

  const hash = generateRandomHash();
  const data = new Identicon(hash, options).toString();

  localStorage.removeItem("user");

  const bodyString = JSON.stringify({
    username,
    password,
    picture: data,
  });

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/authsign`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  const responseMessage = await res.json();
  console.log("RES", responseMessage.user.picture);

  if (res?.status === 200 || res?.status === 201) {
    Toastify({
      text: responseMessage?.message ?? "Login bem sucedido",
      className: "info",
    }).showToast();

    if (res.status === 200) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          password,
          picture: responseMessage.user.picture,
        })
      );
    } else {
      localStorage.setItem("user", bodyString);
    }

    setTimeout(() => {
      // Redirecionar para a página principal
      window.location.href = "/";
    }, 1000);
  } else {
    Toastify({
      text: responseMessage?.message ?? "Erro na requisição!",
      className: "toast__error",
    }).showToast();
  }
};

window.criarConta = criarConta;
