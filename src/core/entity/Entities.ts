import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                   from 'core/ClassWithReference'
import type {ClassWithNullableEditorVoiceSoundFileHolder}                                          from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {EditorVoiceSoundFileHolder}                                                           from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'
import type {Names, Ordinals, PossibleEnglishName}                                                 from 'core/entity/Entities.types'
import type {Entity}                                                                               from 'core/entity/Entity'
import type {ClearConditionImage}                                                                  from 'core/entity/images/clearCondition/ClearConditionImage'
import type {PossibleImageReceivedOnFactory as PossibleClearConditionImage}                        from 'core/entity/images/clearCondition/ClearConditionImage.types'
import type {SimpleImageName as ClearConditionImageName}                                           from 'core/entity/images/clearCondition/ClearConditionImage.types'
import type {EditorImage}                                                                          from 'core/entity/images/editor/EditorImage'
import type {PossibleImageReceivedOnFactory as PossibleEditorImage, SimpleImageName_GroundOrSlope} from 'core/entity/images/editor/EditorImage.types'
import type {SimpleImageName as EditorImageName}                                                   from 'core/entity/images/editor/EditorImage.types'
import type {PowerUpEditorImage}                                                                   from 'core/entity/images/editor/PowerUpEditorImage'
import type {InGameImage_SMM1}                                                                     from 'core/entity/images/inGame/InGameImage_SMM1'
import type {UniqueImage}                                                                          from 'core/entity/images/unique/UniqueImage'
import type {UnusedImage_BigMushroom}                                                              from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                                                                  from 'core/entity/images/unused/UnusedImage_Regular'
import type {Builder}                                                                              from 'util/builder/Builder'
import type {Nullable, NullOr}                                                                     from 'util/types/nullable'

import {EditorVoices}                   from 'core/editorVoice/EditorVoices'
import {EntityLoader}                   from 'core/entity/Entity.loader'
import {ClearConditionImageBuilder}     from 'core/entity/images/clearCondition/ClearConditionImage.builder'
import {ClearConditionImageFactory}     from 'core/entity/images/clearCondition/ClearConditionImage.factory'
import {EditorImageFactory}             from 'core/entity/images/editor/EditorImage.factory'
import {GenericEditorImageBuilder}      from 'core/entity/images/editor/GenericEditorImage.builder'
import {GenericSubEditorImageBuilder}   from 'core/entity/images/editor/GenericSubEditorImage.builder'
import {PowerUpEditorImageBuilder}      from 'core/entity/images/editor/PowerUpEditorImage.builder'
import {SpecificEditorImageBuilder}     from 'core/entity/images/editor/SpecificEditorImage.builder'
import {SpecificSnowEditorImageBuilder} from 'core/entity/images/editor/SpecificSnowEditorImage.builder'
import {InGameImage_SMM1Factory}        from 'core/entity/images/inGame/InGameImage_SMM1.factory'
import {InGameImage_SMM1Builder}        from 'core/entity/images/inGame/InGameImage_SMM1.builder'
import {UniqueImageBuilder}             from 'core/entity/images/unique/UniqueImage.builder'
import {UnusedImage_BigMushroomBuilder} from 'core/entity/images/unused/UnusedImage_BigMushroom.builder'
import {UnusedImage_BigMushroomFactory} from 'core/entity/images/unused/UnusedImage_BigMushroom.factory'
import {UnusedImage_RegularBuilder}     from 'core/entity/images/unused/UnusedImage_Regular.builder'
import {UnusedImage_RegularFactory}     from 'core/entity/images/unused/UnusedImage_Regular.factory'
import {GameStyles}                     from 'core/gameStyle/GameStyles'
import {Themes}                         from 'core/theme/Themes'
import {Times}                          from 'core/time/Times'
import {StringContainer}                from 'util/StringContainer'
import {getValueByEnglishName}          from 'util/utilitiesMethods'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,} = GameStyles
const {GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,} = Themes
const {NIGHT,} = Times

//endregion -------------------- Import from deconstruction --------------------
//region -------------------- Utility methods (applicable only to Entities) --------------------

