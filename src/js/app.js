import * as flsFunctions from "./modules/functions.js";
import updateCalendar from "./modules/updateCalendar.js";
import { showCalendars, nextMonth, prevMonth, prevYear, nextYear, changeYear, toggleSelector } from "./modules/calendar.js";

flsFunctions.isWebp();
updateCalendar()

window.showCalendars = showCalendars;
window.nextMonth = nextMonth;
window.prevMonth = prevMonth;
window.prevYear = prevYear;
window.nextYear = nextYear;
window.changeYear = changeYear;
window.toggleSelector = toggleSelector;
