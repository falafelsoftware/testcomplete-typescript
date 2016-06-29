
/**
 * Date and time format specifiers used by aqConvert.DateTimeToFormatStr
 * https://support.smartbear.com/viewarticle/73413/
 * 
 * Usage: 
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
 */
class DateFormatSpecifiers {
    public static AbbreviatedWeekdayName: string = "%a"
    public static FullWeekdayName: string = "%A"
    public static AbbreviatedMonthName: string = "%b"
    public static FullMonthName: string = "%B"
    public static DayOfMonthPadded: string = "%d"
    public static DayOfMonth: string = "%#d"
    public static Hour24Padded: string = "%H"
    public static Hour24: string = "%#H"
    public static Hour12Padded: string = "%I"
    public static Hour12: string = "%#I"
    public static DayOfYearPadded: string = "%j"
    public static DayOfYear: string = "%#j"
    public static MonthPadded: string = "%m"
    public static Month: string = "%#m"
    public static MinutePadded: string = "%M"
    public static Minute: string = "%#M"
    public static AmPm: string = "%p"
    public static SecondPadded: string = "%S"
    public static Second: string = "%#S"
    public static WeekOfYearSundayPadded: string = "%U"
    public static WeekOfYearSunday: string = "%#U"
    public static WeekOfYearMondayPadded: string = "%W"
    public static WeekOfYearMonday: string = "%#W"
    public static Weekday: string = "%w"
    public static ShortLocaleDateAndTime: string = "%c"
    public static LongLocaleDateAndTime: string = "%#c"
    public static ShortLocaleDate: string = "%x"
    public static LongLocaleDate: string = "%#x"
    public static LocaleTime: string = "%X"
    public static ShortYearPadded: string = "%y"
    public static ShortYear: string = "%#y"
    public static LongYearPadded: string = "%Y"
    public static LongYear: string = "%#Y"
    public static TimeZone: string = "%z"
}