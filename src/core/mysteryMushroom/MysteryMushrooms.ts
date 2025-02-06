import type {Nullable, NullOr} from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                           from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                             from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                                                                                                                                                from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageFileName1, PossibleImageFileName2, PossibleSoundFileName, PossibleUniqueEnglishName}                                                                         from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile, FallingAfterAJumpImageFile, GoalPoleImageFile, JumpImageFile, PressingDownImageFile, RunningImageFile, SwimmingImageFile, TauntImageFile, TurningImageFile, WaitingImageFile, WalkImageFile} from 'core/mysteryMushroom/file/MysteryMushroom.imageFile'
import type {GoalPoleSoundFile, FirstJumpSoundFile, LostALifeSoundFile, OnGroundAfterAJumpSoundFile, PowerUpCollectedSoundFile, TauntSoundFile, TurningSoundFile, SecondJumpSoundFile}                                       from 'core/mysteryMushroom/file/MysteryMushroom.soundFile'
import type {CompanionEnumByNameSingleton}                                                                                                                                                                                   from 'util/enumerable/Singleton.types'

import {MysteryMushroomImages} from 'core/mysteryMushroom/MysteryMushroomImages'
import {MysteryMushroomLoader} from 'core/mysteryMushroom/MysteryMushroom.loader'
import {MysteryMushroomSounds} from 'core/mysteryMushroom/MysteryMushroomSounds'
import {StringContainer}       from 'util/StringContainer'
import {CompanionEnumByName}   from 'util/enumerable/companion/CompanionEnumByName'

