const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Sep 30, 2025 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            endDate = countDown - now;

        document.getElementById('days').innerText = Math.floor(endDate / (day)),
            document.getElementById('hours').innerText = Math.floor((endDate % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((endDate % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((endDate % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)