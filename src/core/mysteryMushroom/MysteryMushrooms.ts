import type {ClassWithEnglishName}                                                                                                                                                                                          from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                            from '../ClassWithReference';
import type {ClimbingImages, DownImages, FallingAfterJumpImages, GoalPoleImages, Image, JumpImages, RunningImages, SwimmingImages, TauntImages, TurningImages, WaitingImages, WalkImages}                                   from './image/Image';
import type {EnglishNameOnFile, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './MysteryMushrooms.types';
import type {GoalPoleSounds, JumpSounds, LostALifeSounds, OnGroundAfterJumpSounds, PowerUpCollectedSounds, Sound, TauntSounds, TurningSounds}                                                                               from './sound/Sound';
import type {MysteryMushroom}                                                                                                                                                                                               from './MysteryMushroom';
import type {PossiblePath}                                                                                                                                                                                                  from './path/ClassWithPath';
import type {SoundProperty}                                                                                                                                                                                                 from './properties/sound/SoundProperty';
import type {StaticReference}                                                                                                                                                                                               from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link MysteryMushroomLoader}
 * @classWithDynamicImport {@link MysteryMushroomLoader}, {@link NoImage}, {@link BasicImageContainer}, {@link ImageWithUnderwaterVariationContainer}, {@link ImageWithLeftVariationContainer}, {@link ImageWithJapaneseContainer}, {@link NoSound}, {@link SoundContainer}
 */
