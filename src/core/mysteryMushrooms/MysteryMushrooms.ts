import type {BasicJapanesePath, BasicLeftVariationPath, BasicPath, ClimbingImages, DownImage, EnglishNameOnFile, EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, FallingAfterJumpImage, GoalPoleImages, GoalPoleSound, ImagePath, JumpImage, JumpImages, JumpSounds, LostALifeSound, Names, OnGroundAfterJumpSound, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue, PowerUpCollectedSound, RunningImages, SingleClimbingImage, SingleDownImage, SingleFallingAfterJumpImage, SingleGoalPoleImage, SingleGoalPoleSound, SingleJumpImage, SingleJumpSound, SingleLostALifeSound, SingleOnGroundAfterJumpSound, SinglePowerUpCollectedSound, SingleRunningImage, SingleSwimmingImage, SingleTauntImage, SingleTauntSound, SingleTurningImage, SingleTurningSound, SingleWaitingImage, SingleWalkImage, SwimmingImages, TauntImage, TauntSound, TurningImage, TurningSound, UniqueEnglishName, WaitingImage, WalkImages} from './MysteryMushrooms.types';
import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from '../ClassWithEnglishName';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../StringContainer';

export class MysteryMushrooms
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<UniqueEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly MYSTERY_MUSHROOM =       new MysteryMushrooms('Mystery Mushroom',);

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
    public static readonly QUESTION_MARK_BLOCK =    new MysteryMushrooms('Question Mark Block', '? Block',);
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

    public static readonly SONIC =                  new MysteryMushrooms('Sonic',);

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
    public static readonly INKLING_BOY =            new MysteryMushrooms('Inkling Boy',);
    public static readonly INKLING_GIRL =           new MysteryMushrooms('Inkling Girl',);
    public static readonly CALLIE =                 new MysteryMushrooms('Callie',);
    public static readonly MARIE =                  new MysteryMushrooms('Marie',);

    public static readonly ROB =                    new MysteryMushrooms('R.O.B', 'R.O.B.',);
    public static readonly DISKUN =                 new MysteryMushrooms('Diskun',);
    public static readonly MAHJONG_TILE =           new MysteryMushrooms('Mahjong Tile',);

    public static readonly KITTY_WHITE =            new MysteryMushrooms('Kitty White',);
    public static readonly MELODY =                 new MysteryMushrooms('Melody',);
    public static readonly SHAUN_THE_SHEEP =        new MysteryMushrooms('Shaun the Sheep',);

    public static readonly ARINO_KACHO =            new MysteryMushrooms('Arino KACHO',);
    public static readonly SUPER_MARIO_KUN =        new MysteryMushrooms('SUPER MARIO KUN',);
    public static readonly NECKY =                  new MysteryMushrooms('Necky',);
    public static readonly GLA =                    new MysteryMushrooms('GLA',);
    public static readonly BABYMETAL =              new MysteryMushrooms('BABYMETAL',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //region -------------------- Files (images / sounds) attributes --------------------

    readonly #englishNameOnFile;

    #imagePath?: ImagePath;
    #basicPath?: BasicPath;
    #basicJapanesePath?: BasicJapanesePath;
    #basicLeftVariationPath?: BasicLeftVariationPath;

    //region -------------------- Power-up collected --------------------

    static readonly #POWER_UP_SOUND: SinglePowerUpCollectedSound = 'powerup.wav';
    #powerUpGotSound?: PowerUpCollectedSound;

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    static readonly #WAITING_IMAGE: SingleWaitingImage = 'wait.0.png';
    #waitingImage?: WaitingImage<BasicPath>;
    #japaneseWaitingImage?: WaitingImage<BasicJapanesePath>;
    #leftVariationWaitingImage?: WaitingImage<BasicLeftVariationPath>;

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    static readonly #TAUNT_IMAGE: SingleTauntImage = 'appeal.0.png';
    #tauntImage?: TauntImage<BasicPath>;
    #japaneseTauntImage?: TauntImage<BasicJapanesePath>;
    #leftVariationTauntImage?: TauntImage<BasicLeftVariationPath>;
    static readonly #TAUNT_SOUND: SingleTauntSound = 'appeal.wav';
    #tauntSound?: TauntSound;

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    static readonly #DOWN_IMAGE: SingleDownImage = 'stoop.0.png';
    #downImage?: DownImage<BasicPath>;
    #japaneseDownImage?: DownImage<BasicJapanesePath>;
    #leftVariationDownImage?: DownImage<BasicLeftVariationPath>;

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    static readonly #WALK_IMAGE_1: SingleWalkImage<0> = 'walk.0.png';
    static readonly #WALK_IMAGE_2: SingleWalkImage<1> = 'walk.1.png';
    static readonly #WALK_IMAGE_3: SingleWalkImage<2> = 'walk.2.png';
    #walkImages?: WalkImages<BasicPath>;
    #japaneseWalkImages?: WalkImages<BasicJapanesePath>;
    #leftVariationWalkImages?: WalkImages<BasicLeftVariationPath>;

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    static readonly #RUNNING_IMAGE_1: SingleRunningImage<0> = '/b_dash.0.png';
    static readonly #RUNNING_IMAGE_2: SingleRunningImage<1> = '/b_dash.1.png';
    static readonly #RUNNING_IMAGE_3: SingleRunningImage<2> = '/b_dash.2.png';
    #runningImages?: RunningImages<BasicPath>;
    #japaneseRunningImages?: RunningImages<BasicJapanesePath>;
    #leftVariationRunningImages?: RunningImages<BasicLeftVariationPath>;

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    static readonly #SWIMMING_IMAGE_1: SingleSwimmingImage<0> = 'swim.0.png';
    static readonly #SWIMMING_IMAGE_2: SingleSwimmingImage<1> = 'swim.1.png';
    static readonly #SWIMMING_IMAGE_3: SingleSwimmingImage<2> = 'swim.2.png';
    static readonly #SWIMMING_IMAGE_4: SingleSwimmingImage<3> = 'swim.3.png';
    static readonly #SWIMMING_IMAGE_5: SingleSwimmingImage<4> = 'swim.4.png';
    static readonly #SWIMMING_IMAGE_6: SingleSwimmingImage<5> = 'swim.5.png';
    #swimmingImages?: SwimmingImages<BasicPath>;
    #japaneseSwimmingImages?: SwimmingImages<BasicJapanesePath>;
    #leftVariationSwimmingImages?: SwimmingImages<BasicLeftVariationPath>;

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    static readonly #JUMP_IMAGE_1: SingleJumpImage<0> = 'jump.0.png';
    static readonly #JUMP_IMAGE_2: SingleJumpImage<1> = 'jump.1.png';
    static readonly #JUMP_IMAGE_3: SingleJumpImage<2> = 'jump.2.png';
    #jumpImage?: JumpImage<BasicPath>;
    #japaneseJumpImage?: JumpImage<BasicJapanesePath>;
    #leftVariationJumpImage?: JumpImage<BasicLeftVariationPath>;
    #jumpImages?: JumpImages<BasicPath>;
    #japaneseJumpImages?: JumpImages<BasicJapanesePath>;
    #leftVariationJumpImages?: JumpImages<BasicLeftVariationPath>;
    static readonly #JUMP_SOUND_1: SingleJumpSound<''> = 'jump.wav';
    static readonly #JUMP_SOUND_2: SingleJumpSound<2> = 'jump2.wav';
    #jumpSounds?: JumpSounds;

    static readonly #FALLING_AFTER_JUMP_IMAGE: SingleFallingAfterJumpImage = 'jump_fall.0.png';
    #fallingAfterJumpImage?: FallingAfterJumpImage<BasicPath>;
    #japaneseFallingAfterJumpImage?: FallingAfterJumpImage<BasicJapanesePath>;
    #leftVariationFallingAfterJumpImage?: FallingAfterJumpImage<BasicLeftVariationPath>;

    static readonly ON_GROUND_AFTER_JUMP_SOUND: SingleOnGroundAfterJumpSound = 'ground.wav';
    #onGroundAfterJumpSound?: OnGroundAfterJumpSound;

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    static readonly #TURNING_IMAGE: SingleTurningImage = 'turn.0.png';
    #turningImage?: TurningImage<BasicPath>;
    #japaneseTurningImage?: TurningImage<BasicJapanesePath>;
    #leftVariationTurningImage?: TurningImage<BasicLeftVariationPath>;
    static readonly #TURNING_SOUND: SingleTurningSound = 'slip.wav';
    #turningSound?: TurningSound;

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    static readonly #CLIMBING_IMAGE_1: SingleClimbingImage<0> = 'climb.0.png';
    static readonly #CLIMBING_IMAGE_2: SingleClimbingImage<1> = 'climb.1.png';
    #climbingImages?: ClimbingImages<BasicPath>;
    #japaneseClimbingImages?: ClimbingImages<BasicJapanesePath>;
    #leftVariationClimbingImages?: ClimbingImages<BasicLeftVariationPath>;

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    static readonly #GOAL_POLE_IMAGE_1: SingleGoalPoleImage<0> = 'pole.0.png';
    static readonly #GOAL_POLE_IMAGE_2: SingleGoalPoleImage<1> = 'pole.1.png';
    #goalPoleImages?: GoalPoleImages<BasicPath>;
    #japaneseGoalPoleImages?: GoalPoleImages<BasicJapanesePath>;
    #leftVariationGoalPoleImages?: GoalPoleImages<BasicLeftVariationPath>;
    static readonly #GOAL_POLE_SOUND: SingleGoalPoleSound = 'goal.wav';
    #goalPoleSound?: GoalPoleSound;

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    static readonly #LOST_A_LIFE_SOUND: SingleLostALifeSound = 'down.wav';
    #lostALifeSound?: LostALifeSound;

    //endregion -------------------- Lost a life --------------------


    //endregion -------------------- Files (images / sounds) attributes --------------------

    //endregion -------------------- Attributes --------------------

    public constructor(englishName_and_englishNameOnFile: UniqueEnglishName,)
    public constructor(englishNameOnFile: EnglishNameOnFile, englishName: UniqueEnglishName,)
    public constructor(englishNameOnFile: | EnglishNameOnFile | UniqueEnglishName, englishName?: UniqueEnglishName,) {
        super();
        if (englishName == null) {
            this.#englishName = new StringContainer(englishNameOnFile as UniqueEnglishName);
            this.#englishNameOnFile = englishNameOnFile as EnglishNameOnFile;
        } else {
            this.#englishName = new StringContainer(englishName);
            this.#englishNameOnFile = englishNameOnFile as EnglishNameOnFile;
        }
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): UniqueEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //region -------------------- Files (images / sounds) getter methods --------------------

    public get englishNameOnFile(): EnglishNameOnFile {
        return this.#englishNameOnFile;
    }


    private get __imagePath(): ImagePath {
        return this.#imagePath ??= `${this.ordinal} - ${this.englishNameOnFile}` as ImagePath;
    }

    private get __basicPath(): BasicPath {
        return this.#basicPath ??= `/mystery mushrooms/${this.__imagePath}`;
    }

    private get __japaneseBasicPath(): BasicJapanesePath {
        return this.#basicJapanesePath ??= `${this.__basicPath}/Japanese`;
    }

    private get __leftVariationBasicPath(): BasicLeftVariationPath {
        return this.#basicLeftVariationPath ??= `${this.__basicPath}/Left variation`;
    }

    //region -------------------- Power-up collected --------------------

    public get powerUpCollectedSound(): PowerUpCollectedSound {
        return this.#powerUpGotSound ??= `${this.__basicPath}/${MysteryMushrooms.#POWER_UP_SOUND}`;
    }

    //endregion -------------------- Power-up collected --------------------
    //region -------------------- Waiting --------------------

    public get waitingImage(): WaitingImage<BasicPath> {
        return this.#waitingImage ??= `${this.__basicPath}/${MysteryMushrooms.#WAITING_IMAGE}`;
    }

    public get japaneseWaitingImage(): WaitingImage<BasicJapanesePath> {
        return this.#japaneseWaitingImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#WAITING_IMAGE}`;
    }

    public get leftVariationWaitingImage(): WaitingImage<BasicLeftVariationPath> {
        return this.#leftVariationWaitingImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#WAITING_IMAGE}`;
    }

    //endregion -------------------- Waiting --------------------
    //region -------------------- Taunt --------------------

    public get tauntImage(): TauntImage<BasicPath> {
        return this.#tauntImage ??= `${this.__basicPath}/${MysteryMushrooms.#TAUNT_IMAGE}`;
    }

    public get japaneseTauntImage(): TauntImage<BasicJapanesePath> {
        return this.#japaneseTauntImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#TAUNT_IMAGE}`;
    }

    public get leftVariationTauntImage(): TauntImage<BasicLeftVariationPath> {
        return this.#leftVariationTauntImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#TAUNT_IMAGE}`;
    }

    public get tauntSound(): TauntSound {
        return this.#tauntSound ??= `${this.__basicPath}/${MysteryMushrooms.#TAUNT_SOUND}`;
    }

    //endregion -------------------- Taunt --------------------
    //region -------------------- Pressing ↓ --------------------

    public get downImage(): DownImage<BasicPath> {
        return this.#downImage ??= `${this.__basicPath}/${MysteryMushrooms.#DOWN_IMAGE}`;
    }

    public get japaneseDownImage(): DownImage<BasicJapanesePath> {
        return this.#japaneseDownImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#DOWN_IMAGE}`;
    }

    public get leftVariationDownImage(): DownImage<BasicLeftVariationPath> {
        return this.#leftVariationDownImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#DOWN_IMAGE}`;
    }

    //endregion -------------------- Pressing ↓ --------------------
    //region -------------------- Walk --------------------

    public get walkImages(): WalkImages<BasicPath> {
        return this.#walkImages ??= [`${this.__basicPath}/${MysteryMushrooms.#WALK_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#WALK_IMAGE_2}`, `${this.__basicPath}/${MysteryMushrooms.#WALK_IMAGE_3}`,];
    }

    public get japaneseWalkImages(): WalkImages<BasicJapanesePath> {
        return this.#japaneseWalkImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#WALK_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#WALK_IMAGE_2}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#WALK_IMAGE_3}`,];
    }

    public get leftVariationWalkImages(): WalkImages<BasicLeftVariationPath> {
        return this.#leftVariationWalkImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#WALK_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#WALK_IMAGE_2}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#WALK_IMAGE_3}`,];
    }

    //endregion -------------------- Walk --------------------
    //region -------------------- Running --------------------

    public get runningImage(): RunningImages<BasicPath> {
        return this.#runningImages ??= [`${this.__basicPath}/${MysteryMushrooms.#RUNNING_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#RUNNING_IMAGE_2}`, `${this.__basicPath}/${MysteryMushrooms.#RUNNING_IMAGE_3}`,];
    }

    public get japaneseRunningImages(): RunningImages<BasicJapanesePath> {
        return this.#japaneseRunningImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_2}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_3}`,];
    }

    public get leftVariationRunningImages(): RunningImages<BasicLeftVariationPath> {
        return this.#leftVariationRunningImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_2}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#RUNNING_IMAGE_3}`,];
    }

    //endregion -------------------- Running --------------------
    //region -------------------- Swimming --------------------

    public get swimmingImages(): SwimmingImages<BasicPath> {
        return this.#swimmingImages ??= [`${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_2}`, `${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_3}`, `${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_4}`, `${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_5}`, `${this.__basicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_6}`,];
    }

    public get japaneseSwimmingImages(): SwimmingImages<BasicJapanesePath> {
        return this.#japaneseSwimmingImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_2}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_3}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_4}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_5}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_6}`,];
    }

    public get leftVariationSwimmingImages(): SwimmingImages<BasicLeftVariationPath> {
        return this.#leftVariationSwimmingImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_2}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_3}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_4}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_5}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#SWIMMING_IMAGE_6}`,];
    }

    //endregion -------------------- Swimming --------------------
    //region -------------------- Jumping --------------------

    public get jumpImage(): JumpImage<BasicPath> {
        return this.#jumpImage ??= `${this.__basicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`;
    }

    public get japaneseJumpImage(): JumpImage<BasicJapanesePath> {
        return this.#japaneseJumpImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`;
    }

    public get leftVariationJumpImage(): JumpImage<BasicLeftVariationPath> {
        return this.#leftVariationJumpImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`;
    }

    public get jumpImages(): JumpImages<BasicPath> {
        return this.#jumpImages ??= [`${this.__basicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#JUMP_IMAGE_2}`, `${this.__basicPath}/${MysteryMushrooms.#JUMP_IMAGE_3}`,];
    }

    public get japaneseJumpImages(): JumpImages<BasicJapanesePath> {
        return this.#japaneseJumpImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_2}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_3}`,];
    }

    public get leftVariationJumpImages(): JumpImages<BasicLeftVariationPath> {
        return this.#leftVariationJumpImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_2}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#JUMP_IMAGE_3}`,];
    }

    public get jumpSounds(): JumpSounds {
        return this.#jumpSounds ??= [`${this.__basicPath}/${MysteryMushrooms.#JUMP_SOUND_1}`, `${this.__basicPath}/${MysteryMushrooms.#JUMP_SOUND_2}`,];
    }

    public get fallingAfterJumpImage(): FallingAfterJumpImage<BasicPath> {
        return this.#fallingAfterJumpImage ??= `${this.__basicPath}/${MysteryMushrooms.#FALLING_AFTER_JUMP_IMAGE}`;
    }

    public get japaneseFallingAfterJumpImage(): FallingAfterJumpImage<BasicJapanesePath> {
        return this.#japaneseFallingAfterJumpImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#FALLING_AFTER_JUMP_IMAGE}`;
    }

    public get leftVariationFallingAfterJumpImage(): FallingAfterJumpImage<BasicLeftVariationPath> {
        return this.#leftVariationFallingAfterJumpImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#FALLING_AFTER_JUMP_IMAGE}`;
    }

    public get onGroundAfterJumpSound(): OnGroundAfterJumpSound {
        return this.#onGroundAfterJumpSound ??= `${this.__basicPath}/${MysteryMushrooms.ON_GROUND_AFTER_JUMP_SOUND}`;
    }

    //endregion -------------------- Jumping --------------------
    //region -------------------- Turning --------------------

    public get turningImage(): TurningImage<BasicPath> {
        return this.#turningImage ??= `${this.__basicPath}/${MysteryMushrooms.#TURNING_IMAGE}`;
    }

    public get japaneseTurningImage(): TurningImage<BasicJapanesePath> {
        return this.#japaneseTurningImage ??= `${this.__japaneseBasicPath}/${MysteryMushrooms.#TURNING_IMAGE}`;
    }

    public get leftVariationTurningImage(): TurningImage<BasicLeftVariationPath> {
        return this.#leftVariationTurningImage ??= `${this.__leftVariationBasicPath}/${MysteryMushrooms.#TURNING_IMAGE}`;
    }

    public get turningSound(): TurningSound {
        return this.#turningSound ??= `${this.__basicPath}/${MysteryMushrooms.#TURNING_SOUND}`;
    }

    //endregion -------------------- Turning --------------------
    //region -------------------- Climbing --------------------

    public get climbingImages(): ClimbingImages<BasicPath> {
        return this.#climbingImages ??= [`${this.__basicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_2}`,];
    }

    public get japaneseClimbingImages(): ClimbingImages<BasicJapanesePath> {
        return this.#japaneseClimbingImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_2}`,];
    }

    public get leftVariationClimbingImages(): ClimbingImages<BasicLeftVariationPath> {
        return this.#leftVariationClimbingImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#CLIMBING_IMAGE_2}`,];
    }

    //endregion -------------------- Climbing --------------------
    //region -------------------- Goal pole --------------------

    public get goalPoleImages(): GoalPoleImages<BasicPath> {
        return this.#goalPoleImages ??= [`${this.__basicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_1}`, `${this.__basicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_2}`,];
    }

    public get japaneseGoalPoleImages(): GoalPoleImages<BasicJapanesePath> {
        return this.#japaneseGoalPoleImages ??= [`${this.__japaneseBasicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_1}`, `${this.__japaneseBasicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_2}`,];
    }

    public get leftVariationGoalPoleImages(): GoalPoleImages<BasicLeftVariationPath> {
        return this.#leftVariationGoalPoleImages ??= [`${this.__leftVariationBasicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_1}`, `${this.__leftVariationBasicPath}/${MysteryMushrooms.#GOAL_POLE_IMAGE_2}`,];
    }

    public get goalPoleSound(): GoalPoleSound {
        return this.#goalPoleSound ??= `${this.__basicPath}/${MysteryMushrooms.#GOAL_POLE_SOUND}`;
    }

    //endregion -------------------- Goal pole --------------------
    //region -------------------- Lost a life --------------------

    public get lostALifeSound(): LostALifeSound {
        return this.#lostALifeSound ??= `${this.__basicPath}/${MysteryMushrooms.#LOST_A_LIFE_SOUND}`;
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

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue(name: PossibleStringValue,): MysteryMushrooms
    public static getValue(name: string,): | MysteryMushrooms | null
    public static getValue<I extends MysteryMushrooms = MysteryMushrooms, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): MysteryMushrooms
    public static getValue(value: PossibleValue,): | MysteryMushrooms | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(enumeration => enumeration.englishName === value)
                    ?? this.values.find(enumeration => enumeration.englishNameOnFile === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
