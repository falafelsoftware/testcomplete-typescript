//USEUNIT OleObjectBaseUnit

class EmailConfiguration extends OleObjectBase {

    constructor(server: string, port: number, user: string, password: string) {
        super("CDO.Configuration")
        const usePort: number = 2;
        this.setConfigItem("sendusing", usePort);
        this.setConfigItem("smtpauthenticate", true);
        this.setConfigItem("smtpusessl", true);
        this.setConfigItem("smtpserver", server);
        this.setConfigItem("smtpserverport", port);
        this.setConfigItem("sendusername", user);
        this.setConfigItem("sendpassword", password);
        this.Object.Fields.Update();
    }

    private setConfigItem(name: string, value: any): void {
        const schema: string = "http://schemas.microsoft.com/cdo/configuration/";
        return this.Object.Fields.Item(schema + name).Value =
            value;
    }
}