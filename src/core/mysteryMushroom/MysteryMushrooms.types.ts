import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {MysteryMushrooms as RealEnum}                                                                                                                                                                                                                 from './MysteryMushrooms';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | EnglishNameOnFile | PossibleUniqueEnglishName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {
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

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type EnglishNameOnFile = | Exclude<PossibleEnglishName, | 'Mary O.' | 'Bowser Jr.' | 'Donkey Kong Jr.' | '? Block' | 'R.O.B.'>
                                | 'Mary O' | 'Bowser Jr' | 'Donkey Kong Jr' | 'Question Mark Block' | 'Mario (MB)' | 'R.O.B';

export type PossibleUniqueEnglishName = | PossibleEnglishName | 'Mario (MB)';
export type PossibleEnglishName =
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

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends RealEnum = RealEnum, > = readonly [
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

//endregion -------------------- Array types --------------------
