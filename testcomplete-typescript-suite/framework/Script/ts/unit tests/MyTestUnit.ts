//USEUNIT BrowserUnit

function test(){
    new Browser(Browsers.btChrome)
        .run()
        .navigate("www.smartbear.com")
        .maximize()
        .restore()
}