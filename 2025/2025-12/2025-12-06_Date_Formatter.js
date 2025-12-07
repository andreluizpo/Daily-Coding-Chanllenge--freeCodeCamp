/*
freeCodeCamp - Daily Coding Challenges (12/06/2025) 

*Date Formatter*

Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".

- The given month will be the full English month name. For example: "January", "February", etc.
- In the return value, pad the month and day with leading zeros if necessary to ensure two digits.

For example, given "December 6, 2025", return "2025-12-06".
*/

function formatDate(dateString) {
    const mapMonths = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    };

    let month = "";
    let day = "";
    let year = "";

    const parts = dateString.split(" ");

    parts.forEach((part) => {
        if (mapMonths[part]) month = String(mapMonths[part]).padStart(2, "0");

        if (part.endsWith(","))
            day = String(part.replace(",", "")).padStart(2, "0");

        if (/^\d{1,4}$/.test(part)) year = part;
    });

    return `${year}-${month}-${day}`;
}

formatDate("December 6, 2025"); // should return "2025-12-06".
formatDate("January 1, 2000"); // should return "2000-01-01".
formatDate("November 11, 1111"); // should return "1111-11-11".
formatDate("September 7, 512"); // should return "512-09-07".
formatDate("May 4, 1950"); // should return "1950-05-04".
formatDate("February 29, 1992"); // should return "1992-02-29".
