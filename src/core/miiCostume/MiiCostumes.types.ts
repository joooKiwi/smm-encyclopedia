import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {MiiCostumes as RealEnum}                                                                                                                                                                                                                      from './MiiCostumes';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName | PossibleImageName;
export type PossibleValue = | RealEnum | string | number | null | undefined;

enum Enum {

    NONE,
    NINTENDO_SHIRT, NINTENDO_UNIFORM,
    BLACK_SHORT_SHORTS,
    DENIM_JEAN, DENIM_SKIRT,


    MARIO_CAP, MARIO_OUTFIT,
    MARIO_SWIM_TRUNKS,
    FROG_MARIO_RAINCOAT,
    ONE_UP_HOODIE,
    PROPELLER_MARIO_HELMET, PROPELLER_MARIO_CLOTHES,
    SUPER_ACORN_HAT,
    CAT_MARIO_HEADGEAR, CAT_MARIO_SUIT,
    SUPERBALL_MARIO_HAT, SUPERBALL_MARIO_SUIT,
    BUILDER_HARD_HAT, BUILDER_MARIO_OUTFIT,
    DOCTOR_HEADGEAR, DOCTOR_COAT,

    LUIGI_CAP, LUIGI_OUTFIT,

    PRINCESS_PEACH_WIG, PRINCESS_PEACH_DRESS,
    PRINCESS_PEACH_TENNIS_OUTFIT,

    ROSALINA_WIG, ROSALINA_DRESS,

    TOAD_CAP, TOAD_OUTFIT,

    YOSHI_HAT, YOSHI_SUIT,

    BOWSER_HEADPIECE, BOWSER_SUIT,
    BOWSER_JR_HEADPIECE, SLOBBERY_SHIRT, HOVER_CLOWN,
    KOOPALING_HAWAIIAN_SHIRT,
    MAGIKOOPA_HAT, MAGIKOOPA_ROBES,

    CHEEP_CHEEP_HAT,
    FACEPLANT,
    SHY_CAP,
    ROCKY_WRENCH_MANHOLE_LID,
    POKEY_HAT, SNOW_POKEY_HAT,
    FIREWORKS_SHIRT,
    BANZAI_BILL_SHIRT,
    STAREDOWN_SHIRT, PARENT_AND_CHILD_SKIRT,
    CHOMP_DOG_SHIRT,
    FISH_BONE_SHIRT,
    ANGRY_SUN_SHIRT,
    HOT_HOT_SHIRT,
    RUNNING_SHIRT,
    PHANTO_HOODIE,
    SKULL_SKIRT,
    BURNER_SKIRT,
    WIND_UP_SHOE,
    STINGBY_SKIRT,
    THWOMP_SUIT,
    GOOGOO_ONESIE,
    KOOPA_TROOPA_SUIT,


    MUSHROOM_HAIRCLIP,
    SUPER_MUSHROOM_SHIRT,
    SUPER_STAR_BARRETTE, SUPER_STAR_FLARES,
    PIPE_HAT, PIPE_SKIRT,
    PLATFORM_SKIRT,
    DOORDUROYS,
    ANTSY_CORDUROYS,
    CLOUDWALKER,
    BOUNCY_SKIRT,
    SHORT_OF_DOOM,
    DASH_BLOCK_HOODIE,
    BIG_SPENDER_SHORTS,
    QUESTION_MARK_BLOCK_HOODIE,
    BLOCKSTRIPE_SHIRT,

    FRIED_CHICKEN_HEADGEAR, FRIED_CHICKEN_HOODIE,
    EDAMAME_BARRETTE,
    EDAMAME_CAMISOLE,
    I_LIKE_YOU_CAMISOLE,
    WHITE_TANKTOP,
    LAUGHING_SHIRT,
    MIDNIGHT_DRESS,

    ROYAL_CROWN, ROYAL_ATTIRE,
    FANCY_TOP_HAT, FANCY_TUXEDO,
    MATRIMONY_DRESS,
    SUPERB_SUIT,

