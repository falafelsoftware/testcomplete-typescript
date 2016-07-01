//USEUNIT BaseUnit
//USEUNIT DateRangeUnit
//USEUNIT DesktopUnit

/** Objects used to track test execution. 
 * Can be added to OnStartTest, OnStopTest and OnError 
 * event handlers */

/** project run states */
enum ProjectTestItemRunstate {
  NotRun,
  Running,
  Complete
}

/** Stores the message and additional info 
 * from a logged error. */
class ProjectTestItemError extends Base {
  constructor(message: string, additional?: string) {
    super();
    this.Message = message;
    this.Additional = additional;
  }
  public Message: string;
  public Additional: string;
}

/** Wraps a Project test item, i.e. 
 * Project.TestItems.Current. */
class ProjectTestItem extends TestCompleteObject {
  public TCO: TestComplete.ProjectTestItem
  public Name: string
  public Parent: ProjectTestItem
  public Next: ProjectTestItem
  public Prev: ProjectTestItem
  public Level: number
  public Errors: ProjectTestItemError[]
  public Time: DateRange

  constructor(tco: TestComplete.ProjectTestItem) {
    super(tco)
    this.Name = this.TCO.Name
    this.Errors = []
    this.Time = new DateRange()
  }

  public isFirst(): boolean {
    return !this.Prev
  }

  public isLast(): boolean {
    return !this.Next
  }

  public timestampBegin(): void {
    this.Time.Start.now()
  }

  public timestampEnd(): void {
    this.Time.End.now()
  }

  public state(): ProjectTestItemRunstate {
    let result: ProjectTestItemRunstate =
      ProjectTestItemRunstate.NotRun
    if (this.TCO.Iteration > 0) {
      if (this.isLast()) {
        result = ProjectTestItemRunstate.Running
      } else {
        result = this.Next.TCO.Iteration > 0 ?
          ProjectTestItemRunstate.Complete :
          ProjectTestItemRunstate.Running
      }
    }
    return result
  }

  public error(message: string, additional?: string) {
    var error: ProjectTestItemError =
      new ProjectTestItemError(message, additional)
    this.Errors.push(error)
  }
}

/** Creates a flat list of Project test items
 * that know their previous and next items,
 * their parent item, their level in the 
 * hierarchy (e.g. level == 0 is a root level 
 * project test item), and the first and
 * last items in the list.
 * 
 * Used to summarize test results. 
 */
class ProjectTestItems extends Base {

  // flat list
  public Items: ProjectTestItem[];
  constructor(tco: TestComplete.ProjectTestItem) {
    super()
    this.Items = []
    for (var i = 0; i < tco.ItemCount; i++) {
      this.add(tco.TestItem(i))
    }
  }

  public current(): ProjectTestItem {
    for (var item of this.Items) {
      if (item.state() == ProjectTestItemRunstate.Running) {
        return item
      }
    }
  }

  public isLoaded(): boolean {
    return this.Items ? this.Items.length > 0 : false
  }

  public last(): ProjectTestItem {
    var length = this.Items.length;
    return length > 0 ? this.Items[length - 1] : null
  }

  public first(): ProjectTestItem {
    var length = this.Items.length;
    return length > 0 ? this.Items[0] : null
  }

  public timestampBegin(): void {
    let current = this.current()
    if (current) {
      current.Time.Start.now()
    }
  }

  public timestampEnd(): void {
    let current = this.current()
    if (current) {
      current.Time.End.now()
    }
  }

  public error(message: string, additional?: string) {
    let current = this.current()
    if (current) {
      current.error(message, additional)
    }
  }

  /**
   * Add a TestItem to the flat list of all items. 
   */
  public add(tco: TestComplete.ProjectTestItem, parent?: ProjectTestItem): void {
    var enabled = tco.Enabled
    if (enabled) {
      var item = new ProjectTestItem(tco)
      item.Parent = parent
      item.Level = parent ? parent.Level + 1 : 0
      item.Prev = this.last()
      if (item.Prev) {
        item.Prev.Next = item
      }
      this.Items.push(item);
      for (var i = 0; i < tco.ItemCount; i++) {
        this.add(tco.TestItem(i), item)
      }
    }
  }
}