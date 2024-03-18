var inputs = document.querySelectorAll(".input");
var chances_lock = 10; // 맞출 수 있는 기회
var chances = chances_lock; //기회 고정용
var randomNumber = generateRandomNumber(); // 랜덤으로 4자리 숫자 생성
var preguess = []; //숫자 기록 검사용
document
  .getElementById("checkButton")
  .addEventListener("click", handleCheckGuess);
function showToast(message) {
  var toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}
function hasDuplicates(value) {
  // 중복된 숫자가 있는지 확인
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;
  var guess = input1 + input2 + input3 + input4;
  if (guess.includes(value)) {
    return true;
  } else {
    return false;
  }
}
function handleCheckGuess() {
  // 게임 확인 버튼 클릭 시 처리
  checkGuess(); // 게임 로직 호출
}
function handleResetGame() {
  // 게임 리셋 처리
  resetInputs(); // 사용자 입력 초기화
  resetGame(); // 게임 리셋
}
function handleInput(inputElement) {
  var index = Array.prototype.indexOf.call(inputs, inputElement);
  inputs[index].addEventListener("keydown", function (e) {
    // 키다운 리스너
    if (hasDuplicates(e.key)) {
      // 중복 확인
      e.preventDefault();
      showToast("이미 사용한 숫자입니다. 다른 숫자를 입력하세요.");
    }
    var isNumber = /^\d$/.test(e.key);
    var isNavigationalKey =
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Enter";
    if (!isNumber && !isNavigationalKey) {
      e.preventDefault();
      showToast("숫자만 입력하세요.");
    } else if (e.key === "0") {
      e.preventDefault();
      showToast("0은 입력할 수 없습니다. 다른 숫자를 입력하세요.");
    }
    if (isNumber && e.key !== "0") {
      document.getElementById("input4").focus();
    }
    if (e.key === "Backspace" && index < 3 && index > 0) {
      inputs[index].value = "";
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
    }
    if (e.key === "Backspace" && index === 3 && inputs[index].value === "") {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
    } else if (
      e.key === "Backspace" &&
      index === 3 &&
      inputs[index].value !== ""
    ) {
      inputs[index].value = "";
    }
  });
  if (
    index > 0 &&
    inputs[index].value === "" &&
    inputs[index - 1].value === ""
  ) {
    inputs[index - 1].focus();
  }
  if (index < 3 && inputs[index].value !== "") {
    inputs[index + 1].focus();
  }
}
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function () {
    handleInput(this);
  });
  inputs[i].addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleCheckGuess();
    }
  });
}
function generateRandomNumber() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0을 제외한 숫자 배열
  var randomNum = "";
  for (var i = 0; i < 4; i++) {
    var index = Math.floor(Math.random() * numbers.length);
    randomNum += numbers[index];
    numbers.splice(index, 1); // 선택된 숫자를 배열에서 제거
  }
  return randomNum;
}
function handleCorrectGuess() {
  showToast("축하합니다! 정답을 맞췄습니다.");
  handleResetGame();
}
function checkGuess() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;
  var guess = input1 + input2 + input3 + input4;
  // 각종 오류 체크 및 결과 표시
  if (guess === randomNumber) {
    handleCorrectGuess(); // 정답을 맞췄을 때 처리
  } else if (guess.length < 4) {
    showToast("숫자를 전부 입력해주세요.");
    return;
  } else if (hasDuplicates()) {
    showToast("숫자가 중복되었습니다. 다시 입력해주세요.");
    return;
  } else if (preguess.includes(guess)) {
    showToast("이전에 입력한 숫자입니다. 다른 숫자를 입력해주세요.");
    resetInputs();
    return;
  } else {
    // 정답이 아닌 경우, 결과 표시
    preguess.push(guess); // 숫자 기록
    var result = compareNumbers(guess, randomNumber);
    displayResult(result, guess);
    chances--; // 맞출 수 있는 기회 감소
    if (chances === 0) {
      // 기회 소진 시 게임 종료
      showToast("게임 오버! 정답은 " + randomNumber + " 입니다.");
      handleResetGame();
    }
    resetInputs();
  }
}
function resetInputs() {
  // 인풋 리셋
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  document.getElementById("input1").focus();
}
function compareNumbers(guess, target) {
  var strike = 0;
  var ball = 0;
  for (var i = 0; i < 4; i++) {
    if (guess[i] === target[i]) {
      strike++;
    } else if (target.indexOf(guess[i]) !== -1) {
      ball++;
    }
  }
  return { strike: strike, ball: ball };
}
function displayResult(result, guess) {
  var resultDiv = document.getElementById("result");
  var guessString = "<span class='guess'>" + guess.toString() + "</span>";
  var resultString =
    "<span class='result'>스트라이크: " +
    result.strike +
    ", 볼: " +
    result.ball +
    "</span>";
  resultDiv.innerHTML += "<p>" + guessString + " - " + resultString + "</p>";
}
function resetGame() {
  preguess = [];
  chances = chances_lock;
  randomNumber = generateRandomNumber();
  document.getElementById("result").innerHTML = "";
  document.getElementById("input1").focus();
}
