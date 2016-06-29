//USEUNIT WindowUnit
//USEUNIT BrowserDialogUnit
//USEUNIT DefaultSettingsUnit
//USEUNIT BaseUnit

/** The Browser class wraps TestComplete's BrowserInfo 
 * object used to run and navigate the browser, the BrowserWindow
 * (used to minimize, maximize, and close the window), and the 
 * browser's dialog window used to open and save files.
*/
class Browser extends Base {
  public BrowserInfo: TestComplete.BrowserInfo
  public BrowserWindow: Window
  public BrowserProcess: TestComplete.BrowserProcess

/** family is a constant btChrome, btEdge, etc.
 *  Use the Browsers definition to get a list. 
 * Example: new Browser(Browsers.btChrome)
 */
  constructor(family: number) {
    super()
    this.BrowserInfo = Browsers.Item(family)
  }

  public run(): this {
    this.BrowserInfo.Run()
    this.BrowserProcess = Sys.Browser()
    this.BrowserWindow = new Window(Sys.BrowserWindow(0)) 
      
    return this
  }

  public navigate(url: string): this {
    this.BrowserInfo.Navigate(url)
    return this
  }

  public wait(url: string): this {
    let page = this.BrowserProcess.Page(url, 0)
    page.Wait(DefaultSettings.PageWait)
    return this
  }

  public activate(): this {
    this.BrowserWindow.activate()
    return this
  }

  public maximize(): this {
    this.BrowserWindow.maximize()
    return this
  }

  public restore(): this {
    this.BrowserWindow.restore()
    return this
  }

  public position(x: number, y: number, width: number, height: number): this {
    this.BrowserWindow.position(x, y, width, height)
    return this
  }

  public close(): this {
    this.BrowserWindow.close()
    this.BrowserProcess.WaitProperty("Exists", false)
    return this
  }

  public openFile(path: string) {
    this
      .child("Dialog")
      .as<BrowserDialog>(BrowserDialog)
      .openFile(path)
  }

  public saveFile(path: string) {
    this
      .child("Dialog")
      .as<BrowserDialog>(BrowserDialog)
      .saveFile(path)
  }

  public static current(): Browser {
    return new Browser(Browsers.CurrentBrowser.Family);
  }
}