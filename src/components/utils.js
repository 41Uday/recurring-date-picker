// utils/generateDates.js
import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  setDay,
  getDate,
  getDay,
} from 'date-fns';

export function generateRecurringDates(
  startDate,
  endDate,
  pattern,
  interval,
  selectedDays = [],
  nthDay = null
) {
  if (!startDate) return [];

  const dates = [];
  let currentDate = new Date(startDate);

  while (!endDate || currentDate <= new Date(endDate)) {
    if (pattern === 'weekly' && selectedDays.length) {
      selectedDays.forEach((day) => {
        const nextDate = setDay(currentDate, day, { weekStartsOn: 1 });
        if (
          nextDate >= currentDate &&
          (!endDate || nextDate <= new Date(endDate))
        ) {
          dates.push(new Date(nextDate));
        }
      });
      currentDate = addWeeks(currentDate, interval);
      continue;
    } else if (pattern === 'monthly' && nthDay) {
      if (getDate(currentDate) === nthDay) {
        dates.push(new Date(currentDate));
      }
      currentDate = addMonths(currentDate, interval);
      continue;
    } else {
      dates.push(new Date(currentDate));
    }

    switch (pattern) {
      case 'daily':
        currentDate = addDays(currentDate, interval);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, interval);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, interval);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, interval);
        break;
      default:
        break;
    }

    if (dates.length > 100) break; // Limit dates to prevent performance issues
  }

  return dates;
}
