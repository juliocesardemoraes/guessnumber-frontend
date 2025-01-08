const spanPont = document.getElementById("profile__score");
const spanTries = document.getElementById("profile__tries");

document.addEventListener("DOMContentLoaded", async () => {
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

  const resBody = await res.json();
  console.log(resBody.user);
  localStorage.setItem("user", JSON.stringify(resBody.user));
  spanPont.textContent = resBody.user.score;
  spanTries.textContent = resBody.user.tries;
});
