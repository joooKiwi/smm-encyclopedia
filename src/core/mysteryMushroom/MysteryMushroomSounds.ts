import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'
import type {NullOr, NullOrString}               from '@joookiwi/type'

import type {ClassWithEnglishName}                                                                                                                                                     from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                       from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleUniqueEnglishName}                                                                                                          from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {FirstJumpSoundFile, GoalPoleSoundFile, LostALifeSoundFile, OnGroundAfterAJumpSoundFile, PowerUpCollectedSoundFile, SecondJumpSoundFile, TauntSoundFile, TurningSoundFile} from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'

import {MysteryMushrooms}        from 'core/mysteryMushroom/MysteryMushrooms'
import {goalPoleSound}           from 'core/mysteryMushroom/file/goalPole.sound'
import {jumpSound}               from 'core/mysteryMushroom/file/jump.sound'
import {lostALifeSound}          from 'core/mysteryMushroom/file/lostALife.sound'
import {onGroundAfterAJumpSound} from 'core/mysteryMushroom/file/onGroundAfterAJump.sound'
import {powerUpCollectedSound}   from 'core/mysteryMushroom/file/powerUpCollected.sound'
import {secondJumpSound}         from 'core/mysteryMushroom/file/secondJump.sound'
import {tauntSound}              from 'core/mysteryMushroom/file/taunt.sound'
import {turningSound}            from 'core/mysteryMushroom/file/turning.sound'

