import type {ClassWithEditorVoiceSound}                                                                                                                                                                  from '../editorVoice/ClassWithEditorVoiceSound';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference';
import type {ClearConditionImage}                                                                                                                                                                        from './images/clearCondition/ClearConditionImage';
import type {EditorImage}                                                                                                                                                                                from './images/editor/EditorImage';
import type {EditorVoiceSound}                                                                                                                                                                           from '../editorVoice/EditorVoiceSound';
import type {Entity}                                                                                                                                                                                     from './Entity';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Entities.types';
import type {InGameImage}                                                                                                                                                                                from './images/inGame/InGameImage';
import type {PossibleImageReceivedOnFactory as PossibleClearConditionImage}                                                                                                                              from './images/clearCondition/ClearConditionImage.types';
import type {PossibleImageReceivedOnFactory as PossibleEditorImage, SimpleImageName_GroundOrSlope}                                                                                                       from './images/editor/EditorImage.types';
import type {PossibleImageReceivedOnFactory as PossibleUnusedImage}                                                                                                                                      from './images/unused/UnusedImage.types';
import type {PossibleImageReceivedOnFactory as PossibleInGameImage}                                                                                                                                      from './images/inGame/InGameImage.types';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {UniqueImage}                                                                                                                                                                                from './images/unique/UniqueImage';
import type {UnusedImages}                                                                                                                                                                               from './images/unused/UnusedImage';

import {ClearConditionImageBuilder}     from './images/clearCondition/ClearConditionImage.builder';
import {ClearConditionImageFactory}     from './images/clearCondition/ClearConditionImage.factory';
import {EditorImageBuilder}             from './images/editor/EditorImage.builder';
import {EditorImageFactory}             from './images/editor/EditorImage.factory';
import {EditorVoices}                   from '../editorVoice/EditorVoices';
import {EmptyEditorVoiceSound}          from '../editorVoice/EmptyEditorVoiceSound';
import {Enum}                           from '../../util/enum/Enum';
import {GameStyles}                     from '../gameStyle/GameStyles';
import {InGameImage_SMM1Builder}        from './images/inGame/InGameImage_SMM1.builder';
import {InGameImageFactory}             from './images/inGame/InGameImage.factory';
import {Import}                         from '../../util/DynamicImporter';
import {Themes}                         from '../theme/Themes';
import {Times}                          from '../time/Times';
import {UniqueImageBuilder}             from './images/unique/UniqueImage.builder';
import {UnusedImage_BigMushroomBuilder} from './images/unused/UnusedImage_BigMushroom.builder';
import {UnusedImage_RegularBuilder}     from './images/unused/UnusedImage_Regular.builder';
import {UnusedImageFactory}             from './images/unused/UnusedImage.factory';
import {StringContainer}                from '../../util/StringContainer';

//region -------------------- Utility methods (applicable only to Entities) --------------------

function __createGroundEditorImage(simpleImageName: SimpleImageName_GroundOrSlope,): EditorImageBuilder {
    return new EditorImageBuilder(simpleImageName,)
        .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
        .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.AIRSHIP,)
        .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
        .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW, Themes.AIRSHIP, Themes.CASTLE,)
        .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
        .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER, Themes.SNOW,)
        .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
        .setNightTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SNOW, Themes.AIRSHIP,)
        .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,);
}

/**
 * Set the {@link Themes.GROUND ground theme} on every {@link GameStyles game style} exclusing {@link GameStyles.SUPER_MARIO_3D_WORLD SM3DW}
 *
 * @param builder The builder to apply the changes
 */
function __setOnGround(builder: UniqueImageBuilder,): UniqueImageBuilder {
    return builder
        .setOnSMBAnd(Themes.GROUND,)
        .setOnSMB3And(Themes.GROUND,)
        .setOnSMWAnd(Themes.GROUND,)
        .setOnNSMBUAnd(Themes.GROUND,);
}

//endregion -------------------- Utility methods (applicable only to Entities) --------------------

