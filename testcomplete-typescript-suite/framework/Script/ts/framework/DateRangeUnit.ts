//USEUNIT BaseUnit
//USEUNIT DateTimeUnit

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
        if (this.Start.compare(this.End) == DateTime.Later){
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
    
    public toString(format: string): string {
        return this.Start.toString(format)
            + " - " +
            this.End.toString(format);
    }
}