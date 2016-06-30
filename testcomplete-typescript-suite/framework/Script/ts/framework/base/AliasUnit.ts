//USEUNIT ElementUnit
//USEUNIT WebElementUnit
//USEUNIT ImageElementUnit

class Alias extends Base {
  public Parent: TestComplete.Alias
  public TCO: TestComplete.Alias
  public Name: string;

  public child(childaliasname: string, aliasname?: string, parent?: TestComplete.Alias): Alias {
    this.bind(aliasname, parent);
    return new Alias()
      .bind(childaliasname, this.TCO)
  }

  public as<T extends VisibleObject>(Class?: any, aliasname?: string, parent?: TestComplete.Alias): T {
    this.bind(aliasname, parent)
    Class = Class || WebElement
    return new Class(this.TCO)
  }

  public exists(): boolean {
    return this.TCO && this.TCO.Exists
  }

  private refresh(): this {
    this.Parent.RefreshMappingInfo();
    this.TCO = <TestComplete.Alias>this.Parent.WaitAliasChild(this.Name, DefaultSettings.Wait);
    return this;
  }

  public bind(aliasname?: string, parent?: TestComplete.Alias): this {
    if (!this.exists()) {
      this.Parent = parent || Aliases;
      this.Name = aliasname || this.className();
      this.refresh();
      while (!this.exists()) {
        this.refresh();
      }
    }
    return this;
  }
}