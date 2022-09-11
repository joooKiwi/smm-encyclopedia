import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                             from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                               from '../ClassWithReference';
import type {ClimbingImages, PressingDownImage, FallingAfterJumpImage, GoalPoleImages, Image, JumpImages, RunningImages, SwimmingImages, TauntImage, TurningImage, WaitingImage, WalkImages}                                                                                                                   from './image/Image';
import type {EnglishNameOnFile, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageSourceForFile, PossibleNonNullableValue, PossibleSoundSourceForFile, PossibleStringValue, PossibleUniqueEnglishName, PossibleValue} from './MysteryMushrooms.types';
import type {GoalPoleSound, JumpSounds, LostALifeSound, OnGroundAfterJumpSound, PowerUpCollectedSound, Sound, TauntSound, TurningSound}                                                                                                                                                                        from './sound/Sound';
import type {MysteryMushroom}                                                                                                                                                                                                                                                                                  from './MysteryMushroom';
import type {SoundProperty}                                                                                                                                                                                                                                                                                    from './properties/sound/SoundProperty';
import type {StaticReference}                                                                                                                                                                                                                                                                                  from '../../util/enum/Enum.types';

import {EMPTY_ARRAY}     from '../../util/emptyVariables';
import {Enum}            from '../../util/enum/Enum';
import {ImageContainer}  from './image/Image.container';
import {Import}          from '../../util/DynamicImporter';
import {SoundContainer}  from './sound/Sound.container';
import {StringContainer} from '../../util/StringContainer';

/**
 * @todo Change the path to be like in the game instead of the mystery mushroom name
 * @recursiveReference {@link MysteryMushroomLoader}
 * @classWithDynamicImport {@link MysteryMushroomLoader}
 */
