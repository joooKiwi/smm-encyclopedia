import type {PossibleAcronym as PossibleAcronym_EntityBehaviour, PossibleTranslationKeys as PossibleTranslationKey_EntityBehaviour}                                                                                                                                      from 'core/behaviour/EntityBehaviours.types'
import type {PossibleEnglishName as PossibleEnglishName_Entity}                                                                                                                                                                                                          from 'core/entity/Entities.types'
import type {PossibleEnglishName as PossibleEnglishName_EntityCategory}                                                                                                                                                                                                  from 'core/entityCategory/EntityCategories.types'
import type {EnglishNames as EnglishNames_EntityLimitType}                                                                                                                                                                                                               from 'core/entityLimit/EntityLimitTypes.types'
import type {PossibleAcronym as PossibleAcronym_EntityLimit, PossibleAlternativeAcronym as PossibleAlternativeAcronym_EntityLimit, PossibleAlternativeEnglishName as PossibleAlternativeEnglishName_EntityLimit, PossibleEnglishName as PossibleEnglishName_EntityLimit} from 'core/entityLimit/EntityLimits.types'
import type {PossibleAcronym as PossibleAcronym_GameReference, PossibleEnglishName as PossibleEnglishName_GameReference}                                                                                                                                                 from 'core/gameReference/GameReferences.types'
import type {PossibleAcronym as PossibleAcronym_GameStyle}                                                                                                                                                                                                               from 'core/gameStyle/GameStyles.types'
import type {PossibleEnglishName as PossibleEnglishName_Instrument}                                                                                                                                                                                                      from 'core/instrument/Instruments.types'
import type {PossibleMixedInstrument as PossibleMixedName_Instrument}                                                                                                                                                                                                    from 'core/instrument/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_MiiCostumeCategory}                                                                                                                                                                                              from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleUniqueEnglishName as UniqueEnglishName_MysteryMushroom}                                                                                                                                                                                             from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PokemonGeneration}                                                                                                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushroom.template'
import type {PossibleConditionToUnlockIt as PossibleConditionToUnlockIt_MysteryMushroom}                                                                                                                                                                                 from 'core/mysteryMushroom/properties/UnlockProperty'
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom}                                                                                                                                                                    from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleTranslationKeys as PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom}                                                                                                                                                                       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleEnglishName as PossibleEnglishName_Theme_NightEffect}                                                                                                                                                                                               from 'core/nightEffect/NightEffects.types'
import type {PossibleEnglishName as PossibleEnglishName_OfficialNotification, PossibleEnglishNameWithEveryAmount as PossibleEnglishName_OfficialNotificationWithEveryAmount}                                                                                             from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleEnglishName as PossibleEnglishName_PredefinedMessage}                                                                                                                                                                                               from 'core/predefinedMessage/PredefinedMessages.types'
import type {EnglishNames as EnglishNames_SoundEffect}                                                                                                                                                                                                                   from 'core/soundEffect/SoundEffects.types'
import type {EnglishNames as EnglishNames_SoundEffectCategory}                                                                                                                                                                                                           from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Theme}                                                                                                                                                                                                           from 'core/theme/Themes.types'
import type {PossibleName as PossibleName_Version, PossibleName_SMM1 as PossibleName_Version_SMM, PossibleName_SMM2 as PossibleName_Version_SMM2, PossibleName_SMM3DS as PossibleName_Version_SMM3DS} from 'core/version/Versions.types'
import type {EmptyArray, UnknownCharacter, UnknownReference}                                                                                                                                          from 'util/types/variables'
import type {NullOr}                                                                                                                                                                                  from 'util/types/nullable'

//TODO Change some ValueOrStringConstant<*> to return ValueOrNull<*>
export interface HeaderTypesForConvertorDefinition {

    //region -------------------- Game reference --------------------

    get everyPossibleAcronym_gameReference(): ValueOrEmptyArray<EveryPossibleAcronym_GameReference>

    get everyPossibleAcronymWithPokemonGeneration_gameReference(): ValueOrEmptyArray<EveryPossibleAcronymWithPokemonGeneration_GameReference>

    get everyPossibleAcronymWithPokemonGenerationOrUnknown_gameReference(): ValueOrEmptyArray<EveryPossibleAcronymWithPokemonGenerationOrUnknown_GameReference>

