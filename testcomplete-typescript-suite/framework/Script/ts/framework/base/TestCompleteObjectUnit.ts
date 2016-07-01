//USEUNIT BaseUnit

/** Represents a TestComplete object, i.e. an object you
 * might see in the Object Browser or spy
 */

class TestCompleteObject extends Base {
  public TCO: TestComplete.RuntimeObject

  /** Accepts a TestComplete object such as Sys, 
   * Browser, a page, or element */
  constructor(tco: TestComplete.RuntimeObject) {
    super()
    if (!tco) {
      this.error("Constructor requires a TestComplete object.")
    }
    this.TCO = tco
  }

  /** Verifies that a property or method is supported by the 
   * TestComplete object */
  public supports(member: string): boolean {
    return aqObject.IsSupported(this.TCO, member)
  }

  /** Logs an error is the underlying TestComplete object does not supported
   * the member
   */
  public requires(member: string): this {
    if (!this.supports(member)) {
      this.error("Missing required member \"" + member + "\".")
    }
    return this
  }
}