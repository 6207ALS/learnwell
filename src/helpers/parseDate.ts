const months: Months = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December",
}

// Convert Date/timestamp into readable format
function parseDate(dateString: string): string {
	const date = new Date(dateString);

	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();

	return `${months[month]} ${day}, ${year}`
}

export default parseDate