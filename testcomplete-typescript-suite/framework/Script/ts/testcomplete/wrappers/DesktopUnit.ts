//USEUNIT RuntimeObjectUnit

class Desktop extends RuntimeObject {
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
