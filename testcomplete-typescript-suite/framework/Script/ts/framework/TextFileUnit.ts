 //USEUNIT BaseUnit
 
 class TextFile extends Base {
     public Path: string;
     public Encoding: number;
     public OverwriteOrCreate: boolean;
     
     constructor(path: string) {
         super();
         this.Path = path;
         this.OverwriteOrCreate = true;
         this.Encoding = aqFile.ctUTF8;
     }
 
     public write(text: string): void {
         if (!aqFile.WriteToTextFile(this.Path, text,
             this.Encoding, this.OverwriteOrCreate)) {
             this.error("Unable to write file " + this.Path);
         }
     }
 
     public read(): string {
         return (aqFile.ReadWholeTextFile(this.Path, this.Encoding));
     }
 }
