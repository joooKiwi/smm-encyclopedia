import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                                                                                          from '../../entity/Entities.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_EntityLimitType}                                                                                                                                                                                             from '../../entityLimit/EntityLimitTypes.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffectCategory}                                                                                                                                                                                         from '../../soundEffectCategory/SoundEffectCategories.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffect}                                                                                                                                                                                                 from '../../soundEffect/SoundEffects.types';
import type {EnglishNameOnFile as EnglishNameOnFile_MysteryMushroom}                                                                                                                                                                                                     from '../../mysteryMushroom/MysteryMushrooms.types';
import type {PokemonGeneration}                                                                                                                                                                                                                                          from '../../mysteryMushroom/MysteryMushroom.template';
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                                                      from '../../behaviour/EntityBehaviours.types';
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from '../../entityLimit/EntityLimits.types';
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                                                 from '../../gameReference/GameReferences.types';
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                                                                from '../../mysteryMushroom/properties/UnlockProperty';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from '../../mysteryMushroom/properties/sound/SoundEffectOnGoalPole';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from '../../mysteryMushroom/properties/sound/SoundEffectOnDeath';

export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Game reference --------------------

    get everyPossibleGameReferenceAcronym(): ValueOrStringConstant<EveryPossibleAcronym_GameReference>

    get everyPossibleGameReferenceAcronymWithPokemonGeneration(): ValueOrStringConstant<EveryPossibleAcronymWithPokemonGeneration_GameReference>

    get everyPossibleGameReferenceEnglishName(): ValueOrStringConstant<EveryPossibleName_GameReference>

    //endregion -------------------- Game reference --------------------
    //region -------------------- Entity --------------------

    get everyPossibleEntityNames(): ValueOrStringConstant<EveryPossibleName_Entity>

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    get everyPossibleBehavioursAcronyms(): ValueOrStringConstant<EveryPossibleAcronym_EntityBehaviour>

    get everyPossibleBehavioursTranslationKeys(): ValueOrStringConstant<EveryPossibleTranslationKey_EntityBehaviour>

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    get everyPossibleGroupNames(): ValueOrStringConstant<EveryPossibleName_EntityGroup>

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity category --------------------

    get everyPossibleEntityCategoriesNames(): ValueOrStringConstant<EveryPossibleName_EntityCategory>

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    get everyPossibleLimitsAcronyms(): ValueOrStringConstant<EveryPossibleAcronym_EntityLimit>

    get everyAlternativeLimitAcronyms(): ValueOrStringConstant<EveryAlternativeAcronym_EntityLimit>

    get everyPossibleLimitsNames(): ValueOrStringConstant<EveryPossibleName_EntityLimit>

    get everyLimitsNamesOrUnknown(): ValueOrStringConstant<EveryEnglishNameOrUnknown_EntityLimit>

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    get everyPossibleLimitTypesNames(): ValueOrStringConstant<EveryPossibleEnglishName_EntityLimitType>

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    get everyPossibleSoundEffectsNames(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffect>

    get everyPossibleSoundEffectCategoriesNames(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffectCategory>

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Mystery Mushroom --------------------

    get everyPossibleMysteryMushroomIndividualEnglishNames(): ValueOrStringConstant<EveryPossibleEnglishNameOnFile_MysteryMushroom>

    get everyPossibleConditionToUnlockIt_mysteryMushroom(): ValueOrStringConstant<EveryConditionToUnlockIt_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom>

    //endregion -------------------- Mystery Mushroom --------------------

}

//region -------------------- External types --------------------

/**
 * The value received in parameter or simply the {@link StringConstant String constant}.
 */
type ValueOrStringConstant<T, > = T | StringConstant;
export type StringConstant = 'string';
// export type NumberConstant = 'number';
// export type StringAndNumberConstants = readonly [StringConstant, NumberConstant,];
// export type EmptyArray = readonly [];

export type UnknownCharacter = '?';
export type UnknownReference = '???';

export type EveryPossibleAcronym_GameReference = readonly PossibleAcronym_GameReference[];
export type EveryPossibleAcronymWithPokemonGeneration_GameReference = readonly (| PossibleAcronym_GameReference | PokemonGeneration)[];
export type EveryPossibleName_GameReference = readonly PossibleEnglishName_GameReference[];

export type EveryPossibleName_Entity = readonly PossibleEnglishName_Entity[];

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
