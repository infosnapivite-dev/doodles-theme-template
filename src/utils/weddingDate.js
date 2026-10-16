/**
 * Wedding Date Configuration & Calendar Utility
 * Target Wedding Date: November 15, 2026 at 14:30 PM (Indian Standard Time) — upcoming date next month (~30 days from today)
 * Synchronizes Hero Date Stack, Calendar, and Countdown Timer 100%.
 */

// Explicit Target Date: November 15, 2026 at 14:30 IST
export const WEDDING_DATE = new Date('2026-11-15T14:30:00+05:30');

export function getWeddingDateInfo(targetDate = WEDDING_DATE) {
  const day = String(targetDate.getDate()).padStart(2, '0');
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const year = String(targetDate.getFullYear());
  const monthName = targetDate.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const weekday = targetDate.toLocaleDateString('en-US', { weekday: 'long' });

  return {
    date: targetDate,
    day,
    month,
    year,
    monthName,
    weekday
  };
}

export function generateCalendar(targetDate = WEDDING_DATE) {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const weddingDay = targetDate.getDate();

  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday, ...
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 28..31

  const calendarDays = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const monthName = targetDate.toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  const weekday = targetDate.toLocaleDateString('en-US', { weekday: 'long' });

  return {
    year,
    month,
    weddingDay,
    monthName,
    weekday,
    firstDayOfWeek,
    daysInMonth,
    calendarDays
  };
}
