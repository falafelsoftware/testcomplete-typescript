//USEUNIT VisibleObjectUnit

/** Wraps a visible on-screen element that can have actions 
 *  performed on it, i.e. set text, keys, click.
*/
class Element extends VisibleObject {
  public TCO: TestComplete.Element;

  constructor(tco: TestComplete.Element) {
    super(tco);
    this.requires("Enabled");
  }

  public enabled(): boolean {
    return this.TCO.Enabled;
  }

  public isReady(): boolean {
    return super.isReady() && this.enabled();
  }

  /** Send keystrokes to the element. */
  public keys(text: string): this {
    this.whenReady();
    if (this.supports("Keys")) {
      this.TCO.Keys(text);
    }
    return this;
  }

  /** Assign text to the element */
  public setText(text: string): this {
    this.whenReady();
    // assign the text all at once if supported
    if (this.supports("SetText")) {
      this.TCO.SetText(text);
      // send keystrokes if necessary, e.g. TextArea elements  
    } else if (this.supports("Keys")) {
      this.TCO.Keys(text);
    }
    return this;
  }

  public click(): this {
    this.whenReady();
    if (this.supports("Click")) {
      this.TCO.Click();
    }
    return this;
  }

  /** A simple verification that value is contained 
   * in the contentText property */
  public check(value: string, prop: string = "contentText", comparator: number = BuiltIn.cmpContains): this {
    aqObject.CheckProperty(this.TCO, prop, comparator, value);
    return this;
  }

}