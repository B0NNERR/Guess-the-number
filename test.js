"use strict";

// Код написан для практики, не задумывался об читабельности и аккуратности

document.addEventListener("DOMContentLoaded", () => {
  const titleLayout = document.querySelector(".section-title__layout");
  const inputNumber = document.querySelector("#number");
  const btnReset = document.querySelector(".section-head__btn");
  const btnCalc = document.querySelector(".section-content__btn");
  const textResult = document.querySelector(".section-content__layout");
  const currentScore = document.querySelector(".section-content__score span");
  const bestScore = document.querySelector(".section-content__best-score span");
  const range = document.querySelector(".section-head__range");
  const rangeNumbers = [];
  let isPlayed = false;

  for (let i = 1; i <= 20; i++) {
    rangeNumbers.push(i);
  }

  let randomNumber = getRandom();
  let maxTry;
  for (let i = 0; Math.pow(2, i) < rangeNumbers[rangeNumbers.length - 1]; i++) {
    maxTry = i + 1;
  }
  currentScore.innerHTML = maxTry;
  range.innerHTML = `< Между ${rangeNumbers[0]} и ${
    rangeNumbers[rangeNumbers.length - 1]
  } >`;

  inputNumber.max = rangeNumbers[rangeNumbers.length - 1];
  inputNumber.min = rangeNumbers[0];
  inputNumber.value = rangeNumbers[0];

  btnCalc.addEventListener("click", choiceNumber);
  btnReset.addEventListener("click", resetGame);

  // ФУНКЦИИ

  // Берет рандомное число
  function getRandom() {
    return (
      Math.floor(
        Math.random() *
          (rangeNumbers[rangeNumbers.length - 1] - rangeNumbers[0] + 1)
      ) + rangeNumbers[0]
    );
  }

  function choiceNumber() {
    if (isPlayed) return;

    let currentNumber = inputNumber.valueAsNumber;
    if (currentNumber > randomNumber) {
      textResult.innerHTML = `Слишком много!`;
      currentScore.innerHTML -= 1;
    } else if (currentNumber < randomNumber) {
      textResult.innerHTML = `Слишком мало!`;
      currentScore.innerHTML -= 1;
    } else {
      document.body.style.backgroundColor = "#7DDC1F";
      titleLayout.innerHTML = currentNumber;
      textResult.innerHTML = `Ты угадал!`;
      if (+bestScore.innerHTML < +currentScore.innerHTML) {
        bestScore.innerHTML = currentScore.innerHTML;
      }
      isPlayed = true;
    }

    if (currentScore.innerHTML == 0) {
      lose();
      isPlayed = true;
    }
  }

  function lose() {
    document.body.style.backgroundColor = "#f44336";
    textResult.innerHTML = `Ты проиграл!`;
  }

  function resetGame() {
    document.body.style.backgroundColor = "#000";
    textResult.innerHTML = `Начни угадывать!`;
    titleLayout.innerHTML = "???";
    currentScore.innerHTML = maxTry;
    randomNumber = getRandom();
    inputNumber.value = rangeNumbers[0];
    isPlayed = false;
  }
});
