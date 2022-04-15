// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {
        constructor (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get nameA() {
            return `${this.firstname} ${this.lastname}`;
        }
        set nameB(fullname) {
            let arr = fullname.split('');
            this.firstname = arr[0];
            this.lastname = arr[1];
        }
    }
	document.getElementById('run').addEventListener('click', () => {
        let person1 = new Person ('Mara', 'Um');
            console.log(person1.nameA);
            console.log(' ');
            person1.nameS = 'Kana Kang';
            console.log(person1);


        })
    })();


