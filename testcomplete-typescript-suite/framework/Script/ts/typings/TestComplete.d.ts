

declare namespace TestComplete {
    type Variant = any

    /** Generic interfaces */

    interface RuntimeObject { }

    interface VisibleObject extends RuntimeObject {
        Exists: boolean;
        Visible: boolean;
        VisibleOnScreen: boolean;
        Picture(): TestComplete.Picture;
        Top: number;
        Left: number;
        Width: number;
        Height: number;
        Refresh(): void;
    }

    interface Element extends VisibleObject {
        Enabled: boolean;
        Keys(text: string): void;
        SetText(text: string): void;
        Click(): void;
        ClickButton(): void;
    }

    interface WebElement extends Element {
        clientWidth: number;
        clientHeight: number;
        clientTop: number;
        clientLeft: number;
        scrollIntoView(align: boolean): void;
        scrollIntoViewIfNeeded(align: boolean): void;
    }

    /** system objects */

    interface Sys extends RuntimeObject {
        ChildCount: number
        Clipboard: Variant
        CPU: string
        CPUCount: number
        CPUUsage: number
        Desktop: Desktop
        DomainName: string
        Exists: boolean
        FullName: string
        HostName: string
        Id: number
        MappedName: string
        MemUsage: number
        Name: string
        OleObject(OleObject: string, MachineName?: string): any
        OSInfo: any
        Parent: any
        UserName: string
        Browser(BrowserName?: string, BrowserIndex?: number): BrowserProcess
        BrowserWindow(Index: number): Window
        Child(Index: number): any
        Find(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAll(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAllChildren(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChild(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChildEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindId(Id: number, RefreshTree: boolean): any
        HighlightObject(Object: any, HighlightCount: number, Color: number): void
        Keys(Keys: string): void
        ObjectFromPoint(X: number, Y: number, FindTransparent: boolean): any
        Process(ProcessName: string, GroupIndex: number): any
        Refresh(): void
        Restart(): void
        Shutdown(): void
        WaitBrowser(BrowserName: string, Timeout: number, BrowserIndex: number): any
        WaitChild(ChildName: string, WaitTime: number): any
        WaitProcess(ProcessName: string, WaitTime: number, GroupIndex: number): any
        WaitProperty(PropertyName: string, PropertyValue: any, WaitTime: number): boolean
        WindowFromHandle(Handle: number): any
    }

    interface Desktop extends RuntimeObject {
        MouseX: number
        MouseY: number
        Width: number
        Height: number
        PictureUnderMouse(Width: number, Height: number, Mouse: boolean): Picture
        Picture(ClientX?: number, ClientY?: number, Width?: number, Height?: number, Mouse?: boolean): Picture
        Keys(Keys: string): any
        ActiveWindow(): any
        FocusedWindow(): any
        ObjectFromPoint(X: number, Y: number, FindTransparent: boolean): any
        WindowFromHandle(Handle: number): any
        MouseDown(VK: number, X: number, Y: number): any
        MouseUp(VK: number, X: number, Y: number): any
        KeyDown(VK: number): any
        KeyUp(VK: number): any
    }

    interface Window extends VisibleObject {
        ChildCount: number
        ControlId: number
        Enabled: boolean
        Exists: boolean
        Focused: boolean
        FullName: string
        Handle: number
        Height: number
        HScroll: any
        Id: number
        Index: number
        Left: number
        MainMenu: any
        MappedName: string
        Name: string
        ObjectIdentifier: any
        ObjectType: string
        Parent: any
        PopupMenu: any
        ScreenLeft: number
        ScreenTop: number
        SystemMenu: any
        Top: number
        Unicode: boolean
        Visible: boolean
        VisibleOnScreen: boolean
        VScroll: any
        Width: number
        WndCaption: string
        WndClass: string
        WndStyles: number
        WndStylesEx: number
        Activate(): void
        AWTObject(Name: any, AccName: any, Index: any, WndIndex: any): any
        Child(Index: number): any
        Click(ClientX?: number, ClientY?: number, Shift?: any): void
        ClickM(ClientX: number, ClientY: number, Shift: any): void
        ClickR(ClientX: number, ClientY: number, Shift: any): void
        Close(WaitTimeout?: number): void
        CLXObject(Name: any): any
        DblClick(ClientX?: number, ClientY?: number, Shift?: any): void
        DblClickM(ClientX: number, ClientY: number, Shift: any): void
        DblClickR(ClientX: number, ClientY: number, Shift: any): void
        Drag(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        DragM(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        DragR(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        Find(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAll(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAllChildren(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChild(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChildEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindId(Id: number, RefreshTree: boolean): any
        HoverMouse(ClientX: number, ClientY: number): void
        JavaFXObject(Name: any, Text: any, Index: any): any
        Keys(Keys: string): void
        Maximize(): void
        Minimize(): void
        MouseWheel(Delta: number, Shift: any): void
        MSAAObject(Name: any): any
        ObjectFromPoint(X: number, Y: number, FindTransparent: boolean): any
        Picture(ClientX?: number, ClientY?: number, Width?: number, Height?: number, Mouse?: boolean): Picture
        Position(Left: number, Top: number, Width: number, Height: number): void
        QtObject(Name: any, Text: any, WndIndex: any): any
        Refresh(): void
        Restore(): void
        ScreenToWindow(X: number, Y: number): any
        SetFocus(): void
        SwingObject(Name: any, AccName: any, Index: any, WndIndex: any): any
        SWTObject(Name: any, WndCaption: any, Index: any): any
        TextObject(Text: any, Index: any): any
        VBObject(Name: any): any
        VCLNETObject(Name: any, WndCaption: any, Index: any): any
        VCLObject(Name: any): any
        WaitAWTObject(Name: any, AccName: any, Index: any, WndIndex: any, Timeout: number): any
        WaitChild(ChildName: string, WaitTime: number): any
        WaitCLXObject(Name: any, Timeout: number): any
        WaitJavaFXObject(Name: any, Text: any, Index: any, Timeout: number): any
        WaitMSAAObject(Name: any, Timeout: number): any
        WaitProperty(PropertyName: string, PropertyValue: any, WaitTime: number): boolean
        WaitQtObject(Name: any, Text: any, WndIndex: any, Timeout: number): any
        WaitSwingObject(Name: any, AccName: any, Index: any, WndIndex: any, Timeout: number): any
        WaitSWTObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitTextObject(Text: any, Index: any, Timeout: number): any
        WaitVBObject(Name: any, Timeout: number): any
        WaitVCLNETObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitVCLObject(Name: any, Timeout: number): any
        WaitWFCObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitWindow(WndClass: string, WndCaption: string, GroupIndex: number, WaitTime: number): any
        WaitWinFormsObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitWPFObject(Name: any, Caption: any, Index: any, Timeout: number): any
        WFCObject(Name: any, WndCaption: any, Index: any): any
        Window(WndClass: string, WndCaption: string, GroupIndex: number): any
        WindowToScreen(X: number, Y: number): any
        WinFormsObject(Name: any, WndCaption: any, Index: any): any
        WPFObject(Name: any, Caption: any, Index: any): any
    }

    /** Name mapping */

    interface NameMapping {
        TimeOutWarning: boolean
        ConfigurationCount: number
        CurrentConfigurationName: string
        ConfigurationNames(Index: number): any
    }

    interface Aliases {
        Exists: boolean
        RefreshMappingInfo(): void
        WaitProperty(PropertyName: string, PropertyValue: any, WaitTime?: number): boolean
        WaitAliasChild(ChildName: string, WaitTime?: number): any
        GetUnderlyingObject(): any
    }

    interface Alias extends Aliases {
    }


    /** Browser objects */

    interface BrowserProcess {
        BrowserIndex: number
        ChildCount: number
        CommandLine: string
        CPUUsage: number
        Exists: boolean
        FileVersionInfo: any
        FullName: string
        HandleCount: number
        Id: number
        Index: number
        IsOpen: boolean
        MappedName: string
        MemUsage: number
        Name: string
        ObjectIdentifier: any
        ObjectType: string
        Parent: any
        Path: string
        Priority: number
        ProcessName: string
        ProcessType: string
        SessionId: number
        System: boolean
        ThreadCount: number
        UserName: string
        VMSize: number
        AppDomain(Name: any, ClrVersion: any): any
        AWTObject(Name: any, AccName: any, Index: any, WndIndex: any): any
        Browser(BrowserName?: string, BrowserIndex?: number): Browser
        Child(Index: number): any
        Close(WaitTimeout: number): void
        CLXObject(Name: any): any
        Find(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAll(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAllChildren(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChild(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChildEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindId(Id: number, RefreshTree: boolean): any
        JavaFXObject(Name: any, Text: any, Index: any): any
        JavaRuntime(Index: any): any
        Page(URL?: string, Index?: number): Page
        QtObject(Name: any, Text: any, WndIndex: any): any
        Refresh(): void
        SaveDumpToFile(FileName: string, FullMemory: boolean): void
        SaveDumpToLog(FullMemory: boolean): void
        SwingObject(Name: any, AccName: any, Index: any, WndIndex: any): any
        SWTObject(Name: any, WndCaption: any, Index: any): any
        Terminate(): void
        ToUrl(URL: string, WaitTime: number): any
        VBObject(Name: any): any
        VCLNETObject(Name: any, WndCaption: any, Index: any): any
        VCLObject(Name: any): any
        WaitAppDomain(Name: any, ClrVersion: any, Timeout: number): any
        WaitAWTObject(Name: any, AccName: any, Index: any, WndIndex: any, Timeout: number): any
        WaitChild(ChildName: string, WaitTime: number): any
        WaitCLXObject(Name: any, Timeout: number): any
        WaitJavaFXObject(Name: any, Text: any, Index: any, Timeout: number): any
        WaitJavaRuntime(Index: any, Timeout: number): any
        WaitPage(URL: string, Index: number, Timeout: number): any
        WaitProperty(PropertyName: string, PropertyValue: any, WaitTime: number): boolean
        WaitQtObject(Name: any, Text: any, WndIndex: any, Timeout: number): any
        WaitSwingObject(Name: any, AccName: any, Index: any, WndIndex: any, Timeout: number): any
        WaitSWTObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitVBObject(Name: any, Timeout: number): any
        WaitVCLNETObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitVCLObject(Name: any, Timeout: number): any
        WaitWFCObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitWindow(WndClass: string, WndCaption: string, GroupIndex: number, WaitTime: number): any
        WaitWinFormsObject(Name: any, WndCaption: any, Index: any, Timeout: number): any
        WaitWPFObject(Name: any, Caption: any, Index: any, Timeout: number): any
        WFCObject(Name: any, WndCaption: any, Index: any): any
        Window(WndClass: string, WndCaption: string, GroupIndex: number): any
        WinFormsObject(Name: any, WndCaption: any, Index: any): any
        WPFObject(Name: any, Caption: any, Index: any): any
    }

    interface Browsers {
        pX86: number
        pX64: number
        pAny: number
        btIExplorer: number
        btFirefox: number
        btChrome: number
        Count: number
        Item(Family: number): BrowserInfo
        CurrentBrowser: BrowserInfo
        btOpera: number
        btSafari: number
        SystemDefaultBrowser: number
        btEdge: number
        Refresh(): void
    }

    interface BrowserInfo {
        Family: number
        Version: any
        Platform: number
        Description: string
        Run(URL?: string, PageLoadWaitTime?: number): void
        Navigate(URL: string, WaitTime?: number): void
    }

    interface BrowserDialog extends Window {
        OpenFile(FileName: string, FileType?: any): void
        SaveFile(path: string): void
    }

    interface Page {
        ChildCount: number
        contentDocument: any
        Enabled: boolean
        Exists: boolean
        FullName: string
        Height: number
        Id: number
        Left: number
        MappedName: string
        Name: string
        NativeWebObject: any
        ObjectGroupIndex: any
        ObjectIdentifier: any
        ObjectType: string
        Parent: any
        ScreenLeft: number
        ScreenTop: number
        Top: number
        URL: string
        Visible: boolean
        VisibleOnScreen: boolean
        Width: number
        Alert(): any
        Child(Index: number): any
        Click(ClientX: number, ClientY: number, Shift: any): void
        ClickM(ClientX: number, ClientY: number, Shift: any): void
        ClickR(ClientX: number, ClientY: number, Shift: any): void
        Close(): void
        Confirm(): any
        DblClick(ClientX: number, ClientY: number, Shift: any): void
        DblClickM(ClientX: number, ClientY: number, Shift: any): void
        DblClickR(ClientX: number, ClientY: number, Shift: any): void
        Drag(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        DragM(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        DragR(ClientX: number, ClientY: number, toX: number, toY: number, Shift: any): void
        EvaluateXPath(XPath: string, SearchInFrames: boolean): any
        Find(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAll(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindAllChildren(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChild(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean): any
        FindChildByXPath(XPath: string, SearchInFrames: boolean): any
        FindChildEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindEx(PropNames: any, PropValues: any, Depth: number, RefreshTree: boolean, Timeout: number): any
        FindId(Id: number, RefreshTree: boolean): any
        HoverMouse(ClientX: number, ClientY: number): void
        Keys(Keys: string): void
        Login(): any
        MouseWheel(Delta: number, Shift: any): void
        PagePicture(ClientX: number, ClientY: number, Width: number, Height: number): any
        Picture(ClientX: number, ClientY: number, Width: number, Height: number, Mouse: boolean): any
        Prompt(): any
        QuerySelector(Selector: string): any
        QuerySelectorAll(Selector: string): any
        Refresh(): void
        ScreenToWindow(X: number, Y: number): any
        SendDebuggerCommand(Command: string, ParamsJSON: string): void
        ToUrl(URL: string, WaitTime: number): any
        Wait(WaitTime?: number): string
        WaitAlert(Timeout: number): any
        WaitChild(ChildName: string, WaitTime: number): any
        WaitConfirm(Timeout: number): any
        WaitLogin(Timeout: number): any
        WaitPrompt(Timeout: number): any
        WaitProperty(PropertyName: string, PropertyValue: any, WaitTime: number): boolean
        WindowToScreen(X: number, Y: number): any
    }

    /** Project and Project Suite */

    interface Project {
        FileName: string
        Path: string
        ConfigPath: string
        TestItems: ProjectTestItems
        Logs: any
        Variables: Variables
    }

    interface ProjectSuite {
        FileName: string
        Path: string
        ConfigPath: string
        TestItems: ProjectSuiteTestItems
        Variables: Variables
    }

    interface Variables {
        VariableByName(Name: string): Variant
        VariableCount: number
        VariableExists(Name: string): boolean
        AddVariable(VariableName: string, VariableType: string): void
        RemoveVariable(VariableName: string): void
        GetVariableName(Index: number): string
        GetVariableType(Variable: Variant): string
        GetVariableDescription(Variable: Variant): string
        GetVariableCategory(Variable: Variant): string
        GetVariableDefaultValue(Variable: Variant): Variant
    }

    interface TestItemElement {
        Caption: string
    }

    interface ProjectSuiteTestItem {
        ProjectName: string
        ProjectLocation: string
        Enabled: boolean
        StopOnError: boolean
        Timeout: number
        Description: string
    }

    interface ProjectTestItem {
        Parent: ProjectTestItem
        ItemCount: number
        TestItem(Index: number): ProjectTestItem
        Name: string
        Description: string
        Enabled: boolean
        Count: number
        Iteration: number
        ElementToBeRun: TestItemElement
        Timeout: number
        StopOnError: number
        StopOnException: number
    }

    interface ProjectSuiteTestItems {
        ItemCount: number
        TestItem(Index: string): ProjectSuiteTestItem
        Current: ProjectSuiteTestItem
    }

    interface ProjectTestItems {
        ItemCount: number
        TestItem(Index: number): ProjectTestItem
        Current: ProjectTestItem
    }

    /** project items: tested apps, stores, i.e. parent items in the 
     * project explorer.
     */

    interface TestedApps {
        Count: number
        Items: any
        Add(FullName: string, Parameters: string, Count: number, Launch: boolean, WorkDir: string): number
        AddBrowser(BrowserType: string, BrowserVersion: string): number
        AddVirtualBrowser(VirtualBrowserName: string): number
        AddClickOnceApp(StartupLink: string, ProcessToWait: string): number
        AddJavaApp(): number
        AddAIRApp(): number
        AddAndroidApp(APKFileName: string): number
        AddiOSApp(IPAFileName: string): number
        AddWinStoreApp(PackageName: string): number
        Find(FullName: string): number
        Delete(Index: any): boolean
        Clear(): void
        RunAll(): void
        CloseAll(): boolean
        TerminateAll(): boolean
    }

    interface DBTables {
    }

    interface Files {
        Add(FileName: string, Name: string, ACopyFile: boolean): boolean
        Remove(Name: string, RemoveFromDisk: boolean): boolean
        Count(): number
        NameByIndex(Index: number): string
        FileNameByIndex(Index: number): string
        FileNameByName(Name: string): string
        NameByFileName(FileName: string): string
        Contains(Name: string): boolean
        ContainsFile(FileName: string): boolean
        NamesList(Separator: string): string
        FileNamesList(Separator: string): string
        LastError(): string
        Compare(File1: string, File2: string, HashValue: number, ReportDifference: boolean, MessageType: any): boolean
        CalculateHashValue(File1: string, File2: string): number
        CreateEmpty(FileName: string, Name: string): boolean
        Items(FileName: string): any
    }

    interface Objects {
        Add(FileName: string, Name: string, ACopyFile: boolean): boolean
        Remove(Name: string, RemoveFromDisk: boolean): boolean
        Count(): number
        NameByIndex(Index: number): string
        FileNameByIndex(Index: number): string
        FileNameByName(Name: string): string
        NameByFileName(FileName: string): string
        Contains(Name: string): boolean
        ContainsFile(FileName: string): boolean
        NamesList(Separator: string): string
        FileNamesList(Separator: string): string
        LastError(): string
        Save(AObject: any, Name: string, PropNames: string, ExceptedPropNames: string, Recursive: boolean, OutputDirectory: string): boolean
        Load(AObject: any, Name: string, PropNames: string, ExceptedPropNames: string, Recursive: boolean): boolean
        Compare(AObject: any, Name: string, ReportDifference: boolean, MessageType: any): boolean
        Update(AObject: any, Name: string): boolean
        StoredObject(Name: string): any
        Items(ObjectName: string): any
    }

    interface Regions {
        Add(FileName: string, Name: string, ACopyFile: boolean): boolean
        Remove(Name: string, RemoveFromDisk: boolean): boolean
        Count(): number
        NameByIndex(Index: number): string
        FileNameByIndex(Index: number): string
        FileNameByName(Name: string): string
        NameByFileName(FileName: string): string
        Contains(Name: string): boolean
        ContainsFile(FileName: string): boolean
        NamesList(Separator: string): string
        FileNamesList(Separator: string): string
        LastError(): string
        AddPicture(Picture: any, Name: string, Mouse: boolean, OutputDirectory: string): boolean
        GetPicture(Item: any): any
        Compare(Picture1: any, Picture2: any, Transparent: boolean, Mouse: boolean, ReportDifference: boolean, PixelTolerance: number, MessageType: any): boolean
        Find(PictureToSearchIn: any, PictureToSeachFor: any, Left: number, Top: number, Transparent: boolean, Mouse: boolean, PixelTolerance: number): any
        FindRegion(PictureToSeachFor: any, PictureToSearchIn: any, Left: number, Top: number, Transparent: boolean, Mouse: boolean, PixelTolerance: number): any
        Items(RegionName: string): any
        CreateRegionInfo(AObject: any, ClientX: number, ClientY: number, Width: number, Height: number, Mouse: boolean): any
    }

    interface Tables {
    }

    interface WebTesting {
    }

    interface XML {
        CreateXML(Name: string, Document: any, Options: any): boolean
        CreateCheckpointOptions(): any
        Contains(Name: string): boolean
    }

    /** Utility objects */

    interface Picture {
        Handle: number
        Size: any
        Pixels: number
        SaveToFile(FileName: string, Configuration: any): boolean
        LoadFromFile(FileName: string): boolean
        SaveToClipboard(): void
        Find(PictureForSearch: Picture, Left: number, Top: number, Transparent: boolean, PixelTolerance: number, Mouse: boolean, ColorTolerance: number, Mask: any): any
        Compare(Picture: Picture, Transparent: boolean, PixelTolerance: number, Mouse: boolean, ColorTolerance: number, Mask: any): boolean
        Difference(Picture: Picture, Transparent: boolean, PixelTolerance: number, Mouse: boolean, ColorTolerance: number, Mask: any): any
        GetRect(X: number, Y: number, Width: number, Height: number): any
        Stretch(Width: number, Height: number, UseHalftones: boolean): void
        CreatePictureConfiguration(ImageFormat: string): any
    }

    interface Utils {
        Picture: Picture
        Point: any
        Rect: any
        Size: any
        Timers: any
        CreateStubObject(): any
        Enumerator(Collection: any): any
    }

    interface Consts {
        crlAlways: number
        crlNever: number
        crlWhenNotOk: number
        dmAutomatic: number
        dmManual: number
        hsConnected: number
        hsDisconnected: number
        imError: number
        imTerminate: number
        imUse: number
        lmConsole: number
        lmManual: number
        lmRDC: number
        ns_CopyingResults: number
        ns_FastVerifying: number
        ns_Idle: number
        ns_Initializing: number
        ns_Running: number
        ns_SlaveRunning: number
        ns_Stopping: number
        ns_Synchronizing: number
        ns_Verifying: number
        ns_Waiting: number
        ns_WaitingForCriticalSection: number
        ns_WorkingWithinCriticalSection: number
        ptMaster: number
        ptSlave: number
        ra_TC: number
        ra_TE: number
        saClose: number
        saLogOff: number
        saNone: number
        saReboot: number
        saShutDown: number
        svNone: number
        svProject: number
        svTestItem: number
        vcmImg: string
        vcmImgObj: string
        vcmOff: string
    }

    interface Indicator {
        Text: string
        PushText(Value: string): void
        PopText(): void
        Clear(): void
        Show(): void
        Hide(): void
    }

    interface Log {
        MsgCount: number
        WrnCount: number
        ErrCount: number
        EvnCount: number
        ImgCount: number
        FileCount: number
        LinkCount: number
        Path: string
        Enabled: boolean
        FolderMsgCount: number
        FolderWrnCount: number
        FolderErrCount: number
        FolderEvnCount: number
        FolderImgCount: number
        FolderFileAndLinkCount: number
        CallStackSettings: any
        CheckpointCount: number
        FolderCheckpointCount: number
        Message(MessageText: any, AdditionalInformation?: any, Priority?: any, Attrib?: any, Picture?: Picture, FolderId?: number): void
        Warning(MessageText: any, AdditionalInformation?: any, Priority?: any, Attrib?: any, Picture?: Picture, FolderId?: number): void
        Error(MessageText: any, AdditionalInformation?: any, Priority?: any, Attrib?: any, Picture?: Picture, FolderId?: number): void
        Event(MessageText: any, AdditionalInformation?: any, Priority?: any, Attrib?: any, Picture?: Picture, FolderId?: number): void
        Picture(Picture: Picture, MessageText?: any, AdditionalInformation?: any, Priority?: any, Attrib?: any, FolderId?: number): string
        File(FileName: string, MessageText?: any, AdditionalInformation?: any, Priority?: number, Attrib?: any, FolderId?: number): string
        Link(Link: string, MessageText?: any, AdditionalInformation?: any, Priority?: number, Attrib?: any, FolderId?: number): void
        LockEvents(Count: number): void
        UnlockEvents(): void
        CreateFolder(MessageText: any, AdditionalInformation?: any, Priority?: any, any?: any, OwnerFolderId?: number): number
        FolderCount(): number
        PushLogFolder(FolderId: number): void
        PopLogFolder(): void
        SaveResultsAs(FileName: string, LogFormat: number, ExportVisualizerImages: boolean, LogScope: number): boolean
        CreateIssueFromCurrentLog(): boolean
        CreateNewAttributes(): any
        AppendFolder(MessageText: any, AdditionalInformation?: any, Priority?: any, any?: any, OwnerFolderId?: number): number
        Checkpoint(MessageText: any, AdditionalInformation?: any, Priority?: any, any?: any, Picture?: Picture, FolderId?: number): void
        SaveToDisk(): void
    }

    interface aqConvert {
        IntToStr(I: number): string
        StrToInt(S: string): number
        StrToInt64(S: string): number
        FloatToStr(F: number): string
        StrToFloat(S: string): number
        VarToBool(V: any): boolean
        VarToFloat(V: any): number
        VarToInt(V: any): number
        VarToStr(V: any): string
        DateTimeToStr(D: any): string
        TimeIntervalToStr(Interval: any): string
        DateTimeToFormatStr(D: any, FormatStr: string): string
        StrToDateTime(S: string): any
        StrToDate(S: string): any
        StrToTime(S: string): any
        CurrencyToStr(C: any): string
        StrToCurrency(S: string): any
        CurrencyToFormatStr(C: any, iNumDigits: number, iLncLead: number, iUseParens: number, iGroup: number): string
    }

    interface DateTime {
    }

    interface aqDateTime {
        Now(): DateTime
        SetDateElements(Year: number, Month: number, Day: number): DateTime
        SetTimeElements(Hour: number, Min: number, Sec: number): DateTime
        Time(): DateTime
        GetDayOfWeek(InputDate: DateTime): number
        SetDateTimeElements(Year: number, Month: number, Day: number, Hour: number, Min: number, Sec: number): DateTime
        IsLeapYear(Year: number): boolean
        GetDayOfYear(InputDate: DateTime): number
        GetDay(InputDate: DateTime): number
        GetHours(InputDate: DateTime): number
        GetYear(InputDate: DateTime): number
        GetMinutes(InputDate: DateTime): number
        GetMonth(InputDate: DateTime): number
        GetSeconds(InputDate: DateTime): number
        Today(): DateTime
        AddTime(InputDate: DateTime, Days: number, Hours: number, Minutes: number, Seconds: number): DateTime
        TimeInterval(InputTime1: DateTime, InputTime2: DateTime): DateTime
        /** -1 if Date1 is earlier than Date2 
         * 0 if dates equal
         * 1 if Date1 is later than Date2
        */
        Compare(Date1: DateTime, DateTime: DateTime): number
        AddMinutes(InputDate: DateTime, Minutes: number): DateTime
        AddHours(InputDate: DateTime, Hours: number): DateTime
        AddSeconds(InputDate: DateTime, Seconds: number): DateTime
        AddDays(InputDate: DateTime, Days: number): DateTime
        AddMonths(InputDate: DateTime, Months: number): DateTime
        SetSystemDateTime(NewDateTime: DateTime): boolean
    }

    interface aqEnvironment {
        LanguageForNonUnicodePrograms: string
        GetWinVersionBuild(): number
        GetWinMajorVersion(): number
        GetWinMinorVersion(): number
        GetWinAdditionalInfo(): string
        GetWinPlatform(): number
        SetKeyboardLayout(ProcessId: number, Locale: string): boolean
        GetKeyboardLayout(WindowHandle: number): string
        IsLanguageSupported(Locale: number): boolean
        IsPluginInstalled(PluginName: string): boolean
        IsScriptExtensionInstalled(PluginName: string, PluginAuthor: string, PluginVersion: string): boolean
        GetEnvironmentVariable(VarName: string, Is64bitProcess?: boolean): string
        RebootAndContinue(ScriptProcName: string, Password: string, UserName: string, Domain: string): boolean
        SetLocaleInfo(Locale: number, Type: number, Data: string): boolean
        GetLocaleInfo(Locale: number, Type: number): string
    }

    interface aqFile {
        faWrite: number
        faRead: number
        ctANSI: number
        ctUnicode: number
        ctUTF8: number
        faReadWrite: number
        GetCreationTime(PathToFile: string): any
        GetLastAccessTime(PathToFile: string): any
        GetLastWriteTime(PathToFile: string): any
        GetSize(PathToFile: string): number
        Copy(PathToExistingFile: string, PathToNewFile: string, RenameOnCollision: boolean): boolean
        Delete(PathToFile: string): boolean
        Create(PathToFile: string): number
        Exists(Path: string): boolean
        Rename(OldPath: string, NewPath: string, RenameOnCollision: boolean): boolean
        Move(PathToExistingFile: string, PathToNewFile: string, RenameOnCollision: boolean): boolean
        Compare(PathToFile1: string, PathToFile2: string): boolean
        SetCreationTime(Path: string, Time: any): boolean
        SetLastAccessTime(Path: string, Time: any): boolean
        SetLastWriteTime(Path: string, Time: any): boolean
        GetFileAttributes(PathToFile: string): number
        SetFileAttributes(Path: string, fAttr: number): number
        OpenBinaryFile(Path: string, FileAccess: number, OverwriteOrCreate: boolean): any
        OpenTextFile(Path: string, FileAccess: number, TextCodingType: number, OverwriteOrCreate: boolean): any
        ReadWholeTextFile(Path: string, TextCodingType: number): string
        WriteToTextFile(Path: string, String: string, TextCodingType: number, OverwriteOrCreate: boolean): boolean
    }

    interface aqFileSystem {
        Drives: any
        fattrSet: number
        fattrInvert: number
        fattrFree: number
        faReadOnly: number
        faHidden: number
        faSystem: number
        faDirectory: number
        faArchive: number
        faDevice: number
        faNormal: number
        faTemporary: number
        faSparseFile: number
        faReparsePoint: number
        faCompressed: number
        faOffline: number
        faNotContentIndexed: number
        faEncrypted: number
        faVirtual: number
        CreateFolder(Path: string): number
        DeleteFolder(Path: string, RemoveNonEmpty: boolean): boolean
        GetCurrentFolder(): string
        SetCurrentFolder(DirStr: string): boolean
        DeleteFile(PathToFile: string): boolean
        MoveFile(PathToExistingFile: string, PathToNewFile: string, RenameOnCollision: boolean): boolean
        CopyFile(PathToExistingFile: string, PathToNewFile: string, RenameOnCollision: boolean): boolean
        GetShortPathName(longPath: string): string
        Exists(Path: string): boolean
        MoveFolder(Source: string, Destination: string, RenameOnCollision: boolean): boolean
        CopyFolder(Source: string, Destination: string, RenameOnCollision: boolean): boolean
        GetFileName(PathToFile: string): string
        GetFileNameWithoutExtension(PathToFile: string): string
        IncludeTrailingBackSlash(PathToFolder: string): string
        ExcludeTrailingBackSlash(PathToFolder: string): string
        GetRelativePath(CurrentFolder: string, AbsoluteFileName: string): string
        GetFileDrive(PathToFile: string): string
        ExpandUNCFileName(InPath: string): string
        RenameFile(OldPath: string, NewPath: string, RenameOnCollision: boolean): boolean
        RenameFolder(OldPath: string, NewPath: string): boolean
        GetFileFolder(PathToFile: string): string
        GetFileExtension(PathToFile: string): string
        ExpandFileName(InPath: string): string
        FindFiles(Path: string, SearchPattern: string, SearchInSubDirs?: boolean): ObjectIterator
        FindFolders(Path: string, SearchPattern: string, SearchInSubDirs?: boolean): ObjectIterator
        GetFileInfo(Path: string): any
        GetFolderInfo(Path: string): any
        GetDriveInfo(Drive: string): any
        ChangeAttributes(Path: string, Attribute: number, Action: number): number
        CheckAttributes(Path: string, Attribute: number): boolean
        MapNetworkDrive(LocalName: string, Path: string, User: string, Password: string, Remember: boolean): number
        DisconnectNetworkDrive(Name: string, Force: boolean, Remember: boolean): number
    }

    interface ObjectIterator {
        Count: number
        HasNext(): boolean
        Next(): any
        Reset(): void
        Skip(SkipCount: number): any
        Item(Index: number): any
    }

    interface aqObject {
        varEmpty: number
        varNull: number
        varSmallInt: number
        varInteger: number
        varSingle: number
        varDouble: number
        varCurrency: number
        varDate: number
        varOleStr: number
        varDispatch: number
        varError: number
        varBoolean: number
        varVariant: number
        varUnknown: number
        varShortInt: number
        varByte: number
        varWord: number
        varLongWord: number
        varInt64: number
        varArray: number
        varByRef: number
        EmptyVariant: any
        EmptyObject: any
        GetVarType(VarParam: any): number
        IsSupported(IObject: any, MemberName: string): boolean
        GetPropertyValue(IObject: any, PropertyName: string): any
        SetPropertyValue(IObject: any, PropertyName: string, Value: any): any
        CallMethod(IObject: any, MethodName: string): any
        RaiseEvent(IObject: any, EventName: string): boolean
        GetProperties(SourceObject: any, ShowHidden?: boolean): ObjectIterator
        GetFields(SourceObject: any, ShowHidden?: boolean): ObjectIterator
        GetMethods(SourceObject: any, ShowHidden?: boolean): ObjectIterator
        GetEvents(SourceObject: any, ShowHidden?: boolean): ObjectIterator
        CompareProperty(Property: any, Condition: number, Value: any, CaseSensitive: boolean, MessageType: number): boolean
        SaveObjectSnapshotToFile(AObject: any, FileName: string, SaveRecursive: boolean, SaveAllProperties: boolean, AdditionalProperties: string, SaveFields: boolean, SaveMethods: boolean, Depth: number): boolean
        CheckProperty(Object: any, Property: string, Condition: number, Value: any, CaseSensitive?: boolean): boolean
    }

    interface aqUtils {
        Delay(ms: number, Str?: string): void
        Beep(Freq: number, Duration: number): void
        SysErrorMessage(ErrorCode: number): string
        Win32Check(ExitCode: boolean): boolean
        IsValidIdent(Ident: string): boolean
        GetCOMServerPath(Server: string, Is64bit: boolean): string
    }

    interface aqString {
        stLeading: number
        stTrailing: number
        stAll: number
        QuoteSymbol: string
        ListSeparator: string
        Trim(InputString: string, Space: number): string
        Concat(String1: string, String2: string): string
        Quote(InputString: string): string
        GetLength(SourceString: string): number
        ToUpper(InputString: string): string
        ToLower(InputString: string): string
        Insert(InputString: string, InsertString: string, InsertPosition: number): string
        SubString(InputString: string, StartPosition: number, Length: number): string
        GetChar(InputString: string, Position: number): string
        Remove(InputString: string, StartPosition: number, Length: number): string
        Find(InputString: string, SubString: string, StartPosition?: number, CaseSensitive?: boolean): number
        Compare(String1: string, String2: string, CaseSensitive: boolean): number
        Replace(InputString: string, StringToReplace: string, SubsString: string, CaseSensitive: boolean): string
        Unquote(InputString: string): string
        StrMatches(ExprStr: string, Str: string): boolean
        GetListLength(List: string): number
        GetListItem(List: string, Index: number): string
        AddListItem(List: string, NewItem: string, Index: number): string
        DeleteListItem(List: string, Index: number): string
        ChangeListItem(List: string, NewItem: string, Index: number): string
        Format(Format: string): string
        FindLast(InputString: string, SubString: string, CaseSensitive: boolean): number
    }

    interface aqPerformance {
        Value(CounterName: string): number
        Start(CounterName: string, WarnIfExists?: boolean): void
        Check(MaxExecTime: number, OperationName: string, CounterName: string): boolean
    }

    interface BuiltIn {
        cl3DDkShadow: number
        cl3DLight: number
        clActiveBorder: number
        clActiveCaption: number
        clAppWorkSpace: number
        clAqua: number
        clBackground: number
        clBlack: number
        clBlue: number
        clBtnFace: number
        clBtnHighlight: number
        clBtnShadow: number
        clBtnText: number
        clCaptionText: number
        clCream: number
        clDefault: number
        clDkGray: number
        clFuchsia: number
        clGradientActiveCaption: number
        clGradientInactiveCaption: number
        clGray: number
        clGrayText: number
        clGreen: number
        clHighlight: number
        clHighlightText: number
        clHotLight: number
        clInactiveBorder: number
        clInactiveCaption: number
        clInactiveCaptionText: number
        clInfoBk: number
        clInfoText: number
        clLime: number
        clLtGray: number
        clMaroon: number
        clMedGray: number
        clMenu: number
        clMenuBar: number
        clMenuHighlight: number
        clMenuText: number
        clMoneyGreen: number
        clNavy: number
        clNone: number
        clOlive: number
        clPurple: number
        clRed: number
        clScrollBar: number
        clSilver: number
        clSkyBlue: number
        clSystemColor: number
        clTeal: number
        clWhite: number
        clWindow: number
        clWindowFrame: number
        clWindowText: number
        clYellow: number
        cmpContains: number
        cmpEndsWith: number
        cmpEqual: number
        cmpGreater: number
        cmpGreaterOrEqual: number
        cmpIn: number
        cmpLess: number
        cmpLessOrEqual: number
        cmpMatches: number
        cmpNotContains: number
        cmpNotEndsWith: number
        cmpNotEqual: number
        cmpNotIn: number
        cmpNotMatches: number
        cmpNotStartsWith: number
        cmpStartsWith: number
        ctBoolean: number
        ctDateTime: number
        ctFloat: number
        ctHyperlink: number
        ctImage: number
        ctInteger: number
        ctString: number
        ExtendedColorsCount: number
        ldtPicture: number
        ldtTable: number
        ldtText: number
        lesCurrentProject: number
        lesCurrentTestItem: number
        lesFull: number
        lmError: number
        lmMessage: number
        lmNone: number
        lmWarning: number
        lsHTML: number
        lsMHT: number
        lsXML: number
        ltfHTML: number
        ltfPlain: number
        ltfURL: number
        ltfXML: number
        mbAbort: number
        mbAbortIgnore: number
        mbAbortRetryIgnore: number
        mbAll: number
        mbCancel: number
        mbHelp: number
        mbIgnore: number
        mbNo: number
        mbNoToAll: number
        mbOK: number
        mbOKCancel: number
        mbRetry: number
        mbYes: number
        mbYesAllNoAllCancel: number
        mbYesNoCancel: number
        mbYesToAll: number
        mrAbort: number
        mrAll: number
        mrCancel: number
        mrIgnore: number
        mrNo: number
        mrNone: number
        mrNoToAll: number
        mrOk: number
        mrRetry: number
        mrYes: number
        mrYesToAll: number
        mtConfirmation: number
        mtCustom: number
        mtError: number
        mtInformation: number
        mtWarning: number
        pmHigher: number
        pmHighest: number
        pmLower: number
        pmLowest: number
        pmNormal: number
        propAccessRead: number
        propAccessWrite: number
        StandardColorsCount: number
        varAny: number
        varArray: number
        varBoolean: number
        varByRef: number
        varByte: number
        varCurrency: number
        varDate: number
        varDispatch: number
        varDouble: number
        varEmpty: number
        varError: number
        varInt64: number
        varInteger: number
        varLongWord: number
        varNull: number
        varOleStr: number
        varShortInt: number
        varSingle: number
        varSmallint: number
        varStrArg: number
        varString: number
        varTypeMask: number
        varUnknown: number
        varVariant: number
        varWord: number
        CreateVariantArray(Param1: number, Param2: number): any
        CreateVariantArray2(Param1: number, Param2: number, Param3: number, Param4: number): any
        CreateVariantArray3(Param1: number, Param2: number, Param3: number, Param4: number, Param5: number, Param6: number): any
        GetOrd(Param1: any): any
        InputBox(Param1: string, Param2: string, Param3: string): string
        InputQuery(Param1: string, Param2: string, Param3: string): boolean
        Log(Param1: number): number
        MessageDlg(Param1: string, Param2: number, Param3: number, Param4: number): number
        ParamCount(): number
        ParamStr(Param1: number): string
        SendMail(Param1: string, Param2: string, Param3: string, Param4: string, Param5: string, Param6: string, Param7: string): boolean
        ShowMessage(Param1: string): void
        VarArrayHighBound(Param1: any, Param2: number): number
        VarArrayLowBound(Param1: any, Param2: number): number
        VarArrayRedim(Param1: any, Param2: number): void
        VarClear(Param1: any): void
    }

    interface Runner {
        Start(): void
        Stop(CurrentTestOnly: boolean): void
        Halt(ErrorString: string): void
        CallMethod(ComplexName: string): void
        CallObjectMethodAsync(Obj: any, MethodName: any): any
        SetObjectPropertyAsync(Obj: any, PropertyName: any): any
        Pause(): void
    }

    interface slPacker {
        Pack(FileList: string, ArchiveRootPath: string, ArchivePath: string): boolean
        PackCurrentTest(ArchivePath: string): boolean
        GetFileListFromFolder(FolderName: string): string
    }

}

/** declarations */

declare var Aliases: TestComplete.Aliases
declare var aqConvert: TestComplete.aqConvert
declare var aqDateTime: TestComplete.aqDateTime
declare var aqEnvironment: TestComplete.aqEnvironment
declare var aqFile: TestComplete.aqFile
declare var aqFileSystem: TestComplete.aqFileSystem
declare var aqObject: TestComplete.aqObject
declare var aqUtils: TestComplete.aqUtils
declare var aqString: TestComplete.aqString
declare var aqPerformance: TestComplete.aqPerformance
declare var BuiltIn: TestComplete.BuiltIn
declare var Browsers: TestComplete.Browsers
declare var Consts: TestComplete.Consts
declare var Indicator: TestComplete.Indicator
declare var Log: TestComplete.Log
declare var NameMapping: TestComplete.NameMapping
declare var Project: TestComplete.Project
declare var ProjectSuite: TestComplete.ProjectSuite
declare var Runner: TestComplete.Runner
declare var slPacker: TestComplete.slPacker
declare var Sys: TestComplete.Sys
declare var TestedApps: TestComplete.TestedApps
declare var Utils: TestComplete.Utils
declare var DBTables: TestComplete.DBTables
declare var Files: TestComplete.Files
declare var Objects: TestComplete.Objects
declare var Regions: TestComplete.Regions
declare var Tables: TestComplete.Tables
declare var WebTesting: TestComplete.WebTesting
declare var XML: TestComplete.XML