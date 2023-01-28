const files =                    require('./csv/files')
const convertFileFromCsvToJson = require('./csv/convertFileFromCsvToJson')

const COMPILE_PATH = 'src/resources/compiled'
files.forEach(fileName => convertFileFromCsvToJson(fileName, COMPILE_PATH,))
