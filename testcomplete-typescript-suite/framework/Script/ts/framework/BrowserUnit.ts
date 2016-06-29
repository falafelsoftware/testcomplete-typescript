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
  private _browserWindow: Window

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
    return this
  }

  public navigate(url: string): this {
    this.BrowserInfo.Navigate(url)
    return this
  }

  public wait(url: string): this {
    let page = Sys.Browser().Page(url, 0)
    page.Wait(DefaultSettings.PageWait)
    return this
  }

  private _getBrowserWindow(): Window {
    if (!this._browserWindow) {
      this._browserWindow = new Window(Sys.Browser().BrowserWindow(0))
    }
    return this._browserWindow
  }

  public activate(): this {
    this._getBrowserWindow().activate()
    return this
  }

  public maximize(): this {
    this._getBrowserWindow().maximize()
    return this
  }

  public restore(): this {
    this._getBrowserWindow().restore()
    return this
  }

  public position(x: number, y: number, width: number, height: number): this {
    this._getBrowserWindow().position(x, y, width, height)
    return this
  }

  public close(): this {
    this._getBrowserWindow().close()
    Sys.Browser().WaitProperty("Exists", false)
    return this
  }

  public static current(): Browser {
    return new Browser(Browsers.CurrentBrowser.Family);
  }

  /** Browser file dialogs */

  private _browserDialog(caption: string): BrowserDialog {
    const WndClass = "#32770"
    let dialog = Sys.Browser().WaitWindow(WndClass,
      caption, 0, DefaultSettings.Wait)
    if (!dialog.Exists) {
      this.error(caption + " dialog not found during openFile method")
    }
    return new BrowserDialog(<TestComplete.BrowserDialog>dialog)
  }

  public openFile(path: string) {
    this._browserDialog("Open")
      .openFile(path)
  }

  public saveFile(path: string) {
    this._browserDialog("Save*")
      .saveFile(path)
  }
}