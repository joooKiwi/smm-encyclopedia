import type {ClassWithEditorVoiceSound}                                                                                                                                                                  from './ClassWithEditorVoiceSound';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EditorVoices.types';
import type {Enumerable}                                                                                                                                                                                 from '../../util/enum/Enumerable';
import type {EntityReferenceHolder, PossibleEntityReferences_Received}                                                                                                                                   from './holder/EntityReferenceHolder';
import type {EditorVoiceSound, PossibleSoundReceivedOnFactory}                                                                                                                                           from './EditorVoiceSound';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {ObjectHolder}                                                                                                                                                                               from '../../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer}                from '../../util/holder/DelayedObjectHolder.container';
import {EditorVoiceSoundFactory}                     from './EditorVoiceSound.factory';
import {EditorVoiceSoundHolderWithSingingPartBefore} from './holder/EditorVoiceSoundHolderWithSingingPartBefore';
import {EditorVoiceSoundHolderWithVoiceBefore}       from './holder/EditorVoiceSoundHolderWithVoiceBefore';
import type {Entities}                               from '../entity/Entities';
import {EntityReferenceHolderContainer}              from './holder/EntityReferenceHolder.container';
import {Enum}                                        from '../../util/enum/Enum';
import {Import}                                      from '../../util/DynamicImporter';
import {StringContainer}                             from '../../util/StringContainer';

/**
 * @recursiveReference {@link Entities}
 * @classWithDynamicImport {@link Entities}
 */
