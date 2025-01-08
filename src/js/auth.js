const spanPont = document.getElementById("profile__score");
const spanTries = document.getElementById("profile__tries");
const h1ProfileName = document.getElementById("profile__name");

document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  const bodyString = localStorage.getItem("user");

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
  localStorage.setItem("user", JSON.stringify(resBody.user));
  spanPont.textContent = resBody.user.score;
  spanTries.textContent = resBody.user.tries;
  h1ProfileName.textContent = resBody.user.username;
});
