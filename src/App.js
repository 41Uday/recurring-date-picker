import React from 'react';
import DatePickerInput from './components/DatePickerInput';
import RecurrenceOptions from './components/RecurrenceOptions';
import MiniCalendar from './components/MiniCalendar';

const DatePicker = () => {
  return (
    <div className="flex flex-column items-center justify-center min-h-screen">
      <div className="p-6 border rounded ">
        <h2 className="text-2xl mb-4">Recurring Date Picker</h2>
        <DatePickerInput />
        <RecurrenceOptions />
        <MiniCalendar />
      </div>
    </div>
  );
};

export default DatePicker;
