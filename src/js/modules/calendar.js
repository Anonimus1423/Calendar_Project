import { russianMonths } from "./updateCalendar.js";

export function showCalendars()
{
    document.getElementById("calendars").classList.add("active");
}
export function nextMonth(elementId)
{
    const thisElement = document.getElementById(elementId);
    thisElement.innerHTML = russianMonths[(russianMonths.findIndex(i => i === thisElement.innerHTML) + 1)] ? russianMonths[(russianMonths.findIndex(i => i === thisElement.innerHTML) + 1)] : russianMonths[0];
}
export function prevMonth(elementId)
{
    const thisElement = document.getElementById(elementId);
    thisElement.innerHTML = russianMonths[(russianMonths.findIndex(i => i === thisElement.innerHTML) - 1)] ? russianMonths[(russianMonths.findIndex(i => i === thisElement.innerHTML) - 1)] : russianMonths[11];
}
export function prevYear(elementId)
{
    const thisElement = document.getElementById(elementId);
    thisElement.innerHTML = Number(thisElement.innerHTML) - 1
}
export function nextYear(elementId)
{
    const thisElement = document.getElementById(elementId);
    thisElement.innerHTML = Number(thisElement.innerHTML) + 1
}
export function generateYearSelector(thisElementId, selectorElementId)
{
    const thisElement = document.getElementById(thisElementId);
    const selectorElement = document.getElementById(selectorElementId);

    for(let i = 0; i < 15; i++)
    {
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.addEventListener("click", changeYear.bind(window, li, thisElementId));
        p.innerHTML = Number(thisElement?.innerHTML) - i;
        li.appendChild(p);
        selectorElement?.appendChild(li);
    }
}
export function changeYear(thisElement, changeElementId)
{
    document.getElementById(changeElementId).innerHTML = thisElement.innerHTML;
    toggleSelector()
}
export function toggleSelector(selector)
{
    if(document.getElementById(selector))
    {
        document.getElementById(selector).classList.toggle("active")
    }
    else 
    {
        selector.classList.toggle("active")
    }
}