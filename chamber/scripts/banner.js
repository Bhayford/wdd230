// Get the current day
const currentDate = new Date();
const currentDay = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

// Get the banner element
const weekdayBanner = document.getElementById('weekdayBanner');

// Days when the banner should be displayed (Monday, Tuesday, and Wednesday)
const displayDays = [1, 2, 3]; // Adjust this array as needed

// Check if today is one of the display days
if (displayDays.includes(currentDay)) {
  // Show the banner
  weekdayBanner.style.display = 'block';
} else {
  // Hide the banner for other days
  weekdayBanner.style.display = 'none';
}
