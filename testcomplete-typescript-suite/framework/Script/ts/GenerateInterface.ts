function getTypeString(propType) {
    var int1: number = 22;
    var varVoid = 24;
    switch (propType) {
        case aqObject.varBoolean: return "boolean"
        case aqObject.varOleStr: return "string"
        case aqObject.varArray: return "[]"
        case aqObject.varInteger:
        case aqObject.varSmallInt:
        case aqObject.varSingle:
        case aqObject.varDouble:
        case aqObject.varCurrency:
        case aqObject.varWord:
        case aqObject.varShortInt:
        case aqObject.varByte:
        case aqObject.varWord:
        case aqObject.varLongWord:
        case aqObject.varInt64:
        case aqObject.varByte:
        case int1:
            return "number";
        case aqObject.varEmpty:
        case varVoid:
            return "void";
        default: return "any";
    }
}

function isPrivate(name: string) {
    return typeof name == "string" && name[0] == "_";
}

function getInterfaceString(name, obj) {
    var result = "interface " + name + " {"
    // read all properties of the TestComplete object
    var props = aqObject.GetProperties(obj)
    while (props.HasNext()) {
        var prop = props.Next()
        if (!isPrivate(prop.Name)) {
            result += "\n    " + prop.Name + ": " + getTypeString(prop.ValueType)
        }
    }

    // read all methods of the TestComplete object
    var methods = aqObject.GetMethods(obj)
    while (methods.HasNext()) {
        var method = methods.Next()
        if (!isPrivate(method.Name)) {
            result += "\n    " + method.Name + "("
            for (var i = 0; i < method.ParamCount; i++) {
                if (i > 0) {
                    result += ", "
                }

                if (!isPrivate(method.ParamName(i)[0])) {
                    let paramName = method.ParamName(i) !== "" ? method.ParamName(i) : "Param" + (i + 1).toString();
                    result += paramName + ": " + getTypeString(method.ParamType(i));
                }
            }
            result += "): " + getTypeString(method.ValueType)
        }
    }
    result += "\n}\n\n";
    return result
}

function getDeclareString(name: string): string {
    return "declare var " + name + ": " + name + "\n"
}

function generateObjectInterface(name: string, obj: any): void {
    let path = Project.Path + "\\script\\ts\\typings\\TestComplete." + name + ".d.ts";
    let text: string = ""
    text += getInterfaceString(name, obj);
    text += getDeclareString(name);
    aqFile.WriteToTextFile(path, text, aqFile.ctUTF8, true);
}

function generateOneOffs(){
    generateObjectInterface("Win32API", Win32API)   
}