enum Enum {

    SUPER_MARIO_MAKER_1, SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, SUPER_MARIO_MAKER_2,

    SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD,
    NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,


    SUPER_MARIO_KART, SUPER_MARIO_64, SUPER_MARIO_SUNSHINE,
    SUPER_MARIO_GALAXY,

    MARIO_BROS, SUPER_MARIO_BROS_2, SUPER_MARIO_WORLD_2_YOSHI_ISLAND, SUPER_MARIO_LAND,
    WARIO_LAND_SUPER_MARIO_LAND_3, MARIO_TENNIS, DR_MARIO, DR_MARIO_64,
    LUIGI_MANSION, YOSHI_WOOLLY_WORLD, CAPTAIN_TOAD_TREASURE_TRACKER, WARIOWARE_TOUCHED,
    MARIO_AND_LUIGI_PAPER_JAM,

    DONKEY_KONG, DONKEY_KONG_JR, DONKEY_KONG_COUNTRY,

    KIRBY_DREAM_LAND, KIRBY_ADVENTURE,

    KID_ICARIUS, KID_ICARIUS_UPRISING,

    MEGA_MAN,

    METROID, METROID_ZERO_MISSION,

    NINTENDO_ENTERTAINMENT_SYSTEM_ROB,

    FIRE_EMBLEM_SHADOW_DRAGON, FIRE_EMBLEM_RADIANT_DAWN, FIRE_EMBLEM_AWAKENING,

    POKEMON_RED, POKEMON_GREEN, POKEMON_BLUE, POKEMON_YELLOW,
    POKEMON_DIAMOND, POKEMON_PEARL,
    POKEMON_X, POKEMON_Y,

    PIKMIN, PIKMIN_3,

    THE_LEGEND_OF_ZELDA, THE_LEGEND_OF_ZELDA_A_LINK_TO_THE_PAST, ZELDA_II_THE_ADVENTURE_OF_LINK,
    THE_LEGEND_OF_ZELDA_OCARINA_OF_TIME, THE_LEGEND_OF_ZELDA_MAJORA_MASK, THE_LEGEND_OF_ZELDA_THE_WIND_WAKER,
    THE_LEGEND_OF_ZELDA_TWILIGHT_PRINCESS, THE_LEGEND_OF_ZELDA_TRI_FORCE_HEROES,

    XENOBLADE_CHRONICLES,

    EARTHBOUND, MOTHER3,

    SPLATOON,

    WII_FIT,

    CHIBI_ROBO,

    ANIMAL_CROSSING, ANIMAL_CROSSING_WILD_WORLD, ANIMAL_CROSSING_CITY_FOLK,
    ANIMAL_CROSSING_NEW_LEAF, ANIMAL_CROSSING_HAPPY_HOME_DESIGNER,

    F_ZERO,

    GAME_AND_WATCH,

    SONIC_THE_HEDGEHOG,

    DUCK_HUNT,

    PAC_MAN,

    WRECKING_CREW,

    PUNCH_OUT,

    STAR_FOX, STAR_FOX_ZERO,

    YAKUMAN_HO_O,

    BIG_BRAIN_ACADEMY,

    SWAPNOTE, NINTENDO_BADGE_ARCADE, MONSTER_MANOR,

    GAMECENTER_CX, CORO_COR0_COMIC, FAMITSU,
    MERCENDES_BENZ, FAMICOM_DISK_SYSTEM, BABYMETAL,

    MONSTER_HUNTER,

    EXCITEBIKE,

    NISEKOI,

    JAM_WITH_THE_BAND,

    DAIGASSO_BAND_BROS_P,

    THE_LEGENDARY_STARFY,

    BALLOON_FIGHT,

    SHIN_ONIGASHIMA,

    FAMICOM_DETECTIVE_CLUB_PART_II,

    PUSHMO,

    CLU_CLU_LAND,

    VOLLEYBALL,

    ICE_CLIMBER,

    HELLO_KITTY, MY_MELODY,
    SHAUN_THE_SHEEP,

    BRAIN_AGE_TRAIN_YOUR_BRAIN_IN_MINUTES_A_DAY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name & acronym --------------------

export type PossibleEnglishName = | PossibleEnglishName_Game | PossibleEnglishName_GameStyle | PossibleEnglishName_SoundEffect | PossibleEnglishName_Exclusive
export type PossibleAcronym = | PossibleAcronym_Game | PossibleAcronym_GameStyle | PossibleAcronym_SoundEffect | PossibleAcronym_Exclusive


export type PossibleEnglishName_Game = `Super Mario Maker${| '' | ' for Nintendo 3DS' | ' 2'}`
export type PossibleAcronym_Game = `SMM${| '' | '3DS' | 2}`

export type PossibleEnglishName_GameStyle = `Super Mario ${`Bros.${'' | ' 3'}` | `${'' | '3D '}World`}` | 'New Super Mario Bros. U'
export type PossibleAcronym_GameStyle_SMM1 = | 'SMB' | 'SMB3' | 'SMW' | 'NSMBU'
export type PossibleAcronym_GameStyle = | PossibleAcronym_GameStyle_SMM1 | 'SM3DW'

export type PossibleEnglishName_SoundEffect = `Super Mario ${| 'Kart' | 64 | 'Sunshine' | 'Galaxy'}`
export type PossibleAcronym_SoundEffect = `SM${| 'K' | 64 | 'S' | 'G'}`

export type PossibleEnglishName_Exclusive =
    | 'Mario Bros.' | 'Super Mario Bros. 2' | 'Super Mario World 2: Yoshi\'s Island' | 'Super Mario Land' | 'Wario Land: Super Mario Land 3' | 'Mario Tennis'
    | `Dr. Mario${| '' | ' 64'}` | 'Luigi\'s Mansion' | 'Yoshi\'s Woolly World' | 'Captain Toad: Treasure Tracker'
    | 'WarioWare: Touched!' | 'Mario & Luigi: Paper Jam'

