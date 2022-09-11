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

export type EmptyEditorImageName = 'Empty editor image';
export type EmptyClearConditionImageName = 'Empty "clear condition" image';
export type EmptyWhilePlayingImageName = 'Empty "while playing" image';
export type EmptyUnusedImageName = 'Empty unused image';
export type EmptyUniqueImageName = 'Empty unique image';

export type EmptyEditorVoiceSoundName = 'Empty "editor voice" sound';

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
export type EmptyCourseAndWorldThemeName = 'Empty course & world theme';

//endregion -------------------- Theme types --------------------
//region -------------------- Name types --------------------

export type EmptyNameName = 'Empty name';

//endregion -------------------- Name types --------------------
//region -------------------- Entity property types --------------------

export type EmptyIsInPropertyName = 'Empty "is in property"';
export type EmptyEntityReferenceName = 'Empty entity reference';

//endregion -------------------- Entity property types --------------------
//region -------------------- Sound effect types --------------------

export type EmptySMMSoundEffectSoundName = 'Empty sound effect sound';

//endregion -------------------- Sound effect types --------------------
//region -------------------- Sound effect category types --------------------

export type EmptySoundEffectCategoryName = 'Empty sound effect category';

//endregion -------------------- Sound effect category types --------------------
//region -------------------- Mii costume types --------------------

export type EmptyMiiCostumeName = 'Empty Mii costume';

//endregion -------------------- Mii costume types --------------------
//region -------------------- Mii costume category types --------------------

export type EmptyMiiCostumeCategoryName = 'Empty Mii costume category';

//endregion -------------------- Mii costume category types --------------------
//region -------------------- Official notification types --------------------

export type EmptyOfficialNotificationName = 'Empty official notification';

//endregion -------------------- Official notification types --------------------
//region -------------------- Predefined message types --------------------

export type EmptyPredefinedMessageName = 'Empty predefined message';

//endregion -------------------- Predefined message types --------------------
//region -------------------- Instrument types --------------------

export type EmptyInstrumentName = 'Empty instrument';

//endregion -------------------- Instrument types --------------------
//region -------------------- Music types --------------------

export type EmptySingleBackgroundMusicName = 'Empty single "background music"';

//endregion -------------------- Music types --------------------

export type EveryPossibleEmptyName =
    | EmptyEntityName
    | EmptyEditorImageName | EmptyClearConditionImageName | EmptyWhilePlayingImageName | EmptyUnusedImageName | EmptyUniqueImageName
    | EmptyEditorVoiceSoundName

    | EmptyEntityCategoryName

    | EmptyLimitName | EmptyEntityLimitName | EmptyEntityLimitAmountName | EmptyEntityLimitLinkName

    | EmptyGameStyleName

    | EmptyCourseThemeName | EmptyWorldThemeName | EmptyCourseAndWorldThemeName

    | EmptyNameName

    | EmptyIsInPropertyName | EmptyEntityReferenceName

    | EmptySMMSoundEffectSoundName
    | EmptySoundEffectCategoryName

    | EmptyMiiCostumeName
    | EmptyMiiCostumeCategoryName

    | EmptyOfficialNotificationName

    | EmptyPredefinedMessageName

    | EmptyInstrumentName

    | EmptySingleBackgroundMusicName;

//endregion -------------------- Empty names types --------------------
