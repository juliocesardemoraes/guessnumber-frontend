const img = document.getElementById("img__picture");
const user = JSON.parse(localStorage.getItem("user"));
img.src = `data:image/png;base64,${user.picture}`;

const spanPont = document.getElementById("profile__score");
const spanTries = document.getElementById("profile__tries");
const triesContainer = document.getElementById("tries__container");

let randomNumber = null;
const untilNumber = 100;

let tries = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

const reset = () => {
  tries = 0;
  randomNumber = getRandomInt(untilNumber);
  triesContainer.innerHTML = "";

  console.log(randomNumber);
};

window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  spanPont.textContent = user.score;
  spanTries.textContent = user.tries;

  randomNumber = getRandomInt(untilNumber);
  console.log(randomNumber);
};

const guessNumber = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const number = Number(formData.get("number"));

  if (number === randomNumber) {
    // SUCESSO O USUÁRIO ACERTOU
    Toastify({
      text: "Você acertou, parabéns!!",
      className: "toast__success",
      duration: 3000,
    }).showToast();
    reset();
    return;
  }

  triesContainer.innerHTML += `
        <div class="bg-slate-200 rounded text-center p-4">${number}</div>
  `;

  if (number < randomNumber) {
    // Erro o número é abaixo do esperado
    Toastify({
      text: "Tente um número maior!",
      className: "toast__error",
      duration: 3000,
    }).showToast();
    return;
  }

  if (number > randomNumber) {
    // Erro o número é acima do esperado
    Toastify({
      text: "Tente um número menor!",
      className: "toast__error",
      duration: 3000,
    }).showToast();
    return;
  }
};

window.guessNumber = guessNumber;
