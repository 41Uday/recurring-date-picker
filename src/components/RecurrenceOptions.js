// RecurrenceOptions.js
import React from 'react';
import useStore from '../store/store';

const RecurrenceOptions = () => {
  const {
    recurrencePattern,
    setRecurrencePattern,
    recurrenceInterval,
    setRecurrenceInterval,
  } = useStore();

  return (
    <div className="space-y-4">
      <div>
        <label>Recurrence Pattern:</label>
        <select
          value={recurrencePattern}
          onChange={(e) => setRecurrencePattern(e.target.value)}
          className="border p-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label>Interval:</label>
        <input
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(Number(e.target.value))}
          className="border p-2"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
