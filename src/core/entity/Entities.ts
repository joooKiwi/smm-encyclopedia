import type {Builder}                                                                                                                                                                                    from '../../util/Builder';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference';
import type {ClearConditionImage}                                                                                                                                                                        from './images/clearCondition/ClearConditionImage';
import type {EditorImage}                                                                                                                                                                                from './images/editor/EditorImage';
import type {Entity}                                                                                                                                                                                     from './Entity';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Entities.types';
import type {InGameImage}                                                                                                                                                                                from './images/inGame/InGameImage';
import type {SimpleImageName as SimpleImageName_ClearCondition}                                                                                                                                          from './images/clearCondition/ClearConditionImage.types';
import type {SimpleImageName as SimpleImageName_Editor}                                                                                                                                                  from './images/editor/EditorImage.types';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';

import {ClearConditionImageBuilder} from './images/clearCondition/ClearConditionImage.builder';
import {EditorImageBuilder}         from './images/editor/EditorImage.builder';
import {EmptyClearConditionImage}   from './images/clearCondition/EmptyClearConditionImage';
import {EmptyEditorImage}           from './images/editor/EmptyEditorImage';
import {EmptyInGameImage}           from './images/inGame/EmptyInGameImage';
import {Enum}                       from '../../util/enum/Enum';
import {GameStyles}                 from '../gameStyle/GameStyles';
import {SMM1InGameImageBuilder}     from './images/inGame/SMM1InGameImage.builder';
import {StringContainer}            from '../../util/StringContainer';
import {Themes}                     from '../theme/Themes';
import {Times}                      from '../time/Times';

const {SUPER_MARIO_BROS: SMB, SUPER_MARIO_BROS_3: SMB3, SUPER_MARIO_WORLD: SMW, NEW_SUPER_MARIO_BROS_U: NSMBU, SUPER_MARIO_3D_WORLD: SM3DW} = GameStyles;
const {GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE} = Themes;

