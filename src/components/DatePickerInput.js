// DatePickerInput.js
import React from 'react';
import { format } from 'date-fns';
import useStore from '../store/store';

const DatePickerInput = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useStore();

  return (
    <div className="space-y-4">
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate ? format(new Date(startDate), 'yyyy-MM-dd') : ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>End Date (optional):</label>
        <input
          type="date"
          value={endDate ? format(new Date(endDate), 'yyyy-MM-dd') : ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
      </div>
    </div>
  );
};

export default DatePickerInput;
