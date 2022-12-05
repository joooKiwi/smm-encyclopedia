import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                           from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                             from 'core/ClassWithReference'
import type {MysteryMushroom}                                                                                                                                                                from 'core/mysteryMushroom/MysteryMushroom'
import type {Names, Ordinals, PossibleEnglishName, PossibleFileName, PossibleImageSourceForFile, PossibleSoundSourceForFile, PossibleUniqueEnglishName}                                      from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImages, FallingAfterJumpImage, GoalPoleImages, Image, JumpImages, PressingDownImage, RunningImages, SwimmingImages, TauntImage, TurningImage, WaitingImage, WalkImages} from 'core/mysteryMushroom/image/Image'
import type {GoalPoleSound, JumpSounds, LostALifeSound, OnGroundAfterJumpSound, PowerUpCollectedSound, Sound, TauntSound, TurningSound}                                                      from 'core/mysteryMushroom/sound/Sound'
import type {SoundProperty}                                                                                                                                                                  from 'core/mysteryMushroom/properties/sound/SoundProperty'
import type {Nullable}                                                                                                                                                                       from 'util/types/nullable'

import {DualFileNameContainer as DualFile}     from 'core/mysteryMushroom/file/name/DualFileName.container'
import {EmptyFileName as EmptyFile}            from 'core/mysteryMushroom/file/name/EmptyFileName'
import {FileName}                              from 'core/mysteryMushroom/file/name/FileName'
import {SingleFileNameContainer as SingleFile} from 'core/mysteryMushroom/file/name/SingleFileName.container'
import {ImageContainer}                        from 'core/mysteryMushroom/image/Image.container'
import {SoundContainer}                        from 'core/mysteryMushroom/sound/Sound.container'
import {Import}                                from 'util/DynamicImporter'
import {EMPTY_ARRAY}                           from 'util/emptyVariables'
import {StringContainer}                       from 'util/StringContainer'

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
            throw new ReferenceError('The Mystery Mushroom image doesn\'t have any images.')
        }

        protected override _createSoundContainer(): never {
            throw new ReferenceError('The Mystery Mushroom sound doesn\'t have any sounds.')
        }


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

        public override get fallingAfterJumpImage() {
            return EMPTY_ARRAY
        }

        public override get onGroundAfterJumpSound() {
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

    public static readonly YAMAMURA =               new MysteryMushrooms(new SingleFile('Boss017',), 'Yamamura',)
    public static readonly MARY_O =                 new MysteryMushrooms(new SingleFile('Boss026',), 'Mary O.',)
    public static readonly UNDODOG =                new MysteryMushrooms(new SingleFile('Boss048',), 'Undodog',)

    public static readonly MR_GAME_AND_WATCH =      new MysteryMushrooms(new SingleFile('GameWatch',), 'Mr. Game & Watch',)

    public static readonly PAC_MAN =                new MysteryMushrooms(new SingleFile('PackMan',), 'PAC-MAN',)

    public static readonly MARIO =                  new MysteryMushrooms(new SingleFile('Mario',), 'Mario',)
    public static readonly LUIGI =                  new MysteryMushrooms(new SingleFile('Luigi',), 'Luigi',)
    public static readonly PROFESSOR_E_GADD =       new MysteryMushrooms(new SingleFile('Boss019',), 'Professor E. Gadd',)
    public static readonly PEACH =                  new MysteryMushrooms(new SingleFile('Peach',), 'Peach',)
    public static readonly DAISY =                  new MysteryMushrooms(new SingleFile('Boss018',), 'Daisy',)
    public static readonly ROSALINA =               new MysteryMushrooms(new SingleFile('Rosalina',), 'Rosalina',)
    public static readonly TOAD =                   new MysteryMushrooms(new SingleFile('Kinopio',), 'Toad',)
    public static readonly CAPTAIN_TOAD =           new MysteryMushrooms(new SingleFile('Boss014',), 'Captain Toad',)
    public static readonly TOADETTE =               new MysteryMushrooms(new SingleFile('Boss027',), 'Toadette',)
    public static readonly YOSHI =                  new MysteryMushrooms(new SingleFile('Yoshi',), 'Yoshi',)
    public static readonly BIRDO =                  new MysteryMushrooms(new SingleFile('Boss016',), 'Birdo',)
    public static readonly WARIO =                  new MysteryMushrooms(new SingleFile('Wario',), 'Wario',)
    public static readonly ASHLEY =                 new MysteryMushrooms(new SingleFile('Ashley',), 'Ashley',)
    public static readonly WALUIGI =                new MysteryMushrooms(new SingleFile('Waluigi',), 'Waluigi',)
    public static readonly BOWSER =                 new MysteryMushrooms(new SingleFile('Koopa',), 'Bowser',)
    public static readonly BOWSER_JR =              new MysteryMushrooms(new SingleFile('KoopaJr',), 'Bowser Jr.',)
    public static readonly GOOMBA =                 new MysteryMushrooms(new SingleFile('Kuribo',), 'Goomba',)
    public static readonly SHY_GUY =                new MysteryMushrooms(new SingleFile('Heiho',), 'Shy Guy',)
    public static readonly NABBIT =                 new MysteryMushrooms(new SingleFile('Boss032',), 'Nabbit',)
    public static readonly MARIO_SILVER =           new MysteryMushrooms(new SingleFile('MarioSilver',), 'Mario (Silver)',)
    public static readonly MARIO_GOLD =             new MysteryMushrooms(new SingleFile('MarioGold',), 'Mario (Gold)',)
    public static readonly BUILDER_MARIO =          new MysteryMushrooms(new SingleFile('DiyMario',), 'Builder Mario',)
    public static readonly DR_MARIO =               new MysteryMushrooms(new SingleFile('DrMario',), 'Dr. Mario',)
    public static readonly FROG_MARIO =             new MysteryMushrooms(new SingleFile('Boss006',), 'Frog Mario',)
    public static readonly STATUE_MARIO =           new MysteryMushrooms(new SingleFile('Boss025',), 'Statue Mario',)
    public static readonly MARIO_TRIO =             new MysteryMushrooms(new SingleFile('Boss007',), 'Mario Trio',)
    public static readonly KART_MARIO =             new MysteryMushrooms(new SingleFile('MarioKart',), 'Kart Mario',)
    public static readonly CAT_MARIO =              new MysteryMushrooms(new SingleFile('Boss003',), 'Cat Mario',)
    public static readonly CAT_PEACH =              new MysteryMushrooms(new SingleFile('Boss004',), 'Cat Peach',)
    public static readonly SKY_POP =                new MysteryMushrooms(new SingleFile('Boss010',), 'Sky Pop',)
    public static readonly BABY_MARIO =             new MysteryMushrooms(new SingleFile('Boss037',), 'Baby Mario',)
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushrooms(new DualFile('Block', 'Block L',), '? Block',)
    public static readonly TRAMPOLINE =             new MysteryMushrooms(new SingleFile('Trampoline',), 'Trampoline',)
    public static readonly MARIO_MB =               new MysteryMushrooms(new SingleFile('MarioOriginal',), 'Mario', 'Mario (MB)',)
    public static readonly SIDESTEPPER =            new MysteryMushrooms(new SingleFile('SideStepper',), 'Sidestepper',)
    public static readonly SHELLCREEPER =           new MysteryMushrooms(new SingleFile('Shellcreeper',), 'Shellcreeper',)
    public static readonly FIGHTER_FLY =            new MysteryMushrooms(new SingleFile('Fightfly',), 'Fighter Fly',)

    public static readonly GREEN_YARN_YOSHI =       new MysteryMushrooms(new SingleFile('WoolYoshiGreen',), 'Green Yarn Yoshi',)
    public static readonly PINK_YARN_YOSHI =        new MysteryMushrooms(new SingleFile('WoolYoshiPink',), 'Pink Yarn Yoshi',)
    public static readonly LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms(new SingleFile('WoolYoshiAqua',), 'Light-Blue Yarn Yoshi',)
    public static readonly MEGA_YARN_YOSHI =        new MysteryMushrooms(new SingleFile('WoolYoshiBig',), 'Mega Yarn Yoshi',)

    public static readonly DONKEY_KONG =            new MysteryMushrooms(new SingleFile('DonkeyKong',), 'Donkey Kong',)
    public static readonly DONKEY_KONG_JR =         new MysteryMushrooms(new SingleFile('DonkeyKongJr',), 'Donkey Kong Jr.',)
    public static readonly DIDDY_KONG =             new MysteryMushrooms(new SingleFile('DiddyKong',), 'Diddy Kong',)

    public static readonly LITTLE_MAC =             new MysteryMushrooms(new SingleFile('LittleMac',), 'Little Mac',)

    public static readonly DUCK_HUNT =              new MysteryMushrooms(new SingleFile('DuckHunt',), 'Duck Hunt',)

    public static readonly BUBBLES =                new MysteryMushrooms(new SingleFile('Boss040',), 'Bubbles',)

    public static readonly BIKE =                   new MysteryMushrooms(new SingleFile('Boss015',), 'Bike',)

    public static readonly BALLOON_FIGHTER =        new MysteryMushrooms(new SingleFile('Boss031',), 'Balloon Fighter',)

    public static readonly POPO_AND_NANA =          new MysteryMushrooms(new SingleFile('Boss044',), 'Popo & Nana',)

    public static readonly FOREMAN_SPIKE =          new MysteryMushrooms(new SingleFile('Blackey',), 'Foreman Spike',)

    public static readonly LINK =                   new MysteryMushrooms(new SingleFile('Link',), 'Link',)
    public static readonly ZELDA =                  new MysteryMushrooms(new SingleFile('Zelda',), 'Zelda',)
    public static readonly SHEIK =                  new MysteryMushrooms(new SingleFile('Sheik',), 'Sheik',)
    public static readonly TOON_LINK =              new MysteryMushrooms(new SingleFile('ThunLink',), 'Toon Link',)
    public static readonly TETRA =                  new MysteryMushrooms(new SingleFile('Boss033',), 'Tetra',)
    public static readonly TINGLE =                 new MysteryMushrooms(new SingleFile('Tincle',), 'Tingle',)
    public static readonly GANONDORF =              new MysteryMushrooms(new SingleFile('Ganon',), 'Ganondorf',)
    public static readonly WOLF_LINK =              new MysteryMushrooms(new SingleFile('Boss030',), 'Wolf Link',)
    public static readonly TOTEM_LINK =             new MysteryMushrooms(new SingleFile('Boss000',), 'Totem Link',)

    public static readonly SAMUS =                  new MysteryMushrooms(new SingleFile('Samus',), 'Samus',)
    public static readonly ZERO_SUIT_SAMUS =        new MysteryMushrooms(new SingleFile('ZeroSams',), 'Zero Suit Samus',)

    public static readonly VOLLEYBALL_PLAYER =      new MysteryMushrooms(new SingleFile('Boss042',), 'Volleyball Player',)

    public static readonly PIT =                    new MysteryMushrooms(new SingleFile('Pit',), 'Pit',)
    public static readonly PALUTENA =               new MysteryMushrooms(new SingleFile('Palutena',), 'Palutena',)
    public static readonly DARK_PIT =               new MysteryMushrooms(new SingleFile('DarkPit',), 'Dark Pit',)

    public static readonly DONBE =                  new MysteryMushrooms(new SingleFile('Boss034',), 'Donbe',)
    public static readonly HIKARI =                 new MysteryMushrooms(new SingleFile('Boss035',), 'Hikari',)

    public static readonly MEGA_MAN =               new MysteryMushrooms(new SingleFile('MegaMan',), 'Mega Man',)

    public static readonly AYUMI_TACHIBANA =        new MysteryMushrooms(new SingleFile('Boss036',), 'Ayumi Tachibana',)

    public static readonly MARTH =                  new MysteryMushrooms(new SingleFile('Marth',), 'Marth',)
    public static readonly IKE =                    new MysteryMushrooms(new SingleFile('Ike',), 'Ike',)
    public static readonly LUCINA =                 new MysteryMushrooms(new SingleFile('Lucina',), 'Lucina',)
    public static readonly ROBIN =                  new MysteryMushrooms(new SingleFile('Robin',), 'Robin',)

    public static readonly CAPTAIN_FALCON =         new MysteryMushrooms(new SingleFile('Falcon',), 'Captain Falcon',)

    public static readonly SONIC =                  new class MysteryMushrooms_Sonic extends MysteryMushrooms {

        protected override _createImageContainer(file: PossibleFileName,) {
            return new ImageContainer(file, 3,)
        }

    }(new SingleFile('Sonic',), 'Sonic',)

    public static readonly KIRBY =                  new MysteryMushrooms(new SingleFile('Kirby',), 'Kirby',)
    public static readonly KING_DEDEDE =            new MysteryMushrooms(new SingleFile('Dedede',), 'King Dedede',)
    public static readonly META_KNIGHT =            new MysteryMushrooms(new SingleFile('MetaKnight',), 'Meta Knight',)

    public static readonly FOX_MCCLOUD =            new MysteryMushrooms(new SingleFile('Fox',), 'Fox McCloud',)
    public static readonly FALCO_LOMBARDI =         new MysteryMushrooms(new SingleFile('Falco',), 'Falco Lombardi',)
    public static readonly SLIPPY_TOAD =            new MysteryMushrooms(new SingleFile('Slippy',), 'Slippy Toad',)
    public static readonly PEPPY_HARE =             new MysteryMushrooms(new SingleFile('Peppy',), 'Peppy Hare',)
    public static readonly ARWING =                 new MysteryMushrooms(new SingleFile('Arwing',), 'Arwing',)

    public static readonly NESS =                   new MysteryMushrooms(new SingleFile('Ness',), 'Ness',)
    public static readonly LUCAS =                  new MysteryMushrooms(new SingleFile('Lucas',), 'Lucas',)
    public static readonly MASTER_BELCH =           new MysteryMushrooms(new SingleFile('Boss012',), 'Master Belch',)
    public static readonly MR_SATURN =              new MysteryMushrooms(new SingleFile('Boss013',), 'Mr. Saturn',)

    public static readonly BULBASAUR =              new MysteryMushrooms(new SingleFile('Boss020',), 'Bulbasaur',)
    public static readonly CHARMANDER =             new MysteryMushrooms(new SingleFile('Boss021',), 'Charmander',)
    public static readonly CHARIZARD =              new MysteryMushrooms(new SingleFile('Charizard',), 'Charizard',)
    public static readonly SQUIRTLE =               new MysteryMushrooms(new SingleFile('Boss022',), 'Squirtle',)
    public static readonly PIKACHU =                new MysteryMushrooms(new SingleFile('Pikachu',), 'Pikachu',)
    public static readonly JIGGLYPUFF =             new MysteryMushrooms(new SingleFile('Pudding',), 'Jigglypuff',)
    public static readonly MEWTWO =                 new MysteryMushrooms(new SingleFile('Mewtwo',), 'Mewtwo',)
    public static readonly LUCARIO =                new MysteryMushrooms(new SingleFile('Lucario',), 'Lucario',)
    public static readonly GRENINJA =               new MysteryMushrooms(new SingleFile('Greninja',), 'Greninja',)

    public static readonly VILLAGER =               new MysteryMushrooms(new SingleFile('Murabito',), 'Villager',)
    public static readonly TOM_NOOK =               new MysteryMushrooms(new SingleFile('Tanuki',), 'Tom Nook',)
    public static readonly K_K_SLIDER =             new MysteryMushrooms(new SingleFile('Totakeke',), 'K.K. Slider',)
    public static readonly RESETTI =                new MysteryMushrooms(new SingleFile('ResetSan',), 'Resetti',)
    public static readonly ROVER =                  new MysteryMushrooms(new SingleFile('MishiNeko',), 'Rover',)
    public static readonly TIMMY_AND_TOMMY =        new MysteryMushrooms(new SingleFile('TsubuMame',), 'Timmy & Tommy',)
    public static readonly BLATHERS =               new MysteryMushrooms(new SingleFile('Futa',), 'Blathers',)
    public static readonly MABEL =                  new MysteryMushrooms(new SingleFile('Kinuyo',), 'Mabel',)
    public static readonly KAPP_N =                 new MysteryMushrooms(new SingleFile('Kappei',), 'Kapp\'n',)
    public static readonly CELESTE =                new MysteryMushrooms(new SingleFile('Fuko',), 'Celeste',)
    public static readonly KICKS =                  new MysteryMushrooms(new SingleFile('Shunk',), 'Kicks',)
    public static readonly ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms(new SingleFile('Sizue',), 'Isabelle (Summer Outfit)',)
    public static readonly ISABELLE_WINTER_OUTFIT = new MysteryMushrooms(new SingleFile('SizueWinter',), 'Isabelle (Winter Outfit)',)
    public static readonly DIGBY =                  new MysteryMushrooms(new SingleFile('Kento',), 'Digby',)
    public static readonly CYRUS =                  new MysteryMushrooms(new SingleFile('Kaizo',), 'Cyrus',)
    public static readonly REESE =                  new MysteryMushrooms(new SingleFile('Lisa',), 'Reese',)
    public static readonly LOTTIE =                 new MysteryMushrooms(new SingleFile('Takumi',), 'Lottie',)

    public static readonly CAPTAIN_OLIMAR =         new MysteryMushrooms(new SingleFile('Orima',), 'Captain Olimar',)
    public static readonly PIKMIN =                 new MysteryMushrooms(new SingleFile('Pikmin',), 'Pikmin',)

    public static readonly CHIBI_ROBO =             new MysteryMushrooms(new SingleFile('ChibiRobo',), 'Chibi-Robo',)

    public static readonly WII_BALANCE_BOARD =      new MysteryMushrooms(new SingleFile('Wiibo',), 'Wii Balance Board',)
    public static readonly WII_FIT_TRAINER =        new MysteryMushrooms(new SingleFile('Fit',), 'Wii Fit Trainer',)

    public static readonly SHULK =                  new MysteryMushrooms(new SingleFile('Shulk',), 'Shulk',)

    public static readonly FELYNE =                 new MysteryMushrooms(new SingleFile('Boss009',), 'Felyne',)

    public static readonly YU_AYASAKI =             new MysteryMushrooms(new SingleFile('Boss028',), 'Yu Ayasaki',)

    public static readonly DR_KAWASHIMA =           new MysteryMushrooms(new SingleFile('Boss049',), 'Dr. Kawashima',)

    public static readonly DR_LOBE =                new MysteryMushrooms(new SingleFile('MrHakari',), 'Dr. Lobe',)

    public static readonly BARBARA_THE_BAT =        new MysteryMushrooms(new SingleFile('Boss024',), 'Barbara the Bat',)

    public static readonly STARFY =                 new MysteryMushrooms(new SingleFile('Boss029',), 'Starfy',)

    public static readonly MALLO =                  new MysteryMushrooms(new SingleFile('Boss039',), 'Mallo',)

    public static readonly NIKKI =                  new MysteryMushrooms(new SingleFile('Nikki',), 'Nikki',)
    public static readonly IRIS_ARCHWELL =          new MysteryMushrooms(new SingleFile('Boss038',), 'Iris Archwell',)
    public static readonly ARCADE_BUNNY =           new MysteryMushrooms(new SingleFile('Boss011',), 'Arcade bunny',)

    public static readonly CHITOGE_KIRISAKI =       new MysteryMushrooms(new SingleFile('Boss023',), 'Chitoge Kirisaki',)

    public static readonly INKLING_SQUID =          new MysteryMushrooms(new SingleFile('SplaIka', 'SplatIka',), 'Inkling Squid',)
    public static readonly INKLING_BOY =            new MysteryMushrooms(new DualFile('SplaBoy', 'SplaBoy W',), 'Inkling Boy',)
    public static readonly INKLING_GIRL =           new MysteryMushrooms(new DualFile('SplaGirl', 'SplaGirl W',), 'Inkling Girl',)
    public static readonly CALLIE =                 new MysteryMushrooms(new DualFile('Boss050', 'SplaAori W',), 'Callie',)
    public static readonly MARIE =                  new MysteryMushrooms(new DualFile('Boss051', 'SplaHotaru W',), 'Marie',)

    public static readonly ROB =                    new MysteryMushrooms(new DualFile('Robot USEU', 'Robot JP', 'Robot',), 'R.O.B.',)
    public static readonly DISKUN =                 new MysteryMushrooms(new SingleFile('Boss041',), 'Diskun',)
    public static readonly MAHJONG_TILE =           new MysteryMushrooms(new SingleFile('MahjongTile',), 'Mahjong Tile',)

    public static readonly KITTY_WHITE =            new MysteryMushrooms(new DualFile('Boss045', 'Boss045 L',), 'Kitty White',)
    public static readonly MELODY =                 new MysteryMushrooms(new DualFile('Boss046', 'Boss046 L',), 'Melody',)
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushrooms(new SingleFile('Boss047',), 'Shaun the Sheep',)

    public static readonly ARINO_KACHO =            new MysteryMushrooms(new SingleFile('Boss001',), 'Arino KACHO',)
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms(new SingleFile('Boss002',), 'SUPER MARIO KUN',)
    public static readonly NECKY =                  new MysteryMushrooms(new SingleFile('Boss005',), 'Necky',)
    public static readonly GLA =                    new MysteryMushrooms(new SingleFile('Boss008',), 'GLA',)
    public static readonly BABYMETAL =              new MysteryMushrooms(new SingleFile('Boss043',), 'BABYMETAL',)

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
    #imageContainer?: PossibleImageSourceForFile<Image>
    #soundContainer?: Sound

    #powerUpCollectedSound?: PossibleSoundSourceForFile<PowerUpCollectedSound>

    #waitingImage?: PossibleImageSourceForFile<WaitingImage>

    #tauntImage?: PossibleImageSourceForFile<TauntImage>
    #tauntSound?: PossibleSoundSourceForFile<TauntSound>

    #pressingDownImage?: PossibleImageSourceForFile<PressingDownImage>

    #walkImages?: PossibleImageSourceForFile<WalkImages>

    #runningImages?: PossibleImageSourceForFile<RunningImages>

    #swimmingImages?: PossibleImageSourceForFile<SwimmingImages>

    #jumpImages?: PossibleImageSourceForFile<JumpImages>
    #jumpSounds?: PossibleSoundSourceForFile<JumpSounds>
    #fallingAfterJumpImage?: PossibleImageSourceForFile<FallingAfterJumpImage>
    #onGroundAfterJumpSound?: PossibleSoundSourceForFile<OnGroundAfterJumpSound>

    #turningSound?: PossibleSoundSourceForFile<TurningSound>
    #turningImage?: PossibleImageSourceForFile<TurningImage>

    #climbingImages?: PossibleImageSourceForFile<ClimbingImages>

    #goalPoleImages?: PossibleImageSourceForFile<GoalPoleImages>
    #goalPoleSound?: PossibleSoundSourceForFile<GoalPoleSound>

    #lostALifeSound?: PossibleSoundSourceForFile<LostALifeSound>

    //endregion -------------------- Fields --------------------

    public constructor(fileName: FileName, englishName: PossibleEnglishName,)
    public constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName,)
    public constructor(fileName: FileName, englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#uniqueEnglishName = uniqueEnglishName
        this.#fileName = fileName
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        return this.#REFERENCE_MAP ??= Import.MysteryMushroomLoader.get.load()
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

    public get fileName(): FileName {
        return this.#fileName
    }


    protected _createImageContainer(file: PossibleFileName,): Image {
        return new ImageContainer(file,)
    }

    private get __imageContainers(): PossibleImageSourceForFile<Image> {
        return this.#imageContainer ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.fileName.imageFileNames, fileName => this._createImageContainer(fileName!))
    }

    protected _createSoundContainer(file: PossibleFileName, property: SoundProperty,): Sound {
        return new SoundContainer(file, () => property,)
    }

    private get __soundContainer(): Sound {
        return this.#soundContainer ??= this._createSoundContainer(this.fileName.soundFileName[0]!, this.reference,)
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): PossibleSoundSourceForFile<PowerUpCollectedSound> {
        return this.#powerUpCollectedSound !== undefined ? this.#powerUpCollectedSound : this.reference.haveASoundEffectWhenCollected ? this.__soundContainer.powerUpCollectedSound : null
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImage(): PossibleImageSourceForFile<WaitingImage> {
        return this.#waitingImage ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.waitingImage)
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImage(): PossibleImageSourceForFile<TauntImage> {
        return this.#tauntImage ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.tauntImage)
    }

    public get tauntSound(): PossibleSoundSourceForFile<TauntSound> {
        return this.#tauntSound !== undefined ? this.#tauntSound : this.reference.haveASoundEffectOnTaunt === true ? this.__soundContainer.tauntSound : null
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get pressingDownImage(): PossibleImageSourceForFile<PressingDownImage> {
        return this.#pressingDownImage ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.pressingDownImage)
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): PossibleImageSourceForFile<WalkImages> {
        return this.#walkImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.walkImages)
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImages(): PossibleImageSourceForFile<RunningImages> {
        return this.#runningImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.runningImages)
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): PossibleImageSourceForFile<SwimmingImages> {
        return this.#swimmingImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.swimmingImages)
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    public get jumpImages(): PossibleImageSourceForFile<JumpImages> {
        return this.#jumpImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.jumpImages)
    }

    public get jumpSounds(): PossibleSoundSourceForFile<JumpSounds> {
        return this.#jumpSounds ??= this.reference.haveASoundEffectOnJump === true ? this.__soundContainer.jumpSounds : EMPTY_ARRAY
    }

    public get fallingAfterJumpImage(): PossibleImageSourceForFile<FallingAfterJumpImage> {
        return this.#fallingAfterJumpImage ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.fallingAfterJumpImage)
    }

    public get onGroundAfterJumpSound(): PossibleSoundSourceForFile<OnGroundAfterJumpSound> {
        return this.#onGroundAfterJumpSound !== undefined ? this.#onGroundAfterJumpSound : this.reference.haveASoundEffectOnGroundAfterJump ? this.__soundContainer.onGroundAfterJumpSound : null
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImage(): PossibleImageSourceForFile<TurningImage> {
        return this.#turningImage ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.turningImage)
    }

    public get turningSound(): PossibleSoundSourceForFile<TurningSound> {
        return this.#turningSound !== undefined ? this.#turningSound : this.reference.haveASoundEffectOnTurnAfterRun === true ? this.__soundContainer.turningSound : null
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): PossibleImageSourceForFile<ClimbingImages> {
        return this.#climbingImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.climbingImages)
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): PossibleImageSourceForFile<GoalPoleImages> {
        return this.#goalPoleImages ??= MysteryMushrooms.#getFromEnglishNameOnFile(this.__imageContainers, image => image.goalPoleImages)
    }

    public get goalPoleSound(): PossibleSoundSourceForFile<GoalPoleSound> {
        return this.#goalPoleSound !== undefined ? this.#goalPoleSound : this.reference.haveASoundEffectOnGoalPole ? this.__soundContainer.goalPoleSound : null
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): PossibleSoundSourceForFile<LostALifeSound> {
        return this.#lostALifeSound !== undefined ? this.#lostALifeSound : this.reference.haveASoundEffectOnDeath ? this.__soundContainer.lostALifeSound : null
    }

    //endregion -------------------- Lost a life --------------------

    //endregion -------------------- Files (images / sounds) getter methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    static #getFromEnglishNameOnFile<T, U, >(source: PossibleImageSourceForFile<T>, callback: (t: T,) => U): PossibleImageSourceForFile<U> {
        return source.map(callback) as unknown as PossibleImageSourceForFile<U>
    }

    public static get everyUniqueEnglishNames(): readonly PossibleUniqueEnglishName[] {
        return this.values.map(it => it.uniqueEnglishName).toArray()
    }

    // public static getValueByName<T extends string, >(value: T,): MysteryMushroomsByName<T>
    public static getValueByName(value: Nullable<| MysteryMushrooms | string>,): MysteryMushrooms {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => {
            const fileName = it.fileName
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