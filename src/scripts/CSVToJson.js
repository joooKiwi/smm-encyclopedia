const {createReadStream, createWriteStream} = require("fs");
const Papa =                                  require("papaparse");

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
].forEach(fileName => {
    const file = createReadStream(`${__dirname}/../resources/${fileName}.csv`,)
    const writeSteam = createWriteStream(`${__dirname}/../resources/compiled/${fileName}.json`,)

    writeSteam
        .on('open', () => console.log(`Reading file "${fileName}".`))
        .on('finish', () => console.log(`Finished reading file "${fileName}".`))
        .on('error', error => {
            console.warn(`An error happened with the file "${fileName}".`)
            console.trace(error)
        })

    Papa.parse(file, {
        complete: result => writeSteam.end(JSON.stringify(result.data)),
    },)
})
