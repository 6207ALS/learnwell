// Return current date in UTC
const currentDateInUTC = (): Date => {
  const date = new Date();
  const date_utc = Date.UTC(
    date.getUTCFullYear(), 
    date.getUTCMonth(),
    date.getUTCDate(), 
    date.getUTCHours(),
    date.getUTCMinutes(), 
    date.getUTCSeconds())

  return new Date(date_utc);
}

// Return string based on time difference between upload date and current date
function uploadDate(dateString: string): string {
  const upload: Date = new Date(dateString);
    const current: Date = currentDateInUTC();

    // Convert both dates to UTC timestamps
    const uploadTimestamp = upload.getTime();
    const currentTimestamp = current.getTime();

    // Calculate the difference in milliseconds
    const differenceMs = currentTimestamp - uploadTimestamp;

    // Convert the difference from milliseconds to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    // Determine the returned string based on the days difference
    if (differenceDays > 365) {
      const yearsDifference = Math.floor(differenceDays / 365);
      return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} ago`;
    } else if (differenceDays > 30) {
      const monthsDifference = Math.floor(differenceDays / 30);
      return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
    } else if (differenceDays > 0) {
      return `${differenceDays} day${differenceDays > 1 ? "s" : ""} ago`;
    } else if (differenceDays === 0) {
      // Calculate the difference in hours
      const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
      if (differenceHours > 0) {
        return `${differenceHours} hour${differenceHours > 1 ? "s" : ""} ago`;
      }
      // Calculate the difference in minutes
      const differenceMinutes = Math.floor(differenceMs / (1000 * 60));
      if (differenceMinutes > 5) {
        return `${differenceMinutes} minute${differenceMinutes > 1 ? "s" : ""} ago`;
      }
      return `Uploaded just now`;
    } else {
      return `Uploaded just now`;
    }
}

export default uploadDate;