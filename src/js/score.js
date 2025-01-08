const scoreContainer = document.getElementById("score__container");

window.onload = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/user/leaderboard`
  );
  const resBody = await res.json();
  console.log(resBody);
  const users = resBody.users;
  for (let i = 0; i < users.length; i++) {
    scoreContainer.innerHTML += `<div class="flex justify-between items-center p-1">
          <h1 class="text-3xl font-bold text-slate-700">${i + 1}</h1>
          <div class="w-[250px]">
            <h2 class="font-base font-bold">${users[i].username}</h2>
            <h3 class="font-base text-slate-600">
               ${users[i].score} vitórias /  ${users[i].tries} tentativas
            </h3>
          </div>
          <img
            class="w-[24px] h-[16px]"
            src="data:image/png;base64,${users[i].picture}"
            alt="profile picture"
          />
        </div>
    `;
  }
};

img.src = `data:image/png;base64,${user.picture}`;
//

/*
{
  "_id": "677924e738916db2dfa640fe",
  "username": "admin",
  "password": "admin",
  "score": 21,
  "tries": 12,
  picture
  "createdAt": "2025-01-04T12:09:11.982Z",
  "updatedAt": "2025-01-08T13:24:57.305Z",
  "__v": 0
}
*/