    ROBOT_CAP, ROBOT_SUIT,
    FROG_CAP,
    REFRESHING_SHIRT,
    PARTRICK_SHIRT,
    YAMAMURA_SHIRT,
    RESET_DRESS,

    NINJI_CAP, NINJI_SHIRT, NINJI_SLACKS, NINJI_GARB,
    CHEETAH_HEADGEAR, CHEETAH_TANKTOP, CHEETAH_RUNNERS, CHEETAH_SUIT,

    FIRE_MARIO_SHIRT,
    RACOON_MARIO_SHIRT,
    CAPE_MARIO_SHIRT,
    FLYING_SQUIRREL_MARIO_SHIRT,
    CAT_MARIO_SHIRT,

    WORLD_WEAR,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | 'None' | `Nintendo ${| 'Shirt' | 'Uniform'}` | 'Black Short-Shorts' | `Denim ${'Jeans' | 'Skirt'}`

    | `Mario ${| 'Cap' | 'Outfit' | 'Swim Trunks'}` | 'Fire Mario Shirt'
    | 'Racoon Mario Shirt' | 'Frog Mario Raincoat'
    | 'Cape Mario Shirt' | '1-Up Hoodie'
    | `Propeller Mario ${| 'Helmet' | 'Clothes'}` | 'Super Acorn Hat' | 'Flying Squirrel Mario Shirt'
    | `Cat Mario ${| 'Headgear' | 'Shirt' | 'Suit'}`
    | `Superball Mario ${| 'Hat' | 'Suit'}`
    | `Builder ${| 'Hard Hat' | 'Mario Outfit'}`
    | `Doctor ${| 'Headgear' | 'Coat'}`
    | `Luigi ${| 'Cap' | 'Outfit'}`
    | `Princess Peach ${| 'Wig' | 'Dress' | 'Tennis Outfit'}`
    | `Rosalina ${| 'Wig' | 'Dress'}`
    | `Toad ${| 'Cap' | 'Outfit'}`
    | `Yoshi ${| 'Hat' | 'Suit'}`

    | `Bowser ${| 'Headpiece' | 'Suit'}`
    | 'Bowser Jr. Headpiece' | 'Slobbery Shirt' | 'Hoverclown'
    | 'Koopaling Hawaiian Shirt'
    | `Magikoopa ${| 'Hat' | 'Robes'}`

    | 'Cheep Cheep Hat' | 'Faceplant' | 'Shy Cap' | 'Rocky Wrench Manhole Lid'
    | `${| '' | 'Snow '}Pokey Hat`
    | 'Fireworks Shirt' | 'Banzai Bill Shirt' | 'Staredown Shirt' | 'Parent-and-Child Skirt' | 'Chomp-Dog Shirt' | 'Fish Bone Shirt'
    | 'Angry Sun Shirt' | 'Hot Hot Shirt' | 'Running Shirt' | 'Phanto Hoodie' | 'Skull Skirt'
    | 'Burner Skirt' | 'Wind-Up Shoe' | 'Stingby Skirt' | 'Thwomp Suit' | 'Googoo Onesie'
    | 'Koopa Troopa Suit'

    | 'Mushroom Hairclip' | 'Super Mushroom Shirt'
    | `Super Star ${| 'Barrette' | 'Flares'}`
    | `Pipe ${| 'Hat' | 'Skirt'}` | 'Platform Skirt'
    | 'Doorduroys' | 'Antsy Corduroys' | 'Cloudwalker' | 'Bouncy Skirt' | 'Shorts of Doom!'
    | 'Dash Block Hoodie' | 'Big-Spender Shorts' | '? Block Hoodie' | 'Blockstripe Shirt'

    | `Fried-Chicken ${| 'Headgear' | 'Hoodie'}`
    | `Edamame ${| 'Barrette' | 'Camisole'}`
    | 'I-Like-You Camisole' | 'White Tanktop' | 'Laughing Shirt' | 'Midnight Dress'