export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new class MysteryMushrooms_MysteryMushroom extends MysteryMushrooms {

        protected override _createImageContainer(): never {
            throw new ReferenceError('The Mystery Mushroom image doesn\'t have any images.');
        }

        protected override _createSoundContainer(): never {
            throw new ReferenceError('The Mystery Mushroom sound doesn\'t have any sounds.');
        }


        public override get powerUpCollectedSound() {
            return null;
        }

        public override get waitingImages() {
            return EMPTY_ARRAY;
        }

        public override get tauntImages() {
            return EMPTY_ARRAY;
        }

        public override get tauntSound() {
            return null;
        }

        public override get pressingDownImages() {
            return EMPTY_ARRAY;
        }

        public override get walkImages() {
            return EMPTY_ARRAY;
        }

        public override get runningImages() {
            return EMPTY_ARRAY;
        }

        public override get swimmingImages() {
            return EMPTY_ARRAY;
        }

        public override get jumpImages() {
            return EMPTY_ARRAY;
        }

        public override get jumpSounds() {
            return EMPTY_ARRAY;
        }

        public override get fallingAfterJumpImages() {
            return EMPTY_ARRAY;
        }

        public override get onGroundAfterJumpSound() {
            return null;
        }

        public override get turningImages() {
            return EMPTY_ARRAY;
        }

        public override get turningSound() {
            return null;
        }

        public override get climbingImages() {
            return EMPTY_ARRAY;
        }

        public override get goalPoleImages() {
            return EMPTY_ARRAY;
        }

        public override get goalPoleSound() {
            return null;
        }

        public override get lostALifeSound() {
            return null;
        }

    }(null, 'Mystery Mushroom',);

    public static readonly YAMAMURA =               new MysteryMushrooms('Boss017', 'Yamamura',);
    public static readonly MARY_O =                 new MysteryMushrooms('Boss026', 'Mary O.',);
    public static readonly UNDODOG =                new MysteryMushrooms('Boss048', 'Undodog',);

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushrooms('GameWatch', 'Mr. Game & Watch',);

    public static readonly PAC_MAN =                new MysteryMushrooms('PackMan', 'PAC-MAN',);

    public static readonly MARIO =                  new MysteryMushrooms('Mario', 'Mario',);
    public static readonly LUIGI =                  new MysteryMushrooms('Luigi', 'Luigi',);
    public static readonly PROFESSOR_E_GADD =       new MysteryMushrooms('Boss019', 'Professor E. Gadd',);
    public static readonly PEACH =                  new MysteryMushrooms('Peach', 'Peach',);
    public static readonly DAISY =                  new MysteryMushrooms('Boss018', 'Daisy',);
    public static readonly ROSALINA =               new MysteryMushrooms('Rosalina', 'Rosalina',);
    public static readonly TOAD =                   new MysteryMushrooms('Kinopio', 'Toad',);
    public static readonly CAPTAIN_TOAD =           new MysteryMushrooms('Boss014', 'Captain Toad',);
    public static readonly TOADETTE =               new MysteryMushrooms('Boss027', 'Toadette',);
    public static readonly YOSHI =                  new MysteryMushrooms('Yoshi', 'Yoshi',);
    public static readonly BIRDO =                  new MysteryMushrooms('Boss016', 'Birdo',);
    public static readonly WARIO =                  new MysteryMushrooms('Wario', 'Wario',);
    public static readonly ASHLEY =                 new MysteryMushrooms('Ashley', 'Ashley',);
    public static readonly WALUIGI =                new MysteryMushrooms('Waluigi', 'Waluigi',);
    public static readonly BOWSER =                 new MysteryMushrooms('Koopa', 'Bowser',);
    public static readonly BOWSER_JR =              new MysteryMushrooms('KoopaJr', 'Bowser Jr.',);
    public static readonly GOOMBA =                 new MysteryMushrooms('Kuribo', 'Goomba',);
    public static readonly SHY_GUY =                new MysteryMushrooms('Heiho', 'Shy Guy',);
    public static readonly NABBIT =                 new MysteryMushrooms('Boss032', 'Nabbit',);
    public static readonly MARIO_SILVER =           new MysteryMushrooms('MarioSilver', 'Mario (Silver)',);
    public static readonly MARIO_GOLD =             new MysteryMushrooms('MarioGold', 'Mario (Gold)',);
    public static readonly BUILDER_MARIO =          new MysteryMushrooms('DiyMario', 'Builder Mario',);
    public static readonly DR_MARIO =               new MysteryMushrooms('DrMario', 'Dr. Mario',);
    public static readonly FROG_MARIO =             new MysteryMushrooms('Boss006', 'Frog Mario',);
    public static readonly STATUE_MARIO =           new MysteryMushrooms('Boss025', 'Statue Mario',);
    public static readonly MARIO_TRIO =             new MysteryMushrooms('Boss007', 'Mario Trio',);
    public static readonly KART_MARIO =             new MysteryMushrooms('MarioKart', 'Kart Mario',);
    public static readonly CAT_MARIO =              new MysteryMushrooms('Boss003', 'Cat Mario',);
    public static readonly CAT_PEACH =              new MysteryMushrooms('Boss004', 'Cat Peach',);
    public static readonly SKY_POP =                new MysteryMushrooms('Boss010', 'Sky Pop',);
    public static readonly BABY_MARIO =             new MysteryMushrooms('Boss037', 'Baby Mario',);
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushrooms(['Block', 'Block L',], '? Block',);
    public static readonly TRAMPOLINE =             new MysteryMushrooms('Trampoline', 'Trampoline',);
    public static readonly MARIO_MB =               new MysteryMushrooms('MarioOriginal', 'Mario', 'Mario (MB)',);
    public static readonly SIDESTEPPER =            new MysteryMushrooms('SideStepper', 'Sidestepper',);
    public static readonly SHELLCREEPER =           new MysteryMushrooms('Shellcreeper', 'Shellcreeper',);
    public static readonly FIGHTER_FLY =            new MysteryMushrooms('Fightfly', 'Fighter Fly',);

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushrooms('WoolYoshiGreen', 'Green Yarn Yoshi',);
    public static readonly PINK_YARN_YOSHI =        new MysteryMushrooms('WoolYoshiPink', 'Pink Yarn Yoshi',);
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms('WoolYoshiAqua', 'Light-Blue Yarn Yoshi',);
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushrooms('WoolYoshiBig', 'Mega Yarn Yoshi',);

    public static readonly DONKEY_KONG =            new MysteryMushrooms('DonkeyKong', 'Donkey Kong',);
    public static readonly DONKEY_KONG_JR =         new MysteryMushrooms('DonkeyKongJr', 'Donkey Kong Jr.',);
    public static readonly DIDDY_KONG =             new MysteryMushrooms('DiddyKong', 'Diddy Kong',);

    public static readonly LITTLE_MAC =             new MysteryMushrooms('LittleMac', 'Little Mac',);

    public static readonly DUCK_HUNT =              new MysteryMushrooms('DuckHunt', 'Duck Hunt',);

    public static readonly BUBBLES =                new MysteryMushrooms('Boss040', 'Bubbles',);

    public static readonly BIKE =                   new MysteryMushrooms('Boss015', 'Bike',);

    public static readonly BALLOON_FIGHTER =        new MysteryMushrooms('Boss031', 'Balloon Fighter',);

    public static readonly POPO_AND_NANA =          new MysteryMushrooms('Boss044', 'Popo & Nana',);

    public static readonly FOREMAN_SPIKE =          new MysteryMushrooms('Blackey', 'Foreman Spike',);

    public static readonly LINK =                   new MysteryMushrooms('Link', 'Link',);
    public static readonly ZELDA =                  new MysteryMushrooms('Zelda', 'Zelda',);
    public static readonly SHEIK =                  new MysteryMushrooms('Sheik', 'Sheik',);
    public static readonly TOON_LINK =              new MysteryMushrooms('ThunLink', 'Toon Link',);
    public static readonly TETRA =                  new MysteryMushrooms('Boss033', 'Tetra',);
    public static readonly TINGLE =                 new MysteryMushrooms('Tincle', 'Tingle',);
    public static readonly GANONDORF =              new MysteryMushrooms('Ganon', 'Ganondorf',);
    public static readonly WOLF_LINK =              new MysteryMushrooms('Boss030', 'Wolf Link',);
    public static readonly TOTEM_LINK =             new MysteryMushrooms('Boss000', 'Totem Link',);

    public static readonly SAMUS =                  new MysteryMushrooms('Samus', 'Samus',);
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushrooms('ZeroSams', 'Zero Suit Samus',);

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushrooms('Boss042', 'Volleyball Player',);

    public static readonly PIT =                    new MysteryMushrooms('Pit', 'Pit',);
    public static readonly PALUTENA =               new MysteryMushrooms('Palutena', 'Palutena',);
    public static readonly DARK_PIT =               new MysteryMushrooms('DarkPit', 'Dark Pit',);

    public static readonly DONBE =                  new MysteryMushrooms('Boss034', 'Donbe',);
    public static readonly HIKARI =                 new MysteryMushrooms('Boss035', 'Hikari',);

    public static readonly MEGA_MAN =               new MysteryMushrooms('MegaMan', 'Mega Man',);

    public static readonly AYUMI_TACHIBANA =        new MysteryMushrooms('Boss036', 'Ayumi Tachibana',);

    public static readonly MARTH =                  new MysteryMushrooms('Marth', 'Marth',);
    public static readonly IKE =                    new MysteryMushrooms('Ike', 'Ike',);
    public static readonly LUCINA =                 new MysteryMushrooms('Lucina', 'Lucina',);
    public static readonly ROBIN =                  new MysteryMushrooms('Robin', 'Robin',);

    public static readonly CAPTAIN_FALCON =         new MysteryMushrooms('Falcon', 'Captain Falcon',);

    public static readonly SONIC =                  new class MysteryMushrooms_Sonic extends MysteryMushrooms {

        protected override _createImageContainer(file: EnglishNameOnFile,): Image {
            return new ImageContainer(file, 3,);
        }

    }('Sonic', 'Sonic',);

    public static readonly KIRBY =                  new MysteryMushrooms('Kirby', 'Kirby',);
    public static readonly KING_DEDEDE =            new MysteryMushrooms('Dedede', 'King Dedede',);
    public static readonly META_KNIGHT =            new MysteryMushrooms('MetaKnight', 'Meta Knight',);

    public static readonly FOX_MCCLOUD =            new MysteryMushrooms('Fox', 'Fox McCloud',);
    public static readonly FALCO_LOMBARDI =         new MysteryMushrooms('Falco', 'Falco Lombardi',);
    public static readonly SLIPPY_TOAD =            new MysteryMushrooms('Slippy', 'Slippy Toad',);
    public static readonly PEPPY_HARE =             new MysteryMushrooms('Peppy', 'Peppy Hare',);
    public static readonly ARWING =                 new MysteryMushrooms('Arwing', 'Arwing',);

    public static readonly NESS =                   new MysteryMushrooms('Ness', 'Ness',);
    public static readonly LUCAS =                  new MysteryMushrooms('Lucas', 'Lucas',);
    public static readonly MASTER_BELCH =           new MysteryMushrooms('Boss012', 'Master Belch',);
    public static readonly MR_SATURN =              new MysteryMushrooms('Boss013', 'Mr. Saturn',);

    public static readonly BULBASAUR =              new MysteryMushrooms('Boss020', 'Bulbasaur',);
    public static readonly CHARMANDER =             new MysteryMushrooms('Boss021', 'Charmander',);
    public static readonly CHARIZARD =              new MysteryMushrooms('Charizard', 'Charizard',);
    public static readonly SQUIRTLE =               new MysteryMushrooms('Boss022', 'Squirtle',);
    public static readonly PIKACHU =                new MysteryMushrooms('Pikachu', 'Pikachu',);
    public static readonly JIGGLYPUFF =             new MysteryMushrooms('Pudding', 'Jigglypuff',);
    public static readonly MEWTWO =                 new MysteryMushrooms('Mewtwo', 'Mewtwo',);
    public static readonly LUCARIO =                new MysteryMushrooms('Lucario', 'Lucario',);
    public static readonly GRENINJA =               new MysteryMushrooms('Greninja', 'Greninja',);

    public static readonly VILLAGER =               new MysteryMushrooms('Murabito', 'Villager',);
    public static readonly TOM_NOOK =               new MysteryMushrooms('Tanuki', 'Tom Nook',);
    public static readonly K_K_SLIDER =             new MysteryMushrooms('Totakeke', 'K.K. Slider',);
    public static readonly RESETTI =                new MysteryMushrooms('ResetSan', 'Resetti',);
    public static readonly ROVER =                  new MysteryMushrooms('MishiNeko', 'Rover',);
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushrooms('TsubuMame', 'Timmy & Tommy',);
    public static readonly BLATHERS =               new MysteryMushrooms('Futa', 'Blathers',);
    public static readonly MABEL =                  new MysteryMushrooms('Kinuyo', 'Mabel',);
    public static readonly KAPP_N =                 new MysteryMushrooms('Kappei', 'Kapp\'n',);
    public static readonly CELESTE =                new MysteryMushrooms('Fuko', 'Celeste',);
    public static readonly KICKS =                  new MysteryMushrooms('Shunk', 'Kicks',);
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms('Sizue', 'Isabelle (Summer Outfit)',);
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushrooms('SizueWinter', 'Isabelle (Winter Outfit)',);
    public static readonly DIGBY =                  new MysteryMushrooms('Kento', 'Digby',);
    public static readonly CYRUS =                  new MysteryMushrooms('Kaizo', 'Cyrus',);
    public static readonly REESE =                  new MysteryMushrooms('Lisa', 'Reese',);
    public static readonly LOTTIE =                 new MysteryMushrooms('Takumi', 'Lottie',);

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushrooms('Orima', 'Captain Olimar',);
    public static readonly PIKMIN =                 new MysteryMushrooms('Pikmin', 'Pikmin',);

    public static readonly CHIBI_ROBO =             new MysteryMushrooms('ChibiRobo', 'Chibi-Robo',);

    public static readonly WII_BALANCE_BOARD =      new MysteryMushrooms('Wiibo', 'Wii Balance Board',);
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms('Fit', 'Wii Fit Trainer',);

    public static readonly SHULK =                  new MysteryMushrooms('Shulk', 'Shulk',);

    public static readonly FELYNE =                 new MysteryMushrooms('Boss009', 'Felyne',);

    public static readonly YU_AYASAKI =             new MysteryMushrooms('Boss028', 'Yu Ayasaki',);

    public static readonly DR_KAWASHIMA =           new MysteryMushrooms('Boss049', 'Dr. Kawashima',);

    public static readonly DR_LOBE =                new MysteryMushrooms('MrHakari', 'Dr. Lobe',);

    public static readonly BARBARA_THE_BAT =        new MysteryMushrooms('Boss024', 'Barbara the Bat',);

    public static readonly STARFY =                 new MysteryMushrooms('Boss029', 'Starfy',);

    public static readonly MALLO =                  new MysteryMushrooms('Boss039', 'Mallo',);

    public static readonly NIKKI =                  new MysteryMushrooms('Nikki', 'Nikki',);
    public static readonly IRIS_ARCHWELL =          new MysteryMushrooms('Boss038', 'Iris Archwell',);
    public static readonly ARCADE_BUNNY =           new MysteryMushrooms('Boss011', 'Arcade bunny',);

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushrooms('Boss023', 'Chitoge Kirisaki',);

    public static readonly INKLING_SQUID =          new MysteryMushrooms('SplaIka', 'Inkling Squid',);
    public static readonly INKLING_BOY =            new MysteryMushrooms(['SplaBoy', 'SplaBoy W',], 'Inkling Boy',);
    public static readonly INKLING_GIRL =           new MysteryMushrooms(['SplaGirl', 'SplaGirl W'], 'Inkling Girl',);
    public static readonly CALLIE =                 new MysteryMushrooms(['Boss050', 'SplaAori W',], 'Callie',);
    public static readonly MARIE =                  new MysteryMushrooms(['Boss051', 'SplaHotaru W',], 'Marie',);

    public static readonly ROB =                    new MysteryMushrooms(['Robot USEU', 'Robot JP',], 'R.O.B.',);
    public static readonly DISKUN =                 new MysteryMushrooms('Boss041', 'Diskun',);
    public static readonly MAHJONG_TILE =           new MysteryMushrooms('MahjongTile', 'Mahjong Tile',);

    public static readonly KITTY_WHITE =            new MysteryMushrooms(['Boss045', 'Boss045 L',], 'Kitty White',);
    public static readonly MELODY =                 new MysteryMushrooms(['Boss046', 'Boss046 L',], 'Melody',);
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushrooms('Boss047', 'Shaun the Sheep',);

    public static readonly ARINO_KACHO =            new MysteryMushrooms('Boss001', 'Arino KACHO',);
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms('Boss002', 'SUPER MARIO KUN',);
    public static readonly NECKY =                  new MysteryMushrooms('Boss005', 'Necky',);
    public static readonly GLA =                    new MysteryMushrooms('Boss008', 'GLA',);
    public static readonly BABYMETAL =              new MysteryMushrooms('Boss043', 'BABYMETAL',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: MysteryMushrooms;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>;

    #reference?: MysteryMushroom;
    readonly #englishName;
    readonly #uniqueEnglishName;
    readonly #englishNameOnFile;
    #imageContainer?: PossibleImageSourceForFile<Image>;
    #soundContainer?: Sound;

    #waitingImages?:PossibleImageSourceForFile<WaitingImage>;
    #tauntImages?:PossibleImageSourceForFile<TauntImage>
    #pressingDownImages?:PossibleImageSourceForFile<PressingDownImage>
    #walkImages?: PossibleImageSourceForFile<WalkImages>
    #runningImages?: PossibleImageSourceForFile<RunningImages>
    #swimmingImages?: PossibleImageSourceForFile<SwimmingImages>
    #jumpImages?: PossibleImageSourceForFile<JumpImages>
    #fallingAfterJumpImages?: PossibleImageSourceForFile<FallingAfterJumpImage>
    #turningImages?: PossibleImageSourceForFile<TurningImage>
    #climbingImages?:PossibleImageSourceForFile<ClimbingImages>
    #goalPoleImages?: PossibleImageSourceForFile<GoalPoleImages>

    //endregion -------------------- Fields --------------------

    public constructor(mysteryMushroomNoFile: null, englishName: PossibleEnglishName,)
    public constructor(englishNameOnFile: EnglishNameOnFile, englishName: PossibleEnglishName,)
    public constructor(englishNameOnFile: EnglishNameOnFile, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName,)
    public constructor(englishNamesOnFile: readonly [EnglishNameOnFile, EnglishNameOnFile,], englishName: PossibleEnglishName,)
    public constructor(englishNameOnFile: | EnglishNameOnFile | readonly [EnglishNameOnFile, EnglishNameOnFile,] | null, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#uniqueEnglishName = uniqueEnglishName;
        this.#englishNameOnFile = englishNameOnFile == null ? EMPTY_ARRAY : typeof englishNameOnFile == 'string' ? [englishNameOnFile] as const : englishNameOnFile;
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        return this.#REFERENCE_MAP ??= Import.MysteryMushroomLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MysteryMushroom {
        return this.#reference ??= MysteryMushrooms.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get uniqueEnglishName(): PossibleUniqueEnglishName {
        return this.#uniqueEnglishName;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //region -------------------- Files (images / sounds) getter methods --------------------

    public get englishNameOnFile(): PossibleImageSourceForFile<EnglishNameOnFile> {
        return this.#englishNameOnFile;
    }


    protected _createImageContainer(file: EnglishNameOnFile,): Image {
        return new ImageContainer(file,);
    }

    private get __imageContainers(): PossibleImageSourceForFile<Image> {
        return this.#imageContainer ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.englishNameOnFile, fileName => this._createImageContainer(fileName!));
    }

    protected _createSoundContainer(file: EnglishNameOnFile, property: SoundProperty,): Sound {
        return new SoundContainer(file, () => property,);
    }

    private get __soundContainer(): Sound {
        return this.#soundContainer ??= this._createSoundContainer(this.englishNameOnFile[0]!, this.reference,);
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): PossibleSoundSourceForFile<PowerUpCollectedSound> {
        return this.__soundContainer.powerUpCollectedSound;
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImages(): PossibleImageSourceForFile<WaitingImage> {
        return this.#waitingImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.waitingImage);
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImages(): PossibleImageSourceForFile<TauntImage> {
        return this.#tauntImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.tauntImage);
    }

    public get tauntSound(): PossibleSoundSourceForFile<TauntSound> {
        return this.__soundContainer.tauntSound;
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get pressingDownImages(): PossibleImageSourceForFile<PressingDownImage> {
        return this.#pressingDownImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.pressingDownImage);
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): PossibleImageSourceForFile<WalkImages> {
        return this.#walkImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.walkImages);
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): PossibleImageSourceForFile<RunningImages> {
        return this.#runningImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.runningImages);
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): PossibleImageSourceForFile<SwimmingImages> {
        return this.#swimmingImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.swimmingImages);
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    public get jumpImages(): PossibleImageSourceForFile<JumpImages> {
        return this.#jumpImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.jumpImages);
    }

    public get jumpSounds(): PossibleSoundSourceForFile<JumpSounds> {
        return this.__soundContainer.jumpSounds;
    }

    public get fallingAfterJumpImages(): PossibleImageSourceForFile<FallingAfterJumpImage> {
        return this.#fallingAfterJumpImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.fallingAfterJumpImage);
    }

    public get onGroundAfterJumpSound(): PossibleSoundSourceForFile<OnGroundAfterJumpSound> {
        return this.__soundContainer.onGroundAfterJumpSound;
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImages(): PossibleImageSourceForFile<TurningImage> {
        return this.#turningImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.turningImage);
    }

    public get turningSound(): PossibleSoundSourceForFile<TurningSound> {
        return this.__soundContainer.turningSound;
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): PossibleImageSourceForFile<ClimbingImages> {
        return this.#climbingImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.climbingImages);
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): PossibleImageSourceForFile<GoalPoleImages> {
        return this.#goalPoleImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.goalPoleImages);
    }

    public get goalPoleSound(): PossibleSoundSourceForFile<GoalPoleSound> {
        return this.__soundContainer.goalPoleSound;
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): PossibleSoundSourceForFile<LostALifeSound> {
        return this.__soundContainer.lostALifeSound;
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    static #getFromEnglishNameOnFile<T, U, >(source: PossibleImageSourceForFile<T>, callback: (t: T,) => U): PossibleImageSourceForFile<U> {
        return source.map(callback) as unknown as PossibleImageSourceForFile<U>;
    }

    public static get everyUniqueEnglishNames(): readonly PossibleUniqueEnglishName[] {
        return this.values.map(enumeration => enumeration.uniqueEnglishName).flat();
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<MysteryMushrooms> {
        return MysteryMushrooms;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.uniqueEnglishName === value
                || enumerable.englishNameOnFile.includes(value as never))
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

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
