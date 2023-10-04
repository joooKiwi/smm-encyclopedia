import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                        from 'core/ClassWithEnglishName'
import type {ClassWithReference}                          from 'core/ClassWithReference'
import type {ClassWithNullableEditorVoiceSoundFileHolder} from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {EditorVoiceSound}                            from 'core/editorVoice/sound/EditorVoiceSound'
import type {Names, Ordinals, PossibleEnglishName}        from 'core/entity/Entities.types'
import type {Entity}                                      from 'core/entity/Entity'
import type {ImageName_UnusedSMM1Regular}                 from 'core/entity/file/EntityImageFile.unused'
import type {ClearConditionImage}                         from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}                                 from 'core/entity/images/editor/EditorImage'
import type {PowerUpEditorImage}                          from 'core/entity/images/editor/PowerUpEditorImage'
import type {InGameImage}                                 from 'core/entity/images/inGame/InGameImage'
import type {InGameImage_SMM1}                            from 'core/entity/images/inGame/InGameImage_SMM1'
import type {InGameImage_SMM2}                            from 'core/entity/images/inGame/InGameImage_SMM2'
import type {UniqueImage}                                 from 'core/entity/images/unique/UniqueImage'
import type {UnusedImage_BigMushroom}                     from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                         from 'core/entity/images/unused/UnusedImage_Regular'
import type {CompanionEnumByNameWithValidationSingleton}  from 'util/enumerable/Singleton.types'

import {EditorVoices}                      from 'core/editorVoice/EditorVoices'
import {EntityLoader}                      from 'core/entity/Entity.loader'
import * as ImageCreator                   from 'core/entity/images/imageCreator'
import {EmptyClearConditionImage}          from 'core/entity/images/clearCondition/EmptyClearConditionImage'
import {EmptyEditorImage}                  from 'core/entity/images/editor/EmptyEditorImage'
import {EmptyInGameImage}                  from 'core/entity/images/inGame/EmptyInGameImage'
import {EmptyUniqueImage}                  from 'core/entity/images/unique/EmptyUniqueImage'
import {EmptyUnusedImage_BigMushroom}      from 'core/entity/images/unused/EmptyUnusedImage_BigMushroom'
import {EmptyUnusedImage_Regular}          from 'core/entity/images/unused/EmptyUnusedImage_Regular'
import {GameStyles}                        from 'core/gameStyle/GameStyles'
import {Themes}                            from 'core/theme/Themes'
import {StringContainer}                   from 'util/StringContainer'
import {getValueByEnglishName}             from 'util/utilitiesMethods'
import {CompanionEnumByNameWithValidation} from 'util/enumerable/companion/CompanionEnumByNameWithValidation'

