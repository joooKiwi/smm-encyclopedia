import type {EmptyArray, Nullable, NullOr}                         from '@joookiwi/type'
import {CollectionHolder, getFirstByArray, hasByArray, mapByArray} from '@joookiwi/collection'
import {Enum}                                                      from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                           from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                             from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                                                                                                                                                from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleFileName, PossibleUniqueEnglishName}                                                                                                                              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile, FallingAfterAJumpImageFile, GoalPoleImageFile, JumpImageFile, PressingDownImageFile, RunningImageFile, SwimmingImageFile, TauntImageFile, TurningImageFile, WaitingImageFile, WalkImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'
import type {GoalPoleSoundFile, JumpSoundFile, LostALifeSoundFile, OnGroundAfterAJumpSoundFile, PowerUpCollectedSoundFile, TauntSoundFile, TurningSoundFile}                                                                 from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'
import type {FileName, PossibleImageFileNames}                                                                                                                                                                               from 'core/mysteryMushroom/file/name/FileName'
import type {CompanionEnumByNameSingleton}                                                                                                                                                                                   from 'util/enumerable/Singleton.types'

import {MysteryMushroomLoader}                 from 'core/mysteryMushroom/MysteryMushroom.loader'
import * as FileCreator                        from 'core/mysteryMushroom/file/fileCreator'
import {DualFileNameContainer as DualFile}     from 'core/mysteryMushroom/file/name/DualFileName.container'
import {EmptyFileName as EmptyFile}            from 'core/mysteryMushroom/file/name/EmptyFileName'
import {SingleFileNameContainer as SingleFile} from 'core/mysteryMushroom/file/name/SingleFileName.container'
import {Empty}                                 from 'util/emptyVariables'
import {StringContainer}                       from 'util/StringContainer'
import {CompanionEnumByName}                   from 'util/enumerable/companion/CompanionEnumByName'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER
import EMPTY_ARRAY =             Empty.EMPTY_ARRAY

