/*
freeCodeCamp - Daily Coding Challenges (11/06/2025) 

*Weekday Finder*
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

 - "Sunday"
 - "Monday"
 - "Tuesday"
 - "Wednesday"
 - "Thursday"
 - "Friday"
 - "Saturday"
Be sure to ignore time zones.
*/

function getWeekday(dateString) {
    const daysOFWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);

    return daysOFWeek[date.getUTCDay()];
}

getWeekday("2025-11-06"); // should return Thursday.
getWeekday("1999-12-31"); // should return Friday.
getWeekday("1111-11-11"); // should return Saturday.
getWeekday("2112-12-21"); // should return Wednesday.
getWeekday("2345-10-01"); // should return Monday.
