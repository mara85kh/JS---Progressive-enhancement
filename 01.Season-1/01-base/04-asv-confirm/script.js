
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE

// Age, Genre, Ville //

var Age, Gender, Town;
alert("Please enter all required info");
Age = Number(prompt ("Give me your age "));
Gender = prompt("Give me your gender ");
Town = prompt("Give me your town ");

confirm("Are all these infos correct? " + Age + Gender +  Town)

while(confirm("Are all these infos correct? " + Age + Gender +  Town)) {

Age = Number(prompt ("Give me your age "));
Gender = prompt("Give me your gender ");
Town = prompt("Give me your town ");
}



})();
