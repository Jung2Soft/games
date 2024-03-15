var inputs = document.querySelectorAll('.input');
var previousInputs = ['', '', '', '']; // 이전 입력 추적을 위한 배열

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        var maxLength = parseInt(this.getAttribute('maxlength'));
        var currentLength = this.value.length;

        if (currentLength >= maxLength) {
            var nextIndex = Array.prototype.indexOf.call(inputs, this) + 1;
            if (nextIndex < inputs.length) {
                inputs[nextIndex].focus();
            }
        }
    });

    inputs[i].addEventListener('keydown', function(e) {
        if (!/^\d$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
            e.preventDefault();
        }
    });

    inputs[i].addEventListener('input', function() {
        var index = Array.prototype.indexOf.call(inputs, this);
        var currentInput = this.value;

        if (currentInput === '0') {
            alert("0은 입력할 수 없습니다. 다른 숫자를 입력하세요.");
            this.value = '';
        }

        if (previousInputs.includes(currentInput)) {
            alert("이미 사용한 숫자입니다. 다른 숫자를 입력하세요.");
            this.value = '';
        } else {
            previousInputs[index] = currentInput;
        }
        if (index === inputs.length - 1 && currentInput !== '') {
            checkGuess();
        }

        // 다음 인풋에 숫자가 없을 때 현재 입력값을 다음 인풋에 입력
        if (index < inputs.length - 1 && currentInput !== '' && inputs[index + 1].value === '') {
            inputs[index + 1].value = currentInput;
            inputs[index + 1].focus();
        }
    });
}

document.getElementById("checkButton").addEventListener("click", checkGuess);

var chances = 10; // 맞출 수 있는 기회
var randomNumber = generateRandomNumber(); // 랜덤으로 4자리 숫자 생성

function generateRandomNumber() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0을 제외한 숫자 배열
    var randomNum = '';

    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * numbers.length);
        randomNum += numbers[index];
        numbers.splice(index, 1); // 선택된 숫자를 배열에서 제거
    }

    return randomNum;
}

function checkGuess() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;

    var guess = input1 + input2 + input3 + input4;

    if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
        alert("4자리 숫자를 입력하세요.");
        return;
    }

    // 중복된 숫자 체크
    if (hasDuplicates(guess)) {
        alert("숫자가 중복되었습니다. 다시 입력해주세요.");
        resetInputs();
        return;
    }

    var result = compareNumbers(guess, randomNumber);
    displayResult(result, guess);

    // 맞출 수 있는 기회 감소
    chances--;

    // 기회 소진 시 게임 종료
    if (chances === 0) {
        document.getElementById("result").innerHTML += "<p>게임 오버! 정답은 " + randomNumber + " 입니다.</p>";
        resetGame();
    }
}

function hasDuplicates(str) {
    return (/([0-9]).*?\1/).test(str);
}

function resetInputs() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        previousInputs[i] = "";
    }
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
    var resultString = "<span class='result'>Strike: " + result.strike + ", Ball: " + result.ball + "</span>";
    resultDiv.innerHTML += "<p>" + guessString + " - " + resultString + "</p>";
}

function resetGame() {
    chances = 10;
    randomNumber = generateRandomNumber();
    document.getElementById("result").innerHTML = "";
    previousInputs = ['', '', '', ''];
}
