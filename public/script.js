let clear = document.querySelector(".clear");
let result = document.querySelector(".result");
let containerBefore = document.querySelector(".before");
let before = document.querySelector(".before-text");
let beforeFunction = document.querySelector(".before-function");
let now = document.querySelector(".now");
let calculatorFunction = document.querySelectorAll(".use");
let numberText = document.querySelectorAll(".number-text");
let dot = document.querySelector(".dot");

clear.addEventListener("click", function () {
  before.innerText = "";
  beforeFunction.innerText = "";
  now.innerText = "0";
});

Array.from(calculatorFunction).forEach(function (item) {
  item.addEventListener("click", function () {
    if (before.innerText == "" && now.innerText == 0) return;
    else if (before.innerText == "") {
      before.innerText = now.innerText;
      beforeFunction.innerText = item.innerText;
      now.innerText = 0;
    } else {
      if (beforeFunction.innerText == "*") {
        if (now.innerText == 0) {
          beforeFunction.innerText = item.innerText;
        } else {
          before.innerText *= now.innerText;
          beforeFunction.innerText = item.innerText;
          now.innerText = 0;
        }
      } else if (beforeFunction.innerText == "/") {
        if (now.innerText == 0) {
          beforeFunction.innerText = item.innerText;
        } else {
          before.innerText /= now.innerText;
          beforeFunction.innerText = item.innerText;
          now.innerText = 0;
        }
      } else if (beforeFunction.innerText == "+") {
        if (now.innerText == 0) {
          beforeFunction.innerText = item.innerText;
        } else {
          before.innerText = Number(before.innerText) + Number(now.innerText);
          beforeFunction.innerText = item.innerText;
          now.innerText = 0;
        }
      } else if (beforeFunction.innerText == "-") {
        if (now.innerText == 0) {
          beforeFunction.innerText = item.innerText;
        } else {
          before.innerText -= now.innerText;
          beforeFunction.innerText = item.innerText;
          now.innerText = 0;
        }
      } else if (beforeFunction.innerText == "=") {
        if (now.innerText == 0) {
          beforeFunction.innerText = item.innerText;
        } else {
          if (item.innerText == "*") {
            beforeFunction.innerText = "*";
            now.innerText = 0;
          } else if (item.innerText == "/") {
            beforeFunction.innerText = "/";
            now.innerText = 0;
          } else if (item.innerText == "+") {
            beforeFunction.innerText = "+";
            now.innerText = 0;
          } else if (item.innerText == "-") {
            beforeFunction.innerText = "-";
            now.innerText = 0;
          } else {
            before.innerText = now.innerText;
            beforeFunction.innerText = "=";
            now.innerText = 0;
          }
        }
      }
    }
  });
});

Array.from(numberText).forEach(function (item) {
  item.addEventListener("click", function () {
    if (now.innerText == 0 && !now.innerText.includes(".")) {
      now.innerText = item.innerText;
    } else {
      now.innerText += item.innerText;
    }
  });
});

dot.addEventListener("click", function () {
  if (now.innerText.includes(".")) return;
  else now.innerText += dot.innerText;
});

Array.from(numberText).forEach(function (item) {
  document.addEventListener("keydown", function (e) {
    let result = e.key;
    if (result == item.innerText) {
      if (now.innerText == 0 && !now.innerText.includes(".")) {
        now.innerText = result;
      } else {
        now.innerText += result;
      }
    }
  });
});

Array.from(calculatorFunction).forEach(function (item) {
  document.addEventListener("keydown", function (e) {
    let result = e.key;
    if (result === item.innerText) {
      if (before.innerText == "" && now.innerText == 0) return;
      else if (before.innerText == "") {
        before.innerText = now.innerText;
        beforeFunction.innerText = item.innerText;
        now.innerText = 0;
      } else {
        if (beforeFunction.innerText == "*") {
          if (now.innerText == 0) {
            beforeFunction.innerText = item.innerText;
          } else {
            before.innerText *= now.innerText;
            beforeFunction.innerText = item.innerText;
            now.innerText = 0;
          }
        } else if (beforeFunction.innerText == "/") {
          if (now.innerText == 0) {
            beforeFunction.innerText = item.innerText;
          } else {
            before.innerText /= now.innerText;
            beforeFunction.innerText = item.innerText;
            now.innerText = 0;
          }
        } else if (beforeFunction.innerText == "+") {
          if (now.innerText == 0) {
            beforeFunction.innerText = item.innerText;
          } else {
            before.innerText = Number(before.innerText) + Number(now.innerText);
            beforeFunction.innerText = item.innerText;
            now.innerText = 0;
          }
        } else if (beforeFunction.innerText == "-") {
          if (now.innerText == 0) {
            beforeFunction.innerText = item.innerText;
          } else {
            before.innerText -= now.innerText;
            beforeFunction.innerText = item.innerText;
            now.innerText = 0;
          }
        } else if (beforeFunction.innerText == "=") {
          if (now.innerText == 0) {
            beforeFunction.innerText = item.innerText;
          } else {
            if (item.innerText == "*") {
              beforeFunction.innerText = "*";
              now.innerText = 0;
            } else if (item.innerText == "/") {
              beforeFunction.innerText = "/";
              now.innerText = 0;
            } else if (item.innerText == "+") {
              beforeFunction.innerText = "+";
              now.innerText = 0;
            } else if (item.innerText == "-") {
              beforeFunction.innerText = "-";
              now.innerText = 0;
            } else {
              before.innerText = now.innerText;
              beforeFunction.innerText = "=";
              now.innerText = 0;
            }
          }
        }
      }
    }
  });
});

document.addEventListener("keydown", function (e) {
  let result = e.key;
  if (result == "c") {
    before.innerText = "";
    beforeFunction.innerText = "";
    now.innerText = "0";
  }
  if (result == ".") {
    if (now.innerText.includes(".")) return;
    else now.innerText += dot.innerText;
  }
});