    | `Royal ${'Crown' | 'Attire'}`
    | `Fancy ${'Top Hat' | 'Tuxedo'}` | 'Matrimony Dress'
    | 'Superb Suit'

    | `Robot ${| 'Cap' | 'Suit'}`
    | 'Frog Cap'
    | 'Refreshing Shirt'
    | 'Partrick Shirt'
    | 'Yamamura Shirt'
    | 'Reset Dress'

    | `Ninji ${| 'Cap' | 'Shirt' | 'Slacks' | 'Garb'}`
    | `Cheetah ${| 'Headgear' | 'Tanktop' | 'Runners' | 'Suit'}`

    | 'World Wear';

//endregion -------------------- English name --------------------
//region -------------------- Image name --------------------

export type PossibleImageName =
    | `All_${`${| 'BuilderMario' | 'ClimbMario' | 'Dossun' | 'DrMario' | 'Kameck'
                | 'King' | 'Kinopio' | 'Koopa' | 'Nokonoko' | 'OnePiece'
                | `Peach${| '' | 'Tennis'}` | 'PropellerMario' | 'Robot' | 'Rocket'
                | 'Rompers' | 'Rosetta' | 'Splus' | 'SuperBall' | 'Tuxedo'
                | 'WhiteDress' | 'Yoshi'}_Normal`
             | `Mario_${| 'Luigi' | 'Mario'}`
             | 'Cheetah' | 'Frog' | 'Hakkun' | 'MapWorld'}`
    | `Bottoms_${| `${| 'Hacchin' | 'Jugemu' | 'KoopaClown' | 'Kutsu'
                      | `Skirt${| 'Burner' | 'Dokan' | 'Gesso' | 'KillerHoudai'}`}_Normal`
                 | `Pants_${| 'Default' | 'Arrow' | 'Door' | 'Jeans'}`
                 | `Shorts_${| 'Coin' | 'Dot' | 'Lift'}`
                 | `Skirt${| 'L_Wrap' | 'M_Marumaru' | 'S_Jeans'}`
                 | 'WidePants_Star'
                 | 'Cheetah' | 'Hakkun'}`
    | `Headwear_${| 'Dummy_Default'
                  | `${| 'BuilderMario' | 'Cheetah' | 'ClimbMario' | 'Dokan' | 'Donguri'
                       | 'DrMario' | 'Edamame' | 'Hakkun' | 'Kameck' | 'Karaage'
                       | 'King' | 'Kinopio' | `Koopa${| '' | 'Jr'}` | 'Luigi'
                       | 'Otogaeru' | 'Packun' | 'Peach' | 'Poo' | 'PropellerMario'
                       | 'Pukupuku' | 'Robot' | 'Rosetta' | `Sambo${| '' | 'Snow'}`
                       | 'Star' | 'SuperBall' | 'Teresa' | 'Tuxedo' | 'Yoshi'}_Normal`
                  | 'KinokoMini_Red'
                  | 'Mario_Mario'}`
    | `Tops_${`${| 'BlockDash' | 'CheetahTanktop' | 'Firebar' | 'Fishbone' | 'Hatena'
                 | 'Karaage' | 'KoopaJrScarf' | 'NokoTanktop' | 'OneUp' | 'Partskun'
                 | 'Pyonchu'}_Normal`
              | 'Aloha_Sun'
              | 'AnimShirt_Wanwan'
              | 'Boss'
              | `Camisole_${| 'Edamame' | 'Nice'}`
              | 'Hakkun'
              | 'Nosleeve_Yamamura'
              | 'Phanto'
              | `Shirt_${| 'Default' | 'Border' | 'Gesso' | 'Hanabi' | 'Keshigom'
                         | 'Killer' | 'Kinoko' | 'Nintendo' | 'Warai'}`
              | `Skin${| '3W' | 'M1' | 'M3' | 'MW' | 'MU'}`}`
    ;

export type PossibleImagePath = `/Mii costume/${PossibleImageName}.tiff`;

//endregion -------------------- Image name --------------------

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

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['NONE'],
    SimpleEnum<T>['NINTENDO_SHIRT'], SimpleEnum<T>['NINTENDO_UNIFORM'],
    SimpleEnum<T>['BLACK_SHORT_SHORTS'],
    SimpleEnum<T>['DENIM_JEAN'], SimpleEnum<T>['DENIM_SKIRT'],


