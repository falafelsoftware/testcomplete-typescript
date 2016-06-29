//USEUNIT DateRangeUnit

function testDateRange() {
    var dateRange = new DateRange()
        .from()
        .addDays(1) // Start date is tomorrow
        .to()
        .addDays(7) // End date is seven days from tomorrow
    Log.Message(dateRange.toString())
    // example output: 7/2/2016 12:21:44 PM - 7/9/2016
}