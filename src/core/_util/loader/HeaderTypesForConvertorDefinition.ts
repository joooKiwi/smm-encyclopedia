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
import type {PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MysteryMushroom}                                                                                                                                                                                 from '../../mysteryMushroom/properties/UnlockProperty';
import type {PossibleEnglishName as PossibleEnglishName_EntityCategory}                                                                                                                                                                                                  from '../../entityCategory/EntityCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_Instrument}                                                                                                                                                                                                      from '../../instrument/Instruments.types';
import type {PossibleEnglishName as PossibleEnglishName_MiiCostumeCategory}                                                                                                                                                                                              from '../../miiCostumeCategory/MiiCostumeCategories.types';
import type {PossibleEnglishName as PossibleEnglishName_OfficialNotification, PossibleEnglishNameWithEveryAmount as PossibleEnglishName_OfficialNotificationWithEveryAmount}                                                                                             from '../../officialNotification/OfficialNotifications.types';
import type {PossibleEnglishName as PossibleEnglishName_PredefinedMessage}                                                                                                                                                                                               from '../../predefinedMessage/PredefinedMessages.types';
import type {PossibleEnglishName as PossibleEnglishName_Theme}                                                                                                                                                                                                           from '../../theme/Themes.types';
import type {PossibleEnglishName as PossibleEnglishName_Theme_NightEffect}                                                                                                                                                                                               from '../../nightEffect/NightEffects.types';
import type {PossibleName as PossibleName_Version, PossibleName_SMM1 as PossibleName_Version_SMM, PossibleName_SMM2 as PossibleName_Version_SMM2, PossibleName_SMM3DS as PossibleName_Version_SMM3DS}                                                                    from '../../version/Versions.types';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from '../../mysteryMushroom/properties/sound/SoundEffectOnGoalPole';
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from '../../mysteryMushroom/properties/sound/SoundEffectOnDeath';

//TODO Change some ValueOrStringConstant<*> to return ValueOrNull<*>
export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Game reference --------------------

    get everyPossibleAcronym_gameReference(): ValueOrStringConstant<EveryPossibleAcronym_GameReference>

    get everyPossibleAcronymWithPokemonGeneration_gameReference(): ValueOrStringConstant<EveryPossibleAcronymWithPokemonGeneration_GameReference>

    //TODO change to ValueOrNull<EveryPossibleName_GameReference>
    get everyPossibleName_gameReference(): ValueOrEmptyableStringConstant<EveryPossibleName_GameReference>

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    get everyPossibleAcronym_gameStyle(): ValueOrStringConstant<EveryPossibleAcronym_GameStyle>

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    //TODO change to ValueOrNull<EveryPossibleName_Entity>
    get everyPossibleName_entity(): ValueOrEmptyableStringConstant<EveryPossibleName_Entity>

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    get everyPossibleAcronym_entityBehaviour(): ValueOrStringConstant<EveryPossibleAcronym_EntityBehaviour>

    get everyPossibleTranslationKey_entityBehaviour(): ValueOrStringConstant<EveryPossibleTranslationKey_EntityBehaviour>

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    get everyPossibleName_entityGroup(): ValueOrStringConstant<EveryPossibleName_EntityGroup>

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    get everyPossibleName_theme(): ValueOrStringConstant<EveryPossibleName_Theme>

    get everyPossibleName_themeNightEffect(): ValueOrStringConstant<EveryPossibleName_ThemeNightEffect>

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    get everyPossibleName_entityCategory(): ValueOrStringConstant<EveryPossibleName_EntityCategory>

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    get everyPossibleAcronym_limit(): ValueOrStringConstant<EveryPossibleAcronym_EntityLimit>

    get everyAlternativeAcronym_limit(): ValueOrStringConstant<EveryAlternativeAcronym_EntityLimit>

    get everyPossibleName_limit(): ValueOrStringConstant<EveryPossibleName_EntityLimit>

    get everyName_limit(): ValueOrStringConstant<EveryEnglishName_EntityLimit>

    get everyNameOrUnknown_limit(): ValueOrStringConstant<EveryEnglishNameOrUnknown_EntityLimit>

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    get everyPossibleName_limitType(): ValueOrStringConstant<EveryPossibleEnglishName_EntityLimitType>

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    get everyPossibleName_soundEffect(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffect>

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    get everyPossibleName_soundEffectCategory(): ValueOrStringConstant<EveryPossibleEnglishName_SoundEffectCategory>

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    get everyPossibleName_MiiCostumeCategory(): ValueOrStringConstant<EveryPossibleName_MiiCostumeCategory>

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    get everyPossibleEnglishNameOnFile_mysteryMushroom(): ValueOrStringConstant<EveryPossibleEnglishNameOnFile_MysteryMushroom>

    get everyPossibleConditionToUnlockIt_mysteryMushroom(): ValueOrStringConstant<EveryConditionToUnlockIt_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom(): ValueOrStringConstant<EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom>

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    get everyPossibleNameWithAmount_officialNotification(): ValueOrStringConstant<EveryPossibleNameWithAmount_OfficialNotification>;

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    get everyPossibleName_predefinedMessage(): ValueOrStringConstant<EveryPossibleEnglishName_PredefinedMessage>

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Instrument --------------------

    get everyPossibleName_instrument():ValueOrStringConstant<EveryPossibleName_Instrument>

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    get everyPossibleName_version(): ValueOrStringConstant<EveryPossibleName_Version>

    get everyPossibleName_version_smm(): ValueOrStringConstant<EveryPossibleName_Version_SMM>

    get everyPossibleName_version_smm3ds(): ValueOrStringConstant<EveryPossibleName_Version_SMM3DS>

    get everyPossibleName_version_smm2(): ValueOrStringConstant<EveryPossibleName_Version_SMM2>

    //endregion -------------------- Version --------------------

}

