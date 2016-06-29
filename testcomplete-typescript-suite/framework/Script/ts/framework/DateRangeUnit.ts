//USEUNIT BaseUnit
//USEUNIT DateTimeUnit

/** Create a range of dates. 
 * Usage: 
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
 */
class DateRange extends Base {
    private _context: DateTime;
    public Start: DateTime;
    public End: DateTime;
    public TimeStamp: DateTime;
    constructor(date?: TestComplete.DateTime) {
        super();
        this.Start = new DateTime(date);
        this.End = new DateTime(date);
        this._context = this.Start;
        this.TimeStamp = new DateTime();
    }

    private update(): void {
        if (this.Start.compare(this.End) == DateTimeCompareResult.Later){
            this.End.assign(this.Start)
        }
    }

    public from(): this {
        this._context = this.Start;
        return this;
    }

    public to(): this {
        this._context = this.End;
        return this;
    }

    public today(): this {
        this._context.today();
        return this;
    }

    public addDays(days: number): this {
        this._context.addDays(days);
        this.update();
        return this;
    }

    public addHours(hours: number): this {
        this._context.addHours(hours);
        this.update();
        return this;
    }
    
    public toString(format: string = ""): string {
        return this.Start.toString(format)
            + " - " +
            this.End.toString(format);
    }
}