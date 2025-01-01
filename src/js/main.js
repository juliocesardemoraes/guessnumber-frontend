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