/**
 * @recursiveReference<{@link EditorVoices}>
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity>,
        ClassWithNullableEditorVoiceSoundFileHolder {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new class Entities_Ground extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'Ground',)
        }

    }('Ground',)
    public static readonly START_GROUND =                                  new Entities('Start Ground',)
    public static readonly GOAL_GROUND =                                   new Entities('Goal Ground',)

    public static readonly STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'slope_l45',)
        }

    }('Steep Slope',)
    public static readonly GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorGroundOrSlopeImages(this, 'slope_l30',)
        }

    }('Gentle Slope',)

    public static readonly START_BLOCK =                                   new class Entities_StartBlock extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameStartBlockImages(this,)
        }

    }('Start Block',)
    public static readonly OCCLUDE_BLOCK =                                 new Entities('Occlude Block',)

    public static readonly WATER =                                         new class Entities_Water extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameWaterImages(this,)
        }

    }('Water',)
    public static readonly LAVA =                                          new class Entities_Lava extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameDangerousLiquidImages(this, 'Object - MagmaHalf',)
        }

    }('Lava',)
    public static readonly POISON =                                        new class Entities_Poison extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameDangerousLiquidImages(this, 'Object - PoisonHalf',)
        }

    }('Poison',)

    public static readonly PIPE =                                          new class Entities_Pipe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorPipeImages(this,)
        }

    }('Pipe',)
    public static readonly CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'ToumeiDokan_00',)
        }

    }('Clear Pipe',)

    public static readonly SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'Toge_00', 'Toge_snow_night_00',)
        }

    }('Spike Trap',)
    public static readonly JELECTRO =                                      new class Entities_Jelectro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmb3Images(this, 'Toge_water_00', Themes.UNDERWATER,)
        }

    }('Jelectro',)
    public static readonly SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Toge_water_00', Themes.UNDERWATER,)
        }

    }('Sea Urchin',)
    public static readonly SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['TogeBlock_00', 'TogeBlock_01', 'TogeBlock_02',],)
        }

    }('Spike Block',)

    public static readonly MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorMushroomPlatformImages(this,)
        }

    }('Mushroom Platform',)
    public static readonly SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorSemisolidPlatformImages(this,)
        }

    }('Semisolid Platform',)
    public static readonly BRIDGE =                                        new class Entities_Bridge extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueBridgeImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorBridgeImages(this,)
        }

    }('Bridge',)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueBrickBlockImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorBrickBlockImages(this,)
        }

    }('Brick Block',)
    public static readonly CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueCristalBlockImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorCristalBlockImages(this,)
        }

    }('Cristal Block',)
    public static readonly ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'RengaBlock_00',)
        }

    }('Rotating Block',)

    public static readonly HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueHardBlockImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorHardBlockImages(this,)
        }

    }('Hard Block',)
    public static readonly ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'HardBlock_00',)
        }

    }('Rock Block',)

    public static readonly QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmbAndSmb3Images(this, 'HatenaBlock_00', 'HatenaBlock_snow_night_00',)
        }

    }('? Block',)
    public static readonly HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'ClearBlock_00',)
        }

    }('Hidden Block',)
    public static readonly EMPTY_BLOCK =                                   new class Entities_EmptyBlock extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.singleInGameIn2DStyleImages(this, 'Object - BlockKara', 'wait.0',)
        }

    }('Empty Block',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BikkuriBlock_00',)
        }

    }('! Block',)

    public static readonly NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'OnpuBlock_00', 'OnpuBlock_snow_night_00',)
        }

    }('Note Block',)
    public static readonly MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmbAndSmb3Images(this, 'OnpuBlock_01', 'OnpuBlock_snow_night_01',)
        }

    }('Music Block',)

    public static readonly DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmbAndSmb3Images(this, 'ChikuwaBlock_00', 'ChikuwaBlock_snow_night_00',)
        }

    }('Donut Block',)

    public static readonly CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorCloudBlockImages(this,)
        }

    }('Cloud Block',)

    public static readonly ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'OnOffSwitch_00',)
        }

    }('ON/OFF Switch',)
    public static readonly DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['OnOffBlock_00', 'OnOffBlock_01',],)
        }

    }('Dotted-Line Block',)

    public static readonly P_BLOCK =                                       new class Entities_PBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['PBlock_00', 'PBlock_01',],)
        }

    }('P Block',)

    public static readonly BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['Chikachika_00', 'Chikachika_01',],)
        }

    }('Blinking Block',)

    public static readonly ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNightSnowInSmb3Images(this, 'IceBlock_00', 'IceBlock_snow_night_00',)
        }

    }('Ice Block',)
    public static readonly ICICLE =                                        new class Entities_Icicle extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['Icicle_00', 'Icicle_01',],)
        }

    }('Icicle',)

    public static readonly COIN =                                          new class Entities_Coin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Coin_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Coin_00',)
        }

    }('Coin',)
    public static readonly FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndNightSnowInSmb3Images(this, 'Coin_01', 'Coin_snow_night_01',)
        }

    }('Frozen Coin',)
    public static readonly TEN_COIN =                                      new class Entities_TenCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, '10Coin_00',)
        }

    }('10-Coin',)
    public static readonly THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, '10Coin_01',)
        }

    }('30-Coin',)
    public static readonly FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, '10Coin_02',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, '10Coin_02',)
        }

    }('50-Coin',)
    public static readonly PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PinkCoin_00',)
        }

    }('Pink Coin',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SuperKinoko_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'SuperKinoko_00',)
        }

    }('Super Mushroom',)

    public static readonly FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorImages(this, 'FireFlower_00', 'FireFlowerUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'FireFlower_00',)
        }

    }('Fire Flower',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',)

    public static readonly SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'FireFlower_01', 'FireFlowerUni_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmbImages(this, 'FireFlower_01',)
        }

    }('Superball Flower',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new class Entities_SuperballThrownByAPlayer extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.singleInGameImages(this, 'Object - Superball', GameStyles.SUPER_MARIO_BROS, 'superball',)
        }

    }('Superball thrown by a player',)

    public static readonly MYSTERY_MUSHROOM =                              new class Entities_MysteryMushroom extends Entities {

        protected override _createInGameImage(): InGameImage_SMM1 {
            return ImageCreator.singleInGameSMM1Images(this, 'Kinoko2', GameStyles.SUPER_MARIO_BROS,)
        }

    }('Mystery Mushroom',)
    public static readonly WEIRD_MUSHROOM =                                new class Entities_WeirdMushroom extends Entities {

        protected override _createInGameImage(): InGameImage_SMM1 {
            return ImageCreator.singleInGameSMM1Images(this, 'KinokoFunny', GameStyles.SUPER_MARIO_BROS,)
        }

    }('Weird Mushroom',)

    public static readonly MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmbImages(this, 'SuperKinoko_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmbImages(this, 'SuperKinoko_01',)
        }

    }('Master Sword',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new class Entities_BombThrownByALink extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Enemy - LinkBomb', GameStyles.SUPER_MARIO_BROS, ['wait.0', 'walk.0', 'walk.1',],)
        }

    }('Bomb thrown by a Link',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new class Entities_ArrowThrownByALink extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.singleInGameImages(this, 'Object - Arrow', GameStyles.SUPER_MARIO_BROS, 'arrow',)
        }

    }('Arrow thrown by a Link',)

    public static readonly BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'DekaKinoko_00', 'DekaKinokoUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmbImages(this, 'DekaKinoko_00',)
        }

    }('Big Mushroom',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new class Entities_BigMushroom_Classic extends Entities {

        protected override _createInGameImage(): InGameImage_SMM1 {
            return ImageCreator.singleInGameInAllStyleSMM1Images(this, 'MegaKinoko',)
        }

    }('Big Mushroom (classic)',)
    public static readonly BIG_MUSHROOM_MODERN =                           new class Entities_BigMushroom_Modern extends Entities {

        protected override _createInGameImage(): InGameImage_SMM1 {
            return ImageCreator.singleInGameInAllStyleSMM1Images(this, 'MegaKinoko2',)
        }

    }('Big Mushroom (modern)',)

    public static readonly SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmbImages(this, 'KinokoUSA_00', 'KinokoUSAUni_00')
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmbImages(this, 'KinokoUSA_00')
        }

    }('SMB2 Mushroom',)

    public static readonly SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmb3Images(this, 'SuperKonoha_00', 'SuperKonohaUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmb3Images(this, 'SuperKonoha_00',)
        }

    }('Super Leaf',)

    public static readonly FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmb3ImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmb3Images(this, 'FrogSuit_00', 'FrogSuitUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmb3Images(this, 'FrogSuit_00',)
        }

    }('Frog Suit',)

    public static readonly CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmwImages(this, 'MantleWing_00', 'MantleWingUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'MantleWing_00',)
        }

    }('Cape Feather',)

    public static readonly POWER_BALLOON =                                 new class Entities_PowerBalloon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSmwImages(this, 'PowerBalloon_00', 'PowerBalloonUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'PowerBalloon_00',)
        }

    }('Power Balloon',)

    public static readonly PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInNsmbuImages(this, 'PropellerKinoko_00', 'PropellerKinokoUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNsmbuImages(this, 'PropellerKinoko_00',)
        }

    }('Propeller Mushroom',)

    public static readonly SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInNsmbuImages(this, 'SuperDonguri_00', 'SuperDonguriUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNsmbuImages(this, 'SuperDonguri_00',)
        }

    }('Super Acorn',)

    public static readonly SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'SuperBell_00', 'SuperBellUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'SuperBell_00',)
        }

    }('Super Bell',)

    public static readonly SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'SuperHammer_00', 'SuperHammerUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'SuperHammer_00',)
        }

    }('Super Hammer',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',)

    public static readonly BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): PowerUpEditorImage {
            return ImageCreator.powerUpEditorInSm3dwImages(this, 'BoomerangFlower_00', 'BoomerangFlowerUni_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoomerangFlower_00',)
        }

    }('Boomerang Flower',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',)

    public static readonly CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKiller_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoxKiller_00',)
        }

    }('Cannon Box',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',)

    public static readonly PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxPropeller_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoxPropeller_00',)
        }

    }('Propeller Box',)

    public static readonly GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKuribo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoxKuribo_00',)
        }

    }('Goomba Mask',)

    public static readonly BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxKillerPlayer_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoxKillerPlayer_00',)
        }

    }('Bullet Bill Mask',)

    public static readonly RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'BoxPow_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BoxPow_00',)
        }

    }('Red POW Box',)

    public static readonly SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SuperStar_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'SuperStar_00',)
        }

    }('Super Star',)

    public static readonly ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, '1upKinoko_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, '1upKinoko_00',)
        }

    }('1-Up Mushroom',)
    public static readonly ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'DokuKinoko_00',)
        }

    }('Rotten Mushroom',)

    public static readonly SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmbAndSmb3Images(this, 'KutsuKuribo_00',)
        }

    }('Shoe Goomba',)
    public static readonly SHOE =                                          new class Entities_Shoe extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInClearCondition(this,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmbAndSmb3Images(this, 'KutsuKuribo_00',)
        }

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameInMultipleStyleImages(this, 'Enemy - KutsuKuriboA', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,], ['wait.0', 'wait.1',],)
        }

    }('Shoe',)
    public static readonly STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmbAndSmb3Images(this, 'KutsuKuribo_01',)
        }

    }('Stiletto Goomba',)
    public static readonly STILETTO =                                      new class Entities_Stiletto extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbAndSmb3ImagesInInGame(this,)
        }

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameInMultipleStyleImages(this, 'Enemy - KutsuKuriboB', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,], ['wait.0', 'wait.1',],)
        }

    }('Stiletto',)
    public static readonly YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwAndNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwAndNsmbuImages(this, 'YosshiEgg_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwAndNsmbuImages(this, 'YosshiEgg_00',)
        }

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Enemy - KutsuKuriboA', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU yoshi egg (if present)
        }

    }('Yoshi\'s Egg',)
    public static readonly YOSHI =                                         new Entities('Yoshi',)
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new class Entities_FireThrownByAYoshi extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Player - YoshiFire', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU "Yoshi fire thrown" if present
        }

    }('Fire thrown by a Yoshi',)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new class Entities_PoisonThrownByAYoshi extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Player - YoshiPoison', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU "Yoshi poison thrown" if present
        }

    }('Poison thrown by a Yoshi',)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',)
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new Entities('Wrench thrown by a Yoshi',)
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',)
    public static readonly RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwAndNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwAndNsmbuImages(this, 'YosshiEggRed_00',)
        }

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Enemy - KutsuKuriboB', GameStyles.SUPER_MARIO_WORLD, ['wait.0', 'wait.1',],)//TODO add NSMBU yoshi egg (if present)
        }

    }('Red Yoshi\'s Egg',)
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',)
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class Entities_Goomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSmwImages(this, 'Kuribo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Kuribo_00',)
        }


        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'Kuribo D', [
                ['damage.0',],
                ['swim.0', 'swim.1',],
                ['walk.0', 'walk.1',],
                ['kutsu',],
            ],)
        }

    }('Goomba',)
    public static readonly GALOOMBA =                                      new class Entities_Galoomba extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Kuribo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Kuribo_01',)
        }

    }('Galoomba',)
    public static readonly GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSmwAndSm3dwImages(this, 'Kuribo_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmwAndSm3dwImages(this, 'Kuribo_01',)
        }

    }('Goombrat',)
    public static readonly GOOMBUD =                                       new class Entities_Goombud extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Kuribo_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Kuribo_01',)
        }

    }('Goombud',)

    public static readonly GREEN_KOOPA_TROOPA =                            new class Entities_GreenKoopaTroopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Nokonoko_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Nokonoko_00',)
        }

    }('Green Koopa Troopa',)
    public static readonly RED_KOOPA_TROOPA =                              new class Entities_RedKoopaTroopa extends Entities {

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Nokonoko_01',)
        }

    }('Red Koopa Troopa',)
    public static readonly GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',)
    public static readonly RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',)
    public static readonly GREEN_KOOPA_SHELL =                             new class Entities_GreenKoopaShell extends Entities {

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmbImages(this, 'NokonokoShell_00',)
        }

    }('Green Koopa Shell',)
    public static readonly RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',)

    public static readonly DRY_BONES =                                     new class Entities_DryBones extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Karon_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Karon_00',)
        }

    }('Dry Bones',)
    public static readonly PARABONES =                                     new Entities('Parabones',)
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',)
    public static readonly DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Karon_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Karon_01',)
        }

    }('Dry Bones Shell',)

    public static readonly BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Met', 0,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Met_00',)
        }

    }('Buzzy Beetle',)
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',)
    public static readonly BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Met', 1,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Met_01',)
        }

    }('Buzzy Shell',)

    public static readonly SPINY =                                         new class Entities_Spiny extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Togezo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Togezo_00',)
        }

    }('Spiny',)
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',)
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',)
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',)
    public static readonly SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Togezo_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Togezo_01',)
        }

    }('Spiny Shell',)

    public static readonly SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TogeMet_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'TogeMet_00',)
        }

    }('Spike Top',)
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',)
    public static readonly FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TogeMet_01',)
        }

    }('Fast Spike Top',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',)

    public static readonly SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Pyonchu_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Pyonchu_00',)
        }

    }('Skipsqueak',)
    public static readonly SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Pyonchu_01',)
        }

    }('Spiny Skipsqueak',)

    public static readonly ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Arihei_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Arihei_00',)
        }

    }('Ant Trooper',)
    public static readonly HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Arihei_01',)
        }

    }('Horned Ant Trooper',)

    public static readonly STINGBY =                                       new class Entities_Stingby extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Hacchin_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Hacchin_00',)
        }

    }('Stingby',)

    public static readonly CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorCheepCheepImages(this,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmwAndNsmbuImages(this, 'Pukupuku_00',)
        }

    }('Cheep Cheep',)
    public static readonly BLURPS =                                        new class Entities_Blurps extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Pukupuku_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Pukupuku_01',)
        }

    }('Blurps',)
    public static readonly DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'Pukupuku_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNsmbuImages(this, 'Pukupuku_01',)
        }

    }('Deep Cheep',)
    public static readonly FISH_BONE =                                     new class Entities_FishBone extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'FishBone_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'FishBone_00',)
        }

    }('Fish Bone',)

    public static readonly BLOOPER =                                       new class Entities_Blooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Gesso_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Gesso_00',)
        }

    }('Blooper',)
    public static readonly BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Gesso_01',)
        }

    }('Blooper Nanny',)
    public static readonly BABY_BLOOPER =                                  new class Entities_BabyBlooper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInInGame(this,)
        }

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameBabyBlooperProjectileImages(this, )
        }

    }('Baby Blooper',)

    public static readonly PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Fugumannen_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Fugumannen_00',)
        }

    }('Porcupuffer',)

    public static readonly WIGGLER =                                       new class Entities_Wiggler extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanachan_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Hanachan_00',)
        }

    }('Wiggler',)
    public static readonly ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanachan_01',)
        }

    }('Angry Wiggler',)

    public static readonly PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSmwImages(this, 'Pakkun_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmwImages(this, 'Pakkun_00',)
        }

    }('Piranha Plant',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmwImages(this, 'Pakkun_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Pakkun_00',)
        }

    }('Jumping Piranha Plant',)
    public static readonly FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Pakkun_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSmwImages(this, 'Pakkun_01',)
        }

    }('Fire Piranha Plant',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',)
    public static readonly MUNCHER =                                       new class Entities_Muncher extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'BlackPakkun', 0,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'BlackPakkun_00',)
        }

    }('Muncher',)
    public static readonly PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['PackunPipe_00', 'PackunPipe_01',],)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'PackunPipe_00',)
        }

    }('Piranha Creeper',)

    public static readonly CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Wanwan', 0,)
        }

    }('Chain Chomp',)
    public static readonly UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Wanwan', 1,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Wanwan_00',)
        }

    }('Unchained Chomp',)
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',)

    public static readonly SPIKE =                                         new class Entities_Spike extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Gabon_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Gabon_00',)
        }

    }('Spike',)
    public static readonly SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueSpikeBallImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorSpikeBallImages(this)
        }

    }('Spike Ball',)
    public static readonly SNOWBALL =                                      new class Entities_Snowball extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSnowImages(this, 'Gabon_snow_01',)
        }

    }('Snowball',)

    public static readonly LAKITU =                                        new class Entities_Lakitu extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Jugem_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Jugem_00',)
        }

    }('Lakitu',)
    public static readonly LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Jugem_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Jugem_01',)
        }

    }('Lakitu\'s Cloud',)

    public static readonly BOO =                                           new class Entities_Boo extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Teresa_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Teresa_00',)
        }

    }('Boo',)
    public static readonly STRETCH =                                       new class Entities_Stretch extends Entities {

        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.unusedRegularInMultipleStyleSMM1Images(this, 'Enemy - Necchi', [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,], ['wait.0', 'out.4',],)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'Necchi', [['wait.0', 'wait.2',], ['out.4',],],)
        }

    }('Stretch',)
    public static readonly BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Teresa_01',)
        }

    }('Boo Buddies',)
    public static readonly PEEPA =                                         new class Entities_Peepa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Teresa_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Teresa_01',)
        }

    }('Peepa',)

    public static readonly BOB_OMB =                                       new class Entities_BobOmb extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'Bombhei', 0,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Bombhei_00',)
        }

    }('Bob-omb',)
    public static readonly LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bombhei_01',)
        }

    }('Lit Bob-omb',)

    public static readonly POKEY =                                         new class Entities_Pokey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Sambo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Sambo_00',)
        }

    }('Pokey',)
    public static readonly SNOW_POKEY =                                    new class Entities_SnowPokey extends Entities {

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSnowImages(this, 'Sambo_snow_00',)
        }

    }('Snow Pokey',)

    public static readonly THWOMP =                                        new class Entities_Thwomp extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Dossun_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Dossun_00',)
        }

    }('Thwomp',)

    public static readonly MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'ChoroPoo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'ChoroPoo_00',)
        }

    }('Monty Mole',)
    public static readonly ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Poo_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Poo_00',)
        }

    }('Rocky Wrench',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',)

    public static readonly MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Kameck_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Kameck_00',)
        }

    }('Magikoopa',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',)

    public static readonly HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bros_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Bros_00',)
        }

    }('Hammer Bro',)
    public static readonly SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'MegaBros_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'MegaBros_00',)
        }

    }('Sledge Bro',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',)
    public static readonly FIRE_BRO =                                      new class Entities_FireBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Bros_01',)
        }

    }('Fire Bro',)
    public static readonly HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MegaBros_01',)
        }

    }('Heavy Fire Bro',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',)

    public static readonly LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bubble_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Bubble_00',)
        }

    }('Lava Bubble',)

    public static readonly MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'KoopaMecha_00',)
        }

    }('Mechakoopa',)
    public static readonly BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_01',)
        }

    }('Blasta Mechakoopa',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',)
    public static readonly ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaMecha_02',)
        }

    }('Zappa Mechakoopa',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',)

    public static readonly CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MagmaFish_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'MagmaFish_00',)
        }

    }('Charvaargh',)

    public static readonly BULLY =                                         new class Entities_Bully extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Donketsu_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Donketsu_00',)
        }

    }('Bully',)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'KillerHoudai', 0,)
        }

    }('Bill Blaster',)
    public static readonly BULLET_BILL =                                   new class Entities_BulletBill extends Entities {

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Killer_00',)
        }

    }('Bullet Bill',)
    public static readonly BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'KillerHoudai_01',)
        }

    }('Bull\'s-Eye Blaster',)
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',)
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',)

    public static readonly BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInBlueVariantInSmbAndSmb3Images(this, 'MagnumKiller', 0,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'MagnumKiller_00',)
        }

    }('Banzai Bill',)
    public static readonly BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'MagnumKiller_01',)
        }

    }('Bull\'s-Eye Banzai',)
    public static readonly CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'MagnumKiller_01',)
        }

    }('Cat Banzai Bill',)

    public static readonly CANNON =                                        new class Entities_Cannon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'Houdai', 0,)
        }

    }('Cannon',)
    public static readonly CANNONBALL =                                    new class Entities_Cannonball extends Entities {

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'SenkanHoudai D', 'senkan_houdai_ball',)
        }

    }('Cannonball',)
    public static readonly RED_CANNON =                                    new class Entities_RedCannon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Houdai_01',)
        }

    }('Red Cannon',)
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',)

    public static readonly BURNER =                                        new class Entities_Burner extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInNotSm3dwImages(this, ['Burner_00', 'Burner_01',],)
        }

    }('Burner',)

    public static readonly FIRE_BAR =                                      new class Entities_FireBar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'FireBar_00',)
        }

    }('Fire Bar',)

    public static readonly SKEWER =                                        new class Entities_Skewer extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwWithNoBlueVariantDuplicateInSmbAndSmb3Images(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwAndBlueVariantInSmbAndSmb3Images(this, 'TogeKonbo', 0,)
        }

    }('Skewer',)

    public static readonly KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotNsmbuAndSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotNsmbuAndSm3dwImages(this, 'KoopaClown_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotNsmbuAndSm3dwImages(this, 'KoopaClown_00',)
        }


        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.singleUnusedRegularSMM1Images(this, 'Enemy - KoopaClown', GameStyles.SUPER_MARIO_WORLD, ['weep.4', 'weep.5', 'weep.6', 'weep.7',],)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.unusedBigMushroomImages(this, 'KoopaClown', [
                ['wait.4', 'wait.5', 'wait.6', 'wait.7',],
                ['anger.4', 'anger.5', 'anger.6', 'anger.7',],
                ['blink.4', 'blink.5', 'blink.6', 'blink.7',],
                ['weep.4', 'weep.5', 'weep.6', 'weep.7',],
                ['iron_ball.1',],
                ['tear.1',],
            ],)
        }

    }('Koopa Clown Car',)
    public static readonly JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'KoopaClown_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNsmbuImages(this, 'KoopaClown_00',)
        }

    }('Junior Clown Car',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotNsmbuAndSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotNsmbuAndSm3dwImages(this, 'KoopaClown_01',)
        }

    }('Fire Koopa Clown Car',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNsmbuImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNsmbuImages(this, 'KoopaClown_01',)
        }

    }('Fire Junior Clown Car',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',)

    public static readonly KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'KoopaCar_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'KoopaCar_00',)
        }

    }('Koopa Troopa Car',)
    public static readonly CAR =                                           new Entities('Car',)

    public static readonly GRINDER =                                       new class Entities_Grinder extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Saw_00',)
        }

    }('Grinder',)

    public static readonly ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'SunMoon_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'SunMoon_00',)
        }

    }('Angry Sun',)
    public static readonly MOON =                                          new class Entities_Moon extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'SunMoon_01',)
        }

    }('Moon',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class Entities_Bowser extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Koopa_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Koopa_00',)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'Koopa', 'fire.1',)
        }

    }('Bowser',)
    public static readonly MEOWSER =                                       new class Entities_Meowser extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Koopa_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Koopa_00',)
        }

    }('Meowser',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',)

    public static readonly BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'KoopaJr_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'KoopaJr_00',)
        }

        protected override _createUnusedBigMushroomImage(): UnusedImage_BigMushroom {
            return ImageCreator.singleUnusedBigMushroomImages(this, 'KoopaJr', 'fire.1',)
        }

    }('Bowser Jr.',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',)

    public static readonly BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Bunbun_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'Bunbun_00',)
        }

    }('Boom Boom',)
    public static readonly POM_POM =                                       new class Entities_PomPom extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Bunbun_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'Bunbun_01',)
        }

    }('Pom Pom',)
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',)
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',)

    public static readonly LARRY =                                         new class Entities_Larry extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Larry_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Larry_00',)
        }

    }('Larry',)
    public static readonly LARRY_WAND =                                    new class Entities_LarryWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Larry',)
        }

    }('Larry\'s Wand',)
    public static readonly LARRY_PROJECTILE =                              new class Entities_LarryProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingProjectileImages(this, 'Enemy - Larry',)
        }

    }('(Larry\'s projectile)',)

    public static readonly IGGY =                                          new class Entities_Iggy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Iggy_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Iggy_00',)
        }

    }('Iggy',)
    public static readonly IGGY_WAND =                                     new class Entities_IggyWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Iggy',)
        }

    }('Iggy\'s Wand',)
    public static readonly IGGY_PROJECTILE =                               new class Entities_IggyProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingProjectileImages(this, 'Enemy - Iggy',)
        }

    }('(Iggy\'s projectile)',)

    public static readonly WENDY =                                         new class Entities_Wendy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Wendy_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Wendy_00',)
        }

    }('Wendy',)
    public static readonly WENDY_WAND =                                    new class Entities_WendyWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Wendy',)
        }

    }('Wendy\'s Wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new class Entities_CandyRingThrownByAWendy extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameCandyRingImages(this,)
        }

    }('Candy Ring thrown by a Wendy',)
    //TODO add unused Wendy projectile (SMB, SMB3, SMW)

    public static readonly LEMMY =                                         new class Entities_Lemmy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lemmy_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Lemmy_00',)
        }

    }('Lemmy',)
    public static readonly LEMMY_WAND =                                    new class Entities_LemmyWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Lemmy',)
        }

    }('Lemmy\'s Wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new class Entities_MagicBallThrownByALemmy extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameMagicBallImages(this,)
        }

    }('Magic Ball thrown by a Lemmy',)
    //TODO add unused Lemmy projectile (SMB)

    public static readonly ROY =                                           new class Entities_Roy extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Roy_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Roy_00',)
        }

    }('Roy',)
    public static readonly ROY_WAND =                                      new class Entities_RoyWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Roy',)
        }

    }('Roy\'s Wand',)
    public static readonly ROY_PROJECTILE =                                new class Entities_RoyProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingProjectileImages(this, 'Enemy - Roy',)
        }

    }('(Roy\'s projectile)',)

    public static readonly MORTON =                                        new class Entities_Morton extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Morton_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Morton_00',)
        }

    }('Morton',)
    public static readonly MORTON_WAND =                                   new class MortonWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Morton',)
        }

    }('Morton\'s Wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new class Entities_MortonThrownProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingProjectileImages(this, 'Enemy - Morton',)
        }

    }('(Morton\'s Thrown projectile)',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new class Entities_MortonGroundProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameMortonGroundProjectileImages(this,)
        }
        //TODO add unused morton fire.2 in SMB3

    }('(Morton\'s Ground projectile)',)

    public static readonly LUDWIG =                                        new class Entities_Ludwig extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Ludwig_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'Ludwig_00',)
        }

    }('Ludwig',)
    public static readonly LUDWIG_WAND =                                   new class Entities_LudwigWand extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingWandImages(this, 'Enemy - Ludwig',)
        }

    }('Ludwig\'s Wand',)
    public static readonly LUDWIG_PROJECTILE =                             new class Entities_LudwigProjectile extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameKoopalingProjectileImages(this, 'Enemy - Ludwig',)
        }

    }('(Ludwig\'s projectile)',)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new class Entities_Bumper extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Marumaru_00',)
        }

    }('Bumper',)

    public static readonly SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'BurankoCrane_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSm3dwImages(this, 'BurankoCrane_00',)
        }

    }('Swinging Claw',)

    public static readonly TWISTER =                                       new class Entities_Twister extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Tornado_00',)
        }

    }('Twister',)

    public static readonly ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Hanatari_00',)
        }

    }('One-Way Wall',)

    public static readonly TRACK =                                         new class Entities_Track extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Rail_00',)
        }

    }('Track',)
    public static readonly TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['OrbitBlock_00', 'OrbitBlock_01',],)
        }

    }('Track Block',)

    public static readonly VINE =                                          new class Entities_Vine extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'TsutaBlock_00',)
        }

        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            const wait2 = ['wait.2',] as const satisfies readonly ImageName_UnusedSMM1Regular[]

            return ImageCreator.unusedRegularSMM1Images(this, 'Object Block - Tuta', [
                [GameStyles.SUPER_MARIO_BROS, ['wait.1',],],
                [GameStyles.SUPER_MARIO_BROS_3, wait2,],
                [GameStyles.SUPER_MARIO_WORLD, wait2,],
            ],)
        }

    }('Vine',)
    public static readonly TREE =                                          new class Entities_Tree extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueTreeImages(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorTreeImages(this,)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'BellTree_00',)
        }

    }('Tree',)

    // public static readonly STARTING_ARROW =                                new Entities('Starting Arrow',)//A background entity
    public static readonly ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Yajirushi_00',)
        }

    }('Arrow Sign',)

    public static readonly CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'MiddleFlag_00',)
        }

    }('Checkpoint Flag',)
    public static readonly GOAL_POLE =                                     new class Entities_GoalPole extends Entities {

        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.singleUnusedRegularSMM1Images(this, 'Object - Goalpole', GameStyles.SUPER_MARIO_BROS, ['goalpole.1',],)
        }

    }('Goal Pole',)//An interactable partially solid & background entity
    public static readonly GOAL_WITH_CARDS =                               new Entities('Cards Roulette',)//An interactable background entity
    public static readonly GIANT_GATE =                                    new Entities('Giant Gate',)//An interactable background entity

    // public static readonly CASTLE =                                        new Entities('Castle',)//A background entity
    // public static readonly ENDING_CASTLE_DOOR =                            new Entities('Ending Castle Door',)//A background entity
    // public static readonly AXE =                                           new Entities('Axe',)//An interactable partially solid & background entity

    public static readonly DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'DashBlock_00',)
        }

    }('Dash Block',)

    public static readonly SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SnakeBlock_00',)
        }

    }('Snake Block',)
    public static readonly FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'SnakeBlock_01',)
        }

    }('Fast Snake Block',)

    public static readonly CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'BeltConveyor_00',)
        }

    }('Conveyor Belt',)
    public static readonly FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'BeltConveyor_01',)
        }

    }('Fast Conveyor Belt',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['Trampoline_00', 'Trampoline_01',],)
        }

    }('Mushroom Trampoline',)
    public static readonly ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorInSm3dwImages(this, ['OnOffTrampoline_00', 'OnOffTrampoline_01',],)
        }

    }('ON/OFF Trampoline',)

    public static readonly LIFT =                                          new class Entities_List extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lift_00',)
        }

    }('Lift',)
    public static readonly FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Lift_01',)
        }

    }('Flimsy Lift',)
    public static readonly CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Lift_00',)
        }

    }('Cloud Lift',)

    public static readonly SEESAW =                                        new class Entities_Seesaw extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'Seesaw_00',)
        }

    }('Seesaw',)

    public static readonly LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'YouganLift_00',)
        }

    }('Lava Lift',)
    public static readonly FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInNotSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInNotSm3dwImages(this, 'YouganLift_01',)
        }

    }('Fast Lava Lift',)

    public static readonly CRATE =                                         new class Entities_Crate extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WoodBox_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'WoodBox_00',)
        }

    }('Crate',)

    public static readonly KEY =                                           new class Entities_Key extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Key_00',)
        }

    }('Key',)
    public static readonly CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSmbImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSmbImages(this, 'Key_01',)
        }

    }('Cursed Key',)
    public static readonly PHANTO =                                        new class Entities_Phanto extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.multipleInGameImages(this, 'Object - Phanto', GameStyles.SUPER_MARIO_BROS, ['wait.0', 'wait.1', 'wait.2', 'wait.3',],)
        }

    }('Phanto',)

    public static readonly TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.multipleEditorImages(this, ['JumpStep_00', 'JumpStep_01',],)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmbImages(this, 'JumpStep_00',)
        }

    }('Trampoline',)
    public static readonly HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'Hopper_00',)
        }

    }('Hop-Chops',)

    public static readonly POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PowBlock_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'PowBlock_00',)
        }

    }('POW Block',)
    public static readonly RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'PowBlock_01',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInSm3dwImages(this, 'PowBlock_01',)
        }

    }('Red POW Block',)

    public static readonly P_SWITCH =                                      new class Entities_PSwitch extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'PSwitch_00',)
        }

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionImages(this, 'PSwitch_00',)
        }


        protected override _createUnusedRegularImage(): UnusedImage_Regular {
            return ImageCreator.unusedRegularSMM1Images(this, 'Object - PSwitch', [
                [GameStyles.SUPER_MARIO_BROS, ['wait.0', 'wait.1', 'wait.2',],],
                [GameStyles.NEW_SUPER_MARIO_BROS_U, ['down_switch_hatena_Alb.000', 'down_switch_hatena_Alb.004',],],
            ],)
        }

    }('P Switch',)

    public static readonly STONE =                                         new class Entities_Stone extends Entities {

        protected override _createClearConditionImage(): ClearConditionImage {
            return ImageCreator.clearConditionInNotSmbImages(this, 'Stone_00',)
        }

    }('Stone',)

    public static readonly WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_00',)
        }

    }('Warp Door',)
    public static readonly P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_01',)
        }

    }('P Warp Door',)
    public static readonly KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Door_02',)
        }

    }('Key Door',)

    public static readonly WARP_BOX =                                      new class Entities_WarpBox extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WarpBox_00',)
        }

    }('Warp Box',)
    public static readonly WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueInSm3dwImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorInSm3dwImages(this, 'WarpBox_01',)
        }

    }('Warp Box (With Key)',)

    public static readonly WING =                                          new class Entities_Wing extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'Wing_00',)
        }

    }('Wing',)
    public static readonly PARACHUTE =                                     new class Entities_Parachute extends Entities {

        protected override _createUniqueImage(): UniqueImage {
            return ImageCreator.uniqueImagesInEditor(this,)
        }

        protected override _createEditorImage(): EditorImage {
            return ImageCreator.editorImages(this, 'parachute_00',)
        }

    }('Parachute',)

    public static readonly TOAD =                                          new Entities('Toad',)
    public static readonly CAGED_TOADETTE =                                new Entities('Caged Toadette',)//A background entity

    public static readonly BUBBLE =                                        new class Entities_Bubble extends Entities {

        protected override _createInGameImage(): InGameImage_SMM2 {
            return ImageCreator.inGameBubbleImages(this,)
        }

    }('Bubble',)//An interactable entity

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameWithValidationSingleton<Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumByNameWithValidation<Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Entities | string>,): Entities {
            return getValueByEnglishName(value, this,)
        }

        public override hasValueByName(value: Nullable<| Entities | string>,): boolean {
            if (value == null)
                return false
            if (value instanceof this.instance)
                return true
            return this.instance.everyEnglishNames.includes(value as never,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>
    static #everyEnglishNames?: readonly PossibleEnglishName[]

    #reference?: Entity
    readonly #englishNameContainer
    #uniqueImage?: UniqueImage
    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #inGameImage?: InGameImage
    #unusedRegularImage?: UnusedImage_Regular
    #unusedBigMushroomImage?: UnusedImage_BigMushroom
    #editorVoiceSound?: NullOr<EditorVoiceSound>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (reference) --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Entity> {
        return this.#REFERENCE_MAP ??= EntityLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.REFERENCE_MAP.get(this.englishName)!
    }

    //endregion -------------------- Getter methods (reference) --------------------
    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //endregion -------------------- Getter methods (english name) --------------------
    //region -------------------- Getter methods (image) --------------------

    //region -------------------- unique image --------------------

    protected _createUniqueImage(): NullOr<UniqueImage> {
        return null
    }

    public get uniqueImage(): UniqueImage {
        if (this.#uniqueImage != null)
            return this.#uniqueImage

        const value = this._createUniqueImage()
        if (value == null) {
            const editorImage = this.editorImage
            const clearConditionImage = this.clearConditionImage
            const inGameImage = this.inGameImage

            const isEmptyEditor = editorImage instanceof EmptyEditorImage
            const isEmptyClearCondition = clearConditionImage instanceof EmptyClearConditionImage
            const isEmptyInGame = inGameImage instanceof EmptyInGameImage
            if (isEmptyEditor && isEmptyClearCondition && isEmptyInGame)
                return this.#uniqueImage = EmptyUniqueImage.get

            if (!isEmptyEditor && isEmptyClearCondition && isEmptyInGame)
                return this.#uniqueImage = ImageCreator.uniqueImageFromEditor(this, editorImage, clearConditionImage, inGameImage,)
            if (isEmptyEditor && !isEmptyClearCondition && isEmptyInGame)
                return this.#uniqueImage = ImageCreator.uniqueImageFromClearCondition(this, editorImage, clearConditionImage, inGameImage,)

            if (isEmptyEditor && isEmptyClearCondition && !isEmptyInGame)
                return this.#uniqueImage = ImageCreator.uniqueImageFromInGame(this, editorImage, clearConditionImage, inGameImage,)

            console.error(`The unique image could not be determined for the "Entities.${this.name}". Please specify the type in the "Entities._createUniqueImage()".`,)
            return this.#uniqueImage = EmptyUniqueImage.get
        }
        return this.#uniqueImage = value
    }

    //endregion -------------------- unique image --------------------
    //region -------------------- editor image --------------------

    /**
     * Create the editor image
     *
     * @onlyCalledBy<{@link editorImage}>
     * @onlyCalledOnce
     */
    protected _createEditorImage(): NullOr<EditorImage> {
        return null
    }

    public get editorImage(): EditorImage {
        if (this.#editorImage != null)
            return this.#editorImage

        const value = this._createEditorImage()
        if (value == null)
            return this.#editorImage = EmptyEditorImage.get
        return this.#editorImage = value
    }

    //endregion -------------------- editor image --------------------
    //region -------------------- editor sound --------------------

    public get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSound> {
        if (this.#editorVoiceSound !== undefined)
            return this.#editorVoiceSound
        if (EditorVoices.CompanionEnum.get.hasReference(this,))
            return this.#editorVoiceSound = EditorVoices.CompanionEnum.get.getValueByEntity(this,).editorVoiceSoundFileHolder
        return this.#editorVoiceSound = null
    }

    //endregion -------------------- editor sound --------------------
    //region -------------------- clear condition image --------------------

    /**
     * Create the <b>clear condition</b> image
     *
     * @onlyCalledBy<{@link clearConditionImage}>
     * @onlyCalledOnce
     */
    protected _createClearConditionImage(): NullOr<ClearConditionImage> {
        return null
    }

    public get clearConditionImage(): ClearConditionImage {
        if (this.#clearConditionImage != null)
            return this.#clearConditionImage

        const value = this._createClearConditionImage()
        if (value == null)
            return this.#clearConditionImage = EmptyClearConditionImage.get
        return this.#clearConditionImage = value
    }

    //endregion -------------------- clear condition image --------------------
    //region -------------------- in game image --------------------

    /**
     * Create the <b>in game</b> image
     *
     * @onlyCalledOnce
     * @onlyCalledBy<{@link inGameImage}>
     */
    protected _createInGameImage(): NullOr<InGameImage> {
        return null
    }

    public get inGameImage(): InGameImage {
        if (this.#inGameImage != null)
            return this.#inGameImage

        const value = this._createInGameImage()
        if (value == null)
            return this.#inGameImage = EmptyInGameImage.get
        return this.#inGameImage = value
    }

    //endregion -------------------- in game image --------------------
    //region -------------------- unused image (regular) --------------------

    /**
     * Create the <b>unused</b> regular image
     *
     * @onlyCalledOnce
     * @onlyCalledBy<{@link unusedRegularImage}>
     */
    protected _createUnusedRegularImage(): NullOr<UnusedImage_Regular> {
        return null
    }

    public get unusedRegularImage(): UnusedImage_Regular {
        if (this.#unusedRegularImage != null)
            return this.#unusedRegularImage

        const value = this._createUnusedRegularImage()
        if (value == null)
            return this.#unusedRegularImage = EmptyUnusedImage_Regular.get
        return this.#unusedRegularImage = value
    }

    //endregion -------------------- unused image (regular) --------------------
    //region -------------------- unused image (big mushroom) --------------------

    /**
     * Create the <b>unused</b> Big Mushroom image
     *
     * @onlyCalledOnce
     * @onlyCalledBy<{@link unusedBigMushroomImage}>
     */
    protected _createUnusedBigMushroomImage(): NullOr<UnusedImage_BigMushroom> {
        return null
    }

    public get unusedBigMushroomImage(): UnusedImage_BigMushroom {
        if (this.#unusedBigMushroomImage != null)
            return this.#unusedBigMushroomImage

        const value = this._createUnusedBigMushroomImage()
        if (value == null)
            return this.#unusedBigMushroomImage = EmptyUnusedImage_BigMushroom.get
        return this.#unusedBigMushroomImage = value
    }

    //endregion -------------------- unused image (big mushroom) --------------------

    //endregion -------------------- Getter methods (image) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.#everyEnglishNames ??= this.CompanionEnum.get.values.map(it => it.englishName,).toArray()
    }

    //endregion -------------------- Methods --------------------

}

// Entities.values.filter(it => it.uniqueImage !== EmptyUniqueImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, Array.from(it.uniqueImage.map.values(), it => it.map(it => it.name,),).flat(),),);
// Entities.values.filter(it => it.editorImage !== EmptyEditorImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, it.editorImage.all.map(it => it.name,),),);
// Entities.values.filter(it => it.clearConditionImage !== EmptyClearConditionImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, GameStyles.values.map(it2 => it.clearConditionImage.get(it2,),).toArray().flat().map(it => it.name,),),);
// Entities.values.filter(it => it.inGameImage !== EmptyInGameImage.get,).map(it => console.log(`${it.englishName}\n\t`, it.inGameImage,),);
// Entities.values.filter(it => it.unusedRegularImage.all.size !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, [...it.unusedRegularImage.all.entries(),].map(it => it[1]).flat(2),),);
// Entities.values.filter(it => it.unusedBigMushroomImage.all.length !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, it.unusedBigMushroomImage.all.flat(),),);

// TODO remove this test variable when the entities will be complete
// @ts-ignore
(window.test ??= {}).Entities = Entities
