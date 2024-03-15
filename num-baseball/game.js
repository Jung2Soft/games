// JavaScript 파일(game.js)

var chances = 10; // 맞출 수 있는 기회

// 랜덤으로 4자리 숫자 생성
var randomNumber = generateRandomNumber();

function generateRandomNumber() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var randomNum = '';

    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * numbers.length);
        randomNum += numbers[index];
        numbers.splice(index, 1); // 선택된 숫자를 배열에서 제거
    }

    return randomNum;
}
document.getElementById("checkButton").addEventListener("click", checkGuess);

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
    displayResult(result);

    // 맞출 수 있는 기회 감소
    chances--;

    // 기회 소진 시 게임 종료
    if (chances === 0) {
        alert("게임 오버! 정답은 " + randomNumber + " 입니다.");
        resetGame();
    }
}

function hasDuplicates(str) {
    return (/([0-9]).*?\1/).test(str);
}

function resetInputs() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
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

function displayResult(result) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML += "<p>Strike: " + result.strike + ", Ball: " + result.ball + "</p>";
}

function resetGame() {
    chances = 10;
    randomNumber = generateRandomNumber();
    document.getElementById("result").innerHTML = "";
}

// 포커스 이동 로직
document.getElementById("input1").addEventListener("input", function() {
    if (this.value.length === 0) {
        this.focus();
    }
});
document.getElementById("input2").addEventListener("input", function() {
    if (this.value.length === 0) {
        document.getElementById("input1").focus();
    }
});
document.getElementById("input3").addEventListener("input", function() {
    if (this.value.length === 0) {
        document.getElementById("input2").focus();
    }
});
document.getElementById("input4").addEventListener("input", function() {
    if (this.value.length === 0) {
        document.getElementById("input3").focus();
    }
});

// JavaScript 파일(game.js)

var inputs = document.querySelectorAll('.input');

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
        // 입력된 키가 숫자가 아니면 이벤트를 취소
        if (e.key.length !== 1 || !/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
}