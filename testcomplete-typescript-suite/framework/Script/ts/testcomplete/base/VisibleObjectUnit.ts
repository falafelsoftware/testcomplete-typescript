//USEUNIT RuntimeObjectUnit
//USEUNIT TimeoutUnit

class VisibleObject extends RuntimeObject {
  public TCO: TestComplete.VisibleObject

  constructor(tco: TestComplete.VisibleObject) {
    super(tco)
    this.requires("Exists")
    this.requires("Visible")
    this.requires("Picture")
    this.requires("WaitProperty")
    this.requires("Top")
    this.requires("Left")
    this.requires("Width")
    this.requires("Height")
  }

  public exists(): boolean {
    return this.TCO && this.TCO.Exists
  }

  public visible(): boolean {
    return this.exists() && this.TCO.Visible
  }

  public refresh(): this {
    return this
  }

  public picture(): any {
    return this.TCO.Picture()
  }

  protected isReady(): boolean {
    return this.visible()
  }

  protected whenReady(): this {
    let timeout = new Timeout(this.className()).start()
    this.refresh()
    while (!this.isReady() && !timeout.expired()) {
      this.refresh()
    }
    return this
  }

  public verify(): this {
    this.whenReady()
    return this
  }

  public top(): number {
    return this.TCO.Top
  }

  public left(): number {
    return this.TCO.Left
  }

  public width(): number {
    return this.TCO.Width
  }

  public height(): number {
    return this.TCO.Height
  }

  public screenshot(message?: string, additional?: string): this {
    this.whenReady()
    message = message || "Screenshot of " + this.className()
    Log.Picture(this.picture(), message, additional)
    return this
  }
}