const {createReadStream, createWriteStream} = require("fs")
const {parse} =                               require("papaparse")
const Logger =                                require('../console/Logger')

const logger = Logger.get

/**
 * Copy the file from CSV to Json.
 *
 * It relocates the file from "resources/csv/{fileName}.csv"
 * to "{compiledPath}/{fileName}.json"
 *
 * @param {string} fileName The file name (without any path & extension)
 * @param {string} compiledPath The path compiled (from the root folder)
 */
module.exports = function readFile(fileName, compiledPath,) {
    const file = createReadStream(`${__dirname}/../../../resources/csv/${fileName}.csv`,)
    const writeSteam = createWriteStreamFromFileName(fileName, compiledPath,)

    parse(file, {
        complete: result => writeSteam.end(JSON.stringify(result.data)),
    },)
}

/**
 * Create a {@link module:fs.WriteStream write stream} with the file name
 * & some log messages during the opening, exception & the end
 *
 * @param {string} fileName The file name (without any path & extension)
 * @param {string} compiledPath The compiled path (from the root folder)
 * @returns {module:fs.WriteStream} A new write stream setup with logs
 */
function createWriteStreamFromFileName(fileName, compiledPath,) {
    const writeSteam = createWriteStream(`${__dirname}/../../../${compiledPath}/${fileName}.json`,)
    writeSteam
        .on('open', () => logger.log(`Reading file "${fileName}".`))
        .on('finish', () => logger.success(`Finished reading file "${fileName}".`))
        .on('error', error => {
            logger.warn(`An error happened with the file "${fileName}".`)
            logger.error(error)
        })
    return writeSteam
}
