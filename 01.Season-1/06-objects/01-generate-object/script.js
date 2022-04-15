// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {

    document.getElementById('run').addEventListener('click', () => {
        const obj = {
            firstname: 'Mara',
            lastname: 'Um', 
            age: 36,
            town: 'Namur',
            country: 'Belgium',
        };

        console.log('My name is ' +obj.firstname + '' + obj.lastname + ", I'm  " + obj.age + ' years old. And I live in ' + obj.town + ", " + obj.country);
    });
})();
