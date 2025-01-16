const {copyFile} =    require('fs');
const ImageTemplate = require('./ImageTemplate');
const Logger =        require('./console/Logger');

const logger = Logger.get;

[
    new ImageTemplate('public/game',                                       'Super Mario Maker',                  'Super Mario Maker',                  'svg',),
    new ImageTemplate('public/game',                                       'Super Mario Maker for Nintendo 3DS', 'Super Mario Maker for Nintendo 3DS', 'svg',),
    new ImageTemplate('public/game',                                       'Super Mario Maker 2',                'Super Mario Maker 2',                'svg',),

    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_parachute_00',              'Parachute',                          'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Wing_00',                   'Wing',                               'tiff',),

    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Key_00',                    'Key',                                'tiff',),

    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_OnpuBlock_01',              'Music Block',                        'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_HatenaBlock_00',            '？ Block',                           'tiff',),
    new ImageTemplate('public/entity/editor',                              '3W_Lyt_P_HatenaBlock_00',            '？ Block (SM3DW)',                   'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_OnOffSwitch_00',            'ON／OFF Block',                      'tiff',),

    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Dokan_00',                  'Pipe',                               'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_KillerHoudai_00',           'Bullet Launcher',                    'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Tornado_00',                'Twister',                            'tiff',),
    new ImageTemplate('public/entity/editor',                              '3W_Lyt_P_BellTree_00',               'Tree',                               'tiff',),

    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_SuperKinoko_00',            'Super Mushroom',                     'tiff',),
    new ImageTemplate('public/entity/in game/M1 Item - KinokoFunny',       'kinokofunny.0',                      'Weird Mushroom',                     'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_FireFlower_00',             'Fire Flower',                        'tiff',),
    new ImageTemplate('public/entity/editor',                              'M1_Lyt_P_FireFlower_01',             'Superball Flower',                   'tiff',),
    new ImageTemplate('public/entity/in game/M1 Item - CharaKinoko',       'Add_kinoko',                         'Mystery Mushroom',                   'tiff',),
    new ImageTemplate('public/entity/editor',                              'M1_Lyt_P_SuperKinoko_01',            'Master Sword',                       'tiff',),
    new ImageTemplate('public/entity/in game/M1 Item - MegaKinoko2',       'wait.0',                             'Big Mushroom',                       'tiff',),
    new ImageTemplate('public/entity/in game/M1 Item - MegaKinoko',        'wait.0',                             'Big Mushroom (classic)',             'tiff',),
    new ImageTemplate('public/entity/editor',                              'M1_Lyt_P_KinokoUSA_00',              'SMB2 Mushroom',                      'tiff',),
    new ImageTemplate('public/entity/editor',                              'M3_Lyt_P_SuperKonoha_00',            'Super Leaf',                         'tiff',),
    new ImageTemplate('public/entity/editor',                              'M3_Lyt_P_FrogSuit_00',               'Frog Suit',                          'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_MantleWing_00',             'Cape Feather',                       'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_PowerBalloon_00',           'Power Balloon',                      'tiff',),
    new ImageTemplate('public/entity/editor',                              'WU_Lyt_P_PropellerKinoko_00',        'Propeller Mushroom',                 'tiff',),
    new ImageTemplate('public/entity/editor',                              'WU_Lyt_P_SuperDonguri_00',           'Super Acorn',                        'tiff',),
    new ImageTemplate('public/entity/editor',                              '3W_Lyt_P_SuperBell_00',              'Super Bell',                         'tiff',),
    new ImageTemplate('public/entity/editor',                              '3W_Lyt_P_SuperHammer_00',            'Super Hammer',                       'tiff',),
    new ImageTemplate('public/entity/editor',                              '3W_Lyt_P_BoomerangFlower_00',        'Boomerang Flower',                   'tiff',),
    new ImageTemplate('public/entity/clear condition',                     'M3_Lyt_M_KutsuKuribo_00',            'Shoe',                               'tiff',),
    new ImageTemplate('public/entity/in game/M3 Enemy - KutsuKuriboB',     'wait.0',                             'Stiletto',                           'tiff',),
    new ImageTemplate('resources/image',                                   'Yoshi (square)',                     'Yoshi',                              'png',)   ,
    new ImageTemplate('resources/image',                                   'Red Yoshi (square)',                 'Red Yoshi',                          'png',)   ,
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Karon_01',                  'Dry Bones Shell',                    'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Met_01',                    'Buzzy Shell',                        'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Togezo_01',                 'Spiny Shell',                        'tiff',),
    new ImageTemplate('public/entity/editor',                              'MW_Lyt_P_Jugem_01',                  'Lakitu Cloud',                       'tiff',),
    new ImageTemplate('resources/image',                                   'MW Enemy - KoopaClown - wait.0',     'Clown Car',                          'tiff',),

    new ImageTemplate('resources/image',                                   'Swinging Claw (square)',             'Swinging Claw',                      'png',)   ,
    new ImageTemplate('resources/image',                                   'Lakitu throwing (square)',           'Lakitu (throwing)',                  'png',)   ,
    new ImageTemplate('resources/image',                                   'Stacked Goomba (square)',            'Stacked Goomba',                     'png',)   ,
].forEach(({oldName, oldPath, fullOldName, newName, fullNewName,}) => {
    logger.log(`Copying the file ("${oldName}" → "${newName}")`)
    copyFile(fullOldName, fullNewName, error => {
        if (error != null) {
            logger.warn(`The file ("${oldName}" → "${newName}") could not be copied ("${oldPath}" → "src/${ImageTemplate.NEW_PATH}").`)
            logger.error(error)
        } else
            logger.success(`The file ("${oldName}" → "${newName}") has been copied successfully ("${oldPath}" → "src/${ImageTemplate.NEW_PATH}").`)
    });
})
