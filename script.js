const clickBtn = document.querySelector(".clickBtn");
const tagP = document.querySelector(".tagP");
const tagSecond = document.querySelector(".tagSecond");

fetch("https://v2.jokeapi.dev/joke/Any")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw "Error cixdi";
    }
  })
  .then((data) => {
    tagP.innerHTML = data.setup;
    clickBtn
      .addEventListener("click", () => {
        tagSecond.classList.toggle("reply");
        tagSecond.innerHTML = data.delivery;
      })
      .catch((error) => console.log(error));
  });
