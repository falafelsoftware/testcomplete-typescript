//USEUNIT BaseUnit
//USEUNIT TextFileUnit

/** Classes to output interface definitions and
 * declarations used in .d.ts files
 * Usage: 
    * function generateInterface() {
        new Framework(Log.CreateNewAttributes(), "LogAttributes")
            .generate()
    }
  * 
  */

enum VarTypes {
    varBoolean = aqObject.varBoolean,
    varEmpty = aqObject.varEmpty,
    varNull = aqObject.varNull,
    varSmallInt = aqObject.varSmallInt,
    varInteger = aqObject.varInteger,
    varSingle = aqObject.varSingle,
    varDouble = aqObject.varDouble,
    varCurrency = aqObject.varCurrency,
    varDate = aqObject.varDate,
    varOleStr = aqObject.varOleStr,
    varDispatch = aqObject.varDispatch,
    varError = aqObject.varError,
    varVariant = aqObject.varVariant,
    varUnknown = aqObject.varUnknown,
    varShortInt = aqObject.varShortInt,
    varByte = aqObject.varByte,
    varWord = aqObject.varWord,
    varLongWord = aqObject.varLongWord,
    varInt64 = aqObject.varInt64,
    varArray = aqObject.varArray,
    varByRef = aqObject.varByRef
}

/** Base type for objects, properties and methods 
 * returned by aqObject methods */
class TcMember {
    public Index: number
    public Name: string
    public VarType: VarTypes
    public TypeScriptType: string
    public IsPrivate: boolean
    public Value: any

    constructor(name: string, index: number, varType: VarTypes) {
        this.Name = name
        this.Index = index
        this.VarType = varType
        this.IsPrivate = typeof this.Name == "string" && this.Name[0] == "_";
        this.TypeScriptType = this.typeScriptType(this.VarType)
    }

    private typeScriptType(varType: VarTypes): string {
        const int1 = 22;
        const varVoid = 24;
        switch (varType) {
            case VarTypes.varBoolean: return "boolean"
            case VarTypes.varOleStr: return "string"
            case VarTypes.varArray: return "[]"
            case VarTypes.varInteger:
            case VarTypes.varSmallInt:
            case VarTypes.varSingle:
            case VarTypes.varDouble:
            case VarTypes.varCurrency:
            case VarTypes.varWord:
            case VarTypes.varShortInt:
            case VarTypes.varByte:
            case VarTypes.varWord:
            case VarTypes.varLongWord:
            case VarTypes.varInt64:
            case VarTypes.varByte:
            case int1:
                return "number";
            case VarTypes.varEmpty:
            case varVoid:
                return "void";
            default: return "any";
        }
    }
}

class TestCompleteMethod extends TcMember {
    public Parameters = {}
    constructor(name: string, index: number, varType: VarTypes) {
        super(name, index, varType)
    }
}

class TcObject extends TcMember {
    public Object: any
    public Properties = {}
    public Methods = {}

    public Depth: number
    public static MaxDepth = 3
    constructor(object: any, name: string, index: number, depth: number) {
        super(name, index, aqObject.GetVarType(object))
        this.Object = object
        this.Depth = depth
        this.properties()
        this.methods()
    }

    private properties(): void {
        let index = 0
        let iterator = aqObject.GetProperties(this.Object)
        while (iterator.HasNext()) {
            let member: any
            let temp = iterator.Next()
            if (temp.ParamCount && temp.ParamCount > 0) {
                this.addMethod(temp, index++)
            } else {
                this.addProperty(temp, index++)
            }
        }
    }

    private addProperty(obj, index) {
        this.Properties[obj.Name] =
            new TcMember(obj.Name, index, obj.ValueType)
    }

    private addMethod(obj, index) {
        let method =
            new TestCompleteMethod(obj.Name, index, obj.VarType)
        for (var i = 0; i < obj.ParamCount; i++) {
            let name = obj.ParamName(i) || "Param" + (i + 1).toString()
            method.Parameters[name] = new TcMember(name, i, obj.ParamType(i))
        }
        this.Methods[obj.Name] = method
    }

    private methods(): void {
        let index = 0
        let iterator = aqObject.GetMethods(this.Object)
        while (iterator.HasNext()) {
            this.addMethod(iterator.Next(), index++)
        }
    }
}

class TcGenerator extends Base {
    public Object: TcObject
    public Definition: string
    public Declaration: string
    constructor(obj: any, name: string) {
        super()
        this.Object = new TcObject(obj, name, 0, 0)
        this.Definition = this.intf()
        this.Declaration = this.declaration()
    }

    private intf(): string {
        let result = "interface " + this.Object.Name + " {"
        for (var i in this.Object.Properties) {
            let prop = <TcMember>this.Object.Properties[i]
            if (!prop.IsPrivate) {
                result += "\n    " + prop.Name + ": " + prop.TypeScriptType
            }
        }
        for (var m in this.Object.Methods) {
            let method = <TestCompleteMethod>this.Object.Methods[m]
            if (!method.IsPrivate) {
                result += "\n    " + method.Name + "("

                for (var p in method.Parameters) {
                    let param = method.Parameters[p]
                    if (param.Index > 0) {
                        result += ", "
                    }
                    result += param.Name + ": " + param.TypeScriptType;
                }
                result += "): " + method.TypeScriptType
            }

        }
        result += "\n}\n\n";
        return result
    }

    private declaration(): string {
        return "\ndeclare var " + this.Object.Name + ": " + this.Object.Name
    }
}

class Framework extends TcGenerator {
    private path: string
    constructor(obj: any, name: string) {
        const typings = "framework\\script\\ts\\typings\\"
        const extension = ".d.ts"
        super(obj, name)
        this.path = ProjectSuite.Path + typings + name + extension
    }

    public generate() {
        new TextFile(this.path).write(this.Definition)
    }
}

function generateInterface() {
    new Framework(Log.CreateNewAttributes(), "LogAttributes")
        .generate()
}