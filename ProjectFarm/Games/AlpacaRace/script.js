//moving characters

let balance = 500;

function myMove() {
  let id = null;
  const green = document.getElementById("green");
  let greenPos = 8;

  const blue = document.getElementById("blue");
  let bluePos = 8;

  const yellow = document.getElementById("yellow");
  let yellowPos = 8;

  let credit = document.getElementById("amount").value;

  console.log(credit);

  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (greenPos >= 83 || bluePos >= 83 || yellowPos >= 83) {
      //winning cases
      var bets = document.getElementById("BetAlpaca");
      var betsAlpaca = bets.options[bets.selectedIndex].value;

      if (greenPos >= 83 && bluePos < 83 && yellowPos < 83) {
        if (betsAlpaca == 1) {
          balance += credit * 2;
        } else {
          balance -= credit;
        }
        document.getElementById("balance").innerHTML =
          "Amount: " + balance + "$";
      }
      if (bluePos >= 83 && greenPos < 83 && yellowPos < 83) {
        if (betsAlpaca == 2) {
          balance += credit * 2;
        } else {
          balance -= credit;
        }
        document.getElementById("balance").innerHTML =
          "Amount: " + balance + "$";
      }
      if (yellowPos >= 83 && greenPos < 83 && bluePos < 83) {
        if (betsAlpaca == 3) {
          balance += credit * 2;
        } else {
          balance -= credit;
        }
        document.getElementById("balance").innerHTML =
          "Amount: " + balance + "$";
      }
      //tie cases
      if (greenPos >= 83 && bluePos >= 83 && yellowPos < 83) {
        if (betsAlpaca == 1 || betsAlpaca == 2) {
          alert("It's a tie. Your money have been returned");
        }
      }
      if (greenPos >= 83 && bluePos < 83 && yellowPos >= 83) {
        if (betsAlpaca == 3 || betsAlpaca == 1) {
          alert("It's a tie. Your money have been returned");
        }
      }
      if (greenPos < 83 && bluePos >= 83 && yellowPos >= 83) {
        if (betsAlpaca == 3 || betsAlpaca == 2 || betsAlpaca == 1) {
          alert("It's a tie. Your money have been returned");
        }
      }
      if (balance <= 0) {
        alert("You have no money. Press the restart button to play a new game");
      }
      clearInterval(id);
    } else {
      //moving
      let plus = (Math.random() * 2) / 5;
      greenPos += plus;
      green.style.left = greenPos + "vw";

      let plus1 = (Math.random() * 2) / 5;
      bluePos += plus1;
      blue.style.left = bluePos + "vw";

      let plus2 = (Math.random() * 2) / 5;
      yellowPos += plus2;
      yellow.style.left = yellowPos + "vw";
    }
  }
}

//New Loop no restart func
function NewLoop() {
  const elem = document.getElementById("green");
  let pos = 8;
  elem.style.left = pos + "vw";

  const elem1 = document.getElementById("blue");
  let pos1 = 8;
  elem1.style.left = pos1 + "vw";

  const elem2 = document.getElementById("yellow");
  let pos2 = 8;
  elem2.style.left = pos2 + "vw";
}

function restart(params) {
  NewLoop();
  balance = 500;
  document.getElementById("balance").innerHTML = "Amount: " + balance + "$";
}
