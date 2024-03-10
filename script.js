// Array of five-letter English words
const words = ['ALBUM', 'ALIVE', 'AMBER', 'ANVIL', 'APPLE', 'ATTIC', 'BLISS', 'BRAVE', 'BRICK', 'CAMEO', 'CANDY', 'CHAIR', 'CLOUD', 'CRAZY', 'DELTA', 'DOUGH', 'DRAMA', 'DRIVE', 'EAGLE', 'EARTH', 'EIGHT', 'EPOCH', 'FAITH', 'FLAIR', 'FLAME', 'FLUTE', 'FROST', 'GAMMA', 'GLASS', 'GRACE', 'GRAND', 'GREEN', 'HAPPY', 'HASTE', 'HEART', 'HORSE', 'HUMOR', 'IMAGE', 'INERT', 'IVORY', 'JAZZY', 'JEWEL', 'JUMBO', 'KAYAK', 'KIDDO', 'KINGS', 'KNIFE', 'KNOCK', 'LIMBO', 'LIGHT', 'MAGIC', 'MANGO', 'MIRTH', 'MOUNT', 'NIGHT', 'NOBLE', 'NORTH', 'OASIS', 'OCEAN', 'OLIVE', 'ONSET', 'PANDA', 'PENNY', 'PIXEL', 'PULSE', 'QUART', 'QUEST', 'QUIET', 'QUICK', 'RADIO', 'RIVER', 'ROBOT', 'ROCKY', 'SALAD', 'SALSA', 'SLEEK', 'SMILE', 'SWORD', 'TABLE', 'TANGO', 'THUMB', 'TULIP', 'UMBRA', 'UNION', 'URBAN', 'VALOR', 'VALVE', 'VOICE', 'WATER', 'WHALE', 'WISPY', 'WORLD', 'XYLOP', 'YACHT', 'YIELD', 'YOUTH', 'YUMMY', 'ZEBRA', 'ZESTY'];
// Get a random index within the words array length
const randomIndex = Math.floor(Math.random() * words.length);
// Set the answer variable to a randomly selected word
const answer = words[randomIndex];
let tryCount = 0;
const tryCountDisplay = document.getElementById("tryCountDisplay");
let inputs = document.querySelectorAll(".input");
document.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      let newValue = event.data;
      if (/^[a-zA-Z]$/.test(newValue)) {
        event.target.value = event.target.value.toUpperCase();
        if (event.target.value.length === 1) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      } else {
        input.value = "";
      }
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && index > 0) {
        input.value = "";
        inputs[index - 1].focus();
      }
    });
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.querySelector("#check-btn").click();
  }
});
document.querySelector("#check-btn").addEventListener("click", function () {
  let allInputsFilled = true;
  inputs.forEach((input) => {
    const value = input.value.trim().toUpperCase(); // Remove leading and trailing whitespace
    if (!/^[a-zA-Z]$/.test(value)) {
      allInputsFilled = false;
      return;
    }
  });

  if (allInputsFilled) {
    tryCount++; // 시도 횟수 증가
    tryCountDisplay.textContent = tryCount;
    inputs.forEach((input, index) => {
      const value = input.value.toUpperCase().trim();
      if (value === answer[index]) {
        input.style.backgroundColor = "lightgreen";
        input.classList.replace("input", "output");
      } else if (answer.includes(value)) {
        input.style.backgroundColor = "yellow";
        input.classList.replace("input", "output");
      } else {
        input.style.backgroundColor = "lightgrey";
        input.classList.replace("input", "output");
      }
    });
    // Disable current inputs and show new inputs
    inputs.forEach((input) => {
      input.disabled = true;
    });
    let allCorrect = true;
      inputs.forEach((input, index) => {
        const value = input.value.toUpperCase().trim();
        if (value !== answer[index]) {
          allCorrect = false;
        }
      });
      if (allCorrect) {
        // 모든 입력이 정답이면 성공 문구를 표시
        alert("성공!");
      } else {
        // 정답이 아닌 경우에 대한 처리
        const newInputsTemplate =
          '<div class="word-input">\
                <input class="input" maxlength="1" pattern="[a-zA-Z]">\
                <input class="input" maxlength="1" pattern="[a-zA-Z]">\
                <input class="input" maxlength="1" pattern="[a-zA-Z]">\
                <input class="input" maxlength="1" pattern="[a-zA-Z]">\
                <input class="input" maxlength="1" pattern="[a-zA-Z]">\
            </div>';
        document
          .querySelector(".word-align")
          .insertAdjacentHTML("beforeend", newInputsTemplate);
        // Update the 'inputs' variable after adding new inputs
        inputs = document.querySelectorAll(".input");

        inputs[inputs.length - 5].focus();
        // Add event listeners to new inputs for conversion to uppercase and auto-focus
        inputs.forEach((input, index) => {
          input.addEventListener("input", (event) => {
            let newValue = event.data;
            if (/^[a-zA-Z]$/.test(newValue)) {
              event.target.value = event.target.value.toUpperCase();
              if (event.target.value.length === 1) {
                if (index < inputs.length - 1) {
                  inputs[index + 1].focus();
                }
              }
            } else {
              input.value = "";
            }
          });
          input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && index > 0) {
              input.value = "";
              inputs[index - 1].focus();
            }
          });
        });
      }
  }
});
document.querySelector("#refresh-btn").addEventListener("click", function () {
  location.reload();
});
