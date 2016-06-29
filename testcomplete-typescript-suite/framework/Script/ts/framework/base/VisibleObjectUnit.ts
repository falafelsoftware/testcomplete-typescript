//USEUNIT TestCompleteObjectUnit
//USEUNIT TimeoutUnit

/** Represents a TestComplete on-screen object 
 * with visible properties. */
class VisibleObject extends TestCompleteObject {
  public TCO: TestComplete.VisibleObject

  /** Verifies that the underlying TestComplete object has the 
   * properties and methods required for checking existence, visibility, 
   * picture and screen capture, 
   */
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
    Aliases.RefreshMappingInfo()
    return this
  }

  public picture(): any {
    return this.TCO.Picture()
  }

  protected isReady(): boolean {
    return this.visible()
  }

  /** Wait for the object to exist and be visible.
   * The loop exits when the object is either ready, 
   * or the timeout expires. 
   */
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

  /** Logs a screenshot of the visible object */
  public screenshot(message?: string, additional?: string): this {
    this.whenReady()
    message = message || "Screenshot of " + this.className()
    Log.Picture(this.picture(), message, additional)
    return this
  }
}