/**
 * @recursiveReferenceVia {@link EntityBuilder} → {@link EntityLoader}
 * @recursiveReference {@link EntityLoader}, {@link EditorVoices}
 * @classWithDynamicImport {@link EntityLoader}
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity>,
        ClassWithEditorVoiceSound {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new class Entities_Ground extends Entities {

        protected override get _createEditorImage() {
            return __createGroundEditorImage('Ground',);
        }

    }('Ground',);
    public static readonly START_GROUND =                                  new Entities('Start Ground',);
    public static readonly GOAL_GROUND =                                   new Entities('Goal Ground',);

    public static readonly STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

        protected override get _createEditorImage() {
            return __createGroundEditorImage('slope_l45',);
        }

    }('Steep Slope',);
    public static readonly GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

        protected override get _createEditorImage() {
            return __createGroundEditorImage('slope_l30',);
        }

    }('Gentle Slope',);

    public static readonly START_BLOCK =                                   new Entities('Start Block',);
    public static readonly OCCLUDE_BLOCK =                                 new Entities('Occlude Block',);

    public static readonly WATER =                                         new Entities('Water',);
    public static readonly LAVA =                                          new Entities('Lava',);
    public static readonly POISON =                                        new Entities('Poison',);

    public static readonly PIPE =                                          new class Entities_Pipe extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Dokan',)
                .setAmount(4)
                .setAllGameStyles()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Pipe',);
    public static readonly CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('ToumeiDokan',)
                .setOnlySM3DW();
        }

    }('Clear Pipe',);

    public static readonly SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Toge',)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setNotSM3DW();
        }

    }('Spike Trap',);
    public static readonly JELECTRO =                                      new class Entities_Jelectro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMB3AndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Toge',)
                .hasNoDefaultImage()
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,);
        }

    }('Jelectro',);
    public static readonly SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Toge',)
                .hasNoDefaultImage()
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,);
        }

    }('Sea Urchin',);
    public static readonly SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TogeBlock',)
                .setAmount(3)
                .setOnlySM3DW();
        }

    }('Spike Block',);

    public static readonly MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('GroundMushroom',)
                .setAmount(3)
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER, Themes.SNOW, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER, Themes.SNOW, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER, Themes.SNOW, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.SNOW,)
                .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERWATER, Themes.SNOW, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SNOW,);
        }

    }('Mushroom Platform',);
    public static readonly SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('GroundBox',)
                .setAmount(3)
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW, Themes.AIRSHIP,)
                .setImage(GameStyles.SUPER_MARIO_BROS, Themes.AIRSHIP, Times.NIGHT, 2,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERGROUND, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.SNOW,)
                .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setDefaultAmount(GameStyles.SUPER_MARIO_3D_WORLD, 1,);
        }

    }('Semisolid Platform',);
    public static readonly BRIDGE =                                        new class Entities_Bridge extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(Themes.GROUND, Themes.SNOW, Themes.GHOST_HOUSE, Themes.AIRSHIP,)
                .setOnSMB3And(Themes.GROUND, Themes.SNOW,)
                .setOnSMWAnd(Themes.GROUND, Themes.DESERT, Themes.SNOW,)
                .setOnNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bridge',)
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.GROUND, Themes.DESERT, Themes.SNOW, Themes.SKY, Themes.FOREST,)
                .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.SNOW,)
                .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.SNOW, Themes.FOREST, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.SNOW,);
        }

    }('Bridge',);

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(Themes.GROUND, Themes.UNDERGROUND, Themes.SNOW, Themes.CASTLE,)
                .setOnSMB3And(Themes.GROUND, Themes.SNOW,)
                .setOnNSMBUAnd(Themes.GROUND,)
                .setOnSM3DWAnd(Themes.GROUND,)
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('RengaBlock',)
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.SNOW, Themes.GHOST_HOUSE, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Brick Block',);
    public static readonly CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAnd(Themes.UNDERGROUND,)
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('RengaBlock',)
                .hasNoDefaultImage()
                .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.FOREST,);
        }

    }('Cristal Block',);
    public static readonly ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('RengaBlock',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Rotating Block',);

    public static readonly HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder
                .setOnSMBAnd(Themes.GROUND, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.SNOW, Themes.AIRSHIP,)//TODO remove underground night image
                .setOnSMB3And(Themes.GROUND, Themes.UNDERGROUND, Themes.SNOW,)
                .setOnSMWAnd(Themes.GROUND, Themes.GHOST_HOUSE,)
                .setOnNSMBUAnd(Themes.GROUND, Themes.UNDERGROUND,)
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('HardBlock',)
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.SNOW, Themes.GHOST_HOUSE, Themes.AIRSHIP, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.GHOST_HOUSE, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.SUPER_MARIO_WORLD, Themes.AIRSHIP,)
                .setTheme(GameStyles.NEW_SUPER_MARIO_BROS_U, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.SNOW, Themes.SKY, Themes.FOREST, Themes.CASTLE,)
                .setNotSM3DW();
        }

    }('Hard Block',);
    public static readonly ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('HardBlock',)
                .setOnlySM3DW();
        }

    }('Rock Block',);

    public static readonly QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('HatenaBlock',)
                .setAllGameStyles()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('? Block',);
    public static readonly HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'ClearBlock';
        }

    }('Hidden Block',);
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',);

    public static readonly EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BikkuriBlock',)
                .setOnlySM3DW();
        }

    }('! Block',);

    public static readonly NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('OnpuBlock', 1,)
                .setNotSM3DW()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Note Block',);
    public static readonly MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('OnpuBlock', 2,)
                .setNotSM3DW()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Music Block',);

    public static readonly DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('ChikuwaBlock',)
                .setAllGameStyles()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Donut Block',);

    public static readonly CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KumoBlock',)
                .setAllGameStyles()
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,);
        }

    }('Cloud Block',);

    public static readonly ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'OnOffSwitch';
        }

    }('ON/OFF Switch',);
    public static readonly DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('OnOffBlock',)
                .setAmount(2)
                .setAllGameStyles();
        }

    }('Dotted-Line Block',);

    public static readonly P_BLOCK =                                       new class Entities_PBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PBlock',)
                .setAmount(2)
                .setAllGameStyles();
        }

    }('P Block',);

    public static readonly BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Chikachika',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Blinking Block',);

    public static readonly ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('IceBlock',)
                .setAllGameStyles()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Ice Block',);
    public static readonly ICICLE =                                        new class Entities_Icicle extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Icicle',)
                .setAmount(2)
                .setAllGameStyles();
        }

    }('Icicle',);

    public static readonly COIN =                                          new class Entities_Coin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Coin', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Coin';
        }

    }('Coin',);
    public static readonly FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Coin', 2,)
                .setNotSM3DW()
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
        }

    }('Frozen Coin',);
    public static readonly TEN_COIN =                                      new class Entities_TenCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('10Coin', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('10Coin', 1,)
                .setAllGameStyles();
        }

    }('10-Coin',);
    public static readonly THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('10Coin', 2,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('10Coin', 2,)
                .setAllGameStyles();
        }

    }('30-Coin',);
    public static readonly FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('10Coin', 3,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('10Coin', 3,)
                .setAllGameStyles();
        }

    }('50-Coin',);
    public static readonly PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'PinkCoin';
        }

    }('Pink Coin',);

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperKinoko', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperKinoko', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Super Mushroom',);

    public static readonly FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('FireFlower', 1,)
                .setAsPowerUp()
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('FireFlower', 1,)
                .setAllGameStyles();
        }

    }('Fire Flower',);
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',);

    public static readonly SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('FireFlower', 2,)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('FireFlower', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS,);
        }

    }('Superball Flower',);
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',);

    public static readonly MYSTERY_MUSHROOM =                              new class Entities_MysteryMushroom extends Entities {

        protected override get _createInGameImage() {
            return new InGameImage_SMM1Builder('Kinoko2',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Mystery Mushroom',);
    public static readonly WEIRD_MUSHROOM =                                new class Entities_WeirdMushroom extends Entities {

        protected override get _createInGameImage() {
            return new InGameImage_SMM1Builder('KinokoFunny',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Weird Mushroom',);

    public static readonly MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperKinoko', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperKinoko', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Master Sword',);
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',);
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',);

    public static readonly BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('DekaKinoko',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_BROS,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('DekaKinoko',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Big Mushroom',);
    public static readonly BIG_MUSHROOM_CLASSIC =                          new class Entities_BigMushroom_Classic extends Entities {

        protected override get _createInGameImage() {
            return new InGameImage_SMM1Builder('MegaKinoko')
                .setAllGameStyles();
        }

    }('Big Mushroom (classic)',);
    public static readonly BIG_MUSHROOM_MODERN =                           new class Entities_BigMushroom_Modern extends Entities {

        protected override get _createInGameImage() {
            return new InGameImage_SMM1Builder('MegaKinoko2')
                .setAllGameStyles();
        }

    }('Big Mushroom (modern)',);

    public static readonly SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMBAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KinokoUSA')
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KinokoUSA')
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('SMB2 Mushroom',);

    public static readonly SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMB3AndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperKonoha',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_BROS_3,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperKonoha',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS_3);
        }

    }('Super Leaf',);

    public static readonly FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMB3AndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('FrogSuit',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_BROS_3,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('FrogSuit',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS_3);
        }

    }('Frog Suit',);

    public static readonly CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MantleWing',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('MantleWing',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD);
        }

    }('Cape Feather',);

    public static readonly POWER_BALLOON =                                 new class Entities_PowerBalloon extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PowerBalloon',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('PowerBalloon',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD);
        }

    }('Power Balloon',);

    public static readonly PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PropellerKinoko',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('PropellerKinoko',)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U);
        }

    }('Propeller Mushroom',);

    public static readonly SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperDonguri',)
                .setAsPowerUp()
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperDonguri',)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U);
        }

    }('Super Acorn',);

    public static readonly SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperBell',)
                .setAsPowerUp()
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperBell',)
                .setOnlySM3DW();
        }

    }('Super Bell',);

    public static readonly SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SuperHammer',)
                .setAsPowerUp()
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SuperHammer',)
                .setOnlySM3DW();
        }

    }('Super Hammer',);
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',);

    public static readonly BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoomerangFlower',)
                .setAsPowerUp()
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoomerangFlower',)
                .setOnlySM3DW();
        }

    }('Boomerang Flower',);
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',);

    public static readonly CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoxKiller',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoxKiller',)
                .setOnlySM3DW();
        }

    }('Cannon Box',);
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',);

    public static readonly PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoxPropeller',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoxPropeller',)
                .setOnlySM3DW();
        }

    }('Propeller Box',);

    public static readonly GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoxKuribo',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoxKuribo',)
                .setOnlySM3DW();
        }

    }('Goomba Mask',);

    public static readonly BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoxKillerPlayer',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoxKillerPlayer',)
                .setOnlySM3DW();
        }

    }('Bullet Bill Mask',);

    public static readonly RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BoxPow',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BoxPow',)
                .setOnlySM3DW();
        }

    }('Red POW Box',);

    public static readonly SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'SuperStar';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'SuperStar';
        }

    }('Super Star',);

    public static readonly ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return '1upKinoko';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return '1upKinoko';
        }

    }('1-Up Mushroom',);
    public static readonly ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('DokuKinoko',)
                .setNotSM3DW();
        }

    }('Rotten Mushroom',);

    public static readonly SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KutsuKuribo', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
        }

    }('Shoe Goomba',);
    public static readonly SHOE =                                          new class Entities_Shoe extends Entities {

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KutsuKuribo',)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
        }

    }('Shoe',);
    public static readonly STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KutsuKuribo', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
        }

    }('Stiletto Goomba',);
    public static readonly STILETTO =                                      new Entities('Stiletto',);
    public static readonly YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('YosshiEgg',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('YosshiEgg',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Yoshi\'s Egg',);
    public static readonly YOSHI =                                         new Entities('Yoshi',);
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',);
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',);
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',);
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new Entities('Wrench thrown by a Yoshi',);
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',);
    public static readonly RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('YosshiEggRed',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Red Yoshi\'s Egg',);
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',);
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',);

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class Entities_Goomba extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Kuribo', 1,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Kuribo', 1,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD);
        }

        protected override get _createUnusedImage(): PossibleUnusedImage {
            return [
                null,
                new UnusedImage_BigMushroomBuilder('Kuribo D',)
                    .setImage('damage', 1,)
                    .setImage('swim', 2,)
                    .setImage('walk', 2,)
                    .setImage('kutsu', 1,),
            ];
        }

    }('Goomba',);
    public static readonly GALOOMBA =                                      new class Entities_Galoomba extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Kuribo', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Kuribo', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Galoomba',);
    public static readonly GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Kuribo', 2,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Kuribo', 2,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,);
        }

    }('Goombrat',);
    public static readonly GOOMBUD =                                       new class Entities_Goombud extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Kuribo', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Kuribo', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Goombud',);

    public static readonly GREEN_KOOPA_TROOPA =                            new class Entities_GreenKoopaTroopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Nokonoko',1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Nokonoko';
        }

    }('Green Koopa Troopa',);
    public static readonly RED_KOOPA_TROOPA =                              new class Entities_RedKoopaTroopa extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Nokonoko',2,)
                .setAllGameStyles();
        }

    }('Red Koopa Troopa',);
    public static readonly GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',);
    public static readonly RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',);
    public static readonly GREEN_KOOPA_SHELL =                             new class Entities_GreenKoopaShell extends Entities {

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('NokonokoShell',)
                .setNotGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Green Koopa Shell',);
    public static readonly RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',);

    public static readonly DRY_BONES =                                     new class Entities_DryBones extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Karon', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Karon', 1,)
                .setAllGameStyles();
        }

    }('Dry Bones',);
    public static readonly PARABONES =                                     new Entities('Parabones',);
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',);
    public static readonly DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Karon', 2,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Karon', 2,)
                .setNotSM3DW();
        }

    }('Dry Bones Shell',);

    public static readonly BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Met', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Met', 1,)
                .setNotSM3DW();
        }

    }('Buzzy Beetle',);
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',);
    public static readonly BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Met', 2,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Met', 2,)
                .setNotSM3DW();
        }

    }('Buzzy Shell',);

    public static readonly SPINY =                                         new class Entities_Spiny extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Togezo', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Togezo', 1,)
                .setAllGameStyles();
        }

    }('Spiny',);
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',);
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',);
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',);
    public static readonly SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Togezo', 2,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Togezo', 2,)
                .setNotSM3DW();
        }

    }('Spiny Shell',);

    public static readonly SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('TogeMet',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('TogeMet')
                .setNotSM3DW();
        }

    }('Spike Top',);
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',);
    public static readonly FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('TogeMet', 2,)
                .setNotSM3DW();
        }

    }('Fast Spike Top',);
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',);

    public static readonly SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pyonchu', 1,)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pyonchu',)
                .setOnlySM3DW();
        }

    }('Skipsqueak',);
    public static readonly SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pyonchu', 2,)
                .setOnlySM3DW();
        }

    }('Spiny Skipsqueak',);

    public static readonly ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Arihei', 1,)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Arihei',)
                .setOnlySM3DW();
        }

    }('Ant Trooper',);
    public static readonly HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Arihei', 2,)
                .setOnlySM3DW();
        }

    }('Horned Ant Trooper',);

    public static readonly STINGBY =                                       new class Entities_Stingby extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Hacchin',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Hacchin',)
                .setOnlySM3DW();
        }

    }('Stingby',);

    public static readonly CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pukupuku',)
                .setAmount(2)
                .setAllGameStyles()
                .setImage(GameStyles.SUPER_MARIO_WORLD, null, null, 2,)
                .setImage(GameStyles.NEW_SUPER_MARIO_BROS_U, null, null, 2,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Cheep Cheep',);
    public static readonly BLURPS =                                        new class Entities_Blurps extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pukupuku', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Blurps',);
    public static readonly DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pukupuku', 1,)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Deep Cheep',);
    public static readonly FISH_BONE =                                     new class Entities_FishBone extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'FishBone';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'FishBone';
        }

    }('Fish Bone',);

    public static readonly BLOOPER =                                       new class Entities_Blooper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Gesso', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Gesso';
        }

    }('Blooper',);
    public static readonly BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Gesso', 2,)
                .setNotSM3DW();
        }

    }('Blooper Nanny',);
    public static readonly BABY_BLOOPER =                                  new Entities('Baby Blooper',);

    public static readonly PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Fugumannen',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Fugumannen',)
                .setOnlySM3DW();
        }

    }('Porcupuffer',);

    public static readonly WIGGLER =                                       new class Entities_Wiggler extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Hanachan', 1,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Hanachan',)
                .setNotSM3DW();
        }

    }('Wiggler',);
    public static readonly ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Hanachan', 2,)
                .setNotSM3DW();
        }

    }('Angry Wiggler',);

    public static readonly PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pakkun', 1,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pakkun', 1,)
                .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Piranha Plant',);
    public static readonly JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySMWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pakkun', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pakkun', 1,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Jumping Piranha Plant',);
    public static readonly FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Pakkun', 2,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Pakkun', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
        }

    }('Fire Piranha Plant',);
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',);
    public static readonly MUNCHER =                                       new class Entities_Muncher extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BlackPakkun',)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BlackPakkun',)
                .setNotSM3DW();
        }

    }('Muncher',);
    public static readonly PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PackunPipe',)
                .setAmount(2)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('PackunPipe',)
                .setOnlySM3DW();
        }

    }('Piranha Creeper',);

    public static readonly CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder);
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Wanwan', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Chain Chomp',);
    public static readonly UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Wanwan', 2,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Wanwan')
                .setNotSM3DW();
        }

    }('Unchained Chomp',);
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',);

    public static readonly SPIKE =                                         new class Entities_Spike extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Gabon', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Gabon';
        }

    }('Spike',);
    public static readonly SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder);
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Gabon', 2,)
                .setAllGameStyles()
                .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.GHOST_HOUSE, Themes.CASTLE,)
                .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.GHOST_HOUSE, Themes.CASTLE,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.GROUND, Themes.DESERT, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,)
                .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND, Themes.DESERT, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,);
        }

    }('Spike Ball',);
    public static readonly SNOWBALL =                                      new class Entities_Snowball extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Gabon', 2,)
                .setAllGameStyles()
                .setAsSnow();
        }

    }('Snowball',);

    public static readonly LAKITU =                                        new class Entities_Lakitu extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Jugem', 1,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Jugem', 1,)
                .setNotSM3DW();
        }

    }('Lakitu',);
    public static readonly LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Jugem', 2,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Jugem', 2,)
                .setNotSM3DW();
        }

    }('Lakitu\'s Cloud',);

    public static readonly BOO =                                           new class Entities_Boo extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Teresa', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Teresa';
        }

    }('Boo',);
    public static readonly STRETCH =                                       new class Entities_Stretch extends Entities {

        protected override get _createUnusedImage(): PossibleUnusedImage {
            const waitImages = ['out', 1,] as const;
            const outImages = ['wait', 4,] as const;
            return [
                new UnusedImage_RegularBuilder('Necchi',)
                    .setImage(GameStyles.SUPER_MARIO_BROS, ...waitImages,)
                    .setImage(GameStyles.SUPER_MARIO_BROS, ...outImages,)
                    .setImage(GameStyles.SUPER_MARIO_BROS_3, ...waitImages,)
                    .setImage(GameStyles.SUPER_MARIO_BROS_3, ...outImages,)
                    .setImage(GameStyles.SUPER_MARIO_WORLD, ...waitImages,)
                    .setImage(GameStyles.SUPER_MARIO_WORLD, ...outImages,),
                new UnusedImage_BigMushroomBuilder('Necchi',)
                    .setImage('wait', [1,],)
                    .setImage('wait', [2,],)
                    .setImage('out', [4,],),
            ];
        }

    }('Stretch',);
    public static readonly BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Teresa', 2,)
                .setNotSM3DW();
        }

    }('Boo Buddies',);
    public static readonly PEEPA =                                         new class Entities_Peepa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Teresa', 2,)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Teresa', 2,)
                .setOnlySM3DW();
        }

    }('Peepa',);

    public static readonly BOB_OMB =                                       new class Entities_BobOmb extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bombhei', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bombhei';
        }

    }('Bob-omb',);
    public static readonly LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bombhei', 2,)
                .setAllGameStyles();
        }

    }('Lit Bob-omb',);

    public static readonly POKEY =                                         new class Entities_Pokey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Sambo';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Sambo';
        }

    }('Pokey',);
    public static readonly SNOW_POKEY =                                    new class Entities_SnowPokey extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Sambo', 1,)
                .setAllGameStyles()
                .setAsSnow();
        }

    }('Snow Pokey',);

    public static readonly THWOMP =                                        new class Entities_Thwomp extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Dossun';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Dossun';
        }

    }('Thwomp',);

    public static readonly MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('ChoroPoo',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('ChoroPoo',)
                .setNotSM3DW();
        }

    }('Monty Mole',);
    public static readonly ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Poo',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Poo',)
                .setNotSM3DW();
        }

    }('Rocky Wrench',);
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',);

    public static readonly MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Kameck';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Kameck';
        }

    }('Magikoopa',);
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',);

    public static readonly HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bros', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bros';
        }

    }('Hammer Bro',);
    public static readonly SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MegaBros', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'MegaBros';
        }

    }('Sledge Bro',);
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',);
    public static readonly FIRE_BRO =                                      new class Entities_FireBro extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bros', 2,)
                .setOnlySM3DW();
        }

    }('Fire Bro',);
    public static readonly HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MegaBros', 2,)
                .setOnlySM3DW();
        }

    }('Heavy Fire Bro',);
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',);

    public static readonly LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Bubble';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bubble';
        }

    }('Lava Bubble',);

    public static readonly MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaMecha', 1,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KoopaMecha',)
                .setNotSM3DW();
        }

    }('Mechakoopa',);
    public static readonly BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaMecha', 2,)
                .setNotSM3DW();
        }

    }('Blasta Mechakoopa',);
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',);
    public static readonly ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaMecha', 3,)
                .setNotSM3DW();
        }

    }('Zappa Mechakoopa',);
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',);

    public static readonly CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MagmaFish',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('MagmaFish',)
                .setOnlySM3DW();
        }

    }('Charvaargh',);

    public static readonly BULLY =                                         new class Entities_Bully extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Donketsu',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Donketsu',)
                .setOnlySM3DW();
        }

    }('Bully',);

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder);
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KillerHoudai', 1,)
                .setAllGameStyles()
                .setAsDifferentInSMBAndSMB3();
        }

    }('Bill Blaster',);
    public static readonly BULLET_BILL =                                   new class Entities_BulletBill extends Entities {

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Killer';
        }

    }('Bullet Bill',);
    public static readonly BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KillerHoudai', 2,)
                .setAllGameStyles();
        }

    }('Bull\'s-Eye Blaster',);
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',);
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',);

    public static readonly BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder.forceEditor());
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MagnumKiller', 1,)
                .setAllGameStyles()
                .setAsDifferentInSMBAndSMB3();
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'MagnumKiller';
        }

    }('Banzai Bill',);
    public static readonly BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MagnumKiller', 2,)
                .setNotSM3DW();
        }

    }('Bull\'s-Eye Banzai',);
    public static readonly CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('MagnumKiller', 2,)
                .setOnlySM3DW();
        }

    }('Cat Banzai Bill',);

    public static readonly CANNON =                                        new class Entities_Cannon extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder);
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Houdai', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Cannon',);
    public static readonly CANNONBALL =                                    new class Entities_Cannonball extends Entities {

        protected override get _createUnusedImage(): PossibleUnusedImage {
            return [
                null,
                new UnusedImage_BigMushroomBuilder('SenkanHoudai D',)
                    .setImage('senkan_houdai_ball',),
            ];
        }

    }('Cannonball',);
    public static readonly RED_CANNON =                                    new class Entities_RedCannon extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Houdai', 2,)
                .setNotSM3DW();
        }

    }('Red Cannon',);
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',);

    public static readonly BURNER =                                        new class Entities_Burner extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Burner',)
                .setAmount(2)
                .setNotSM3DW();
        }

    }('Burner',);

    public static readonly FIRE_BAR =                                      new class Entities_FireBar extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('FireBar',)
                .setNotSM3DW();
        }

    }('Fire Bar',);

    public static readonly SKEWER =                                        new class Entities_Skewer extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return __setOnGround(builder);
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('TogeKonbo',)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Skewer',);

    public static readonly KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaClown', 1,)
                .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KoopaClown',)
                .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
        }

        protected override get _createUnusedImage(): PossibleUnusedImage {
            const images = [4, 5, 6, 7,] as const;
            return [
                new UnusedImage_RegularBuilder('KoopaClown',)
                    .setImage(GameStyles.SUPER_MARIO_WORLD, 'weep', images,),
                new UnusedImage_BigMushroomBuilder('KoopaClown',)
                    .setImage('wait', images,)
                    .setImage('anger', images,)
                    .setImage('blink', images,)
                    .setImage('weep', images,),
            ];
        }

    }('Koopa Clown Car',);
    public static readonly JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlyNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaClown', 1,)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KoopaClown',)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Junior Clown Car',);
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaClown', 2,)
                .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
        }

    }('Fire Koopa Clown Car',);
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlyNSMBUAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaClown', 2,)
                .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
        }

    }('Fire Junior Clown Car',);
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',);

    public static readonly KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaCar',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KoopaCar',)
                .setOnlySM3DW();
        }

    }('Koopa Troopa Car',);
    public static readonly CAR =                                           new Entities('Car',);

    public static readonly GRINDER =                                       new class Entities_Grinder extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Saw',)
                .setNotSM3DW();
        }

    }('Grinder',);

    public static readonly ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SunMoon', 1,)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('SunMoon',)
                .setNotSM3DW();
        }

    }('Angry Sun',);
    public static readonly MOON =                                          new class Entities_Moon extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SunMoon', 2,)
                .setNotSM3DW();
        }

    }('Moon',);

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class Entities_Bowser extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Koopa',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Koopa',)
                .setNotSM3DW();
        }

        protected override get _createUnusedImage(): PossibleUnusedImage {
            return [
                null,
                new UnusedImage_BigMushroomBuilder('Koopa',)
                    .setImage('fire', [1,],),
            ];
        }

    }('Bowser',);
    public static readonly MEOWSER =                                       new class Entities_Meowser extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Koopa',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Koopa',)
                .setOnlySM3DW();
        }

    }('Meowser',);
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',);
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',);

    public static readonly BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('KoopaJr',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('KoopaJr',)
                .setNotSM3DW();
        }

        protected override get _createUnusedImage(): PossibleUnusedImage {
            return [
                null,
                new UnusedImage_BigMushroomBuilder('KoopaJr',)
                    .setImage('fire', [1,],),
            ];
        }

    }('Bowser Jr.',);
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',);

    public static readonly BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bunbun', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Bunbun', 1,)
                .setAllGameStyles();
        }

    }('Boom Boom',);
    public static readonly POM_POM =                                       new class Entities_PomPom extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Bunbun', 2,)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Bunbun', 2,)
                .setOnlySM3DW();
        }

    }('Pom Pom',);
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',);
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',);

    public static readonly LARRY =                                         new class Entities_Larry extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Larry',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Larry',)
                .setNotSM3DW();
        }

    }('Larry',);
    public static readonly LARRY_WAND =                                    new Entities('Larry\'s Wand',);
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',);

    public static readonly IGGY =                                          new class Entities_Iggy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Iggy',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Iggy',)
                .setNotSM3DW();
        }

    }('Iggy',);
    public static readonly IGGY_WAND =                                     new Entities('Iggy\'s Wand',);
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',);

    public static readonly WENDY =                                         new class Entities_Wendy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Wendy',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Wendy',)
                .setNotSM3DW();
        }

    }('Wendy',);
    public static readonly WENDY_WAND =                                    new Entities('Wendy\'s Wand',);
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',);

    public static readonly LEMMY =                                         new class Entities_Lemmy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Lemmy',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Lemmy',)
                .setNotSM3DW();
        }

    }('Lemmy',);
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',);
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',);

    public static readonly ROY =                                           new class Entities_Roy extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Roy',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Roy',)
                .setNotSM3DW();
        }

    }('Roy',);
    public static readonly ROY_WAND =                                      new Entities('Roy\'s Wand',);
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',);

    public static readonly MORTON =                                        new class Entities_Morton extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Morton',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Morton',)
                .setNotSM3DW();
        }

    }('Morton',);
    public static readonly MORTON_WAND =                                   new Entities('Morton\'s Wand',);
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',);
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',);

    public static readonly LUDWIG =                                        new class Entities_Ludwig extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Ludwig',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Ludwig',)
                .setNotSM3DW();
        }

    }('Ludwig',);
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',);
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',);

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new class Entities_Bumper extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Marumaru',)
                .setNotSM3DW();
        }

    }('Bumper',);

    public static readonly SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BurankoCrane',)
                .setNotSM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BurankoCrane',)
                .setNotSM3DW();
        }

    }('Swinging Claw',);

    public static readonly TWISTER =                                       new class Entities_Twister extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Tornado';
        }

    }('Twister',);

    public static readonly ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Hanatari',)
                .setNotSM3DW();
        }

    }('One-Way Wall',);

    public static readonly TRACK =                                         new class Entities_Track extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Rail',)
                .setNotSM3DW();
        }

    }('Track',);
    public static readonly TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('OrbitBlock',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Track Block',);

    public static readonly VINE =                                          new class Entities_Vine extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('TsutaBlock',)
                .setNotSM3DW();
        }

    }('Vine',);
    public static readonly TREE =                                          new class Entities_Tree extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAnd(Themes.GROUND, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW,)
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BellTree',)
                .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.FOREST,);
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('BellTree',)
                .setOnlySM3DW();
        }

    }('Tree',);

    public static readonly ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Yajirushi';
        }

    }('Arrow Sign',);

    public static readonly CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'MiddleFlag';
        }

    }('Checkpoint Flag',);
    public static readonly GOAL_POLE =                                     new Entities('Goal Pole',);
    public static readonly GOAL_WITH_CARDS =                               new Entities('Cards Roulette',);
    public static readonly GIANT_GATE =                                    new Entities('Giant Gate',);

    public static readonly DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('DashBlock',)
                .setOnlySM3DW();
        }

    }('Dash Block',);

    public static readonly SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SnakeBlock', 1,)
                .setAllGameStyles();
        }

    }('Snake Block',);
    public static readonly FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('SnakeBlock', 2,)
                .setAllGameStyles();
        }

    }('Fast Snake Block',);

    public static readonly CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BeltConveyor', 1,)
                .setAllGameStyles();
        }

    }('Conveyor Belt',);
    public static readonly FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('BeltConveyor', 2,)
                .setAllGameStyles();
        }

    }('Fast Conveyor Belt',);

    public static readonly MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Trampoline',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Mushroom Trampoline',);
    public static readonly ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('OnOffTrampoline',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('ON/OFF Trampoline',);

    public static readonly LIFT =                                          new class Entities_List extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Lift', 1,)
                .setNotSM3DW();
        }

    }('Lift',);
    public static readonly FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Lift', 2,)
                .setNotSM3DW();
        }

    }('Flimsy Lift',);
    public static readonly CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Lift', 1,)
                .setOnlySM3DW();
        }

    }('Cloud Lift',);

    public static readonly SEESAW =                                        new class Entities_Seesaw extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Seesaw',)
                .setNotSM3DW();
        }

    }('Seesaw',);

    public static readonly LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('YouganLift', 1,)
                .setNotSM3DW();
        }

    }('Lava Lift',);
    public static readonly FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('YouganLift', 2,)
                .setNotSM3DW();
        }

    }('Fast Lava Lift',);

    public static readonly CRATE =                                         new class Entities_Crate extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('WoodBox',)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('WoodBox',)
                .setOnlySM3DW();
        }

    }('Crate',);

    public static readonly KEY =                                           new class Entities_Key extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Key', 1,)
                .setAllGameStyles();
        }

    }('Key',);
    public static readonly CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySMBAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Key', 2,)
                .setGameStyle(GameStyles.SUPER_MARIO_BROS);
        }

    }('Cursed Key',);
    public static readonly PHANTO =                                        new Entities('Phanto',);

    public static readonly TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('JumpStep',)
                .setAmount(2)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('JumpStep',)
                .setNotGameStyle(GameStyles.SUPER_MARIO_BROS,);
        }

    }('Trampoline',);
    public static readonly HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Hopper',)
                .setOnlySM3DW();
        }

    }('Hop-Chops',);

    public static readonly POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PowBlock', 1,)
                .setAllGameStyles();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('PowBlock', 1,)
                .setAllGameStyles();
        }

    }('POW Block',);
    public static readonly RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor().setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('PowBlock', 2,)
                .setOnlySM3DW();
        }

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('PowBlock', 2,)
                .setOnlySM3DW();
        }

    }('Red POW Block',);

    public static readonly P_SWITCH =                                      new class Entities_PSwitch extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.forceEditor();
        }

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'PSwitch';
        }

        protected override get _createClearConditionImage(): PossibleClearConditionImage {
            return 'PSwitch';
        }

        protected override get _createUnusedImage(): PossibleUnusedImage {
            return new UnusedImage_RegularBuilder('PSwitch',)
                .setImage(GameStyles.SUPER_MARIO_BROS, 'wait', [0, 1, 2,],)
                .setImage(GameStyles.NEW_SUPER_MARIO_BROS_U, 'down_switch_hatena_Alb', ['000', '004',],);
        }

    }('P Switch',);

    public static readonly STONE =                                         new class Entities_Stone extends Entities {

        protected override get _createClearConditionImage() {
            return new ClearConditionImageBuilder('Stone',)
                .setNotGameStyle(GameStyles.SUPER_MARIO_BROS,);
        }

    }('Stone',);

    public static readonly WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Door', 1,)
                .setAllGameStyles();
        }

    }('Warp Door',);
    public static readonly P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Door', 2,)
                .setAllGameStyles();
        }

    }('P Warp Door',);
    public static readonly KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

        protected override get _createEditorImage() {
            return new EditorImageBuilder('Door', 3,)
                .setAllGameStyles();
        }

    }('Key Door',);

    public static readonly WARP_BOX =                                      new class Entities_WarpBox extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('WarpBox', 1,)
                .setOnlySM3DW();
        }

    }('Warp Box',);
    public static readonly WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

        protected override _createUniqueImage(builder: UniqueImageBuilder,) {
            return builder.setToOnlySM3DWAndAllThemes();
        }

        protected override get _createEditorImage() {
            return new EditorImageBuilder('WarpBox', 2,)
                .setOnlySM3DW();
        }

    }('Warp Box (With Key)',);

    public static readonly WING =                                          new class Entities_Wing extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'Wing';
        }

    }('Wing',);
    public static readonly PARACHUTE =                                     new class Entities_Parachute extends Entities {

        protected override get _createEditorImage(): PossibleEditorImage {
            return 'parachute';
        }

    }('Parachute',);

    public static readonly TOAD =                                          new Entities('Toad',);
    public static readonly CAGED_TOADETTE =                                new Entities('Caged Toadette',);

    public static readonly BUBBLE =                                        new Entities('Bubble',);

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Entities;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>;

    #reference?: Entity;
    readonly #englishNameContainer;
    #uniqueImage?: UniqueImage;
    #uniqueImageBuilder?: UniqueImageBuilder;
    #editorImage?: EditorImage;
    #clearConditionImage?: ClearConditionImage;
    #inGameImage?: InGameImage;
    #unusedImages?: UnusedImages;
    #editorVoiceSound?: EditorVoiceSound;

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Entity> {
        return this.#REFERENCE_MAP ??= Import.EntityLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    //region -------------------- unique image --------------------

    private __createUniqueImage(): UniqueImageBuilder {
        const builder = this._createUniqueImage(this.__uniqueImageBuilder);
        const type = builder.referenceType;
        switch (type) {
            /* eslint-disable @typescript-eslint/no-unused-expressions*/
            case 'editor':
                this.editorImage;
                return builder;
            case 'clear condition':
                this.clearConditionImage;
                return builder;
            case 'while playing':
                this.inGameImage;
                return builder;
            case null:
                this.editorImage;
                this.clearConditionImage;
                this.inGameImage;
                return builder;
            /* eslint-enable @typescript-eslint/no-unused-expressions */
        }
    }
    protected _createUniqueImage(builder: UniqueImageBuilder,): UniqueImageBuilder {
        return builder;
    }

    private get __uniqueImageBuilder(): UniqueImageBuilder {
        return this.#uniqueImageBuilder ??= new UniqueImageBuilder();
    }

    public get uniqueImage(): UniqueImage {
        return this.#uniqueImage ??= this.__createUniqueImage().build();
    }

    //endregion -------------------- unique image --------------------
    //region -------------------- editor image --------------------

    /**
     * Get the editor image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected get _createEditorImage(): PossibleEditorImage {
        return null;
    }

    /**
     * Create the editor image from its {@link EditorImageFactory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createEditorImage() {
        const createValue = this._createEditorImage,
            value = EditorImageFactory.create(createValue);
        if (createValue != null)
            this.__uniqueImageBuilder.setEditor(value);
        return value;
    }

    public get editorImage(): EditorImage {
        return this.#editorImage ??= this.#createEditorImage();
    }

    //endregion -------------------- editor image --------------------

    public get editorVoiceSound(): EditorVoiceSound {
        return this.#editorVoiceSound ??= EditorVoices.getValue(this)?.editorVoiceSound ?? EmptyEditorVoiceSound.get;
    }

    //region -------------------- clear condition image --------------------

    /**
     * Get the clear condition image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected get _createClearConditionImage(): PossibleClearConditionImage {
        return null;
    }

    /**
     * Create the "clear condition" image from its {@link ClearConditionImageFactory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createClearConditionImage() {
        const createValue = this._createClearConditionImage,
            value = ClearConditionImageFactory.create(createValue);
        if (createValue != null)
            this.__uniqueImageBuilder.setClearCondition(value);
        return value;
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage ??= this.#createClearConditionImage();
    }

    //endregion -------------------- clear condition image --------------------
    //region -------------------- in game image --------------------

    /**
     * Get the "in game" image in a string form or in a builder form.
     *
     * @onlyCalledOnce
     */
    protected get _createInGameImage(): PossibleInGameImage {
        return null;
    }

    /**
     * Create the "in game" image from its {@link InGameImageFactory factory}.
     * It also store it in the {@link UniqueImageBuilder} if the value created is not null.
     *
     * @onlyCalledOnce
     */
    #createInGameImage() {
        const createValue = this._createInGameImage,
            value = InGameImageFactory.create(this._createInGameImage);
        if (createValue != null)
            this.__uniqueImageBuilder.setWhilePlaying(value);
        return value;
    }

    public get inGameImage(): InGameImage {
        return this.#inGameImage ??= this.#createInGameImage();
    }

    //endregion -------------------- in game image --------------------
    //region -------------------- unused image --------------------

    /**
     * Get the "unused" image in a string form or in a builder form.
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createUnusedImage(): PossibleUnusedImage {
        return null;
    }

    public get unusedImages(): UnusedImages {
        return this.#unusedImages ??= UnusedImageFactory.create(this._createUnusedImage);
    }

    //endregion -------------------- unused image --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Entities> {
        return Entities;
    }

    //region -------------------- Enum value methods --------------------

    public static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Entities = Entities, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Entities
    public static getValue(value: PossibleValue,): | Entities | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

//TODO remove this test variable when the entities will be complete
// @ts-ignore
(window.test ??= {}).Entities = Entities;
