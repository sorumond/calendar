import React from 'react';
import './calendar.css';

const daysInMonth = function (date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

export function Calendar() {
    const calendarDays = createCalendar(2019, 6);
  return (<div className="calendar">
      <div className="calendar__header">
          <div className="calendar__days">пн</div>
          <div className="calendar__days">вт</div>
          <div className="calendar__days">ср</div>
          <div className="calendar__days">чт</div>
          <div className="calendar__days">пт</div>
          <div className="calendar__days">сб</div>
          <div className="calendar__days">нд</div>
      </div>
      <div className="calendar__body">
          {calendarDays.map((day, i) => {
              return day ? <div className={'calendar__date'} key={i}>{day}</div> : <div className={'calendar__date'}></div>
          })}
      </div>
  </div>)
};



let monthName = ["Січень", "Лютий", "Березнь", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

function createCalendar(year, month) {
    let body = [];
    let date = new Date(year, month - 1);
    let startPosisiton = 0;
    if (daysInMonth(date) === 0) {
        startPosisiton = 7;
    } else {
        startPosisiton = daysInMonth(date);
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