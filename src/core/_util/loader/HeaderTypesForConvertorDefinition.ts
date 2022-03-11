import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                                                                                          from '../../entity/Entities.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_EntityLimitType}                                                                                                                                                                                             from '../../entityLimit/EntityLimitTypes.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffectCategory}                                                                                                                                                                                         from '../../soundEffectCategory/SoundEffectCategories.types';
import type {EnumArray_EnglishName as EnumArray_EnglishName_SoundEffect}                                                                                                                                                                                                 from '../../soundEffect/SoundEffects.types';
import type {EnglishNameOnFile as EnglishNameOnFile_MysteryMushroom}                                                                                                                                                                                                     from '../../mysteryMushroom/MysteryMushrooms.types';
import type {PokemonGeneration}                                                                                                                                                                                                                                          from '../../mysteryMushroom/MysteryMushroom.template';
import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                                                      from '../../behaviour/EntityBehaviours.types';
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from '../../entityLimit/EntityLimits.types';
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                                                 from '../../gameReference/GameReferences.types';
import type {PossibleAcronym as PossibleAcronym_GameStyle}                                                                                                                                                                                                               from '../../gameStyle/GameStyles.types';
import type {PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MiiCostume, PossibleMode as PossibleMode_MiiCostume}                                                                                                                                             from '../../miiCostume/MiiCostume.template';
import type {PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MysteryMushroom}                                                                                                                                                                                 from '../../mysteryMushroom/properties/UnlockProperty';
import type {PossibleEnglishName as PossibleEnglishName_EntityCategory}                                                                                                                                                                                                  from '../../entityCategory/EntityCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_MiiCostumeCategory}                                                                                                                                                                                              from '../../miiCostumeCategory/MiiCostumeCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_Theme}                                                                                                                                                                                                           from '../../theme/Themes.types';
import type {PossibleEnglishName as PossibleEnglishName_Theme_NightEffect}                                                                                                                                                                                               from '../../nightEffect/NightEffects.types';
import type {PossibleName as PossibleName_Version}                                                                                                                                                                                                                       from '../../version/Versions.types';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from '../../mysteryMushroom/properties/sound/SoundEffectOnGoalPole';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from '../../mysteryMushroom/properties/sound/SoundEffectOnDeath';