    SimpleEnum<T>['MARIO_CAP'], SimpleEnum<T>['MARIO_OUTFIT'],
    SimpleEnum<T>['MARIO_SWIM_TRUNKS'],
    SimpleEnum<T>['FROG_MARIO_RAINCOAT'],
    SimpleEnum<T>['ONE_UP_HOODIE'],
    SimpleEnum<T>['PROPELLER_MARIO_HELMET'], SimpleEnum<T>['PROPELLER_MARIO_CLOTHES'],
    SimpleEnum<T>['SUPER_ACORN_HAT'],
    SimpleEnum<T>['CAT_MARIO_HEADGEAR'], SimpleEnum<T>['CAT_MARIO_SUIT'],
    SimpleEnum<T>['SUPERBALL_MARIO_HAT'], SimpleEnum<T>['SUPERBALL_MARIO_SUIT'],
    SimpleEnum<T>['BUILDER_HARD_HAT'], SimpleEnum<T>['BUILDER_MARIO_OUTFIT'],
    SimpleEnum<T>['DOCTOR_HEADGEAR'], SimpleEnum<T>['DOCTOR_COAT'],

    SimpleEnum<T>['LUIGI_CAP'], SimpleEnum<T>['LUIGI_OUTFIT'],

    SimpleEnum<T>['PRINCESS_PEACH_WIG'], SimpleEnum<T>['PRINCESS_PEACH_DRESS'],
    SimpleEnum<T>['PRINCESS_PEACH_TENNIS_OUTFIT'],

    SimpleEnum<T>['ROSALINA_WIG'], SimpleEnum<T>['ROSALINA_DRESS'],

    SimpleEnum<T>['TOAD_CAP'], SimpleEnum<T>['TOAD_OUTFIT'],

    SimpleEnum<T>['YOSHI_HAT'], SimpleEnum<T>['YOSHI_SUIT'],

    SimpleEnum<T>['BOWSER_HEADPIECE'], SimpleEnum<T>['BOWSER_SUIT'],
    SimpleEnum<T>['BOWSER_JR_HEADPIECE'], SimpleEnum<T>['SLOBBERY_SHIRT'], SimpleEnum<T>['HOVER_CLOWN'],
    SimpleEnum<T>['KOOPALING_HAWAIIAN_SHIRT'],
    SimpleEnum<T>['MAGIKOOPA_HAT'], SimpleEnum<T>['MAGIKOOPA_ROBES'],

    SimpleEnum<T>['CHEEP_CHEEP_HAT'],
    SimpleEnum<T>['FACEPLANT'],
    SimpleEnum<T>['SHY_CAP'],
    SimpleEnum<T>['ROCKY_WRENCH_MANHOLE_LID'],
    SimpleEnum<T>['POKEY_HAT'], SimpleEnum<T>['SNOW_POKEY_HAT'],
    SimpleEnum<T>['FIREWORKS_SHIRT'],
    SimpleEnum<T>['BANZAI_BILL_SHIRT'],
    SimpleEnum<T>['STAREDOWN_SHIRT'], SimpleEnum<T>['PARENT_AND_CHILD_SKIRT'],
    SimpleEnum<T>['CHOMP_DOG_SHIRT'],
    SimpleEnum<T>['FISH_BONE_SHIRT'],
    SimpleEnum<T>['ANGRY_SUN_SHIRT'],
    SimpleEnum<T>['HOT_HOT_SHIRT'],
    SimpleEnum<T>['RUNNING_SHIRT'],
    SimpleEnum<T>['PHANTO_HOODIE'],
    SimpleEnum<T>['SKULL_SKIRT'],
    SimpleEnum<T>['BURNER_SKIRT'],
    SimpleEnum<T>['WIND_UP_SHOE'],
    SimpleEnum<T>['STINGBY_SKIRT'],
    SimpleEnum<T>['THWOMP_SUIT'],
    SimpleEnum<T>['GOOGOO_ONESIE'],
    SimpleEnum<T>['KOOPA_TROOPA_SUIT'],


