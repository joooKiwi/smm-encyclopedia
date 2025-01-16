import type {CollectionHolder}                   from '@joookiwi/collection'
import type {CompanionEnumWithParentSingleton}   from '@joookiwi/enumerable'
import type {NullOrString}                       from '@joookiwi/type'
import {CompanionEnumWithParent, EnumWithParent} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                           from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                             from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                                                                                                                                                from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleUniqueEnglishName}                                                                                                                                                from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile, FallingAfterAJumpImageFile, GoalPoleImageFile, JumpImageFile, PressingDownImageFile, RunningImageFile, SwimmingImageFile, TauntImageFile, TurningImageFile, WaitingImageFile, WalkImageFile} from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'

import {MysteryMushrooms}       from 'core/mysteryMushroom/MysteryMushrooms'
import {climbingImages}         from 'core/mysteryMushroom/file/climbing.images'
import {fallingAfterAJumpImage} from 'core/mysteryMushroom/file/fallingAfterAJump.image'
import {goalPoleImages}         from 'core/mysteryMushroom/file/goalPole.images'
import {pressingDownImage}      from 'core/mysteryMushroom/file/pressingDown.image'
import {runningImages}          from 'core/mysteryMushroom/file/running.images'
import {singleJumpImages}       from 'core/mysteryMushroom/file/singleJump.images'
import {swimmingImages}         from 'core/mysteryMushroom/file/swimming.images'
import {tauntImage}             from 'core/mysteryMushroom/file/taunt.image'
import {turningImage}           from 'core/mysteryMushroom/file/turning.image'
import {tripleJumpImages}       from 'core/mysteryMushroom/file/tripleJump.images'
import {waitingImage}           from 'core/mysteryMushroom/file/waiting.image'
import {walkImages}             from 'core/mysteryMushroom/file/walk.images'
import {Empty}                  from 'util/emptyVariables'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export abstract class MysteryMushroomImages<const IMAGE_FILE_1 extends string = string,
    const IMAGE_FILE_2 extends string = string, >
    extends EnumWithParent<MysteryMushrooms, Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    /** A {@link MysteryMushroomImages} subclass that has no image files whatsoever */
    private static readonly Empty = class Empty_MysteryMushroomImages
        extends MysteryMushroomImages<never, never> {

        public override get fileName1() { return null }
        public override get fileName2() { return null }

        public override get waiting() { return EMPTY_COLLECTION_HOLDER }
        public override get taunt() { return EMPTY_COLLECTION_HOLDER }
        public override get pressingDown() { return EMPTY_COLLECTION_HOLDER }
        public override get walk() { return EMPTY_COLLECTION_HOLDER }
        public override get running() { return EMPTY_COLLECTION_HOLDER }
        public override get swimming() { return EMPTY_COLLECTION_HOLDER }
        public override get jump() { return EMPTY_COLLECTION_HOLDER }
        public override get fallingAfterAJump() { return EMPTY_COLLECTION_HOLDER }
        public override get turning() { return EMPTY_COLLECTION_HOLDER }
        public override get climbing() { return EMPTY_COLLECTION_HOLDER }
        public override get goalPole() { return EMPTY_COLLECTION_HOLDER }

    }

    /** A {@link MysteryMushroomImages} subclass that has 1 or 2 image files */
    private static Existant = (() => {
        abstract class Existant_MysteryMushroomImages<const ENGLISH_NAME extends PossibleEnglishName,
            const IMAGE_FILE_1 extends string = string,
            const IMAGE_FILE_2 extends string = string, >
            extends MysteryMushroomImages<IMAGE_FILE_1, IMAGE_FILE_2> {

            readonly #englishName
            readonly #fileName1

            constructor(englishName: ENGLISH_NAME, fileName1: IMAGE_FILE_1,) {
                super()
                this.#englishName = englishName
                this.#fileName1 = fileName1
            }

            public override get englishName(): ENGLISH_NAME { return this.#englishName }

            public override get fileName1(): IMAGE_FILE_1 { return this.#fileName1 }

        }

        return Existant_MysteryMushroomImages
    })()

    /** A {@link MysteryMushroomImages} subclass that has 1 image file */
    private static readonly Single = class Single_MysteryMushroomImages<const ENGLISH_NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends MysteryMushroomImages.Existant<ENGLISH_NAME, FILE_NAME, never> {

        #waiting?: CollectionHolder<WaitingImageFile<FILE_NAME>>
        #taunt?: CollectionHolder<TauntImageFile<FILE_NAME>>
        #pressingDown?: CollectionHolder<PressingDownImageFile<FILE_NAME>>
        #walk?: CollectionHolder<CollectionHolder<WalkImageFile<FILE_NAME>>>
        #running?: CollectionHolder<CollectionHolder<RunningImageFile<FILE_NAME>>>
        #swimming?: CollectionHolder<CollectionHolder<SwimmingImageFile<FILE_NAME>>>
        #jump?: CollectionHolder<CollectionHolder<JumpImageFile<FILE_NAME>>>
        #fallingAfterAJump?: CollectionHolder<FallingAfterAJumpImageFile<FILE_NAME>>
        #turning?: CollectionHolder<TurningImageFile<FILE_NAME>>
        #climbing?: CollectionHolder<CollectionHolder<ClimbingImageFile<FILE_NAME>>>
        #goalPole?: CollectionHolder<CollectionHolder<GoalPoleImageFile<FILE_NAME>>>

        public get fileName2() { return null }

        public override get waiting() {
            return this.#waiting ??= new ArrayAsCollection([waitingImage(this.englishName, this.fileName1,),],)
        }

        public override get taunt() {
            return this.#taunt ??= new ArrayAsCollection([tauntImage(this.englishName, this.fileName1,),],)
        }

        public override get pressingDown() {
            return this.#pressingDown ??= new ArrayAsCollection([pressingDownImage(this.englishName, this.fileName1,),],)
        }

        public override get walk() {
            return this.#walk ??= new ArrayAsCollection([walkImages(this.englishName, this.fileName1,),],)
        }

        public override get running() {
            return this.#running ??= new ArrayAsCollection([runningImages(this.englishName, this.fileName1,),],)
        }

        public override get swimming() {
            return this.#swimming ??= new ArrayAsCollection([swimmingImages(this.englishName, this.fileName1,),],)
        }

        public override get jump() {
            return this.#jump ??= new ArrayAsCollection([singleJumpImages(this.englishName, this.fileName1,),],)
        }

        public override get fallingAfterAJump() {
            return this.#fallingAfterAJump ??= new ArrayAsCollection([fallingAfterAJumpImage(this.englishName, this.fileName1,),],)
        }

        public override get turning() {
            return this.#turning ??= new ArrayAsCollection([turningImage(this.englishName, this.fileName1,),],)
        }

        public override get climbing() {
            return this.#climbing ??= new ArrayAsCollection([climbingImages(this.englishName, this.fileName1,),],)
        }

        public override get goalPole() {
            return this.#goalPole ??= new ArrayAsCollection([goalPoleImages(this.englishName, this.fileName1,),],)
        }

    }

    /** A {@link MysteryMushroomImages} subclass that has 1 image file and the {@link jump} are animated */
    private static readonly SingleWithAnimatedJump = class SingleWithAnimatedJump_MysteryMushroomImages<const ENGLISH_NAME extends PossibleEnglishName,
        const FILE_NAME extends string, >
        extends MysteryMushroomImages.Single<ENGLISH_NAME, FILE_NAME> {

        #jump?: CollectionHolder<CollectionHolder<JumpImageFile<FILE_NAME>>>

        public override get jump() {
            return this.#jump ??= new ArrayAsCollection([tripleJumpImages(this.englishName, this.fileName1,),],)
        }

    }

    /** A {@link MysteryMushroomImages} subclass that has 2 image file */
    private static readonly Dual = class Dual_MysteryMushroomImages<const ENGLISH_NAME extends PossibleEnglishName,
        const FILE_NAME_1 extends string,
        const FILE_NAME_2 extends string, >
        extends MysteryMushroomImages.Existant<ENGLISH_NAME, FILE_NAME_1, FILE_NAME_2> {

        readonly #fileName2
        #waiting?: CollectionHolder<WaitingImageFile<| FILE_NAME_1 | FILE_NAME_2>>
        #taunt?: CollectionHolder<TauntImageFile<| FILE_NAME_1 | FILE_NAME_2>>
        #pressingDown?: CollectionHolder<PressingDownImageFile<| FILE_NAME_1 | FILE_NAME_2>>
        #walk?: CollectionHolder<CollectionHolder<WalkImageFile<| FILE_NAME_1 | FILE_NAME_2>>>
        #running?: CollectionHolder<CollectionHolder<RunningImageFile<| FILE_NAME_1 | FILE_NAME_2>>>
        #swimming?: CollectionHolder<CollectionHolder<SwimmingImageFile<| FILE_NAME_1 | FILE_NAME_2>>>
        #jump?: CollectionHolder<CollectionHolder<JumpImageFile<| FILE_NAME_1 | FILE_NAME_2>>>
        #fallingAfterAJump?: CollectionHolder<FallingAfterAJumpImageFile<| FILE_NAME_1 | FILE_NAME_2>>
        #turning?: CollectionHolder<TurningImageFile<| FILE_NAME_1 | FILE_NAME_2>>
        #climbing?: CollectionHolder<CollectionHolder<ClimbingImageFile<| FILE_NAME_1 | FILE_NAME_2>>>
        #goalPole?: CollectionHolder<CollectionHolder<GoalPoleImageFile<| FILE_NAME_1 | FILE_NAME_2>>>

        constructor(englishName: ENGLISH_NAME, fileName1: FILE_NAME_1, fileName2: FILE_NAME_2, ) {
            super(englishName, fileName1,)
            this.#fileName2 = fileName2
        }

        public get fileName2() { return this.#fileName2 }

        public override get waiting() {
            const value = this.#waiting
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#waiting = new ArrayAsCollection([
                waitingImage(englishName, this.fileName1,),
                waitingImage(englishName, this.fileName2,),
            ],)
        }

        public override get taunt() {
            const value = this.#taunt
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#taunt ??= new ArrayAsCollection([
                tauntImage(englishName, this.fileName1,),
                tauntImage(englishName, this.fileName2,),
            ],)
        }

        public override get pressingDown() {
            const value = this.#pressingDown
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#pressingDown ??= new ArrayAsCollection([
                pressingDownImage(englishName, this.fileName1,),
                pressingDownImage(englishName, this.fileName2,),
            ],)
        }

        public override get walk() {
            const value = this.#walk
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#walk ??= new ArrayAsCollection([
                walkImages(englishName, this.fileName1,),
                walkImages(englishName, this.fileName2,),
            ],)
        }

        public override get running() {
            const value = this.#running
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#running ??= new ArrayAsCollection([
                runningImages(englishName, this.fileName1,),
                runningImages(englishName, this.fileName2,),
            ],)
        }

        public override get swimming() {
            const value = this.#swimming
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#swimming ??= new ArrayAsCollection([
                swimmingImages(englishName, this.fileName1,),
                swimmingImages(englishName, this.fileName2,),
            ],)
        }

        public override get jump() {
            const value = this.#jump
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#jump ??= new ArrayAsCollection([
                singleJumpImages(englishName, this.fileName1,),
                singleJumpImages(englishName, this.fileName2,),
            ],)
        }

        public override get fallingAfterAJump() {
            const value = this.#fallingAfterAJump
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#fallingAfterAJump ??= new ArrayAsCollection([
                fallingAfterAJumpImage(englishName, this.fileName1,),
                fallingAfterAJumpImage(englishName, this.fileName2,),
            ],)
        }

        public override get turning() {
            const value = this.#turning
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#turning ??= new ArrayAsCollection([
                turningImage(englishName, this.fileName1,),
                turningImage(englishName, this.fileName2,),
            ],)
        }

        public override get climbing() {
            const value = this.#climbing
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#climbing ??= new ArrayAsCollection([
                climbingImages(englishName, this.fileName1,),
                climbingImages(englishName, this.fileName2,),
            ],)
        }

        public override get goalPole() {
            const value = this.#goalPole
            if (value != null)
                return value

            const englishName = this.englishName
            return this.#goalPole ??= new ArrayAsCollection([
                goalPoleImages(englishName, this.fileName1,),
                goalPoleImages(englishName, this.fileName2,),
            ],)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new MysteryMushroomImages.Empty()

    public static readonly YAMAMURA =               new MysteryMushroomImages.Single( 'Yamamura', 'Boss017',)
    public static readonly MARY_O =                 new MysteryMushroomImages.Single('Mary O.', 'Boss026',)
    public static readonly UNDODOG =                new MysteryMushroomImages.Single('Undodog', 'Boss048',)

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushroomImages.Single('Mr. Game & Watch', 'GameWatch',)

    public static readonly PAC_MAN =                new MysteryMushroomImages.Single('PAC-MAN', 'PackMan',)

    public static readonly MARIO =                  new MysteryMushroomImages.Single('Mario', 'Mario',)
    public static readonly LUIGI =                  new MysteryMushroomImages.Single('Luigi', 'Luigi',)
    public static readonly PROFESSOR_E_GADD =       new MysteryMushroomImages.Single('Professor E. Gadd', 'Boss019',)
    public static readonly PEACH =                  new MysteryMushroomImages.Single('Peach', 'Peach',)
    public static readonly DAISY =                  new MysteryMushroomImages.Single('Daisy', 'Boss018',)
    public static readonly ROSALINA =               new MysteryMushroomImages.Single('Rosalina', 'Rosalina',)
    public static readonly TOAD =                   new MysteryMushroomImages.Single('Toad', 'Kinopio',)
    public static readonly CAPTAIN_TOAD =           new MysteryMushroomImages.Single('Captain Toad', 'Boss014',)
    public static readonly TOADETTE =               new MysteryMushroomImages.Single('Toadette', 'Boss027',)
    public static readonly YOSHI =                  new MysteryMushroomImages.Single('Yoshi', 'Yoshi',)
    public static readonly BIRDO =                  new MysteryMushroomImages.Single('Birdo', 'Boss016',)
    public static readonly WARIO =                  new MysteryMushroomImages.Single('Wario', 'Wario',)
    public static readonly ASHLEY =                 new MysteryMushroomImages.Single('Ashley', 'Ashley',)
    public static readonly WALUIGI =                new MysteryMushroomImages.Single('Waluigi', 'Waluigi',)
    public static readonly BOWSER =                 new MysteryMushroomImages.Single('Bowser', 'Koopa',)
    public static readonly BOWSER_JR =              new MysteryMushroomImages.Single('Bowser Jr.', 'KoopaJr',)
    public static readonly GOOMBA =                 new MysteryMushroomImages.Single('Goomba', 'Kuribo',)
    public static readonly SHY_GUY =                new MysteryMushroomImages.Single('Shy Guy', 'Heiho',)
    public static readonly NABBIT =                 new MysteryMushroomImages.Single('Nabbit', 'Boss032',)
    public static readonly MARIO_SILVER =           new MysteryMushroomImages.Single('Mario (Silver)', 'MarioSilver',)
    public static readonly MARIO_GOLD =             new MysteryMushroomImages.Single('Mario (Gold)', 'MarioGold',)
    public static readonly BUILDER_MARIO =          new MysteryMushroomImages.Single('Builder Mario', 'DiyMario',)
    public static readonly DR_MARIO =               new MysteryMushroomImages.Single('Dr. Mario', 'DrMario',)
    public static readonly FROG_MARIO =             new MysteryMushroomImages.Single('Frog Mario', 'Boss006',)
    public static readonly STATUE_MARIO =           new MysteryMushroomImages.Single('Statue Mario', 'Boss025',)
    public static readonly MARIO_TRIO =             new MysteryMushroomImages.Single('Mario Trio', 'Boss007',)
    public static readonly KART_MARIO =             new MysteryMushroomImages.Single('Kart Mario', 'MarioKart',)
    public static readonly CAT_MARIO =              new MysteryMushroomImages.Single('Cat Mario', 'Boss003',)
    public static readonly CAT_PEACH =              new MysteryMushroomImages.Single('Cat Peach', 'Boss004',)
    public static readonly SKY_POP =                new MysteryMushroomImages.Single('Sky Pop', 'Boss010',)
    public static readonly BABY_MARIO =             new MysteryMushroomImages.Single('Baby Mario', 'Boss037',)
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushroomImages.Dual('? Block', 'Block', 'Block L',)
    public static readonly TRAMPOLINE =             new MysteryMushroomImages.Single('Trampoline', 'Trampoline',)
    public static readonly MARIO_MB =               new MysteryMushroomImages.Single('Mario', 'MarioOriginal',)
    public static readonly SIDESTEPPER =            new MysteryMushroomImages.Single('Sidestepper', 'SideStepper',)
    public static readonly SHELLCREEPER =           new MysteryMushroomImages.Single('Shellcreeper', 'Shellcreeper',)
    public static readonly FIGHTER_FLY =            new MysteryMushroomImages.Single('Fighter Fly', 'Fightfly',)

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushroomImages.Single('Green Yarn Yoshi', 'WoolYoshiGreen',)
    public static readonly PINK_YARN_YOSHI =        new MysteryMushroomImages.Single('Pink Yarn Yoshi', 'WoolYoshiPink',)
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushroomImages.Single('Light-Blue Yarn Yoshi', 'WoolYoshiAqua',)
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushroomImages.Single('Mega Yarn Yoshi', 'WoolYoshiBig',)

    public static readonly DONKEY_KONG =            new MysteryMushroomImages.Single('Donkey Kong', 'DonkeyKong',)
    public static readonly DONKEY_KONG_JR =         new MysteryMushroomImages.Single('Donkey Kong Jr.', 'DonkeyKongJr',)
    public static readonly DIDDY_KONG =             new MysteryMushroomImages.Single('Diddy Kong', 'DiddyKong',)

    public static readonly LITTLE_MAC =             new MysteryMushroomImages.Single('Little Mac', 'LittleMac',)

    public static readonly DUCK_HUNT =              new MysteryMushroomImages.Single('Duck Hunt', 'DuckHunt',)

    public static readonly BUBBLES =                new MysteryMushroomImages.Single('Bubbles', 'Boss040',)

    public static readonly BIKE =                   new MysteryMushroomImages.Single('Bike', 'Boss015',)

    public static readonly BALLOON_FIGHTER =        new MysteryMushroomImages.Single('Balloon Fighter', 'Boss031',)

    public static readonly POPO_AND_NANA =          new MysteryMushroomImages.Single('Popo & Nana', 'Boss044',)

    public static readonly FOREMAN_SPIKE =          new MysteryMushroomImages.Single('Foreman Spike', 'Blackey',)

    public static readonly LINK =                   new MysteryMushroomImages.Single('Link', 'Link',)
    public static readonly ZELDA =                  new MysteryMushroomImages.Single('Zelda', 'Zelda',)
    public static readonly SHEIK =                  new MysteryMushroomImages.Single('Sheik', 'Sheik',)
    public static readonly TOON_LINK =              new MysteryMushroomImages.Single('Toon Link', 'ThunLink',)
    public static readonly TETRA =                  new MysteryMushroomImages.Single('Tetra', 'Boss033',)
    public static readonly TINGLE =                 new MysteryMushroomImages.Single('Tingle', 'Tincle',)
    public static readonly GANONDORF =              new MysteryMushroomImages.Single('Ganondorf', 'Ganon',)
    public static readonly WOLF_LINK =              new MysteryMushroomImages.Single('Wolf Link', 'Boss030',)
    public static readonly TOTEM_LINK =             new MysteryMushroomImages.Single('Totem Link', 'Boss000',)

    public static readonly SAMUS =                  new MysteryMushroomImages.Single('Samus', 'Samus',)
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushroomImages.Single('Zero Suit Samus', 'ZeroSams',)

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushroomImages.Single('Volleyball Player', 'Boss042',)

    public static readonly PIT =                    new MysteryMushroomImages.Single('Pit', 'Pit',)
    public static readonly PALUTENA =               new MysteryMushroomImages.Single('Palutena', 'Palutena',)
    public static readonly DARK_PIT =               new MysteryMushroomImages.Single('Dark Pit', 'DarkPit',)

    public static readonly DONBE =                  new MysteryMushroomImages.Single('Donbe', 'Boss034',)
    public static readonly HIKARI =                 new MysteryMushroomImages.Single('Hikari', 'Boss035',)

    public static readonly MEGA_MAN =               new MysteryMushroomImages.Single('Mega Man', 'MegaMan',)

    public static readonly AYUMI_TACHIBANA =        new MysteryMushroomImages.Single('Ayumi Tachibana', 'Boss036',)

    public static readonly MARTH =                  new MysteryMushroomImages.Single('Marth', 'Marth',)
    public static readonly IKE =                    new MysteryMushroomImages.Single('Ike', 'Ike',)
    public static readonly LUCINA =                 new MysteryMushroomImages.Single('Lucina', 'Lucina',)
    public static readonly ROBIN =                  new MysteryMushroomImages.Single('Robin', 'Robin',)

    public static readonly CAPTAIN_FALCON =         new MysteryMushroomImages.Single('Captain Falcon', 'Falcon',)

    public static readonly SONIC =                  new MysteryMushroomImages.SingleWithAnimatedJump('Sonic', 'Sonic',)

    public static readonly KIRBY =                  new MysteryMushroomImages.Single('Kirby', 'Kirby',)
    public static readonly KING_DEDEDE =            new MysteryMushroomImages.Single('King Dedede', 'Dedede',)
    public static readonly META_KNIGHT =            new MysteryMushroomImages.Single('Meta Knight', 'MetaKnight',)

    public static readonly FOX_MCCLOUD =            new MysteryMushroomImages.Single('Fox McCloud', 'Fox',)
    public static readonly FALCO_LOMBARDI =         new MysteryMushroomImages.Single('Falco Lombardi', 'Falco',)
    public static readonly SLIPPY_TOAD =            new MysteryMushroomImages.Single('Slippy Toad', 'Slippy',)
    public static readonly PEPPY_HARE =             new MysteryMushroomImages.Single('Peppy Hare', 'Peppy',)
    public static readonly ARWING =                 new MysteryMushroomImages.Single('Arwing', 'Arwing',)

    public static readonly NESS =                   new MysteryMushroomImages.Single('Ness', 'Ness',)
    public static readonly LUCAS =                  new MysteryMushroomImages.Single('Lucas', 'Lucas',)
    public static readonly MASTER_BELCH =           new MysteryMushroomImages.Single('Master Belch', 'Boss012',)
    public static readonly MR_SATURN =              new MysteryMushroomImages.Single('Mr. Saturn', 'Boss013',)

    public static readonly BULBASAUR =              new MysteryMushroomImages.Single('Bulbasaur', 'Boss020',)
    public static readonly CHARMANDER =             new MysteryMushroomImages.Single('Charmander', 'Boss021',)
    public static readonly CHARIZARD =              new MysteryMushroomImages.Single('Charizard', 'Charizard',)
    public static readonly SQUIRTLE =               new MysteryMushroomImages.Single('Squirtle', 'Boss022',)
    public static readonly PIKACHU =                new MysteryMushroomImages.Single('Pikachu', 'Pikachu',)
    public static readonly JIGGLYPUFF =             new MysteryMushroomImages.Single('Jigglypuff', 'Pudding',)
    public static readonly MEWTWO =                 new MysteryMushroomImages.Single('Mewtwo', 'Mewtwo',)
    public static readonly LUCARIO =                new MysteryMushroomImages.Single('Lucario', 'Lucario',)
    public static readonly GRENINJA =               new MysteryMushroomImages.Single('Greninja', 'Greninja',)

    public static readonly VILLAGER =               new MysteryMushroomImages.Single('Villager', 'Murabito',)
    public static readonly TOM_NOOK =               new MysteryMushroomImages.Single('Tom Nook', 'Tanuki',)
    public static readonly K_K_SLIDER =             new MysteryMushroomImages.Single('K.K. Slider', 'Totakeke',)
    public static readonly RESETTI =                new MysteryMushroomImages.Single('Resetti', 'ResetSan',)
    public static readonly ROVER =                  new MysteryMushroomImages.Single('Rover', 'MishiNeko',)
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushroomImages.Single('Timmy & Tommy', 'TsubuMame',)
    public static readonly BLATHERS =               new MysteryMushroomImages.Single('Blathers', 'Futa',)
    public static readonly MABEL =                  new MysteryMushroomImages.Single('Mabel', 'Kinuyo',)
    public static readonly KAPP_N =                 new MysteryMushroomImages.Single('Kapp’n', 'Kappei',)
    public static readonly CELESTE =                new MysteryMushroomImages.Single('Celeste', 'Fuko',)
    public static readonly KICKS =                  new MysteryMushroomImages.Single('Kicks', 'Shunk',)
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushroomImages.Single('Isabelle (Summer Outfit)', 'Sizue',)
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushroomImages.Single('Isabelle (Winter Outfit)', 'SizueWinter',)
    public static readonly DIGBY =                  new MysteryMushroomImages.Single('Digby', 'Kento',)
    public static readonly CYRUS =                  new MysteryMushroomImages.Single('Cyrus', 'Kaizo',)
    public static readonly REESE =                  new MysteryMushroomImages.Single('Reese', 'Lisa',)
    public static readonly LOTTIE =                 new MysteryMushroomImages.Single('Lottie', 'Takumi',)

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushroomImages.Single('Captain Olimar', 'Orima',)
    public static readonly PIKMIN =                 new MysteryMushroomImages.Single('Pikmin', 'Pikmin',)

    public static readonly CHIBI_ROBO =             new MysteryMushroomImages.Single('Chibi-Robo', 'ChibiRobo',)

    public static readonly WII_BALANCE_BOARD =      new MysteryMushroomImages.Single('Wii Balance Board', 'Wiibo',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushroomImages.Single('Wii Fit Trainer', 'Fit',)

    public static readonly SHULK =                  new MysteryMushroomImages.Single('Shulk', 'Shulk',)

    public static readonly FELYNE =                 new MysteryMushroomImages.Single('Felyne', 'Boss009',)

    public static readonly YU_AYASAKI =             new MysteryMushroomImages.Single('Yu Ayasaki', 'Boss028',)

    public static readonly DR_KAWASHIMA =           new MysteryMushroomImages.Single('Dr. Kawashima', 'Boss049',)

    public static readonly DR_LOBE =                new MysteryMushroomImages.Single('Dr. Lobe', 'MrHakari',)

    public static readonly BARBARA_THE_BAT =        new MysteryMushroomImages.Single('Barbara the Bat', 'Boss024',)

    public static readonly STARFY =                 new MysteryMushroomImages.Single('Starfy', 'Boss029',)

    public static readonly MALLO =                  new MysteryMushroomImages.Single('Mallo', 'Boss039',)

    public static readonly NIKKI =                  new MysteryMushroomImages.Single('Nikki', 'Nikki',)
    public static readonly IRIS_ARCHWELL =          new MysteryMushroomImages.Single('Iris Archwell', 'Boss038',)
    public static readonly ARCADE_BUNNY =           new MysteryMushroomImages.Single('Arcade bunny', 'Boss011',)

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushroomImages.Single('Chitoge Kirisaki', 'Boss023',)

    public static readonly INKLING_SQUID =          new MysteryMushroomImages.Single('Inkling Squid', 'SplaIka',)
    public static readonly INKLING_BOY =            new MysteryMushroomImages.Dual('Inkling Boy', 'SplaBoy', 'SplaBoy W',)
    public static readonly INKLING_GIRL =           new MysteryMushroomImages.Dual('Inkling Girl', 'SplaGirl', 'SplaGirl W',)
    public static readonly CALLIE =                 new MysteryMushroomImages.Dual('Callie', 'Boss050', 'SplaAori W',)
    public static readonly MARIE =                  new MysteryMushroomImages.Dual('Marie', 'Boss051', 'SplaHotaru W',)

    public static readonly ROB =                    new MysteryMushroomImages.Dual('R.O.B.', 'Robot USEU', 'Robot JP',)
    public static readonly DISKUN =                 new MysteryMushroomImages.Single('Diskun', 'Boss041',)
    public static readonly MAHJONG_TILE =           new MysteryMushroomImages.Single('Mahjong Tile', 'MahjongTile',)

    public static readonly KITTY_WHITE =            new MysteryMushroomImages.Dual('Kitty White', 'Boss045', 'Boss045 L',)
    public static readonly MELODY =                 new MysteryMushroomImages.Dual('Melody', 'Boss046', 'Boss046 L',)
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushroomImages.Single('Shaun the Sheep', 'Boss047',)

    public static readonly ARINO_KACHO =            new MysteryMushroomImages.Single('Arino KACHO', 'Boss001',)
    public static readonly SUPER_MARIO_KUN =        new MysteryMushroomImages.Single('SUPER MARIO KUN', 'Boss002',)
    public static readonly NECKY =                  new MysteryMushroomImages.Single('Necky', 'Boss005',)
    public static readonly GLA =                    new MysteryMushroomImages.Single('GLA', 'Boss008',)
    public static readonly BABYMETAL =              new MysteryMushroomImages.Single('BABYMETAL', 'Boss043',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumWithParentSingleton<MysteryMushroomImages, typeof MysteryMushroomImages, MysteryMushrooms, typeof MysteryMushrooms>
        = class CompanionEnum_MysteryMushroomImages
        extends CompanionEnumWithParent<MysteryMushroomImages, typeof MysteryMushroomImages, MysteryMushrooms, typeof MysteryMushrooms> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MysteryMushroomImages

        private constructor() {
            super(MysteryMushroomImages, MysteryMushrooms,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_MysteryMushroomImages()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    #englishName?: PossibleEnglishName
    #uniqueEnglishName?: PossibleUniqueEnglishName
    #englishNameInHtml?: string
    #reference?: MysteryMushroom

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() { super() }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName { return this.#englishName ??= this.parent.englishName }
    public get uniqueEnglishName(): PossibleUniqueEnglishName { return this.#uniqueEnglishName ??= this.parent.uniqueEnglishName }
    public get englishNameInHtml(): string { return this.#englishNameInHtml ??= this.parent.englishNameInHtml }

    public abstract get fileName1(): NullOrString<IMAGE_FILE_1>
    public abstract get fileName2(): NullOrString<IMAGE_FILE_2>

    public get reference(): MysteryMushroom { return this.#reference ??= this.parent.reference }

    public abstract get waiting(): CollectionHolder<WaitingImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>
    public abstract get taunt(): CollectionHolder<TauntImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>
    public abstract get pressingDown(): CollectionHolder<PressingDownImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>
    public abstract get walk(): CollectionHolder<CollectionHolder<WalkImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>
    public abstract get running(): CollectionHolder<CollectionHolder<RunningImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>
    public abstract get swimming(): CollectionHolder<CollectionHolder<SwimmingImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>
    public abstract get jump(): CollectionHolder<CollectionHolder<JumpImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>
    public abstract get fallingAfterAJump(): CollectionHolder<FallingAfterAJumpImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>
    public abstract get turning(): CollectionHolder<TurningImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>
    public abstract get climbing(): CollectionHolder<CollectionHolder<ClimbingImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>
    public abstract get goalPole(): CollectionHolder<CollectionHolder<GoalPoleImageFile<| IMAGE_FILE_1 | IMAGE_FILE_2>>>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
