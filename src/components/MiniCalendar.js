// MiniCalendar.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { generateRecurringDates } from './utils';
import useStore from '../store/store';
import { format } from 'date-fns';

const MiniCalendar = () => {
  const {
    startDate,
    endDate,
    recurrencePattern,
    recurrenceInterval,
    selectedDays,
    nthDay,
  } = useStore();

  const [dates, setDates] = useState([]);

  // Generate dates based on the user's input and customization
  useEffect(() => {
    const generatedDates = generateRecurringDates(
      startDate,
      endDate,
      recurrencePattern,
      recurrenceInterval,
      selectedDays,
      nthDay
    );
    setDates(generatedDates);
  }, [
    startDate,
    endDate,
    recurrencePattern,
    recurrenceInterval,
    selectedDays,
    nthDay,
  ]);

  // Highlight recurring dates in the calendar view
  const tileClassName = ({ date }) =>
    dates.some((d) => format(d, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'))
      ? 'highlight'
      : '';

  return (
    <div className="mt-6">
      <Calendar
        tileClassName={tileClassName}
        onActiveStartDateChange={({ activeStartDate }) =>
          console.log(activeStartDate, 'clicked_year')
        }
      />
      <style jsx>{`
        .highlight {
          background-color: #4caf50 !important;
          color: white !important;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default MiniCalendar;
