const files =    require('./csv/files')
const readFile = require('./csv/readFile')

const COMPILE_PATH = 'src/resources/compiled'
files.forEach(fileName => readFile(fileName, COMPILE_PATH,))
