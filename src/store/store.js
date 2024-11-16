// // store.js
// import { create } from 'zustand';

// const useStore = create((set) => ({
//   startDate: null,
//   endDate: null,
//   recurrencePattern: 'daily',
//   recurrenceInterval: 1,
//   selectedDays: [],
//   nthDay: null,
//   dates: [],

//   setStartDate: (date) => set({ startDate: date }),
//   setEndDate: (date) => set({ endDate: date }),
//   setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
//   setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
//   setSelectedDays: (days) => set({ selectedDays: days }),
//   setNthDay: (day) => set({ nthDay: day }),
//   setDates: (dates) => set({ dates }),
// }));

// export default useStore;

// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  startDate: '',
  endDate: '',
  recurrencePattern: 'daily', // default to daily
  recurrenceInterval: 1, // every X days/weeks/months/years
  specificWeekdays: [], // to store selected weekdays for weekly recurrence
  nthDay: '', // nth day (e.g., second Tuesday) for monthly recurrence
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSpecificWeekdays: (weekdays) => set({ specificWeekdays: weekdays }),
  setNthDay: (day) => set({ nthDay: day }),
}));

export default useStore;
