//USEUNIT ElementUnit
//USEUNIT DefaultSettingsUnit

/** Represents a visible element in the browser. 
 * Note: currently works with Chrome browser
 */
class WebElement extends Element {
  public TCO: TestComplete.WebElement

  /** Verifies the client dimensions of the web element */
  constructor(tco: TestComplete.WebElement) {
    super(tco)
    this.requires("clientWidth")
    this.requires("clientHeight")
    this.requires("clientTop")
    this.requires("clientLeft")
  }

  /** scrolls an element into view if methods are available */
  public scrollToView() {
    if (!this.visible()) {
      if (this.supports("scrollIntoViewIfNeeded")) {
        this.TCO.scrollIntoViewIfNeeded(false)
      } else if (this.supports("scrollIntoView")) {
        this.TCO.scrollIntoView(false)
      }
    }
    return this;
  }

  /** Adds verification of minimum dimensions for the element */
  public isReady(): boolean {
    return super.isReady() &&
      this.TCO.clientWidth >= DefaultSettings.MinElementWidth &&
      this.TCO.clientHeight >= DefaultSettings.MinElementHeight
  }
}