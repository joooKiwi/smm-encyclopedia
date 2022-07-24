const {copyFile} =    require('fs');
const ImageTemplate = require('./ImageTemplate');
const Logger =        require('./console/Logger');

const logger = Logger.get;

[
    new ImageTemplate('entity/1 - SMB/In game/SMM1/Item - Kinoko2', 'wait.0', 'Mystery Mushroom', 'png',),
    new ImageTemplate('entity/3 - SMW/Editor', 'MW_Lyt_P_OnpuBlock_01', 'Music Block', 'tiff',),
].forEach(({oldName, oldPath, fullOldName, newName, newPath, fullNewName,}) => {
    logger.log(`Moving the file ("${oldName}" → "${newName}")`)
    copyFile(fullOldName, fullNewName, error => {
        if (error != null) {
            logger.warn(`The file ("${oldName}" → "${newName}") could not be moved ("${oldPath}" → "${newPath}").`)
            logger.error(error)
        } else
            logger.success(`The file ("${oldName}" → "${newName}") has been moved successfully ("${oldPath}" → "${newPath}").`)
    });
})
