import type {EnumArray_EnglishName as EnumArray_EnglishName_EntityLimitType}                                                                                                                                                                                             from '../../limit/EntityLimitTypes.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffectCategory}                                                                                                                                                                                         from '../../soundEffect/category/SoundEffectCategories.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffect}                                                                                                                                                                                                 from '../../soundEffect/simple/SoundEffects.types';
import type {EnglishNameOnFile as EnglishNameOnFile_MysteryMushroom}                                                                                                                                                                                                     from '../../mysteryMushrooms/MysteryMushrooms.types';
import type {PokemonGeneration}                                                                                                                                                                                                                                          from '../../mysteryMushrooms/MysteryMushroom.template';
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                                                      from '../../behaviours/EntityBehaviours.types';
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from '../../limit/EntityLimits.types';
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                                                 from '../../../game/GameReferences.types';
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                                                                from '../../mysteryMushrooms/properties/UnlockProperty';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from '../../mysteryMushrooms/properties/sound/SoundEffectOnGoalPole';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from '../../mysteryMushrooms/properties/sound/SoundEffectOnDeath';

export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Game reference --------------------

    get everyPossibleGameReferenceAcronym(): | EveryPossibleAcronym_GameReference | StringConstant

    get everyPossibleGameReferenceAcronymWithPokemonGeneration(): | EveryPossibleAcronymWithPokemonGeneration_GameReference | StringConstant

    get everyPossibleGameReferenceEnglishName(): | EveryPossibleName_GameReference | StringConstant

    //endregion -------------------- Game reference --------------------
    //region -------------------- Entity --------------------

    get everyPossibleEntityNames(): | EveryPossibleName_Entity | StringConstant

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    get everyPossibleBehavioursAcronyms(): | EveryPossibleAcronym_EntityBehaviour | StringConstant

    get everyPossibleBehavioursTranslationKeys(): | EveryPossibleTranslationKey_EntityBehaviour | StringConstant

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    get everyPossibleGroupNames(): | EveryPossibleName_EntityGroup | StringConstant

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity category --------------------

    get everyPossibleEntityCategoriesNames(): | EveryPossibleName_EntityCategory | StringConstant

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    get everyPossibleLimitsAcronyms(): | EveryPossibleAcronym_EntityLimit | StringConstant

    get everyAlternativeLimitAcronyms(): | EveryAlternativeAcronym_EntityLimit | StringConstant

    get everyPossibleLimitsNames(): | EveryPossibleName_EntityLimit | StringConstant

    get everyLimitsNamesOrUnknown(): | EveryEnglishNameOrUnknown_EntityLimit | StringConstant

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    get everyPossibleLimitTypesNames(): | EveryPossibleEnglishName_EntityLimitType | StringConstant

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    get everyPossibleSoundEffectsNames(): | EveryPossibleEnglishName_SoundEffect | StringConstant

    get everyPossibleSoundEffectCategoriesNames(): | EveryPossibleEnglishName_SoundEffectCategory | StringConstant

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Mystery Mushroom --------------------

    get everyPossibleMysteryMushroomIndividualEnglishNames(): | EveryPossibleEnglishNameOnFile_MysteryMushroom | StringConstant

    get everyPossibleConditionToUnlockIt_mysteryMushroom(): | EveryConditionToUnlockIt_MysteryMushroom | StringConstant

    get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom(): | EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom | StringConstant

    get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom(): | EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom | StringConstant

    //endregion -------------------- Mystery Mushroom --------------------

}

//region -------------------- External types --------------------

export type StringConstant = 'string';
// export type NumberConstant = 'number';
// export type StringAndNumberConstants = readonly [StringConstant, NumberConstant,];
// export type EmptyArray = readonly [];

export type UnknownCharacter = '?';
export type UnknownReference = '???';

export type EveryPossibleAcronym_GameReference = readonly PossibleAcronym_GameReference[];
export type EveryPossibleAcronymWithPokemonGeneration_GameReference = readonly (| PossibleAcronym_GameReference | PokemonGeneration)[];
export type EveryPossibleName_GameReference = readonly PossibleEnglishName_GameReference[];

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

//region -------------------- Mystery Mushroom --------------------

export type EveryPossibleEnglishNameOnFile_MysteryMushroom = readonly EnglishNameOnFile_MysteryMushroom[];
export type EveryConditionToUnlockIt_MysteryMushroom = readonly PossibleConditionToUnlockIt[];

export type EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom, | null | '???'> | UnknownReference)[];

export type EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, | null | '???'> | UnknownReference)[];

//endregion -------------------- Mystery Mushroom --------------------

//endregion -------------------- External types --------------------
