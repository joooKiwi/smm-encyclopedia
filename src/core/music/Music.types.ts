import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Musics as RealEnum}                                                                                                                                                                                                                           from './Musics';
import type {SoundEffects}                                                                                                                                                                                                                                 from '../soundEffect/SoundEffects';
import type {Themes}                                                                                                                                                                                                                                       from '../theme/Themes';

export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = Names;
export type PossibleValue = | RealEnum | Themes | SoundEffects | string | number | null | undefined;

enum Enum {

    TITLE_SCREEN,

    GROUND,
    UNDERGROUND,
    UNDERWATER,
    DESERT,
    SNOW,
    SKY,
    FOREST,
    GHOST_HOUSE,
    AIRSHIP,
    CASTLE,
    VOLCANO,
    SPACE,

    P_SWITCH,
    STAR,

    NINJA_ATTACK,
    AUDIENCE,
    SCATTING,
    TRADITIONAL,
    PEACEFUL,

    BONUS,
    BOSS, FINAL_BOSS,

    SUPER_MARIO_KART,
    SUPER_MARIO_64,
    SUPER_MARIO_SUNSHINE,
    SUPER_MARIO_GALAXY,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

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
    SimpleEnum<T>['TITLE_SCREEN'],

    SimpleEnum<T>['GROUND'], SimpleEnum<T>['UNDERGROUND'], SimpleEnum<T>['UNDERWATER'], SimpleEnum<T>['DESERT'],
    SimpleEnum<T>['SNOW'], SimpleEnum<T>['SKY'], SimpleEnum<T>['FOREST'], SimpleEnum<T>['GHOST_HOUSE'],
    SimpleEnum<T>['AIRSHIP'], SimpleEnum<T>['CASTLE'],

    SimpleEnum<T>['VOLCANO'], SimpleEnum<T>['SPACE'],

    SimpleEnum<T>['STAR'], SimpleEnum<T>['P_SWITCH'],

    SimpleEnum<T>['NINJA_ATTACK'], SimpleEnum<T>['AUDIENCE'], SimpleEnum<T>['SCATTING'],
    SimpleEnum<T>['TRADITIONAL'], SimpleEnum<T>['PEACEFUL'],

    SimpleEnum<T>['BONUS'],
    SimpleEnum<T>['BOSS'], SimpleEnum<T>['FINAL_BOSS'],

    SimpleEnum<T>['SUPER_MARIO_KART'], SimpleEnum<T>['SUPER_MARIO_64'],
    SimpleEnum<T>['SUPER_MARIO_SUNSHINE'], SimpleEnum<T>['SUPER_MARIO_GALAXY'],
];

//endregion -------------------- Array types --------------------