/**
 * @recursiveReference<{@link EntityLoader}>
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity> {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new class Entities_Ground extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Ground',)
                .setAsGround();
        }

    }('Ground',);
    public static readonly STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('slope_l30',)
                .setAsGround();
        }

    }('Steep Slope',);
    public static readonly GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('slope_l45',)
                .setAsGround();
        }

    }('Gentle Slope',);

    public static readonly PIPE =                                          new class Entities_Pipe extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Dokan',)
                .setAmount(4)
                .setAllGameStyles()
                .setNightTheme(SMB3, SNOW,);
        }

    }('Pipe',);
    public static readonly CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('ToumeiDokan',)
                .setOnlySM3DW();
        }

    }('Clear Pipe',);

    public static readonly SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Toge',)
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,)
                .setNotSM3DW();
        }

    }('Spike Trap',);
    public static readonly JELECTRO =                                      new class Entities_Jelectro extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Toge',)
                .hasNoDefaultImage()
                .setTheme(SMB3, UNDERWATER,);
        }

    }('Jelectro',);
    public static readonly SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Toge',)
                .hasNoDefaultImage()
                .setTheme(SMW, UNDERWATER,);
        }

    }('Sea Urchin',);
    public static readonly SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TogeBlock',)
                .setAmount(3)
                .setOnlySM3DW();
        }

    }('Spike Block',);

    public static readonly MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('GroundMushroom',)
                .setAmount(3)
                .setTheme(SMB, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SMB, SNOW,)
                .setTheme(SMB3, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SMB3, SNOW,)
                .setTheme(SMW, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(SMW, SNOW,)
                .setTheme(NSMBU, UNDERWATER, SNOW, AIRSHIP,)
                .setNightTheme(NSMBU, SNOW,);
        }

    }('Mushroom Platform',);
    public static readonly SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('GroundBox',)
                .setAmount(3)
                .setTheme(SMB, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SMB, SNOW, AIRSHIP,)
                .setImage(SMB, AIRSHIP, Times.NIGHT, 2,)
                .setTheme(SMB3, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SMB3, SNOW,)
                .setTheme(SMW, UNDERGROUND, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SMW, SNOW,)
                .setTheme(NSMBU, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(NSMBU, SNOW,)
                .setTheme(SM3DW, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setDefaultAmount(SM3DW, 1,);
        }

    }('Semisolid Platform',);
    public static readonly BRIDGE =                                        new class Entities_Bridge extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bridge',)
                .setTheme(SMB, SNOW, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SMB, SNOW,)
                .setTheme(SMB3, SNOW,)
                .setNightTheme(SMB3, SNOW,)
                .setTheme(SMW, GROUND, DESERT, SNOW, SKY, FOREST,)
                .setNightTheme(SMW, SNOW,)
                .setTheme(NSMBU, UNDERGROUND, UNDERWATER, SNOW, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(NSMBU, SNOW,);
        }

    }('Bridge',);

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('RengaBlock',)
                .setTheme(SMB, UNDERGROUND, SNOW, GHOST_HOUSE, CASTLE,)
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,)
                .setNotGameStyle(SMW,);
        }

    }('Brick Block',);
    public static readonly CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('RengaBlock',)
                .hasNoDefaultImage()
                .setTheme(SM3DW, UNDERGROUND, FOREST,);
        }

    }('Cristal Block',);
    public static readonly ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('RengaBlock',)
                .setGameStyle(SMW,);
        }

    }('Rotating Block',);

    public static readonly HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('HardBlock',)
                .setTheme(SMB, UNDERGROUND, UNDERWATER, SNOW, GHOST_HOUSE, AIRSHIP, CASTLE,)
                .setNightTheme(SMB, UNDERGROUND, SNOW,)
                .setTheme(SMB3, SNOW,)
                .setNightTheme(SMB3, SNOW,)
                .setTheme(SMW, GHOST_HOUSE, AIRSHIP,)
                .setNightTheme(SMW, AIRSHIP,)
                .setTheme(NSMBU, UNDERGROUND, UNDERWATER, SNOW, SKY, FOREST, CASTLE,)
                .setNotSM3DW();
        }

    }('Hard Block',);
    public static readonly ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('HardBlock',)
                .setOnlySM3DW();
        }

    }('Rock Block',);

    public static readonly QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('HatenaBlock',)
                .setAllGameStyles()
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,);
        }

    }('? Block',);
    public static readonly HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'ClearBlock';
        }

    }('Hidden Block',);
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',);

    public static readonly EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BikkuriBlock',)
                .setOnlySM3DW();
        }

    }('! Block',);

    public static readonly NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('OnpuBlock', 1,)
                .setNotSM3DW()
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,);
        }

    }('Note Block',);
    public static readonly MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('OnpuBlock', 2,)
                .setNotSM3DW()
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,);
        }

    }('Music Block',);

    public static readonly DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('ChikuwaBlock',)
                .setAllGameStyles()
                .setNightTheme(SMB, SNOW,)
                .setNightTheme(SMB3, SNOW,);
        }

    }('Donut Block',);

    public static readonly CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KumoBlock',)
                .setAllGameStyles()
                .setTheme(SMB, UNDERWATER,)
                .setNightTheme(SMB, SNOW,)
                .setTheme(SMB3, UNDERWATER,)
                .setNightTheme(SMB3, SNOW,)
                .setTheme(SMW, UNDERWATER,);
        }

    }('Cloud Block',);

    public static readonly ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'OnOffSwitch';
        }

    }('ON/OFF Switch',);
    public static readonly DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('OnOffBlock',)
                .setAmount(2);
        }

    }('Dotted-Line Block',);

    public static readonly P_BLOCK =                                       new class Entities_PBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('P Block',);

    public static readonly BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Chikachika',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Blinking Block',);

    public static readonly ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('IceBlock',)
                .setAllGameStyles()
                .setNightTheme(SMB3, SNOW,);
        }

    }('Ice Block',);
    public static readonly ICICLE =                                        new class Entities_Icicle extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Icicle',)
                .setAmount(2);
        }

    }('Icicle',);

    public static readonly COIN =                                          new class Entities_Coin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Coin', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Coin';
        }

    }('Coin',);
    public static readonly FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Frozen Coin',);
    public static readonly TEN_COIN =                                      new class Entities_TenCoin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('10Coin', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('10Coin', 1,)
                .setAllGameStyles();
        }

    }('10-Coin',);
    public static readonly THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('10Coin', 2,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('10Coin', 2,)
                .setAllGameStyles();
        }

    }('30-Coin',);
    public static readonly FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('10Coin', 3,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('10Coin', 3,)
                .setAllGameStyles();
        }

    }('50-Coin',);
    public static readonly PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'PinkCoin';
        }

    }('Pink Coin',);

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'SuperKinoko';
        }

    }('Super Mushroom',);

    public static readonly FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('FireFlower', 1,)
                .setAsPowerUp()
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('FireFlower', 1,)
                .setAllGameStyles();
        }

    }('Fire Flower',);
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',);

    public static readonly SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('FireFlower', 2,)
                .setAsPowerUp()
                .setGameStyle(SMB);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('FireFlower', 2,)
                .setGameStyle(SMB,);
        }

    }('Superball Flower',);
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',);

    public static readonly MYSTERY_MUSHROOM =                             new class Entities_MysteryMushroom extends Entities {

        protected get _createInGameImage(): PossibleInGameImage {
            return new SMM1InGameImageBuilder('Kinoko2');
        }

    }('Mystery Mushroom',);
    public static readonly WEIRD_MUSHROOM =                                new class Entities_WeirdMushroom extends Entities {

        protected get _createInGameImage(): PossibleInGameImage {
            return new SMM1InGameImageBuilder('KinokoFunny');
        }

    }('Weird Mushroom',);

    public static readonly MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Master Sword',);
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',);
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',);

    public static readonly BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('DekaKinoko',)
                .setAsPowerUp()
                .setGameStyle(SMB,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('DekaKinoko',)
                .setGameStyle(SMB);
        }

    }('Big Mushroom',);
    public static readonly BIG_MUSHROOM_CLASSIC =                          new class Entities_BigMushroom_Classic extends Entities {

        protected get _createInGameImage(): PossibleInGameImage {
            return new SMM1InGameImageBuilder('MegaKinoko')
                .setAllGameStyles();
        }

    }('Big Mushroom (classic)',);
    public static readonly BIG_MUSHROOM_MODERN =                           new class Entities_BigMushroom_Modern extends Entities {

        protected get _createInGameImage(): PossibleInGameImage {
            return new SMM1InGameImageBuilder('MegaKinoko2')
                .setAllGameStyles();
        }

    }('Big Mushroom (modern)',);

    public static readonly SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('SMB2 Mushroom',);

    public static readonly SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SuperKonoha',)
                .setAsPowerUp()
                .setGameStyle(SMB3,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('SuperKonoha',)
                .setGameStyle(SMB3);
        }

    }('Super Leaf',);

    public static readonly FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Frog Suit',);

    public static readonly CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MantleWing',)
                .setAsPowerUp()
                .setGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('MantleWing',)
                .setGameStyle(SMW);
        }

    }('Cape Feather',);

    public static readonly POWER_BALLOON =                                 new class Entities_PowerBaloon extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Power Balloon',);

    public static readonly PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('PropellerKinoko',)
                .setAsPowerUp()
                .setGameStyle(NSMBU,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('PropellerKinoko',)
                .setGameStyle(NSMBU);
        }

    }('Propeller Mushroom',);

    public static readonly SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Super Acorn',);

    public static readonly SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SuperBell',)
                .setAsPowerUp()
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('SuperBell',)
                .setOnlySM3DW();
        }

    }('Super Bell',);

    public static readonly SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SuperHammer',)
                .setAsPowerUp()
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('SuperHammer',)
                .setOnlySM3DW();
        }

    }('Super Hammer',);
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',);

    public static readonly BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Boomerang Flower',);
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',);

    public static readonly CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Cannon Box',);
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',);

    public static readonly PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Propeller Box',);

    public static readonly GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Goomba Mask',);

    public static readonly BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Bullet Bill Mask',);

    public static readonly RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Red POW Box',);

    public static readonly SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'SuperStar';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'SuperStar';
        }

    }('Super Star',);

    public static readonly ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return '1upKinoko';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return '1upKinoko';
        }

    }('1-Up Mushroom',);
    public static readonly ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('DokuKinoko',)
                .setNotSM3DW();
        }

    }('Rotten Mushroom',);

    public static readonly SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KutsuKuribo', 1,)
                .setGameStyle(SMB, SMB3,);
        }

    }('Shoe Goomba',);
    public static readonly SHOE =                                          new class EntitiesShoe extends Entities {

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('KutsuKuribo',)
                .setGameStyle(SMB, SMB3,);
        }

    }('Shoe',);
    public static readonly STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KutsuKuribo', 2,)
                .setGameStyle(SMB, SMB3,);
        }

    }('Stiletto Goomba',);
    public static readonly STILETTO =                                      new Entities('Stiletto',);
    public static readonly YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('YosshiEgg',)
                .setGameStyle(SMW, NSMBU,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('YosshiEgg',)
                .setGameStyle(SMW, NSMBU,);
        }

    }('Yoshi\'s Egg',);
    public static readonly YOSHI =                                         new Entities('Yoshi',);
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',);
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',);
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',);
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',);
    public static readonly RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('YosshiEggRed',)
                .setGameStyle(SMW, NSMBU,);
        }

    }('Red Yoshi\'s Egg',);
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',);
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',);

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new class Entities_Goomba extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Kuribo', 1,)
                .setNotGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Kuribo', 1,)
                .setNotGameStyle(SMW);
        }

    }('Goomba',);
    public static readonly GALOOMBA =                                      new class Entities_Galoomba extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Kuribo', 1,)
                .setGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Kuribo', 1,)
                .setGameStyle(SMW,);
        }

    }('Galoomba',);
    public static readonly GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Kuribo', 2,)
                .setNotGameStyle(SMW, SM3DW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Kuribo', 2,)
                .setNotGameStyle(SMW, SM3DW,);
        }

    }('Goombrat',);
    public static readonly GOOMBUD =                                       new class Entities_Goombud extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Kuribo', 2,)
                .setGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Kuribo', 2,)
                .setGameStyle(SMW,);
        }

    }('Goombud',);

    public static readonly KOOPA_TROOPA =                                  new class Entities_KoopaTroopa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Nokonoko',)
                .setAmount(2)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Nokonoko';
        }

    }('Koopa Troopa',);
    public static readonly BEACH_KOOPA =                                   new Entities('Beach Koopa',);
    public static readonly KOOPA_SHELL =                                   new class Entities_KoopaShell extends Entities {

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('NokonokoShell',)
                .setNotGameStyle(SMB);
        }

    }('Koopa Shell',);

    public static readonly DRY_BONES =                                     new class Entities_DryBones extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Karon', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Karon', 1,)
                .setAllGameStyles();
        }

    }('Dry Bones',);
    public static readonly PARABONES =                                     new Entities('Parabones',);
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',);
    public static readonly DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Karon', 2,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Karon', 2,)
                .setNotSM3DW();
        }

    }('Dry Bones Shell',);

    public static readonly BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Met', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Met', 1,)
                .setNotSM3DW();
        }

    }('Buzzy Beetle',);
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',);
    public static readonly BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Met', 2,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Met', 2,)
                .setNotSM3DW();
        }

    }('Buzzy Shell',);

    public static readonly SPINY =                                         new class Entities_Spiny extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Togezo', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Togezo', 1,)
                .setAllGameStyles();
        }

    }('Spiny',);
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',);
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',);
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',);
    public static readonly SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Togezo', 2,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Togezo', 2,)
                .setNotSM3DW();
        }

    }('Spiny Shell',);

    public static readonly SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TogeMet',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('TogeMet')
                .setNotSM3DW();
        }

    }('Spike Top',);
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',);
    public static readonly FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TogeMet', 2,)
                .setNotSM3DW();
        }

    }('Fast Spike Top',);
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',);

    public static readonly SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pyonchu', 1,)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pyonchu',)
                .setOnlySM3DW();
        }

    }('Skipsqueak',);
    public static readonly SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pyonchu', 2,)
                .setOnlySM3DW();
        }

    }('Spiny Skipsqueak',);

    public static readonly ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Arihei', 1,)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Arihei',)
                .setOnlySM3DW();
        }

    }('Ant Trooper',);
    public static readonly HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Arihei', 2,)
                .setOnlySM3DW();
        }

    }('Horned Ant Trooper',);

    public static readonly STINGBY =                                       new class Entities_Stingby extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Hacchin',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Hacchin',)
                .setOnlySM3DW();
        }

    }('Stingby',);

    public static readonly CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pukupuku',)
                .setAmount(2)
                .setAllGameStyles()
                .setImage(SMW, null, null, 2,)
                .setImage(NSMBU, null, null, 2,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setNotGameStyle(SMW, NSMBU,);
        }

    }('Cheep Cheep',);
    public static readonly BLURPS =                                        new class Entities_Blurps extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pukupuku', 1,)
                .setGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setGameStyle(SMW,);
        }

    }('Blurps',);
    public static readonly DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pukupuku', 1,)
                .setGameStyle(NSMBU,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pukupuku',)
                .setGameStyle(NSMBU,);
        }

    }('Deep Cheep',);
    public static readonly FISH_BONE =                                     new class Entities_FishBone extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'FishBone';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'FishBone';
        }

    }('Fish Bone',);

    public static readonly BLOOPER =                                       new class Entities_Blooper extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Gesso', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Gesso';
        }

    }('Blooper',);
    public static readonly BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Gesso', 2,)
                .setNotSM3DW();
        }

    }('Blooper Nanny',);
    public static readonly BABY_BLOOPER =                                  new Entities('Baby Blooper',);

    public static readonly PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Fugumannen',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Fugumannen',)
                .setOnlySM3DW();
        }

    }('Porcupuffer',);

    public static readonly WIGGLER =                                       new class Entities_Wiggler extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Hanachan', 1,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Hanachan',)
                .setNotSM3DW();
        }

    }('Wiggler',);
    public static readonly ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Hanachan', 2,)
                .setNotSM3DW();
        }

    }('Angry Wiggler',);

    public static readonly PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pakkun', 1,)
                .setNotGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pakkun', 1,)
                .setNotGameStyle(SMW,);
        }

    }('Piranha Plant',);
    public static readonly JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pakkun', 1,)
                .setGameStyle(SMW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pakkun', 1,)
                .setGameStyle(SMW,);
        }

    }('Jumping Piranha Plant',);
    public static readonly FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Pakkun', 2,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Pakkun', 2,)
                .setGameStyle(SMW,);
        }

    }('Fire Piranha Plant',);
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',);
    public static readonly MUNCHER =                                       new class Entities_Muncher extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BlackPakkun',)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('BlackPakkun',)
                .setNotSM3DW();
        }

    }('Muncher',);
    public static readonly PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('PackunPipe',)
                .setAmount(2)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('PackunPipe',)
                .setOnlySM3DW();
        }

    }('Piranha Creeper',);

    public static readonly CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Wanwan', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Chain Chomp',);
    public static readonly UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Wanwan', 2,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Wanwan')
                .setNotSM3DW();
        }

    }('Unchained Chomp',);
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',);

    public static readonly SPIKE =                                         new class Entities_Spike extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Spike',);
    public static readonly SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Spike Ball',);
    public static readonly SNOWBALL =                                      new class Entities_Snowball extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Snowball',);

    public static readonly LAKITU =                                        new class Entities_Lakitu extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Jugem', 1,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Jugem', 1,)
                .setNotSM3DW();
        }

    }('Lakitu',);
    public static readonly LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Jugem', 2,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Jugem', 2,)
                .setNotSM3DW();
        }

    }('Lakitu\'s Cloud',);

    public static readonly BOO =                                           new class Entities_Boo extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Teresa', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Teresa';
        }

    }('Boo',);
    public static readonly STRETCH =                                       new Entities('Stretch',);
    public static readonly BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Teresa', 2,)
                .setNotSM3DW();
        }

    }('Boo Buddies',);
    public static readonly PEEPA =                                         new class Entities_Peepa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Teresa', 2,)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Teresa', 2,)
                .setOnlySM3DW();
        }

    }('Peepa',);

    public static readonly BOB_OMB =                                       new class Entities_BobOmb extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bombhei', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bombhei';
        }

    }('Bob-omb',);
    public static readonly LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bombhei', 2,)
                .setAllGameStyles();
        }

    }('Lit Bob-omb',);

    public static readonly POKEY =                                         new class Entities_Pokey extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Pokey',);
    public static readonly SNOW_POKEY =                                    new class Entities_SnowPokey extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Snow Pokey',);

    public static readonly THWOMP =                                        new class Entities_Thwomp extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'Dossun';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Dossun';
        }

    }('Thwomp',);

    public static readonly MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('ChoroPoo',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('ChoroPoo',)
                .setNotSM3DW();
        }

    }('Monty Mole',);
    public static readonly ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Poo',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Poo',)
                .setNotSM3DW();
        }

    }('Rocky Wrench',);
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',);

    public static readonly MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'Kameck';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Kameck';
        }

    }('Magikoopa',);
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',);

    public static readonly HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bros', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bros';
        }

    }('Hammer Bro',);
    public static readonly SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MegaBros', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'MegaBros';
        }

    }('Sledge Bro',);
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',);
    public static readonly FIRE_BRO =                                      new class Entities_FireBro extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bros', 2,)
                .setOnlySM3DW();
        }

    }('Fire Bro',);
    public static readonly HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MegaBros', 2,)
                .setOnlySM3DW();
        }

    }('Heavy Fire Bro',);
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',);

    public static readonly LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'Bubble';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Bubble';
        }

    }('Lava Bubble',);

    public static readonly MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Mechakoopa',);
    public static readonly BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Blasta Mechakoopa',);
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',);
    public static readonly ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Zappa Mechakoopa',);
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',);

    public static readonly CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MagmaFish',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('MagmaFish',)
                .setOnlySM3DW();
        }

    }('Charvaargh',);

    public static readonly BULLY =                                         new class Entities_Bully extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Donketsu',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Donketsu',)
                .setOnlySM3DW();
        }

    }('Bully',);

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KillerHoudai', 1,)
                .setAllGameStyles()
                .setAsDifferentInSMBAndSMB3();
        }

    }('Bill Blaster',);
    public static readonly BULLET_BILL =                                   new class Entities_BulletBill extends Entities {

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'Killer';
        }

    }('Bullet Bill',);
    public static readonly BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KillerHoudai', 2,)
                .setAllGameStyles();
        }

    }('Bull\'s-Eye Blaster',);
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',);
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',);

    public static readonly BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MagnumKiller', 1,)
                .setAllGameStyles()
                .setAsDifferentInSMBAndSMB3();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'MagnumKiller';
        }

    }('Banzai Bill',);
    public static readonly BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MagnumKiller', 2,)
                .setNotSM3DW();
        }

    }('Bull\'s-Eye Banzai',);
    public static readonly CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('MagnumKiller', 2,)
                .setOnlySM3DW();
        }

    }('Cat Banzai Bill',);

    public static readonly CANNON =                                        new class Entities_Cannon extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Houdai', 1,)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Cannon',);
    public static readonly CANNONBALL =                                    new Entities('Cannonball',);
    public static readonly RED_CANNON =                                    new class Entities_RedCannon extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Houdai', 2,)
                .setNotSM3DW();
        }

    }('Red Cannon',);
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',);

    public static readonly BURNER =                                        new class Entities_Burner extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Burner',)
                .setAmount(2)
                .setNotSM3DW();
        }

    }('Burner',);

    public static readonly FIRE_BAR =                                      new class Entities_FireBar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('FireBar',)
                .setNotSM3DW();
        }

    }('Fire Bar',);

    public static readonly SKEWER =                                        new class Entities_Skewer extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TogeKonbo',)
                .setAsDifferentInSMBAndSMB3()
                .setNotSM3DW();
        }

    }('Skewer',);

    public static readonly KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaClown', 1,)
                .setNotGameStyle(NSMBU, SM3DW,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('KoopaClown',)
                .setNotGameStyle(NSMBU, SM3DW,);
        }

    }('Koopa Clown Car',);
    public static readonly JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaClown', 1,)
                .setGameStyle(NSMBU,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('KoopaClown',)
                .setGameStyle(NSMBU,);
        }

    }('Junior Clown Car',);
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaClown', 2,)
                .setNotGameStyle(NSMBU, SM3DW,);
        }

    }('Fire Koopa Clown Car',);
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaClown', 2,)
                .setGameStyle(NSMBU,);
        }

    }('Fire Junior Clown Car',);
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire Koopa / Junior Clown Car',);

    public static readonly KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaCar',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('KoopaCar',)
                .setOnlySM3DW();
        }

    }('Koopa Troopa Car',);
    public static readonly CAR =                                           new Entities('Car',);

    public static readonly GRINDER =                                       new class Entities_Grinder extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Saw',)
                .setNotSM3DW();
        }

    }('Grinder',);

    public static readonly ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SunMoon', 1,)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('SunMoon',)
                .setNotSM3DW();
        }

    }('Angry Sun',);
    public static readonly MOON =                                          new class Entities_Moon extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SunMoon', 2,)
                .setNotSM3DW();
        }

    }('Moon',);

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new class Entities_Bowser extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Koopa',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Koopa',)
                .setNotSM3DW();
        }

    }('Bowser',);
    public static readonly MEOWSER =                                       new class Entities_Meowser extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Koopa',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Koopa',)
                .setOnlySM3DW();
        }

    }('Meowser',);
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',);
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',);

    public static readonly BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('KoopaJr',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('KoopaJr',)
                .setNotSM3DW();
        }

    }('Bowser Jr.',);
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',);

    public static readonly BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bunbun', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Bunbun', 1,)
                .setAllGameStyles();
        }

    }('Boom Boom',);
    public static readonly POM_POM =                                       new class Entities_PomPom extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Bunbun', 2,)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Bunbun', 2,)
                .setOnlySM3DW();
        }

    }('Pom Pom',);
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',);
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',);

    public static readonly LARRY =                                         new class Entities_Larry extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Larry',);
    public static readonly LARRY_WAND =                                    new Entities('Larry\'s Wand',);
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',);

    public static readonly IGGY =                                          new class Entities_Iggy extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Iggy',);
    public static readonly IGGY_WAND =                                     new Entities('Iggy\'s Wand',);
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',);

    public static readonly WENDY =                                         new class Entities_Wendy extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Wendy',);
    public static readonly WENDY_WAND =                                    new Entities('Wendy\'s Wand',);
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',);

    public static readonly LEMMY =                                         new class Entities_Lemmy extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Lemmy',);
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',);
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',);

    public static readonly ROY =                                           new class Entities_Roy extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Roy',);
    public static readonly ROY_WAND =                                      new Entities('Roy\'s Wand',);
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',);

    public static readonly MORTON =                                        new class Entities_Morton extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Morton',);
    public static readonly MORTON_WAND =                                   new Entities('Morton\'s Wand',);
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',);
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',);

    public static readonly LUDWIG =                                        new class Entities_Ludwig extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return null;
        }

    }('Ludwig',);
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',);
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',);

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new class Entities_Bumper extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Marumaru',)
                .setNotSM3DW();
        }

    }('Bumper',);

    public static readonly SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BurankoCrane',)
                .setNotSM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('BurankoCrane',)
                .setNotSM3DW();
        }

    }('Swinging Claw',);

    public static readonly TWISTER =                                       new class Entities_Twister extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'Tornado';
        }

    }('Twister',);

    public static readonly ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Hanatari',)
                .setNotSM3DW();
        }

    }('One-Way Wall',);

    public static readonly TRACK =                                         new class Entities_Track extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Rail',)
                .setNotSM3DW();
        }

    }('Track',);
    public static readonly TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('OrbitBlock',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Track Block',);

    public static readonly VINE =                                          new class Entities_Vine extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('TsutaBlock',)
                .setNotSM3DW();
        }

    }('Vine',);
    public static readonly TREE =                                          new class Entities_Tree extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BellTree',)
                .setTheme(SM3DW, UNDERGROUND, UNDERWATER, DESERT, SNOW, FOREST,);
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('BellTree',)
                .setOnlySM3DW();
        }

    }('Tree',);

    public static readonly ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'Yajirushi';
        }

    }('Arrow Sign',);

    public static readonly CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'MiddleFlag';
        }

    }('Checkpoint Flag',);

    public static readonly DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Dash Block',);

    public static readonly SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SnakeBlock', 1,)
                .setAllGameStyles();
        }

    }('Snake Block',);
    public static readonly FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('SnakeBlock', 2,)
                .setAllGameStyles();
        }

    }('Fast Snake Block',);

    public static readonly CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BeltConveyor', 1,)
                .setAllGameStyles();
        }

    }('Conveyor Belt',);
    public static readonly FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('BeltConveyor', 2,)
                .setAllGameStyles();
        }

    }('Fast Conveyor Belt',);

    public static readonly MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Trampoline',)
                .setAmount(2)
                .setOnlySM3DW();
        }

    }('Mushroom Trampoline',);
    public static readonly ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('ON/OFF Trampoline',);

    public static readonly LIFT =                                          new class Entities_List extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Lift', 1,)
                .setNotSM3DW();
        }

    }('Lift',);
    public static readonly FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Lift', 2,)
                .setNotSM3DW();
        }

    }('Flimsy Lift',);
    public static readonly CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Lift', 1,)
                .setOnlySM3DW();
        }

    }('Cloud Lift',);

    public static readonly SEESAW =                                        new class Entities_Seesaw extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Seesaw',)
                .setNotSM3DW();
        }

    }('Seesaw',);

    public static readonly LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('YouganLift', 1,)
                .setNotSM3DW();
        }

    }('Lava Lift',);
    public static readonly FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('YouganLift', 2,)
                .setNotSM3DW();
        }

    }('Fast Lava Lift',);

    public static readonly CRATE =                                         new class Entities_Crate extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('WoodBox',)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('WoodBox',)
                .setOnlySM3DW();
        }

    }('Crate',);

    public static readonly KEY =                                           new class Entities_Key extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Key', 1,)
                .setAllGameStyles();
        }

    }('Key',);
    public static readonly CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return null;
        }

    }('Cursed Key',);
    public static readonly PHANTO =                                        new class Entities_Phanto extends Entities {

    }('Phanto',);

    public static readonly TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('JumpStep',)
                .setAmount(2)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('JumpStep',)
                .setNotGameStyle(SMB,);
        }

    }('Trampoline',);
    public static readonly HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Hopper',)
                .setOnlySM3DW();
        }

    }('Hop-Chops',);

    public static readonly POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('PowBlock', 1,)
                .setAllGameStyles();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('PowBlock', 1,)
                .setAllGameStyles();
        }

    }('POW Block',);
    public static readonly RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('PowBlock', 2,)
                .setOnlySM3DW();
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('PowBlock', 2,)
                .setOnlySM3DW();
        }

    }('Red POW Block',);

    public static readonly P_SWITCH =                                      new class Entities_PSwitch extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return 'PSwitch';
        }

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return 'PSwitch';
        }

    }('P Switch',);

    public static readonly STONE =                                         new class Entities_Stone extends Entities {

        protected get _createClearConditionImage(): PossibleClearConditionImage {
            return new ClearConditionImageBuilder('Stone',)
                .setNotGameStyle(SMB,);
        }

    }('Stone',);

    public static readonly WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Door', 1,)
                .setAllGameStyles();
        }

    }('Warp Door',);
    public static readonly P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Door', 2,)
                .setAllGameStyles();
        }

    }('P Warp Door',);
    public static readonly KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('Door', 3,)
                .setAllGameStyles();
        }

    }('Key Door',);

    public static readonly WARP_BOX =                                      new class Entities_WarpBox extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('WarpBox', 1,)
                .setOnlySM3DW();
        }

    }('Warp Box',);
    public static readonly WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

        protected get _createEditorImage(): PossibleEditorImage {
            return new EditorImageBuilder('WarpBox', 2,)
                .setOnlySM3DW();
        }

    }('Warp Box (With Key)',);

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, Entity>;

    #reference?: Entity;
    readonly #englishNameContainer;
    #editorImage?: EditorImage;
    #clearConditionImage?: ClearConditionImage;
    #whilePlayingImage?: InGameImage;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./Entity.loader').EntityLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.__map.get(this.englishName).entity;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    //region -------------------- editor image --------------------

    /**
     * Initialise the editor depending on the {@link _createEditorImage} return value.
     *
     * @note It will only be called once.
     * @private
     */
    private get __initialiseEditorImageBuilder(): Builder<EditorImage> | null {
        const builder_or_image = this._createEditorImage;
        if (builder_or_image == null)
            return null;
        if (typeof builder_or_image == 'string')
            return new EditorImageBuilder(builder_or_image).setAllGameStyles();
        return builder_or_image;
    }

    /**
     * Get the editor image in a string form or in a builder form.
     *
     * @note It will only be called once.
     * @protected
     */
    protected get _createEditorImage(): PossibleEditorImage {
        return null;
    }

    public get editorImage(): EditorImage {
        if (this.#editorImage == null) {
            const builder = this.__initialiseEditorImageBuilder;
            this.#editorImage = builder == null ? EmptyEditorImage.get : builder.build();
        }
        return this.#editorImage;
    }

    //endregion -------------------- editor image --------------------
    //region -------------------- clear condition image --------------------

    /**
     * Initialise the editor depending on the {@link _createClearConditionImage} return value.
     *
     * @note It will only be called once.
     * @private
     */
    private get __initialiseClearConditionImageBuilder(): Builder<ClearConditionImage> | null {
        const builder_or_image = this._createClearConditionImage;
        if (builder_or_image == null)
            return null;
        if (typeof builder_or_image == 'string')
            return new ClearConditionImageBuilder(builder_or_image).setAllGameStyles();
        return builder_or_image;
    }

    /**
     * Get the clear condition image in a string form or in a builder form.
     *
     * @note It will only be called once.
     * @protected
     */
    protected get _createClearConditionImage(): PossibleClearConditionImage {
        return null;
    }

    public get clearConditionImage(): ClearConditionImage {
        if (this.#clearConditionImage == null) {
            const builder = this.__initialiseClearConditionImageBuilder;
            this.#clearConditionImage = builder == null ? EmptyClearConditionImage.get : builder.build();
        }
        return this.#clearConditionImage;
    }

    //endregion -------------------- clear condition image --------------------
    //region -------------------- while playing image --------------------

    /**
     * Initialise the editor depending on the {@link _createInGameImage} return value.
     *
     * @note It will only be called once.
     * @private
     */
    private get __initialiseInGameImageBuilder(): | Builder<InGameImage> | null {
        const builder_or_image = this._createInGameImage;
        if (builder_or_image == null)
            return null;
        return builder_or_image;
    }

    /**
     * Get the "in game" image in a string form or in a builder form.
     *
     * @note It will only be called once.
     * @protected
     */
    protected get _createInGameImage(): PossibleInGameImage {
        return null;
    }

    public get inGameImage(): InGameImage {
        if (this.#whilePlayingImage == null) {
            const builder = this.__initialiseInGameImageBuilder;
            this.#whilePlayingImage = builder == null ? EmptyInGameImage.get : builder.build();
        }
        return this.#whilePlayingImage;
    }

    //endregion -------------------- while playing image --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Entities> {
        return Entities;
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
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(enumerable => enumerable.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleEditorImage = | Builder<EditorImage> | SimpleImageName_Editor | null;
type PossibleClearConditionImage = | Builder<ClearConditionImage> | SimpleImageName_ClearCondition | null;
type PossibleInGameImage = | Builder<InGameImage> | null;