    | `Donkey Kong${| '' | ` ${| 'Jr.' | 'Country'}`}`

    | `Kirby's ${| 'Dream Land' | 'Adventure'}`

    | `Kid Icarius${| '' | ': Uprising'}`

    | 'Mega Man'

    | `Metroid${| '' | ': Zero Mission'}`

    | 'Nintendo Entertainment System R.O.B.'

    | `Fire Emblem${| `: ${| 'Shadow Dragon' | 'Radiant Dawn'}` | ' Awakening'}`

    | `Pokémon ${| `${| 'Red' | 'Blue' | 'Yellow'} Version` | 'Diamond' | 'Pearl' | 'X' | 'Y'}` | '(Pokémon Green Version)'

    | `Pikmin${| '' | ' 3'}`

    | `The Legend of Zelda${| '' | `: ${| 'A Link to the Past' | 'Ocarina of Time' | 'Majora\'s Mask' | 'The Wind Waker' | 'Twilight Princess' | 'Tri Force Heroes'}`}`
    | 'Zelda II: The Adventure of Link'

    | 'Xenoblade Chronicles'

    | 'EarthBound' | 'MOTHER3'

    | 'Splatoon'

    | 'Wii Fit'

    | 'Chibi-Robo!'

    | `Animal Crossing${| '' | `: ${| 'Wild World' | 'City Folk' | 'New Leaf' | 'Happy Home Designer'}`}`

    | 'F-Zero'

    | 'Game & Watch'

    | 'Sonic The Hedgehog'

    | 'Duck Hunt'

    | 'PAC-MAN'

    | 'Wrecking Crew'

    | 'Punch-out!!'

    | `Star Fox${| '' | ' Zero'}`

    | 'Yakuman Ho-o'

    | 'Big Brain Academy'

    | 'Swapnote' | 'Nintendo Badge Arcade' | 'Monster Manor'

    | 'GAMECENTER CX' | 'CORO CORO COMIC' | 'Famitsu' | 'Mercendes-Benz' | 'Famicom Disk System' | 'BABYMETAL'

    | 'Monster Hunter'

    | 'Excitebike'

    | 'Nisekoi'

    | 'Jam with the Band'

    | 'Daigasso! Band Bros. P'

    | 'The Legendary Starfy'

    | 'Balloon Fight'

    | 'Shin Onigashima'

    | 'Famicom Detective Club Part II'

    | 'Pushmo'

    | 'Clu Clu Land'

    | 'Volleyball'

    | 'Ice Climber'

    | 'Hello Kitty' | 'My Melody'
    | 'Shaun the Sheep'

    | 'Brain Age: Train Your Brain in Minutes a Day!'

export type PossibleAcronym_Exclusive =
    | 'MB' | 'SMB2' | 'SMW2:YI' | 'SML' | 'WL:SML3' | 'MT' | `DM${| '' | 64}` | 'LM' | 'YWW' | 'CT:TT' | 'WW:T' | 'M&L:PJ'
    | `DK${| '' | 'J' | 'C'}`
    | `K${| 'DL' | 'A'}`
    | `KI${| '' | ':U'}`
    | 'MeM'
    | `M${| '' | ':ZM'}`
    | 'NES ROB'
    | `FE${| `:${| 'SD' | 'RD'}` | 'A'}`
    | `P${| 'R' | 'G' | 'B' | 'Ye' | 'D' | 'P' | 'X' | 'Y'}`
    | `Pi${| '' | 3}`
    | `TLZ${| '' | `:${| 'ALP' | 'OT' | 'MM' | 'TWW' | 'TP' | 'TFH'}`}` | 'Z2:TAL'
    | 'XC'
    | 'EB' | 'M3'
    | 'Sp'
    | 'WF'
    | 'CR'
    | `AC${| '' | `:${| 'WW' | 'CF' | 'NL' | 'HHD'}`}`
    | 'F-Z'
    | 'G&W'
    | 'STH'
    | 'DH'
    | 'PM'
    | 'WC'
    | 'PO'
    | `SF${| '' | 'Z'}`
    | 'YH-O'
    | 'BBA'
    | 'Sn' | 'NBA' | 'MoM'
    | 'GCCX' | 'CCC' | 'F' | 'M-B' | 'FDS' | 'BM'
    | 'MH'
    | 'E'
    | 'N'
    | 'JB'
    | 'DBBP'
    | 'TLS'
    | 'BF'
    | 'SO'
    | 'FDCP2'
    | 'Pu'
    | 'CCL'
    | 'V'
    | 'IC'
    | 'HK' | 'MyM' | 'SS'
    | 'BA:TYBMD'

//endregion -------------------- Name & acronym --------------------
