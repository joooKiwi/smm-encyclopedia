import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {MysteryMushrooms}                 from './MysteryMushrooms';

enum Types {
    MYSTERY_MUSHROOM,

    YAMAMURA, MARY_O, UNDODOG,

    MR_GAME_AND_WATCH,

    PAC_MAN,

    MARIO,
    LUIGI, PROFESSOR_E_GADD,
    PEACH, DAISY, ROSALINA,
    TOAD, CAPTAIN_TOAD, TOADETTE,
    YOSHI, BIRDO,
    WARIO, ASHLEY, WALUIGI,
    BOWSER, BOWSER_JR, GOOMBA, SHY_GUY, NABBIT,
    BUILDER_MARIO, MARIO_SILVER, MARIO_GOLD,
    DR_MARIO,
    FROG_MARIO, STATUE_MARIO, MARIO_TRIO,
    KART_MARIO,
    CAT_MARIO, CAT_PEACH,
    SKY_POP,
    BABY_MARIO,
    QUESTION_MARK_BLOCK, TRAMPOLINE,
    MARIO_MB, SIDESTEPPER, SHELLCREEPER, FIGHTER_FLY,

    GREEN_YARN_YOSHI, PINK_YARN_YOSHI, LIGHT_BLUE_YARN_YOSHI, MEGA_YARN_YOSHI,

    DONKEY_KONG, DONKEY_KONG_JR, DIDDY_KONG,

    LITTLE_MAC,

    DUCK_HUNT,

    BUBBLES,

    BIKE,

    BALLOON_FIGHTER,

    POPO_AND_NANA,

    FOREMAN_SPIKE,

    LINK, ZELDA, SHEIK,
    TOON_LINK, TETRA,
    TINGLE,
    GANONDORF,
    WOLF_LINK, TOTEM_LINK,

    SAMUS, ZERO_SUIT_SAMUS,

    VOLLEYBALL_PLAYER,

    PIT, PALUTENA, DARK_PIT,

    DONBE, HIKARI,

    MEGA_MAN,

    AYUMI_TACHIBANA,

    MARTH, IKE, LUCINA, ROBIN,

    CAPTAIN_FALCON,

    SONIC,

    KIRBY, KING_DEDEDE, META_KNIGHT,

    FOX_MCCLOUD, FALCO_LOMBARDI, SLIPPY_TOAD, PEPPY_HARE,
    ARWING,

    NESS, LUCAS,
    MASTER_BELCH, MR_SATURN,

    BULBASAUR,
    CHARMANDER, CHARIZARD,
    SQUIRTLE,
    PIKACHU,
    JIGGLYPUFF,
    MEWTWO,
    LUCARIO,
    GRENINJA,

    VILLAGER,
    TOM_NOOK,
    K_K_SLIDER,
    RESETTI,
    ROVER,
    TIMMY_AND_TOMMY,
    BLATHERS,
    MABEL,
    KAPP_N,
    CELESTE,
    KICKS,
    ISABELLE_SUMMER_OUTFIT, ISABELLE_WINTER_OUTFIT,
    DIGBY,
    CYRUS,
    REESE,
    LOTTIE,

    CAPTAIN_OLIMAR, PIKMIN,

    CHIBI_ROBO,

    WII_BALANCE_BOARD, WII_FIT_TRAINER,

    SHULK,

    FELYNE,

    YU_AYASAKI,

    DR_KAWASHIMA,

    DR_LOBE,

    BARBARA_THE_BAT,

    STARFY,

    MALLO,

    NIKKI,
    IRIS_ARCHWELL,
    ARCADE_BUNNY,

    CHITOGE_KIRISAKI,

    INKLING_SQUID, INKLING_BOY, INKLING_GIRL,
    CALLIE, MARIE,

    ROB,
    DISKUN,
    MAHJONG_TILE,

    KITTY_WHITE, MELODY,
    SHAUN_THE_SHEEP,

    ARINO_KACHO,
    SUPER_MARIO_KUN,
    NECKY,
    GLA,
    BABYMETAL,
}

//region -------------------- Number types --------------------

