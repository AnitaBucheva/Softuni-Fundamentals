function solve(pages, pagesPerHour, daysToRead) {
    let timeToRead = pages / pagesPerHour;
    let requiredHoursPerDay = timeToRead / daysToRead;
    console.log(requiredHoursPerDay);
}
solve(212,
    20 ,
    2 
)
solve(432,
    15 ,
    4 
    )