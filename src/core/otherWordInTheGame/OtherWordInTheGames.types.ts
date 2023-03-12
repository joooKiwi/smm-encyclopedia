enum Enum {
    FLYDAY, HAPPY_SUNDAY, LET_GET_MAKING,

    GAME_STYLE, EXTRA_GAME_STYLE,
    CURRENT_CONDITION, CLEAR_CONDITION,

    COURSE_MAKER, COURSE_THEME,
    WORLD_MAKER, WORLD_THEME,

    AUTOSCROLL, MARIO_TRAIL,
    COPY, ERASE, MULTIGRAB,
    SOLO_MAKING, COOP_MAKING,
    VIEW_MODE,
    STAMP, STAMP_CARD, TAG,

    LIQUID,
    WATER_LEVEL, POISON_LEVEL, LAVA_LEVEL,

    _10_MARIO_CHALLENGE, _100_MARIO_CHALLENGE,
    SUPER_MARIO_CHALLENGE, ENDLESS_CHALLENGE,
    EASY, NORMAL, EXPERT, SUPER_EXPERT,

    YAMAMURA_DOJO, STORY_MODE, COURSE_WORLD,
    NETWORK_PLAY, MULTIPLAYER_VERSUS, MULTIPLAYER_COOP,
    LEADERBOARD, EVENT_COURSES, NINJI_SPEEDRUNS,
    SUPER_WORLD,

    KOOPA_TROOPA, BEACH_KOOPA, KOOPA_SHELL,

    MYSTERY_MUSHROOM,
    MII_COSTUME, MII,
    KOOPALING,
    ENTITY, PLAYER,
    COURSE, WORLD_RECORD,
    POWER_UP,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName = | PossibleEnglishName_Singular | PossibleEnglishName_Plural

export type PossibleEnglishName_Singular =
    | 'Flyday'
    | 'Happy Sunday'
    | 'Let\'s get\nmaking!'
    | 'Game Style'
    | 'Extra Game Styles'
    | 'Current Condition'
    | 'Clear condition'
    | 'Course Maker'
    | 'Course Theme'
    | 'World Maker'
    | 'World Theme'
    | 'Autoscroll'
    | 'Mario\'s Trail'
    | 'Copy'
    | 'Erase'
    | 'Multigrab'
    | 'Solo Making'
    | 'Co-op Making'
    | 'View Mode'
    | 'Stamp'
    | 'Stamp Card'
    | 'Tag'
    | 'Liquid'
    | 'Water Level'
    | 'Poison Level'
    | 'Lava Level'
    | '10 Mario Challenge'
    | '100 Mario Challenge'
    | 'Super Mario Challenge'
    | 'Endless Challenge'
    | 'Easy'
    | 'Normal'
    | 'Expert'
    | 'Super expert'
    | 'Yamamura\'s Dojo'
    | 'Story Mode'
    | 'Course World'
    | 'Network Play'
    | 'Multiplayer Versus'
    | 'Multiplayer Co-op'
    | 'Leaderboard'
    | 'Event Courses'
    | 'Ninji Speedruns'
    | 'Super World'
    | 'Koopa Troopa'
    | 'Beach Koopa'
    | 'Koopa Shell'
    | 'Mystery Mushroom'
    | 'Mii costume'
    | 'Mii'
    | 'Koopaling'
    | 'Entity'
    | 'Player'
    | 'Course'
    | 'World Record'
    | 'Power-up'

export type PossibleEnglishName_Plural =
    | 'Stamps'
    | 'Tags'
    | 'Liquids'
    | 'Super Worlds'
    | 'Mystery Mushrooms'
    | 'Mii costumes'
    | 'Miis'
    | 'Koopalings'
    | 'Entities'
    | 'Players'
    | 'Courses'
    | 'World Records'
    | 'Power-ups'

//endregion -------------------- English name --------------------
