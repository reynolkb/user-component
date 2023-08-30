export function formatDate(dateISOString: string) {
  // use slice to remove the 'Z' from the ISO string to set to local time
  // if 'Z' is present it will set the date to UTC
  const dateObj = new Date(dateISOString.slice(0, -1));
  var month = dateObj.getMonth() + 1; // months from 1-12
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  const time = dateObj.toLocaleTimeString('en-US', {
    // en-US can be set to 'default' to use user's browser settings
    hour: 'numeric',
    minute: '2-digit',
  });

  var date = month + '/' + day + '/' + year + ' ' + time;

  if (date.includes('Invalid Date')) {
    throw new Error('Invalid Date, please enter a valid date');
  }

  return date;
}
