
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        let a, b;
        a = parseInt(document.getElementById("op-one").value)
        b = parseInt(document.getElementById("op-two").value)

        alert(a + b)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

        let a, b;
        a = parseInt(document.getElementById("op-one").value)
        b = parseInt(document.getElementById("op-two").value)

        alert(a - b)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

        let a, b;
        a = parseInt(document.getElementById("op-one").value)
        b = parseInt(document.getElementById("op-two").value)

        alert(a * b)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        let a, b;
        a = parseInt(document.getElementById("op-one").value)
        b = parseInt(document.getElementById("op-two").value)

        alert(a / b)
    });
})();
