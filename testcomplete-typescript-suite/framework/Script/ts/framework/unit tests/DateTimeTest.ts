//USEUNIT DateTimeUnit

function testDateTime() {
    var today = new DateTime().today();
    var tomorrow = new DateTime().today().addDays(1)
    if (tomorrow.compare(today) == DateTimeCompareResult.Later) {
        Log.Message("Tomorrow is later than today")
    }
} 