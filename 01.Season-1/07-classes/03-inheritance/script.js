// 07-classes/03-inheritance/script.js - 7.3: inheritance

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal {
        static greeting = 'Waf';
        constructor(name) {
            super();
            (this.name = name);
        }
    }

    class Cat extends Animal {
        static greeting = 'Miaou';
        constructor(name) {
            super();    
            (this.name = name);
        }
    }
document.getElementById('run').addEventListener('click', () => {
    const myDog = new Dog('Kloé');
    const myCat = new Cat('Le Roux');
    console.log(myDog.sayHello());
    console.log(myCat.sayHello());
});

})();
