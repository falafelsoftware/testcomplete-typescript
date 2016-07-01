//USEUNIT BaseUnit

/** Wraps aqDateTime and aqConvert for common 
 * date functions. 
 * Usage:
    //USEUNIT DateTimeUnit
    function test() {
        var today = new DateTime().today();
        var tomorrow = new DateTime().today().addDays(1);
        if (tomorrow.compare(today) == DateTime.Later) {
            Log.Message("Tomorrow is later than today");
        }
    }
*/

enum DateTimeCompareResult {
    Earlier = -1,
    Equal = 0,
    Later = 1
}

class DateTime extends Base {
    public TCO: TestComplete.DateTime
    // Get an optional DateTime value, e.g. aqDateTime.Today()
    // Defaults to "Now""
    constructor(tco?: TestComplete.DateTime) {
        super()
        this.TCO = tco || aqDateTime.Now()
    }

    public compare(date: DateTime): DateTimeCompareResult {
        return <DateTimeCompareResult>aqDateTime.Compare(this.TCO, date.TCO)
    }

    public asDate(): this {
        this.TCO = aqDateTime.SetDateElements(
            this.year(this.TCO),
            this.month(this.TCO),
            this.day(this.TCO))
        return this
    }

    public assign(date: DateTime): this {
        this.TCO = date.TCO
        return this
    }

    public year(date: TestComplete.DateTime): number {
        return aqDateTime.GetYear(date)
    }

    public month(date: TestComplete.DateTime): number {
        return aqDateTime.GetMonth(date)
    }

    public day(date: TestComplete.DateTime): number {
        return aqDateTime.GetDay(date)
    }

    public now(): this {
        this.TCO = aqDateTime.Now()
        return this
    }

    public today(): this {
        this.TCO = aqDateTime.Today()
        return this
    }

    public addDays(days: number): this {
        this.TCO = aqDateTime.AddDays(this.TCO, days)
        return this
    }

    public addHours(hours: number): this {
        this.TCO = aqDateTime.AddHours(this.TCO, hours)
        return this
    }

    public toString(format?: string) {
        if (!format) {
            return aqConvert.DateTimeToStr(this.TCO)
        } else {
            return aqConvert.DateTimeToFormatStr(this.TCO, format)
        }
    }
}