//USEUNIT DateTimeUnit
//USEUNIT DateFormatSpecifiersUnit
function testDateFormatSpecifiers() {
    var timeStamp = DateFormatSpecifiers.MonthPadded +
        DateFormatSpecifiers.DayOfMonthPadded +
        DateFormatSpecifiers.LongYearPadded +
        DateFormatSpecifiers.Hour24Padded +
        DateFormatSpecifiers.MinutePadded +
        DateFormatSpecifiers.SecondPadded
    var today = new DateTime()
    Log.Message(today.toString(timeStamp))
} 