    get everyPossibleName_gameReference(): ValueOrEmptyArray<EveryPossibleName_GameReference>

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    get everyPossibleAcronym_gameStyle(): ValueOrEmptyArray<EveryPossibleAcronym_GameStyle>

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    get everyPossibleName_entity(): ValueOrEmptyArray<EveryPossibleName_Entity>

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    get everyPossibleAcronym_entityBehaviour(): ValueOrEmptyArray<EveryPossibleAcronym_EntityBehaviour>

    get everyPossibleTranslationKey_entityBehaviour(): ValueOrEmptyArray<EveryPossibleTranslationKey_EntityBehaviour>

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    get everyPossibleName_entityGroup(): ValueOrEmptyArray<EveryPossibleName_EntityGroup>

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    get everyPossibleName_theme(): ValueOrEmptyArray<EveryPossibleName_Theme>

    get everyPossibleName_themeNightEffect(): ValueOrEmptyArray<EveryPossibleName_ThemeNightEffect>

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    get everyPossibleName_entityCategory(): ValueOrEmptyArray<EveryPossibleName_EntityCategory>

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    get everyPossibleAcronym_limit(): ValueOrEmptyArray<EveryPossibleAcronym_EntityLimit>

    get everyAlternativeAcronym_limit(): ValueOrEmptyArray<EveryAlternativeAcronym_EntityLimit>

    get everyPossibleName_limit(): ValueOrEmptyArray<EveryPossibleName_EntityLimit>

    get everyPossibleNameOrUnknown_limit(): ValueOrEmptyArray<EveryPossibleNameOrUnknown_EntityLimit>

    get everyName_limit(): ValueOrEmptyArray<EveryEnglishName_EntityLimit>

    get everyNameOrUnknown_limit(): ValueOrEmptyArray<EveryEnglishNameOrUnknown_EntityLimit>

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    get everyPossibleName_limitType(): ValueOrEmptyArray<EveryPossibleEnglishName_EntityLimitType>

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    get everyPossibleName_soundEffect(): ValueOrEmptyArray<EveryPossibleEnglishName_SoundEffect>

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    get everyPossibleName_soundEffectCategory(): ValueOrEmptyArray<EveryPossibleEnglishName_SoundEffectCategory>

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    get everyPossibleName_MiiCostumeCategory(): ValueOrEmptyArray<EveryPossibleName_MiiCostumeCategory>

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    get everyPossibleUniqueEnglishName_mysteryMushroom(): ValueOrEmptyArray<EveryPossibleUniqueEnglishName_MysteryMushroom>

    get everyPossibleConditionToUnlockIt_mysteryMushroom(): ValueOrEmptyArray<EveryConditionToUnlockIt_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom(): ValueOrEmptyArray<EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom>

    get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom(): ValueOrEmptyArray<EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom>

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    get everyPossibleNameWithAmount_officialNotification(): ValueOrEmptyArray<EveryPossibleNameWithAmount_OfficialNotification>

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    get everyPossibleName_predefinedMessage(): ValueOrEmptyArray<EveryPossibleEnglishName_PredefinedMessage>

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Instrument --------------------

    get everyPossibleName_instrument(): ValueOrEmptyArray<EveryPossibleName_Instrument>

    get everyPossibleNameOnEntity_instrument(): ValueOrEmptyArray<EveryPossibleNameOnEntity_Instrument>

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    get everyPossibleName_version(): ValueOrEmptyArray<EveryPossibleName_Version>

    get everyPossibleName_version_smm(): ValueOrEmptyArray<EveryPossibleName_Version_SMM>

    get everyPossibleName_version_smm3ds(): ValueOrEmptyArray<EveryPossibleName_Version_SMM3DS>

    get everyPossibleName_version_smm2(): ValueOrEmptyArray<EveryPossibleName_Version_SMM2>

    //endregion -------------------- Version --------------------

}

//region -------------------- External types --------------------

/** The value received in parameter or <b>null</b>. */
type ValueOrEmptyArray<T, > = | T | EmptyArray
/** The value received in parameter or simply the {@link StringConstant String constant}. */
// type ValueOrStringConstant<T, > = | T | StringConstant
/** The value received in parameter or simply the {@link EmptyableStringConstant Emptyable string constant}. */
// type ValueOrEmptyableStringConstant<T, > = | T | EmptyableStringConstant
// export type StringConstant = 'string'
// export type EmptyableStringConstant = `emptyable ${StringConstant}`
// export type NumberConstant = 'number'
// export type StringAndNumberConstants = readonly [StringConstant, NumberConstant,]