export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    private static readonly MysteryMushroomsWithDualJumpAndNoGroundSounds =         class MysteryMushroomsWithDualJumpAndNoGroundSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds =  class MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningSound() {
            return null
        }

    }
    private static readonly MysteryMushroomsWithDualJumpAndNoTurnSounds =           class MysteryMushroomsWithDualJumpAndNoTurnSounds extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
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
    private static readonly MysteryMushroomsWithNoJumpGroundTurnGoalAndLostSounds = class MysteryMushroomsWithNoJumpGroundTurnGoalAndLostSounds extends MysteryMushrooms {

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

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new class MysteryMushrooms_MysteryMushroom extends MysteryMushrooms {

        public override get powerUpCollectedSound() {
            return null
        }

        public override get waitingImage() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get tauntImage() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get tauntSound() {
            return null
        }

        public override get pressingDownImage() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get walkImages() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get runningImages() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get swimmingImages() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get jumpImages() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY
        }

        public override get fallingAfterAJumpImage() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get onGroundAfterJumpASound() {
            return null
        }

        public override get turningImage() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get turningSound() {
            return null
        }

        public override get climbingImages() {
            return EMPTY_COLLECTION_HOLDER
        }

        public override get goalPoleImages() {
            return EMPTY_COLLECTION_HOLDER
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

        protected override _createJumpImages(englishName: PossibleEnglishName, name: PossibleFileName) {
            return FileCreator.tripleJumpImages(englishName, name,)
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
    public static readonly KAPP_N =                 new MysteryMushrooms.MysteryMushroomsWithNoGroundAndTurnSounds(new SingleFile('Kappei',), 'Kapp’n',)
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

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
        }

    }(new SingleFile('Wiibo',), 'Wii Balance Board',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms.MysteryMushroomsWithDualJumpAndNoGroundAndTurnSounds(new SingleFile('Fit',), 'Wii Fit Trainer',)

    public static readonly SHULK =                  new class MysteryMushrooms_Shulk extends MysteryMushrooms {

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
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

        protected override _createJumpSounds(name: PossibleFileName,) {
            return FileCreator.dualJumpSounds(name,)
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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<MysteryMushrooms, typeof MysteryMushrooms> = class CompanionEnum_MysteryMushrooms
        extends CompanionEnumByName<MysteryMushrooms, typeof MysteryMushrooms>{

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MysteryMushrooms

        private constructor() {
            super(MysteryMushrooms,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MysteryMushrooms()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| MysteryMushrooms | string>,): MysteryMushrooms {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it => {
                if (it.englishName === value || it.uniqueEnglishName === value)
                    return true

                const fileName = it.__fileName
                return hasByArray(fileName.imageFileNames, value,)
                    || hasByArray(fileName.soundFileName, value,)
            },)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>

    #reference?: MysteryMushroom
    readonly #englishName
    readonly #uniqueEnglishName
    readonly #fileName

    #powerUpCollectedSound?: PowerUpCollectedSoundFile

    #waitingImage?: CollectionHolder<WaitingImageFile>

    #tauntImage?: CollectionHolder<TauntImageFile>
    #tauntSound?: TauntSoundFile

    #pressingDownImage?: CollectionHolder<PressingDownImageFile>

    #walkImages?: CollectionHolder<readonly [WalkImageFile, WalkImageFile, WalkImageFile,]>

    #runningImages?: CollectionHolder<readonly [RunningImageFile, RunningImageFile, RunningImageFile,]>

    #swimmingImages?: CollectionHolder<readonly [SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile,]>

    #jumpImages?: CollectionHolder<| readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,]>
    #jumpSounds?: | readonly [JumpSoundFile,] | readonly [JumpSoundFile, JumpSoundFile,]
    #fallingAfterAJumpImage?: CollectionHolder<FallingAfterAJumpImageFile>
    #onGroundAfterJumpSound?: OnGroundAfterAJumpSoundFile

    #turningSound?: TurningSoundFile
    #turningImage?: CollectionHolder<TurningImageFile>

    #climbingImages?: CollectionHolder<readonly [ClimbingImageFile, ClimbingImageFile,]>

    #goalPoleImages?: CollectionHolder<readonly [GoalPoleImageFile, GoalPoleImageFile,]>
    #goalPoleSound?: GoalPoleSoundFile

    #lostALifeSound?: LostALifeSoundFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(fileName: FileName, englishName: PossibleEnglishName,)
    private constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName,)
    private constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName,) {
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
        return getFirstByArray(this.__fileName.soundFileName,)
    }

    get imageFileNames(): PossibleImageFileNames {
        return this.__fileName.imageFileNames
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): NullOr<PowerUpCollectedSoundFile> {
        return this.#powerUpCollectedSound ??= FileCreator.powerUpCollectedSound(this.#soundFileName,)
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImage(): CollectionHolder<WaitingImageFile> {
        return this.#waitingImage ??= this.#createImageFiles(FileCreator.waitingImage,)
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImage(): CollectionHolder<TauntImageFile> {
        return this.#tauntImage ??= this.#createImageFiles(FileCreator.tauntImage,)
    }

    public get tauntSound(): NullOr<TauntSoundFile> {
        return this.#tauntSound ??= FileCreator.tauntSound(this.#soundFileName,)
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get pressingDownImage(): CollectionHolder<PressingDownImageFile> {
        return this.#pressingDownImage ??= this.#createImageFiles(FileCreator.pressingDownImage,)
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): CollectionHolder<readonly [WalkImageFile, WalkImageFile, WalkImageFile,]> {
        return this.#walkImages ??= this.#createImageFiles(FileCreator.walkImages,)
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): CollectionHolder<readonly [RunningImageFile, RunningImageFile, RunningImageFile,]> {
        return this.#runningImages ??= this.#createImageFiles(FileCreator.runningImages,)
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): CollectionHolder<readonly [SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile,]> {
        return this.#swimmingImages ??= this.#createImageFiles(FileCreator.swimmingImages,)
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    protected _createJumpImages(englishName: PossibleEnglishName, name: PossibleFileName,): | readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,] {
        return FileCreator.singleJumpImages(englishName, name,)
    }

    public get jumpImages(): CollectionHolder<| readonly [JumpImageFile,] | readonly [JumpImageFile, JumpImageFile, JumpImageFile,]> {
        return this.#jumpImages ??= this.#createImageFiles((englishName, name,) => this._createJumpImages(englishName, name,))
    }


    protected _createJumpSounds(name: PossibleFileName,): | readonly [JumpSoundFile,] | readonly [JumpSoundFile, JumpSoundFile,] {
        return FileCreator.singleJumpSounds(name,)
    }

    public get jumpSounds(): | EmptyArray | readonly [JumpSoundFile,] | readonly [JumpSoundFile, JumpSoundFile,] {
        return this.#jumpSounds ??= this._createJumpSounds(this.#soundFileName,)
    }


    public get fallingAfterAJumpImage(): CollectionHolder<FallingAfterAJumpImageFile> {
        return this.#fallingAfterAJumpImage ??= this.#createImageFiles(FileCreator.fallingAfterAJumpImage,)
    }


    public get onGroundAfterJumpASound(): NullOr<OnGroundAfterAJumpSoundFile> {
        return this.#onGroundAfterJumpSound ??= FileCreator.onGroundAfterAJumpSound(this.#soundFileName,)
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImage(): CollectionHolder<TurningImageFile> {
        return this.#turningImage ??= this.#createImageFiles(FileCreator.turningImage,)
    }

    public get turningSound(): NullOr<TurningSoundFile> {
        return this.#turningSound ??= FileCreator.turningSound(this.#soundFileName,)
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): CollectionHolder<readonly [ClimbingImageFile, ClimbingImageFile,]> {
        return this.#climbingImages ??= this.#createImageFiles(FileCreator.climbingImages,)
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): CollectionHolder<readonly [GoalPoleImageFile, GoalPoleImageFile,]> {
        return this.#goalPoleImages ??= this.#createImageFiles(FileCreator.goalPoleImages,)
    }

    public get goalPoleSound(): NullOr<GoalPoleSoundFile> {
        return this.#goalPoleSound ??= FileCreator.goalPoleSound(this.#soundFileName,)
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): NullOr<LostALifeSoundFile> {
        return this.#lostALifeSound ??= FileCreator.lostALifeSound(this.#soundFileName,)
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**@deprecated Relocate elsewhere */#createImageFiles<T>(callback: (englishName: PossibleEnglishName, name: PossibleFileName,) => T,): CollectionHolder<T> {
        const englishName = this.englishName
        return mapByArray(this.__fileName.imageFileNames, it => callback(englishName, it,),)
    }

    //endregion -------------------- Methods --------------------

}

export namespace MysteryMushrooms {

    /** The companion instance of a {@link MysteryMushrooms} */
    export const Companion = MysteryMushrooms.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).MysteryMushrooms = MysteryMushrooms
