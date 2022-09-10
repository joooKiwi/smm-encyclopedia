const {copyFile, exists, lstat, mkdir, readdir} = require('fs-extra')
const Logger =                                    require('./console/Logger')

const logger = Logger.get

/**
 * Copy the local files from a source to a destination.
 *
 * It keeps the same hierarchy from the source to the destination.
 *
 * @param {string} source The source path
 * @param {string} destination The destination path
 * @returns {Promise<void>}
 */
async function copyLocaleFiles(source, destination,) {
    logger.log(`Copying "${source}" to "${destination}"`)
    if (!await exists(source))
        return logger.error(`The file "${source}" does not exist`)
    if (!(await lstat(source)).isDirectory())
        return

    await createFolder(destination)
    logger.log(`Reading files or folders on "${source}".`)
    const files = (await readdir(source))
    for (const name of files) {
        if ((await lstat(`${source}/${name}`)).isDirectory()) {
            copyLocaleFiles(`${source}/${name}`, `${destination}/${name}`,)
            continue
        }
        copyLocalFile(name, source, destination,)
    }
}

/**
 * Create the folder only if it is not existant
 *
 * @param {string} folder The folder to create (if it does not exist)
 * @returns {Promise<void>}
 */
async function createFolder(folder,) {
    if (await exists(folder))
        return
    logger.log(`Creating folder "${folder}".`)
    await mkdir(folder)
}

/**
 * Copy the locale file from a source to a destination
 *
 * @param {string} name The file name
 * @param {string} source The source path of the file
 * @param {string} destination The destination path of the file
 */
function copyLocalFile(name, source, destination,) {
    copyFile(`${__dirname}/../../${source}/${name}`, `${__dirname}/../../${destination}/${name}`,)
    logger.success(`The file "${name}" was copied from "${source}" to "${destination}".`)
}

copyLocaleFiles('resources/locale', 'src/lang/locale',)
