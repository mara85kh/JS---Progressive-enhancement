
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    document.getElementById('run').addEventListener('click', () => {
        let year = document.getElementById('dob-year');
        let date = new Date();
        let current = date.getFullYear();

        alert(' You are ' + (current - year.value) + ' years old mais en vrai tu as 25 ans et les autres c est des jaloux <3 ');

    });

})();
