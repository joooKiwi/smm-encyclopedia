import {CourseTags} from './CourseTags'

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
//region -------------------- Array types --------------------

export type OfficialCourseTags = readonly [
    typeof CourseTags['NONE'], typeof CourseTags['STANDARD'], typeof CourseTags['PUZZLE_SOLVING'], typeof CourseTags['SPEEDRUN'],
    typeof CourseTags['AUTOSCROLL'], typeof CourseTags['AUTO_MARIO'],
    typeof CourseTags['SHORT_AND_SWEET'], typeof CourseTags['SHOOTER'],
    typeof CourseTags['SINGLE_PLAYER'], typeof CourseTags['MULTIPLAYER_VERSUS'],
    typeof CourseTags['THEMED'], typeof CourseTags['MUSIC'], typeof CourseTags['ART'], typeof CourseTags['TECHNICAL'],
    typeof CourseTags['BOSS_BATTLE'], typeof CourseTags['LINK'],
]
export type UnofficialCourseTags = readonly [
    typeof CourseTags['ONE_SCREEN'], typeof CourseTags['PRECISION'],
    typeof CourseTags['MULTIPLAYER'], typeof CourseTags['LOCAL_MULTIPLAYER'], typeof CourseTags['ONLINE_MULTIPLAYER'], typeof CourseTags['MULTIPLAYER_COOP'],
    typeof CourseTags['PIXEL_ART'], typeof CourseTags['SHOWCASE'], typeof CourseTags['STORY'], typeof CourseTags['EXPLORATION'],
    typeof CourseTags['GLITCH'], typeof CourseTags['TROLL'], typeof CourseTags['KAIZO'],
]
export type MakerCentralCourseTags = readonly [
    typeof CourseTags['STANDARD'], typeof CourseTags['PUZZLE_SOLVING'], typeof CourseTags['SPEEDRUN'],
    typeof CourseTags['AUTOSCROLL'], typeof CourseTags['AUTO_MARIO'],
    typeof CourseTags['SHORT_AND_SWEET'], typeof CourseTags['SHOOTER'],
    typeof CourseTags['SINGLE_PLAYER'], typeof CourseTags['MULTIPLAYER'],
    typeof CourseTags['THEMED'], typeof CourseTags['MUSIC'], typeof CourseTags['PIXEL_ART'], typeof CourseTags['TECHNICAL'],
    typeof CourseTags['BOSS_BATTLE'], typeof CourseTags['LINK'],
]

//endregion -------------------- Array types --------------------