export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new MysteryMushrooms('Mystery Mushroom',)

    public static readonly YAMAMURA =               new MysteryMushrooms('Yamamura',)
    public static readonly MARY_O =                 new MysteryMushrooms('Mary O.',)
    public static readonly UNDODOG =                new MysteryMushrooms('Undodog',)

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushrooms('Mr. Game & Watch',)

    public static readonly PAC_MAN =                new MysteryMushrooms('PAC-MAN',)

    public static readonly MARIO =                  new MysteryMushrooms('Mario',)
    public static readonly LUIGI =                  new MysteryMushrooms('Luigi',)
    public static readonly PROFESSOR_E_GADD =       new MysteryMushrooms('Professor E. Gadd',)
    public static readonly PEACH =                  new MysteryMushrooms('Peach',)
    public static readonly DAISY =                  new MysteryMushrooms('Daisy',)
    public static readonly ROSALINA =               new MysteryMushrooms('Rosalina',)
    public static readonly TOAD =                   new MysteryMushrooms('Toad',)
    public static readonly CAPTAIN_TOAD =           new MysteryMushrooms('Captain Toad',)
    public static readonly TOADETTE =               new MysteryMushrooms('Toadette',)
    public static readonly YOSHI =                  new MysteryMushrooms('Yoshi',)
    public static readonly BIRDO =                  new MysteryMushrooms('Birdo',)
    public static readonly WARIO =                  new MysteryMushrooms('Wario',)
    public static readonly ASHLEY =                 new MysteryMushrooms('Ashley',)
    public static readonly WALUIGI =                new MysteryMushrooms('Waluigi',)
    public static readonly BOWSER =                 new MysteryMushrooms('Bowser',)
    public static readonly BOWSER_JR =              new MysteryMushrooms('Bowser Jr.',)
    public static readonly GOOMBA =                 new MysteryMushrooms('Goomba',)
    public static readonly SHY_GUY =                new MysteryMushrooms('Shy Guy',)
    public static readonly NABBIT =                 new MysteryMushrooms('Nabbit',)
    public static readonly MARIO_SILVER =           new MysteryMushrooms('Mario (Silver)',)
    public static readonly MARIO_GOLD =             new MysteryMushrooms('Mario (Gold)',)
    public static readonly BUILDER_MARIO =          new MysteryMushrooms('Builder Mario',)
    public static readonly DR_MARIO =               new MysteryMushrooms('Dr. Mario',)
    public static readonly FROG_MARIO =             new MysteryMushrooms('Frog Mario',)
    public static readonly STATUE_MARIO =           new MysteryMushrooms('Statue Mario',)
    public static readonly MARIO_TRIO =             new MysteryMushrooms('Mario Trio',)
    public static readonly KART_MARIO =             new MysteryMushrooms('Kart Mario',)
    public static readonly CAT_MARIO =              new MysteryMushrooms('Cat Mario',)
    public static readonly CAT_PEACH =              new MysteryMushrooms('Cat Peach',)
    public static readonly SKY_POP =                new MysteryMushrooms('Sky Pop',)
    public static readonly BABY_MARIO =             new MysteryMushrooms('Baby Mario',)
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushrooms('? Block',)
    public static readonly TRAMPOLINE =             new MysteryMushrooms('Trampoline',)
    public static readonly MARIO_MB =               new MysteryMushrooms('Mario', 'Mario (MB)',)
    public static readonly SIDESTEPPER =            new MysteryMushrooms('Sidestepper',)
    public static readonly SHELLCREEPER =           new MysteryMushrooms('Shellcreeper',)
    public static readonly FIGHTER_FLY =            new MysteryMushrooms('Fighter Fly',)

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushrooms('Green Yarn Yoshi',)
    public static readonly PINK_YARN_YOSHI =        new MysteryMushrooms('Pink Yarn Yoshi',)
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms('Light-Blue Yarn Yoshi',)
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushrooms('Mega Yarn Yoshi',)

    public static readonly DONKEY_KONG =            new MysteryMushrooms('Donkey Kong',)
    public static readonly DONKEY_KONG_JR =         new MysteryMushrooms('Donkey Kong Jr.',)
    public static readonly DIDDY_KONG =             new MysteryMushrooms('Diddy Kong',)

    public static readonly LITTLE_MAC =             new MysteryMushrooms('Little Mac',)

    public static readonly DUCK_HUNT =              new MysteryMushrooms('Duck Hunt',)

    public static readonly BUBBLES =                new MysteryMushrooms('Bubbles',)

    public static readonly BIKE =                   new MysteryMushrooms('Bike',)

    public static readonly BALLOON_FIGHTER =        new MysteryMushrooms('Balloon Fighter',)

    public static readonly POPO_AND_NANA =          new MysteryMushrooms('Popo & Nana',)

    public static readonly FOREMAN_SPIKE =          new MysteryMushrooms('Foreman Spike',)

    public static readonly LINK =                   new MysteryMushrooms('Link',)
    public static readonly ZELDA =                  new MysteryMushrooms('Zelda',)
    public static readonly SHEIK =                  new MysteryMushrooms('Sheik',)
    public static readonly TOON_LINK =              new MysteryMushrooms('Toon Link',)
    public static readonly TETRA =                  new MysteryMushrooms('Tetra',)
    public static readonly TINGLE =                 new MysteryMushrooms('Tingle',)
    public static readonly GANONDORF =              new MysteryMushrooms('Ganondorf',)
    public static readonly WOLF_LINK =              new MysteryMushrooms('Wolf Link',)
    public static readonly TOTEM_LINK =             new MysteryMushrooms('Totem Link',)

    public static readonly SAMUS =                  new MysteryMushrooms('Samus',)
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushrooms('Zero Suit Samus',)

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushrooms('Volleyball Player',)

    public static readonly PIT =                    new MysteryMushrooms('Pit',)
    public static readonly PALUTENA =               new MysteryMushrooms('Palutena',)
    public static readonly DARK_PIT =               new MysteryMushrooms('Dark Pit',)

    public static readonly DONBE =                  new MysteryMushrooms('Donbe',)
    public static readonly HIKARI =                 new MysteryMushrooms('Hikari',)

    public static readonly MEGA_MAN =               new MysteryMushrooms('Mega Man',)

    public static readonly AYUMI_TACHIBANA =        new MysteryMushrooms('Ayumi Tachibana',)

    public static readonly MARTH =                  new MysteryMushrooms('Marth',)
    public static readonly IKE =                    new MysteryMushrooms('Ike',)
    public static readonly LUCINA =                 new MysteryMushrooms('Lucina',)
    public static readonly ROBIN =                  new MysteryMushrooms('Robin',)

    public static readonly CAPTAIN_FALCON =         new MysteryMushrooms('Captain Falcon',)

    public static readonly SONIC =                  new MysteryMushrooms('Sonic',)

    public static readonly KIRBY =                  new MysteryMushrooms('Kirby',)
    public static readonly KING_DEDEDE =            new MysteryMushrooms('King Dedede',)
    public static readonly META_KNIGHT =            new MysteryMushrooms('Meta Knight',)

    public static readonly FOX_MCCLOUD =            new MysteryMushrooms('Fox McCloud',)
    public static readonly FALCO_LOMBARDI =         new MysteryMushrooms('Falco Lombardi',)
    public static readonly SLIPPY_TOAD =            new MysteryMushrooms('Slippy Toad',)
    public static readonly PEPPY_HARE =             new MysteryMushrooms('Peppy Hare',)
    public static readonly ARWING =                 new MysteryMushrooms('Arwing',)

    public static readonly NESS =                   new MysteryMushrooms('Ness',)
    public static readonly LUCAS =                  new MysteryMushrooms('Lucas',)
    public static readonly MASTER_BELCH =           new MysteryMushrooms('Master Belch',)
    public static readonly MR_SATURN =              new MysteryMushrooms('Mr. Saturn',)

    public static readonly BULBASAUR =              new MysteryMushrooms('Bulbasaur',)
    public static readonly CHARMANDER =             new MysteryMushrooms('Charmander',)
    public static readonly CHARIZARD =              new MysteryMushrooms('Charizard',)
    public static readonly SQUIRTLE =               new MysteryMushrooms('Squirtle',)
    public static readonly PIKACHU =                new MysteryMushrooms('Pikachu',)
    public static readonly JIGGLYPUFF =             new MysteryMushrooms('Jigglypuff',)
    public static readonly MEWTWO =                 new MysteryMushrooms('Mewtwo',)
    public static readonly LUCARIO =                new MysteryMushrooms('Lucario',)
    public static readonly GRENINJA =               new MysteryMushrooms('Greninja',)

    public static readonly VILLAGER =               new MysteryMushrooms('Villager',)
    public static readonly TOM_NOOK =               new MysteryMushrooms('Tom Nook',)
    public static readonly K_K_SLIDER =             new MysteryMushrooms('K.K. Slider',)
    public static readonly RESETTI =                new MysteryMushrooms('Resetti',)
    public static readonly ROVER =                  new MysteryMushrooms('Rover',)
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushrooms('Timmy & Tommy',)
    public static readonly BLATHERS =               new MysteryMushrooms('Blathers',)
    public static readonly MABEL =                  new MysteryMushrooms('Mabel',)
    public static readonly KAPP_N =                 new MysteryMushrooms('Kapp’n',)
    public static readonly CELESTE =                new MysteryMushrooms('Celeste',)
    public static readonly KICKS =                  new MysteryMushrooms('Kicks',)
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms('Isabelle (Summer Outfit)',)
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushrooms('Isabelle (Winter Outfit)',)
    public static readonly DIGBY =                  new MysteryMushrooms('Digby',)
    public static readonly CYRUS =                  new MysteryMushrooms('Cyrus',)
    public static readonly REESE =                  new MysteryMushrooms('Reese',)
    public static readonly LOTTIE =                 new MysteryMushrooms('Lottie',)

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushrooms('Captain Olimar',)
    public static readonly PIKMIN =                 new MysteryMushrooms('Pikmin',)

    public static readonly CHIBI_ROBO =             new MysteryMushrooms('Chibi-Robo',)

    public static readonly WII_BALANCE_BOARD =      new MysteryMushrooms('Wii Balance Board',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms('Wii Fit Trainer',)

    public static readonly SHULK =                  new MysteryMushrooms('Shulk',)

    public static readonly FELYNE =                 new MysteryMushrooms('Felyne',)

    public static readonly YU_AYASAKI =             new MysteryMushrooms('Yu Ayasaki',)

    public static readonly DR_KAWASHIMA =           new MysteryMushrooms('Dr. Kawashima',)

    public static readonly DR_LOBE =                new MysteryMushrooms('Dr. Lobe',)

    public static readonly BARBARA_THE_BAT =        new MysteryMushrooms('Barbara the Bat',)

    public static readonly STARFY =                 new MysteryMushrooms('Starfy',)

    public static readonly MALLO =                  new MysteryMushrooms('Mallo',)

    public static readonly NIKKI =                  new MysteryMushrooms('Nikki',)
    public static readonly IRIS_ARCHWELL =          new MysteryMushrooms('Iris Archwell',)
    public static readonly ARCADE_BUNNY =           new MysteryMushrooms('Arcade bunny',)

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushrooms('Chitoge Kirisaki',)

    public static readonly INKLING_SQUID =          new MysteryMushrooms('Inkling Squid',)
    public static readonly INKLING_BOY =            new MysteryMushrooms('Inkling Boy',)
    public static readonly INKLING_GIRL =           new MysteryMushrooms('Inkling Girl',)
    public static readonly CALLIE =                 new MysteryMushrooms('Callie',)
    public static readonly MARIE =                  new MysteryMushrooms('Marie',)

    public static readonly ROB =                    new MysteryMushrooms('R.O.B.',)
    public static readonly DISKUN =                 new MysteryMushrooms('Diskun',)
    public static readonly MAHJONG_TILE =           new MysteryMushrooms('Mahjong Tile',)

    public static readonly KITTY_WHITE =            new MysteryMushrooms('Kitty White',)
    public static readonly MELODY =                 new MysteryMushrooms('Melody',)
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushrooms('Shaun the Sheep')

    public static readonly ARINO_KACHO =            new MysteryMushrooms('Arino KACHO',)
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms('SUPER MARIO KUN',)
    public static readonly NECKY =                  new MysteryMushrooms('Necky',)
    public static readonly GLA =                    new MysteryMushrooms('GLA',)
    public static readonly BABYMETAL =              new MysteryMushrooms('BABYMETAL',)

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

                return it.imageFileName1 === value
                    || it.imageFileName2 === value
                    || it.soundFileName === value
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

    #imageFileReference?: MysteryMushroomImages
    #soundFileReference?: MysteryMushroomSounds

    #imageFileName1?: PossibleImageFileName1
    #imageFileName2?: PossibleImageFileName2
    #soundFileName?: PossibleSoundFileName

    #powerUpCollectedSound?: NullOr<PowerUpCollectedSoundFile>

    #waitingImage?: CollectionHolder<WaitingImageFile>

    #tauntImage?: CollectionHolder<TauntImageFile>
    #tauntSound?: NullOr<TauntSoundFile>

    #pressingDownImage?: CollectionHolder<PressingDownImageFile>

    #walkImages?: CollectionHolder<CollectionHolder<WalkImageFile>>

    #runningImages?: CollectionHolder<CollectionHolder<RunningImageFile>>

    #swimmingImages?: CollectionHolder<CollectionHolder<SwimmingImageFile>>

    #jumpImages?: CollectionHolder<CollectionHolder<JumpImageFile>>
    #jumpSound1?: NullOr<FirstJumpSoundFile>
    #jumpSound2?: NullOr<SecondJumpSoundFile>
    #fallingAfterAJumpImage?: CollectionHolder<FallingAfterAJumpImageFile>
    #onGroundAfterAJumpSound?: NullOr<OnGroundAfterAJumpSoundFile>

    #turningSound?: NullOr<TurningSoundFile>
    #turningImage?: CollectionHolder<TurningImageFile>

    #climbingImages?: CollectionHolder<CollectionHolder<ClimbingImageFile>>

    #goalPoleImages?: CollectionHolder<CollectionHolder<GoalPoleImageFile>>
    #goalPoleSound?: NullOr<GoalPoleSoundFile>

    #lostALifeSound?: NullOr<LostALifeSoundFile>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#uniqueEnglishName = uniqueEnglishName
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
        return this.#reference ??= MysteryMushrooms.REFERENCE_MAP.get(this.englishName,)!
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

    /** The sound file name associated to the current {@link MysteryMushroom} */
    public get soundFileName(): PossibleSoundFileName {
        const value = this.#soundFileName
        if (value !== undefined)
            return value
        return this.#soundFileName = this.soundFileReference.fileName as PossibleSoundFileName
    }

    /** The first image file name associated to the current {@link MysteryMushroom} */
    public get imageFileName1(): PossibleImageFileName1 {
        const value = this.#imageFileName1
        if (value !== undefined)
            return value
        return this.#imageFileName1 = this.imageFileReference.fileName1 as PossibleImageFileName1
    }

    /** The second image file name associated to the current {@link MysteryMushroom} */
    public get imageFileName2(): PossibleImageFileName2 {
        const value = this.#imageFileName2
        if (value !== undefined)
            return value
        return this.#imageFileName2 = this.imageFileReference.fileName2 as PossibleImageFileName2
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): NullOr<PowerUpCollectedSoundFile> {
        const value = this.#powerUpCollectedSound
        if (value !== undefined)
            return value
        return this.#powerUpCollectedSound = this.soundFileReference.powerUpCollected
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImage(): CollectionHolder<WaitingImageFile> {
        return this.#waitingImage ??= this.imageFileReference.waiting
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImage(): CollectionHolder<TauntImageFile> {
        return this.#tauntImage ??= this.imageFileReference.taunt
    }

    public get tauntSound(): NullOr<TauntSoundFile> {
        const value = this.#tauntSound
        if (value !== undefined)
            return value
        return this.#tauntSound = this.soundFileReference.taunt
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get pressingDownImage(): CollectionHolder<PressingDownImageFile> {
        return this.#pressingDownImage ??= this.imageFileReference.pressingDown
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): CollectionHolder<CollectionHolder<WalkImageFile>> {
        return this.#walkImages ??= this.imageFileReference.walk
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): CollectionHolder<CollectionHolder<RunningImageFile>> {
        return this.#runningImages ??= this.imageFileReference.running
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): CollectionHolder<CollectionHolder<SwimmingImageFile>> {
        return this.#swimmingImages ??= this.imageFileReference.swimming
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    public get jumpImages(): CollectionHolder<CollectionHolder<JumpImageFile>> {
        return this.#jumpImages ??= this.imageFileReference.jump
    }

    public get jumpSound1(): NullOr<FirstJumpSoundFile> {
        const value = this.#jumpSound1
        if (value !== undefined)
            return value
        return this.#jumpSound1 = this.soundFileReference.jump1
    }

    public get jumpSound2(): NullOr<SecondJumpSoundFile> {
        const value = this.#jumpSound2
        if (value !== undefined)
            return value
        return this.#jumpSound2 = this.soundFileReference.jump2
    }


    public get fallingAfterAJumpImage(): CollectionHolder<FallingAfterAJumpImageFile> {
        return this.#fallingAfterAJumpImage ??= this.imageFileReference.fallingAfterAJump
    }


    public get onGroundAfterJumpASound(): NullOr<OnGroundAfterAJumpSoundFile> {
        const value = this.#onGroundAfterAJumpSound
        if (value !== undefined)
            return value
        return this.#onGroundAfterAJumpSound = this.soundFileReference.onGroundAfterAJump
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImage(): CollectionHolder<TurningImageFile> {
        return this.#turningImage ??= this.imageFileReference.turning
    }

    public get turningSound(): NullOr<TurningSoundFile> {
        const value = this.#turningSound
        if (value !== undefined)
            return value
        return this.#turningSound = this.soundFileReference.turning
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): CollectionHolder<CollectionHolder<ClimbingImageFile>> {
        return this.#climbingImages ??= this.imageFileReference.climbing
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): CollectionHolder<CollectionHolder<GoalPoleImageFile>> {
        return this.#goalPoleImages ??= this.imageFileReference.goalPole
    }

    public get goalPoleSound(): NullOr<GoalPoleSoundFile> {
        const value = this.#goalPoleSound
        if (value !== undefined)
            return value
        return this.#goalPoleSound = this.soundFileReference.goalPole
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): NullOr<LostALifeSoundFile> {
        const value = this.#lostALifeSound
        if (value !== undefined)
            return value
        return this.#lostALifeSound = this.soundFileReference.lostALife
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------
    //region -------------------- Getter methods (linked reference) --------------------

    public get imageFileReference(): MysteryMushroomImages { return this.#imageFileReference ??= MysteryMushroomImages[this.name] }

    public get soundFileReference(): MysteryMushroomSounds { return this.#soundFileReference ??= MysteryMushroomSounds[this.name] }

    //endregion -------------------- Getter methods (linked reference) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace MysteryMushrooms {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link MysteryMushrooms} */
    export const Companion = MysteryMushrooms.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).MysteryMushrooms = MysteryMushrooms
