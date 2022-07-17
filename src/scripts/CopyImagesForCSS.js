const {copyFile} = require('fs');

class ImageTemplate {

    //region -------------------- Fields --------------------

    static #NEW_PATH = 'resources/images'

    #oldPath
    #oldName
    #newName
    #extension

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    /**
     * Create a simple image template to be relocated
     *
     * @param {string} oldPath The old path (in the public folder)
     * @param {string} oldName The old name (without the extension)
     * @param {string} newName The new name (without the extension)
     * @param {string} extension The file extension
     */
    constructor(oldPath, oldName, newName, extension,) {
        this.#oldPath = `public/${oldPath}`
        this.#oldName = oldName
        this.#newName = newName
        this.#extension = extension
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    get oldPath() {
        return this.#oldPath
    }

    get fullOldPath() {
        return `${__dirname}/../../${this.oldPath}`
    }

    get oldName() {
        return this.#oldName
    }

    get fullOldName() {
        return `${this.fullOldPath}/${this.oldName}.${this.extension}`
    }


    static get newPath() {
        return this.#NEW_PATH
    }

    get newPath() {
        return ImageTemplate.newPath
    }

    get fullNewPath() {
        return `${__dirname}/../${ImageTemplate.newPath}`
    }

    get newName() {
        return this.#newName
    }

    get fullNewName() {
        return `${this.fullNewPath}/${this.newName}.${this.extension}`
    }


    get extension() {
        return this.#extension
    }

    //endregion -------------------- Getter methods --------------------

}

[
    new ImageTemplate('entity/1 - SMB/In game/SMM1/Item - Kinoko2', 'wait.0', 'Mystery Mushroom', 'png',),
].forEach(({oldName, oldPath, fullOldName, newName, newPath, fullNewName,}) =>
    copyFile(fullOldName, fullNewName, error => {
        if (error != null) {
            console.warn(`The file ("${oldName}" → "${newName}") could not be moved ("${oldPath}" → "${newPath}").`)
            console.trace(error)
        } else
            console.log(`The file ("${oldName}" → "${newName}") has been moved successfully ("${oldPath}" → "${newPath}").`)
    }))
