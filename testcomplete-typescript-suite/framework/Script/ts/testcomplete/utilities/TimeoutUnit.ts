//USEUNIT BaseUnit
//USEUNIT DefaultSettingsUnit

class Timeout extends Base {
    public Name: string
    public MaxTime = DefaultSettings.Wait
    public ShowWarnings = false
    public ErrorOnExpiration = true
    private _started = false

    constructor(name?: string) {
        super()
        this.Name = name
    }

    private check() {
        if (!this._started) {
            this.error("Timeout not started")
        }
    }

    public start(): this {
        aqPerformance.Start(this.Name, this.ShowWarnings)
        this._started = true
        return this
    }

    public value(): number {
        this.check()
        return aqPerformance.Value(this.Name)
    }

    public expired(): boolean {
        let result: boolean
        this.check()
        result = this.value() > this.MaxTime
        if (result && this.ErrorOnExpiration) {
            this.error("Timeout " + this.Name + "expired")
        }
        return result
    }
}