export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Game reference --------------------

    get everyPossibleGameReferenceAcronym(): ValueOrStringConstant<EveryPossibleAcronym_GameReference>

    get everyPossibleGameReferenceAcronymWithPokemonGeneration(): ValueOrStringConstant<EveryPossibleAcronymWithPokemonGeneration_GameReference>

    get everyPossibleGameReferenceEnglishName(): ValueOrStringConstant<EveryPossibleName_GameReference>

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    get everyPossibleGameStyleAcronym(): ValueOrStringConstant<EveryPossibleAcronym_GameStyle>

    //endregion -------------------- Game style --------------------
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
    //region -------------------- Theme --------------------

    get everyPossibleName_theme(): ValueOrStringConstant<EveryPossibleName_Theme>

    get everyPossibleName_themeNightEffect(): ValueOrStringConstant<EveryPossibleName_ThemeNightEffect>

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    get everyPossibleEntityCategoriesNames(): ValueOrStringConstant<EveryPossibleName_EntityCategory>

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    get everyPossibleLimitsAcronyms(): ValueOrStringConstant<EveryPossibleAcronym_EntityLimit>

    get everyAlternativeLimitAcronyms(): ValueOrStringConstant<EveryAlternativeAcronym_EntityLimit>

    get everyPossibleLimitsNames(): ValueOrStringConstant<EveryPossibleName_EntityLimit>

    get everyLimitsNames(): ValueOrStringConstant<EveryEnglishName_EntityLimit>

    get everyLimitsNamesOrUnknown(): ValueOrStringConstant<EveryEnglishNameOrUnknown_EntityLimit>

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    get everyPossibleLimitTypesNames(): ValueOrStringConstant<EveryPossibleEnglishName_EntityLimitType>

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    get everyPossibleSoundEffectsNames(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffect>

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    get everyPossibleSoundEffectCategoriesNames(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffectCategory>

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------

    get everyPossibleConditionToUnlockIt_MiiCostume(): ValueOrStringConstant<EveryConditionToUnlockIt_MiiCostume>

    get everyPossibleMode_MiiCostume(): ValueOrStringConstant<EveryPossibleMode_MiiCostume>

    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    get everyPossibleName_MiiCostumeCategory(): ValueOrStringConstant<EveryPossibleCategory_MiiCostume>

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    get everyPossibleMysteryMushroomIndividualEnglishNames(): ValueOrStringConstant<EveryPossibleEnglishNameOnFile_MysteryMushroom>

    get everyPossibleConditionToUnlockIt_mysteryMushroom(): ValueOrStringConstant<EveryConditionToUnlockIt_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom>

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Version --------------------

    get everyPossibleName_version(): ValueOrStringConstant<EveryPossibleSimpleName_Version>

    //endregion -------------------- Version --------------------

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

export type EveryPossibleAcronym_GameStyle = readonly PossibleAcronym_GameStyle[];

export type EveryPossibleName_Entity = readonly PossibleEnglishName_Entity[];

export type EveryPossibleAcronym_EntityBehaviour = readonly PossibleAcronym_EntityBehaviour[];
export type EveryPossibleTranslationKey_EntityBehaviour = readonly PossibleTranslationKey_EntityBehaviour[];

export type EveryPossibleName_EntityGroup = readonly string[];

export type EveryPossibleName_Theme = readonly PossibleEnglishName_Theme[];
export type EveryPossibleName_ThemeNightEffect = readonly PossibleEnglishName_Theme_NightEffect[];

export type EveryPossibleName_EntityCategory = readonly PossibleEnglishName_EntityCategory[];

export type EveryPossibleAcronym_EntityLimit = readonly (| PossibleAcronym_EntityLimit | PossibleAlternativeAcronym_EntityLimit)[];
export type EveryAlternativeAcronym_EntityLimit = readonly PossibleAlternativeAcronym_EntityLimit[];
export type EveryPossibleName_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | PossibleAlternativeEnglishName_EntityLimit)[];
export type EveryEnglishName_EntityLimit = readonly PossibleEnglishName_EntityLimit[];
export type EveryEnglishNameOrUnknown_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | UnknownCharacter)[];

export type EveryPossibleEnglishName_EntityLimitType = EnumArray_EnglishName_EntityLimitType;

export type EveryPossibleEnglishName_SoundEffect = EnumArray_EnglishName_SoundEffect;
export type EveryPossibleEnglishName_SoundEffectCategory = EnumArray_EnglishName_SoundEffectCategory;

//region -------------------- Mii costume --------------------

export type EveryConditionToUnlockIt_MiiCostume = readonly NonNullable<PossibleConditionToUnlockIt_MiiCostume>[];
export type EveryPossibleMode_MiiCostume = readonly NonNullable<PossibleMode_MiiCostume>[];

export type EveryPossibleCategory_MiiCostume = readonly PossibleEnglishName_MiiCostumeCategory[];

//endregion -------------------- Mii costume --------------------
//region -------------------- Mystery Mushroom --------------------

export type EveryPossibleEnglishNameOnFile_MysteryMushroom = readonly EnglishNameOnFile_MysteryMushroom[];
export type EveryConditionToUnlockIt_MysteryMushroom = readonly PossibleConditionToUnlockIt_MysteryMushroom[];

export type EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom, | null | '???'> | UnknownReference)[];

export type EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, | null | '???'> | UnknownReference)[];

//endregion -------------------- Mystery Mushroom --------------------
//region -------------------- Version --------------------

export type EveryPossibleSimpleName_Version = readonly PossibleName_Version[];

//endregion -------------------- Version --------------------

//endregion -------------------- External types --------------------
