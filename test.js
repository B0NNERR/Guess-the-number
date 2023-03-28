"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let check = document.querySelector(".btn-result");
  let result = document.querySelector(".result");
  let currentScore = document.querySelector(".score span");
  let bestScoreHTML = document.querySelector(".best-score span");
  let bestScore = 0;
  let arr = [];

  currentScore.innerHTML = 20;

  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }

  let randNumber = Math.round(
    arr[0] - 0.5 + Math.random() * (arr.length - 1 - arr[0] + 1)
  );

  document.querySelector(".head-right").innerHTML = `< Между ${arr[0]} и ${
    arr[arr.length - 1]
  } >`;

  function reset() {
    result.innerHTML = `Начни угадывать!`;
    currentScore.innerHTML = 20;
    document.querySelector("#number").valueAsNumber = 0;
    document.querySelector(".heading").innerHTML = `Угадай Число!`;
    document.body.style.backgroundColor = `#000`;
    randNumber = Math.round(
      arr[0] - 0.5 + Math.random() * (arr.length - 1 - arr[0] + 1)
    );
  }

  function checkResult() {
    let currentChoice = document.querySelector("#number").valueAsNumber;
    let cntScore = parseInt(currentScore.innerHTML);

    if (cntScore <= 1) {
      currentScore.innerHTML = 0;
      return warning();
    }

    if (currentChoice > randNumber) {
      result.innerHTML = `Слишком много!`;
      currentScore.innerHTML = --cntScore;
    } else if (currentChoice < randNumber) {
      result.innerHTML = `Слишком мало!`;
      currentScore.innerHTML = --cntScore;
    } else {
      result.innerHTML = `Точно в цель!`;
      if (bestScore < cntScore) {
        bestScoreHTML.innerHTML = cntScore;
        document.body.style.backgroundColor = `rgba(0, 170, 0, 0.7)`;
      }
    }
  }

  function warning() {
    document.body.style.backgroundColor = `red`;
    result.innerHTML = "Нажми < Сначала! >";
    document.querySelector(".heading").innerHTML = `Ты проиграл!`;
  }

  check.addEventListener("click", checkResult);

  document.querySelector(".btn-again").addEventListener("click", reset);
});