export type Ordinals = typeof Types[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Types;

export type EnglishNameOnFile = | Exclude<EnglishName, | 'Mary O.' | 'Bowser Jr.' | 'Donkey Kong Jr.' | '? Block' | 'R.O.B.'>
                                | 'Mary O' | 'Bowser Jr' | 'Donkey Kong Jr' | 'Question Mark Block' | 'Mario (MB)' | 'R.O.B';

export type UniqueEnglishName = | EnglishName | 'Mario (MB)';
export type EnglishName =
    | 'Mystery Mushroom'

    | 'Yamamura' | 'Mary O.' | 'Undodog'

    | 'Mr. Game & Watch'

    | 'PAC-MAN'

    | 'Mario'
    | 'Peach'
    | 'Daisy'
    | 'Rosalina'
    | 'Luigi'
    | 'Professor E. Gadd'
    | `Toad${| '' | 'ette'}` | 'Captain Toad'
    | 'Yoshi' | 'Birdo'
    | 'Wario' | 'Ashley' | 'Waluigi'
    | `Bowser${| '' | ' Jr.'}` | 'Goomba' | 'Shy Guy' | 'Nabbit'
    | `Mario ${| `(${| 'Silver' | 'Gold'})` | 'Trio'}`
    | `${| 'Builder' | 'Dr.' | 'Frog' | 'Statue' | 'Kart'} Mario`
    | `Cat ${| 'Mario' | 'Peach'}`
    | 'Sky Pop'
    | 'Baby Mario'
    | '? Block' | 'Trampoline'
    | 'Sidestepper' | 'Shellcreeper' | 'Fighter Fly'

    | `${| 'Green' | 'Pink' | 'Light-Blue' | 'Mega'} Yarn Yoshi`

    | `Donkey Kong${| '' | ' Jr.'}` | 'Diddy Kong'

    | 'Little Mac'

    | 'Duck Hunt'

    | 'Bubbles'

    | 'Bike'

    | 'Balloon Fighter'

    | 'Popo & Nana'

    | 'Foreman Spike'

    | 'Link' | 'Zelda' | 'Sheik'
    | 'Toon Link' | 'Tetra'
    | 'Tingle'
    | 'Ganondorf'
    | `${| 'Wolf' | 'Totem'} Link`

    | `${| '' | 'Zero Suit '}Samus`

    | 'Volleyball Player'

    | 'Pit' | 'Palutena' | 'Dark Pit'

    | 'Donbe' | 'Hikari'

    | 'Mega Man'

    | 'Ayumi Tachibana'

    | 'Marth' | 'Ike' | 'Lucina' | 'Robin'

    | 'Captain Falcon'

    | 'Sonic'

    | 'Kirby' | 'King Dedede' | 'Meta Knight'

    | 'Fox McCloud' | 'Falco Lombardi' | 'Slippy Toad' | 'Peppy Hare'
    | 'Arwing'

    | 'Ness' | 'Lucas'
    | 'Master Belch' | 'Mr. Saturn'

    | 'Pikachu'
    | 'Bulbasaur'
    | 'Charmander' | 'Charizard'
    | 'Squirtle'
    | 'Jigglypuff'
    | 'Mewtwo'
    | 'Lucario'
    | 'Greninja'

    | 'Villager'
    | 'Tom Nook'
    | 'K.K. Slider'
    | 'Resetti'
    | 'Rover'
    | 'Timmy & Tommy'
    | 'Blathers'
    | 'Mabel'
    | 'Kapp\'n'
    | 'Celeste'
    | 'Kicks'
    | 'Isabelle (Summer Outfit)' | 'Isabelle (Winter Outfit)'
    | 'Digby'
    | 'Cyrus'
    | 'Reese'
    | 'Lottie'

    | 'Captain Olimar' | 'Pikmin'

    | 'Chibi-Robo'

    | 'Wii Balance Board' | 'Wii Fit Trainer'

    | 'Shulk'

    | 'Felyne'

    | 'Yu Ayasaki'

    | 'Dr. Kawashima'

    | 'Dr. Lobe'

    | 'Barbara the Bat'

    | 'Starfy'

    | 'Mallo'

    | 'Nikki'
    | 'Iris Archwell'
    | 'Arcade bunny'

    | 'Chitoge Kirisaki'

    | `Inkling ${'Squid' | 'Boy' | 'Girl'}`
    | 'Callie' | 'Marie'

    | 'R.O.B.' | 'Diskun' | 'Mahjong Tile'

    | 'Kitty White' | 'Melody'
    | 'Shaun the Sheep'

    | 'Arino KACHO' | 'SUPER MARIO KUN' | 'Necky' | 'GLA' | 'BABYMETAL';

//region -------------------- Image / Sound string types --------------------

export type ImagePath =
    | '1 - Yamamura'
    | '2 - Mary O'
    | '3 - Undodog'

    | '4 - Mr. Game & Watch'

    | '5 - PAC-MAN'

    | '6 - Mario'
    | '7 - Peach'
    | '8 - Daisy'
    | '9 - Rosalina'
    | '10 - Luigi'
    | '11 - Professor E. Gadd'
    | '12 - Toad'
    | '13 - Toadette'
    | '14 - Captain Toad'
    | '15 - Yoshi'
    | '16 - Birdo'
    | '17 - Wario'
    | '18 - Ashley'
    | '19 - Waluigi'
    | '20 - Bowser'
    | '21 - Bowser Jr'
    | '22 - Goomba'
    | '23 - Shy Guy'
    | '24 - Nabbit'
    | '25 - Builder Mario'
    | '26 - Mario (Silver)'
    | '27 - Mario (Gold)'
    | '28 - Dr. Mario'
    | '29 - Frog Mario'
    | '30 - Statue Mario'
    | '31 - Mario Trio'
    | '32 - Kart Mario'
    | '33 - Cat Mario'
    | '34 - Cat Peach'
    | '35 - Sky Pop'
    | '36 - Baby Mario'
    | '37 - Question Mark Block'
    | '38 - Trampoline'
    | '39 - Mario (MB)'
    | '40 - Sidestepper'
    | '41 - Shellcreeper'
    | '42 - Fighter Fly'

    | '43 - Green Yarn Yoshi'
    | '44 - Pink Yarn Yoshi'
    | '45 - Light-Blue Yarn Yoshi'
    | '46 - Mega Yarn Yoshi'

    | '47 - Donkey Kong'
    | '48 - Donkey Kong Jr'
    | '49 - Diddy Kong'

    | '50 - Little Mac'

    | '51 - Duck Hunt'

    | '52 - Bubbles'

    | '53 - Bike'

    | '54 - Balloon Fighter'

    | '55 - Popo & Nana'

    | '56 - Foreman Spike'

    | '57 - Link'
    | '58 - Zelda'
    | '59 - Sheik'
    | '60 - Toon Link'
    | '61 - Tetra'
    | '62 - Tingle'
    | '63 - Ganondorf'
    | '64 - Wolf Link'
    | '65 - Totem Link'

    | '66 - Samus'
    | '67 - Zero Suit Samus'

    | '68 - Volleyball Player'

    | '69 - Pit'
    | '70 - Palutena'
    | '71 - Dark Pit'

    | '72 - Donbe'
    | '73 - Hikari'

    | '74 - Mega Man'

    | '75 - Ayumi Tachibana'

    | '76 - Marth'
    | '77 - Ike'
    | '78 - Lucina'
    | '79 - Robin'

    | '80 - Captain Falcon'

    | '81 - Sonic'

    | '82 - Kirby'
    | '83 - King Dedede'
    | '84 - Meta Knight'

    | '85 - Fox McCloud'
    | '86 - Falco Lombardi'
    | '87 - Slippy Toad'
    | '88 - Peppy Hare'
    | '89 - Arwing'

    | '90 - Ness'
    | '91 - Lucas'
    | '92 - Master Belch'
    | '93 - Mr. Saturn'

    | '94 - Bulbasaur'
    | '95 - Charmander'
    | '96 - Charizard'
    | '97 - Squirtle'
    | '98 - Pikachu'
    | '99 - Jigglypuff'
    | '100 - Mewtwo'
    | '101 - Lucario'
    | '102 - Greninja'

    | '103 - Villager'
    | '104 - Tom Nook'
    | '105 - K.K. Slider'
    | '106 - Resetti'
    | '107 - Rover'
    | '108 - Timmy & Tommy'
    | '109 - Blathers'
    | '110 - Mabel'
    | '111 - Kapp\'n'
    | '112 - Celeste'
    | '113 - Kicks'
    | '114 - Isabelle (Summer Outfit)'
    | '115 - Isabelle (Winter Outfit)'
    | '116 - Digby'
    | '117 - Cyrus'
    | '118 - Reese'
    | '119 - Lottie'

    | '120 - Captain Olimar'
    | '121 - Pikmin'

    | '122 - Chibi-Robo'

    | '123 - Wii Balance Board'
    | '124 - Wii Fit Trainer'

    | '125 - Shulk'

    | '126 - Felyne'

    | '127 - Yu Ayasaki'

    | '128 - Dr. Kawashima'

    | '129 - Dr. Lobe'

    | '130 - Barbara the Bat'

    | '131 - Starfy'

    | '132 - Mallo'

    | '133 - Nikki'
    | '134 - Iris Archwell'
    | '135 - Arcade bunny'

    | '136 - Chitoge Kirisaki'

    | '137 - Inkling Squid'
    | '138 - Inkling Boy'
    | '139 - Inkling Girl'
    | '140 - Callie'
    | '141 - Marie'

    | '142 - R.O.B'
    | '143 - Diskun'
    | '144 - Mahjong Tile'

    | '145 - Kitty White'
    | '146 - Melody'
    | '147 - Shaun the Sheep'

    | '148 - Arino KACHO'
    | '149 - SUPER MARIO KUN'
    | '150 - Necky'
    | '151 - GLA'
    | '152 - BABYMETAL';

export type BasicPath = `/mystery mushrooms/${ImagePath}`;
export type BasicJapanesePath = `${BasicPath}/Japanese`;
export type BasicLeftVariationPath = `${BasicPath}/Left variation`;
export type PossiblePath = | BasicPath | BasicJapanesePath | BasicLeftVariationPath;

export type SinglePowerUpCollectedSound = `powerup.wav`;
export type PowerUpCollectedSound = `${BasicPath}/${SinglePowerUpCollectedSound}`;

export type SingleWaitingImage = 'wait.0.png';
export type WaitingImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleWaitingImage}`;

export type SingleTauntImage = 'appeal.0.png';
export type TauntImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleTauntImage}`;
export type SingleTauntSound = 'appeal.wav';
export type TauntSound = `${BasicPath}/${SingleTauntSound}`;

