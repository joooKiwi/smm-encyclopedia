import type {ClassWithEnglishName}                                                                                                                                                                                                                     from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                       from '../ClassWithReference';
import type {ClimbingImages, DownImages, FallingAfterJumpImages, GoalPoleImages, Image, JumpImages, RunningImages, SwimmingImages, TauntImages, TurningImages, WaitingImages, WalkImages}                                                              from './image/Image';
import type {EnglishNameOnFile, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleUniqueEnglishName, PossibleValue} from './MysteryMushrooms.types';
import type {GoalPoleSounds, JumpSounds, LostALifeSounds, OnGroundAfterJumpSounds, PowerUpCollectedSounds, Sound, TauntSounds, TurningSounds}                                                                                                          from './sound/Sound';
import type {MysteryMushroom}                                                                                                                                                                                                                          from './MysteryMushroom';
import type {PossiblePath}                                                                                                                                                                                                                             from './path/ClassWithPath';
import type {SoundProperty}                                                                                                                                                                                                                            from './properties/sound/SoundProperty';
import type {StaticReference}                                                                                                                                                                                                                          from '../../util/enum/Enum.types';

import {BasicImageContainer}                   from './image/BasicImage.container';
import {Enum}                                  from '../../util/enum/Enum';
import {ImageWithLeftVariationContainer}       from './image/ImageWithLeftVariation.container';
import {ImageWithUnderwaterVariationContainer} from './image/ImageWithUnderwaterVariation.container';
import {ImageWithJapaneseContainer}            from './image/ImageWithJapanese.container';
import {Import}                                from '../../util/DynamicImporter';
import {NoImage}                               from './image/NoImage';
import {NoSound}                               from './sound/NoSound';
import {SoundContainer}                        from './sound/Sound.container';
import {StringContainer}                       from '../../util/StringContainer';

/**
 * @recursiveReference {@link MysteryMushroomLoader}
 * @classWithDynamicImport {@link MysteryMushroomLoader}
 * @todo add to the Mystery Mushroom image builder the variants (underwater, left & japanese)
 */
