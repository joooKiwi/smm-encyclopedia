import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                   from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleFileName, PossibleUniqueEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile}                                                                 from 'core/mysteryMushroom/file/ClimbingImageFile'
import type {FallingAfterAJumpImageFile}                                                        from 'core/mysteryMushroom/file/FallingAfterAJumpImageFile'
import type {GoalPoleImageFile}                                                                 from 'core/mysteryMushroom/file/GoalPoleImageFile'
import type {GoalPoleSoundFile}                                                                 from 'core/mysteryMushroom/file/GoalPoleSoundFile'
import type {JumpImageFile}                                                                     from 'core/mysteryMushroom/file/JumpImageFile'
import type {JumpSoundFile}                                                                     from 'core/mysteryMushroom/file/JumpSoundFile'
import type {LostALifeSoundFile}                                                                from 'core/mysteryMushroom/file/LostALifeSoundFile'
import type {OnGroundAfterAJumpSoundFile}                                                       from 'core/mysteryMushroom/file/OnGroundAfterAJumpSoundFile'
import type {PowerUpCollectedSoundFile}                                                         from 'core/mysteryMushroom/file/PowerUpCollectedSoundFile'
import type {PressingDownImageFile}                                                             from 'core/mysteryMushroom/file/PressingDownImageFile'
import type {RunningImageFile}                                                                  from 'core/mysteryMushroom/file/RunningImageFile'
import type {SwimmingImageFile}                                                                 from 'core/mysteryMushroom/file/SwimmingImageFile'
import type {TauntImageFile}                                                                    from 'core/mysteryMushroom/file/TauntImageFile'
import type {TauntSoundFile}                                                                    from 'core/mysteryMushroom/file/TauntSoundFile'
import type {TurningImageFile}                                                                  from 'core/mysteryMushroom/file/TurningImageFile'
import type {TurningSoundFile}                                                                  from 'core/mysteryMushroom/file/TurningSoundFile'
import type {WaitingImageFile}                                                                  from 'core/mysteryMushroom/file/WaitingImageFile'
import type {WalkImageFile}                                                                     from 'core/mysteryMushroom/file/WalkImageFile'
import type {FileName, PossibleImageFileNames}                                                  from 'core/mysteryMushroom/file/name/FileName'
import type {Nullable, NullOr}                                                                  from 'util/types/nullable'

import {MysteryMushroomLoader}                                           from 'core/mysteryMushroom/MysteryMushroom.loader'
import {ClimbingImageFileContainer as ClimbingImage}                     from 'core/mysteryMushroom/file/ClimbingImageFile.container'
import {FallingAfterAJumpImageFileContainer as FallingAfterAJumpImage}   from 'core/mysteryMushroom/file/FallingAfterAJumpImageFile.container'
import {GoalPoleImageFileContainer as GoalPoleImage}                     from 'core/mysteryMushroom/file/GoalPoleImageFile.container'
import {GoalPoleSoundFileContainer as GoalPoleSound}                     from 'core/mysteryMushroom/file/GoalPoleSoundFile.container'
import {JumpImageFileContainer as JumpImage}                             from 'core/mysteryMushroom/file/JumpImageFile.container'
import {JumpSoundFileContainer as JumpSound}                             from 'core/mysteryMushroom/file/JumpSoundFile.container'
import {LostALifeSoundFileContainer as LostALifeSound}                   from 'core/mysteryMushroom/file/LostALifeSoundFile.container'
import {OnGroundAfterAJumpSoundFileContainer as OnGroundAfterAJumpSound} from 'core/mysteryMushroom/file/OnGroundAfterAJumpSoundFile.container'
import {PowerUpCollectedSoundFileContainer as PowerUpCollectedSound}     from 'core/mysteryMushroom/file/PowerUpCollectedSoundFile.container'
import {PressingDownImageFileContainer as PressingDownImage}             from 'core/mysteryMushroom/file/PressingDownImageFile.container'
import {RunningImageFileContainer as RunningImage}                       from 'core/mysteryMushroom/file/RunningImageFile.container'
import {SwimmingImageFileContainer as SwimmingImage}                     from 'core/mysteryMushroom/file/SwimmingImageFile.container'
import {TauntImageFileContainer as TauntImage}                           from 'core/mysteryMushroom/file/TauntImageFile.container'
import {TauntSoundFileContainer as TauntSound}                           from 'core/mysteryMushroom/file/TauntSoundFile.container'
import {TurningImageFileContainer as TurningImage}                       from 'core/mysteryMushroom/file/TurningImageFile.container'
import {TurningSoundFileContainer as TurningSound}                       from 'core/mysteryMushroom/file/TurningSoundFile.container'
import {WaitingImageFileContainer as WaitingImage}                       from 'core/mysteryMushroom/file/WaitingImageFile.container'
import {WalkImageFileContainer as WalkImage}                             from 'core/mysteryMushroom/file/WalkImageFile.container'
import {DualFileNameContainer as DualFile}                               from 'core/mysteryMushroom/file/name/DualFileName.container'
import {EmptyFileName as EmptyFile}                                      from 'core/mysteryMushroom/file/name/EmptyFileName'
import {SingleFileNameContainer as SingleFile}                           from 'core/mysteryMushroom/file/name/SingleFileName.container'
import {EMPTY_ARRAY}                                                     from 'util/emptyVariables'
import {StringContainer}                                                 from 'util/StringContainer'

