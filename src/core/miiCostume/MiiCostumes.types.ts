import type {BasePath} from 'variables'

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

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

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

    | 'World Wear'

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


export type PossibleImagePath = `/${BasePath}/Mii costume/${PossibleImageName}.tiff`

//endregion -------------------- Image name --------------------
