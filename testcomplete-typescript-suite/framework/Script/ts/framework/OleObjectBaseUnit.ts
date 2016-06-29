//USEUNIT BaseUnit

/** Wraps an Ole object, such as CDO.Message.*/
class OleObjectBase extends Base {
    public Object: any
    constructor(name: string) {
        super()
        this.Object = Sys.OleObject(name)
    }
}