/**
 * @todo Change the path to be like in the game instead of the mystery mushroom name
 */
export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Inner class --------------------

    private static readonly MysteryMushroomsWithDualJumpAndNoGroundSounds =         class MysteryMushroomsWithDualJumpAndNoGroundSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds =  class MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithDualJumpAndNoTurnSounds =           class MysteryMushroomsWithDualJumpAndNoTurnSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

        public override get turningSound() {
            return null
        }

    }


    private static readonly MysteryMushroomsWithNoSounds =                          class MysteryMushroomsWithNoSounds extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get powerUpCollectedSound() {
            return null
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }

    private static readonly MysteryMushroomsWithNoTauntSounds =                     class MysteryMushroomsWithNoTauntSounds extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithNoGroundSounds =                    class MysteryMushroomsWithNoGroundSounds extends MysteryMushrooms {

        public override get onGroundAfterJumpASound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithNoTurnSounds =                      class MysteryMushroomsWithNoTurnSounds extends MysteryMushrooms {

        public override get turningSound() {
            return null
        }

    }


    private static readonly MysteryMushroomsWithNoTauntAndTurnSounds =              class MysteryMushroomsWithNoTauntAndTurnSounds extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds =    class MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithNoTauntGroundAndTurnSounds =        class MysteryMushroomsWithNoTauntGroundAndTurnSounds extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }

    private static readonly MysteryMushroomsWithNoJumpGroundAndTurnSounds =         class MysteryMushroomsWithNoJumpGroundAndTurnSounds extends MysteryMushrooms {

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithNoJumpGroundTurnGoalAndLostSounds = class MysteryMushroomsWithNoJumpGrondTurnGoalAndLostSounds extends MysteryMushrooms {

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }

    private static readonly MysteryMushroomsWithNoGroundAndTurnSounds =             class MysteryMushroomsWithNoGroundAndTurnSounds extends MysteryMushrooms {

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }

    //endregion -------------------- Inner class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new class MysteryMushrooms_MysteryMushroom extends MysteryMushrooms {

        public override get powerUpCollectedSound() {
            return null
        }

        public override get waitingImage() {
            return EMPTY_ARRAY
        }

        public override get tauntImage() {
            return EMPTY_ARRAY
        }

        public override get tauntSound() {
            return null
        }

        public override get pressingDownImage() {
            return EMPTY_ARRAY
        }

        public override get walkImages() {
            return EMPTY_ARRAY
        }

        public override get runningImages() {
            return EMPTY_ARRAY
        }

        public override get swimmingImages() {
            return EMPTY_ARRAY
        }

        public override get jumpImages() {
            return EMPTY_ARRAY
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get fallingAfterAJumpImage() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningImage() {
            return EMPTY_ARRAY
        }

        public override get turningSound() {
            return null
        }

        public override get climbingImages() {
            return EMPTY_ARRAY
        }

        public override get goalPoleImages() {
            return EMPTY_ARRAY
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }(EmptyFile.get, 'Mystery Mushroom',)

    public static readonly YAMAMURA =               new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss017',), 'Yamamura',)
    public static readonly MARY_O =                 new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss026',), 'Mary O.',)
    public static readonly UNDODOG =                new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Boss048',), 'Undodog',)

    public static readonly MR_GAME_AND_WATCH =      new class MysteryMushrooms_MrGameAndWatch extends MysteryMushrooms {

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

    }(new SingleFile('GameWatch',), 'Mr. Game & Watch',)

    public static readonly PAC_MAN =                new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('PackMan',), 'PAC-MAN',)

    public static readonly MARIO =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Mario',), 'Mario',)
    public static readonly LUIGI =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Luigi',), 'Luigi',)
    public static readonly PROFESSOR_E_GADD =       new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss019',), 'Professor E. Gadd',)
    public static readonly PEACH =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Peach',), 'Peach',)
    public static readonly DAISY =                  new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss018',), 'Daisy',)
    public static readonly ROSALINA =               new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Rosalina',), 'Rosalina',)
    public static readonly TOAD =                   new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundTurnGoalAndLostSounds(new SingleFile('Kinopio',), 'Toad',)
    public static readonly CAPTAIN_TOAD =           new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('Boss014',), 'Captain Toad',)
    public static readonly TOADETTE =               new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('Boss027',), 'Toadette',)
    public static readonly YOSHI =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Yoshi',), 'Yoshi',)
    public static readonly BIRDO =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss016',), 'Birdo',)
    public static readonly WARIO =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntAndTurnSounds(new SingleFile('Wario',), 'Wario',)
    public static readonly ASHLEY =                 new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('Ashley',), 'Ashley',)
    public static readonly WALUIGI =                new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundTurnGoalAndLostSounds(new SingleFile('Waluigi',), 'Waluigi',)
    public static readonly BOWSER =                 new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Koopa',), 'Bowser',)
    public static readonly BOWSER_JR =              new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('KoopaJr',), 'Bowser Jr.',)
    public static readonly GOOMBA =                 new class MysteryMushrooms_Goomba extends MysteryMushrooms {

        public override get powerUpCollectedSound() {
            return null
        }
        public override get jumpSounds() {
            return EMPTY_ARRAY
        }
        public override get onGroundAfterJumpASound() {
            return null
        }
        public override get turningSound() {
            return null
        }
        public override get goalPoleSound() {
            return null
        }
        public override get lostALifeSound() {
            return null
        }

    }(new SingleFile('Kuribo',), 'Goomba',)
    public static readonly SHY_GUY =                new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Heiho',), 'Shy Guy',)
    public static readonly NABBIT =                 new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Boss032',), 'Nabbit',)
    public static readonly MARIO_SILVER =           new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('MarioSilver',), 'Mario (Silver)',)
    public static readonly MARIO_GOLD =             new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('MarioGold',), 'Mario (Gold)',)
    public static readonly BUILDER_MARIO =          new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('DiyMario',), 'Builder Mario',)
    public static readonly DR_MARIO =               new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('DrMario',), 'Dr. Mario',)
    public static readonly FROG_MARIO =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss006',), 'Frog Mario',)
    public static readonly STATUE_MARIO =           new class MysteryMushrooms_StatueMario extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

    }(new SingleFile('Boss025',), 'Statue Mario',)
    public static readonly MARIO_TRIO =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss007',), 'Mario Trio',)
    public static readonly KART_MARIO =             new MysteryMushrooms.MysteryMushroomsWithNoTauntSounds(new SingleFile('MarioKart',), 'Kart Mario',)
    public static readonly CAT_MARIO =              new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss003',), 'Cat Mario',)
    public static readonly CAT_PEACH =              new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss004',), 'Cat Peach',)
    public static readonly SKY_POP =                new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss010',), 'Sky Pop',)
    public static readonly BABY_MARIO =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss037',), 'Baby Mario',)
    public static readonly QUESTION_MARK_BLOCK =    new class MysteryMushrooms_QuestionMarkBlock extends MysteryMushrooms {

        public override get tauntSound() {
            return null
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }(new DualFile('Block', 'Block L',), '? Block',)
    public static readonly TRAMPOLINE =             new class MysteryMushrooms_Trampoline extends MysteryMushrooms {

        public override get powerUpCollectedSound() {
            return null
        }

        public override get tauntSound() {
            return null
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }(new SingleFile('Trampoline',), 'Trampoline',)
    public static readonly MARIO_MB =               new MysteryMushrooms.MysteryMushroomsWithNoGroundSounds(new SingleFile('MarioOriginal',), 'Mario', 'Mario (MB)',)
    public static readonly SIDESTEPPER =            new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('SideStepper',), 'Sidestepper',)
    public static readonly SHELLCREEPER =           new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Shellcreeper',), 'Shellcreeper',)
    public static readonly FIGHTER_FLY =            new class MysteryMushrooms_FighterFly extends MysteryMushrooms {

        public override get powerUpCollectedSound() {
            return null
        }
        public override get tauntSound(){
            return null
        }
        public override get onGroundAfterJumpASound() {
            return null
        }
        public override get turningSound() {
            return null
        }

    }(new SingleFile('Fightfly',), 'Fighter Fly',)

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('WoolYoshiGreen',), 'Green Yarn Yoshi',)
    public static readonly PINK_YARN_YOSHI =        new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('WoolYoshiPink',), 'Pink Yarn Yoshi',)
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('WoolYoshiAqua',), 'Light-Blue Yarn Yoshi',)
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('WoolYoshiBig',), 'Mega Yarn Yoshi',)

    public static readonly DONKEY_KONG =            new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('DonkeyKong',), 'Donkey Kong',)
    public static readonly DONKEY_KONG_JR =         new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('DonkeyKongJr',), 'Donkey Kong Jr.',)
    public static readonly DIDDY_KONG =             new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('DiddyKong',), 'Diddy Kong',)

    public static readonly LITTLE_MAC =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('LittleMac',), 'Little Mac',)

    public static readonly DUCK_HUNT =              new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('DuckHunt',), 'Duck Hunt',)

    public static readonly BUBBLES =                new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss040',), 'Bubbles',)

    public static readonly BIKE =                   new MysteryMushrooms(new SingleFile('Boss015',), 'Bike',)

    public static readonly BALLOON_FIGHTER =        new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss031',), 'Balloon Fighter',)

    public static readonly POPO_AND_NANA =          new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss044',), 'Popo & Nana',)

    public static readonly FOREMAN_SPIKE =          new MysteryMushrooms.MysteryMushroomsWithNoTauntAndTurnSounds(new SingleFile('Blackey',), 'Foreman Spike',)

    public static readonly LINK =                   new MysteryMushrooms.MysteryMushroomsWithNoGroundSounds(new SingleFile('Link',), 'Link',)
    public static readonly ZELDA =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Zelda',), 'Zelda',)
    public static readonly SHEIK =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Sheik',), 'Sheik',)
    public static readonly TOON_LINK =              new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('ThunLink',), 'Toon Link',)
    public static readonly TETRA =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss033',), 'Tetra',)
    public static readonly TINGLE =                 new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Tincle',), 'Tingle',)
    public static readonly GANONDORF =              new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Ganon',), 'Ganondorf',)
    public static readonly WOLF_LINK =              new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss030',), 'Wolf Link',)
    public static readonly TOTEM_LINK =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss000',), 'Totem Link',)

    public static readonly SAMUS =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Samus',), 'Samus',)
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('ZeroSams',), 'Zero Suit Samus',)

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Boss042',), 'Volleyball Player',)

    public static readonly PIT =                    new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Pit',), 'Pit',)
    public static readonly PALUTENA =               new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Palutena',), 'Palutena',)
    public static readonly DARK_PIT =               new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('DarkPit',), 'Dark Pit',)

    public static readonly DONBE =                  new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss034',), 'Donbe',)
    public static readonly HIKARI =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss035',), 'Hikari',)

    public static readonly MEGA_MAN =               new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('MegaMan',), 'Mega Man',)

    public static readonly AYUMI_TACHIBANA =        new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Boss036',), 'Ayumi Tachibana',)

    public static readonly MARTH =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Marth',), 'Marth',)
    public static readonly IKE =                    new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Ike',), 'Ike',)
    public static readonly LUCINA =                 new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Lucina',), 'Lucina',)
    public static readonly ROBIN =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Robin',), 'Robin',)

    public static readonly CAPTAIN_FALCON =         new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new SingleFile('Falcon',), 'Captain Falcon',)

    public static readonly SONIC =                  new class MysteryMushrooms_Sonic extends MysteryMushrooms {

        protected override _createJumpImages(englishName: PossibleEnglishName, name: PossibleFileName): readonly [JumpImageFile] | readonly [JumpImageFile, JumpImageFile, JumpImageFile] {
            return [new JumpImage(englishName, name, 0,), new JumpImage(englishName, name, 1,), new JumpImage(englishName, name, 2,),]
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }(new SingleFile('Sonic',), 'Sonic',)

    public static readonly KIRBY =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntSounds(new SingleFile('Kirby',), 'Kirby',)
    public static readonly KING_DEDEDE =            new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Dedede',), 'King Dedede',)
    public static readonly META_KNIGHT =            new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('MetaKnight',), 'Meta Knight',)

    public static readonly FOX_MCCLOUD =            new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Fox',), 'Fox McCloud',)
    public static readonly FALCO_LOMBARDI =         new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Falco',), 'Falco Lombardi',)
    public static readonly SLIPPY_TOAD =            new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Slippy',), 'Slippy Toad',)
    public static readonly PEPPY_HARE =             new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Peppy',), 'Peppy Hare',)
    public static readonly ARWING =                 new class MysteryMushrooms_Arwing extends MysteryMushrooms {

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

    }(new SingleFile('Arwing',), 'Arwing',)

    public static readonly NESS =                   new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Ness',), 'Ness',)
    public static readonly LUCAS =                  new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Lucas',), 'Lucas',)
    public static readonly MASTER_BELCH =           new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Boss012',), 'Master Belch',)
    public static readonly MR_SATURN =              new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Boss013',), 'Mr. Saturn',)

    public static readonly BULBASAUR =              new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss020',), 'Bulbasaur',)
    public static readonly CHARMANDER =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss021',), 'Charmander',)
    public static readonly CHARIZARD =              new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Charizard',), 'Charizard',)
    public static readonly SQUIRTLE =               new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss022',), 'Squirtle',)
    public static readonly PIKACHU =                new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Pikachu',), 'Pikachu',)
    public static readonly JIGGLYPUFF =             new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Pudding',), 'Jigglypuff',)
    public static readonly MEWTWO =                 new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Mewtwo',), 'Mewtwo',)
    public static readonly LUCARIO =                new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Lucario',), 'Lucario',)
    public static readonly GRENINJA =               new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Greninja',), 'Greninja',)

    public static readonly VILLAGER =               new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Murabito',), 'Villager',)
    public static readonly TOM_NOOK =               new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Tanuki',), 'Tom Nook',)
    public static readonly K_K_SLIDER =             new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Totakeke',), 'K.K. Slider',)
    public static readonly RESETTI =                new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('ResetSan',), 'Resetti',)
    public static readonly ROVER =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('MishiNeko',), 'Rover',)
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('TsubuMame',), 'Timmy & Tommy',)
    public static readonly BLATHERS =               new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Futa',), 'Blathers',)
    public static readonly MABEL =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Kinuyo',), 'Mabel',)
    public static readonly KAPP_N =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Kappei',), 'Kapp\'n',)
    public static readonly CELESTE =                new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Fuko',), 'Celeste',)
    public static readonly KICKS =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Shunk',), 'Kicks',)
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms.MysteryMushroomsWithNoTauntAndTurnSounds(new SingleFile('Sizue',), 'Isabelle (Summer Outfit)',)
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushrooms.MysteryMushroomsWithNoTauntAndTurnSounds(new SingleFile('SizueWinter',), 'Isabelle (Winter Outfit)',)
    public static readonly DIGBY =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Kento',), 'Digby',)
    public static readonly CYRUS =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Kaizo',), 'Cyrus',)
    public static readonly REESE =                  new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Lisa',), 'Reese',)
    public static readonly LOTTIE =                 new MysteryMushrooms.MysteryMushroomsWithNoTauntGroundAndTurnSounds(new SingleFile('Takumi',), 'Lottie',)

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundSounds(new SingleFile('Orima',), 'Captain Olimar',)
    public static readonly PIKMIN =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Pikmin',), 'Pikmin',)

    public static readonly CHIBI_ROBO =             new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('ChibiRobo',), 'Chibi-Robo',)

    public static readonly WII_BALANCE_BOARD =      new class MysteryMushrooms_WiiBalanceBoard extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

    }(new SingleFile('Wiibo',), 'Wii Balance Board',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Fit',), 'Wii Fit Trainer',)

    public static readonly SHULK =                  new class MysteryMushrooms_Shulk extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }(new SingleFile('Shulk',), 'Shulk',)

    public static readonly FELYNE =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss009',), 'Felyne',)

    public static readonly YU_AYASAKI =             new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundSounds(new SingleFile('Boss028',), 'Yu Ayasaki',)

    public static readonly DR_KAWASHIMA =           new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Boss049',), 'Dr. Kawashima',)

    public static readonly DR_LOBE =                new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('MrHakari',), 'Dr. Lobe',)

    public static readonly BARBARA_THE_BAT =        new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss024',), 'Barbara the Bat',)

    public static readonly STARFY =                 new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Boss029',), 'Starfy',)

    public static readonly MALLO =                  new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Boss039',), 'Mallo',)

    public static readonly NIKKI =                  new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Nikki',), 'Nikki',)
    public static readonly IRIS_ARCHWELL =          new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('Boss038',), 'Iris Archwell',)
    public static readonly ARCADE_BUNNY =           new MysteryMushrooms(new SingleFile('Boss011',), 'Arcade bunny',)

    public static readonly CHITOGE_KIRISAKI =       new class MysteryMushrooms_ChitogeKirisaki extends MysteryMushrooms {

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

        public override get lostALifeSound() {
            return null
        }

    }(new SingleFile('Boss023',), 'Chitoge Kirisaki',)

    public static readonly INKLING_SQUID =          new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoTurnSounds(new SingleFile('SplaIka', 'SplatIka',), 'Inkling Squid',)
    public static readonly INKLING_BOY =            new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new DualFile('SplaBoy', 'SplaBoy W',), 'Inkling Boy',)
    public static readonly INKLING_GIRL =           new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new DualFile('SplaGirl', 'SplaGirl W',), 'Inkling Girl',)
    public static readonly CALLIE =                 new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new DualFile('Boss050', 'SplaAori W',), 'Callie',)
    public static readonly MARIE =                  new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new DualFile('Boss051', 'SplaHotaru W',), 'Marie',)

    public static readonly ROB =                    new MysteryMushrooms.MysteryMushroomsWithNoTauntJumpGroundAndTurnSounds(new DualFile('Robot USEU', 'Robot JP', 'Robot',), 'R.O.B.',)
    public static readonly DISKUN =                 new MysteryMushrooms.MysteryMushroomsWithNoJumpGroundAndTurnSounds(new SingleFile('Boss041',), 'Diskun',)
    public static readonly MAHJONG_TILE =           new MysteryMushrooms.MysteryMushroomsWithNoTurnSounds(new SingleFile('MahjongTile',), 'Mahjong Tile',)

    public static readonly KITTY_WHITE =            new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new DualFile('Boss045', 'Boss045 L',), 'Kitty White',)
    public static readonly MELODY =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new DualFile('Boss046', 'Boss046 L',), 'Melody',)
    public static readonly SHAUN_THE_SHEEP =        new class MysteryMushrooms_ShaunTheSheep extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
            return MysteryMushrooms._createDualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

        public override get goalPoleSound() {
            return null
        }

    }(new SingleFile('Boss047',), 'Shaun the Sheep',)

    public static readonly ARINO_KACHO =            new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss001',), 'Arino KACHO',)
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Boss002',), 'SUPER MARIO KUN',)
    public static readonly NECKY =                  new MysteryMushrooms.MysteryMushroomsWithNoSounds(new SingleFile('Boss005',), 'Necky',)
    public static readonly GLA =                    new MysteryMushrooms.MysteryMushroomsWithNoGroundSounds(new SingleFile('Boss008',), 'GLA',)
    public static readonly BABYMETAL =              new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Boss043',), 'BABYMETAL',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: MysteryMushrooms

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>

    #reference?: MysteryMushroom
    readonly #englishName
    readonly #uniqueEnglishName
    readonly #fileName

    #powerUpCollectedSound?: PowerUpCollectedSoundFile

    #waitingImage?: readonly WaitingImageFile[]

    #tauntImage?: readonly TauntImageFile[]
    #tauntSound?: TauntSoundFile

    #pressingDownImage?: readonly PressingDownImageFile[]

    #walkImages?: readonly (readonly [WalkImageFile, WalkImageFile, WalkImageFile,])[]

    #runningImages?: readonly (readonly [RunningImageFile, RunningImageFile, RunningImageFile,])[]

    #swimmingImages?: readonly (readonly [SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile,])[]

    #jumpImages?: readonly (| readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,])[]
    #jumpSounds?: readonly JumpSoundFile[]
    #fallingAfterAJumpImage?: readonly FallingAfterAJumpImageFile[]
    #onGroundAfterJumpSound?: OnGroundAfterAJumpSoundFile

    #turningSound?: TurningSoundFile
    #turningImage?: readonly TurningImageFile[]

    #climbingImages?: readonly (readonly [ClimbingImageFile, ClimbingImageFile,])[]

    #goalPoleImages?: readonly (readonly [GoalPoleImageFile, GoalPoleImageFile,])[]
    #goalPoleSound?: GoalPoleSoundFile

    #lostALifeSound?: LostALifeSoundFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(fileName: FileName, englishName: PossibleEnglishName,)
    protected constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName,)
    protected constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#uniqueEnglishName = uniqueEnglishName
        this.#fileName = fileName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        return this.#REFERENCE_MAP ??= MysteryMushroomLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MysteryMushroom {
        return this.#reference ??= MysteryMushrooms.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get uniqueEnglishName(): PossibleUniqueEnglishName {
        return this.#uniqueEnglishName
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //region -------------------- Files (images / sounds) getter methods --------------------

    private get __fileName(): FileName {
        return this.#fileName
    }

    get #soundFileName(): PossibleFileName {
        return this.__fileName.soundFileName[0]!
    }

    get imageFileNames(): PossibleImageFileNames {
        return this.__fileName.imageFileNames
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): NullOr<PowerUpCollectedSoundFile> {
        return this.#powerUpCollectedSound ??= new PowerUpCollectedSound(this.#soundFileName,)
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImage(): readonly WaitingImageFile[] {
        return this.#waitingImage ??= this.#createImageFiles((englishName, name,) => new WaitingImage(englishName, name,))
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImage(): readonly TauntImageFile[] {
        return this.#tauntImage ??= this.#createImageFiles((englishName, name,) => new TauntImage(englishName, name,))
    }

    public get tauntSound(): NullOr<TauntSoundFile> {
        return this.#tauntSound ??= new TauntSound(this.#soundFileName,)
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get pressingDownImage(): readonly PressingDownImageFile[] {
        return this.#pressingDownImage ??= this.#createImageFiles((englishName, name,) => new PressingDownImage(englishName, name,))
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): readonly (readonly [WalkImageFile, WalkImageFile, WalkImageFile,])[] {
        return this.#walkImages ??= this.#createImageFiles((englishName, name,) => [new WalkImage(englishName, name, 0,), new WalkImage(englishName, name, 1,), new WalkImage(englishName, name, 2,),])
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): readonly (readonly [RunningImageFile, RunningImageFile, RunningImageFile,])[] {
        return this.#runningImages ??= this.#createImageFiles((englishName, name,) => [new RunningImage(englishName, name, 0,), new RunningImage(englishName, name, 1,), new RunningImage(englishName, name, 2,),])
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): readonly (readonly [SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile,])[] {
        return this.#swimmingImages ??= this.#createImageFiles((englishName, name,) => [new SwimmingImage(englishName, name, 0,), new SwimmingImage(englishName, name, 1,), new SwimmingImage(englishName, name, 2,), new SwimmingImage(englishName, name, 3,), new SwimmingImage(englishName, name, 4,), new SwimmingImage(englishName, name, 5,),])
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    protected _createJumpImages(englishName: PossibleEnglishName, name: PossibleFileName,): | readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,] {
        return [new JumpImage(englishName, name, 0,),]
    }

    public get jumpImages(): readonly (| readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,])[] {
        return this.#jumpImages ??= this.#createImageFiles((englishName, name,) => this._createJumpImages(englishName, name,))
    }


    protected _createJumpSounds(name: PossibleFileName,): readonly JumpSoundFile[] {
        return [new JumpSound(name,),]
    }

    protected static _createDualJumpSounds(name: PossibleFileName,): readonly [JumpSoundFile, JumpSoundFile,] {
        return [new JumpSound(name,), new JumpSound(name, 2,),]
    }

    public get jumpSounds(): readonly JumpSoundFile[] {
        return this.#jumpSounds ??= this._createJumpSounds(this.#soundFileName,)
    }


    public get fallingAfterAJumpImage(): readonly FallingAfterAJumpImageFile[] {
        return this.#fallingAfterAJumpImage ??= this.#createImageFiles((englishName, name,) => new FallingAfterAJumpImage(englishName, name,))
    }


    public get onGroundAfterJumpASound(): NullOr<OnGroundAfterAJumpSoundFile> {
        return this.#onGroundAfterJumpSound ??= new OnGroundAfterAJumpSound(this.#soundFileName,)
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImage(): readonly TurningImageFile[] {
        return this.#turningImage ??= this.#createImageFiles((englishName, name,) => new TurningImage(englishName, name,))
    }

    public get turningSound(): NullOr<TurningSoundFile> {
        return this.#turningSound ??= new TurningSound(this.#soundFileName,)
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): readonly (readonly [ClimbingImageFile, ClimbingImageFile,])[] {
        return this.#climbingImages ??= this.#createImageFiles((englishName, name,) => [new ClimbingImage(englishName, name, 0,), new ClimbingImage(englishName, name, 1,),])
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): readonly (readonly [GoalPoleImageFile, GoalPoleImageFile,])[] {
        return this.#goalPoleImages ??= this.#createImageFiles((englishName, name,) => [new GoalPoleImage(englishName, name, 0,), new GoalPoleImage(englishName, name, 1,),])
    }

    public get goalPoleSound(): NullOr<GoalPoleSoundFile> {
        return this.#goalPoleSound ??= new GoalPoleSound(this.#soundFileName,)
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): NullOr<LostALifeSoundFile> {
        return this.#lostALifeSound ??= new LostALifeSound(this.#soundFileName,)
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    #createImageFiles<T>(callback: (englishName: PossibleEnglishName, name: PossibleFileName,) => T,): T[] {
        const englishName = this.englishName
        return this.__fileName.imageFileNames.map(it => callback(englishName, it,))
    }

    public static getValueByName(value: Nullable<| MysteryMushrooms | string>,): MysteryMushrooms {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => {
            const fileName = it.__fileName
            return it.englishName === value
                || it.uniqueEnglishName === value
                || fileName.imageFileNames.includes(value as never)
                || fileName.soundFileName.includes(value as never)
        })
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return MysteryMushrooms
    }

    public static getValue(value: PossibleValueByEnumerable<MysteryMushrooms>,): MysteryMushrooms {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<MysteryMushrooms> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

// @ts-ignore
(window.test ??={}).MysteryMushrooms = MysteryMushrooms