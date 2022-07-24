const {createReadStream, createWriteStream} = require("fs");
const {parse} =                               require("papaparse");
const Logger =                                require('./console/Logger');

const logger = Logger.get;

[
    'Entity',
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
].forEach(fileName => {
    const file = createReadStream(`${__dirname}/../resources/${fileName}.csv`,)
    const writeSteam = createWriteStream(`${__dirname}/../resources/compiled/${fileName}.json`,)
    writeSteam
        .on('open', () => logger.log(`Reading file "${fileName}".`))
        .on('finish', () => logger.success(`Finished reading file "${fileName}".`))
        .on('error', error => {
            logger.warn(`An error happened with the file "${fileName}".`)
            logger.error(error)
        })

    parse(file, {
        complete: result => writeSteam.end(JSON.stringify(result.data)),
    },)
})
