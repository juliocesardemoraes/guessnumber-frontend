window.onload = async () => {
  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  const bodyString = localStorage.getItem("user");
  console.log(bodyString);

  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/authsign`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyString,
  });

  if (res?.status !== 200) {
    window.location.href = "/login";
  }
};
