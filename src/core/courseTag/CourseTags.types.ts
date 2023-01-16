enum Enum {

    NONE,
    STANDARD,
    PUZZLE_SOLVING,

    SPEEDRUN,

    AUTOSCROLL,
    AUTO_MARIO,

    ONE_SCREEN,
    SHORT_AND_SWEET,
    PRECISION,
    SHOOTER,

    SINGLE_PLAYER,
    MULTIPLAYER,
    LOCAL_MULTIPLAYER,
    ONLINE_MULTIPLAYER,
    MULTIPLAYER_VERSUS,
    MULTIPLAYER_COOP,

    THEMED,
    MUSIC,
    ART,
    PIXEL_ART,
    SHOWCASE,
    STORY,
    EXPLORATION,
    TECHNICAL,

    BOSS_BATTLE,
    LINK,

    GLITCH,
    TROLL,
    KAIZO,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name types --------------------

export type PossibleEnglishName = | PossibleOfficialEnglishName | PossibleUnofficialEnglishName
export type PossibleOfficialEnglishName =
    | 'None' | 'Standard' | 'Puzzle-solving' | 'Speedrun'
    | 'Autoscroll' | 'Auto-Mario'
    | 'Short and sweet' | 'Precision' | 'Shooter'
    | 'Single player' | 'Multiplayer Versus'
    | 'Themed' | 'Music' | 'Art'
    | 'Technical' | 'Boss battle'
    | 'Link'
export type PossibleUnofficialEnglishName =
    | 'One screen'
    | `${| 'Local' | 'Online'} Multiplayer` | `Multiplayer${| '' | ' Co-op'}`
    | 'Pixel art' | 'Showcase' | 'Story' | 'Exploration'
    | 'Glitch' | 'Troll' | 'Kaizo'
export type PossibleMakerCentralName = | 'Standard' | 'Puzzle' | 'Speedrun' | 'Autoscroll' | 'Auto'
                                       | 'Short' | 'Shooter' | 'One Player Only' | 'Multiplayer' | 'Themed'
                                       | 'Music' | 'Pixel Art' | 'Technical' | 'Boss' | 'Link'

//endregion -------------------- Name types --------------------