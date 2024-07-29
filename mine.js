const parms = new URLSearchParams(window.location.search);

const amount = parms.get("amount");

const Amount = document.getElementById("amount");

Amount.textContent = `Amount = ${amount}`;

let randomNumber = 0;
if (amount < 500) {
  randomNumber = Math.floor(Math.random() * 12);
} else if (amount >= 500 && amount <= 800) {
  randomNumber = Math.floor(Math.random() * 4);
} else {
  randomNumber = Math.floor(Math.random() * 3);
}

let numberValue = 0;
let winningAmount = amount;
const button = document.querySelectorAll(".box");

const winning = document.getElementById("winningAmount");
const withdrawbtn = document.getElementById("withdraw");
const playAgainbtn = document.getElementById("again");
const winAmount = document.getElementById("winamount");
const Stopgame = document.getElementById("stop");

const open = () => {
  window.open("./index.html");
};

if (randomNumber < 1) {
  randomNumber = randomNumber + 1;
}

const disableButton = () => {
  button.forEach((e) => {
    e.disabled = true;
  });
};

const result = () => {
  Stopgame.classList.add("hide");
  playAgainbtn.classList.remove("hide");
  withdrawbtn.classList.remove("hide");
  withdrawbtn.addEventListener("click", () => {
    winAmount.classList.remove("hide");
    winAmount.textContent = `Congratulation you won ${winningAmount}rs`;
    withdrawbtn.classList.add("hide");
  });
};

let v = 1;

button.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    numberValue++;
    if (numberValue == randomNumber) {
      buttons.classList.add("red");
      withdrawbtn.classList.add("hide");
      winning.textContent = `Withdrawl Amount = 0`;
      Amount.textContent = `Amount = 0`;
      playAgainbtn.classList.remove("hide");
      Stopgame.classList.add("hide")
      playAgainbtn.addEventListener("click", () => {
        open();
      });

      disableButton();
    } else {
      buttons.classList.add("green");
      Stopgame.classList.remove("hide");
      winningAmount = winningAmount * 1.2;
      buttons.disabled = true;
      winning.textContent = `Withdrawl Amount = ${winningAmount}`;
      Stopgame.addEventListener("click", () => {
        disableButton();
        result();
      });
    }
  });
});

playAgainbtn.addEventListener("click", () => {
  open();
});
