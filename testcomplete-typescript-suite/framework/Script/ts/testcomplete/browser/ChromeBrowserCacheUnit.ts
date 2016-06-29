//USEUNIT BrowserCacheUnit

class ChromeBrowserCache extends BrowserCache {
    private path(): string {
        const LocalAppData = "LocalAppData"
        const ChromeUserDataPath = "\\Google\\Chrome\\User Data\\Default"
        return aqEnvironment.GetEnvironmentVariable(LocalAppData) +
            ChromeUserDataPath
    }

    private clearFolders(): this {
        const extensions: string = "extension"
        const deletePopulatedFolders: boolean = true;
        let folders = aqFileSystem.FindFolders(this.path(), "*", true)
        if (folders) {
            while (folders.HasNext()) {
                let folder = folders.Next()
                if (aqString.Find(aqString.ToLower(folder.Name), extensions) == -1) {
                    this.log("Deleting folder " + folder.Name)
                    folder.Delete(deletePopulatedFolders)
                }
            }
        }
        return this
    }

    private clearFiles(): this {
        const preferences: string = "preference"
        let files: TestComplete.ObjectIterator =
            aqFileSystem.FindFiles(this.path(), "*.*", true)
        if (files) {
            while (files.HasNext()) {
                let file = files.Next()
                if (aqString.Find(aqString.ToLower(file.Name), preferences) == -1) {
                    this.log("Deleting file " + file.Name)
                    file.Delete()
                }
            }
        }
        return this
    }

    public clear(): this {
        return this
            .clearFolders()
            .clearFiles()
    }
}

// surface function for test item
function clearChromeCache() {
    new ChromeBrowserCache().clear()
}