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
import type {PossibleImageReceivedOnFactory as PossibleInGameImage}                                                                                                                                      from './images/inGame/InGameImage.types';
import type {PossibleImageReceivedOnFactory as PossibleUnusedImage}                                                                                                                                      from './images/unused/UnusedImage.types';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {UnusedImages}                                                                                                                                                                               from './images/unused/UnusedImage';

import {ClearConditionImageBuilder}     from './images/clearCondition/ClearConditionImage.builder';
import {ClearConditionImageFactory}     from './images/clearCondition/ClearConditionImage.factory';
import {EditorImageBuilder}             from './images/editor/EditorImage.builder';
import {EditorImageFactory}             from './images/editor/EditorImage.factory';
import {EditorVoices}                   from '../editorVoice/EditorVoices';
import {EmptyEditorVoiceSound}          from '../editorVoice/EmptyEditorVoiceSound';
import {Enum}                           from '../../util/enum/Enum';
import {GameStyles}                     from '../gameStyle/GameStyles';
import {Import}                         from '../../util/DynamicImporter';
import {InGameImage_SMM1Builder}        from './images/inGame/InGameImage_SMM1.builder';
import {InGameImageFactory}             from './images/inGame/InGameImage.factory';
import {Themes}                         from '../theme/Themes';
import {Times}                          from '../time/Times';
import {UnusedImage_BigMushroomBuilder} from './images/unused/UnusedImage_BigMushroom.builder';
import {UnusedImage_RegularBuilder}     from './images/unused/UnusedImage_Regular.builder';
import {UnusedImageFactory}             from './images/unused/UnusedImage.factory';
import {StringContainer}                from '../../util/StringContainer';

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

    public static/* readonly*/ GROUND;
    public static/* readonly*/ START_GROUND;
    public static/* readonly*/ GOAL_GROUND;
    public static/* readonly*/ STEEP_SLOPE;
    public static/* readonly*/ GENTLE_SLOPE;
    public static/* readonly*/ WATER;
    public static/* readonly*/ LAVA;
    public static/* readonly*/ POISON;

    public static/* readonly*/ PIPE;
    public static/* readonly*/ CLEAR_PIPE;

    public static/* readonly*/ SPIKE_TRAP;
    public static/* readonly*/ JELECTRO;
    public static/* readonly*/ SEA_URCHIN;
    public static/* readonly*/ SPIKE_BLOCK;

    public static/* readonly*/ MUSHROOM_PLATFORM;
    public static/* readonly*/ SEMISOLID_PLATFORM;
    public static/* readonly*/ BRIDGE;

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static/* readonly*/ BRICK_BLOCK;
    public static/* readonly*/ CRISTAL_BLOCK;
    public static/* readonly*/ ROTATING_BLOCK;

    public static/* readonly*/ HARD_BLOCK;
    public static/* readonly*/ ROCK_BLOCK;

    public static/* readonly*/ QUESTION_MARK_BLOCK;
    public static/* readonly*/ HIDDEN_BLOCK;
    public static/* readonly*/ EMPTY_BLOCK;

    public static/* readonly*/ EXCLAMATION_MARK_BLOCK;

    public static/* readonly*/ NOTE_BLOCK;
    public static/* readonly*/ MUSIC_BLOCK;

    public static/* readonly*/ DONUT_BLOCK;

    public static/* readonly*/ CLOUD_BLOCK;

    public static/* readonly*/ ON_OFF_SWITCH;
    public static/* readonly*/ DOTTED_LINE_BLOCK;

    public static/* readonly*/ P_BLOCK;

    public static/* readonly*/ BLINKING_BLOCK;

    public static/* readonly*/ ICE_BLOCK;
    public static/* readonly*/ ICICLE;

    public static/* readonly*/ COIN;
    public static/* readonly*/ FROZEN_COIN;
    public static/* readonly*/ TEN_COIN;
    public static/* readonly*/ THIRTY_COIN;
    public static/* readonly*/ FIFTY_COIN;
    public static/* readonly*/ PINK_COIN;

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static/* readonly*/ SUPER_MUSHROOM;

    public static/* readonly*/ FIRE_FLOWER;
    public static/* readonly*/ FIREBALL_THROWN_BY_A_PLAYER;

    public static/* readonly*/ SUPERBALL_FLOWER;
    public static/* readonly*/ SUPERBALL_THROWN_BY_A_PLAYER;

    public static/* readonly*/ MYSTERY_MUSHROOM;
    public static/* readonly*/ WEIRD_MUSHROOM;

    public static/* readonly*/ MASTER_SWORD;
    public static/* readonly*/ BOMB_THROWN_BY_A_LINK;
    public static/* readonly*/ ARROW_THROWN_BY_A_LINK;

    public static/* readonly*/ BIG_MUSHROOM;
    public static/* readonly*/ BIG_MUSHROOM_CLASSIC;
    public static/* readonly*/ BIG_MUSHROOM_MODERN;

    public static/* readonly*/ SMB2_MUSHROOM;

    public static/* readonly*/ SUPER_LEAF;

    public static/* readonly*/ FROG_SUIT;

    public static/* readonly*/ CAPE_FEATHER;

    public static/* readonly*/ POWER_BALLOON;

    public static/* readonly*/ PROPELLER_MUSHROOM;

    public static/* readonly*/ SUPER_ACORN;

    public static/* readonly*/ SUPER_BELL;

    public static/* readonly*/ SUPER_HAMMER;
    public static/* readonly*/ BUILDER_BOX_THROWN_BY_A_PLAYER;

    public static/* readonly*/ BOOMERANG_FLOWER;
    public static/* readonly*/ BOOMERANG_THROWN_BY_A_PLAYER;

    public static/* readonly*/ CANNON_BOX;
    public static/* readonly*/ CANNONBALL_THROWN_BY_A_PLAYER;

    public static/* readonly*/ PROPELLER_BOX;

    public static/* readonly*/ GOOMBA_MASK;

    public static/* readonly*/ BULLET_BILL_MASK;

    public static/* readonly*/ RED_POW_BOX;

    public static/* readonly*/ SUPER_STAR;

    public static/* readonly*/ ONE_UP_MUSHROOM;
    public static/* readonly*/ ROTTEN_MUSHROOM;

    public static/* readonly*/ SHOE_GOOMBA;
    public static/* readonly*/ SHOE;
    public static/* readonly*/ STILETTO_GOOMBA;
    public static/* readonly*/ STILETTO;
    public static/* readonly*/ YOSHI_EGG;
    public static/* readonly*/ YOSHI;
    public static/* readonly*/ FIRE_THROWN_BY_A_YOSHI;
    public static/* readonly*/ POISON_THROWN_BY_A_YOSHI;
    public static/* readonly*/ BONE_THROWN_BY_A_YOSHI;
    public static/* readonly*/ HAMMER_THROWN_BY_A_YOSHI;
    public static/* readonly*/ RED_YOSHI_EGG;
    public static/* readonly*/ RED_YOSHI;
    public static/* readonly*/ FIRE_THROWN_BY_A_RED_YOSHI;

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static/* readonly*/ GOOMBA;
    public static/* readonly*/ GALOOMBA;
    public static/* readonly*/ GOOMBRAT;
    public static/* readonly*/ GOOMBUD;

    public static/* readonly*/ GREEN_KOOPA_TROOPA;
    public static/* readonly*/ RED_KOOPA_TROOPA;
    public static/* readonly*/ GREEN_BEACH_KOOPA;
    public static/* readonly*/ RED_BEACH_KOOPA;
    public static/* readonly*/ GREEN_KOOPA_SHELL;
    public static/* readonly*/ RED_KOOPA_SHELL;

    public static/* readonly*/ DRY_BONES;
    public static/* readonly*/ PARABONES;
    public static/* readonly*/ BONE_THROWN_BY_A_DRY_BONES;
    public static/* readonly*/ DRY_BONES_SHELL;

    public static/* readonly*/ BUZZY_BEETLE;
    public static/* readonly*/ PARA_BEETLE;
    public static/* readonly*/ BUZZY_SHELL;

    public static/* readonly*/ SPINY;
    public static/* readonly*/ WINGED_SPINY;
    public static/* readonly*/ WINGED_SPINY_PROJECTILE;
    public static/* readonly*/ SPINY_EGG;
    public static/* readonly*/ SPINY_SHELL;

    public static/* readonly*/ SPIKE_TOP;
    public static/* readonly*/ WINGED_SPIKE_TOP;
    public static/* readonly*/ FAST_SPIKE_TOP;
    public static/* readonly*/ FAST_WINGED_SPIKE_TOP;

    public static/* readonly*/ SKIPSQUEAK;
    public static/* readonly*/ SPINY_SKIPSQUEAK;

    public static/* readonly*/ ANT_TROOPER;
    public static/* readonly*/ HORNED_ANT_TROOPER;

    public static/* readonly*/ STINGBY;

    public static/* readonly*/ CHEEP_CHEEP;
    public static/* readonly*/ BLURPS;
    public static/* readonly*/ DEEP_CHEEP;
    public static/* readonly*/ FISH_BONE;

    public static/* readonly*/ BLOOPER;
    public static/* readonly*/ BLOOPER_NANNY;
    public static/* readonly*/ BABY_BLOOPER;

    public static/* readonly*/ PORCUPUFFER;

    public static/* readonly*/ WIGGLER;
    public static/* readonly*/ ANGRY_WIGGLER;

    public static/* readonly*/ PIRANHA_PLANT;
    public static/* readonly*/ JUMPING_PIRANHA_PLANT;
    public static/* readonly*/ FIRE_PIRANHA_PLANT;
    public static/* readonly*/ FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT;
    public static/* readonly*/ MUNCHER;
    public static/* readonly*/ PIRANHA_CREEPER;

    public static/* readonly*/ CHAIN_CHOMP;
    public static/* readonly*/ UNCHAINED_CHOMP;
    public static/* readonly*/ CHAIN_CHOMP_STUMP;

    public static/* readonly*/ SPIKE;
    public static/* readonly*/ SPIKE_BALL;
    public static/* readonly*/ SNOWBALL;

    public static/* readonly*/ LAKITU;
    public static/* readonly*/ LAKITU_CLOUD;

    public static/* readonly*/ BOO;
    public static/* readonly*/ STRETCH;
    public static/* readonly*/ BOO_BUDDIES;
    public static/* readonly*/ PEEPA;

    public static/* readonly*/ BOB_OMB;
    public static/* readonly*/ LIT_BOB_OMB;

    public static/* readonly*/ POKEY;
    public static/* readonly*/ SNOW_POKEY;

    public static/* readonly*/ THWOMP;

    public static/* readonly*/ MONTY_MOLE;
    public static/* readonly*/ ROCKY_WRENCH;
    public static/* readonly*/ WRENCH_THROWN_BY_A_ROCKY_WRENCH;

    public static/* readonly*/ MAGIKOOPA;
    public static/* readonly*/ MAGIKOOPA_PROJECTILE;

    public static/* readonly*/ HAMMER_BRO;
    public static/* readonly*/ SLEDGE_BRO;
    public static/* readonly*/ HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO;
    public static/* readonly*/ FIRE_BRO;
    public static/* readonly*/ HEAVY_FIRE_BRO;
    public static/* readonly*/ FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO;

    public static/* readonly*/ LAVA_BUBBLE;

    public static/* readonly*/ MECHAKOOPA;
    public static/* readonly*/ BLASTA_MECHAKOOPA;
    public static/* readonly*/ HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA;
    public static/* readonly*/ ZAPPA_MECHAKOOPA;
    public static/* readonly*/ ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA;

    public static/* readonly*/ CHARVAARGH;

    public static/* readonly*/ BULLY;

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static/* readonly*/ BILL_BLASTER;
    public static/* readonly*/ BULLET_BILL;
    public static/* readonly*/ BULL_EYE_BLASTER;
    public static/* readonly*/ BULL_EYE_BILL;
    public static/* readonly*/ CAT_BULLET_BILL;

    public static/* readonly*/ BANZAI_BILL;
    public static/* readonly*/ BULL_EYE_BANZAI;
    public static/* readonly*/ CAT_BANZAI_BILL;

    public static/* readonly*/ CANNON;
    public static/* readonly*/ CANNONBALL;
    public static/* readonly*/ RED_CANNON;
    public static/* readonly*/ RED_CANNONBALL;

    public static/* readonly*/ BURNER;

    public static/* readonly*/ FIRE_BAR;

    public static/* readonly*/ SKEWER;

    public static/* readonly*/ KOOPA_CLOWN_CAR;
    public static/* readonly*/ JUNIOR_CLOWN_CAR;
    public static/* readonly*/ FIRE_KOOPA_CLOWN_CAR;
    public static/* readonly*/ FIRE_JUNIOR_CLOWN_CAR;
    public static/* readonly*/ FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR;

    public static/* readonly*/ KOOPA_TROOPA_CAR;
    public static/* readonly*/ CAR;

    public static/* readonly*/ GRINDER;

    public static/* readonly*/ ANGRY_SUN;
    public static/* readonly*/ MOON;

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static/* readonly*/ BOWSER;
    public static/* readonly*/ MEOWSER;
    public static/* readonly*/ FIRE_THROWN_BY_A_BOWSER;
    public static/* readonly*/ FALLING_FIRE_THROWN_BY_A_BOWSER;

    public static/* readonly*/ BOWSER_JR;
    public static/* readonly*/ FIRE_THROWN_BY_A_BOWSER_JR;

    public static/* readonly*/ BOOM_BOOM;
    public static/* readonly*/ POM_POM;
    public static/* readonly*/ POM_POM_CLONE;
    public static/* readonly*/ SHURIKEN_THROWN_BY_A_POM_POM;

    public static/* readonly*/ LARRY;
    public static/* readonly*/ LARRY_WAND;
    public static/* readonly*/ LARRY_PROJECTILE;

    public static/* readonly*/ IGGY;
    public static/* readonly*/ IGGY_WAND;
    public static/* readonly*/ IGGY_PROJECTILE;

    public static/* readonly*/ WENDY;
    public static/* readonly*/ WENDY_WAND;
    public static/* readonly*/ CANDY_RING_THROWN_BY_A_WENDY;

    public static/* readonly*/ LEMMY;
    public static/* readonly*/ LEMMY_WAND;
    public static/* readonly*/ MAGIC_BALL_THROWN_BY_A_LEMMY;

    public static/* readonly*/ ROY;
    public static/* readonly*/ ROY_WAND;
    public static/* readonly*/ ROY_PROJECTILE;

    public static/* readonly*/ MORTON;
    public static/* readonly*/ MORTON_WAND;
    public static/* readonly*/ MORTON_THROWN_PROJECTILE;
    public static/* readonly*/ MORTON_GROUND_PROJECTILE;

    public static/* readonly*/ LUDWIG;
    public static/* readonly*/ LUDWIG_WAND;
    public static/* readonly*/ LUDWIG_PROJECTILE;

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static/* readonly*/ BUMPER;

    public static/* readonly*/ SWINGING_CLAW;

    public static/* readonly*/ TWISTER;

    public static/* readonly*/ ONE_WAY_WALL;

    public static/* readonly*/ TRACK;
    public static/* readonly*/ TRACK_BLOCK;

    public static/* readonly*/ VINE;
    public static/* readonly*/ TREE;

    public static/* readonly*/ ARROW_SIGN;

    public static/* readonly*/ CHECKPOINT_FLAG;
    public static/* readonly*/ GOAL_POLE;
    public static/* readonly*/ GOAL_WITH_CARDS;
    public static/* readonly*/ GIANT_GATE;

    public static/* readonly*/ DASH_BLOCK;

    public static/* readonly*/ SNAKE_BLOCK;
    public static/* readonly*/ FAST_SNAKE_BLOCK;

    public static/* readonly*/ CONVEYOR_BELT;
    public static/* readonly*/ FAST_CONVEYOR_BELT;

    public static/* readonly*/ MUSHROOM_TRAMPOLINE;
    public static/* readonly*/ ON_OFF_TRAMPOLINE;

    public static/* readonly*/ LIFT;
    public static/* readonly*/ FLIMSY_LIFT;
    public static/* readonly*/ CLOUD_LIFT;

    public static/* readonly*/ SEESAW;

    public static/* readonly*/ LAVA_LIFT;
    public static/* readonly*/ FAST_LAVA_LIFT;

    public static/* readonly*/ CRATE;

    public static/* readonly*/ KEY;
    public static/* readonly*/ CURSED_KEY;
    public static/* readonly*/ PHANTO;

    public static/* readonly*/ TRAMPOLINE;
    public static/* readonly*/ HOP_CHOPS;

    public static/* readonly*/ POW_BLOCK;
    public static/* readonly*/ RED_POW_BLOCK;

    public static/* readonly*/ P_SWITCH;

    public static/* readonly*/ STONE;

    public static/* readonly*/ WARP_DOOR;
    public static/* readonly*/ P_WARP_DOOR;
    public static/* readonly*/ KEY_DOOR;

    public static/* readonly*/ WARP_BOX;
    public static/* readonly*/ WARP_BOX_WITH_KEY;

    public static/* readonly*/ WING;
    public static/* readonly*/ PARACHUTE;
    public static/* readonly*/ BUBBLE;

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    static {
        const __createGroundEditorImage = function(simpleImageName: SimpleImageName_GroundOrSlope,): EditorImageBuilder {
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
        };

        //region -------------------- Ground / Pipe / Spike / Platform --------------------

        this.GROUND =                                        new class Entities_Ground extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return __createGroundEditorImage('Ground',);
            }

        }('Ground',);
        this.START_GROUND =                                  new Entities('Start Ground',);
        this.GOAL_GROUND =                                   new Entities('Goal Ground',);
        this.STEEP_SLOPE =                                   new class Entities_SteepSlope extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return __createGroundEditorImage('slope_l30',);
            }

        }('Steep Slope',);
        this.GENTLE_SLOPE =                                  new class Entities_GentleSlope extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return __createGroundEditorImage('slope_l45',);
            }

        }('Gentle Slope',);
        this.WATER =                                         new Entities('Water',);
        this.LAVA =                                          new Entities('Lava',);
        this.POISON =                                        new Entities('Poison',);

        this.PIPE =                                          new class Entities_Pipe extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Dokan',)
                    .setAmount(4)
                    .setAllGameStyles()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Pipe',);
        this.CLEAR_PIPE =                                    new class Entities_ClearPipe extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('ToumeiDokan',)
                    .setOnlySM3DW();
            }

        }('Clear Pipe',);

        this.SPIKE_TRAP =                                    new class Entities_SpikeTrap extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Toge',)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                    .setNotSM3DW();
            }

        }('Spike Trap',);
        this.JELECTRO =                                      new class Entities_Jelectro extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Toge',)
                    .hasNoDefaultImage()
                    .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,);
            }

        }('Jelectro',);
        this.SEA_URCHIN =                                    new class Entities_SeaUrchin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Toge',)
                    .hasNoDefaultImage()
                    .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,);
            }

        }('Sea Urchin',);
        this.SPIKE_BLOCK =                                   new class Entities_SpikeBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('TogeBlock',)
                    .setAmount(3)
                    .setOnlySM3DW();
            }

        }('Spike Block',);

        this.MUSHROOM_PLATFORM =                             new class Entities_MushroomPlatform extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
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
        this.SEMISOLID_PLATFORM =                            new class Entities_SemisolidPlatform extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
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
        this.BRIDGE =                                        new class Entities_Bridge extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
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

        this.BRICK_BLOCK =                                   new class Entities_BrickBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('RengaBlock',)
                    .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.SNOW, Themes.GHOST_HOUSE, Themes.CASTLE,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Brick Block',);
        this.CRISTAL_BLOCK =                                 new class Entities_CristalBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('RengaBlock',)
                    .hasNoDefaultImage()
                    .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.FOREST,);
            }

        }('Cristal Block',);
        this.ROTATING_BLOCK =                                new class Entities_RotatingBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('RengaBlock',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Rotating Block',);

        this.HARD_BLOCK =                                    new class Entities_HardBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
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
        this.ROCK_BLOCK =                                    new class Entities_RockBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('HardBlock',)
                    .setOnlySM3DW();
            }

        }('Rock Block',);

        this.QUESTION_MARK_BLOCK =                           new class Entities_QuestionMarkBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('HatenaBlock',)
                    .setAllGameStyles()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('? Block',);
        this.HIDDEN_BLOCK =                                  new class Entities_HiddenBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'ClearBlock';
            }

        }('Hidden Block',);
        this.EMPTY_BLOCK =                                   new Entities('Empty Block',);

        this.EXCLAMATION_MARK_BLOCK =                        new class Entities_ExclamationMarkBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BikkuriBlock',)
                    .setOnlySM3DW();
            }

        }('! Block',);

        this.NOTE_BLOCK =                                    new class Entities_NoteBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('OnpuBlock', 1,)
                    .setNotSM3DW()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Note Block',);
        this.MUSIC_BLOCK =                                   new class Entities_MusicBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('OnpuBlock', 2,)
                    .setNotSM3DW()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Music Block',);

        this.DONUT_BLOCK =                                   new class Entities_DonutBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('ChikuwaBlock',)
                    .setAllGameStyles()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Donut Block',);

        this.CLOUD_BLOCK =                                   new class Entities_CloudBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KumoBlock',)
                    .setAllGameStyles()
                    .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERWATER,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,)
                    .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,)
                    .setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,);
            }

        }('Cloud Block',);

        this.ON_OFF_SWITCH =                                 new class Entities_OnOffBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'OnOffSwitch';
            }

        }('ON/OFF Switch',);
        this.DOTTED_LINE_BLOCK =                             new class Entities_DottedLineBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('OnOffBlock',)
                    .setAmount(2)
                    .setAllGameStyles();
            }

        }('Dotted-Line Block',);

        this.P_BLOCK =                                       new class Entities_PBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('PBlock',)
                    .setAmount(2)
                    .setAllGameStyles();
            }

        }('P Block',);

        this.BLINKING_BLOCK =                                new class Entities_BlinkingBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Chikachika',)
                    .setAmount(2)
                    .setOnlySM3DW();
            }

        }('Blinking Block',);

        this.ICE_BLOCK =                                     new class Entities_IceBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('IceBlock',)
                    .setAllGameStyles()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Ice Block',);
        this.ICICLE =                                        new class Entities_Icicle extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Icicle',)
                    .setAmount(2)
                    .setAllGameStyles();
            }

        }('Icicle',);

        this.COIN =                                          new class Entities_Coin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Coin', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Coin';
            }

        }('Coin',);
        this.FROZEN_COIN =                                   new class Entities_FrozenCoin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Coin', 2,)
                    .setNotSM3DW()
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,);
            }

        }('Frozen Coin',);
        this.TEN_COIN =                                      new class Entities_TenCoin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('10Coin', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('10Coin', 1,)
                    .setAllGameStyles();
            }

        }('10-Coin',);
        this.THIRTY_COIN =                                   new class Entities_ThirtyCoin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('10Coin', 2,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('10Coin', 2,)
                    .setAllGameStyles();
            }

        }('30-Coin',);
        this.FIFTY_COIN =                                    new class Entities_FiftyCoin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('10Coin', 3,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('10Coin', 3,)
                    .setAllGameStyles();
            }

        }('50-Coin',);
        this.PINK_COIN =                                     new class Entities_PinkCoin extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'PinkCoin';
            }

        }('Pink Coin',);

        //endregion -------------------- Block / Coin --------------------
        //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

        this.SUPER_MUSHROOM =                                new class Entities_SuperMushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SuperKinoko', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('SuperKinoko', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Super Mushroom',);

        this.FIRE_FLOWER =                                   new class Entities_FireFlower extends Entities {

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
        this.FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',);

        this.SUPERBALL_FLOWER =                              new class Entities_SuperballFlower extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('FireFlower', 2,)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('FireFlower', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS,);
            }

        }('Superball Flower',);
        this.SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',);

        this.MYSTERY_MUSHROOM =                             new class Entities_MysteryMushroom extends Entities {

            protected get _createInGameImage(): PossibleInGameImage {
                return new InGameImage_SMM1Builder('Kinoko2',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Mystery Mushroom',);
        this.WEIRD_MUSHROOM =                                new class Entities_WeirdMushroom extends Entities {

            protected get _createInGameImage(): PossibleInGameImage {
                return new InGameImage_SMM1Builder('KinokoFunny',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Weird Mushroom',);

        this.MASTER_SWORD =                                  new class Entities_MasterSword extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SuperKinoko', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('SuperKinoko', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Master Sword',);
        this.BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',);
        this.ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',);

        this.BIG_MUSHROOM =                                  new class Entities_BigMushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('DekaKinoko',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('DekaKinoko',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Big Mushroom',);
        this.BIG_MUSHROOM_CLASSIC =                          new class Entities_BigMushroom_Classic extends Entities {

            protected get _createInGameImage(): PossibleInGameImage {
                return new InGameImage_SMM1Builder('MegaKinoko')
                    .setAllGameStyles();
            }

        }('Big Mushroom (classic)',);
        this.BIG_MUSHROOM_MODERN =                           new class Entities_BigMushroom_Modern extends Entities {

            protected get _createInGameImage(): PossibleInGameImage {
                return new InGameImage_SMM1Builder('MegaKinoko2')
                    .setAllGameStyles();
            }

        }('Big Mushroom (modern)',);

        this.SMB2_MUSHROOM =                                 new class Entities_SMB2Mushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KinokoUSA')
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KinokoUSA')
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('SMB2 Mushroom',);

        this.SUPER_LEAF =                                    new class Entities_SuperLeaf extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SuperKonoha',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS_3,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('SuperKonoha',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS_3);
            }

        }('Super Leaf',);

        this.FROG_SUIT =                                     new class Entities_FrogSuit extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('FrogSuit',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS_3,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('FrogSuit',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS_3);
            }

        }('Frog Suit',);

        this.CAPE_FEATHER =                                  new class Entities_CapeFeather extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MantleWing',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('MantleWing',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD);
            }

        }('Cape Feather',);

        this.POWER_BALLOON =                                 new class Entities_PowerBalloon extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('PowerBalloon',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('PowerBalloon',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD);
            }

        }('Power Balloon',);

        this.PROPELLER_MUSHROOM =                            new class Entities_PropellerMushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('PropellerKinoko',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('PropellerKinoko',)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U);
            }

        }('Propeller Mushroom',);

        this.SUPER_ACORN =                                   new class Entities_SuperAcorn extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SuperDonguri',)
                    .setAsPowerUp()
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('SuperDonguri',)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U);
            }

        }('Super Acorn',);

        this.SUPER_BELL =                                    new class Entities_SuperBell extends Entities {

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

        this.SUPER_HAMMER =                                  new class Entities_SuperHammer extends Entities {

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
        this.BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',);

        this.BOOMERANG_FLOWER =                              new class Entities_BoomerangFlower extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoomerangFlower',)
                    .setAsPowerUp()
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoomerangFlower',)
                    .setOnlySM3DW();
            }

        }('Boomerang Flower',);
        this.BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',);

        this.CANNON_BOX =                                    new class Entities_CannonBox extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoxKiller',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoxKiller',)
                    .setOnlySM3DW();
            }

        }('Cannon Box',);
        this.CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',);

        this.PROPELLER_BOX =                                 new class Entities_PropellerBox extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoxPropeller',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoxPropeller',)
                    .setOnlySM3DW();
            }

        }('Propeller Box',);

        this.GOOMBA_MASK =                                   new class Entities_GoombaMask extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoxKuribo',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoxKuribo',)
                    .setOnlySM3DW();
            }

        }('Goomba Mask',);

        this.BULLET_BILL_MASK =                              new class Entities_BulletBillMask extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoxKillerPlayer',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoxKillerPlayer',)
                    .setOnlySM3DW();
            }

        }('Bullet Bill Mask',);

        this.RED_POW_BOX =                                   new class Entities_RedPowBox extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BoxPow',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BoxPow',)
                    .setOnlySM3DW();
            }

        }('Red POW Box',);

        this.SUPER_STAR =                                    new class Entities_SuperStar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'SuperStar';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'SuperStar';
            }

        }('Super Star',);

        this.ONE_UP_MUSHROOM =                               new class Entities_OneUpMushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return '1upKinoko';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return '1upKinoko';
            }

        }('1-Up Mushroom',);
        this.ROTTEN_MUSHROOM =                               new class Entities_RottenMushroom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('DokuKinoko',)
                    .setNotSM3DW();
            }

        }('Rotten Mushroom',);

        this.SHOE_GOOMBA =                                   new class Entities_ShoeGoomba extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KutsuKuribo', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
            }

        }('Shoe Goomba',);
        this.SHOE =                                          new class Entities_Shoe extends Entities {

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KutsuKuribo',)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
            }

        }('Shoe',);
        this.STILETTO_GOOMBA =                               new class Entities_StilettoGoomba extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KutsuKuribo', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,);
            }

        }('Stiletto Goomba',);
        this.STILETTO =                                      new Entities('Stiletto',);
        this.YOSHI_EGG =                                     new class Entities_YoshiEgg extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('YosshiEgg',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('YosshiEgg',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Yoshi\'s Egg',);
        this.YOSHI =                                         new Entities('Yoshi',);
        this.FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',);
        this.POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',);
        this.BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',);
        this.HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',);
        this.RED_YOSHI_EGG =                                 new class Entities_RedYoshiEgg extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('YosshiEggRed',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Red Yoshi\'s Egg',);
        this.RED_YOSHI =                                     new Entities('Red Yoshi',);
        this.FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',);

        //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
        //region -------------------- General enemies --------------------

        this.GOOMBA =                                        new class Entities_Goomba extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Kuribo', 1,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Kuribo', 1,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD);
            }

            protected get _createUnusedImage(): PossibleUnusedImage {
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
        this.GALOOMBA =                                      new class Entities_Galoomba extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Kuribo', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Kuribo', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Galoomba',);
        this.GOOMBRAT =                                      new class Entities_Goombrat extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Kuribo', 2,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Kuribo', 2,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,);
            }

        }('Goombrat',);
        this.GOOMBUD =                                       new class Entities_Goombud extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Kuribo', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Kuribo', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Goombud',);

        this.GREEN_KOOPA_TROOPA =                            new class Entities_GreenKoopaTroopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Nokonoko',1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Nokonoko';
            }

        }('Green Koopa Troopa',);
        this.RED_KOOPA_TROOPA =                              new class Entities_RedKoopaTroopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Nokonoko',2,)
                    .setAllGameStyles();
            }

        }('Red Koopa Troopa',);
        this.GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',);
        this.RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',);
        this.GREEN_KOOPA_SHELL =                             new class Entities_GreenKoopaShell extends Entities {

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('NokonokoShell',)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Green Koopa Shell',);
        this.RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',);

        this.DRY_BONES =                                     new class Entities_DryBones extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Karon', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Karon', 1,)
                    .setAllGameStyles();
            }

        }('Dry Bones',);
        this.PARABONES =                                     new Entities('Parabones',);
        this.BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',);
        this.DRY_BONES_SHELL =                               new class Entities_DryBonesShell extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Karon', 2,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Karon', 2,)
                    .setNotSM3DW();
            }

        }('Dry Bones Shell',);

        this.BUZZY_BEETLE =                                  new class Entities_BuzzyBeetle extends Entities {

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
        this.PARA_BEETLE =                                   new Entities('Para-Beetle',);
        this.BUZZY_SHELL =                                   new class Entities_BuzzyShell extends Entities {

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

        this.SPINY =                                         new class Entities_Spiny extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Togezo', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Togezo', 1,)
                    .setAllGameStyles();
            }

        }('Spiny',);
        this.WINGED_SPINY =                                  new Entities('Winged Spiny',);
        this.WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',);
        this.SPINY_EGG =                                     new Entities('Spiny Egg',);
        this.SPINY_SHELL =                                   new class Entities_SpinyShell extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Togezo', 2,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Togezo', 2,)
                    .setNotSM3DW();
            }

        }('Spiny Shell',);

        this.SPIKE_TOP =                                     new class Entities_SpikeTop extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('TogeMet',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('TogeMet')
                    .setNotSM3DW();
            }

        }('Spike Top',);
        this.WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',);
        this.FAST_SPIKE_TOP =                                new class Entities_FastSpikeTop extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('TogeMet', 2,)
                    .setNotSM3DW();
            }

        }('Fast Spike Top',);
        this.FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',);

        this.SKIPSQUEAK =                                    new class Entities_Skipsqueak extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pyonchu', 1,)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pyonchu',)
                    .setOnlySM3DW();
            }

        }('Skipsqueak',);
        this.SPINY_SKIPSQUEAK =                              new class Entities_SpinySkipsqueak extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pyonchu', 2,)
                    .setOnlySM3DW();
            }

        }('Spiny Skipsqueak',);

        this.ANT_TROOPER =                                   new class Entities_AntTrooper extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Arihei', 1,)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Arihei',)
                    .setOnlySM3DW();
            }

        }('Ant Trooper',);
        this.HORNED_ANT_TROOPER =                            new class Entities_HornedAntTrooper extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Arihei', 2,)
                    .setOnlySM3DW();
            }

        }('Horned Ant Trooper',);

        this.STINGBY =                                       new class Entities_Stingby extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Hacchin',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Hacchin',)
                    .setOnlySM3DW();
            }

        }('Stingby',);

        this.CHEEP_CHEEP =                                   new class Entities_CheepCheep extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pukupuku',)
                    .setAmount(2)
                    .setAllGameStyles()
                    .setImage(GameStyles.SUPER_MARIO_WORLD, null, null, 2,)
                    .setImage(GameStyles.NEW_SUPER_MARIO_BROS_U, null, null, 2,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pukupuku',)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Cheep Cheep',);
        this.BLURPS =                                        new class Entities_Blurps extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pukupuku', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pukupuku',)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Blurps',);
        this.DEEP_CHEEP =                                    new class Entities_DeepCheep extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pukupuku', 1,)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pukupuku',)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Deep Cheep',);
        this.FISH_BONE =                                     new class Entities_FishBone extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'FishBone';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'FishBone';
            }

        }('Fish Bone',);

        this.BLOOPER =                                       new class Entities_Blooper extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Gesso', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Gesso';
            }

        }('Blooper',);
        this.BLOOPER_NANNY =                                 new class Entities_BlooperNanny extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Gesso', 2,)
                    .setNotSM3DW();
            }

        }('Blooper Nanny',);
        this.BABY_BLOOPER =                                  new Entities('Baby Blooper',);

        this.PORCUPUFFER =                                   new class Entities_Porcupuffer extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Fugumannen',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Fugumannen',)
                    .setOnlySM3DW();
            }

        }('Porcupuffer',);

        this.WIGGLER =                                       new class Entities_Wiggler extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Hanachan', 1,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Hanachan',)
                    .setNotSM3DW();
            }

        }('Wiggler',);
        this.ANGRY_WIGGLER =                                 new class Entities_AngryWiggler extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Hanachan', 2,)
                    .setNotSM3DW();
            }

        }('Angry Wiggler',);

        this.PIRANHA_PLANT =                                 new class Entities_PiranhaPlant extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pakkun', 1,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pakkun', 1,)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Piranha Plant',);
        this.JUMPING_PIRANHA_PLANT =                         new class Entities_JumpingPiranhaPlant extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pakkun', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pakkun', 1,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Jumping Piranha Plant',);
        this.FIRE_PIRANHA_PLANT =                            new class Entities_FirePiranhaPlant extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Pakkun', 2,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Pakkun', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_WORLD,);
            }

        }('Fire Piranha Plant',);
        this.FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',);
        this.MUNCHER =                                       new class Entities_Muncher extends Entities {

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
        this.PIRANHA_CREEPER =                               new class Entities_PiranhaCreeper extends Entities {

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

        this.CHAIN_CHOMP =                                   new class Entities_ChainChomp extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Wanwan', 1,)
                    .setAsDifferentInSMBAndSMB3()
                    .setNotSM3DW();
            }

        }('Chain Chomp',);
        this.UNCHAINED_CHOMP =                               new class Entities_UnchainedChomp extends Entities {

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
        this.CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',);

        this.SPIKE =                                         new class Entities_Spike extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Gabon', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Gabon';
            }

        }('Spike',);
        this.SPIKE_BALL =                                    new class Entities_SpikeBall extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Gabon', 2,)
                    .setAllGameStyles()
                    .setTheme(GameStyles.SUPER_MARIO_BROS, Themes.UNDERGROUND, Themes.GHOST_HOUSE, Themes.CASTLE,)
                    .setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERGROUND, Themes.GHOST_HOUSE, Themes.CASTLE,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.GROUND, Themes.DESERT, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,)
                    .setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.GROUND, Themes.DESERT, Themes.SKY, Themes.FOREST, Themes.AIRSHIP,);
            }

        }('Spike Ball',);
        this.SNOWBALL =                                      new class Entities_Snowball extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Gabon', 2,)
                    .setAllGameStyles()
                    .setAsSnow();
            }

        }('Snowball',);

        this.LAKITU =                                        new class Entities_Lakitu extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Jugem', 1,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Jugem', 1,)
                    .setNotSM3DW();
            }

        }('Lakitu',);
        this.LAKITU_CLOUD =                                  new class Entities_LakituCloud extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Jugem', 2,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Jugem', 2,)
                    .setNotSM3DW();
            }

        }('Lakitu\'s Cloud',);

        this.BOO =                                           new class Entities_Boo extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Teresa', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Teresa';
            }

        }('Boo',);
        this.STRETCH =                                       new class Entities_Stretch extends Entities {

            protected get _createUnusedImage(): PossibleUnusedImage {
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
        this.BOO_BUDDIES =                                   new class Entities_BooBuddies extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Teresa', 2,)
                    .setNotSM3DW();
            }

        }('Boo Buddies',);
        this.PEEPA =                                         new class Entities_Peepa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Teresa', 2,)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Teresa', 2,)
                    .setOnlySM3DW();
            }

        }('Peepa',);

        this.BOB_OMB =                                       new class Entities_BobOmb extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bombhei', 1,)
                    .setAsDifferentInSMBAndSMB3()
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Bombhei';
            }

        }('Bob-omb',);
        this.LIT_BOB_OMB =                                   new class Entities_LitBobOmb extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bombhei', 2,)
                    .setAllGameStyles();
            }

        }('Lit Bob-omb',);

        this.POKEY =                                         new class Entities_Pokey extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Sambo';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Sambo';
            }

        }('Pokey',);
        this.SNOW_POKEY =                                    new class Entities_SnowPokey extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Sambo', 1,)
                    .setAllGameStyles()
                    .setAsSnow();
            }

        }('Snow Pokey',);

        this.THWOMP =                                        new class Entities_Thwomp extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Dossun';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Dossun';
            }

        }('Thwomp',);

        this.MONTY_MOLE =                                    new class Entities_MontyMole extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('ChoroPoo',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('ChoroPoo',)
                    .setNotSM3DW();
            }

        }('Monty Mole',);
        this.ROCKY_WRENCH =                                  new class Entities_RockyWrench extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Poo',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Poo',)
                    .setNotSM3DW();
            }

        }('Rocky Wrench',);
        this.WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',);

        this.MAGIKOOPA =                                     new class Entities_Magikoopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Kameck';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Kameck';
            }

        }('Magikoopa',);
        this.MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',);

        this.HAMMER_BRO =                                    new class Entities_HammerBro extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bros', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Bros';
            }

        }('Hammer Bro',);
        this.SLEDGE_BRO =                                    new class Entities_SledgeBro extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MegaBros', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'MegaBros';
            }

        }('Sledge Bro',);
        this.HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',);
        this.FIRE_BRO =                                      new class Entities_FireBro extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bros', 2,)
                    .setOnlySM3DW();
            }

        }('Fire Bro',);
        this.HEAVY_FIRE_BRO =                                new class Entities_HeavyFireBro extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MegaBros', 2,)
                    .setOnlySM3DW();
            }

        }('Heavy Fire Bro',);
        this.FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',);

        this.LAVA_BUBBLE =                                   new class Entities_LavaBubble extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Bubble';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Bubble';
            }

        }('Lava Bubble',);

        this.MECHAKOOPA =                                    new class Entities_Mechakoopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaMecha', 1,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KoopaMecha',)
                    .setNotSM3DW();
            }

        }('Mechakoopa',);
        this.BLASTA_MECHAKOOPA =                             new class Entities_BlastaMechakoopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaMecha', 2,)
                    .setNotSM3DW();
            }

        }('Blasta Mechakoopa',);
        this.HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',);
        this.ZAPPA_MECHAKOOPA =                              new class Entities_ZappaMechakoopa extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaMecha', 3,)
                    .setNotSM3DW();
            }

        }('Zappa Mechakoopa',);
        this.ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',);

        this.CHARVAARGH =                                    new class Entities_Charvaargh extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MagmaFish',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('MagmaFish',)
                    .setOnlySM3DW();
            }

        }('Charvaargh',);

        this.BULLY =                                         new class Entities_Bully extends Entities {

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

        this.BILL_BLASTER =                                  new class Entities_BillBlaster extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KillerHoudai', 1,)
                    .setAllGameStyles()
                    .setAsDifferentInSMBAndSMB3();
            }

        }('Bill Blaster',);
        this.BULLET_BILL =                                   new class Entities_BulletBill extends Entities {

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'Killer';
            }

        }('Bullet Bill',);
        this.BULL_EYE_BLASTER =                              new class Entities_BullEyeBlaster extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KillerHoudai', 2,)
                    .setAllGameStyles();
            }

        }('Bull\'s-Eye Blaster',);
        this.BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',);
        this.CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',);

        this.BANZAI_BILL =                                   new class Entities_BanzaiBill extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MagnumKiller', 1,)
                    .setAllGameStyles()
                    .setAsDifferentInSMBAndSMB3();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'MagnumKiller';
            }

        }('Banzai Bill',);
        this.BULL_EYE_BANZAI =                               new class Entities_BullEyeBanzai extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MagnumKiller', 2,)
                    .setNotSM3DW();
            }

        }('Bull\'s-Eye Banzai',);
        this.CAT_BANZAI_BILL =                               new class Entities_CatBanzaiBill extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('MagnumKiller', 2,)
                    .setOnlySM3DW();
            }

        }('Cat Banzai Bill',);

        this.CANNON =                                        new class Entities_Cannon extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Houdai', 1,)
                    .setAsDifferentInSMBAndSMB3()
                    .setNotSM3DW();
            }

        }('Cannon',);
        this.CANNONBALL =                                    new class Entities_Cannonball extends Entities {

            protected get _createUnusedImage(): PossibleUnusedImage {
                return [
                    null,
                    new UnusedImage_BigMushroomBuilder('SenkanHoudai D',)
                        .setImage('senkan_houdai_ball',),
                ];
            }

        }('Cannonball',);
        this.RED_CANNON =                                    new class Entities_RedCannon extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Houdai', 2,)
                    .setNotSM3DW();
            }

        }('Red Cannon',);
        this.RED_CANNONBALL =                                new Entities('Red Cannonball',);

        this.BURNER =                                        new class Entities_Burner extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Burner',)
                    .setAmount(2)
                    .setNotSM3DW();
            }

        }('Burner',);

        this.FIRE_BAR =                                      new class Entities_FireBar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('FireBar',)
                    .setNotSM3DW();
            }

        }('Fire Bar',);

        this.SKEWER =                                        new class Entities_Skewer extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('TogeKonbo',)
                    .setAsDifferentInSMBAndSMB3()
                    .setNotSM3DW();
            }

        }('Skewer',);

        this.KOOPA_CLOWN_CAR =                               new class Entities_KoopaClownCar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaClown', 1,)
                    .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KoopaClown',)
                    .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
            }

            protected get _createUnusedImage(): PossibleUnusedImage {
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
        this.JUNIOR_CLOWN_CAR =                              new class Entities_JuniorClownCar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaClown', 1,)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KoopaClown',)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Junior Clown Car',);
        this.FIRE_KOOPA_CLOWN_CAR =                          new class Entities_FireKoopaClownCar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaClown', 2,)
                    .setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,);
            }

        }('Fire Koopa Clown Car',);
        this.FIRE_JUNIOR_CLOWN_CAR =                         new class Entities_FireJuniorClownCar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaClown', 2,)
                    .setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,);
            }

        }('Fire Junior Clown Car',);
        this.FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',);

        this.KOOPA_TROOPA_CAR =                              new class Entities_KoopaTroopaCar extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaCar',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KoopaCar',)
                    .setOnlySM3DW();
            }

        }('Koopa Troopa Car',);
        this.CAR =                                           new Entities('Car',);

        this.GRINDER =                                       new class Entities_Grinder extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Saw',)
                    .setNotSM3DW();
            }

        }('Grinder',);

        this.ANGRY_SUN =                                     new class Entities_AngrySun extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SunMoon', 1,)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('SunMoon',)
                    .setNotSM3DW();
            }

        }('Angry Sun',);
        this.MOON =                                          new class Entities_Moon extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SunMoon', 2,)
                    .setNotSM3DW();
            }

        }('Moon',);

        //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
        //region -------------------- Bosses + projectiles --------------------

        this.BOWSER =                                        new class Entities_Bowser extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Koopa',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Koopa',)
                    .setNotSM3DW();
            }

            protected get _createUnusedImage(): PossibleUnusedImage {
                return [
                    null,
                    new UnusedImage_BigMushroomBuilder('Koopa',)
                        .setImage('fire', [1,],),
                ];
            }

        }('Bowser',);
        this.MEOWSER =                                       new class Entities_Meowser extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Koopa',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Koopa',)
                    .setOnlySM3DW();
            }

        }('Meowser',);
        this.FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',);
        this.FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',);

        this.BOWSER_JR =                                     new class Entities_BowserJr extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('KoopaJr',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('KoopaJr',)
                    .setNotSM3DW();
            }

            protected get _createUnusedImage(): PossibleUnusedImage {
                return [
                    null,
                    new UnusedImage_BigMushroomBuilder('KoopaJr',)
                        .setImage('fire', [1,],),
                ];
            }

        }('Bowser Jr.',);
        this.FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',);

        this.BOOM_BOOM =                                     new class Entities_BoomBoom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bunbun', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Bunbun', 1,)
                    .setAllGameStyles();
            }

        }('Boom Boom',);
        this.POM_POM =                                       new class Entities_PomPom extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Bunbun', 2,)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Bunbun', 2,)
                    .setOnlySM3DW();
            }

        }('Pom Pom',);
        this.POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',);
        this.SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',);

        this.LARRY =                                         new class Entities_Larry extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Larry',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Larry',)
                    .setNotSM3DW();
            }

        }('Larry',);
        this.LARRY_WAND =                                    new Entities('Larry\'s Wand',);
        this.LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',);

        this.IGGY =                                          new class Entities_Iggy extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Iggy',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Iggy',)
                    .setNotSM3DW();
            }

        }('Iggy',);
        this.IGGY_WAND =                                     new Entities('Iggy\'s Wand',);
        this.IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',);

        this.WENDY =                                         new class Entities_Wendy extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Wendy',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Wendy',)
                    .setNotSM3DW();
            }

        }('Wendy',);
        this.WENDY_WAND =                                    new Entities('Wendy\'s Wand',);
        this.CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',);

        this.LEMMY =                                         new class Entities_Lemmy extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Lemmy',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Lemmy',)
                    .setNotSM3DW();
            }

        }('Lemmy',);
        this.LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',);
        this.MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',);

        this.ROY =                                           new class Entities_Roy extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Roy',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Roy',)
                    .setNotSM3DW();
            }

        }('Roy',);
        this.ROY_WAND =                                      new Entities('Roy\'s Wand',);
        this.ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',);

        this.MORTON =                                        new class Entities_Morton extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Morton',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Morton',)
                    .setNotSM3DW();
            }

        }('Morton',);
        this.MORTON_WAND =                                   new Entities('Morton\'s Wand',);
        this.MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',);
        this.MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',);

        this.LUDWIG =                                        new class Entities_Ludwig extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Ludwig',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Ludwig',)
                    .setNotSM3DW();
            }

        }('Ludwig',);
        this.LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',);
        this.LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',);

        //endregion -------------------- Bosses + projectiles --------------------
        //region -------------------- Passive gizmo / Key / Warp / Other --------------------

        this.BUMPER =                                        new class Entities_Bumper extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Marumaru',)
                    .setNotSM3DW();
            }

        }('Bumper',);

        this.SWINGING_CLAW =                                 new class Entities_SwingingClaw extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BurankoCrane',)
                    .setNotSM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BurankoCrane',)
                    .setNotSM3DW();
            }

        }('Swinging Claw',);

        this.TWISTER =                                       new class Entities_Twister extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Tornado';
            }

        }('Twister',);

        this.ONE_WAY_WALL =                                  new class Entities_OneWayWall extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Hanatari',)
                    .setNotSM3DW();
            }

        }('One-Way Wall',);

        this.TRACK =                                         new class Entities_Track extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Rail',)
                    .setNotSM3DW();
            }

        }('Track',);
        this.TRACK_BLOCK =                                   new class Entities_TrackBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('OrbitBlock',)
                    .setAmount(2)
                    .setOnlySM3DW();
            }

        }('Track Block',);

        this.VINE =                                          new class Entities_Vine extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('TsutaBlock',)
                    .setNotSM3DW();
            }

        }('Vine',);
        this.TREE =                                          new class Entities_Tree extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BellTree',)
                    .setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.FOREST,);
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('BellTree',)
                    .setOnlySM3DW();
            }

        }('Tree',);

        this.ARROW_SIGN =                                    new class Entities_ArrowSign extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Yajirushi';
            }

        }('Arrow Sign',);

        this.CHECKPOINT_FLAG =                               new class Entities_CheckpointFlag extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'MiddleFlag';
            }

        }('Checkpoint Flag',);
        this.GOAL_POLE =                                     new Entities('Goal Pole',);
        this.GOAL_WITH_CARDS =                               new Entities('Cards Roulette',);
        this.GIANT_GATE =                                    new Entities('Giant Gate',);

        this.DASH_BLOCK =                                    new class Entities_DashBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('DashBlock',)
                    .setOnlySM3DW();
            }

        }('Dash Block',);

        this.SNAKE_BLOCK =                                   new class Entities_SnakeBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SnakeBlock', 1,)
                    .setAllGameStyles();
            }

        }('Snake Block',);
        this.FAST_SNAKE_BLOCK =                              new class Entities_FastSnakeBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('SnakeBlock', 2,)
                    .setAllGameStyles();
            }

        }('Fast Snake Block',);

        this.CONVEYOR_BELT =                                 new class Entities_ConveyorBelt extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BeltConveyor', 1,)
                    .setAllGameStyles();
            }

        }('Conveyor Belt',);
        this.FAST_CONVEYOR_BELT =                            new class Entities_FastConveyorBelt extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('BeltConveyor', 2,)
                    .setAllGameStyles();
            }

        }('Fast Conveyor Belt',);

        this.MUSHROOM_TRAMPOLINE =                           new class Entities_MushroomTrampoline extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Trampoline',)
                    .setAmount(2)
                    .setOnlySM3DW();
            }

        }('Mushroom Trampoline',);
        this.ON_OFF_TRAMPOLINE =                             new class Entities_OnOffTrampoline extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('OnOffTrampoline',)
                    .setAmount(2)
                    .setOnlySM3DW();
            }

        }('ON/OFF Trampoline',);

        this.LIFT =                                          new class Entities_List extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Lift', 1,)
                    .setNotSM3DW();
            }

        }('Lift',);
        this.FLIMSY_LIFT =                                   new class Entities_FlimsyLift extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Lift', 2,)
                    .setNotSM3DW();
            }

        }('Flimsy Lift',);
        this.CLOUD_LIFT =                                    new class Entities_CloudLift extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Lift', 1,)
                    .setOnlySM3DW();
            }

        }('Cloud Lift',);

        this.SEESAW =                                        new class Entities_Seesaw extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Seesaw',)
                    .setNotSM3DW();
            }

        }('Seesaw',);

        this.LAVA_LIFT =                                     new class Entities_LavaLift extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('YouganLift', 1,)
                    .setNotSM3DW();
            }

        }('Lava Lift',);
        this.FAST_LAVA_LIFT =                                new class Entities_FastLavaLift extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('YouganLift', 2,)
                    .setNotSM3DW();
            }

        }('Fast Lava Lift',);

        this.CRATE =                                         new class Entities_Crate extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('WoodBox',)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('WoodBox',)
                    .setOnlySM3DW();
            }

        }('Crate',);

        this.KEY =                                           new class Entities_Key extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Key', 1,)
                    .setAllGameStyles();
            }

        }('Key',);
        this.CURSED_KEY =                                    new class Entities_CursedKey extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Key', 2,)
                    .setGameStyle(GameStyles.SUPER_MARIO_BROS);
            }

        }('Cursed Key',);
        this.PHANTO =                                        new class Entities_Phanto extends Entities {

        }('Phanto',);

        this.TRAMPOLINE =                                    new class Entities_Trampoline extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('JumpStep',)
                    .setAmount(2)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('JumpStep',)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_BROS,);
            }

        }('Trampoline',);
        this.HOP_CHOPS =                                     new class Entities_HopChops extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Hopper',)
                    .setOnlySM3DW();
            }

        }('Hop-Chops',);

        this.POW_BLOCK =                                     new class Entities_PowBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('PowBlock', 1,)
                    .setAllGameStyles();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('PowBlock', 1,)
                    .setAllGameStyles();
            }

        }('POW Block',);
        this.RED_POW_BLOCK =                                 new class Entities_RedPowBlock extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('PowBlock', 2,)
                    .setOnlySM3DW();
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('PowBlock', 2,)
                    .setOnlySM3DW();
            }

        }('Red POW Block',);

        this.P_SWITCH =                                      new class Entities_PSwitch extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'PSwitch';
            }

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return 'PSwitch';
            }

            protected get _createUnusedImage(): PossibleUnusedImage {
                return new UnusedImage_RegularBuilder('PSwitch',)
                    .setImage(GameStyles.SUPER_MARIO_BROS, 'wait', [0, 1, 2,],)
                    .setImage(GameStyles.NEW_SUPER_MARIO_BROS_U, 'down_switch_hatena_Alb', ['000', '004',],);
            }

        }('P Switch',);

        this.STONE =                                         new class Entities_Stone extends Entities {

            protected get _createClearConditionImage(): PossibleClearConditionImage {
                return new ClearConditionImageBuilder('Stone',)
                    .setNotGameStyle(GameStyles.SUPER_MARIO_BROS,);
            }

        }('Stone',);

        this.WARP_DOOR =                                     new class Entities_WarpDoor extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Door', 1,)
                    .setAllGameStyles();
            }

        }('Warp Door',);
        this.P_WARP_DOOR =                                   new class Entities_PWarpDoor extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Door', 2,)
                    .setAllGameStyles();
            }

        }('P Warp Door',);
        this.KEY_DOOR =                                      new class Entities_KeyDoor extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('Door', 3,)
                    .setAllGameStyles();
            }

        }('Key Door',);

        this.WARP_BOX =                                      new class Entities_WarpBox extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('WarpBox', 1,)
                    .setOnlySM3DW();
            }

        }('Warp Box',);
        this.WARP_BOX_WITH_KEY =                             new class Entities_WarpBoxWithKey extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return new EditorImageBuilder('WarpBox', 2,)
                    .setOnlySM3DW();
            }

        }('Warp Box (With Key)',);

        this.WING =                                          new class Entities_Wing extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'Wing';
            }

        }('Wing',);
        this.PARACHUTE =                                     new class Entities_Parachute extends Entities {

            protected get _createEditorImage(): PossibleEditorImage {
                return 'parachute';
            }

        }('Parachute',);
        this.BUBBLE =                                        new Entities('Bubble',);

        //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Entities;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>;

    #reference?: Entity;
    readonly #englishNameContainer;
    #editorImage?: EditorImage;
    #clearConditionImage?: ClearConditionImage;
    #whilePlayingImage?: InGameImage;
    #unusedImages?: UnusedImages;
    #editorVoiceSound?: EditorVoiceSound;

    //endregion -------------------- Attributes --------------------

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

    //region -------------------- editor image --------------------

    /**
     * Get the editor image in a string form or in a builder form.
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createEditorImage(): PossibleEditorImage {
        return null;
    }

    public get editorImage(): EditorImage {
        return this.#editorImage ??= EditorImageFactory.create(this._createEditorImage);
    }

    //endregion -------------------- editor image --------------------

    public get editorVoiceSound(): EditorVoiceSound {
        return this.#editorVoiceSound ??= EditorVoices.getValue(this)?.editorVoiceSound ?? EmptyEditorVoiceSound.get;
    }

    //region -------------------- clear condition image --------------------

    /**
     * Get the clear condition image in a string form or in a builder form.
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createClearConditionImage(): PossibleClearConditionImage {
        return null;
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage ??= ClearConditionImageFactory.create(this._createClearConditionImage);
    }

    //endregion -------------------- clear condition image --------------------
    //region -------------------- while playing image --------------------

    /**
     * Get the "in game" image in a string form or in a builder form.
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createInGameImage(): PossibleInGameImage {
        return null;
    }

    public get inGameImage(): InGameImage {
        return this.#whilePlayingImage ??= InGameImageFactory.create(this._createInGameImage);
    }

    //endregion -------------------- while playing image --------------------
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

    protected get _static(): StaticReference<Entities> {
        return Entities;
    }

    //region -------------------- Enum value methods --------------------

    public static _getValueByString(value: string,) {
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
