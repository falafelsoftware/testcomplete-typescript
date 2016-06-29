//USEUNIT VisibleObjectUnit

/** Wraps an image object, can verify against a region matching the name parameter */
class ImageElement extends VisibleObject {
    public AllowTransparent: boolean = false;
    public AllowMouse: boolean = false;
    public PixelTolerance: number = 0;
    public ColorTolerance: number = 0;

    public check(name: string, mask?: string): this {
        Regions.Items(name).Check(this.TCO, this.AllowTransparent,
            this.AllowMouse, this.PixelTolerance, this.ColorTolerance, mask);
        return this;
    }
}