//region -------------------- External types --------------------

/**The value received in parameter or simply the {@link StringConstant String constant}.*/
type ValueOrStringConstant<T, > = T | StringConstant;
/**The value received in parameter or simply the {@link EmptyableStringConstant Emptyable string constant}.*/
type ValueOrEmptyableStringConstant<T, > = T | EmptyableStringConstant;
export type StringConstant = 'string';
export type EmptyableStringConstant = `emptyable ${StringConstant}`;
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

export type EveryPossibleName_MiiCostumeCategory = readonly PossibleEnglishName_MiiCostumeCategory[];

//endregion -------------------- Mii costume --------------------
//region -------------------- Mystery Mushroom --------------------

export type EveryPossibleEnglishNameOnFile_MysteryMushroom = readonly EnglishNameOnFile_MysteryMushroom[];
export type EveryConditionToUnlockIt_MysteryMushroom = readonly PossibleConditionToUnlockIt_MysteryMushroom[];

export type EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom, | null | '???'> | UnknownReference)[];

export type EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, | null | '???'> | UnknownReference)[];

//endregion -------------------- Mystery Mushroom --------------------
//region -------------------- Official notification --------------------

export type EveryPossibleNameWithAmount_OfficialNotification = readonly (PossibleEnglishName_OfficialNotification | PossibleEnglishName_OfficialNotificationWithEveryAmount)[];

//endregion -------------------- Official notification --------------------
//region -------------------- Predefined message --------------------

export type EveryPossibleEnglishName_PredefinedMessage = readonly PossibleEnglishName_PredefinedMessage[];

//endregion -------------------- Predefined message --------------------
//region -------------------- Instrument --------------------

export type EveryPossibleName_Instrument = readonly PossibleEnglishName_Instrument[];

//endregion -------------------- Instrument --------------------
//region -------------------- Version --------------------

export type EveryPossibleName_Version = readonly PossibleName_Version[];
export type EveryPossibleName_Version_SMM = readonly PossibleName_Version_SMM[];
export type EveryPossibleName_Version_SMM3DS = readonly PossibleName_Version_SMM3DS[];
export type EveryPossibleName_Version_SMM2 = readonly PossibleName_Version_SMM2[];

//endregion -------------------- Version --------------------

//endregion -------------------- External types --------------------
