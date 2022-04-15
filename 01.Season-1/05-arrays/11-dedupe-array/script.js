// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    (() => {
        const fruits = ['cerise', 'durian', 'pomme', 'poire', 'fraise', 'tomate', 'orange', 'mandarine', 'fraise', 'durian', 'pêche', 'cerise', 'raisin', 'cerise'];
        let uniqueFruits = [];

        document.getElementById('run').addEventListener('click', () => {
            fruits.forEach((f) => {
                if (!uniqueFruits.includes(f)) {
                    uniqueFruits.push(f);
                }

        }); 

        console.log(fruits);
        console.log(uniqueFruits);
    });
    })();

})();