    SimpleEnum<T>['MUSHROOM_HAIRCLIP'],
    SimpleEnum<T>['SUPER_MUSHROOM_SHIRT'],
    SimpleEnum<T>['SUPER_STAR_BARRETTE'], SimpleEnum<T>['SUPER_STAR_FLARES'],
    SimpleEnum<T>['PIPE_HAT'], SimpleEnum<T>['PIPE_SKIRT'],
    SimpleEnum<T>['PLATFORM_SKIRT'],
    SimpleEnum<T>['DOORDUROYS'],
    SimpleEnum<T>['ANTSY_CORDUROYS'],
    SimpleEnum<T>['CLOUDWALKER'],
    SimpleEnum<T>['BOUNCY_SKIRT'],
    SimpleEnum<T>['SHORT_OF_DOOM'],
    SimpleEnum<T>['DASH_BLOCK_HOODIE'],
    SimpleEnum<T>['BIG_SPENDER_SHORTS'],
    SimpleEnum<T>['QUESTION_MARK_BLOCK_HOODIE'],
    SimpleEnum<T>['BLOCKSTRIPE_SHIRT'],

    SimpleEnum<T>['FRIED_CHICKEN_HEADGEAR'], SimpleEnum<T>['FRIED_CHICKEN_HOODIE'],
    SimpleEnum<T>['EDAMAME_BARRETTE'],
    SimpleEnum<T>['EDAMAME_CAMISOLE'],
    SimpleEnum<T>['I_LIKE_YOU_CAMISOLE'],
    SimpleEnum<T>['WHITE_TANKTOP'],
    SimpleEnum<T>['LAUGHING_SHIRT'],
    SimpleEnum<T>['MIDNIGHT_DRESS'],

    SimpleEnum<T>['ROYAL_CROWN'], SimpleEnum<T>['ROYAL_ATTIRE'],
    SimpleEnum<T>['FANCY_TOP_HAT'], SimpleEnum<T>['FANCY_TUXEDO'],
    SimpleEnum<T>['MATRIMONY_DRESS'],
    SimpleEnum<T>['SUPERB_SUIT'],

    SimpleEnum<T>['ROBOT_CAP'], SimpleEnum<T>['ROBOT_SUIT'],
    SimpleEnum<T>['FROG_CAP'],
    SimpleEnum<T>['REFRESHING_SHIRT'],
    SimpleEnum<T>['PARTRICK_SHIRT'],
    SimpleEnum<T>['YAMAMURA_SHIRT'],
    SimpleEnum<T>['RESET_DRESS'],

    SimpleEnum<T>['NINJI_CAP'], SimpleEnum<T>['NINJI_SHIRT'], SimpleEnum<T>['NINJI_SLACKS'], SimpleEnum<T>['NINJI_GARB'],
    SimpleEnum<T>['CHEETAH_HEADGEAR'], SimpleEnum<T>['CHEETAH_TANKTOP'], SimpleEnum<T>['CHEETAH_RUNNERS'], SimpleEnum<T>['CHEETAH_SUIT'],

    SimpleEnum<T>['FIRE_MARIO_SHIRT'],
    SimpleEnum<T>['RACOON_MARIO_SHIRT'],
    SimpleEnum<T>['CAPE_MARIO_SHIRT'],
    SimpleEnum<T>['FLYING_SQUIRREL_MARIO_SHIRT'],
    SimpleEnum<T>['CAT_MARIO_SHIRT'],

    SimpleEnum<T>['WORLD_WEAR'],
];

//endregion -------------------- Array types --------------------


