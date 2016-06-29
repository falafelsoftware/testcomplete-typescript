//USEUNIT TestCompleteObjectUnit

/** Wraps the Sys.Desktop object. 
 * Allows you to log the desktop dimensions,
 * and take a screenshot of the desktop.
 * 
 * Note: does not descend from Visibleobject
 * because the Desktop has no Exists property 
 */
class Desktop extends TestCompleteObject {
    public TCO: TestComplete.Desktop;

    constructor() {
        super(Sys.Desktop);
        this.requires("Picture");
        this.requires("Width")
        this.requires("Height")
    }

    public picture(): any {
        return this.TCO.Picture();
    }

    public width(): number {
        return this.TCO.Width
    }

    public height(): number {
        return this.TCO.Height
    }

    public screenshot(message?: string, additional?: string): this {
        message = message || "Screenshot of " + this.className();
        Log.Picture(this.picture(), message, additional);
        return this;
    }
}