export type SingleDownImage = 'stoop.0.png';
export type DownImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleDownImage}`;

export type WalkImageNumber = | 0 | 1 | 2;
export type SingleWalkImage<N extends WalkImageNumber = WalkImageNumber, > = `walk.${N}.png`;
export type WalkImage<PATH extends PossiblePath = PossiblePath, N extends WalkImageNumber = WalkImageNumber, > = `${PATH}/${SingleWalkImage<N>}`;
export type WalkImages<PATH extends PossiblePath = PossiblePath, > = readonly [WalkImage<PATH, 0>, WalkImage<PATH, 1>, WalkImage<PATH, 2>,];

export type RunningImageNumber = | 0 | 1 | 2;
export type SingleRunningImage<N extends RunningImageNumber = RunningImageNumber, > = `/b_dash.${N}.png`;
export type RunningImage<PATH extends PossiblePath = PossiblePath, N extends RunningImageNumber = RunningImageNumber, > = `${PATH}/${SingleRunningImage<N>}`;
export type RunningImages<PATH extends PossiblePath = PossiblePath, > = readonly [RunningImage<PATH, 0>, RunningImage<PATH, 1>, RunningImage<PATH, 2>,];

export type SwimmingImageNumber = | 0 | 1 | 2 | 3 | 4 | 5;
export type SingleSwimmingImage<N extends SwimmingImageNumber = SwimmingImageNumber, > = `swim.${N}.png`;
export type SwimmingImage<PATH extends PossiblePath = PossiblePath, N extends SwimmingImageNumber = SwimmingImageNumber, > = `${PATH}/${SingleSwimmingImage<N>}`;
export type SwimmingImages<PATH extends PossiblePath = PossiblePath, > = readonly [SwimmingImage<PATH, 0>, SwimmingImage<PATH, 1>, SwimmingImage<PATH, 2>, SwimmingImage<PATH, 3>, SwimmingImage<PATH, 4>, SwimmingImage<PATH, 5>,];

export type JumpImageNumber = | 0 | 1 | 2;
export type SingleJumpImage<N extends JumpImageNumber = JumpImageNumber> = `jump.${N}.png`;
export type JumpImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleJumpImage<0>}`;
export type JumpImages<PATH extends PossiblePath = PossiblePath, > = readonly [`${PATH}/${SingleJumpImage<0>}`, `${PATH}/${SingleJumpImage<1>}`, `${PATH}/${SingleJumpImage<2>}`,];
export type JumpSoundNumber = | '' | 2;
export type SingleJumpSound<N extends JumpSoundNumber = JumpSoundNumber, > = `jump${N}.wav`;
export type JumpSound<N extends JumpSoundNumber = JumpSoundNumber, > = `${BasicPath}/${SingleJumpSound}`;
export type JumpSounds = readonly [JumpSound<''>, JumpSound<2>,];

