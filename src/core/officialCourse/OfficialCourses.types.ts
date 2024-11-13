enum Enum {
    NWC_2017,
    DR_KAWASHIMA_ATHLETIC_TRAINING,
    WALKIN_WITH_UNDODOG,
    SQUID_SISTER_VS_BLOOPERS,
    SHAUN_MOSSY_MOLE_MISCHIEF,
    HELLO_KITTY_AND_MY_MELODY,
    POPO_AND_NANA_CLIMBING_CHALLENGE,
    METAL_RESISTANCE,
    STARFY_PRINCE_OF_PUFFTOP,
    YU_AYASAKI_BIG_ADVENTURE,
    TOADETTE_TREASURE_TRACKER,
    TWILIGHT_PRINCESS_HD,
    MARY_O_LUNCH_BREAK,
    SECRETS_OF_STATUE_MARIO,
    BARBARA_IN_TOMATOLAND,
    NISEKOI_CHITOGE_AND_KOSAKIO, NISEKOI_TSGUMI_AND_MARIKA,
    I_CHOOSE_YOU,
    TOKAIGI_2016_CONTEST_COURSE_1, TOKAIGI_2016_CONTEST_COURSE_2, TOKAIGI_2016_CONTEST_COURSE_3, TOKAIGI_2016_CONTEST_COURSE_4,
    PARANORMAL_RESEARCH,
    ADVENTURE_IN_SARASALAND,
    COOOOOO_FEAT_YAMAMURA,
    SOUDWEST_AIR_ADVENTURE,
    NES_REMIX_EXCITE_BIKE, NES_REMIX_SUPER_MARIO_BROS_2,
    CAPTAIN_TOAD_TREASURE_TRACKER,
    WELCOME_TO_SATURN_VALLEY, BELCH_BASE,
    NINTENDO_BADGE_ARCADE,
    MA_RIO_HILLS,
    MERCEDES_BENZ_JUMP_N_DRIVE,
    MARIO_AND_LUIGI_PAPER_JAM,
    NES_REMIX,
    PAX_WEST_2015_OMEGATHON_FINAL_RD,
    YOSHI_IS_AWESOME,
    CAT_MARIO_COURSE, CAT_PEACH_COURSE,
    SUPER_MARIO_KUN_25TH_ANNIVERSARY,
    TRI_FORCE_HEROES,
    ARINO_MAKER, ARINO_MAKER_RETURNS, NEW_ARINO_MAKER,
    SUPER_BAKARHYTHM_LAND,
    SHIP_LOVE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | 'NWC-2017'
    | 'Dr Kawashima\'s Athletic Training'
    | 'Walkin\' with Undodog'
    | 'Squid Sisters vs. Bloopers'
    | 'Shaun\'s Mossy Mole Mischief'
    | 'Hello Kitty & My Melody'
    | 'Popo & Nana\'s Climbing Challenge'
    | 'METAL RESISTANCE'
    | 'Starfy: Prince of Pufftop'
    | '♪Yu Ayasaki\'s Big Adventure!♪'
    | 'Toadette: Treasure Tracker'
    | 'Twilight Princess HD'
    | 'Mary O.\'s Lunch Break'
    | 'Secrets of Statue Mario'
    | 'Barbara in Tomatoland'
    | `Nisekoi: ${| 'Chitoge & Kosaki' | 'Tsugumi & Marika'}`
    | 'I Choose You!'
    | `Tokaigi 2016 Contest Course ${| 1 | 2 | 3 | 4}`
    | 'Paranormal Research'
    | 'Adventure in Sarasaland'
    | 'Cooooo! (Feat. Yamamura)'
    | 'Soudwest Air Adventure'
    | `NES REMIX (${| 'Excitebike' | 'Super Mario Bros. 2'})`
    | 'Captain Toad: Treasure Tracker'
    | 'Welcome to Saturn Valley' | 'Belch Base'
    | 'Nintendo Badge Arcade'
    | 'Ma Rio Hills'
    | 'Mercedes-Benz Jump\'n\'Drive'
    | 'Mario & Luigi: Paper Jam'
    | 'NES REMIX'
    | 'PAX West 2015 Omegathon Final Rd'
    | 'Yoshi Is Awesome'
    | `Cat ${| 'Mario' | 'Peach'}'s Course`
    | 'SUPER MARIO KUN 25th Anniversary'
    | 'Tri Force Heroes'
    | `Arino Maker${| EmptyString | ' Returns'}` | 'New! Arino Maker'
    | 'Super Bakarhythm Land'
    | 'Ship Love'

//endregion -------------------- English name --------------------
