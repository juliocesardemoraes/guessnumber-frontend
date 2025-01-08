const spanPont = document.getElementById("profile__score");
const spanTries = document.getElementById("profile__tries");
const h1ProfileName = document.getElementById("profile__name");

const slowNumber = (element, loopSize, speed = 100) => {
  for (let i = 0; i < loopSize; i++) {
    setTimeout(() => {
      element.textContent = i;
    }, speed * i);
  }
};

const slowText = (element, content, speed = 100) => {
  const splitText = content.split("");

  for (let i = 0; i < splitText.length; i++) {
    setTimeout(() => {
      element.textContent += splitText[i];
    }, speed * i);
  }
};

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

  slowNumber(spanPont, resBody.user.score);
  slowNumber(spanTries, resBody.user.tries, 50);
  slowText(h1ProfileName, resBody.user.username);
});