export type EveryPossibleAcronym_GameReference = readonly PossibleAcronym_GameReference[]
export type EveryPossibleAcronymWithPokemonGeneration_GameReference = readonly (| PossibleAcronym_GameReference | PokemonGeneration)[]
export type EveryPossibleAcronymWithPokemonGenerationOrUnknown_GameReference = readonly (| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference)[]
export type EveryPossibleName_GameReference = readonly PossibleEnglishName_GameReference[]

export type EveryPossibleAcronym_GameStyle = readonly PossibleAcronym_GameStyle[]

export type EveryPossibleName_Entity = readonly PossibleEnglishName_Entity[]

export type EveryPossibleAcronym_EntityBehaviour = readonly PossibleAcronym_EntityBehaviour[]
export type EveryPossibleTranslationKey_EntityBehaviour = readonly PossibleTranslationKey_EntityBehaviour[]

export type EveryPossibleName_EntityGroup = readonly string[]

export type EveryPossibleName_Theme = readonly PossibleEnglishName_Theme[]
export type EveryPossibleName_ThemeNightEffect = readonly PossibleEnglishName_Theme_NightEffect[]

export type EveryPossibleName_EntityCategory = readonly PossibleEnglishName_EntityCategory[]

export type EveryPossibleAcronym_EntityLimit = readonly (| PossibleAcronym_EntityLimit | PossibleAlternativeAcronym_EntityLimit)[]
export type EveryAlternativeAcronym_EntityLimit = readonly PossibleAlternativeAcronym_EntityLimit[]
export type EveryPossibleName_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | PossibleAlternativeEnglishName_EntityLimit)[]
export type EveryPossibleNameOrUnknown_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | PossibleAlternativeEnglishName_EntityLimit | UnknownCharacter)[]
export type EveryEnglishName_EntityLimit = readonly PossibleEnglishName_EntityLimit[]
export type EveryEnglishNameOrUnknown_EntityLimit = readonly (| PossibleEnglishName_EntityLimit | UnknownCharacter)[]

export type EveryPossibleEnglishName_EntityLimitType = EnglishNames_EntityLimitType

export type EveryPossibleEnglishName_SoundEffect = EnglishNames_SoundEffect
export type EveryPossibleEnglishName_SoundEffectCategory = EnglishNames_SoundEffectCategory

//region -------------------- Mii costume --------------------

export type EveryPossibleName_MiiCostumeCategory = readonly PossibleEnglishName_MiiCostumeCategory[]

//endregion -------------------- Mii costume --------------------
//region -------------------- Mystery Mushroom --------------------

export type EveryPossibleUniqueEnglishName_MysteryMushroom = readonly UniqueEnglishName_MysteryMushroom[]
export type EveryConditionToUnlockIt_MysteryMushroom = readonly PossibleConditionToUnlockIt_MysteryMushroom[]

export type EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnGoalPole_MysteryMushroom, NullOr<UnknownReference>> | UnknownReference)[]

export type EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom = readonly (| Exclude<PossibleTranslationKey_SoundEffectOnDeath_MysteryMushroom, NullOr<UnknownReference>> | UnknownReference)[]

//endregion -------------------- Mystery Mushroom --------------------
//region -------------------- Official notification --------------------

export type EveryPossibleNameWithAmount_OfficialNotification = readonly (PossibleEnglishName_OfficialNotification | PossibleEnglishName_OfficialNotificationWithEveryAmount)[]

//endregion -------------------- Official notification --------------------
//region -------------------- Predefined message --------------------

export type EveryPossibleEnglishName_PredefinedMessage = readonly PossibleEnglishName_PredefinedMessage[]

//endregion -------------------- Predefined message --------------------
//region -------------------- Instrument --------------------

export type EveryPossibleName_Instrument = readonly PossibleEnglishName_Instrument[]
export type EveryPossibleNameOnEntity_Instrument = readonly (| PossibleEnglishName_Instrument | PossibleMixedName_Instrument)[]

//endregion -------------------- Instrument --------------------
//region -------------------- Version --------------------

export type EveryPossibleName_Version = readonly PossibleName_Version[]
export type EveryPossibleName_Version_SMM = readonly PossibleName_Version_SMM[]
export type EveryPossibleName_Version_SMM3DS = readonly PossibleName_Version_SMM3DS[]
export type EveryPossibleName_Version_SMM2 = readonly PossibleName_Version_SMM2[]

//endregion -------------------- Version --------------------

//endregion -------------------- External types --------------------