export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName>,
        Image, Sound {

    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new class MysteryMushrooms_MysteryMushroom extends MysteryMushrooms {

        protected _createImageContainer(): Image {
            return Import.NoImage.get;
        }

        protected _createSoundContainer(): Sound {
            return Import.NoSound.get;
        }

    }('Mystery Mushroom',);

    public static readonly YAMAMURA =               new MysteryMushrooms('Yamamura',);
    public static readonly MARY_O =                 new MysteryMushrooms('Mary O', 'Mary O.',);
    public static readonly UNDODOG =                new MysteryMushrooms('Undodog',);

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushrooms('Mr. Game & Watch',);

    public static readonly PAC_MAN =                new MysteryMushrooms('PAC-MAN',);

    public static readonly MARIO =                  new MysteryMushrooms('Mario',);
    public static readonly LUIGI =                  new MysteryMushrooms('Luigi',);
    public static readonly PROFESSOR_E_GADD =       new MysteryMushrooms('Professor E. Gadd',);
    public static readonly PEACH =                  new MysteryMushrooms('Peach',);
    public static readonly DAISY =                  new MysteryMushrooms('Daisy',);
    public static readonly ROSALINA =               new MysteryMushrooms('Rosalina',);
    public static readonly TOAD =                   new MysteryMushrooms('Toad',);
    public static readonly CAPTAIN_TOAD =           new MysteryMushrooms('Captain Toad',);
    public static readonly TOADETTE =               new MysteryMushrooms('Toadette',);
    public static readonly YOSHI =                  new MysteryMushrooms('Yoshi',);
    public static readonly BIRDO =                  new MysteryMushrooms('Birdo',);
    public static readonly WARIO =                  new MysteryMushrooms('Wario',);
    public static readonly ASHLEY =                 new MysteryMushrooms('Ashley',);
    public static readonly WALUIGI =                new MysteryMushrooms('Waluigi',);
    public static readonly BOWSER =                 new MysteryMushrooms('Bowser',);
    public static readonly BOWSER_JR =              new MysteryMushrooms('Bowser Jr', 'Bowser Jr.',);
    public static readonly GOOMBA =                 new MysteryMushrooms('Goomba',);
    public static readonly SHY_GUY =                new MysteryMushrooms('Shy Guy',);
    public static readonly NABBIT =                 new MysteryMushrooms('Nabbit',);
    public static readonly MARIO_SILVER =           new MysteryMushrooms('Mario (Silver)',);
    public static readonly MARIO_GOLD =             new MysteryMushrooms('Mario (Gold)',);
    public static readonly BUILDER_MARIO =          new MysteryMushrooms('Builder Mario',);
    public static readonly DR_MARIO =               new MysteryMushrooms('Dr. Mario',);
    public static readonly FROG_MARIO =             new MysteryMushrooms('Frog Mario',);
    public static readonly STATUE_MARIO =           new MysteryMushrooms('Statue Mario',);
    public static readonly MARIO_TRIO =             new MysteryMushrooms('Mario Trio',);
    public static readonly KART_MARIO =             new MysteryMushrooms('Kart Mario',);
    public static readonly CAT_MARIO =              new MysteryMushrooms('Cat Mario',);
    public static readonly CAT_PEACH =              new MysteryMushrooms('Cat Peach',);
    public static readonly SKY_POP =                new MysteryMushrooms('Sky Pop',);
    public static readonly BABY_MARIO =             new MysteryMushrooms('Baby Mario',);
    public static readonly QUESTION_MARK_BLOCK =    new class MysteryMushrooms_QuestionMarkBlock extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithLeftVariationContainer(imagePath);
        }

    }('Question Mark Block', '? Block',);
    public static readonly TRAMPOLINE =             new MysteryMushrooms('Trampoline',);
    public static readonly MARIO_MB =               new MysteryMushrooms('Mario (MB)', 'Mario',);
    public static readonly SIDESTEPPER =            new MysteryMushrooms('Sidestepper',);
    public static readonly SHELLCREEPER =           new MysteryMushrooms('Shellcreeper',);
    public static readonly FIGHTER_FLY =            new MysteryMushrooms('Fighter Fly',);

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushrooms('Green Yarn Yoshi',);
    public static readonly PINK_YARN_YOSHI =        new MysteryMushrooms('Pink Yarn Yoshi',);
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms('Light-Blue Yarn Yoshi',);
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushrooms('Mega Yarn Yoshi',);

    public static readonly DONKEY_KONG =            new MysteryMushrooms('Donkey Kong',);
    public static readonly DONKEY_KONG_JR =         new MysteryMushrooms('Donkey Kong Jr', 'Donkey Kong Jr.',);
    public static readonly DIDDY_KONG =             new MysteryMushrooms('Diddy Kong',);

    public static readonly LITTLE_MAC =             new MysteryMushrooms('Little Mac',);

    public static readonly DUCK_HUNT =              new MysteryMushrooms('Duck Hunt',);

    public static readonly BUBBLES =                new MysteryMushrooms('Bubbles',);

    public static readonly BIKE =                   new MysteryMushrooms('Bike',);

    public static readonly BALLOON_FIGHTER =        new MysteryMushrooms('Balloon Fighter',);

    public static readonly POPO_AND_NANA =          new MysteryMushrooms('Popo & Nana',);

    public static readonly FOREMAN_SPIKE =          new MysteryMushrooms('Foreman Spike',);

    public static readonly LINK =                   new MysteryMushrooms('Link',);
    public static readonly ZELDA =                  new MysteryMushrooms('Zelda',);
    public static readonly SHEIK =                  new MysteryMushrooms('Sheik',);
    public static readonly TOON_LINK =              new MysteryMushrooms('Toon Link',);
    public static readonly TETRA =                  new MysteryMushrooms('Tetra',);
    public static readonly TINGLE =                 new MysteryMushrooms('Tingle',);
    public static readonly GANONDORF =              new MysteryMushrooms('Ganondorf',);
    public static readonly WOLF_LINK =              new MysteryMushrooms('Wolf Link',);
    public static readonly TOTEM_LINK =             new MysteryMushrooms('Totem Link',);

    public static readonly SAMUS =                  new MysteryMushrooms('Samus',);
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushrooms('Zero Suit Samus',);

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushrooms('Volleyball Player',);

    public static readonly PIT =                    new MysteryMushrooms('Pit',);
    public static readonly PALUTENA =               new MysteryMushrooms('Palutena',);
    public static readonly DARK_PIT =               new MysteryMushrooms('Dark Pit',);

    public static readonly DONBE =                  new MysteryMushrooms('Donbe',);
    public static readonly HIKARI =                 new MysteryMushrooms('Hikari',);

    public static readonly MEGA_MAN =               new MysteryMushrooms('Mega Man',);

    public static readonly AYUMI_TACHIBANA =        new MysteryMushrooms('Ayumi Tachibana',);

    public static readonly MARTH =                  new MysteryMushrooms('Marth',);
    public static readonly IKE =                    new MysteryMushrooms('Ike',);
    public static readonly LUCINA =                 new MysteryMushrooms('Lucina',);
    public static readonly ROBIN =                  new MysteryMushrooms('Robin',);

    public static readonly CAPTAIN_FALCON =         new MysteryMushrooms('Captain Falcon',);

    public static readonly SONIC =                  new class MysteryMushrooms_Sonic extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.BasicImageContainer(imagePath, 3,);
        }

    }('Sonic',);

    public static readonly KIRBY =                  new MysteryMushrooms('Kirby',);
    public static readonly KING_DEDEDE =            new MysteryMushrooms('King Dedede',);
    public static readonly META_KNIGHT =            new MysteryMushrooms('Meta Knight',);

    public static readonly FOX_MCCLOUD =            new MysteryMushrooms('Fox McCloud',);
    public static readonly FALCO_LOMBARDI =         new MysteryMushrooms('Falco Lombardi',);
    public static readonly SLIPPY_TOAD =            new MysteryMushrooms('Slippy Toad',);
    public static readonly PEPPY_HARE =             new MysteryMushrooms('Peppy Hare',);
    public static readonly ARWING =                 new MysteryMushrooms('Arwing',);

    public static readonly NESS =                   new MysteryMushrooms('Ness',);
    public static readonly LUCAS =                  new MysteryMushrooms('Lucas',);
    public static readonly MASTER_BELCH =           new MysteryMushrooms('Master Belch',);
    public static readonly MR_SATURN =              new MysteryMushrooms('Mr. Saturn',);

    public static readonly BULBASAUR =              new MysteryMushrooms('Bulbasaur',);
    public static readonly CHARMANDER =             new MysteryMushrooms('Charmander',);
    public static readonly CHARIZARD =              new MysteryMushrooms('Charizard',);
    public static readonly SQUIRTLE =               new MysteryMushrooms('Squirtle',);
    public static readonly PIKACHU =                new MysteryMushrooms('Pikachu',);
    public static readonly JIGGLYPUFF =             new MysteryMushrooms('Jigglypuff',);
    public static readonly MEWTWO =                 new MysteryMushrooms('Mewtwo',);
    public static readonly LUCARIO =                new MysteryMushrooms('Lucario',);
    public static readonly GRENINJA =               new MysteryMushrooms('Greninja',);

    public static readonly VILLAGER =               new MysteryMushrooms('Villager',);
    public static readonly TOM_NOOK =               new MysteryMushrooms('Tom Nook',);
    public static readonly K_K_SLIDER =             new MysteryMushrooms('K.K. Slider',);
    public static readonly RESETTI =                new MysteryMushrooms('Resetti',);
    public static readonly ROVER =                  new MysteryMushrooms('Rover',);
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushrooms('Timmy & Tommy',);
    public static readonly BLATHERS =               new MysteryMushrooms('Blathers',);
    public static readonly MABEL =                  new MysteryMushrooms('Mabel',);
    public static readonly KAPP_N =                 new MysteryMushrooms('Kapp\'n',);
    public static readonly CELESTE =                new MysteryMushrooms('Celeste',);
    public static readonly KICKS =                  new MysteryMushrooms('Kicks',);
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms('Isabelle (Summer Outfit)',);
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushrooms('Isabelle (Winter Outfit)',);
    public static readonly DIGBY =                  new MysteryMushrooms('Digby',);
    public static readonly CYRUS =                  new MysteryMushrooms('Cyrus',);
    public static readonly REESE =                  new MysteryMushrooms('Reese',);
    public static readonly LOTTIE =                 new MysteryMushrooms('Lottie',);

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushrooms('Captain Olimar',);
    public static readonly PIKMIN =                 new MysteryMushrooms('Pikmin',);

    public static readonly CHIBI_ROBO =             new MysteryMushrooms('Chibi-Robo',);

    public static readonly WII_BALANCE_BOARD =      new MysteryMushrooms('Wii Balance Board',);
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms('Wii Fit Trainer',);

    public static readonly SHULK =                  new MysteryMushrooms('Shulk',);

    public static readonly FELYNE =                 new MysteryMushrooms('Felyne',);

    public static readonly YU_AYASAKI =             new MysteryMushrooms('Yu Ayasaki',);

    public static readonly DR_KAWASHIMA =           new MysteryMushrooms('Dr. Kawashima',);

    public static readonly DR_LOBE =                new MysteryMushrooms('Dr. Lobe',);

    public static readonly BARBARA_THE_BAT =        new MysteryMushrooms('Barbara the Bat',);

    public static readonly STARFY =                 new MysteryMushrooms('Starfy',);

    public static readonly MALLO =                  new MysteryMushrooms('Mallo',);

    public static readonly NIKKI =                  new MysteryMushrooms('Nikki',);
    public static readonly IRIS_ARCHWELL =          new MysteryMushrooms('Iris Archwell',);
    public static readonly ARCADE_BUNNY =           new MysteryMushrooms('Arcade bunny',);

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushrooms('Chitoge Kirisaki',);

    public static readonly INKLING_SQUID =          new MysteryMushrooms('Inkling Squid',);
    public static readonly INKLING_BOY =            new class MysteryMushrooms_InklingBoy extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithUnderwaterVariationContainer(imagePath);
        }

    }('Inkling Boy',);
    public static readonly INKLING_GIRL =           new class MysteryMushrooms_InklingGirl extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithUnderwaterVariationContainer(imagePath);
        }

    }('Inkling Girl',);
    public static readonly CALLIE =                 new class MysteryMushrooms_Callie extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithUnderwaterVariationContainer(imagePath);
        }

    }('Callie',);
    public static readonly MARIE =                  new class MysteryMushrooms_Marie extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithUnderwaterVariationContainer(imagePath);
        }

    }('Marie',);

    public static readonly ROB =                    new class MysteryMushrooms_ROB extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithJapaneseContainer(imagePath);
        }

    }('R.O.B', 'R.O.B.',);
    public static readonly DISKUN =                 new MysteryMushrooms('Diskun',);
    public static readonly MAHJONG_TILE =           new MysteryMushrooms('Mahjong Tile',);

    public static readonly KITTY_WHITE =            new class MysteryMushrooms_KittyWhite extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithLeftVariationContainer(imagePath);
        }

    }('Kitty White',);
    public static readonly MELODY =                 new class MysteryMushrooms_Melody extends MysteryMushrooms {

        protected _createImageContainer(imagePath: PossiblePath,): Image {
            return new Import.ImageWithLeftVariationContainer(imagePath);
        }

    }('Melody',);
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushrooms('Shaun the Sheep',);

    public static readonly ARINO_KACHO =            new MysteryMushrooms('Arino KACHO',);
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms('SUPER MARIO KUN',);
    public static readonly NECKY =                  new MysteryMushrooms('Necky',);
    public static readonly GLA =                    new MysteryMushrooms('GLA',);
    public static readonly BABYMETAL =              new MysteryMushrooms('BABYMETAL',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: MysteryMushrooms;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: MysteryMushroom;

    readonly #englishName;

    readonly #englishNameOnFile;
    #path?: PossiblePath;
    #imageContainer?: Image;
    #soundContainer?: Sound;


    //endregion -------------------- Attributes --------------------

    public constructor(englishName_and_englishNameOnFile: PossibleEnglishName,)
    public constructor(englishNameOnFile: EnglishNameOnFile, englishName: PossibleEnglishName,)
    public constructor(englishNameOnFile: | EnglishNameOnFile | PossibleEnglishName, englishName?: PossibleEnglishName,) {
        super();
        if (englishName == null) {
            this.#englishName = new StringContainer(englishNameOnFile as PossibleEnglishName);
            this.#englishNameOnFile = englishNameOnFile as EnglishNameOnFile;
        } else {
            this.#englishName = new StringContainer(englishName);
            this.#englishNameOnFile = englishNameOnFile as EnglishNameOnFile;
        }
    }

    //region -------------------- Getter methods --------------------

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MysteryMushroom {
        return this.#reference ??= Import.MysteryMushroomLoader.get.load().get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //region -------------------- Files (images / sounds) getter methods --------------------

    public get englishNameOnFile(): EnglishNameOnFile {
        return this.#englishNameOnFile;
    }


    /**
     * Get the path depending on the mystery mushroom
     *
     * @note that the method will never be called when using {@link MYSTERY_MUSHROOM MysteryMushrooms.MYSTERY_MUSHROOM}.
     * @private
     */
    private get __path(): PossiblePath {
        return this.#path ??= `${this.ordinal} - ${this.englishNameOnFile}` as PossiblePath;
    }

    protected _createImageContainer(imagePath: PossiblePath,): Image {
        return new Import.BasicImageContainer(imagePath);
    }

    private get __imageContainer(): Image {
        return this.#imageContainer ??= this._createImageContainer(this.__path);
    }

    protected _createSoundContainer(path: PossiblePath, property: SoundProperty,): Sound {
        return new Import.SoundContainer(path, property,);
    }

    private get __soundContainer(): Sound {
        return this.#soundContainer ??= this._createSoundContainer(this.__path, this.reference,);
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSounds(): PowerUpCollectedSounds {
        return this.__soundContainer.powerUpCollectedSounds;
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImages(): WaitingImages {
        return this.__imageContainer.waitingImages;
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImages(): TauntImages {
        return this.__imageContainer.tauntImages;
    }

    public get tauntSounds(): TauntSounds {
        return this.__soundContainer.tauntSounds;
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get downImages(): DownImages {
        return this.__imageContainer.downImages;
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): WalkImages {
        return this.__imageContainer.walkImages;
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): RunningImages {
        return this.__imageContainer.runningImages;
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): SwimmingImages {
        return this.__imageContainer.swimmingImages;
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    public get jumpImages(): JumpImages {
        return this.__imageContainer.jumpImages;
    }

    public get jumpSounds(): JumpSounds {
        return this.__soundContainer.jumpSounds;
    }

    public get fallingAfterJumpImages(): FallingAfterJumpImages {
        return this.__imageContainer.fallingAfterJumpImages;
    }

    public get onGroundAfterJumpSounds(): OnGroundAfterJumpSounds {
        return this.__soundContainer.onGroundAfterJumpSounds;
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImages(): TurningImages {
        return this.__imageContainer.turningImages;
    }

    public get turningSounds(): TurningSounds {
        return this.__soundContainer.turningSounds;
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): ClimbingImages {
        return this.__imageContainer.climbingImages;
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): GoalPoleImages {
        return this.__imageContainer.goalPoleImages;
    }

    public get goalPoleSounds(): GoalPoleSounds {
        return this.__soundContainer.goalPoleSounds;
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSounds(): LostALifeSounds {
        return this.__soundContainer.lostALifeSounds;
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyIndividualEnglishNames(): readonly EnglishNameOnFile[] {
        return this.values.map(enumeration => enumeration.englishNameOnFile);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<MysteryMushrooms> {
        return MysteryMushrooms;
    }


    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.englishNameOnFile === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends MysteryMushrooms = MysteryMushrooms, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): MysteryMushrooms
    public static getValue(value: PossibleValue,): | MysteryMushrooms | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
