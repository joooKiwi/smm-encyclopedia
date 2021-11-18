import type {EnumArray_EnglishName as EnumArray_EnglishName_EntityLimitType}                                                                                                                                                                                             from '../../../entity/limit/EntityLimitTypes.types';
import type {EnglishNameOnFile as EnglishNameOnFile_MysteryMushroom}                                                                                                                                                                                                     from '../../../entity/mysteryMushrooms/MysteryMushrooms.types';
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKey as PossibleTranslationKey_EntityBehaviour}                                                                                                                                       from '../../../entity/behaviours/EntityBehaviours.types';
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from '../../../entity/limit/EntityLimits.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffectCategory}                                                                                                                                                                                         from '../../../entity/soundEffect/category/SoundEffectCategories.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffect}                                                                                                                                                                                                 from '../../../entity/soundEffect/simple/SoundEffects.types';

//region -------------------- External types --------------------

export type StringConstant = 'string';

export type UnknownCharacter = '?';
export type UnknownReference = '???';

export type EveryPossibleName_Entity = readonly string[];

export type EveryPossibleAcronym_EntityBehaviour = readonly PossibleAcronym_EntityBehaviour[];
export type EveryPossibleTranslationKey_EntityBehaviour = readonly PossibleTranslationKey_EntityBehaviour[];

export type EveryPossibleName_EntityGroup = readonly string[];

export type EveryPossibleName_EntityCategory = readonly string[];

export type EveryPossibleAcronym_EntityLimit = readonly (| PossibleAcronym_EntityLimit | PossibleAlternativeAcronym_EntityLimit)[];
export type EveryAlternativeAcronym_EntityLimit = readonly PossibleAlternativeAcronym_EntityLimit[];
export type EveryPossibleName_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | PossibleAlternativeEnglishName_EntityLimit)[];
export type EveryEnglishNameOrUnknown_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | UnknownCharacter)[];

export type EveryPossibleEnglishName_EntityLimitType = EnumArray_EnglishName_EntityLimitType;

export type EveryPossibleEnglishName_SoundEffect = EnumArray_EnglishName_SoundEffect;
export type EveryPossibleEnglishName_SoundEffectCategory = EnumArray_EnglishName_SoundEffectCategory;

export type EveryPossibleEnglishNameOnFile_MysteryMushroom = readonly EnglishNameOnFile_MysteryMushroom[];

//endregion -------------------- External types --------------------

export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Entity getter methods --------------------

    get everyPossibleEntityNames(): | EveryPossibleName_Entity | StringConstant

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- Entity behaviour methods --------------------

    get everyPossibleBehavioursAcronyms(): | EveryPossibleAcronym_EntityBehaviour | StringConstant

    get everyPossibleBehavioursTranslationKeys(): | EveryPossibleTranslationKey_EntityBehaviour | StringConstant

    //endregion -------------------- Entity behaviour methods --------------------
    //region -------------------- Entity group getter methods --------------------

    get everyPossibleGroupNames(): | EveryPossibleName_EntityGroup | StringConstant

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity category getter methods --------------------

    get everyPossibleEntityCategoriesNames(): | EveryPossibleName_EntityCategory | StringConstant

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity limits getter methods --------------------

    get everyPossibleLimitsAcronyms(): | EveryPossibleAcronym_EntityLimit | StringConstant

    get everyAlternativeLimitAcronyms(): | EveryAlternativeAcronym_EntityLimit | StringConstant

    get everyPossibleLimitsNames(): | EveryPossibleName_EntityLimit | StringConstant

    get everyLimitsNamesOrUnknown(): | EveryEnglishNameOrUnknown_EntityLimit | StringConstant

    //endregion -------------------- Entity limits getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    get everyPossibleLimitTypesNames(): | EveryPossibleEnglishName_EntityLimitType | StringConstant

    //endregion -------------------- Entity limit type getter methods --------------------
    //region -------------------- Sound effect getter methods --------------------

    get everyPossibleSoundEffectsNames(): | EveryPossibleEnglishName_SoundEffect | StringConstant

    get everyPossibleSoundEffectCategoriesNames(): | EveryPossibleEnglishName_SoundEffectCategory | StringConstant

    //endregion -------------------- Sound effect getter methods --------------------
    //region -------------------- Mystery Mushroom getter methods --------------------

    get everyPossibleMysteryMushroomIndividualEnglishNames(): | EveryPossibleEnglishNameOnFile_MysteryMushroom | StringConstant

    //endregion -------------------- Mystery Mushroom getter methods --------------------

}