export class MysteryMushroomSounds<const FILE_NAME extends string = string, >
    extends EnumWithParent<MysteryMushrooms, Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    /** A {@link MysteryMushroomSounds} subclass that has no sounds whatsoever */
    private static readonly Null = class Null_MysteryMushroomSounds
        extends MysteryMushroomSounds<never> {

        public override get taunt() { return null }
        public override get powerUpCollected() { return null }
        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }

    //region -------------------- Sub class (0 jump sound) --------------------

    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds */
    private static readonly With0Jump = class With0Jump_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump1() { return null }
        public override get jump2() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link taunt}, {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With0JumpNoTauntGroundTurn = class With0JumpNoTauntGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With0JumpNoGroundTurn = class With0JumpNoGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link onGroundAfterAJump}, {@link turning} and {@link goalPole} sound */
    private static readonly With0JumpNoGroundTurnGoal = class With0JumpNoGroundTurnGoal_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link onGroundAfterAJump}, {@link turning}, {@link goalPole} and {@link lostALife} sound */
    private static readonly With0JumpNoGroundTurnGoalLost = class With0JumpNoGroundTurnGoalLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link powerUpCollected} {@link onGroundAfterAJump}, {@link turning}, {@link goalPole} and {@link lostALife} sound */
    private static readonly With0JumpNoPowerGroundTurnGoalLost = class With0JumpNoPowerAndGroundTurnGoalLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get powerUpCollected() { return null }
        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 0 jump sounds and no {@link taunt} {@link onGroundAfterAJump}, {@link turning}, {@link goalPole} and {@link lostALife} sound */
    private static readonly With0JumpNoTauntGroundTurnGoalLost = class With0JumpNoTauntGroundTurnGoalLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump1() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }

    //endregion -------------------- Sub class (0 jump sound) --------------------
    //region -------------------- Sub class (1 jump sound) --------------------

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound */
    private static readonly With1Jump = class With1Jump_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound and no {@link taunt} sound */
    private static readonly With1JumpNoTaunt = class With1JumpNoTaunt_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump2() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound and no {@link onGroundAfterAJump} sound */
    private static readonly With1JumpNoGround = class With1JumpNoGround_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound and no {@link turning} sound */
    private static readonly With1JumpNoTurn = class With1JumpNoTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }
        public override get turning() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link taunt} sound and no {@link turning} sound */
    private static readonly With1JumpNoTauntAndTurn = class With1JumpNoTauntTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump2() { return null }
        public override get turning() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link taunt} and {@link onGroundAfterAJump} sound */
    private static readonly With1JumpNoTauntGround = class With1JumpNoTauntGround_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sounds and no {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With1JumpNoGroundTurn = class With1JumpNoGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link taunt}, {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With1JumpNoTauntGroundTurn = class With1JumpNoTauntGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get taunt() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link onGroundAfterAJump}, {@link turning} and {@link goalPole} sound */
    private static readonly With1JumpNoGroundTurnGoal = class With1JumpNoGroundTurnGoal_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link onGroundAfterAJump}, {@link turning}, {@link goalPole} and {@link lostALife} sound */
    private static readonly With1JumpNoGroundTurnGoalLost = class With1JumpNoGroundTurnGoalLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link powerUpCollected} {@link taunt}, {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With1JumpNoPowerTauntGroundTurn = class With1JumpNoPowerTauntGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get powerUpCollected() { return null }
        public override get taunt() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }


    /** A {@link MysteryMushroomSounds} subclass that has 1 jump sound, no {@link powerUpCollected} {@link taunt}, {@link onGroundAfterAJump}, {@link turning}, {@link goalPole} and {@link lostALife} sound */
    private static readonly With1JumpNoPowerTauntGroundTurnGoalLost = class With1JumpNoPowerTauntGroundTurnGoalLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get powerUpCollected() { return null }
        public override get taunt() { return null }
        public override get jump2() { return null }
        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get goalPole() { return null }
        public override get lostALife() { return null }

    }

    //endregion -------------------- Sub class (1 jump sound) --------------------
    //region -------------------- Sub class (2 jump sound) --------------------

    /** A {@link MysteryMushroomSounds} subclass that has 2 jump sounds and no {@link onGroundAfterAJump} sound */
    private static readonly With2JumpNoGround = class With2JumpNoGround_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get onGroundAfterAJump() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 2 jump sounds and no {@link turning} sound */
    private static readonly With2JumpNoTurn = class With2JumpNoTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get turning() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 2 jump sounds and no {@link onGroundAfterAJump} and {@link turning} sound */
    private static readonly With2JumpNoGroundTurn = class With2JumpNoGroundTurn_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }

    }

    /** A {@link MysteryMushroomSounds} subclass that has 2 jump sounds and no {@link onGroundAfterAJump}, {@link turning} and {@link lostALife} sound */
    private static readonly With2JumpNoGroundTurnLost = class With2JumpNoGroundTurnLost_MysteryMushroomFiles<const FILE_NAME extends string, >
        extends MysteryMushroomSounds<FILE_NAME> {

        public override get onGroundAfterAJump() { return null }
        public override get turning() { return null }
        public override get lostALife() { return null }

    }

    //endregion -------------------- Sub class (2 jump sound) --------------------

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new MysteryMushroomSounds.Null()

    public static readonly YAMAMURA =               new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss017',)
    public static readonly MARY_O =                 new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss026',)
    public static readonly UNDODOG =                new MysteryMushroomSounds.With0JumpNoGroundTurn('Boss048',)

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushroomSounds.With1JumpNoGroundTurnGoal('GameWatch',)

    public static readonly PAC_MAN =                new MysteryMushroomSounds.With1JumpNoTurn('PackMan',)

    public static readonly MARIO =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Mario',)
    public static readonly LUIGI =                  new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Luigi',)
    public static readonly PROFESSOR_E_GADD =       new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss019',)
    public static readonly PEACH =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Peach',)
    public static readonly DAISY =                  new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss018',)
    public static readonly ROSALINA =               new MysteryMushroomSounds.With2JumpNoGroundTurn('Rosalina',)
    public static readonly TOAD =                   new MysteryMushroomSounds.With0JumpNoGroundTurnGoalLost('Kinopio',)
    public static readonly CAPTAIN_TOAD =           new MysteryMushroomSounds.With2JumpNoTurn('Boss014',)
    public static readonly TOADETTE =               new MysteryMushroomSounds.With2JumpNoTurn('Boss027',)
    public static readonly YOSHI =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Yoshi',)
    public static readonly BIRDO =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss016',)
    public static readonly WARIO =                  new MysteryMushroomSounds.With1JumpNoTauntAndTurn('Wario',)
    public static readonly ASHLEY =                 new MysteryMushroomSounds.With2JumpNoTurn('Ashley',)
    public static readonly WALUIGI =                new MysteryMushroomSounds.With0JumpNoGroundTurnGoalLost('Waluigi',)
    public static readonly BOWSER =                 new MysteryMushroomSounds.With1JumpNoTurn('Koopa',)
    public static readonly BOWSER_JR =              new MysteryMushroomSounds.With1JumpNoTurn('KoopaJr',)
    public static readonly GOOMBA =                 new MysteryMushroomSounds.With0JumpNoPowerGroundTurnGoalLost('Kuribo',)
    public static readonly SHY_GUY =                new MysteryMushroomSounds.With1JumpNoGroundTurn('Heiho',)
    public static readonly NABBIT =                 new MysteryMushroomSounds.With1JumpNoTurn('Boss032',)
    public static readonly MARIO_SILVER =           new MysteryMushroomSounds.With0JumpNoGroundTurn('MarioSilver',)
    public static readonly MARIO_GOLD =             new MysteryMushroomSounds.With0JumpNoGroundTurn('MarioGold',)
    public static readonly BUILDER_MARIO =          new MysteryMushroomSounds.With0JumpNoGroundTurn('DiyMario',)
    public static readonly DR_MARIO =               new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('DrMario',)
    public static readonly FROG_MARIO =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss006',)
    public static readonly STATUE_MARIO =           new MysteryMushroomSounds.With1JumpNoTauntGround('Boss025',)
    public static readonly MARIO_TRIO =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss007',)
    public static readonly KART_MARIO =             new MysteryMushroomSounds.With1JumpNoTaunt('MarioKart',)
    public static readonly CAT_MARIO =              new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss003',)
    public static readonly CAT_PEACH =              new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss004',)
    public static readonly SKY_POP =                new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss010', )
    public static readonly BABY_MARIO =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss037', )
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushroomSounds.With0JumpNoTauntGroundTurnGoalLost('Block',)
    public static readonly TRAMPOLINE =             new MysteryMushroomSounds.With1JumpNoPowerTauntGroundTurnGoalLost('Trampoline',)
    public static readonly MARIO_MB =               new MysteryMushroomSounds.With1JumpNoGround('MarioOriginal',)
    public static readonly SIDESTEPPER =            new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('SideStepper',)
    public static readonly SHELLCREEPER =           new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Shellcreeper',)
    public static readonly FIGHTER_FLY =            new MysteryMushroomSounds.With1JumpNoPowerTauntGroundTurn('Fightfly',)

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushroomSounds.With1JumpNoTurn('WoolYoshiGreen',)
    public static readonly PINK_YARN_YOSHI =        new MysteryMushroomSounds.With1JumpNoTurn('WoolYoshiPink',)
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushroomSounds.With1JumpNoTurn('WoolYoshiAqua',)
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushroomSounds.With1JumpNoTurn('WoolYoshiBig',)

    public static readonly DONKEY_KONG =            new MysteryMushroomSounds.With1JumpNoTurn('DonkeyKong',)
    public static readonly DONKEY_KONG_JR =         new MysteryMushroomSounds.With1JumpNoTurn('DonkeyKongJr',)
    public static readonly DIDDY_KONG =             new MysteryMushroomSounds.With2JumpNoTurn('DiddyKong',)

    public static readonly LITTLE_MAC =             new MysteryMushroomSounds.With1JumpNoGroundTurn('LittleMac',)

    public static readonly DUCK_HUNT =              new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('DuckHunt',)

    public static readonly BUBBLES =                new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss040',)

    public static readonly BIKE =                   new MysteryMushroomSounds.With1Jump('Boss015',)

    public static readonly BALLOON_FIGHTER =        new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss031',)

    public static readonly POPO_AND_NANA =          new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss044',)

    public static readonly FOREMAN_SPIKE =          new MysteryMushroomSounds.With1JumpNoTauntAndTurn('Blackey',)

    public static readonly LINK =                   new MysteryMushroomSounds.With1JumpNoGround('Link',)
    public static readonly ZELDA =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Zelda',)
    public static readonly SHEIK =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Sheik',)
    public static readonly TOON_LINK =              new MysteryMushroomSounds.With2JumpNoGroundTurn('ThunLink',)
    public static readonly TETRA =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss033',)
    public static readonly TINGLE =                 new MysteryMushroomSounds.With0JumpNoGroundTurn('Tincle',)
    public static readonly GANONDORF =              new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Ganon',)
    public static readonly WOLF_LINK =              new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss030',)
    public static readonly TOTEM_LINK =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss000',)

    public static readonly SAMUS =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Samus',)
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushroomSounds.With1JumpNoTurn('ZeroSams',)

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Boss042',)

    public static readonly PIT =                    new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Pit',)
    public static readonly PALUTENA =               new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Palutena',)
    public static readonly DARK_PIT =               new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('DarkPit',)

    public static readonly DONBE =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss034',)
    public static readonly HIKARI =                 new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss035',)

    public static readonly MEGA_MAN =               new MysteryMushroomSounds.With1JumpNoTurn('MegaMan',)

    public static readonly AYUMI_TACHIBANA =        new MysteryMushroomSounds.With0JumpNoGroundTurn('Boss036',)

    public static readonly MARTH =                  new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Marth',)
    public static readonly IKE =                    new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Ike',)
    public static readonly LUCINA =                 new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Lucina',)
    public static readonly ROBIN =                  new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Robin',)

    public static readonly CAPTAIN_FALCON =         new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Falcon',)

    public static readonly SONIC =                  new MysteryMushroomSounds.With1JumpNoGroundTurn('Sonic',)

    public static readonly KIRBY =                  new MysteryMushroomSounds.With1JumpNoTaunt('Kirby',)
    public static readonly KING_DEDEDE =            new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Dedede',)
    public static readonly META_KNIGHT =            new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('MetaKnight',)

    public static readonly FOX_MCCLOUD =            new MysteryMushroomSounds.With0JumpNoGroundTurn('Fox',)
    public static readonly FALCO_LOMBARDI =         new MysteryMushroomSounds.With0JumpNoGroundTurn('Falco',)
    public static readonly SLIPPY_TOAD =            new MysteryMushroomSounds.With0JumpNoGroundTurn('Slippy',)
    public static readonly PEPPY_HARE =             new MysteryMushroomSounds.With0JumpNoGroundTurn('Peppy',)
    public static readonly ARWING =                 new MysteryMushroomSounds.With0Jump('Arwing',)

    public static readonly NESS =                   new MysteryMushroomSounds.With0JumpNoGroundTurn('Ness',)
    public static readonly LUCAS =                  new MysteryMushroomSounds.With0JumpNoGroundTurn('Lucas',)
    public static readonly MASTER_BELCH =           new MysteryMushroomSounds.With0JumpNoGroundTurn('Boss012',)
    public static readonly MR_SATURN =              new MysteryMushroomSounds.With0JumpNoGroundTurn('Boss013',)

    public static readonly BULBASAUR =              new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss020',)
    public static readonly CHARMANDER =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss021',)
    public static readonly CHARIZARD =              new MysteryMushroomSounds.Null()
    public static readonly SQUIRTLE =               new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss022',)
    public static readonly PIKACHU =                new MysteryMushroomSounds.Null()
    public static readonly JIGGLYPUFF =             new MysteryMushroomSounds.Null()
    public static readonly MEWTWO =                 new MysteryMushroomSounds.Null()
    public static readonly LUCARIO =                new MysteryMushroomSounds.Null()
    public static readonly GRENINJA =               new MysteryMushroomSounds.Null()

    public static readonly VILLAGER =               new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Murabito',)
    public static readonly TOM_NOOK =               new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Tanuki',)
    public static readonly K_K_SLIDER =             new MysteryMushroomSounds.With1JumpNoGroundTurn('Totakeke',)
    public static readonly RESETTI =                new MysteryMushroomSounds.With1JumpNoTurn('ResetSan',)
    public static readonly ROVER =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('MishiNeko',)
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('TsubuMame',)
    public static readonly BLATHERS =               new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Futa',)
    public static readonly MABEL =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Kinuyo',)
    public static readonly KAPP_N =                 new MysteryMushroomSounds.With1JumpNoGroundTurn('Kappei',)
    public static readonly CELESTE =                new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Fuko',)
    public static readonly KICKS =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Shunk',)
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushroomSounds.With1JumpNoTauntAndTurn('Sizue',)
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushroomSounds.With1JumpNoTauntAndTurn('SizueWinter',)
    public static readonly DIGBY =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Kento',)
    public static readonly CYRUS =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Kaizo',)
    public static readonly REESE =                  new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Lisa',)
    public static readonly LOTTIE =                 new MysteryMushroomSounds.With1JumpNoTauntGroundTurn('Takumi',)

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushroomSounds.With2JumpNoGround('Orima',)
    public static readonly PIKMIN =                 new MysteryMushroomSounds.With1JumpNoGroundTurn('Pikmin',)

    public static readonly CHIBI_ROBO =             new MysteryMushroomSounds.With2JumpNoTurn('ChibiRobo',)

    public static readonly WII_BALANCE_BOARD =      new MysteryMushroomSounds('Wiibo',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushroomSounds.With2JumpNoGroundTurn('Fit',)

    public static readonly SHULK =                  new MysteryMushroomSounds.With2JumpNoGroundTurnLost('Shulk',)

    public static readonly FELYNE =                 new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss009',)

    public static readonly YU_AYASAKI =             new MysteryMushroomSounds.With2JumpNoGround('Boss028',)

    public static readonly DR_KAWASHIMA =           new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss049',)

    public static readonly DR_LOBE =                new MysteryMushroomSounds.With0JumpNoGroundTurn('MrHakari',)

    public static readonly BARBARA_THE_BAT =        new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss024',)

    public static readonly STARFY =                 new MysteryMushroomSounds.With1JumpNoTurn('Boss029',)

    public static readonly MALLO =                  new MysteryMushroomSounds.With1JumpNoTurn('Boss039',)

    public static readonly NIKKI =                  new MysteryMushroomSounds.With1JumpNoTurn('Nikki',)
    public static readonly IRIS_ARCHWELL =          new MysteryMushroomSounds.With1JumpNoTurn('Boss038',)
    public static readonly ARCADE_BUNNY =           new MysteryMushroomSounds.With1Jump('Boss011',)

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushroomSounds.With1JumpNoGroundTurnGoalLost('Boss023',)

    public static readonly INKLING_SQUID =          new MysteryMushroomSounds.With2JumpNoTurn('SplatIka',)
    public static readonly INKLING_BOY =            new MysteryMushroomSounds.With1JumpNoTurn('SplaBoy',)
    public static readonly INKLING_GIRL =           new MysteryMushroomSounds.With1JumpNoTurn('SplaGirl',)
    public static readonly CALLIE =                 new MysteryMushroomSounds.With1JumpNoTurn('Boss050',)
    public static readonly MARIE =                  new MysteryMushroomSounds.With1JumpNoTurn('Boss051',)

    public static readonly ROB =                    new MysteryMushroomSounds.With0JumpNoTauntGroundTurn('Robot',)
    public static readonly DISKUN =                 new MysteryMushroomSounds.With0JumpNoGroundTurn('Boss041',)
    public static readonly MAHJONG_TILE =           new MysteryMushroomSounds.With1JumpNoTurn('MahjongTile',)

    public static readonly KITTY_WHITE =            new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss045',)
    public static readonly MELODY =                 new MysteryMushroomSounds.With1JumpNoGroundTurn('Boss046',)
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushroomSounds.With0JumpNoGroundTurnGoal('Boss047',)

    public static readonly ARINO_KACHO =            new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss001',)
    public static readonly SUPER_MARIO_KUN =        new MysteryMushroomSounds.Null()
    public static readonly NECKY =                  new MysteryMushroomSounds.Null()
    public static readonly GLA =                    new MysteryMushroomSounds.With2JumpNoGround('Boss008',)
    public static readonly BABYMETAL =              new MysteryMushroomSounds.With2JumpNoGroundTurn('Boss043',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<MysteryMushroomSounds, typeof MysteryMushroomSounds, MysteryMushrooms, typeof MysteryMushrooms>
        = class CompanionEnum_MysteryMushroomSounds
        extends CompanionEnumWithParent<MysteryMushroomSounds, typeof MysteryMushroomSounds, MysteryMushrooms, typeof MysteryMushrooms> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MysteryMushroomSounds

        private constructor() {
            super(MysteryMushroomSounds, MysteryMushrooms,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MysteryMushroomSounds()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #englishName?: PossibleEnglishName
    #uniqueEnglishName?: PossibleUniqueEnglishName
    #englishNameInHtml?: string
    readonly #fileName
    #refefence?: MysteryMushroom

    #powerUpCollected?: NullOr<PowerUpCollectedSoundFile<FILE_NAME>>
    #taunt?: NullOr<TauntSoundFile<FILE_NAME>>
    #jump1?: NullOr<FirstJumpSoundFile<FILE_NAME>>
    #jump2?: NullOr<SecondJumpSoundFile<FILE_NAME>>
    #onGroundAfterAJump?: NullOr<OnGroundAfterAJumpSoundFile<FILE_NAME>>
    #turning?: NullOr<TurningSoundFile<FILE_NAME>>
    #goalPole?: NullOr<GoalPoleSoundFile<FILE_NAME>>
    #lostALife?: NullOr<LostALifeSoundFile<FILE_NAME>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(fileName: NullOrString<FILE_NAME> = null,) {
        super()
        if ((this.#fileName = fileName) != null)
            return
        this.#powerUpCollected = null
        this.#taunt = null
        this.#jump1 = null
        this.#jump2 = null
        this.#onGroundAfterAJump = null
        this.#turning = null
        this.#goalPole = null
        this.#lostALife = null
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }
    public get uniqueEnglishName(): PossibleUniqueEnglishName { return this.#uniqueEnglishName ??= this.parent.uniqueEnglishName }
    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public get fileName(): NullOrString<FILE_NAME> { return this.#fileName }

    public get reference(): MysteryMushroom { return this.#refefence ??= this.parent.reference }


    public get powerUpCollected(): NullOr<PowerUpCollectedSoundFile<FILE_NAME>> {
        const value = this.#powerUpCollected
        if (value !== undefined)
            return value
        return this.#powerUpCollected = powerUpCollectedSound(this.fileName!,)
    }

    public get taunt(): NullOr<TauntSoundFile<FILE_NAME>> {
        const value = this.#taunt
        if (value !== undefined)
            return value
        return this.#taunt = tauntSound(this.fileName!,)
    }

    public get jump1(): NullOr<FirstJumpSoundFile<FILE_NAME>> {
        const value = this.#jump1
        if (value !== undefined)
            return value
        return this.#jump1 = jumpSound(this.fileName!,)
    }

    public get jump2(): NullOr<SecondJumpSoundFile<FILE_NAME>> {
        const value = this.#jump2
        if (value !== undefined)
            return value
        return this.#jump2 = secondJumpSound(this.fileName!,)
    }

    public get onGroundAfterAJump(): NullOr<OnGroundAfterAJumpSoundFile<FILE_NAME>> {
        const value = this.#onGroundAfterAJump
        if (value !== undefined)
            return value
        return this.#onGroundAfterAJump = onGroundAfterAJumpSound(this.fileName!,)
    }

    public get turning(): NullOr<TurningSoundFile<FILE_NAME>> {
        const value = this.#turning
        if (value !== undefined)
            return value
        return this.#turning = turningSound(this.fileName!,)
    }

    public get goalPole(): NullOr<GoalPoleSoundFile<FILE_NAME>> {
        const value = this.#goalPole
        if (value !== undefined)
            return value
        return this.#goalPole = goalPoleSound(this.fileName!,)
    }

    public get lostALife(): NullOr<LostALifeSoundFile<FILE_NAME>> {
        const value = this.#lostALife
        if (value !== undefined)
            return value
        return this.#lostALife = lostALifeSound(this.fileName!,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------


}
