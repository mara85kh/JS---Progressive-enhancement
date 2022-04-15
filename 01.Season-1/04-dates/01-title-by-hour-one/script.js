
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    const date = new Date ();
    let hours = date.getHours ();
    
    if (hours <= 18) {
            document.getElementById('target').innerHTML = "Hello";
    } else { 
            document.getElemementById('target').innerHTML = "Good evening";

    }
    
})();
