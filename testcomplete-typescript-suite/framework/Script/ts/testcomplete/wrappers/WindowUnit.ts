//USEUNIT VisibleObjectUnit

class Window extends VisibleObject {
    public TCO: TestComplete.Window

    public activate(): this {
        this.TCO.Activate()
        return this
    }

    public minimize(): this {
        this.TCO.Maximize()
        return this
    }

    public maximize(): this {
        this.TCO.Maximize()
        return this
    }

    public restore(): this {
        this.TCO.Restore()
        return this
    }

    public position(x: number, y: number, width: number, height: number): this {
        this.TCO.Position(x, y, width, height)
        return this
    }

    public close(): this {
        this.TCO.Close()
        return this
    }
}