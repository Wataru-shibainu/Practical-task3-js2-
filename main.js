/*global $*/
// 変数宣言部
let inputValue = document.getElementById('calScreen');
let clickCount = 0;
let firstValue;
let behindValue;
let buttonText;
let answer;

// 数字入力ボタン
$("button").click(function() {
    buttonText = $(this).text();
    clickCount++;
    firstValue = document.getElementById('calScreen').textContent;
    behindValue = firstValue + buttonText;

    // -記号
    if (buttonText == "-") {
        if (clickCount < 2 || firstValue == 0) {
            inputValue.innerText = buttonText;
        }

        else if (!isNaN(firstValue.slice(-1))) {
            inputValue.innerText = behindValue;
        }
    }

    // +*/記号
    else if (buttonText == "+" || buttonText == "*" || buttonText == "/") {
        if (clickCount < 2) {}
        else if (firstValue != 0 && !isNaN(firstValue.slice(-1))) {
            inputValue.innerText = behindValue;
        }
    }

    else if (buttonText == 0 || buttonText == 00) {
        if (firstValue.includes(".") || firstValue != 0) {
            inputValue.innerText = behindValue;
        }
    }

    // 小数点
    else if (buttonText == ".") {
        if (clickCount < 2) {
            if (firstValue == 0) {
                inputValue.innerText = behindValue;
            }
        }
        else if (!isNaN(firstValue.slice(-1)) && !firstValue.includes(".")) {
            inputValue.innerText = behindValue;
        }
    }

    // キャンセル記号
    else if (buttonText == "AC") {
        inputValue.innerText = 0;
    }

    // ＝記号
    else if (buttonText == "=") {

        let x;
        let y;
        let i;

        x = firstValue; // 入力した数式
        y = x.split(/(?=[+ * /]|-)/); // 演算記号別に数字を振り分ける
        // console.log(y);

        for (i = 0; i < y.length; i++) {
            // 演算記号別の処理
            if (y[i].slice(0, 1) == "+") {
                answer += parseFloat(y[i].slice(1));
                console.log(answer);
            }

            else if (y[i].slice(0, 1) == "-") {
                answer += parseFloat(y[i]);
                console.log(answer);
            }

            else if (y[i].slice(0, 1) == "/") {
                answer /= parseFloat(y[i].slice(1));
                // mdAnswer/=divA;
                console.log(answer);
            }

            else if (y[i].slice(0, 1) == "*") {
                answer *= parseFloat(y[i].slice(1));
                // mdAnswer*=multiA;
                console.log(answer);
            }

            // 文字の先頭が数字の場合
            else if (!isNaN(y[i].slice(0, 1))) {
                answer = parseFloat(y[i]);
                console.log(answer);
            }
        }
        inputValue.innerHTML = answer;
    }

    // 数字ボタン（1,2,3,4,5,6,7,8,9）
    else {

        if (clickCount < 2) {
            inputValue.innerText = buttonText;
        }

        else if (firstValue == 0 && firstValue != "0.") {
            inputValue.innerText = buttonText;
        }

        else {
            inputValue.innerText = behindValue;
        }
    }


});
