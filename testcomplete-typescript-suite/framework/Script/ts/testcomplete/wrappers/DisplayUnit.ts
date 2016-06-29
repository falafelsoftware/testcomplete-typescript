//USEUNIT BaseUnit

/** Change screen dimensions and colors */

class Display extends Base {

    public getLastError(): any {
        return Win32API.GetLastError();
    }

    public SysErrorMessage(errorCode: any): string {
        return aqUtils.SysErrorMessage(errorCode);
    }

    private valid(): boolean {
        return Win32API.EnumDisplaySettings("", -1, Win32API.DEVMODE())
    }

    public changeDisplaySettings(width: number, height: number, bitsPerPel: number) {
        let devmode = Win32API.DEVMODE();
        if (Win32API.EnumDisplaySettings("", -1, devmode)) {
            devmode.dmPelsWidth = width;
            devmode.dmPelsHeight = height;
            devmode.dmBitsPerPel = bitsPerPel;

            var result = Win32API.ChangeDisplaySettings(devmode, 0);
            if (result == Win32API.DISP_CHANGE_BADMODE) {
                var message = "The specified graphics mode (screen resolution: " +
                    width + "*" +
                    height + "; color depth: " +
                    bitsPerPel + " bits per pixel) is not supported. " +
                    this.lastErrorMessage();

                this.error(message);
            }
        }
    }

    public lastErrorMessage(): string {
        var lastError: any = this.getLastError();
        return " Win32 API Error Code "
            + lastError + " (" +
            + this.SysErrorMessage(lastError) + ")"
    }
}