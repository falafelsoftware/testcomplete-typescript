/** Base class for the framework that knows it's own class name,
 * and can perform basic logging.
 */
class Base {
  private formatMessage(message: string): string {
    return this.className() + ": \"" + message + "\""
  }

  /** Logs an error and optional additional text, 
   * and is prefaced by the class name.
   * example myClass.error("A bad thing happened") 
   * 
   * output: Error in class MyClass: "A bad thing happened"
   *  */
  public error(message: string, additional?: string) {
    Log.Error("Error in class " + this.formatMessage(message), additional)
  }

  /** Logs a message and optional additional text, 
   * and is prefaced by the class name.
   * example myClass.log("Current amount is 12.2") 
   * 
   * output: MyClass: "Current amount is 12.2"
   *  */
  public log(message: string, additional?: string) {
    Log.Message(this.formatMessage(message), additional)
  }

  /** The class name of the descendant. 
   * example: 
   * var myObject = new MyObject()
   * Log.Message(myObject.className()) // "MyObject"
    */
  public className() {
    var expression = /function (.{1,})\(/
    var result = (expression).exec(this["constructor"].toString())
    return (result && result.length > 1) ? result[1] : ""
  }
}