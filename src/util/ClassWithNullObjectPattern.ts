/**
 * A class that define a class with the pattern of a <u>Null object pattern</u>
 *
 * @nullObjectPattern
 */
export interface ClassWithNullObjectPattern<NAME extends EveryPossibleEmptyName = EveryPossibleEmptyName, > {

    toString(): NAME

}

//region -------------------- Empty names types --------------------

//region -------------------- Entity types --------------------

export type EmptyEntityName = 'Empty entity';

//endregion -------------------- Entity types --------------------
//region -------------------- Entity category types --------------------

export type EmptyEntityCategoryName = 'Empty entity category';

//endregion -------------------- Entity category types --------------------
//region -------------------- Entity limit types --------------------

export type EmptyLimitName = 'Empty limit';
export type EmptyEntityLimitName = 'Empty entity limit';

export type EmptyEntityLimitAmountName = 'Empty entity limit (amount)';
export type EmptyEntityLimitLinkName = 'Empty entity limit (link)';

//endregion -------------------- Entity limit types --------------------
//region -------------------- Game style types --------------------

export type EmptyGameStyleName = 'Empty game style';

//endregion -------------------- Game style types --------------------
//region -------------------- Theme types --------------------

export type EmptyCourseThemeName = 'Empty course theme';
export type EmptyWorldThemeName = 'Empty world theme';

//endregion -------------------- Theme types --------------------
//region -------------------- Name types --------------------

export type EmptyNameName = 'Empty name';

//endregion -------------------- Name types --------------------
//region -------------------- Entity property types --------------------

export type EmptyIsInPropertyName = 'Empty "is in property"';
export type EmptyEntityReferenceName = 'Empty entity reference';

//endregion -------------------- Entity property types --------------------
//region -------------------- Sound effect category types --------------------

export type EmptySoundEffectCategoryName = 'Empty sound effect category';

//endregion -------------------- Sound effect category types --------------------

export type EveryPossibleEmptyName =
    | EmptyEntityName

    | EmptyEntityCategoryName

    | EmptyLimitName | EmptyEntityLimitName | EmptyEntityLimitAmountName | EmptyEntityLimitLinkName

    | EmptyGameStyleName

    | EmptyCourseThemeName | EmptyWorldThemeName

    | EmptyNameName

    | EmptyIsInPropertyName | EmptyEntityReferenceName

    | EmptySoundEffectCategoryName;

//endregion -------------------- Empty names types --------------------