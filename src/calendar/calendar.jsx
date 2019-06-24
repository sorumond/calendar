import React from 'react';
import './calendar.css';
import '../pop-up/pop-up.css';
import {PopUp} from "../pop-up/pop-up";


const daysInMonth = function (date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
};

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            isModalOpened: false,
        };

        this.moveForward = this.moveForward.bind(this);
        this.movePrevious = this.movePrevious.bind(this);
        this.currentMonth = this.currentMonth.bind(this);
        this.openModal = this.openModal.bind(this);
    };

    openModal() {
        this.setState(state => ({isModalOpened: !state.isModalOpened}));
    }

    moveForward() {
        this.setState(state => ({
            month: state.month + 1
        }))
    }

    movePrevious() {
        this.setState(state => ({
            month: state.month - 1
        }))
    }

    currentMonth() {
        this.setState(state => ({
            month: new Date().getMonth()
        }))
    }

    render() {
        const calendarDays = createCalendar(this.state.year, this.state.month);
        return (<div className={'main'}>
            <div className="calendar">
                <div className="calendar__buttons">
                    <button onClick={this.movePrevious}>Попередній місяць</button>
                    <button onClick={this.currentMonth}>Сьогодні</button>
                    <button onClick={this.moveForward}>Наступний місяць</button>
                </div>
                {this.state.month + 1}
                <div className="calendar__header">
                    <div className="calendar__dayOfWeek">пн</div>
                    <div className="calendar__dayOfWeek">вт</div>
                    <div className="calendar__dayOfWeek">ср</div>
                    <div className="calendar__dayOfWeek">чт</div>
                    <div className="calendar__dayOfWeek">пт</div>
                    <div className="calendar__dayOfWeek">сб</div>
                    <div className="calendar__dayOfWeek">нд</div>
                </div>
                <div className="calendar__body">
                    {calendarDays.map((day, i) => {
                        return day ? <div className={'calendar__day'} key={i} onClick={this.openModal}>
                            <div className={'calendar__date'}>{day}</div>
                            <div className={'calendar__event'}></div>
                        </div> : <div className={'calendar__day'}></div>
                    })}
                </div>
            </div>
            {this.state.isModalOpened ? <PopUp/> : null}
        </div>)
    };
}

let monthName = ["Січень", "Лютий", "Березнь", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

function createCalendar(year, month) {
    let body = [];
    let date = new Date(year, month);
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