function __createGroundEditorImage<NAME extends SimpleImageName_GroundOrSlope,>(entity: Entities, simpleImageName: NAME,): GenericEditorImageBuilder<NAME> {
    return new GenericEditorImageBuilder(entity, simpleImageName,)
        .setTheme(SUPER_MARIO_BROS, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
        .setNightTheme(SUPER_MARIO_BROS, AIRSHIP,)
        .setTheme(SUPER_MARIO_BROS_3, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
        .setNightTheme(SUPER_MARIO_BROS_3, SNOW, AIRSHIP, CASTLE,)
        .setTheme(SUPER_MARIO_WORLD, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
        .setNightTheme(SUPER_MARIO_WORLD, UNDERWATER, SNOW,)
        .setTheme(NEW_SUPER_MARIO_BROS_U, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
        .setNightTheme(NEW_SUPER_MARIO_BROS_U, SNOW, AIRSHIP,)
        .setTheme(SUPER_MARIO_3D_WORLD, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
}

/**
 * Set the {@link Themes.GROUND ground theme} on every {@link GameStyles game style} excluding {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
 *
 * @param builder The builder to apply the changes
 */
function __setOnGround(builder: UniqueImageBuilder,): UniqueImageBuilder {
    return builder
        .setOnSMBAnd(GROUND,)
        .setOnSMB3And(GROUND,)
        .setOnSMWAnd(GROUND,)
        .setOnNSMBUAnd(GROUND,)
}

//endregion -------------------- Utility methods (applicable only to Entities) --------------------

/**
 * @recursiveReference {@link EditorVoices}
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity>,
        ClassWithNullableEditorVoiceSoundFileHolder {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new class Entities_Ground extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return __createGroundEditorImage(this, 'Ground',)
        }

    }('Ground',)
    public static readonly START_GROUND =                                  new Entities('Start Ground',)
    public static readonly GOAL_GROUND =                                   new Entities('Goal Ground',)

    public static readonly STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return __createGroundEditorImage(this, 'slope_l45',)
        }

    }('Steep Slope',)
    public static readonly GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return __createGroundEditorImage(this, 'slope_l30',)
        }

    }('Gentle Slope',)

    public static readonly START_BLOCK =                                   new Entities('Start Block',)
    public static readonly OCCLUDE_BLOCK =                                 new Entities('Occlude Block',)

    public static readonly WATER =                                         new Entities('Water',)
    public static readonly LAVA =                                          new Entities('Lava',)
    public static readonly POISON =                                        new Entities('Poison',)

    public static readonly PIPE =                                          new class Entities_Pipe extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Dokan', 4,)
                .setAllGameStyles()
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Pipe',)
    public static readonly CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'ToumeiDokan',).setOnlySM3DW()
        }

    }('Clear Pipe',)

    public static readonly SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Toge',)
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setNotSM3DW()
        }

    }('Spike Trap',)
    public static readonly JELECTRO =                                      new class Entities_Jelectro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMB3AndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericSubEditorImageBuilder(this, 'Toge',).setTheme(SUPER_MARIO_BROS_3, UNDERWATER,)
        }

    }('Jelectro',)
    public static readonly SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericSubEditorImageBuilder(this, 'Toge',).setTheme(SUPER_MARIO_WORLD, UNDERWATER,)
        }

    }('Sea Urchin',)
    public static readonly SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'TogeBlock', 3,).setOnlySM3DW()
        }

    }('Spike Block',)

    public static readonly MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'GroundMushroom', 3,)
                .setTheme(SUPER_MARIO_BROS, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setTheme(SUPER_MARIO_BROS_3, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setTheme(SUPER_MARIO_WORLD, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SUPER_MARIO_WORLD, SNOW,)
                .setTheme(NEW_SUPER_MARIO_BROS_U, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(NEW_SUPER_MARIO_BROS_U, SNOW,)
        }

    }('Mushroom Platform',)
    public static readonly SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'GroundBox', 3,)
                .setTheme(SUPER_MARIO_BROS, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS, SNOW, AIRSHIP,)
                .setImage(SUPER_MARIO_BROS, AIRSHIP, NIGHT, 2,)
                .setTheme(SUPER_MARIO_BROS_3, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setTheme(SUPER_MARIO_WORLD, UNDERGROUND, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SUPER_MARIO_WORLD, SNOW,)
                .setTheme(NEW_SUPER_MARIO_BROS_U, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(NEW_SUPER_MARIO_BROS_U, SNOW,)
                .setTheme(SUPER_MARIO_3D_WORLD, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setDefaultAmount(SUPER_MARIO_3D_WORLD, 1,)
        }

    }('Semisolid Platform',)
    public static readonly BRIDGE =                                        new class Entities_Bridge extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(GROUND, SNOW, GHOST_HOUSE, AIRSHIP,)
                .setOnSMB3And(GROUND, SNOW,)
                .setOnSMWAnd(GROUND, UNDERGROUND, DESERT, SNOW,)//TODO use the ground day image instead
                .setOnNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Bridge',)
                .setTheme(SUPER_MARIO_BROS, SNOW, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setTheme(SUPER_MARIO_WORLD, GROUND, DESERT, SNOW, SKY, FOREST,)
                .setNightTheme(SUPER_MARIO_WORLD, SNOW,)
                .setTheme(NEW_SUPER_MARIO_BROS_U, UNDERGROUND, UNDERWATER, SNOW, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(NEW_SUPER_MARIO_BROS_U, SNOW,)
        }

    }('Bridge',)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(GROUND, UNDERGROUND, SNOW, CASTLE,)
                .setOnSMB3And(GROUND, SNOW,)
                .setOnNSMBUAnd(GROUND,)
                .setOnSM3DWAnd(GROUND,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'RengaBlock',)
                .setTheme(SUPER_MARIO_BROS, UNDERGROUND, SNOW, GHOST_HOUSE, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setNotSMW()
        }

    }('Brick Block',)
    public static readonly CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAnd(UNDERGROUND,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericSubEditorImageBuilder(this, 'RengaBlock',).setTheme(SUPER_MARIO_3D_WORLD, UNDERGROUND, FOREST,)
        }

    }('Cristal Block',)
    public static readonly ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'RengaBlock',).setOnlySMW()
        }

    }('Rotating Block',)

    public static readonly HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(GROUND, UNDERGROUND, UNDERWATER, SNOW, AIRSHIP,)//TODO remove underground night image
                .setOnSMB3And(GROUND, UNDERGROUND, SNOW,)
                .setOnSMWAnd(GROUND, GHOST_HOUSE,)
                .setOnNSMBUAnd(GROUND, UNDERGROUND,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'HardBlock',)
                .setTheme(SUPER_MARIO_BROS, UNDERGROUND, UNDERWATER, SNOW, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS, UNDERGROUND, SNOW,)
                .setTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setTheme(SUPER_MARIO_WORLD, GHOST_HOUSE, AIRSHIP,)
                .setNightTheme(SUPER_MARIO_WORLD, AIRSHIP,)
                .setTheme(NEW_SUPER_MARIO_BROS_U, UNDERGROUND, UNDERWATER, SNOW, SKY, FOREST, CASTLE,)
                .setNotSM3DW()
        }

    }('Hard Block',)
    public static readonly ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'HardBlock',).setOnlySM3DW()
        }

    }('Rock Block',)

    public static readonly QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'HatenaBlock',)
                .setAllGameStyles()
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('? Block',)
    public static readonly HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'ClearBlock'
        }

    }('Hidden Block',)
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BikkuriBlock',).setOnlySM3DW()
        }

    }('! Block',)

    public static readonly NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'OnpuBlock', 1,)
                .setNotSM3DW()
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Note Block',)
    public static readonly MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'OnpuBlock', 2,)
                .setNotSM3DW()
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Music Block',)

    public static readonly DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'ChikuwaBlock',)
                .setAllGameStyles()
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Donut Block',)

    public static readonly CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'KumoBlock',)
                .setAllGameStyles()
                .setTheme(SUPER_MARIO_BROS, UNDERWATER,)
                .setNightTheme(SUPER_MARIO_BROS, SNOW,)
                .setTheme(SUPER_MARIO_BROS_3, UNDERWATER,)
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
                .setTheme(SUPER_MARIO_WORLD, UNDERWATER,)
        }

    }('Cloud Block',)

    public static readonly ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'OnOffSwitch'
        }

    }('ON/OFF Switch',)
    public static readonly DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'OnOffBlock', 2,).setAllGameStyles()
        }

    }('Dotted-Line Block',)

    public static readonly P_BLOCK =                                       new class Entities_PBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'PBlock', 2,).setAllGameStyles()
        }

    }('P Block',)

    public static readonly BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Chikachika', 2,).setOnlySM3DW()
        }

    }('Blinking Block',)

    public static readonly ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'IceBlock',)
                .setAllGameStyles()
                .setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Ice Block',)
    public static readonly ICICLE =                                        new class Entities_Icicle extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Icicle', 2,).setAllGameStyles()
        }

    }('Icicle',)

    public static readonly COIN =                                          new class Entities_Coin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Coin', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Coin'
        }

    }('Coin',)
    public static readonly FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Coin', 2,).setNotSM3DW().setNightTheme(SUPER_MARIO_BROS_3, SNOW,)
        }

    }('Frozen Coin',)
    public static readonly TEN_COIN =                                      new class Entities_TenCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, '10Coin', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, '10Coin', 1,).setAllGameStyles()
        }

    }('10-Coin',)
    public static readonly THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, '10Coin', 2,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, '10Coin', 2,).setAllGameStyles()
        }

    }('30-Coin',)
    public static readonly FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, '10Coin', 3,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, '10Coin', 3,).setAllGameStyles()
        }

    }('50-Coin',)
    public static readonly PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'PinkCoin'
        }

    }('Pink Coin',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SuperKinoko', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperKinoko', 1,).setOnlySMB()
        }

    }('Super Mushroom',)

    public static readonly FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, null, 'FireFlower',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'FireFlower', 1,).setAllGameStyles()
        }

    }('Fire Flower',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',)

    public static readonly SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_BROS, 'FireFlower', 2,)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'FireFlower', 2,).setOnlySMB()
        }

    }('Superball Flower',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',)

    public static readonly MYSTERY_MUSHROOM =                              new class Entities_MysteryMushroom extends Entities {

        protected override _createInGameImage(): Builder<InGameImage_SMM1> {
            return new InGameImage_SMM1Builder(this, 'Kinoko2',).setOnlySMB()
        }

    }('Mystery Mushroom',)
    public static readonly WEIRD_MUSHROOM =                                new class Entities_WeirdMushroom extends Entities {

        protected override _createInGameImage(): Builder<InGameImage_SMM1> {
            return new InGameImage_SMM1Builder(this, 'KinokoFunny',).setOnlySMB()
        }

    }('Weird Mushroom',)

    public static readonly MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SuperKinoko', 2,).setOnlySMB()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperKinoko', 2,).setOnlySMB()
        }

    }('Master Sword',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',)

    public static readonly BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_BROS, 'DekaKinoko',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'DekaKinoko',).setOnlySMB()
        }

    }('Big Mushroom',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new class Entities_BigMushroom_Classic extends Entities {

        protected override _createInGameImage(): Builder<InGameImage_SMM1> {
            return new InGameImage_SMM1Builder(this, 'MegaKinoko').setAllGameStyles()
        }

    }('Big Mushroom (classic)',)
    public static readonly BIG_MUSHROOM_MODERN =                           new class Entities_BigMushroom_Modern extends Entities {

        protected override _createInGameImage(): Builder<InGameImage_SMM1> {
            return new InGameImage_SMM1Builder(this, 'MegaKinoko2').setAllGameStyles()
        }

    }('Big Mushroom (modern)',)

    public static readonly SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_BROS, 'KinokoUSA',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KinokoUSA').setOnlySMB()
        }

    }('SMB2 Mushroom',)

    public static readonly SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMB3AndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_BROS_3, 'SuperKonoha',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperKonoha',).setOnlySMB3()
        }

    }('Super Leaf',)

    public static readonly FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMB3AndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_BROS_3, 'FrogSuit',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'FrogSuit',).setOnlySMB3()
        }

    }('Frog Suit',)

    public static readonly CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_WORLD, 'MantleWing',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'MantleWing',).setOnlySMW()
        }

    }('Cape Feather',)

    public static readonly POWER_BALLOON =                                 new class Entities_PowerBalloon extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_WORLD, 'PowerBalloon',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'PowerBalloon',).setOnlySMW()
        }

    }('Power Balloon',)

    public static readonly PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, NEW_SUPER_MARIO_BROS_U, 'PropellerKinoko',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'PropellerKinoko',).setOnlyNSMBU()
        }

    }('Propeller Mushroom',)

    public static readonly SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, NEW_SUPER_MARIO_BROS_U, 'SuperDonguri',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperDonguri',).setOnlyNSMBU()
        }

    }('Super Acorn',)

    public static readonly SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_3D_WORLD, 'SuperBell',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperBell',).setOnlySM3DW()
        }

    }('Super Bell',)

    public static readonly SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_3D_WORLD, 'SuperHammer',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SuperHammer',).setOnlySM3DW()
        }

    }('Super Hammer',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',)

    public static readonly BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<PowerUpEditorImage> {
            return new PowerUpEditorImageBuilder(this, SUPER_MARIO_3D_WORLD, 'BoomerangFlower',)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoomerangFlower',).setOnlySM3DW()
        }

    }('Boomerang Flower',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',)

    public static readonly CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BoxKiller',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoxKiller',).setOnlySM3DW()
        }

    }('Cannon Box',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',)

    public static readonly PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BoxPropeller',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoxPropeller',).setOnlySM3DW()
        }

    }('Propeller Box',)

    public static readonly GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BoxKuribo',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoxKuribo',).setOnlySM3DW()
        }

    }('Goomba Mask',)

    public static readonly BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BoxKillerPlayer',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoxKillerPlayer',).setOnlySM3DW()
        }

    }('Bullet Bill Mask',)

    public static readonly RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BoxPow',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BoxPow',).setOnlySM3DW()
        }

    }('Red POW Box',)

    public static readonly SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'SuperStar'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'SuperStar'
        }

    }('Super Star',)

    public static readonly ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return '1upKinoko'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return '1upKinoko'
        }

    }('1-Up Mushroom',)
    public static readonly ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'DokuKinoko',).setNotSM3DW()
        }

    }('Rotten Mushroom',)

    public static readonly SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KutsuKuribo', 1,).setOnlySMBAndSMB3()
        }

    }('Shoe Goomba',)
    public static readonly SHOE =                                          new class Entities_Shoe extends Entities {

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KutsuKuribo',).setOnlySMBAndSMB3()
        }

    }('Shoe',)
    public static readonly STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KutsuKuribo', 2,).setOnlySMBAndSMB3()
        }

    }('Stiletto Goomba',)
    public static readonly STILETTO =                                      new Entities('Stiletto',)
    public static readonly YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'YosshiEgg',).setOnlySMWAndNSMBU()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'YosshiEgg',).setOnlySMWAndNSMBU()
        }

    }('Yoshi\'s Egg',)
    public static readonly YOSHI =                                         new Entities('Yoshi',)
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',)
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new Entities('Wrench thrown by a Yoshi',)
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',)
    public static readonly RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'YosshiEggRed',).setOnlySMWAndNSMBU()
        }

    }('Red Yoshi\'s Egg',)
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',)
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class Entities_Goomba extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Kuribo', 1,).setNotSMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Kuribo', 1,).setNotSMW()
        }


        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            return new UnusedImage_BigMushroomBuilder(this, 'Kuribo D',)
                .setImage('damage', 1,)
                .setImage('swim', 2,)
                .setImage('walk', 2,)
                .setImage('kutsu',)
        }

    }('Goomba',)
    public static readonly GALOOMBA =                                      new class Entities_Galoomba extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Kuribo', 1,).setOnlySMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Kuribo', 1,).setOnlySMW()
        }

    }('Galoomba',)
    public static readonly GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Kuribo', 2,).setNotSMWAndSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Kuribo', 2,).setNotSMWAndSM3DW()
        }

    }('Goombrat',)
    public static readonly GOOMBUD =                                       new class Entities_Goombud extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Kuribo', 2,).setOnlySMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Kuribo', 2,).setOnlySMW()
        }

    }('Goombud',)

    public static readonly GREEN_KOOPA_TROOPA =                            new class Entities_GreenKoopaTroopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Nokonoko', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Nokonoko'
        }

    }('Green Koopa Troopa',)
    public static readonly RED_KOOPA_TROOPA =                              new class Entities_RedKoopaTroopa extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Nokonoko', 2,).setAllGameStyles()
        }

    }('Red Koopa Troopa',)
    public static readonly GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',)
    public static readonly RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',)
    public static readonly GREEN_KOOPA_SHELL =                             new class Entities_GreenKoopaShell extends Entities {

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'NokonokoShell',).setNotSMB()
        }

    }('Green Koopa Shell',)
    public static readonly RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',)

    public static readonly DRY_BONES =                                     new class Entities_DryBones extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Karon', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Karon', 1,).setAllGameStyles()
        }

    }('Dry Bones',)
    public static readonly PARABONES =                                     new Entities('Parabones',)
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',)
    public static readonly DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Karon', 2,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Karon', 2,).setNotSM3DW()
        }

    }('Dry Bones Shell',)

    public static readonly BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Met', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Met', 1,).setNotSM3DW()
        }

    }('Buzzy Beetle',)
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',)
    public static readonly BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Met', 2,).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Met', 2,).setNotSM3DW()
        }

    }('Buzzy Shell',)

    public static readonly SPINY =                                         new class Entities_Spiny extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Togezo', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Togezo', 1,).setAllGameStyles()
        }

    }('Spiny',)
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',)
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',)
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',)
    public static readonly SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Togezo', 2,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Togezo', 2,).setNotSM3DW()
        }

    }('Spiny Shell',)

    public static readonly SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'TogeMet',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'TogeMet').setNotSM3DW()
        }

    }('Spike Top',)
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',)
    public static readonly FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'TogeMet', 2,).setNotSM3DW()
        }

    }('Fast Spike Top',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',)

    public static readonly SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pyonchu', 1,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pyonchu',).setOnlySM3DW()
        }

    }('Skipsqueak',)
    public static readonly SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pyonchu', 2,).setOnlySM3DW()
        }

    }('Spiny Skipsqueak',)

    public static readonly ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Arihei', 1,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Arihei',).setOnlySM3DW()
        }

    }('Ant Trooper',)
    public static readonly HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Arihei', 2,).setOnlySM3DW()
        }

    }('Horned Ant Trooper',)

    public static readonly STINGBY =                                       new class Entities_Stingby extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Hacchin',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Hacchin',).setOnlySM3DW()
        }

    }('Stingby',)

    public static readonly CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Pukupuku', 2,)
                .setAllGameStyles()
                .setImage(SUPER_MARIO_WORLD, null, null, 2,)
                .setImage(NEW_SUPER_MARIO_BROS_U, null, null, 2,)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pukupuku',).setNotSMWAndNSMBU()
        }

    }('Cheep Cheep',)
    public static readonly BLURPS =                                        new class Entities_Blurps extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pukupuku', 1,).setOnlySMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pukupuku',).setOnlySMW()
        }

    }('Blurps',)
    public static readonly DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pukupuku', 1,).setOnlyNSMBU()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pukupuku',).setOnlyNSMBU()
        }

    }('Deep Cheep',)
    public static readonly FISH_BONE =                                     new class Entities_FishBone extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'FishBone'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'FishBone'
        }

    }('Fish Bone',)

    public static readonly BLOOPER =                                       new class Entities_Blooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Gesso', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Gesso'
        }

    }('Blooper',)
    public static readonly BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Gesso', 2,).setNotSM3DW()
        }

    }('Blooper Nanny',)
    public static readonly BABY_BLOOPER =                                  new Entities('Baby Blooper',)

    public static readonly PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Fugumannen',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Fugumannen',).setOnlySM3DW()
        }

    }('Porcupuffer',)

    public static readonly WIGGLER =                                       new class Entities_Wiggler extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Hanachan', 1,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Hanachan',).setNotSM3DW()
        }

    }('Wiggler',)
    public static readonly ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Hanachan', 2,).setNotSM3DW()
        }

    }('Angry Wiggler',)

    public static readonly PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pakkun', 1,).setNotSMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pakkun', 1,).setNotSMW()
        }

    }('Piranha Plant',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pakkun', 1,).setOnlySMW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pakkun', 1,).setOnlySMW()
        }

    }('Jumping Piranha Plant',)
    public static readonly FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Pakkun', 2,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Pakkun', 2,).setOnlySMW()
        }

    }('Fire Piranha Plant',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',)
    public static readonly MUNCHER =                                       new class Entities_Muncher extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BlackPakkun',).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BlackPakkun',).setNotSM3DW()
        }

    }('Muncher',)
    public static readonly PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'PackunPipe', 2,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'PackunPipe',).setOnlySM3DW()
        }

    }('Piranha Creeper',)

    public static readonly CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Wanwan', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

    }('Chain Chomp',)
    public static readonly UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Wanwan', 2,).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Wanwan',).setNotSM3DW()
        }

    }('Unchained Chomp',)
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',)

    public static readonly SPIKE =                                         new class Entities_Spike extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Gabon', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Gabon'
        }

    }('Spike',)
    public static readonly SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Gabon', 2,)
                .setAllGameStyles()
                .setTheme(SUPER_MARIO_BROS, UNDERGROUND, GHOST_HOUSE, CASTLE,)
                .setTheme(SUPER_MARIO_BROS_3, UNDERGROUND, GHOST_HOUSE, CASTLE,)
                .setNightTheme(SUPER_MARIO_BROS, GROUND, DESERT, SKY, FOREST, AIRSHIP,)
                .setNightTheme(SUPER_MARIO_BROS_3, GROUND, DESERT, SKY, FOREST, AIRSHIP,)
        }

    }('Spike Ball',)
    public static readonly SNOWBALL =                                      new class Entities_Snowball extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificSnowEditorImageBuilder(this, 'Gabon', 2,).setAllGameStyles()
        }

    }('Snowball',)

    public static readonly LAKITU =                                        new class Entities_Lakitu extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Jugem', 1,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Jugem', 1,).setNotSM3DW()
        }

    }('Lakitu',)
    public static readonly LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Jugem', 2,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Jugem', 2,).setNotSM3DW()
        }

    }('Lakitu\'s Cloud',)

    public static readonly BOO =                                           new class Entities_Boo extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Teresa', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Teresa'
        }

    }('Boo',)
    public static readonly STRETCH =                                       new class Entities_Stretch extends Entities {

        protected override _createUnusedRegularImage(): Builder<UnusedImage_Regular> {
            const waitImages = ['wait', 1,] as const
            const outImages = ['out', 4,] as const

            return new UnusedImage_RegularBuilder(this, 'Enemy', 'Necchi',)
                .setImage(SUPER_MARIO_BROS, ...waitImages,)
                .setImage(SUPER_MARIO_BROS, ...outImages,)
                .setImage(SUPER_MARIO_BROS_3, ...waitImages,)
                .setImage(SUPER_MARIO_BROS_3, ...outImages,)
                .setImage(SUPER_MARIO_WORLD, ...waitImages,)
                .setImage(SUPER_MARIO_WORLD, ...outImages,)
        }

        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            return new UnusedImage_BigMushroomBuilder(this, 'Necchi',)
                .setImage('wait', [1, 2,],)
                .setImage('out', [4,],)
        }

    }('Stretch',)
    public static readonly BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Teresa', 2,).setNotSM3DW()
        }

    }('Boo Buddies',)
    public static readonly PEEPA =                                         new class Entities_Peepa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Teresa', 2,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Teresa', 2,).setOnlySM3DW()
        }

    }('Peepa',)

    public static readonly BOB_OMB =                                       new class Entities_BobOmb extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bombhei', 1,).setAsDifferentInSMBAndSMB3().setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Bombhei'
        }

    }('Bob-omb',)
    public static readonly LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bombhei', 2,).setAllGameStyles()
        }

    }('Lit Bob-omb',)

    public static readonly POKEY =                                         new class Entities_Pokey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'Sambo'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Sambo'
        }

    }('Pokey',)
    public static readonly SNOW_POKEY =                                    new class Entities_SnowPokey extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificSnowEditorImageBuilder(this, 'Sambo', 1,).setAllGameStyles()
        }

    }('Snow Pokey',)

    public static readonly THWOMP =                                        new class Entities_Thwomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'Dossun'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Dossun'
        }

    }('Thwomp',)

    public static readonly MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'ChoroPoo',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'ChoroPoo',).setNotSM3DW()
        }

    }('Monty Mole',)
    public static readonly ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Poo',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Poo',).setNotSM3DW()
        }

    }('Rocky Wrench',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',)

    public static readonly MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'Kameck'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Kameck'
        }

    }('Magikoopa',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',)

    public static readonly HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bros', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Bros'
        }

    }('Hammer Bro',)
    public static readonly SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'MegaBros', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'MegaBros'
        }

    }('Sledge Bro',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',)
    public static readonly FIRE_BRO =                                      new class Entities_FireBro extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bros', 2,).setOnlySM3DW()
        }

    }('Fire Bro',)
    public static readonly HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'MegaBros', 2,).setOnlySM3DW()
        }

    }('Heavy Fire Bro',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',)

    public static readonly LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'Bubble'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Bubble'
        }

    }('Lava Bubble',)

    public static readonly MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaMecha', 1,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KoopaMecha',).setNotSM3DW()
        }

    }('Mechakoopa',)
    public static readonly BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaMecha', 2,).setNotSM3DW()
        }

    }('Blasta Mechakoopa',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',)
    public static readonly ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaMecha', 3,).setNotSM3DW()
        }

    }('Zappa Mechakoopa',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',)

    public static readonly CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'MagmaFish',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'MagmaFish',).setOnlySM3DW()
        }

    }('Charvaargh',)

    public static readonly BULLY =                                         new class Entities_Bully extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Donketsu',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Donketsu',).setOnlySM3DW()
        }

    }('Bully',)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KillerHoudai', 1,).setAllGameStyles().setAsDifferentInSMBAndSMB3()
        }

    }('Bill Blaster',)
    public static readonly BULLET_BILL =                                   new class Entities_BulletBill extends Entities {

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'Killer'
        }

    }('Bullet Bill',)
    public static readonly BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KillerHoudai', 2,).setAllGameStyles()
        }

    }('Bull\'s-Eye Blaster',)
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',)
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',)

    public static readonly BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor(),)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'MagnumKiller', 1,).setAllGameStyles().setAsDifferentInSMBAndSMB3()
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'MagnumKiller'
        }

    }('Banzai Bill',)
    public static readonly BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'MagnumKiller', 2,).setNotSM3DW()
        }

    }('Bull\'s-Eye Banzai',)
    public static readonly CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'MagnumKiller', 2,).setOnlySM3DW()
        }

    }('Cat Banzai Bill',)

    public static readonly CANNON =                                        new class Entities_Cannon extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder,)
        }


        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Houdai', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

    }('Cannon',)
    public static readonly CANNONBALL =                                    new class Entities_Cannonball extends Entities {

        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            return new UnusedImage_BigMushroomBuilder(this, 'SenkanHoudai D',).setImage('senkan_houdai_ball',)
        }

    }('Cannonball',)
    public static readonly RED_CANNON =                                    new class Entities_RedCannon extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Houdai', 2,).setNotSM3DW()
        }

    }('Red Cannon',)
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',)

    public static readonly BURNER =                                        new class Entities_Burner extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Burner', 2,).setNotSM3DW()
        }

    }('Burner',)

    public static readonly FIRE_BAR =                                      new class Entities_FireBar extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'FireBar',).setNotSM3DW()
        }

    }('Fire Bar',)

    public static readonly SKEWER =                                        new class Entities_Skewer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'TogeKonbo',).setAsDifferentInSMBAndSMB3().setNotSM3DW()
        }

    }('Skewer',)

    public static readonly KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaClown', 1,).setNotNSMBUAndSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KoopaClown',).setNotNSMBUAndSM3DW()
        }


        protected override _createUnusedRegularImage(): Builder<UnusedImage_Regular> {
            return new UnusedImage_RegularBuilder(this, 'Enemy', 'KoopaClown',).setImage(SUPER_MARIO_WORLD, 'weep', [4, 5, 6, 7,],)
        }

        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            const images = [4, 5, 6, 7,] as const

            return new UnusedImage_BigMushroomBuilder(this, 'KoopaClown',)
                .setImage('wait', images,)
                .setImage('anger', images,)
                .setImage('blink', images,)
                .setImage('weep', images,)
                .setImage('iron_ball', [1,],)
                .setImage('tear', [1,],)
        }

    }('Koopa Clown Car',)
    public static readonly JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaClown', 1,).setOnlyNSMBU()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KoopaClown',).setOnlyNSMBU()
        }

    }('Junior Clown Car',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaClown', 2,).setNotNSMBUAndSM3DW()
        }

    }('Fire Koopa Clown Car',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlyNSMBUAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'KoopaClown', 2,).setOnlyNSMBU()
        }

    }('Fire Junior Clown Car',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',)

    public static readonly KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'KoopaCar',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KoopaCar',).setOnlySM3DW()
        }

    }('Koopa Troopa Car',)
    public static readonly CAR =                                           new Entities('Car',)

    public static readonly GRINDER =                                       new class Entities_Grinder extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Saw',).setNotSM3DW()
        }

    }('Grinder',)

    public static readonly ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SunMoon', 1,).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'SunMoon',).setNotSM3DW()
        }

    }('Angry Sun',)
    public static readonly MOON =                                          new class Entities_Moon extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SunMoon', 2,).setNotSM3DW()
        }

    }('Moon',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class Entities_Bowser extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Koopa',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Koopa',).setNotSM3DW()
        }


        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            return new UnusedImage_BigMushroomBuilder(this, 'Koopa',).setImage('fire', [1,],)
        }

    }('Bowser',)
    public static readonly MEOWSER =                                       new class Entities_Meowser extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Koopa',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Koopa',).setOnlySM3DW()
        }

    }('Meowser',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',)

    public static readonly BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'KoopaJr',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'KoopaJr',).setNotSM3DW()
        }


        protected override _createUnusedBigMushroomImage(): Builder<UnusedImage_BigMushroom> {
            return new UnusedImage_BigMushroomBuilder(this, 'KoopaJr',).setImage('fire', [1,],)
        }

    }('Bowser Jr.',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',)

    public static readonly BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bunbun', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Bunbun', 1,).setAllGameStyles()
        }

    }('Boom Boom',)
    public static readonly POM_POM =                                       new class Entities_PomPom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Bunbun', 2,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Bunbun', 2,).setOnlySM3DW()
        }

    }('Pom Pom',)
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',)
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',)

    public static readonly LARRY =                                         new class Entities_Larry extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Larry',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Larry',).setNotSM3DW()
        }

    }('Larry',)
    public static readonly LARRY_WAND =                                    new Entities('Larry\'s Wand',)
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',)

    public static readonly IGGY =                                          new class Entities_Iggy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Iggy',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Iggy',).setNotSM3DW()
        }

    }('Iggy',)
    public static readonly IGGY_WAND =                                     new Entities('Iggy\'s Wand',)
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',)

    public static readonly WENDY =                                         new class Entities_Wendy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Wendy',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Wendy',).setNotSM3DW()
        }

    }('Wendy',)
    public static readonly WENDY_WAND =                                    new Entities('Wendy\'s Wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',)

    public static readonly LEMMY =                                         new class Entities_Lemmy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Lemmy',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Lemmy',).setNotSM3DW()
        }

    }('Lemmy',)
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',)

    public static readonly ROY =                                           new class Entities_Roy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Roy',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Roy',).setNotSM3DW()
        }

    }('Roy',)
    public static readonly ROY_WAND =                                      new Entities('Roy\'s Wand',)
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',)

    public static readonly MORTON =                                        new class Entities_Morton extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Morton',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Morton',).setNotSM3DW()
        }

    }('Morton',)
    public static readonly MORTON_WAND =                                   new Entities('Morton\'s Wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',)

    public static readonly LUDWIG =                                        new class Entities_Ludwig extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Ludwig',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Ludwig',).setNotSM3DW()
        }

    }('Ludwig',)
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',)
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new class Entities_Bumper extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Marumaru',).setNotSM3DW()
        }

    }('Bumper',)

    public static readonly SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BurankoCrane',).setNotSM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BurankoCrane',).setNotSM3DW()
        }

    }('Swinging Claw',)

    public static readonly TWISTER =                                       new class Entities_Twister extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'Tornado'
        }

    }('Twister',)

    public static readonly ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Hanatari',).setNotSM3DW()
        }

    }('One-Way Wall',)

    public static readonly TRACK =                                         new class Entities_Track extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Rail',).setNotSM3DW()
        }

    }('Track',)
    public static readonly TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'OrbitBlock', 2,).setOnlySM3DW()
        }

    }('Track Block',)

    public static readonly VINE =                                          new class Entities_Vine extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'TsutaBlock',).setNotSM3DW()
        }

        protected override _createUnusedRegularImage(): Builder<UnusedImage_Regular> {
            return new UnusedImage_RegularBuilder(this, 'Object Block', 'Tuta',)
                .setImage(SUPER_MARIO_BROS, 'wait', 1,)
                .setImage(SUPER_MARIO_BROS_3, 'wait', 2,)
                .setImage(SUPER_MARIO_WORLD, 'wait', 2,)
        }

    }('Vine',)
    public static readonly TREE =                                          new class Entities_Tree extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAnd(GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW,)
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'BellTree',)
                .setTheme(SUPER_MARIO_3D_WORLD, UNDERGROUND, UNDERWATER, DESERT, SNOW, FOREST,)
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'BellTree',).setOnlySM3DW()
        }

    }('Tree',)

    // public static readonly STARTING_ARROW =                                new Entities('Starting Arrow',)//A background entity
    public static readonly ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'Yajirushi'
        }

    }('Arrow Sign',)

    public static readonly CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'MiddleFlag'
        }

    }('Checkpoint Flag',)
    public static readonly GOAL_POLE =                                     new class Entities_GoalPole extends Entities {

        protected override _createUnusedRegularImage(): Builder<UnusedImage_Regular> {
            return new UnusedImage_RegularBuilder(this, 'Object', 'Goalpole',).setImage(SUPER_MARIO_BROS, 'goalpole', [1,],)
        }

    }('Goal Pole',)//An interactable partially solid & background entity
    public static readonly GOAL_WITH_CARDS =                               new Entities('Cards Roulette',)//An interactable background entity
    public static readonly GIANT_GATE =                                    new Entities('Giant Gate',)//An interactable background entity

    // public static readonly CASTLE =                                        new Entities('Castle',)//A background entity
    // public static readonly ENDING_CASTLE_DOOR =                            new Entities('Ending Castle Door',)//A background entity
    // public static readonly AXE =                                           new Entities('Axe',)//An interactable partially solid & background entity

    public static readonly DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'DashBlock',).setOnlySM3DW()
        }

    }('Dash Block',)

    public static readonly SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SnakeBlock', 1,).setAllGameStyles()
        }

    }('Snake Block',)
    public static readonly FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'SnakeBlock', 2,).setAllGameStyles()
        }

    }('Fast Snake Block',)

    public static readonly CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'BeltConveyor', 1,).setAllGameStyles()
        }

    }('Conveyor Belt',)
    public static readonly FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'BeltConveyor', 2,).setAllGameStyles()
        }

    }('Fast Conveyor Belt',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Trampoline', 2,).setOnlySM3DW()
        }

    }('Mushroom Trampoline',)
    public static readonly ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'OnOffTrampoline', 2,).setOnlySM3DW()
        }

    }('ON/OFF Trampoline',)

    public static readonly LIFT =                                          new class Entities_List extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Lift', 1,).setNotSM3DW()
        }

    }('Lift',)
    public static readonly FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Lift', 2,).setNotSM3DW()
        }

    }('Flimsy Lift',)
    public static readonly CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Lift', 1,).setOnlySM3DW()
        }

    }('Cloud Lift',)

    public static readonly SEESAW =                                        new class Entities_Seesaw extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Seesaw',).setNotSM3DW()
        }

    }('Seesaw',)

    public static readonly LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'YouganLift', 1,).setNotSM3DW()
        }

    }('Lava Lift',)
    public static readonly FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'YouganLift', 2,).setNotSM3DW()
        }

    }('Fast Lava Lift',)

    public static readonly CRATE =                                         new class Entities_Crate extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'WoodBox',).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'WoodBox',).setOnlySM3DW()
        }

    }('Crate',)

    public static readonly KEY =                                           new class Entities_Key extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Key', 1,).setAllGameStyles()
        }

    }('Key',)
    public static readonly CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMBAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Key', 2,).setOnlySMB()
        }

    }('Cursed Key',)
    public static readonly PHANTO =                                        new Entities('Phanto',)

    public static readonly TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'JumpStep', 2,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'JumpStep',).setNotSMB()
        }

    }('Trampoline',)
    public static readonly HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new GenericEditorImageBuilder(this, 'Hopper',).setOnlySM3DW()
        }

    }('Hop-Chops',)

    public static readonly POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'PowBlock', 1,).setAllGameStyles()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'PowBlock', 1,).setAllGameStyles()
        }

    }('POW Block',)
    public static readonly RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'PowBlock', 2,).setOnlySM3DW()
        }

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'PowBlock', 2,).setOnlySM3DW()
        }

    }('Red POW Block',)

    public static readonly P_SWITCH =                                      new class Entities_PSwitch extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor()
        }

        protected override _createEditorImage(): EditorImageName {
            return 'PSwitch'
        }

        protected override _createClearConditionImage(): ClearConditionImageName {
            return 'PSwitch'
        }


        protected override _createUnusedRegularImage(): Builder<UnusedImage_Regular> {
            return new UnusedImage_RegularBuilder(this, 'Object', 'PSwitch',)
                .setImage(SUPER_MARIO_BROS, 'wait', [0, 1, 2,],)
                .setImage(NEW_SUPER_MARIO_BROS_U, 'down_switch_hatena_Alb', ['000', '004',],)
        }

    }('P Switch',)

    public static readonly STONE =                                         new class Entities_Stone extends Entities {

        protected override _createClearConditionImage(): Builder<ClearConditionImage> {
            return new ClearConditionImageBuilder(this, 'Stone',).setNotSMB()
        }

    }('Stone',)

    public static readonly WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Door', 1,).setAllGameStyles()
        }

    }('Warp Door',)
    public static readonly P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Door', 2,).setAllGameStyles()
        }

    }('P Warp Door',)
    public static readonly KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'Door', 3,).setAllGameStyles()
        }

    }('Key Door',)

    public static readonly WARP_BOX =                                      new class Entities_WarpBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'WarpBox', 1,).setOnlySM3DW()
        }

    }('Warp Box',)
    public static readonly WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes()
        }

        protected override _createEditorImage(): Builder<EditorImage> {
            return new SpecificEditorImageBuilder(this, 'WarpBox', 2,).setOnlySM3DW()
        }

    }('Warp Box (With Key)',)

    public static readonly WING =                                          new class Entities_Wing extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'Wing'
        }

    }('Wing',)
    public static readonly PARACHUTE =                                     new class Entities_Parachute extends Entities {

        protected override _createEditorImage(): EditorImageName {
            return 'parachute'
        }

    }('Parachute',)

    public static readonly TOAD =                                          new Entities('Toad',)
    public static readonly CAGED_TOADETTE =                                new Entities('Caged Toadette',)//A background entity

    public static readonly BUBBLE =                                        new Entities('Bubble',)//An interactable entity

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<Entities, typeof Entities>> = class CompanionEnum_Entities
        extends BasicCompanionEnum<Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>
    static #everyEnglishNames?: readonly PossibleEnglishName[]

    #reference?: Entity
    readonly #englishNameContainer
    #uniqueImage?: UniqueImage
    #uniqueImageBuilder?: UniqueImageBuilder
    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #inGameImage?: InGameImage_SMM1
    #unusedRegularImage?: UnusedImage_Regular
    #unusedBigMushroomImage?: UnusedImage_BigMushroom
    #editorVoiceSound?: NullOr<EditorVoiceSoundFileHolder>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

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


    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //region -------------------- unique image --------------------

    private __createUniqueImage(): UniqueImageBuilder {
        const builder = this._createUniqueImage(this.__uniqueImageBuilder)
        const type = builder.referenceType
        switch (type) {
            /* eslint-disable @typescript-eslint/no-unused-expressions*/
            case 'editor':
                this.editorImage
                return builder
            case 'clear condition':
                this.clearConditionImage
                return builder
            case 'while playing':
                this.inGameImage
                return builder
            case null:
                this.editorImage
                this.clearConditionImage
                this.inGameImage
                return builder
            /* eslint-enable @typescript-eslint/no-unused-expressions */
        }
    }

    protected _createUniqueImage(builder: UniqueImageBuilder,): UniqueImageBuilder {
        return builder
    }

    private get __uniqueImageBuilder(): UniqueImageBuilder {
        return this.#uniqueImageBuilder ??= new UniqueImageBuilder()
    }

    public get uniqueImage(): UniqueImage {
        return this.#uniqueImage ??= this.__createUniqueImage().build()
    }

    //endregion -------------------- unique image --------------------
    //region -------------------- editor image --------------------

    /**
     * Get the editor image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected _createEditorImage(): PossibleEditorImage {
        return null
    }

    /**
     * Create the editor image from its {@link EditorImageFactory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createEditorImage() {
        const createValue = this._createEditorImage(),
            value = EditorImageFactory.create(this, createValue)
        if (createValue != null)
            this.__uniqueImageBuilder.setEditor(value)
        return value
    }

    public get editorImage(): EditorImage {
        return this.#editorImage ??= this.#createEditorImage()
    }

    //endregion -------------------- editor image --------------------
    //region -------------------- editor sound --------------------

    public get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSoundFileHolder> {
        if (this.#editorVoiceSound === undefined)
            this.#editorVoiceSound = EditorVoices.hasReference(this) ? EditorVoices.getValueByEntity(this).editorVoiceSoundFileHolder : null
        return this.#editorVoiceSound
    }

    //endregion -------------------- editor sound --------------------
    //region -------------------- clear condition image --------------------

    /**
     * Get the clear condition image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected _createClearConditionImage(): PossibleClearConditionImage {
        return null
    }

    /**
     * Create the "clear condition" image from its {@link ClearConditionImageFactory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createClearConditionImage() {
        const createValue = this._createClearConditionImage(),
            value = ClearConditionImageFactory.create(this, createValue,)
        if (createValue != null)
            this.__uniqueImageBuilder.setClearCondition(value)
        return value
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage ??= this.#createClearConditionImage()
    }

    //endregion -------------------- clear condition image --------------------
    //region -------------------- in game image --------------------

    /**
     * Get the "in game" image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected _createInGameImage(): NullOr<Builder<InGameImage_SMM1>> {
        return null
    }

    /**
     * Create the "in game" image from its {@link InGameImage_SMM1Factory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createInGameImage() {
        const createValue = this._createInGameImage(),
            value = InGameImage_SMM1Factory.create(createValue)
        if (createValue != null)
            this.__uniqueImageBuilder.setWhilePlaying(value)
        return value
    }

    public get inGameImage(): InGameImage_SMM1 {
        return this.#inGameImage ??= this.#createInGameImage()
    }

    //endregion -------------------- in game image --------------------
    //region -------------------- unused image (regular) --------------------

    /**
     * Get the "unused" regular image in a builder form
     *
     * @protected
     * @onlyCalledOnce
     */
    protected _createUnusedRegularImage(): NullOr<Builder<UnusedImage_Regular>> {
        return null
    }

    public get unusedRegularImage(): UnusedImage_Regular {
        return this.#unusedRegularImage ??= UnusedImage_RegularFactory.create(this._createUnusedRegularImage())
    }

    //endregion -------------------- unused image (regular) --------------------
    //region -------------------- unused image (big mushroom) --------------------

    /**
     * Get the "unused" Big Mushroom image in a builder form
     *
     * @protected
     * @onlyCalledOnce
     */
    protected _createUnusedBigMushroomImage(): NullOr<Builder<UnusedImage_BigMushroom>> {
        return null
    }

    public get unusedBigMushroomImage(): UnusedImage_BigMushroom {
        return this.#unusedBigMushroomImage ??= UnusedImage_BigMushroomFactory.create(this._createUnusedBigMushroomImage())
    }

    //endregion -------------------- unused image (big mushroom) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.#everyEnglishNames ??= this.values.map(it => it.englishName).toArray()
    }

    public static getValueByName(value: Nullable<| Entities | string>,): Entities {
        return getValueByEnglishName(value, this,)
    }

    public static hasValueByName(value: Nullable<| Entities | string>,) {
        return value != null && (value instanceof Entities || this.everyEnglishNames.includes(value as never))
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Entities>,): Entities {
        return Entities.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Entities> {
        return Entities.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Entities> {
        yield* Entities.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}

//TODO remove this test variable when the entities will be complete
// @ts-ignore
(window.test ??= {}).Entities = Entities
