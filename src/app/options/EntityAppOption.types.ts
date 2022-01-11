import type {EntityAppOption}                                                                                                                                                                                                                              from './EntityAppOption';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | Ordinals
                                       | PossibleStringValue;
export type PossibleStringValue = | Names;
export type PossibleValue = | PossibleNonNullableValue | string | number | null | undefined;

enum Enum {

    IMAGES,
    IMAGE_ANIMATION,
    IMAGES_ON_EDITOR,
    IMAGES_ON_CLEAR_CONDITION,
    IMAGES_ON_WHILE_PLAYING,
    IMAGES_ON_UNUSED,

    NAME,

    GAME,
    WHEN_ALL_SELECTED_GAME,

    GAME_STYLE,
    WHEN_ALL_SELECTED_GAME_STYLE,

    COURSE_THEME,
    WHEN_ALL_SELECTED_COURSE_THEME,

    TIME,
    WHEN_ALL_SELECTED_TIME,

    CATEGORY,
    CATEGORY_AS_TEXT,

    LIMIT,
    IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT,

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EntityAppOption = EntityAppOption, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, E extends EntityAppOption = EntityAppOption, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number = number, E extends EntityAppOption = EntityAppOption, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends EntityAppOption = EntityAppOption, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends EntityAppOption = EntityAppOption, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends EntityAppOption = EntityAppOption, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EntityAppOption = EntityAppOption, > = readonly [
    SimpleEnum<T>['IMAGES'],
    SimpleEnum<T>['IMAGE_ANIMATION'],
    SimpleEnum<T>['IMAGES_ON_EDITOR'],
    SimpleEnum<T>['IMAGES_ON_CLEAR_CONDITION'],
    SimpleEnum<T>['IMAGES_ON_WHILE_PLAYING'],
    SimpleEnum<T>['IMAGES_ON_UNUSED'],

    SimpleEnum<T>['NAME'],

    SimpleEnum<T>['GAME'],
    SimpleEnum<T>['WHEN_ALL_SELECTED_GAME'],

    SimpleEnum<T>['GAME_STYLE'],
    SimpleEnum<T>['WHEN_ALL_SELECTED_GAME_STYLE'],

    SimpleEnum<T>['COURSE_THEME'],
    SimpleEnum<T>['WHEN_ALL_SELECTED_COURSE_THEME'],

    SimpleEnum<T>['TIME'],
    SimpleEnum<T>['WHEN_ALL_SELECTED_TIME'],

    SimpleEnum<T>['CATEGORY'],
    SimpleEnum<T>['CATEGORY_AS_TEXT'],

    SimpleEnum<T>['LIMIT'],
    SimpleEnum<T>['IF_APPLICABLE_ACRONYM_ON_LIMIT_AS_TEXT'],

];

//endregion -------------------- Array types --------------------

