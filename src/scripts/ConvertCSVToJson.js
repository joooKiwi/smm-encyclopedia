const {createReadStream, createWriteStream} = require("fs")
const {parse} =                               require("papaparse")
const Logger =                                require('./console/Logger')

const logger = Logger.get

/**
 * The stream option (x4 the original buffer) for the file reading
 *
 * @type ReadStreamOptions
 */
const largeBufferSize = {highWaterMark: 256 * 1024,};

[
    'Entity',
    'Character name',
    'Entity limit',
    'Entity category',
    'Theme',
    'Game reference',
    'Game style',
    'Entity behaviour',
    'Sound effect',
    'Sound effect category',
    'Course tag (SMM2)',
    'Predefined message (SMM2)',
    'Mystery Mushroom (SMM)',
    'Mii Costume (SMM2)',
    'Mii Costume category (SMM2)',
    'Instrument',
    'Other word in the game',
].forEach(it => convertFileFromCsvToJson(it,))
/**
 * Copy the file from CSV to Json.
 *
 * It relocates the file from "resources/csv/{fileName}.csv"
 * to "{compiledPath}/{fileName}.json"
 *
 * @param {string} fileName The file name (without any path & extension)
 */
function convertFileFromCsvToJson(fileName,) {
    const startingTime = Date.now(),
        path = `${__dirname}/../../resources/csv/${fileName}.csv`,
        file = fileName === 'Entity' ? createReadStream(path, largeBufferSize,) : createReadStream(path,),
        writeSteam = createWriteStreamFromFileName(startingTime, fileName,)

    parse(file, {
        dynamicTyping: true,
        header: true,
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
 * @returns {module:fs.WriteStream} A new write stream setup with logs
 */
function createWriteStreamFromFileName(startingTime, fileName,) {
    return createWriteStream(`${__dirname}/../../src/resources/compiled/${fileName}.json`,)
        .on('open', () => logger.log(`Reading file "${fileName}".`))
        .on('finish', () => logger.success(`Finished reading file "${fileName}" in ${Date.now() - startingTime} milliseconds.`))
        .on('error', error => {
            logger.warn(`An error happened with the file "${fileName}".`)
            logger.error(error)
        })
}

/** A simple invalid case for strings that has <i>(for some reason)</i> "_${number}" after its content */
const invalidStringRegex = /_(\d+)/
/**
 * Transform the value (if it is a string) to remove the \r
 *
 * @param {unknown} value The value to transform
 * @returns {unknown} The transformed value
 */
function transformValue(value,) {
    if (typeof value == 'string') {
        if (value.includes('\r'))
            return value.replaceAll('\r', '',).replaceAll('\r\n', '\n',)
        if (invalidStringRegex.test(value)) {
            return value.substring(0, value.indexOf('_'))
        }
    }
    return value
}
