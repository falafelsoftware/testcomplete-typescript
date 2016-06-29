class Base {
  private formatMessage(message: string): string {
    return this.className() + ": \"" + message + "\""
  }

  public error(message: string, additional?: string) {
    Log.Error("Error in class " + this.formatMessage, additional);
  }

  public log(message: string, additional?: string) {
    Log.Message(this.formatMessage(message), additional);
  }

  public className() {
    var expression = /function (.{1,})\(/;
    var result = (expression).exec(this["constructor"].toString());
    return (result && result.length > 1) ? result[1] : "";
  }
}