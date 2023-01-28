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
module.exports = function convertFileFromCsvToJson(fileName, compiledPath,) {
    const startingTime = Date.now()
    const file = createReadStream(`${__dirname}/../../../resources/csv/${fileName}.csv`,)
    const writeSteam = createWriteStreamFromFileName(startingTime, fileName, compiledPath,)

    parse(file, {
        complete: result => writeSteam.end(JSON.stringify(result.data)),
        transform: value => transformValue(value),
    },)
}

/**
 * Create a {@link module:fs.WriteStream write stream} with the file name
 * & some log messages during the opening, exception & the end
 *
 * @param {number} startingTime The starting time of the conversion
 * @param {string} fileName The file name (without any path & extension)
 * @param {string} compiledPath The compiled path (from the root folder)
 * @returns {module:fs.WriteStream} A new write stream setup with logs
 */
function createWriteStreamFromFileName(startingTime, fileName, compiledPath,) {
    const writeSteam = createWriteStream(`${__dirname}/../../../${compiledPath}/${fileName}.json`,)
    writeSteam
        .on('open', () => logger.log(`Reading file "${fileName}".`))
        .on('finish', () => logger.success(`Finished reading file "${fileName}" in ${Date.now() - startingTime} milliseconds.`))
        .on('error', error => {
            logger.warn(`An error happened with the file "${fileName}".`)
            logger.error(error)
        })
    return writeSteam
}

/**
 * Transform the value (if it is a string) to remove the \r
 *
 * @param {unknown} value The value to transform
 * @returns {unknown} The transformed value
 */
function transformValue(value,){
    if(typeof value == 'string' && value.includes('\r'))
        return value.replaceAll('\r', '',).replaceAll('\r\n', '\n',)
    return value
}
