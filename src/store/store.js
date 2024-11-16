import { create } from 'zustand';

const useStore = create((set) => ({
  startDate: '',
  endDate: '',
  recurrencePattern: 'daily',
  recurrenceInterval: 1,
  specificWeekdays: [],
  nthDay: '',
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSpecificWeekdays: (weekdays) => set({ specificWeekdays: weekdays }),
  setNthDay: (day) => set({ nthDay: day }),
}));

export default useStore;
