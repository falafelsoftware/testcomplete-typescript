//USEUNIT BaseUnit

class DateTime extends Base {
    public TCO: TestComplete.DateTime
    public static Earlier = -1
    public static Equal = 0
    public static Later = 1
    constructor(tco?: TestComplete.DateTime) {
        super()
        this.TCO = tco || aqDateTime.Now()
    }

    public compare(date: DateTime): number {
        return aqDateTime.Compare(this.TCO, date.TCO)
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