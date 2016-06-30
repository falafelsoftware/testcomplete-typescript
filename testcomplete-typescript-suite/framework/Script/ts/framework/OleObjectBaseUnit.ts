//USEUNIT BaseUnit

class OleObjectBase extends Base {
    public Object: any
    constructor(name: string) {
        super()
        this.Object = Sys.OleObject(name)
    }
}