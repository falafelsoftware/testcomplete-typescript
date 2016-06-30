//USEUNIT WindowUnit

class BrowserDialog extends Window {
    public TCO: TestComplete.BrowserDialog

    constructor(tco: TestComplete.BrowserDialog) {
        super(tco)
    }

    public openFile(path: string): this {
        this.requires("OpenFile")
        this.TCO.OpenFile(path)
        return this
    }

    public saveFile(path: string): this {
        this.requires("SaveFile")
        this.TCO.SaveFile(path)
        return this
    }
}