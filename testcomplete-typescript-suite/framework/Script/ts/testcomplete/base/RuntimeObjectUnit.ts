//USEUNIT BaseUnit

class RuntimeObject extends Base {
  public TCO: TestComplete.RuntimeObject;

  constructor(tco: TestComplete.RuntimeObject) {
    super();
    if (!tco) {
      this.error("Constructor requires a TestComplete object.");
    }
    this.TCO = tco;
  }

  public supports(member: string): boolean {
    return aqObject.IsSupported(this.TCO, member)
  }

  public requires(member: string): this {
    if (!this.supports(member)) {
      this.error("Missing required member \"" + member + "\".");
    }
    return this;
  }
}