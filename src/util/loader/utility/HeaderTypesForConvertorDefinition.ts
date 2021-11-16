import type {EntityLimitTypeEnglishNameArray}                                                                                            from '../../../entity/limit/EntityLimitTypes.types';
import type {EnglishNameOnFile as MysteryMushroomIndividualEnglishName}                                                                  from '../../../entity/mysteryMushrooms/MysteryMushrooms.types';
import type {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours}                                                    from '../../../entity/behaviours/EntityBehaviours.types';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits} from '../../../entity/limit/EntityLimits.types';
import type {SoundEffectCategoriesEnglishNameArray}                                                                                      from '../../../entity/soundEffect/category/SoundEffectCategories.types';
import type {SoundEffectsEnglishNameArray}                                                                                               from '../../../entity/soundEffect/simple/SoundEffects.types';

//region -------------------- External types --------------------

export type StringConstant = 'string';

export type UnknownCharacter = '?';
export type UnknownReference = '???';

export type EveryPossibleEntityNames = readonly string[];

export type EveryPossibleBehavioursAcronyms = readonly PossibleAcronymEntityBehaviours[];
export type EveryPossibleBehavioursTranslationKeys = readonly PossibleTranslationKeyEntityBehaviours[];

export type EveryPossibleGroupNames = readonly string[];

export type EveryPossibleCategoriesNames = readonly string[];

export type EveryPossibleLimitsAcronyms = readonly (| PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits)[];
export type EveryAlternativeLimitsAcronyms = readonly PossibleAcronymEntityLimits[];
export type EveryPossibleLimitsNames = readonly (| PossibleEntityLimits | PossibleAlternativeEntityLimits)[];
export type EveryLimitsNamesOrUnknown = readonly (| PossibleEntityLimits | UnknownCharacter)[];

export type EveryPossibleMysteryMushroomsIndividualNames = readonly MysteryMushroomIndividualEnglishName[];

//endregion -------------------- External types --------------------

export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Entity getter methods --------------------

    get everyPossibleEntityNames(): | EveryPossibleEntityNames | StringConstant

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- Entity behaviour methods --------------------

    get everyPossibleBehavioursAcronyms(): | EveryPossibleBehavioursAcronyms | StringConstant

    get everyPossibleBehavioursTranslationKeys(): | EveryPossibleBehavioursTranslationKeys | StringConstant

    //endregion -------------------- Entity behaviour methods --------------------
    //region -------------------- Entity group getter methods --------------------

    get everyPossibleGroupNames(): | EveryPossibleGroupNames | StringConstant

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity category getter methods --------------------

    get everyPossibleEntityCategoriesNames(): | EveryPossibleCategoriesNames | StringConstant

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity limits getter methods --------------------

    get everyPossibleLimitsAcronyms(): | EveryPossibleLimitsAcronyms | StringConstant

    get everyAlternativeLimitAcronyms(): | EveryAlternativeLimitsAcronyms | StringConstant

    get everyPossibleLimitsNames(): | EveryPossibleLimitsNames | StringConstant

    get everyLimitsNamesOrUnknown(): | EveryLimitsNamesOrUnknown | StringConstant

    //endregion -------------------- Entity limits getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    get everyPossibleLimitTypesNames(): | EntityLimitTypeEnglishNameArray | StringConstant

    //endregion -------------------- Entity limit type getter methods --------------------
    //region -------------------- Sound effect getter methods --------------------

    get everyPossibleSoundEffectsNames(): | SoundEffectsEnglishNameArray | StringConstant

    get everyPossibleSoundEffectCategoriesNames(): | SoundEffectCategoriesEnglishNameArray | StringConstant

    //endregion -------------------- Sound effect getter methods --------------------
    //region -------------------- Mystery Mushroom getter methods --------------------

    get everyPossibleMysteryMushroomIndividualEnglishNames(): | EveryPossibleMysteryMushroomsIndividualNames | StringConstant

    //endregion -------------------- Mystery Mushroom getter methods --------------------

}