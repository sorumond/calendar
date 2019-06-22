const daysInMonth = function (date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

function createCalendar(id, year, month) {
    let body = [];
    let date = new Date(year, month - 1);
    let startPosisiton = 0;
    if (date.getDay() === 0) {
        startPosisiton = 7;
    } else {
        startPosisiton = date.getDay();
    }
    for (let i = 1; i < startPosisiton; i++) {
        body.push('');
    }
    for (let i = 1; i <= daysInMonth(date); i++) {
        body.push(i);
    }
    for (let i = daysInMonth(date) + startPosisiton - 1; i % 7; i++) {
        body.push('');
    }
    return body;
}


console.log(createCalendar('', 2019, 6));