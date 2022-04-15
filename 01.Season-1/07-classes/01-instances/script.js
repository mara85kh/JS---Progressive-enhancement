// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById('run').addEventListener('click', () => {

        const cat1 = new Cat('Skity, 9 years old');
        const cat2 = new Cat('Pixel, 6 years old');

        console.log(cat1);
        console.log(cat2);

    })
})();