export type SingleFallingAfterJumpImage = 'jump_fall.0.png';
export type FallingAfterJumpImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleFallingAfterJumpImage}`;
export type SingleOnGroundAfterJumpSound = 'ground.wav';
export type OnGroundAfterJumpSound = `${BasicPath}/${SingleOnGroundAfterJumpSound}`;

export type SingleTurningImage = 'turn.0.png';
export type TurningImage<PATH extends PossiblePath = PossiblePath, > = `${PATH}/${SingleTurningImage}`;
export type SingleTurningSound = 'slip.wav';
export type TurningSound = `${BasicPath}/${SingleTurningSound}`;

export type ClimbingImageNumber = | 0 | 1;
export type SingleClimbingImage<N extends ClimbingImageNumber = ClimbingImageNumber, > = `climb.${N}.png`;
export type ClimbingImage<PATH extends PossiblePath = PossiblePath, N extends ClimbingImageNumber = ClimbingImageNumber, > = `${PATH}/${SingleClimbingImage<N>}`;
export type ClimbingImages<PATH extends PossiblePath = PossiblePath, > = readonly [ClimbingImage<PATH, 0>, ClimbingImage<PATH, 1>,];

export type GoalPoleImageNumber = | 0 | 1;
export type SingleGoalPoleImage<N extends GoalPoleImageNumber = GoalPoleImageNumber, > = `pole.${N}.png`;
export type GoalPoleImage<PATH extends PossiblePath = PossiblePath, N extends GoalPoleImageNumber = GoalPoleImageNumber, > = `${PATH}/${SingleGoalPoleImage<N>}`;
export type SingleGoalPoleSound = 'goal.wav';
export type GoalPoleSound = `${BasicPath}/${SingleGoalPoleSound}`;
export type GoalPoleImages<PATH extends PossiblePath = PossiblePath, > = readonly [GoalPoleImage<PATH, 0>, GoalPoleImage<PATH, 1>,];

export type SingleLostALifeSound = 'down.wav';
export type LostALifeSound = `${BasicPath}/${SingleLostALifeSound}`;

//endregion -------------------- Image / Sound string types --------------------


//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends MysteryMushrooms = MysteryMushrooms, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, > = EnumArray[O];
export type EnumByNumber<O extends number = number, > = | NonNullable<EnumArray[O]> | null;
export type EnumByName<N extends Names = Names, E extends MysteryMushrooms = MysteryMushrooms, > = SimpleEnum<E>[N];

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends MysteryMushrooms = MysteryMushrooms, > = readonly [
    SimpleEnum<E>['MYSTERY_MUSHROOM'],

    SimpleEnum<E>['YAMAMURA'], SimpleEnum<E>['MARY_O'], SimpleEnum<E>['UNDODOG'],

    SimpleEnum<E>['MR_GAME_AND_WATCH'],

    SimpleEnum<E>['PAC_MAN'],

    SimpleEnum<E>['MARIO'],
    SimpleEnum<E>['LUIGI'], SimpleEnum<E>['PROFESSOR_E_GADD'],
    SimpleEnum<E>['PEACH'], SimpleEnum<E>['DAISY'], SimpleEnum<E>['ROSALINA'],
    SimpleEnum<E>['TOAD'], SimpleEnum<E>['CAPTAIN_TOAD'], SimpleEnum<E>['TOADETTE'],
    SimpleEnum<E>['YOSHI'], SimpleEnum<E>['BIRDO'],
    SimpleEnum<E>['WARIO'], SimpleEnum<E>['ASHLEY'], SimpleEnum<E>['WALUIGI'],
    SimpleEnum<E>['BOWSER'], SimpleEnum<E>['BOWSER_JR'], SimpleEnum<E>['GOOMBA'], SimpleEnum<E>['SHY_GUY'], SimpleEnum<E>['NABBIT'],
    SimpleEnum<E>['BUILDER_MARIO'], SimpleEnum<E>['MARIO_SILVER'], SimpleEnum<E>['MARIO_GOLD'],
    SimpleEnum<E>['DR_MARIO'],
    SimpleEnum<E>['FROG_MARIO'], SimpleEnum<E>['STATUE_MARIO'], SimpleEnum<E>['MARIO_TRIO'],
    SimpleEnum<E>['KART_MARIO'],
    SimpleEnum<E>['CAT_MARIO'], SimpleEnum<E>['CAT_PEACH'],
    SimpleEnum<E>['SKY_POP'],
    SimpleEnum<E>['BABY_MARIO'],
    SimpleEnum<E>['QUESTION_MARK_BLOCK'], SimpleEnum<E>['TRAMPOLINE'],
    SimpleEnum<E>['MARIO_MB'], SimpleEnum<E>['SIDESTEPPER'], SimpleEnum<E>['SHELLCREEPER'], SimpleEnum<E>['FIGHTER_FLY'],

    SimpleEnum<E>['GREEN_YARN_YOSHI'], SimpleEnum<E>['PINK_YARN_YOSHI'], SimpleEnum<E>['LIGHT_BLUE_YARN_YOSHI'], SimpleEnum<E>['MEGA_YARN_YOSHI'],

    SimpleEnum<E>['DONKEY_KONG'], SimpleEnum<E>['DONKEY_KONG_JR'], SimpleEnum<E>['DIDDY_KONG'],

    SimpleEnum<E>['LITTLE_MAC'],

    SimpleEnum<E>['DUCK_HUNT'],

    SimpleEnum<E>['BUBBLES'],

    SimpleEnum<E>['BIKE'],

    SimpleEnum<E>['BALLOON_FIGHTER'],

    SimpleEnum<E>['POPO_AND_NANA'],

    SimpleEnum<E>['FOREMAN_SPIKE'],

    SimpleEnum<E>['LINK'], SimpleEnum<E>['ZELDA'], SimpleEnum<E>['SHEIK'],
    SimpleEnum<E>['TOON_LINK'], SimpleEnum<E>['TETRA'],
    SimpleEnum<E>['TINGLE'],
    SimpleEnum<E>['GANONDORF'],
    SimpleEnum<E>['WOLF_LINK'], SimpleEnum<E>['TOTEM_LINK'],

    SimpleEnum<E>['SAMUS'], SimpleEnum<E>['ZERO_SUIT_SAMUS'],

    SimpleEnum<E>['VOLLEYBALL_PLAYER'],

    SimpleEnum<E>['PIT'], SimpleEnum<E>['PALUTENA'], SimpleEnum<E>['DARK_PIT'],

    SimpleEnum<E>['DONBE'], SimpleEnum<E>['HIKARI'],

    SimpleEnum<E>['MEGA_MAN'],

    SimpleEnum<E>['AYUMI_TACHIBANA'],

    SimpleEnum<E>['MARTH'], SimpleEnum<E>['IKE'], SimpleEnum<E>['LUCINA'], SimpleEnum<E>['ROBIN'],

    SimpleEnum<E>['CAPTAIN_FALCON'],

    SimpleEnum<E>['SONIC'],

    SimpleEnum<E>['KIRBY'], SimpleEnum<E>['KING_DEDEDE'], SimpleEnum<E>['META_KNIGHT'],

    SimpleEnum<E>['FOX_MCCLOUD'], SimpleEnum<E>['FALCO_LOMBARDI'], SimpleEnum<E>['SLIPPY_TOAD'], SimpleEnum<E>['PEPPY_HARE'],
    SimpleEnum<E>['ARWING'],

    SimpleEnum<E>['NESS'], SimpleEnum<E>['LUCAS'],
    SimpleEnum<E>['MASTER_BELCH'], SimpleEnum<E>['MR_SATURN'],

    SimpleEnum<E>['PIKACHU'],
    SimpleEnum<E>['BULBASAUR'],
    SimpleEnum<E>['CHARMANDER'], SimpleEnum<E>['CHARIZARD'],
    SimpleEnum<E>['SQUIRTLE'],
    SimpleEnum<E>['JIGGLYPUFF'],
    SimpleEnum<E>['MEWTWO'],
    SimpleEnum<E>['LUCARIO'],
    SimpleEnum<E>['GRENINJA'],

    SimpleEnum<E>['VILLAGER'],
    SimpleEnum<E>['TOM_NOOK'],
    SimpleEnum<E>['K_K_SLIDER'],
    SimpleEnum<E>['RESETTI'],
    SimpleEnum<E>['ROVER'],
    SimpleEnum<E>['TIMMY_AND_TOMMY'],
    SimpleEnum<E>['BLATHERS'],
    SimpleEnum<E>['MABEL'],
    SimpleEnum<E>['KAPP_N'],
    SimpleEnum<E>['CELESTE'],
    SimpleEnum<E>['KICKS'],
    SimpleEnum<E>['ISABELLE_SUMMER_OUTFIT'], SimpleEnum<E>['ISABELLE_WINTER_OUTFIT'],
    SimpleEnum<E>['DIGBY'],
    SimpleEnum<E>['CYRUS'],
    SimpleEnum<E>['REESE'],
    SimpleEnum<E>['LOTTIE'],

    SimpleEnum<E>['CAPTAIN_OLIMAR'], SimpleEnum<E>['PIKMIN'],

    SimpleEnum<E>['CHIBI_ROBO'],

    SimpleEnum<E>['WII_BALANCE_BOARD'], SimpleEnum<E>['WII_FIT_TRAINER'],

    SimpleEnum<E>['SHULK'],

    SimpleEnum<E>['FELYNE'],

    SimpleEnum<E>['YU_AYASAKI'],

    SimpleEnum<E>['DR_KAWASHIMA'],

    SimpleEnum<E>['DR_LOBE'],

    SimpleEnum<E>['BARBARA_THE_BAT'],

    SimpleEnum<E>['STARFY'],

    SimpleEnum<E>['MALLO'],

    SimpleEnum<E>['NIKKI'],
    SimpleEnum<E>['IRIS_ARCHWELL'],
    SimpleEnum<E>['ARCADE_BUNNY'],

    SimpleEnum<E>['CHITOGE_KIRISAKI'],

    SimpleEnum<E>['INKLING_SQUID'], SimpleEnum<E>['INKLING_BOY'], SimpleEnum<E>['INKLING_GIRL'],
    SimpleEnum<E>['CALLIE'], SimpleEnum<E>['MARIE'],

    SimpleEnum<E>['ROB'],
    SimpleEnum<E>['DISKUN'],
    SimpleEnum<E>['MAHJONG_TILE'],

    SimpleEnum<E>['KITTY_WHITE'], SimpleEnum<E>['MELODY'],
    SimpleEnum<E>['SHAUN_THE_SHEEP'],

    SimpleEnum<E>['ARINO_KACHO'],
    SimpleEnum<E>['SUPER_MARIO_KUN'],
    SimpleEnum<E>['NECKY'],
    SimpleEnum<E>['GLA'],
    SimpleEnum<E>['BABYMETAL'],
];
export type EntityLimitTypeEnglishNameArray = readonly ['While Playing', 'Editor',];

//endregion -------------------- Array types --------------------
