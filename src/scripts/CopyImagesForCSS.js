const {copyFile} =    require('fs');
const ImageTemplate = require('./ImageTemplate');
const Logger =        require('./console/Logger');

const logger = Logger.get;

[
    new ImageTemplate('game',                                       'Super Mario Maker',                  'Super Mario Maker',                  'svg',),
    new ImageTemplate('game',                                       'Super Mario Maker for Nintendo 3DS', 'Super Mario Maker for Nintendo 3DS', 'svg',),
    new ImageTemplate('game',                                       'Super Mario Maker 2',                'Super Mario Maker 2',                'svg',),

    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_OnpuBlock_01',              'Music Block',                        'tiff',),
    new ImageTemplate('entity/5 - SM3DW/Editor',                    '3W_Lyt_P_HatenaBlock_00',            'Question Block (SM3DW)',             'tiff',),

    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_SuperKinoko_00',            'Super Mushroom',                     'tiff',),
    //TODO add Weird Mushroom image
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_FireFlower_00',             'Fire Flower',                        'tiff',),
    new ImageTemplate('entity/1 - SMB/Editor',                      'M1_Lyt_P_FireFlower_01',             'Superball Flower',                   'tiff',),
    new ImageTemplate('entity/1 - SMB/In game/SMM1/Item - Kinoko2', 'wait.0',                             'Mystery Mushroom',                   'png',),//TODO change to tiff
    new ImageTemplate('entity/1 - SMB/Editor',                      'M1_Lyt_P_SuperKinoko_01',            'Master Sword',                       'tiff',),
    //TODO add Big Mushroom image
    new ImageTemplate('entity/1 - SMB/Editor',                      'M1_Lyt_P_KinokoUSA_00',              'SMB2 Mushroom',                      'tiff',),
    new ImageTemplate('entity/2 - SMB3/Editor',                     'M3_Lyt_P_SuperKonoha_00',            'Super Leaf',                         'tiff',),
    new ImageTemplate('entity/2 - SMB3/Editor',                     'M3_Lyt_P_FrogSuit_00',               'Frog Suit',                          'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_MantleWing_00',             'Cape Feather',                       'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_PowerBalloon_00',           'Power Balloon',                      'tiff',),
    new ImageTemplate('entity/4 - NSMBU/Editor',                    'WU_Lyt_P_PropellerKinoko_00',        'Propeller Mushroom',                 'tiff',),
    new ImageTemplate('entity/4 - NSMBU/Editor',                    'WU_Lyt_P_SuperDonguri_00',           'Super Acorn',                        'tiff',),
    new ImageTemplate('entity/5 - SM3DW/Editor',                    '3W_Lyt_P_SuperBell_00',              'Super Bell',                         'tiff',),
    new ImageTemplate('entity/5 - SM3DW/Editor',                    '3W_Lyt_P_SuperHammer_00',            'Super Hammer',                       'tiff',),
    new ImageTemplate('entity/5 - SM3DW/Editor',                    '3W_Lyt_P_BoomerangFlower_00',        'Boomerang Flower',                   'tiff',),
    new ImageTemplate('entity/2 - SMB3/Clear Condition',            'M3_Lyt_M_KutsuKuribo_00',            'Shoe',                               'tiff',),
    //TODO add Stiletto image
    //TODO add Yoshi image

    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_Karon_01',                  'Dry Bones Shell',                    'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_Met_01',                    'Buzzy Shell',                        'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_Togezo_01',                 'Spiny Shell',                        'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_Jugem_01',                  'Lakitu Cloud',                       'tiff',),
    new ImageTemplate('entity/3 - SMW/Editor',                      'MW_Lyt_P_KoopaClown_00',             'Clown Car',                          'tiff',),
    //TODO add Swinging Claw image
].forEach(({oldName, oldPath, fullOldName, newName, newPath, fullNewName,}) => {
    logger.log(`Copying the file ("${oldName}" → "${newName}")`)
    copyFile(fullOldName, fullNewName, error => {
        if (error != null) {
            logger.warn(`The file ("${oldName}" → "${newName}") could not be copied ("${oldPath}" → "${newPath}").`)
            logger.error(error)
        } else
            logger.success(`The file ("${oldName}" → "${newName}") has been copied successfully ("${oldPath}" → "${newPath}").`)
    });
})