export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MysteryMushroom>,
        ClassWithEnglishName<PossibleEnglishName>,
        Image, Sound {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ MYSTERY_MUSHROOM;

    public static/* readonly*/ YAMAMURA;
    public static/* readonly*/ MARY_O;
    public static/* readonly*/ UNDODOG;

    public static/* readonly*/ MR_GAME_AND_WATCH;

    public static/* readonly*/ PAC_MAN;

    public static/* readonly*/ MARIO;
    public static/* readonly*/ LUIGI;
    public static/* readonly*/ PROFESSOR_E_GADD;
    public static/* readonly*/ PEACH;
    public static/* readonly*/ DAISY;
    public static/* readonly*/ ROSALINA;
    public static/* readonly*/ TOAD;
    public static/* readonly*/ CAPTAIN_TOAD;
    public static/* readonly*/ TOADETTE;
    public static/* readonly*/ YOSHI;
    public static/* readonly*/ BIRDO;
    public static/* readonly*/ WARIO;
    public static/* readonly*/ ASHLEY;
    public static/* readonly*/ WALUIGI;
    public static/* readonly*/ BOWSER;
    public static/* readonly*/ BOWSER_JR;
    public static/* readonly*/ GOOMBA;
    public static/* readonly*/ SHY_GUY;
    public static/* readonly*/ NABBIT;
    public static/* readonly*/ MARIO_SILVER;
    public static/* readonly*/ MARIO_GOLD;
    public static/* readonly*/ BUILDER_MARIO;
    public static/* readonly*/ DR_MARIO;
    public static/* readonly*/ FROG_MARIO;
    public static/* readonly*/ STATUE_MARIO;
    public static/* readonly*/ MARIO_TRIO;
    public static/* readonly*/ KART_MARIO;
    public static/* readonly*/ CAT_MARIO;
    public static/* readonly*/ CAT_PEACH;
    public static/* readonly*/ SKY_POP;
    public static/* readonly*/ BABY_MARIO;
    public static/* readonly*/ QUESTION_MARK_BLOCK;
    public static/* readonly*/ TRAMPOLINE;
    public static/* readonly*/ MARIO_MB;
    public static/* readonly*/ SIDESTEPPER;
    public static/* readonly*/ SHELLCREEPER;
    public static/* readonly*/ FIGHTER_FLY;

    public static/* readonly*/ GREEN_YARN_YOSHI;
    public static/* readonly*/ PINK_YARN_YOSHI;
    public static/* readonly*/ LIGHT_BLUE_YARN_YOSHI;
    public static/* readonly*/ MEGA_YARN_YOSHI;

    public static/* readonly*/ DONKEY_KONG;
    public static/* readonly*/ DONKEY_KONG_JR;
    public static/* readonly*/ DIDDY_KONG;

    public static/* readonly*/ LITTLE_MAC;

    public static/* readonly*/ DUCK_HUNT;

    public static/* readonly*/ BUBBLES;

    public static/* readonly*/ BIKE;

    public static/* readonly*/ BALLOON_FIGHTER;

    public static/* readonly*/ POPO_AND_NANA;

    public static/* readonly*/ FOREMAN_SPIKE;

    public static/* readonly*/ LINK;
    public static/* readonly*/ ZELDA;
    public static/* readonly*/ SHEIK;
    public static/* readonly*/ TOON_LINK;
    public static/* readonly*/ TETRA;
    public static/* readonly*/ TINGLE;
    public static/* readonly*/ GANONDORF;
    public static/* readonly*/ WOLF_LINK;
    public static/* readonly*/ TOTEM_LINK;

    public static/* readonly*/ SAMUS;
    public static/* readonly*/ ZERO_SUIT_SAMUS;

    public static/* readonly*/ VOLLEYBALL_PLAYER;

    public static/* readonly*/ PIT;
    public static/* readonly*/ PALUTENA;
    public static/* readonly*/ DARK_PIT;

    public static/* readonly*/ DONBE;
    public static/* readonly*/ HIKARI;

    public static/* readonly*/ MEGA_MAN;

    public static/* readonly*/ AYUMI_TACHIBANA;

    public static/* readonly*/ MARTH;
    public static/* readonly*/ IKE;
    public static/* readonly*/ LUCINA;
    public static/* readonly*/ ROBIN;

    public static/* readonly*/ CAPTAIN_FALCON;

    public static/* readonly*/ SONIC;

    public static/* readonly*/ KIRBY;
    public static/* readonly*/ KING_DEDEDE;
    public static/* readonly*/ META_KNIGHT;

    public static/* readonly*/ FOX_MCCLOUD;
    public static/* readonly*/ FALCO_LOMBARDI;
    public static/* readonly*/ SLIPPY_TOAD;
    public static/* readonly*/ PEPPY_HARE;
    public static/* readonly*/ ARWING;

    public static/* readonly*/ NESS;
    public static/* readonly*/ LUCAS;
    public static/* readonly*/ MASTER_BELCH;
    public static/* readonly*/ MR_SATURN;

    public static/* readonly*/ BULBASAUR;
    public static/* readonly*/ CHARMANDER;
    public static/* readonly*/ CHARIZARD;
    public static/* readonly*/ SQUIRTLE;
    public static/* readonly*/ PIKACHU;
    public static/* readonly*/ JIGGLYPUFF;
    public static/* readonly*/ MEWTWO;
    public static/* readonly*/ LUCARIO;
    public static/* readonly*/ GRENINJA;

    public static/* readonly*/ VILLAGER;
    public static/* readonly*/ TOM_NOOK;
    public static/* readonly*/ K_K_SLIDER;
    public static/* readonly*/ RESETTI;
    public static/* readonly*/ ROVER;
    public static/* readonly*/ TIMMY_AND_TOMMY;
    public static/* readonly*/ BLATHERS;
    public static/* readonly*/ MABEL;
    public static/* readonly*/ KAPP_N;
    public static/* readonly*/ CELESTE;
    public static/* readonly*/ KICKS;
    public static/* readonly*/ ISABELLE_SUMMER_OUTFIT;
    public static/* readonly*/ ISABELLE_WINTER_OUTFIT;
    public static/* readonly*/ DIGBY;
    public static/* readonly*/ CYRUS;
    public static/* readonly*/ REESE;
    public static/* readonly*/ LOTTIE;

    public static/* readonly*/ CAPTAIN_OLIMAR;
    public static/* readonly*/ PIKMIN;

    public static/* readonly*/ CHIBI_ROBO;

    public static/* readonly*/ WII_BALANCE_BOARD;
    public static/* readonly*/ WII_FIT_TRAINER;

    public static/* readonly*/ SHULK;

    public static/* readonly*/ FELYNE;

    public static/* readonly*/ YU_AYASAKI;

    public static/* readonly*/ DR_KAWASHIMA;

    public static/* readonly*/ DR_LOBE;

    public static/* readonly*/ BARBARA_THE_BAT;

    public static/* readonly*/ STARFY;

    public static/* readonly*/ MALLO;

    public static/* readonly*/ NIKKI;
    public static/* readonly*/ IRIS_ARCHWELL;
    public static/* readonly*/ ARCADE_BUNNY;

    public static/* readonly*/ CHITOGE_KIRISAKI;

    public static/* readonly*/ INKLING_SQUID;
    public static/* readonly*/ INKLING_BOY;
    public static/* readonly*/ INKLING_GIRL;
    public static/* readonly*/ CALLIE;
    public static/* readonly*/ MARIE;

    public static/* readonly*/ ROB;
    public static/* readonly*/ DISKUN;
    public static/* readonly*/ MAHJONG_TILE;

    public static/* readonly*/ KITTY_WHITE;
    public static/* readonly*/ MELODY;
    public static/* readonly*/ SHAUN_THE_SHEEP;

    public static/* readonly*/ ARINO_KACHO;
    public static/* readonly*/ SUPER_MARIO_KUN;
    public static/* readonly*/ NECKY;
    public static/* readonly*/ GLA;
    public static/* readonly*/ BABYMETAL;

    static {
        this.MYSTERY_MUSHROOM =       new class MysteryMushrooms_MysteryMushroom extends MysteryMushrooms {

            protected _createImageContainer(): Image {
                return NoImage.get;
            }

            protected _createSoundContainer(): Sound {
                return NoSound.get;
            }

        }('Mystery Mushroom',);

        this.YAMAMURA =               new MysteryMushrooms('Yamamura',);
        this.MARY_O =                 new MysteryMushrooms('Mary O', 'Mary O.',);
        this.UNDODOG =                new MysteryMushrooms('Undodog',);

        this.MR_GAME_AND_WATCH =      new MysteryMushrooms('Mr. Game & Watch',);

        this.PAC_MAN =                new MysteryMushrooms('PAC-MAN',);

        this.MARIO =                  new MysteryMushrooms('Mario',);
        this.LUIGI =                  new MysteryMushrooms('Luigi',);
        this.PROFESSOR_E_GADD =       new MysteryMushrooms('Professor E. Gadd',);
        this.PEACH =                  new MysteryMushrooms('Peach',);
        this.DAISY =                  new MysteryMushrooms('Daisy',);
        this.ROSALINA =               new MysteryMushrooms('Rosalina',);
        this.TOAD =                   new MysteryMushrooms('Toad',);
        this.CAPTAIN_TOAD =           new MysteryMushrooms('Captain Toad',);
        this.TOADETTE =               new MysteryMushrooms('Toadette',);
        this.YOSHI =                  new MysteryMushrooms('Yoshi',);
        this.BIRDO =                  new MysteryMushrooms('Birdo',);
        this.WARIO =                  new MysteryMushrooms('Wario',);
        this.ASHLEY =                 new MysteryMushrooms('Ashley',);
        this.WALUIGI =                new MysteryMushrooms('Waluigi',);
        this.BOWSER =                 new MysteryMushrooms('Bowser',);
        this.BOWSER_JR =              new MysteryMushrooms('Bowser Jr', 'Bowser Jr.',);
        this.GOOMBA =                 new MysteryMushrooms('Goomba',);
        this.SHY_GUY =                new MysteryMushrooms('Shy Guy',);
        this.NABBIT =                 new MysteryMushrooms('Nabbit',);
        this.MARIO_SILVER =           new MysteryMushrooms('Mario (Silver)',);
        this.MARIO_GOLD =             new MysteryMushrooms('Mario (Gold)',);
        this.BUILDER_MARIO =          new MysteryMushrooms('Builder Mario',);
        this.DR_MARIO =               new MysteryMushrooms('Dr. Mario',);
        this.FROG_MARIO =             new MysteryMushrooms('Frog Mario',);
        this.STATUE_MARIO =           new MysteryMushrooms('Statue Mario',);
        this.MARIO_TRIO =             new MysteryMushrooms('Mario Trio',);
        this.KART_MARIO =             new MysteryMushrooms('Kart Mario',);
        this.CAT_MARIO =              new MysteryMushrooms('Cat Mario',);
        this.CAT_PEACH =              new MysteryMushrooms('Cat Peach',);
        this.SKY_POP =                new MysteryMushrooms('Sky Pop',);
        this.BABY_MARIO =             new MysteryMushrooms('Baby Mario',);
        this.QUESTION_MARK_BLOCK =    new class MysteryMushrooms_QuestionMarkBlock extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithLeftVariationContainer(imagePath);
            }

        }('Question Mark Block', '? Block',);
        this.TRAMPOLINE =             new MysteryMushrooms('Trampoline',);
        this.MARIO_MB =               new MysteryMushrooms('Mario (MB)', 'Mario',);
        this.SIDESTEPPER =            new MysteryMushrooms('Sidestepper',);
        this.SHELLCREEPER =           new MysteryMushrooms('Shellcreeper',);
        this.FIGHTER_FLY =            new MysteryMushrooms('Fighter Fly',);

        this.GREEN_YARN_YOSHI =       new MysteryMushrooms('Green Yarn Yoshi',);
        this.PINK_YARN_YOSHI =        new MysteryMushrooms('Pink Yarn Yoshi',);
        this.LIGHT_BLUE_YARN_YOSHI =  new MysteryMushrooms('Light-Blue Yarn Yoshi',);
        this.MEGA_YARN_YOSHI =        new MysteryMushrooms('Mega Yarn Yoshi',);

        this.DONKEY_KONG =            new MysteryMushrooms('Donkey Kong',);
        this.DONKEY_KONG_JR =         new MysteryMushrooms('Donkey Kong Jr', 'Donkey Kong Jr.',);
        this.DIDDY_KONG =             new MysteryMushrooms('Diddy Kong',);

        this.LITTLE_MAC =             new MysteryMushrooms('Little Mac',);

        this.DUCK_HUNT =              new MysteryMushrooms('Duck Hunt',);

        this.BUBBLES =                new MysteryMushrooms('Bubbles',);

        this.BIKE =                   new MysteryMushrooms('Bike',);

        this.BALLOON_FIGHTER =        new MysteryMushrooms('Balloon Fighter',);

        this.POPO_AND_NANA =          new MysteryMushrooms('Popo & Nana',);

        this.FOREMAN_SPIKE =          new MysteryMushrooms('Foreman Spike',);

        this.LINK =                   new MysteryMushrooms('Link',);
        this.ZELDA =                  new MysteryMushrooms('Zelda',);
        this.SHEIK =                  new MysteryMushrooms('Sheik',);
        this.TOON_LINK =              new MysteryMushrooms('Toon Link',);
        this.TETRA =                  new MysteryMushrooms('Tetra',);
        this.TINGLE =                 new MysteryMushrooms('Tingle',);
        this.GANONDORF =              new MysteryMushrooms('Ganondorf',);
        this.WOLF_LINK =              new MysteryMushrooms('Wolf Link',);
        this.TOTEM_LINK =             new MysteryMushrooms('Totem Link',);

        this.SAMUS =                  new MysteryMushrooms('Samus',);
        this.ZERO_SUIT_SAMUS =        new MysteryMushrooms('Zero Suit Samus',);

        this.VOLLEYBALL_PLAYER =      new MysteryMushrooms('Volleyball Player',);

        this.PIT =                    new MysteryMushrooms('Pit',);
        this.PALUTENA =               new MysteryMushrooms('Palutena',);
        this.DARK_PIT =               new MysteryMushrooms('Dark Pit',);

        this.DONBE =                  new MysteryMushrooms('Donbe',);
        this.HIKARI =                 new MysteryMushrooms('Hikari',);

        this.MEGA_MAN =               new MysteryMushrooms('Mega Man',);

        this.AYUMI_TACHIBANA =        new MysteryMushrooms('Ayumi Tachibana',);

        this.MARTH =                  new MysteryMushrooms('Marth',);
        this.IKE =                    new MysteryMushrooms('Ike',);
        this.LUCINA =                 new MysteryMushrooms('Lucina',);
        this.ROBIN =                  new MysteryMushrooms('Robin',);

        this.CAPTAIN_FALCON =         new MysteryMushrooms('Captain Falcon',);

        this.SONIC =                  new class MysteryMushrooms_Sonic extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new BasicImageContainer(imagePath, 3,);
            }

        }('Sonic',);

        this.KIRBY =                  new MysteryMushrooms('Kirby',);
        this.KING_DEDEDE =            new MysteryMushrooms('King Dedede',);
        this.META_KNIGHT =            new MysteryMushrooms('Meta Knight',);

        this.FOX_MCCLOUD =            new MysteryMushrooms('Fox McCloud',);
        this.FALCO_LOMBARDI =         new MysteryMushrooms('Falco Lombardi',);
        this.SLIPPY_TOAD =            new MysteryMushrooms('Slippy Toad',);
        this.PEPPY_HARE =             new MysteryMushrooms('Peppy Hare',);
        this.ARWING =                 new MysteryMushrooms('Arwing',);

        this.NESS =                   new MysteryMushrooms('Ness',);
        this.LUCAS =                  new MysteryMushrooms('Lucas',);
        this.MASTER_BELCH =           new MysteryMushrooms('Master Belch',);
        this.MR_SATURN =              new MysteryMushrooms('Mr. Saturn',);

        this.BULBASAUR =              new MysteryMushrooms('Bulbasaur',);
        this.CHARMANDER =             new MysteryMushrooms('Charmander',);
        this.CHARIZARD =              new MysteryMushrooms('Charizard',);
        this.SQUIRTLE =               new MysteryMushrooms('Squirtle',);
        this.PIKACHU =                new MysteryMushrooms('Pikachu',);
        this.JIGGLYPUFF =             new MysteryMushrooms('Jigglypuff',);
        this.MEWTWO =                 new MysteryMushrooms('Mewtwo',);
        this.LUCARIO =                new MysteryMushrooms('Lucario',);
        this.GRENINJA =               new MysteryMushrooms('Greninja',);

        this.VILLAGER =               new MysteryMushrooms('Villager',);
        this.TOM_NOOK =               new MysteryMushrooms('Tom Nook',);
        this.K_K_SLIDER =             new MysteryMushrooms('K.K. Slider',);
        this.RESETTI =                new MysteryMushrooms('Resetti',);
        this.ROVER =                  new MysteryMushrooms('Rover',);
        this.TIMMY_AND_TOMMY =        new MysteryMushrooms('Timmy & Tommy',);
        this.BLATHERS =               new MysteryMushrooms('Blathers',);
        this.MABEL =                  new MysteryMushrooms('Mabel',);
        this.KAPP_N =                 new MysteryMushrooms('Kapp\'n',);
        this.CELESTE =                new MysteryMushrooms('Celeste',);
        this.KICKS =                  new MysteryMushrooms('Kicks',);
        this.ISABELLE_SUMMER_OUTFIT = new MysteryMushrooms('Isabelle (Summer Outfit)',);
        this.ISABELLE_WINTER_OUTFIT = new MysteryMushrooms('Isabelle (Winter Outfit)',);
        this.DIGBY =                  new MysteryMushrooms('Digby',);
        this.CYRUS =                  new MysteryMushrooms('Cyrus',);
        this.REESE =                  new MysteryMushrooms('Reese',);
        this.LOTTIE =                 new MysteryMushrooms('Lottie',);

        this.CAPTAIN_OLIMAR =         new MysteryMushrooms('Captain Olimar',);
        this.PIKMIN =                 new MysteryMushrooms('Pikmin',);

        this.CHIBI_ROBO =             new MysteryMushrooms('Chibi-Robo',);

        this.WII_BALANCE_BOARD =      new MysteryMushrooms('Wii Balance Board',);
        this.WII_FIT_TRAINER =        new MysteryMushrooms('Wii Fit Trainer',);

        this.SHULK =                  new MysteryMushrooms('Shulk',);

        this.FELYNE =                 new MysteryMushrooms('Felyne',);

        this.YU_AYASAKI =             new MysteryMushrooms('Yu Ayasaki',);

        this.DR_KAWASHIMA =           new MysteryMushrooms('Dr. Kawashima',);

        this.DR_LOBE =                new MysteryMushrooms('Dr. Lobe',);

        this.BARBARA_THE_BAT =        new MysteryMushrooms('Barbara the Bat',);

        this.STARFY =                 new MysteryMushrooms('Starfy',);

        this.MALLO =                  new MysteryMushrooms('Mallo',);

        this.NIKKI =                  new MysteryMushrooms('Nikki',);
        this.IRIS_ARCHWELL =          new MysteryMushrooms('Iris Archwell',);
        this.ARCADE_BUNNY =           new MysteryMushrooms('Arcade bunny',);

        this.CHITOGE_KIRISAKI =       new MysteryMushrooms('Chitoge Kirisaki',);

        this.INKLING_SQUID =          new MysteryMushrooms('Inkling Squid',);
        this.INKLING_BOY =            new class MysteryMushrooms_InklingBoy extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithUnderwaterVariationContainer(imagePath);
            }

        }('Inkling Boy',);
        this.INKLING_GIRL =           new class MysteryMushrooms_InklingGirl extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithUnderwaterVariationContainer(imagePath);
            }

        }('Inkling Girl',);
        this.CALLIE =                 new class MysteryMushrooms_Callie extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithUnderwaterVariationContainer(imagePath);
            }

        }('Callie',);
        this.MARIE =                  new class MysteryMushrooms_Marie extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithUnderwaterVariationContainer(imagePath);
            }

        }('Marie',);

        this.ROB =                    new class MysteryMushrooms_ROB extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithJapaneseContainer(imagePath);
            }

        }('R.O.B', 'R.O.B.',);
        this.DISKUN =                 new MysteryMushrooms('Diskun',);
        this.MAHJONG_TILE =           new MysteryMushrooms('Mahjong Tile',);

        this.KITTY_WHITE =            new class MysteryMushrooms_KittyWhite extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithLeftVariationContainer(imagePath);
            }

        }('Kitty White',);
        this.MELODY =                 new class MysteryMushrooms_Melody extends MysteryMushrooms {

            protected _createImageContainer(imagePath: PossiblePath,): Image {
                return new ImageWithLeftVariationContainer(imagePath);
            }

        }('Melody',);
        this.SHAUN_THE_SHEEP =        new MysteryMushrooms('Shaun the Sheep',);

        this.ARINO_KACHO =            new MysteryMushrooms('Arino KACHO',);
        this.SUPER_MARIO_KUN =        new MysteryMushrooms('SUPER MARIO KUN',);
        this.NECKY =                  new MysteryMushrooms('Necky',);
        this.GLA =                    new MysteryMushrooms('GLA',);
        this.BABYMETAL =              new MysteryMushrooms('BABYMETAL',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: MysteryMushrooms;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>;

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
        return new BasicImageContainer(imagePath);
    }

    private get __imageContainer(): Image {
        return this.#imageContainer ??= this._createImageContainer(this.__path);
    }

    protected _createSoundContainer(path: PossiblePath, property: SoundProperty,): Sound {
        return new SoundContainer(path, property,);
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

    //region -------------------- Enum value methods --------------------

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

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
