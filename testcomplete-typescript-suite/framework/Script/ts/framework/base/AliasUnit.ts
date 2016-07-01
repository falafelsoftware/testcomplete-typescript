//USEUNIT ElementUnit
//USEUNIT WebElementUnit
//USEUNIT ImageElementUnit

/** Represents a TestComplete alias but defers referencing 
 * the alias until needed, i.e. bind() is called.
*/
class Alias extends Base {
  // The parent of the alias object. 
  // Not assigned until bind()
  public Parent: TestComplete.Alias
  // The alias object. 
  // Not assigned until bind()
  public TCO: TestComplete.Alias
  // The name of the alias, used to 
  // keep track of identity, without
  // triggering a reference
  public Name: string;

  /** Get a child object of the alias.
   * This method triggers a bind
   * 
   *  usage: 
   *    myAlias.child("HomePage")
   *    myAlias.child("OkButton", "HomePage")
   *    myAlias.child("OkButton", "HomePage", myParentAliasObject)
   */
  public child(childaliasname: string, aliasname?: string, parent?: TestComplete.Alias): Alias {
    this.bind(aliasname, parent);
    return new Alias()
      .bind(childaliasname, this.TCO)
  }

  /** A pseudo-cast of the object to a framework type. 
   *  JScript requires the class object is passed
   * to instantiate it. The default class is WebElement,
   * so you may use the method like this: 
   * Usage: myAlias.as<WebElement>()
   * For other classes: 
   * myAlias.as<Element>(Element)  
  */
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

  /** Binds the object to a reference to the actual TestComplete alias.
   */
  public bind(aliasname?: string, parent?: TestComplete.Alias): this {
    // If already bound, do not rebind
    if (!this.exists()) {
      // If the parent isn't assigned, use the Aliases object
      this.Parent = parent || Aliases;
      // If the alias name isn't assigned, use the class name of the object.
      // If you have an root alias "MyPage", then your Alias class can be MyPage.
      // example var myPage = new Alias().bind("MyPage")
      this.Name = aliasname || this.className();
      // Refresh the mapping and wait for the child alias
      this.refresh();
      while (!this.exists()) {
        this.refresh();
      }
    }
    return this;
  }
}