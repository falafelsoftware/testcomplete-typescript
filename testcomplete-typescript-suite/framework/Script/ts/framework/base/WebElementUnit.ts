//USEUNIT ElementUnit
//USEUNIT DefaultSettingsUnit

class WebElement extends Element {
  public TCO: TestComplete.WebElement

  constructor(tco: TestComplete.WebElement) {
    super(tco)
    this.requires("clientWidth")
    this.requires("clientHeight")
    this.requires("clientTop")
    this.requires("clientLeft")
  }

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

  public isReady(): boolean {
    return super.isReady() &&
      this.TCO.clientWidth >= DefaultSettings.MinElementWidth &&
      this.TCO.clientHeight >= DefaultSettings.MinElementHeight
  }
}