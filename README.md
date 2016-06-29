# testcomplete-typescript
TestComplete framework and definition files written in TypeScript

### Video Blog Series
* [Creating a TestComplete JScript Framework with TypeScript]
* [Using TestComplete Objects in TypeScript Classes]
* up next... Inheritance

### Links
* [TypeScript]
* [Atom]
* [NodeJS]
* [Visual Studio Code]

### Notes
* [TestComplete] Currently supports the JScript engine version 5.8, ECMA 3
* Comparison table of JavaScript, JScript and ECMA versions at this [JavaScript Wikipedia article] 

### Visual Studio Code Keyboard Shortcuts
* Ctrl-shift-B: run build task
* Format: shift-alt-F
* JSDOC: /**

## Example code for [Creating a TestComplete JScript Framework with TypeScript]
### Sample tsconfig.json file

```json
{
  "compilerOptions": {
    "noLib": true,
    "target": "es3",
    "rootDir": ".\\ts\\",
    "outDir": ".",
    "diagnostics": true,
    "noImplicitAny": false,
    "noEmitHelpers": false,
    "removeComments": false,
    "declaration": false
  },
  "exclude": [
    "typings"
  ]
}
```
### First TypeScript Object
```
class Desktop {
  public Name: string;

  constructor(message: string) {
    this.Name = message;
  }
}
```
## Using TestComplete Objects in TypeScript Classes
* Hide unneeded files to reduce noise
* Organize output files in TestComplete
* Use TestComplete objects Sys.Desktop and Log in TypeScript
 
### Hide unneeded files to reduce noise: Sample Settings.json
```json
{
    "files.exclude": {
        "**/*.tcScript": true,
        "**/*.js": true,
        "**/*.sj": true,
        "**/*.bak": true
    }
}
```
###  Use TestComplete objects Sys.Desktop and Log in TypeScript
```javascript
declare var Log: any;
declare var Sys: any;

class Desktop {
  public Name: string;

  constructor(message: string) {
    this.Name = message;
  }

  public screenshot() {
    Log.Picture(Sys.Desktop.Picture(), "Screenshot of " + this.Name);
  }
}

function test() {
  var desktop = new Desktop("Desktop");
  desktop.screenshot();
}
```
## Inheritance
* Using the extends keyword
* Using the _extends function
* Inherited constructors and methods

   [TypeScript]: <https://www.typescriptlang.org/>
   [Atom]: <https://atom.io/>
   [NodeJS]: <https://nodejs.org/en/download/>
   [Visual Studio Code]: <https://code.visualstudio.com/>
   [TestComplete]: <https://smartbear.com/product/testcomplete/overview/>
   [JavaScript Wikipedia article]: <https://en.wikipedia.org/wiki/JavaScript>
   [Dillinger]: <http://dillinger.io/#>
   [Falafel Software]: <https//www.falafel.com/>
   [Falafel Blogs]: <http://blog.falafel.com/>
   [Creating a TestComplete JScript Framework with TypeScript]: <http://blog.falafel.com/creating-a-testcomplete-jscript-framework-with-typescript//>
   [Using TestComplete Objects in TypeScript Classes]: <http://blog.falafel.com/using-testcomplete-objects-in-typescript-classes/>