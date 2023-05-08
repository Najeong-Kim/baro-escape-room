export const compareDates = (date1: Date, date2: Date) => {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
}

export const getSelectedDate = (selectedDate: string) => {
  switch (selectedDate) {
    case "today":
      return new Date()
    case "tomorrow":
      const nextDate = new Date()
      nextDate.setDate(new Date().getDate() + 1)

      return nextDate
    case "thisweek":
      const nextweekDate = new Date()
      nextweekDate.setDate(new Date().getDate() + 7)

      return nextweekDate
    default:
      return new Date()
  }
}
