import type {CourseTags as RealEnum}                                                                                                                                                                                                                       from './CourseTags'
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types'


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue
export type PossibleStringValue = Names | PossibleEnglishName
export type PossibleValue = | RealEnum | number | string | null | undefined

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

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum

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

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type OfficialCourseTags<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['NONE'], SimpleEnum<T>['STANDARD'], SimpleEnum<T>['PUZZLE_SOLVING'], SimpleEnum<T>['SPEEDRUN'],
    SimpleEnum<T>['AUTOSCROLL'], SimpleEnum<T>['AUTO_MARIO'],
    SimpleEnum<T>['SHORT_AND_SWEET'], SimpleEnum<T>['SHOOTER'],
    SimpleEnum<T>['SINGLE_PLAYER'], SimpleEnum<T>['MULTIPLAYER_VERSUS'],
    SimpleEnum<T>['THEMED'], SimpleEnum<T>['MUSIC'], SimpleEnum<T>['ART'], SimpleEnum<T>['TECHNICAL'],
    SimpleEnum<T>['BOSS_BATTLE'], SimpleEnum<T>['LINK'],
]
export type UnofficialCourseTags<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['ONE_SCREEN'], SimpleEnum<T>['PRECISION'],
    SimpleEnum<T>['MULTIPLAYER'], SimpleEnum<T>['LOCAL_MULTIPLAYER'], SimpleEnum<T>['ONLINE_MULTIPLAYER'], SimpleEnum<T>['MULTIPLAYER_COOP'],
    SimpleEnum<T>['PIXEL_ART'], SimpleEnum<T>['SHOWCASE'], SimpleEnum<T>['STORY'], SimpleEnum<T>['EXPLORATION'],
    SimpleEnum<T>['GLITCH'], SimpleEnum<T>['TROLL'], SimpleEnum<T>['KAIZO'],
]
export type MakerCentralCourseTags<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['STANDARD'], SimpleEnum<T>['PUZZLE_SOLVING'], SimpleEnum<T>['SPEEDRUN'],
    SimpleEnum<T>['AUTOSCROLL'], SimpleEnum<T>['AUTO_MARIO'],
    SimpleEnum<T>['SHORT_AND_SWEET'], SimpleEnum<T>['SHOOTER'],
    SimpleEnum<T>['SINGLE_PLAYER'], SimpleEnum<T>['MULTIPLAYER'],
    SimpleEnum<T>['THEMED'], SimpleEnum<T>['MUSIC'], SimpleEnum<T>['PIXEL_ART'], SimpleEnum<T>['TECHNICAL'],
    SimpleEnum<T>['BOSS_BATTLE'], SimpleEnum<T>['LINK'],
]

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['NONE'],
    SimpleEnum<T>['STANDARD'],
    SimpleEnum<T>['PUZZLE_SOLVING'],
    SimpleEnum<T>['SPEEDRUN'],

    SimpleEnum<T>['AUTOSCROLL'],
    SimpleEnum<T>['AUTO_MARIO'],

    SimpleEnum<T>['ONE_SCREEN'],
    SimpleEnum<T>['SHORT_AND_SWEET'],
    SimpleEnum<T>['PRECISION'],
    SimpleEnum<T>['SHOOTER'],

    SimpleEnum<T>['SINGLE_PLAYER'],
    SimpleEnum<T>['MULTIPLAYER'],
    SimpleEnum<T>['LOCAL_MULTIPLAYER'],
    SimpleEnum<T>['ONLINE_MULTIPLAYER'],
    SimpleEnum<T>['MULTIPLAYER_VERSUS'],
    SimpleEnum<T>['MULTIPLAYER_COOP'],

    SimpleEnum<T>['THEMED'],
    SimpleEnum<T>['MUSIC'],
    SimpleEnum<T>['ART'],
    SimpleEnum<T>['PIXEL_ART'],
    SimpleEnum<T>['SHOWCASE'],
    SimpleEnum<T>['STORY'],
    SimpleEnum<T>['EXPLORATION'],
    SimpleEnum<T>['TECHNICAL'],

    SimpleEnum<T>['BOSS_BATTLE'],
    SimpleEnum<T>['LINK'],

    SimpleEnum<T>['GLITCH'],
    SimpleEnum<T>['TROLL'],
    SimpleEnum<T>['KAIZO'],
]

//endregion -------------------- Array types --------------------