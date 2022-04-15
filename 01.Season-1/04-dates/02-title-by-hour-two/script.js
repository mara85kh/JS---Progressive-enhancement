
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

  
    const date = new Date();

    let hour = date.getHours().toString();
    let minut = date.getMinutes().toString();

    if (hour + minut <= 1730) {
        document.getElementById('target').innerHTML = 'Hello';
    } else {
        document.getElementById('target').innerHtml = 'Good Evening';
    }

})();
