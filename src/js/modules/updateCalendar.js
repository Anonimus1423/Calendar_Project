import { generateYearSelector } from "./calendar.js";

export const russianMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

let dateFrom = new Date("1999-10-11");
let dateTo = new Date()

let firstDayDivContainer = document.getElementById("calendar-days")
let secondDayDivContainer = document.getElementById("calendar-days-2")

export default function updateCalendar()
{
    let i = 1;
    let day = 1;
    let day1 = 1;

    const firstDayWeek = new Date(dateTo.getFullYear(), dateTo.getMonth(), 0)
    const firstDayWeek1 = new Date(dateFrom.getFullYear(), dateFrom.getMonth(), 0)

    document.getElementById("year-2").innerHTML = dateTo.getFullYear();
    document.getElementById("month-2").innerHTML = russianMonths[dateTo.getMonth()];
    document.getElementById("year").innerHTML = dateFrom.getFullYear();
    document.getElementById("month").innerHTML = russianMonths[dateFrom.getMonth()];

    while(i <= 42)
    {
        i++;
        const firstDayDiv = document.createElement("div")
        const secondDayDiv = document.createElement("div")
        firstDayDiv.classList.add("calendar__item")
        secondDayDiv.classList.add("calendar__item")
        if(i < daysInMonth(dateTo.getFullYear(), dateTo.getMonth()) + firstDayWeek1.getDay() && i > firstDayWeek1.getDay())
        {
            secondDayDiv.classList.add("active");
            const dayContent = document.createElement("p")
            dayContent.innerHTML = day;
            secondDayDiv.appendChild(dayContent);
            day++;
        }
        if(i < daysInMonth(dateFrom.getFullYear(), dateFrom.getMonth()) + firstDayWeek.getDay() && i > firstDayWeek.getDay())
        {
            firstDayDiv.classList.add("active");
            const dayContent = document.createElement("p")
            dayContent.innerHTML = day1;
            firstDayDiv.appendChild(dayContent);
            day1++;
        }
        secondDayDivContainer?.appendChild(secondDayDiv);
        firstDayDivContainer?.appendChild(firstDayDiv);
    }
    generateYearSelector("year", "year-selector");
    generateYearSelector("year-2", "year-2-selector");
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}