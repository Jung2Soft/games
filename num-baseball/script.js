var inputs = document.querySelectorAll('.input');
var chances_lock = 10;// 맞출 수 있는 기회

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}

function hasDuplicates() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;

    var guess = input1 + input2 + input3 + input4;
    
    // 중복된 숫자가 있는지 확인
    var seen = {}; // 중복을 확인할 때 사용할 객체
    for (var i = 0; i < guess.length; i++) {
        var digit = guess[i];
        if (digit in seen) {
            return true; // 중복이 발견되면 true 반환
        } else {
            seen[digit] = true; // 현재 숫자를 객체에 추가
        }
    }
    return false; // 중복이 발견되지 않으면 false 반환
}

// 입력값 검증 및 처리
function processInput(inputElement) {
    var currentInput = inputElement.value;

    if (currentInput === '0') {
        inputElement.value = '';
        showToast("0은 입력할 수 없습니다. 다른 숫자를 입력하세요.");
        return;
    }

    if (hasDuplicates()) {
        showToast("이미 사용한 숫자입니다. 다른 숫자를 입력하세요.");
        inputElement.value = '';
        return;
    }

    // 중복 확인 후에 다음 인풋에 숫자가 없을 때 현재 입력값을 다음 인풋에 입력
    if (!hasDuplicates() && index < inputs.length - 1 && currentInput !== '' && inputs[index + 1].value === '') {
        inputs[index + 1].value = currentInput;
        inputs[index + 1].focus();
    }
}

// 게임 확인 버튼 클릭 시 처리
function handleCheckGuess() {
    checkGuess(); // 게임 로직 호출
    resetInputs(); // 사용자 입력 초기화
}

// 게임 리셋 처리
function handleResetGame() {
    resetInputs(); // 사용자 입력 초기화
    resetGame(); // 게임 리셋
}

function handleInput(inputElement) {
    var index = Array.prototype.indexOf.call(inputs, inputElement);
    var currentInput = inputElement.value;

    inputElement.addEventListener('keydown', function(e) {
        var BS_Press = e.key === "Backspace";
        // 백스페이스 키를 눌렀을 때 뒤로 포커스 이동
        if (currentInput.length === 0) {
            if (BS_Press) {
                var preIndex = index - 1;
                inputs[preIndex].focus();
            }
        }
    });
}


for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        handleInput(this);
    });
    
    inputs[i].addEventListener('keydown', function(e) {
        var isNumber = /^\d$/.test(e.key);
        var isNavigationalKey = e.key === "Backspace" || e.key === "Delete" || e.key === "ArrowLeft" || e.key === "ArrowRight";
    
        if (!isNumber && !isNavigationalKey) {
            e.preventDefault();
            showToast("숫자만 입력하세요.");
        }
    });

    inputs[i].addEventListener('input', function() {
        processInput(this);
    });
}

document.getElementById("checkButton").addEventListener("click", handleCheckGuess);

var chances = chances_lock; 
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

    // 중복된 숫자 체크 및 결과 표시
    if (hasDuplicates(guess)) {
        showToast("숫자가 중복되었습니다. 다시 입력해주세요.");
        resetInputs();
        return;
    } else if (guess === randomNumber) {
        handleCorrectGuess(); // 정답을 맞췄을 때 처리
        } else {
        // 정답이 아닌 경우, 결과 표시
            var result = compareNumbers(guess, randomNumber);
            displayResult(result, guess);
    
            // 맞출 수 있는 기회 감소
            chances--;
    
            // 기회 소진 시 게임 종료
            if (chances === 0) {
                showToast("게임 오버! 정답은 " + randomNumber + " 입니다.");
                handleResetGame();
            }
        }
}

function resetInputs() {
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
    var resultString = "<span class='result'>스트라이크: " + result.strike + ", 볼: " + result.ball + "</span>";
    resultDiv.innerHTML += "<p>" + guessString + " - " + resultString + "</p>";
}
function resetGame() {
    chances = chances_lock;
    randomNumber = generateRandomNumber();
    document.getElementById("result").innerHTML = "";
    document.getElementById("input1").focus();
}
