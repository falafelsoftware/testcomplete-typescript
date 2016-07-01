//USEUNIT OleObjectBaseUnit
//USEUNIT EmailConfigurationUnit 

/** Wraps the CDO.Message object. 
 * See https://support.smartbear.com/viewarticle/67749/
*/
class Email extends OleObjectBase {

    constructor(configuration: EmailConfiguration,
        emailFrom?: string, emailto?: string, subject?: string, body?: string) {
        super("CDO.Message")
        this.Object.Configuration = configuration
        this.Object.From = emailFrom
        this.Object.To = emailto
        this.Object.Subject = subject
        this.Object.HTMLBody = body
    }

    public attach(attachments: string): this {
        aqString.ListSeparator = ",";
        for (var i = 0; i < aqString.GetListLength(attachments); i++) {
            this.Object.AddAttachment(aqString.GetListItem(attachments, i));
        }
        return this;
    }

    public toString(): string {
        let result: string
        result += "From: " + this.Object.From + "<br />"
        result += "To: " + this.Object.To + "<br />"
        result += "Subject: " + this.Object.Subject + "<br />"
        result += "Body: " + this.Object.HtmlBody + "<br />"
        return result
    }

    public send(log: boolean = true) {
        try {
            this.Object.Send();
            if (log) {
                this.log("Email message sent", this.toString());
            }
        }
        catch (exception) {
            this.error("Email cannot be sent: " + exception.description);
        }
    }
}