export class EditorVoices
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithEditorVoiceSound {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static/* readonly*/ GROUND;
    public static/* readonly*/ START_GROUND;
    public static/* readonly*/ GOAL_GROUND;
    public static/* readonly*/ STEEP_SLOPE;
    public static/* readonly*/ GENTLE_SLOPE;

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

    public static/* readonly*/ BLOCK;

    public static/* readonly*/ HARD_BLOCK;

    public static/* readonly*/ QUESTION_MARK_BLOCK;
    public static/* readonly*/ HIDDEN_BLOCK;

    public static/* readonly*/ EXCLAMATION_MARK_BLOCK;

    public static/* readonly*/ NOTE_BLOCK;

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
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static/* readonly*/ SUPER_MUSHROOM;
    public static/* readonly*/ SUPER_MARIO;
    public static/* readonly*/ SUPER_LUIGI;
    public static/* readonly*/ SUPER_TOAD;
    public static/* readonly*/ SUPER_TOADETTE;

    public static/* readonly*/ FIRE_FLOWER;
    public static/* readonly*/ FIRE_MARIO;
    public static/* readonly*/ FIRE_LUIGI;
    public static/* readonly*/ FIRE_TOAD;
    public static/* readonly*/ FIRE_TOADETTE;

    public static/* readonly*/ SUPERBALL_FLOWER;
    public static/* readonly*/ SUPERBALL_MARIO;
    public static/* readonly*/ SUPERBALL_LUIGI;
    public static/* readonly*/ SUPERBALL_TOAD;
    public static/* readonly*/ SUPERBALL_TOADETTE;

    public static/* readonly*/ MYSTERY_MUSHROOM;
    public static/* readonly*/ COSTUME_MARIO;

    public static/* readonly*/ WEIRD_MUSHROOM;
    public static/* readonly*/ WEIRD_MARIO;

    public static/* readonly*/ MASTER_SWORD;
    public static/* readonly*/ LINK;

    public static/* readonly*/ BIG_MUSHROOM_SMM1;
    public static/* readonly*/ BIG_MUSHROOM_SMM2;
    public static/* readonly*/ BIG_MARIO;
    public static/* readonly*/ BIG_LUIGI;
    public static/* readonly*/ BIG_TOAD;
    public static/* readonly*/ BIG_TOADETTE;

    public static/* readonly*/ SMB2_MUSHROOM;
    public static/* readonly*/ SMB2_MARIO;
    public static/* readonly*/ SMB2_LUIGI;
    public static/* readonly*/ SMB2_TOAD;
    public static/* readonly*/ SMB2_TOADETTE;

    public static/* readonly*/ SUPER_LEAF;
    public static/* readonly*/ RACCOON_MARIO;
    public static/* readonly*/ RACCOON_LUIGI;
    public static/* readonly*/ RACCOON_TOAD;
    public static/* readonly*/ RACCOON_TOADETTE;

    public static/* readonly*/ FROG_SUIT;
    public static/* readonly*/ FROG_MARIO;
    public static/* readonly*/ FROG_LUIGI;
    public static/* readonly*/ FROG_TOAD;
    public static/* readonly*/ FROG_TOADETTE;

    public static/* readonly*/ CAPE_FEATHER;
    public static/* readonly*/ CAPE_MARIO;
    public static/* readonly*/ CAPE_LUIGI;
    public static/* readonly*/ CAPE_TOAD;
    public static/* readonly*/ CAPE_TOADETTE;

    public static/* readonly*/ POWER_BALLOON;
    public static/* readonly*/ BALLOON_MARIO;
    public static/* readonly*/ BALLOON_LUIGI;
    public static/* readonly*/ BALLOON_TOAD;
    public static/* readonly*/ BALLOON_TOADETTE;

    public static/* readonly*/ PROPELLER_MUSHROOM;
    public static/* readonly*/ PROPELLER_MARIO;
    public static/* readonly*/ PROPELLER_LUIGI;
    public static/* readonly*/ PROPELLER_TOAD;
    public static/* readonly*/ PROPELLER_TOADETTE;

    public static/* readonly*/ SUPER_ACORN;
    public static/* readonly*/ FLYING_SQUIRREL_MARIO;
    public static/* readonly*/ FLYING_SQUIRREL_LUIGI;
    public static/* readonly*/ FLYING_SQUIRREL_TOAD;
    public static/* readonly*/ FLYING_SQUIRREL_TOADETTE;

    public static/* readonly*/ SUPER_BELL;
    public static/* readonly*/ CAT_MARIO;
    public static/* readonly*/ CAT_LUIGI;
    public static/* readonly*/ CAT_TOAD;
    public static/* readonly*/ CAT_TOADETTE;

    public static/* readonly*/ SUPER_HAMMER;
    public static/* readonly*/ BUILDER_MARIO;
    public static/* readonly*/ BUILDER_LUIGI;
    public static/* readonly*/ BUILDER_TOAD;
    public static/* readonly*/ BUILDER_TOADETTE;

    public static/* readonly*/ BOOMERANG_FLOWER;
    public static/* readonly*/ BOOMERANG_MARIO;
    public static/* readonly*/ BOOMERANG_LUIGI;
    public static/* readonly*/ BOOMERANG_TOAD;
    public static/* readonly*/ BOOMERANG_TOADETTE;

    public static/* readonly*/ CANNON_BOX;
    public static/* readonly*/ PROPELLER_BOX;
    public static/* readonly*/ GOOMBA_MASK;
    public static/* readonly*/ BULLET_BILL_MASK;
    public static/* readonly*/ RED_POW_BOX;

    public static/* readonly*/ SUPER_STAR;

    public static/* readonly*/ ONE_UP_MUSHROOM;
    public static/* readonly*/ ROTTEN_MUSHROOM;

    public static/* readonly*/ SHOE_GOOMBA;
    public static/* readonly*/ STILETTO_GOOMBA;
    public static/* readonly*/ YOSHI_EGG;
    public static/* readonly*/ RED_YOSHI_EGG;

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static/* readonly*/ GOOMBA;
    public static/* readonly*/ GALOOMBA;
    public static/* readonly*/ GOOMBRAT;
    public static/* readonly*/ GOOMBUD;

    public static/* readonly*/ KOOPA_TROOPA;

    public static/* readonly*/ DRY_BONES;
    public static/* readonly*/ DRY_BONES_SHELL;

    public static/* readonly*/ BUZZY_BEETLE;

    public static/* readonly*/ SPINY;

    public static/* readonly*/ SPIKE_TOP;

    public static/* readonly*/ SKIPSQUEAK;
    public static/* readonly*/ SPINY_SKIPSQUEAK;

    public static/* readonly*/ ANT_TROOPER;
    public static/* readonly*/ HORNED_ANT_TROOPER;

    public static/* readonly*/ STINGBY;

    public static/* readonly*/ CHEEP_CHEEP;
    public static/* readonly*/ FISH_BONE;

    public static/* readonly*/ BLOOPER;
    public static/* readonly*/ BLOOPER_NANNY;

    public static/* readonly*/ PORCUPUFFER;

    public static/* readonly*/ WIGGLER;
    public static/* readonly*/ ANGRY_WIGGLER;

    public static/* readonly*/ PIRANHA_PLANT;
    public static/* readonly*/ JUMPING_PIRANHA_PLANT;
    public static/* readonly*/ FIRE_PIRANHA_PLANT;
    public static/* readonly*/ MUNCHER;
    public static/* readonly*/ PIRANHA_CREEPER;

    public static/* readonly*/ CHAIN_CHOMP;
    public static/* readonly*/ UNCHAINED_CHOMP;

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

    public static/* readonly*/ MAGIKOOPA;

    public static/* readonly*/ HAMMER_BRO;
    public static/* readonly*/ SLEDGE_BRO;
    public static/* readonly*/ FIRE_BRO;
    public static/* readonly*/ HEAVY_FIRE_BRO;

    public static/* readonly*/ LAVA_BUBBLE;

    public static/* readonly*/ MECHAKOOPA;
    public static/* readonly*/ BLASTA_MECHAKOOPA;
    public static/* readonly*/ ZAPPA_MECHAKOOPA;

    public static/* readonly*/ CHARVAARGH;

    public static/* readonly*/ BULLY;

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static/* readonly*/ BILL_BLASTER;
    public static/* readonly*/ BULL_EYE_BLASTER;

    public static/* readonly*/ BANZAI_BILL;
    public static/* readonly*/ BULL_EYE_BANZAI;

    public static/* readonly*/ CANNON;
    public static/* readonly*/ RED_CANNON;

    public static/* readonly*/ BURNER;

    public static/* readonly*/ FIRE_BAR;

    public static/* readonly*/ SKEWER;

    public static/* readonly*/ KOOPA_CLOWN_CAR;
    public static/* readonly*/ JUNIOR_CLOWN_CAR;
    public static/* readonly*/ FIRE_KOOPA_CLOWN_CAR;
    public static/* readonly*/ FIRE_JUNIOR_CLOWN_CAR;

    public static/* readonly*/ KOOPA_TROOPA_CAR;

    public static/* readonly*/ GRINDER;

    public static/* readonly*/ SUN;
    public static/* readonly*/ MOON;

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static/* readonly*/ BOWSER;
    public static/* readonly*/ MEOWSER;

    public static/* readonly*/ BOWSER_JR;

    public static/* readonly*/ BOOM_BOOM;
    public static/* readonly*/ POM_POM;

    public static/* readonly*/ LARRY;
    public static/* readonly*/ IGGY;
    public static/* readonly*/ WENDY;
    public static/* readonly*/ LEMMY;
    public static/* readonly*/ ROY;
    public static/* readonly*/ MORTON;
    public static/* readonly*/ LUDWIG;

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

    public static/* readonly*/ TRAMPOLINE;
    public static/* readonly*/ HOP_CHOPS;

    public static/* readonly*/ POW_BLOCK;
    public static/* readonly*/ RED_POW_BLOCK;

    public static/* readonly*/ P_SWITCH;

    public static/* readonly*/ WARP_DOOR;
    public static/* readonly*/ P_WARP_DOOR;
    public static/* readonly*/ KEY_DOOR;

    public static/* readonly*/ WARP_BOX;
    public static/* readonly*/ WARP_BOX_WITH_KEY;

    public static/* readonly*/ WING;

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    static {
        //region -------------------- Ground / Pipe / Spike / Platform --------------------

        this.GROUND =                   new EditorVoices('Ground',                   () => new EditorVoiceSoundHolderWithVoiceBefore('ground',),);
        this.START_GROUND =             new EditorVoices('Start Ground',             () => new EditorVoiceSoundHolderWithVoiceBefore('startground',),);
        this.GOAL_GROUND =              new EditorVoices('Goal Ground',              () => new EditorVoiceSoundHolderWithVoiceBefore('goalground',),);
        this.STEEP_SLOPE =              new EditorVoices('Steep Slope',              () => new EditorVoiceSoundHolderWithSingingPartBefore('steepslope',),);
        this.GENTLE_SLOPE =             new EditorVoices('Gentle Slope',             () => new EditorVoiceSoundHolderWithSingingPartBefore('gentleslope',),);

        this.PIPE =                     new EditorVoices('Pipe',                     () => new EditorVoiceSoundHolderWithVoiceBefore('pipe',),);
        this.CLEAR_PIPE =               new EditorVoices('Clear Pipe',               () => new EditorVoiceSoundHolderWithSingingPartBefore('ClearPipe',),);

        this.SPIKE_TRAP =               new EditorVoices('Spike Trap',               () => new EditorVoiceSoundHolderWithVoiceBefore('spiketrap',),);
        this.JELECTRO =                 new EditorVoices('Jelectro',                 () => new EditorVoiceSoundHolderWithVoiceBefore('jellelectro',),);
        this.SEA_URCHIN =               new EditorVoices('Sea Urchin',               () => new EditorVoiceSoundHolderWithVoiceBefore('seaechinus',),);
        this.SPIKE_BLOCK =              new EditorVoices('Spike Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBlock',),);

        this.MUSHROOM_PLATFORM =        new EditorVoices('Mushroom Platform',        () => new EditorVoiceSoundHolderWithVoiceBefore('mushroomplatform',),);
        this.SEMISOLID_PLATFORM =       new EditorVoices('Semisolid Platform',       () => new EditorVoiceSoundHolderWithVoiceBefore('semisolidplatform',),);
        this.BRIDGE =                   new EditorVoices('Bridge',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bridge',),);

        //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
        //region -------------------- Block / Coin --------------------

        this.BLOCK =                    new class EditorVoices_Block extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.BRICK_BLOCK, Import.Entities.CRISTAL_BLOCK, Import.Entities.ROTATING_BLOCK,];
                }

            }('Block', () => new EditorVoiceSoundHolderWithVoiceBefore('block',),);

        this.HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.HARD_BLOCK, Import.Entities.ROCK_BLOCK,];
                }

            }('Hard Block', () => new EditorVoiceSoundHolderWithVoiceBefore('hardblock',),);

        this.QUESTION_MARK_BLOCK =      new EditorVoices('? Block',                  () => new EditorVoiceSoundHolderWithVoiceBefore('questionblock',),);
        this.HIDDEN_BLOCK =             new EditorVoices('Hidden Block',             () => new EditorVoiceSoundHolderWithVoiceBefore('hiddenblock',),);

        this.EXCLAMATION_MARK_BLOCK =   new EditorVoices('! Block',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('!Block',),);

        this.NOTE_BLOCK =               new EditorVoices('Note Block',               () => new EditorVoiceSoundHolderWithVoiceBefore('noteblock',),);

        this.DONUT_BLOCK =              new EditorVoices('Donut Block',              () => new EditorVoiceSoundHolderWithVoiceBefore('donutblock',),);

        this.CLOUD_BLOCK =              new EditorVoices('Cloud Block',              () => new EditorVoiceSoundHolderWithVoiceBefore('cloudblock',),);

        this.ON_OFF_SWITCH =            new EditorVoices('ON/OFF Switch',            () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFswitch',),);
        this.DOTTED_LINE_BLOCK =        new EditorVoices('Dotted-Line Block',        () => new EditorVoiceSoundHolderWithSingingPartBefore('Dotted-LineBlock_nr',),);

        this.P_BLOCK =                  new EditorVoices('P Block',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('PBlock',),);

        this.BLINKING_BLOCK =           new EditorVoices('Blinking Block',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BlinkingBlock',),);

        this.ICE_BLOCK =                new EditorVoices('Ice Block',                () => new EditorVoiceSoundHolderWithVoiceBefore('iceblock2',),);
        this.ICICLE =                   new EditorVoices('Icicle',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('icicle',),);

        this.COIN =                     new EditorVoices('Coin',                     () => new EditorVoiceSoundHolderWithVoiceBefore('coin',),);
        this.FROZEN_COIN =              new EditorVoices('Frozen Coin',              () => new EditorVoiceSoundHolderWithSingingPartBefore('FrozenCoin',),);
        this.TEN_COIN =                 new EditorVoices('10-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('10-Coin',),);
        this.THIRTY_COIN =              new EditorVoices('30-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('30-Coin',),);
        this.FIFTY_COIN =               new EditorVoices('50-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('50-Coin',),);
        this.PINK_COIN =                new EditorVoices('Pink Coin',                () => new EditorVoiceSoundHolderWithSingingPartBefore('pinkcoin',),);

        //endregion -------------------- Block / Coin --------------------
        //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

        this.SUPER_MUSHROOM =           new EditorVoices('Super Mushroom',           () => new EditorVoiceSoundHolderWithVoiceBefore('supermushroom',),);
        this.SUPER_MARIO =              new EditorVoices('Super Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('supermario',),);
        this.SUPER_LUIGI =              new EditorVoices('Super Luigi',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperLuigi',),);
        this.SUPER_TOAD =               new EditorVoices('Super Toad',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToad',),);
        this.SUPER_TOADETTE =           new EditorVoices('Super Toadette',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToadette',),);

        this.FIRE_FLOWER =              new EditorVoices('Fire Flower',              () => new EditorVoiceSoundHolderWithVoiceBefore('fireflower',),);
        this.FIRE_MARIO =               new EditorVoices('Fire Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('firemario',),);
        this.FIRE_LUIGI =               new EditorVoices('Fire Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FireLuigi',),);
        this.FIRE_TOAD =                new EditorVoices('Fire Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToad',),);
        this.FIRE_TOADETTE =            new EditorVoices('Fire Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToadette',),);

        this.SUPERBALL_FLOWER =         new EditorVoices('Superball Flower',         () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballFlower',),);
        this.SUPERBALL_MARIO =          new EditorVoices('Superball Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballMario',),);
        this.SUPERBALL_LUIGI =          new EditorVoices('Superball Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballLuigi',),);
        this.SUPERBALL_TOAD =           new EditorVoices('Superball Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToad',),);
        this.SUPERBALL_TOADETTE =       new EditorVoices('Superball Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToadette',),);

        this.MYSTERY_MUSHROOM =         new EditorVoices('Mystery Mushroom',         () => new EditorVoiceSoundHolderWithVoiceBefore('mysterymushroom',),);
        this.COSTUME_MARIO =            new EditorVoices('Costume Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('costumemario',),);

        this.WEIRD_MUSHROOM =           new EditorVoices('Weird Mushroom',           () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmashroom',),);
        this.WEIRD_MARIO =              new EditorVoices('Weird Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmario',),);

        this.MASTER_SWORD =             new EditorVoices('Master Sword',             () => new EditorVoiceSoundHolderWithSingingPartBefore('MasterSword',),);
        this.LINK =                     new EditorVoices('Link',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Link',),);

        this.BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.BIG_MUSHROOM_CLASSIC, Import.Entities.BIG_MUSHROOM_MODERN,];
                }

            }('Big Mushroom (SMM1)', () => new EditorVoiceSoundHolderWithVoiceBefore('bigmashroom',),);
        this.BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.BIG_MUSHROOM,];
                }

            }('Big Mushroom (SMM2)', () => new EditorVoiceSoundHolderWithSingingPartBefore('BigMushroom',),);
        this.BIG_MARIO =                new EditorVoices('Big Mario',                () => new EditorVoiceSoundHolderWithVoiceBefore('bigmario',),);
        this.BIG_LUIGI =                new EditorVoices('Big Luigi',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BigLuigi',),);
        this.BIG_TOAD =                 new EditorVoices('Big Toad',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToad',),);
        this.BIG_TOADETTE =             new EditorVoices('Big Toadette',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToadette',),);

        this.SMB2_MUSHROOM =            new EditorVoices('SMB2 Mushroom',            () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mushroom',),);
        this.SMB2_MARIO =               new EditorVoices('SMB2 Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mario',),);
        this.SMB2_LUIGI =               new EditorVoices('SMB2 Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Luigi',),);
        this.SMB2_TOAD =                new EditorVoices('SMB2 Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toad',),);
        this.SMB2_TOADETTE =            new EditorVoices('SMB2 Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toadette',),);

        this.SUPER_LEAF =               new EditorVoices('Super Leaf',               () => new EditorVoiceSoundHolderWithVoiceBefore('superleaf',),);
        this.RACCOON_MARIO =            new EditorVoices('Raccoon Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('lacoonmario',),);
        this.RACCOON_LUIGI =            new EditorVoices('Raccoon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonLuigi',),);
        this.RACCOON_TOAD =             new EditorVoices('Raccoon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonToad',),);
        this.RACCOON_TOADETTE =         new EditorVoices('Raccoon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonToadette',),);

        this.FROG_SUIT =                new EditorVoices('Frog Suit',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogSuit',),);
        this.FROG_MARIO =               new EditorVoices('Frog Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogMario',),);
        this.FROG_LUIGI =               new EditorVoices('Frog Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogLuigi',),);
        this.FROG_TOAD =                new EditorVoices('Frog Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToad',),);
        this.FROG_TOADETTE =            new EditorVoices('Frog Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToadette',),);

        this.CAPE_FEATHER =             new EditorVoices('Cape Feather',             () => new EditorVoiceSoundHolderWithVoiceBefore('capefeather',),);
        this.CAPE_MARIO =               new EditorVoices('Cape Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('capemario',),);
        this.CAPE_LUIGI =               new EditorVoices('Cape Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeLuigi',),);
        this.CAPE_TOAD =                new EditorVoices('Cape Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToad',),);
        this.CAPE_TOADETTE =            new EditorVoices('Cape Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToadette',),);

        this.POWER_BALLOON =            new EditorVoices('Power Balloon',            () => new EditorVoiceSoundHolderWithSingingPartBefore('PowerBalloon',),);
        this.BALLOON_MARIO =            new EditorVoices('Balloon Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonMario',),);
        this.BALLOON_LUIGI =            new EditorVoices('Balloon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonLuigi',),);
        this.BALLOON_TOAD =             new EditorVoices('Balloon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToad',),);
        this.BALLOON_TOADETTE =         new EditorVoices('Balloon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToadette',),);

        this.PROPELLER_MUSHROOM =       new EditorVoices('Propeller Mushroom',       () => new EditorVoiceSoundHolderWithVoiceBefore('propellermushroom',),);
        this.PROPELLER_MARIO =          new EditorVoices('Propeller Mario',          () => new EditorVoiceSoundHolderWithVoiceBefore('propellermario',),);
        this.PROPELLER_LUIGI =          new EditorVoices('Propeller Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerLuigi',),);
        this.PROPELLER_TOAD =           new EditorVoices('Propeller Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToad',),);
        this.PROPELLER_TOADETTE =       new EditorVoices('Propeller Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToadette',),);

        this.SUPER_ACORN =              new EditorVoices('Super Acorn',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperAcorn',),);
        this.FLYING_SQUIRREL_MARIO =    new EditorVoices('Flying Squirrel Mario',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelMario',),);
        this.FLYING_SQUIRREL_LUIGI =    new EditorVoices('Flying Squirrel Luigi',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelLuigi',),);
        this.FLYING_SQUIRREL_TOAD =     new EditorVoices('Flying Squirrel Toad',     () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToad',),);
        this.FLYING_SQUIRREL_TOADETTE = new EditorVoices('Flying Squirrel Toadette', () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToadette',),);

        this.SUPER_BELL =               new EditorVoices('Super Bell',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperBell',),);
        this.CAT_MARIO =                new EditorVoices('Cat Mario',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatMario',),);
        this.CAT_LUIGI =                new EditorVoices('Cat Luigi',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatLuigi',),);
        this.CAT_TOAD =                 new EditorVoices('Cat Toad',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToad',),);
        this.CAT_TOADETTE =             new EditorVoices('Cat Toadette',             () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToadette',),);

        this.SUPER_HAMMER =             new EditorVoices('Super Hammer',             () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperHammer',),);
        this.BUILDER_MARIO =            new EditorVoices('Builder Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderMario',),);
        this.BUILDER_LUIGI =            new EditorVoices('Builder Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderLuigi',),);
        this.BUILDER_TOAD =             new EditorVoices('Builder Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToad',),);
        this.BUILDER_TOADETTE =         new EditorVoices('Builder Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToadette',),);

        this.BOOMERANG_FLOWER =         new EditorVoices('Boomerang Flower',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangFlower',),);
        this.BOOMERANG_MARIO =          new EditorVoices('Boomerang Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangMario',),);
        this.BOOMERANG_LUIGI =          new EditorVoices('Boomerang Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangLuigi',),);
        this.BOOMERANG_TOAD =           new EditorVoices('Boomerang Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToad',),);
        this.BOOMERANG_TOADETTE =       new EditorVoices('Boomerang Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToadette',),);

        this.CANNON_BOX =               new EditorVoices('Cannon Box',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CannonBox',),);
        this.PROPELLER_BOX =            new EditorVoices('Propeller Box',            () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerBox',),);
        this.GOOMBA_MASK =              new EditorVoices('Goomba Mask',              () => new EditorVoiceSoundHolderWithSingingPartBefore('GoombaMask',),);
        this.BULLET_BILL_MASK =         new EditorVoices('Bullet Bill Mask',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BulletBillMask',),);
        this.RED_POW_BOX =              new EditorVoices('Red POW Box',              () => new EditorVoiceSoundHolderWithSingingPartBefore('RedPOWBox',),);

        this.SUPER_STAR =               new EditorVoices('Super Star',               () => new EditorVoiceSoundHolderWithVoiceBefore('superstar',),);

        this.ONE_UP_MUSHROOM =          new EditorVoices('1-Up Mushroom',            () => new EditorVoiceSoundHolderWithVoiceBefore('oneupmushroom',),);
        this.ROTTEN_MUSHROOM =          new EditorVoices('Rotten Mushroom',          () => new EditorVoiceSoundHolderWithSingingPartBefore('RottenMushroom',),);

        this.SHOE_GOOMBA =              new EditorVoices('Shoe Goomba',              () => new EditorVoiceSoundHolderWithVoiceBefore('shoegoomba',),);
        this.STILETTO_GOOMBA =          new EditorVoices('Stiletto Goomba',          () => new EditorVoiceSoundHolderWithVoiceBefore('stilettogoomba',),);
        this.YOSHI_EGG =                new EditorVoices('Yoshi\'s Egg',             () => new EditorVoiceSoundHolderWithVoiceBefore('yoshiegg',),);
        this.RED_YOSHI_EGG =            new EditorVoices('Red Yoshi\'s Egg',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BigRedYoshisEgg',),);

        //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
        //region -------------------- General enemies --------------------

        this.GOOMBA =                   new EditorVoices('Goomba',                   () => new EditorVoiceSoundHolderWithVoiceBefore('goomba',),);
        this.GALOOMBA =                 new EditorVoices('Galoomba',                 () => new EditorVoiceSoundHolderWithVoiceBefore('galoomba',),);
        this.GOOMBRAT =                 new EditorVoices('Goombrat',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombrat',),);
        this.GOOMBUD =                  new EditorVoices('Goombud',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombud',),);

        this.KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.GREEN_KOOPA_TROOPA, Import.Entities.RED_KOOPA_TROOPA,];
                }

            }('Koopa Troopa', () => new EditorVoiceSoundHolderWithVoiceBefore('koopatrooper',),);

        this.DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.DRY_BONES, Import.Entities.PARABONES,];
                }

            }('Dry Bones', () => new EditorVoiceSoundHolderWithVoiceBefore('drybones',),);
        this.DRY_BONES_SHELL =          new EditorVoices('Dry Bones Shell',          () => new EditorVoiceSoundHolderWithSingingPartBefore('DryBonesShell',),);

        this.BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.BUZZY_BEETLE, Import.Entities.PARA_BEETLE, Import.Entities.BUZZY_SHELL,];
                }

            }('Buzzy Beetle', () => new EditorVoiceSoundHolderWithVoiceBefore('buzzybeatle',),);

        this.SPINY =                    new class EditorVoices_Spiny extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.SPINY, Import.Entities.WINGED_SPINY, Import.Entities.SPINY_EGG, Import.Entities.SPINY_SHELL,];
                }

            }('Spiny', () => new EditorVoiceSoundHolderWithVoiceBefore('spiny',),);

        this.SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.SPIKE_TOP, Import.Entities.WINGED_SPIKE_TOP, Import.Entities.FAST_SPIKE_TOP, Import.Entities.FAST_WINGED_SPIKE_TOP,];
                }

            }('Spike Top', () => new EditorVoiceSoundHolderWithVoiceBefore('spiketop',),);

        this.SKIPSQUEAK =               new EditorVoices('Skipsqueak',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Skipsqueak',),);
        this.SPINY_SKIPSQUEAK =         new EditorVoices('Spiny Skipsqueak',         () => new EditorVoiceSoundHolderWithSingingPartBefore('SpinySkipsqueak',),);

        this.ANT_TROOPER =              new EditorVoices('Ant Trooper',              () => new EditorVoiceSoundHolderWithSingingPartBefore('AntTrooper',),);
        this.HORNED_ANT_TROOPER =       new EditorVoices('Horned Ant Trooper',       () => new EditorVoiceSoundHolderWithSingingPartBefore('HornedAntTrooper',),);

        this.STINGBY =                  new EditorVoices('Stingby',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Stingby',),);

        this.CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.CHEEP_CHEEP, Import.Entities.BLURPS, Import.Entities.DEEP_CHEEP,];
                }

            }('Cheep Cheep', () => new EditorVoiceSoundHolderWithVoiceBefore('cheapcheap',),);
        this.FISH_BONE =                new EditorVoices('Fish Bone',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FishBones',),);

        this.BLOOPER =                  new EditorVoices('Blooper',                  () => new EditorVoiceSoundHolderWithVoiceBefore('blooper',),);
        this.BLOOPER_NANNY =            new EditorVoices('Blooper Nanny',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BlooperNanny',),);

        this.PORCUPUFFER =              new EditorVoices('Porcupuffer',              () => new EditorVoiceSoundHolderWithSingingPartBefore('Porcupuffer',),);

        this.WIGGLER =                  new EditorVoices('Wiggler',                  () => new EditorVoiceSoundHolderWithVoiceBefore('wiggler',),);
        this.ANGRY_WIGGLER =            new EditorVoices('Angry Wiggler',            () => new EditorVoiceSoundHolderWithSingingPartBefore('AngryWiggler',),);

        this.PIRANHA_PLANT =            new EditorVoices('Piranha Plant',            () => new EditorVoiceSoundHolderWithVoiceBefore('piranhaplant',),);
        this.JUMPING_PIRANHA_PLANT =    new EditorVoices('Jumping Piranha Plant',    () => new EditorVoiceSoundHolderWithVoiceBefore('jumpingpiranhaplant',),);
        this.FIRE_PIRANHA_PLANT =       new EditorVoices('Fire Piranha Plant',       () => new EditorVoiceSoundHolderWithVoiceBefore('firepiranhaplant',),);
        this.MUNCHER =                  new EditorVoices('Muncher',                  () => new EditorVoiceSoundHolderWithVoiceBefore('monchar',),);
        this.PIRANHA_CREEPER =          new EditorVoices('Piranha Creeper',          () => new EditorVoiceSoundHolderWithSingingPartBefore('PiranhaCreeper',),);

        this.CHAIN_CHOMP =              new EditorVoices('Chain Chomp',              () => new EditorVoiceSoundHolderWithVoiceBefore('chainchomp',),);
        this.UNCHAINED_CHOMP =          new EditorVoices('Unchained Chomp',          () => new EditorVoiceSoundHolderWithSingingPartBefore('UnchainedChomp',),);

        this.SPIKE =                    new EditorVoices('Spike',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Spike',),);
        this.SPIKE_BALL =               new EditorVoices('Spike Ball',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBall',),);
        this.SNOWBALL =                 new EditorVoices('Snowball',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowBall',),);

        this.LAKITU =                   new EditorVoices('Lakitu',                   () => new EditorVoiceSoundHolderWithVoiceBefore('lakitu',),);
        this.LAKITU_CLOUD =             new EditorVoices('Lakitu\'s Cloud',          () => new EditorVoiceSoundHolderWithVoiceBefore('lakitucloud',),);

        this.BOO =                      new EditorVoices('Boo',                      () => new EditorVoiceSoundHolderWithVoiceBefore('boo',),);
        this.STRETCH =                  new EditorVoices('Stretch',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Stretch',),);
        this.BOO_BUDDIES =              new EditorVoices('Boo Buddies',              () => new EditorVoiceSoundHolderWithVoiceBefore('boobuddies',),);
        this.PEEPA =                    new EditorVoices('Peepa',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Peepa',),);

        this.BOB_OMB =                  new EditorVoices('Bob-omb',                  () => new EditorVoiceSoundHolderWithVoiceBefore('bombomb',),);
        this.LIT_BOB_OMB =              new EditorVoices('Lit Bob-omb',              () => new EditorVoiceSoundHolderWithSingingPartBefore('litBob-omb',),);

        this.POKEY =                    new EditorVoices('Pokey',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Pokey',),);
        this.SNOW_POKEY =               new EditorVoices('Snow Pokey',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowPokey',),);

        this.THWOMP =                   new EditorVoices('Thwomp',                   () => new EditorVoiceSoundHolderWithVoiceBefore('thwomp',),);

        this.MONTY_MOLE =               new EditorVoices('Monty Mole',               () => new EditorVoiceSoundHolderWithVoiceBefore('montymole',),);
        this.ROCKY_WRENCH =             new EditorVoices('Rocky Wrench',             () => new EditorVoiceSoundHolderWithVoiceBefore('rockeyrench',),);

        this.MAGIKOOPA =                new EditorVoices('Magikoopa',                () => [new EditorVoiceSoundHolderWithVoiceBefore('magikoopa',), new EditorVoiceSoundHolderWithVoiceBefore('kameck_EU',),],);

        this.HAMMER_BRO =               new EditorVoices('Hammer Bro',               () => new EditorVoiceSoundHolderWithVoiceBefore('hammerbro',),);
        this.SLEDGE_BRO =               new EditorVoices('Sledge Bro',               () => new EditorVoiceSoundHolderWithVoiceBefore('sledgebro',),);
        this.FIRE_BRO =                 new EditorVoices('Fire Bro',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('FireBro',),);
        this.HEAVY_FIRE_BRO =           new EditorVoices('Heavy Fire Bro',           () => new EditorVoiceSoundHolderWithSingingPartBefore('HeavyFireBro',),);

        this.LAVA_BUBBLE =              new EditorVoices('Lava Bubble',              () => new EditorVoiceSoundHolderWithVoiceBefore('lavabubble',),);

        this.MECHAKOOPA =               new EditorVoices('Mechakoopa',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Mechakoopa',),);
        this.BLASTA_MECHAKOOPA =        new EditorVoices('Blasta Mechakoopa',        () => new EditorVoiceSoundHolderWithSingingPartBefore('BlastaMechakoopa',),);
        this.ZAPPA_MECHAKOOPA =         new EditorVoices('Zappa Mechakoopa',         () => new EditorVoiceSoundHolderWithSingingPartBefore('ZappaMechakoopa',),);

        this.CHARVAARGH =               new EditorVoices('Charvaargh',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Charvaargh',),);

        this.BULLY =                    new EditorVoices('Bully',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Bully',),);

        //endregion -------------------- General enemies --------------------
        //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

        this.BILL_BLASTER =             new EditorVoices('Bill Blaster',             () => new EditorVoiceSoundHolderWithVoiceBefore('billblaster',),);
        this.BULL_EYE_BLASTER =         new EditorVoices('Bull\'s-Eye Blaster',      () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBlaster',),);

        this.BANZAI_BILL =              new EditorVoices('Banzai Bill',              () => new EditorVoiceSoundHolderWithSingingPartBefore('BanzaiBill',),);
        this.BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.BULL_EYE_BANZAI, Import.Entities.CAT_BANZAI_BILL,];
                }

            }('Bull\'s-Eye Banzai', () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBanzai',),);

        this.CANNON =                   new EditorVoices('Cannon',                   () => new EditorVoiceSoundHolderWithVoiceBefore('cannon',),);
        this.RED_CANNON =               new EditorVoices('Red Cannon',               () => new EditorVoiceSoundHolderWithSingingPartBefore('redcannon',),);

        this.BURNER =                   new EditorVoices('Burner',                   () => new EditorVoiceSoundHolderWithVoiceBefore('burner',),);

        this.FIRE_BAR =                 new EditorVoices('Fire Bar',                 () => new EditorVoiceSoundHolderWithVoiceBefore('firebar',),);

        this.SKEWER =                   new EditorVoices('Skewer',                   () => [new EditorVoiceSoundHolderWithVoiceBefore('skewer'), new EditorVoiceSoundHolderWithVoiceBefore('spikepiller'),],);

        this.KOOPA_CLOWN_CAR =          new EditorVoices('Koopa Clown Car',          () => new EditorVoiceSoundHolderWithVoiceBefore('koopaclowncar',),);
        this.JUNIOR_CLOWN_CAR =         new EditorVoices('Junior Clown Car',         () => new EditorVoiceSoundHolderWithVoiceBefore('juniorclowncar',),);
        this.FIRE_KOOPA_CLOWN_CAR =     new EditorVoices('Fire Koopa Clown Car',     () => new EditorVoiceSoundHolderWithVoiceBefore('firekoopaclowncar',),);
        this.FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices('Fire Junior Clown Car',    () => new EditorVoiceSoundHolderWithVoiceBefore('firejuniorclowncar',),);

        this.KOOPA_TROOPA_CAR =         new EditorVoices('Koopa Troopa Car',         () => new EditorVoiceSoundHolderWithSingingPartBefore('KoopaTroopaCar',),);

        this.GRINDER =                  new EditorVoices('Grinder',                  () => new EditorVoiceSoundHolderWithVoiceBefore('grinder',),);

        this.SUN =                      new class EditorVoices_Sun extends EditorVoices {

                protected override get _createEntityReferences(): PossibleEntityReferences_Received {
                    return [Import.Entities.ANGRY_SUN,];
                }

            }('Sun', () => new EditorVoiceSoundHolderWithSingingPartBefore('Sun',),);
        this.MOON =                     new EditorVoices('Moon',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Moon',),);

        //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
        //region -------------------- Bosses + projectiles --------------------

        this.BOWSER =                   new EditorVoices('Bowser',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bowser',),);
        this.MEOWSER =                  new EditorVoices('Meowser',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Meowser',),);

        this.BOWSER_JR =                new EditorVoices('Bowser Jr.',               () => new EditorVoiceSoundHolderWithVoiceBefore('bowserjr',),);

        this.BOOM_BOOM =                new EditorVoices('Boom Boom',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomBoom',),);
        this.POM_POM =                  new EditorVoices('Pom Pom',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('PomPom',),);

        this.LARRY =                    new EditorVoices('Larry',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Larry',),);
        this.IGGY =                     new EditorVoices('Iggy',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Iggy',),);
        this.WENDY =                    new EditorVoices('Wendy',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Wendy',),);
        this.LEMMY =                    new EditorVoices('Lemmy',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Lemmy',),);
        this.ROY =                      new EditorVoices('Roy',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('Roy',),);
        this.MORTON =                   new EditorVoices('Morton',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('Morton',),);
        this.LUDWIG =                   new EditorVoices('Ludwig',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('Ludwig',),);

        //endregion -------------------- Bosses + projectiles --------------------
        //region -------------------- Passive gizmo / Key / Warp / Other --------------------

        this.BUMPER =                   new EditorVoices('Bumper',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bumper',),);

        this.SWINGING_CLAW =            new EditorVoices('Swinging Claw',            () => new EditorVoiceSoundHolderWithSingingPartBefore('swingingclaw',),);

        this.TWISTER =                  new EditorVoices('Twister',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Twister',),);

        this.ONE_WAY_WALL =             new EditorVoices('One-Way Wall',             () => new EditorVoiceSoundHolderWithVoiceBefore('onewaywall',),);

        this.TRACK =                    new EditorVoices('Track',                    () => new EditorVoiceSoundHolderWithVoiceBefore('track',),);
        this.TRACK_BLOCK =              new EditorVoices('Track Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('TrackBlock',),);

        this.VINE =                     new EditorVoices('Vine',                     () => new EditorVoiceSoundHolderWithVoiceBefore('vine',),);
        this.TREE =                     new EditorVoices('Tree',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('tree',),);

        this.ARROW_SIGN =               new EditorVoices('Arrow Sign',               () => new EditorVoiceSoundHolderWithSingingPartBefore('arrowsign',),);

        this.CHECKPOINT_FLAG =          new EditorVoices('Checkpoint Flag',          () => new EditorVoiceSoundHolderWithSingingPartBefore('CheckpointFlag',),);

        this.DASH_BLOCK =               new EditorVoices('Dash Block',               () => new EditorVoiceSoundHolderWithSingingPartBefore('DashBlock',),);

        this.SNAKE_BLOCK =              new EditorVoices('Snake Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SnakeBlock',),);
        this.FAST_SNAKE_BLOCK =         new EditorVoices('Fast Snake Block',         () => new EditorVoiceSoundHolderWithSingingPartBefore('FastSnakeBlock',),);

        this.CONVEYOR_BELT =            new EditorVoices('Conveyor Belt',            () => new EditorVoiceSoundHolderWithVoiceBefore('conveyorbelt',),);
        this.FAST_CONVEYOR_BELT =       new EditorVoices('Fast Conveyor Belt',       () => new EditorVoiceSoundHolderWithSingingPartBefore('fastconveyorbelt',),);

        this.MUSHROOM_TRAMPOLINE =      new EditorVoices('Mushroom Trampoline',      () => new EditorVoiceSoundHolderWithSingingPartBefore('MushroomTrampoline',),);
        this.ON_OFF_TRAMPOLINE =        new EditorVoices('ON/OFF Trampoline',        () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFTrampoline',),);

        this.LIFT =                     new EditorVoices('Lift',                     () => new EditorVoiceSoundHolderWithVoiceBefore('lift',),);
        this.FLIMSY_LIFT =              new EditorVoices('Flimsy Lift',              () => new EditorVoiceSoundHolderWithVoiceBefore('flimsylift',),);
        this.CLOUD_LIFT =               new EditorVoices('Cloud Lift',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CloudLift',),);

        this.SEESAW =                   new EditorVoices('Seesaw',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('seesaw',),);

        this.LAVA_LIFT =                new EditorVoices('Lava Lift',                () => new EditorVoiceSoundHolderWithVoiceBefore('lavalift',),);
        this.FAST_LAVA_LIFT =           new EditorVoices('Fast Lava Lift',           () => new EditorVoiceSoundHolderWithSingingPartBefore('FastLavaLift',),);

        this.CRATE =                    new EditorVoices('Crate',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('crate',),);

        this.KEY =                      new EditorVoices('Key',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('key',),);
        this.CURSED_KEY =               new EditorVoices('Cursed Key',               () => new EditorVoiceSoundHolderWithSingingPartBefore('cursedkey',),);

        this.TRAMPOLINE =               new EditorVoices('Trampoline',               () => new EditorVoiceSoundHolderWithVoiceBefore('trampline',),);
        this.HOP_CHOPS =                new EditorVoices('Hop-Chops',                () => new EditorVoiceSoundHolderWithSingingPartBefore('Hop-Chops',),);

        this.POW_BLOCK =                new EditorVoices('POW Block',                () => new EditorVoiceSoundHolderWithVoiceBefore('powblock',),);
        this.RED_POW_BLOCK =            new EditorVoices('Red POW Block',            () => new EditorVoiceSoundHolderWithSingingPartBefore('RedPOWBlock',),);

        this.P_SWITCH =                 new EditorVoices('P Switch',                 () => new EditorVoiceSoundHolderWithVoiceBefore('pswitch',),);

        this.WARP_DOOR =                new EditorVoices('Warp Door',                () => new EditorVoiceSoundHolderWithVoiceBefore('warpdoor',),);
        this.P_WARP_DOOR =              new EditorVoices('P Warp Door',              () => new EditorVoiceSoundHolderWithVoiceBefore('pwarpdoor',),);
        this.KEY_DOOR =                 new EditorVoices('Key Door',                 () => new EditorVoiceSoundHolderWithVoiceBefore('keydoor',),);

        this.WARP_BOX =                 new EditorVoices('Warp Box',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox',),);
        this.WARP_BOX_WITH_KEY =        new EditorVoices('Warp Box (With Key)',      () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox_withkey',),);

        this.WING =                     new EditorVoices('Wing',                     () => new EditorVoiceSoundHolderWithVoiceBefore('wings',),);

        //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EditorVoices;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishNameContainer: StringContainer<PossibleEnglishName>;
    #entityReferences?: EntityReferenceHolder;
    readonly #editorVoiceSoundHolder: ObjectHolder<EditorVoiceSound>;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName, editorVoiceSound: () => PossibleSoundReceivedOnFactory,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
        this.#editorVoiceSoundHolder = new DelayedObjectHolderContainer(() => EditorVoiceSoundFactory.create(editorVoiceSound()));
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }


    public get editorVoiceSound(): EditorVoiceSound {
        return this.#editorVoiceSoundHolder.get;
    }

    //region -------------------- Entity references --------------------

    /**
     * Create a temporary array containing the references applicable
     * to create a {@link EntityReferenceHolder entity reference}
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createEntityReferences(): PossibleEntityReferences_Received {
        return [this.englishName];
    }

    /**
     * <p>
     *  Get the {@link EntityReferenceHolder entity reference} applicable to a specific editor voice.
     * </p>
     *
     * <p>
     *  It can contain either the entity by the same name as {@link EditorVoices this instance},
     *  a single {@link Entities entity instance} similar to {@link EditorVoices this instance} or
     *  multiple {@link Entities entity instance} (from 2 to 4) associated to {@link EditorVoices this instance}.
     * </p>
     */
    public get entityReferences(): EntityReferenceHolder {
        return this.#entityReferences ??= new EntityReferenceHolderContainer(this._createEntityReferences);
    }

    //endregion -------------------- Entity references --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<EditorVoices> {
        return EditorVoices;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof Import.Entities
            ? this.values.find(enumerable => (enumerable.entityReferences.references as readonly Entities[]).includes(value))
            ?? null
            : null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EditorVoices = EditorVoices, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EditorVoices
    public static getValue(value: PossibleValue,): | EditorVoices | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn<EditorVoices>(this, value,);
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
