const login = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  localStorage.removeItem("user");

  const bodyString = JSON.stringify({
    email,
    password,
  });

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  const responseMessage = await res.json();
  console.log(responseMessage);

  if (res?.status === 200) {
    Toastify({
      text: responseMessage?.message ?? "Login bem sucedido",
      className: "info",
    }).showToast();

    setTimeout(() => {
      // Adicionar ao localstorage
      localStorage.setItem("user", bodyString);

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

window.login = login;

const domH1 = document.getElementById("piadaresposta");
console.log("META", import.meta.env);

const fetchData = async () => {
  console.log("META", import.meta.env);
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/piadas`);
  const data = await res.json();

  domH1.textContent = data.piada.piada;

  console.log(data.piada.piada);
};

window.onload = async () => {
  // Toastify({
  //   text: "This is a toast",
  //   className: "info",
  // }).showToast();

  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  const bodyString = localStorage.getItem("user");
  console.log(bodyString);

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  // const responseMessage = await res.json();
  // console.log(responseMessage);

  console.log("RES", res);
  if (res?.status !== 200) {
    window.location.href = "/login";
  }
};

window.fetchData = fetchData;
