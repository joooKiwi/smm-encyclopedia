import type {EmptyArray, EveryAlternativeAcronym_EntityLimit, EveryConditionToUnlockIt_MysteryMushroom, EveryEnglishName_EntityLimit, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronym_GameStyle, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleAcronymWithPokemonGenerationOrUnknown_GameReference, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_PredefinedMessage, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleName_Instrument, EveryPossibleName_MiiCostumeCategory, EveryPossibleName_Theme, EveryPossibleName_ThemeNightEffect, EveryPossibleName_Version, EveryPossibleName_Version_SMM, EveryPossibleName_Version_SMM2, EveryPossibleName_Version_SMM3DS, EveryPossibleNameOnEntity_Instrument, EveryPossibleNameOrUnknown_EntityLimit, EveryPossibleNameWithAmount_OfficialNotification, EveryPossibleTranslationKey_EntityBehaviour, EveryPossibleUniqueEnglishName_MysteryMushroom, EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom, EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom, HeaderTypesForConvertorDefinition, UnknownCharacter, UnknownReference} from './HeaderTypesForConvertorDefinition'

import {Import}         from '../../../util/DynamicImporter'
import {isInProduction} from '../../../variables'

/**
 * @singleton
 * @classWithDynamicImport {@link GameReferences}, {@link GameStyles}, {@link Entities}, {@link EntityBehaviours} {@link Themes}, {@link NightEffects}, {@link EntityCategories}, {@link EntityLimits}, {@link EntityLimitTypes}, {@link SoundEffects}, {@link SoundEffectCategories}, {@link MiiCostumeCategories}, {@link MysteryMushrooms}, {@link Versions}
 */
class HeaderTypesForConvertorForTestAndDevelopment
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForTestAndDevelopment

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    static readonly #UNKNOWN_CHARACTER: UnknownCharacter = '?'
    static readonly #UNKNOWN_REFERENCE: UnknownReference = '???'

    //region -------------------- Array fields --------------------

    #everyPossibleAcronym_gameReference?: EveryPossibleAcronym_GameReference
    #everyPossibleAcronymWithPokemonGeneration_gameReference?: EveryPossibleAcronymWithPokemonGeneration_GameReference
    #everyPossibleAcronymWithPokemonGenerationOrUnknown_gameReference?: EveryPossibleAcronymWithPokemonGenerationOrUnknown_GameReference
    #everyPossibleName_gameReference?: EveryPossibleName_GameReference

    #everyPossibleAcronym_gameStyle?: EveryPossibleAcronym_GameStyle

    #everyPossibleName_entity?: EveryPossibleName_Entity

    #everyPossibleAcronym_entityBehaviour?: EveryPossibleAcronym_EntityBehaviour
    #everyPossibleTranslationKey_entityBehaviour?: EveryPossibleTranslationKey_EntityBehaviour

    #everyPossibleName_entityGroup?: EveryPossibleName_EntityGroup

    #everyPossibleName_theme?: EveryPossibleName_Theme
    #everyPossibleName_themeNightEffect?: EveryPossibleName_ThemeNightEffect

    #everyPossibleName_entityCategory?: EveryPossibleName_EntityCategory

    #everyPossibleAcronym_limit?: EveryPossibleAcronym_EntityLimit
    #everyAlternativeAcronym_limit?: EveryAlternativeAcronym_EntityLimit
    #everyPossibleName_limit?: EveryPossibleName_EntityLimit
    #everyPossibleNameOrUnknown_limit?: EveryPossibleNameOrUnknown_EntityLimit
    #everyName_limit?: EveryEnglishName_EntityLimit
    #everyNameOrUnknown_limit?: EveryEnglishNameOrUnknown_EntityLimit

    #everyPossibleName_limitType?: EveryPossibleEnglishName_EntityLimitType

    #everyPossibleName_soundEffect?: EveryPossibleEnglishName_SoundEffect
    #everyPossibleName_soundEffectCategory?: EveryPossibleEnglishName_SoundEffectCategory

    #everyPossibleName_MiiCostumeCategory?: EveryPossibleName_MiiCostumeCategory

    #everyPossibleEnglishNameOnFile_mysteryMushroom?: EveryPossibleUniqueEnglishName_MysteryMushroom
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: EveryConditionToUnlockIt_MysteryMushroom
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom

    #everyPossibleNameWithAmount_officialNotification?: EveryPossibleNameWithAmount_OfficialNotification

    #everyPossibleName_predefinedMessage?: EveryPossibleEnglishName_PredefinedMessage

    #everyPossibleName_instrument?: EveryPossibleName_Instrument
    #everyPossibleNameOnEntity_instrument?: EveryPossibleNameOnEntity_Instrument

    #everyPossibleName_version?: EveryPossibleName_Version
    #everyPossibleName_version_smm?: EveryPossibleName_Version_SMM
    #everyPossibleName_version_smm3ds?: EveryPossibleName_Version_SMM3DS
    #everyPossibleName_version_smm2?: EveryPossibleName_Version_SMM2

    //endregion -------------------- Array fields --------------------

    //endregion -------------------- Fields --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleAcronym_gameReference() {
        return this.#everyPossibleAcronym_gameReference ??= Import.GameReferences.everyAcronyms
    }

    public get everyPossibleAcronymWithPokemonGeneration_gameReference() {
        return this.#everyPossibleAcronymWithPokemonGeneration_gameReference ??= [
            ...Import.GameReferences.everyAcronyms,
            'Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',
        ]
    }

    public get everyPossibleAcronymWithPokemonGenerationOrUnknown_gameReference() {
        return this.#everyPossibleAcronymWithPokemonGenerationOrUnknown_gameReference ??= [...this.everyPossibleAcronymWithPokemonGeneration_gameReference, HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_REFERENCE,]
    }

    public get everyPossibleName_gameReference() {
        return this.#everyPossibleName_gameReference ??= Import.GameReferences.everyEnglishNames
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleAcronym_gameStyle() {
        return this.#everyPossibleAcronym_gameStyle ??= Import.GameStyles.everyAcronyms
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleName_entity() {
        return this.#everyPossibleName_entity ??= Import.Entities.everyEnglishNames
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleAcronym_entityBehaviour() {
        return this.#everyPossibleAcronym_entityBehaviour ??= Import.EntityBehaviours.everyAcronyms
    }

    public get everyPossibleTranslationKey_entityBehaviour() {
        return this.#everyPossibleTranslationKey_entityBehaviour ??= Import.EntityBehaviours.everyTranslationKeys
    }

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public get everyPossibleName_entityGroup() {
        //TODO implements this methods
        return this.#everyPossibleName_entityGroup ??= []
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public get everyPossibleName_theme(): EveryPossibleName_Theme {
        return this.#everyPossibleName_theme ??= Import.Themes.everyEnglishNames
    }

    public get everyPossibleName_themeNightEffect(): EveryPossibleName_ThemeNightEffect {
        return this.#everyPossibleName_themeNightEffect ??= Import.NightEffects.everyEnglishNames
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleName_entityCategory() {
        return this.#everyPossibleName_entityCategory ??= Import.EntityCategories.everyEnglishNames
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleAcronym_limit() {
        return this.#everyPossibleAcronym_limit ??= [...Import.EntityLimits.everyAcronyms, ...Import.EntityLimits.everyAlternativeAcronyms,]
    }

    public get everyAlternativeAcronym_limit() {
        return this.#everyAlternativeAcronym_limit ??= Import.EntityLimits.everyAlternativeAcronyms
    }

    public get everyPossibleName_limit() {
        return this.#everyPossibleName_limit ??= [...Import.EntityLimits.everyEnglishNames, ...Import.EntityLimits.everyAlternativeEnglishNames,]
    }

    public get everyPossibleNameOrUnknown_limit() {
        return this.#everyPossibleNameOrUnknown_limit ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...this.everyName_limit,]
    }

    public get everyName_limit() {
        return this.#everyName_limit ??= Import.EntityLimits.everyEnglishNames
    }

    public get everyNameOrUnknown_limit() {
        return this.#everyNameOrUnknown_limit ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...Import.EntityLimits.everyEnglishNames,]
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public get everyPossibleName_limitType() {
        return this.#everyPossibleName_limitType ??= Import.EntityLimitTypes.everyEnglishNames
    }

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleName_soundEffect() {
        return this.#everyPossibleName_soundEffect ??= Import.SoundEffects.everyEnglishNames
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleName_soundEffectCategory() {
        return this.#everyPossibleName_soundEffectCategory ??= Import.SoundEffectCategories.everyEnglishNames
    }

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public get everyPossibleName_MiiCostumeCategory() {
        return this.#everyPossibleName_MiiCostumeCategory ??= Import.MiiCostumeCategories.everyEnglishNames
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleUniqueEnglishName_mysteryMushroom() {
        return this.#everyPossibleEnglishNameOnFile_mysteryMushroom ??= Import.MysteryMushrooms.everyUniqueEnglishNames
    }

    public get everyPossibleConditionToUnlockIt_mysteryMushroom() {
        return this.#everyPossibleConditionToUnlockIt_mysteryMushroom ??= [
            'Unlock Mystery Mushroom',
            '100 Mario (easy)', '100 Mario (normal)', '100 Mario (expert)', '100 Mario (super expert)',
            'Gnat Attack (normal)', 'Gnat Attack (hard)',
            'Complete Event', 'Complete 3 Events (by Arino)',
        ]
    }

    public get everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom ??= [
            HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_REFERENCE,
            'Introduction', 'Startup', 'Game over',
            'Level finished', 'Level finished?', 'Race finished',
            'Airship completed', 'Timed event completed', 'Course completed',
            'Perfect score obtained', 'Upgrade obtained', 'Important item obtained',
            'Star collected', 'Triforce collected',
            'Boss key obtained', 'Boss defeated',
            'New technique acquired', 'Gym Leader victory', 'Rank up', 'Secret area discovered', 'Declaring the Splatfest\'s winning team',
            'Bowser\'s arrival', 'Link meets Zelda for the 1st time', 'Ganon encounter',
            '3DS preview jingle',
        ]
    }

    public get everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom() {
        return this.#everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom ??= [
            HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_REFERENCE,
            'Game over', 'Defeated', 'Error sound',
            'Boss defeated', 'Dog laughing',
            'Lost a life', 'Lost an Arwing', 'Falling offscreen',
            'Eliminated from the race', 'Eliminated from the course', 'Player has fainted',
            'Minigame lost', 'Round lost',
            'Timed event failed', 'Ran out of energy', 'Practice Catcher result jingle',
            'Bowser\'s death', 'Mario saying "Mama mia"', 'Zelda\'s Lullaby', 'Link caught by Moblins', 'K.K. howling', 'Pikmin death',
        ]
    }

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    public get everyPossibleNameWithAmount_officialNotification(): EveryPossibleNameWithAmount_OfficialNotification {
        return this.#everyPossibleNameWithAmount_officialNotification ??= Import.OfficialNotifications.values.map(enumerable => [enumerable.englishName, enumerable.additionalEnglishName]).flat(2)
    }

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public get everyPossibleName_predefinedMessage() {
        return this.#everyPossibleName_predefinedMessage ??= Import.PredefinedMessages.everyEnglishNames
    }

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Instrument --------------------

    public get everyPossibleName_instrument() {
        return this.#everyPossibleName_instrument ??= Import.Instruments.everyEnglishNames
    }

    public get everyPossibleNameOnEntity_instrument() {
        return this.#everyPossibleNameOnEntity_instrument ??= [
            ...Import.Instruments.everyEnglishNames,
            'Unchain Chomp → Piano 1\nStump → Mokugyo',
            'Regular → Cymbal\nSideway → Hi-hat',
            'Bottom → Hello\nTop → Ok'
        ]
    }

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    public get everyPossibleName_version() {
        return this.#everyPossibleName_version ??= Import.Versions.everyNames
    }

    public get everyPossibleName_version_smm() {
        return this.#everyPossibleName_version_smm ??= Import.Versions.everyNames_smm1
    }

    public get everyPossibleName_version_smm3ds() {
        return this.#everyPossibleName_version_smm3ds ??= Import.Versions.everyNames_smm3ds
    }

    public get everyPossibleName_version_smm2() {
        return this.#everyPossibleName_version_smm2 ??= Import.Versions.everyNames_smm2
    }

    //endregion -------------------- Version --------------------

}

/**
 * @singleton
 */
class HeaderTypesForConvertorForProduction
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForProduction

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Fields --------------------

    // static readonly #STRING_VALUE: StringConstant = 'string'
    // static readonly #EMPTYABLE_STRING_VALUE: EmptyableStringConstant = 'emptyable string'
    // static readonly #NUMBER_VALUE: NumberConstant = 'number'
    // static readonly #STRING_AND_NUMBER: StringAndNumber = [this.#STRING_VALUE, this.#NUMBER_VALUE,]
    static readonly #EMPTY_ARRAY: EmptyArray = []

    //endregion -------------------- Fields --------------------

    //region -------------------- Game reference --------------------

    public readonly everyPossibleAcronym_gameReference = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleAcronymWithPokemonGeneration_gameReference = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleAcronymWithPokemonGenerationOrUnknown_gameReference = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_gameReference = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public readonly everyPossibleAcronym_gameStyle = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public readonly everyPossibleName_entity = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public readonly everyPossibleAcronym_entityBehaviour = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleTranslationKey_entityBehaviour = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public readonly everyPossibleName_entityGroup = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public readonly everyPossibleName_theme = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_themeNightEffect = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public readonly everyPossibleName_entityCategory = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    public readonly everyPossibleAcronym_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyAlternativeAcronym_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleNameOrUnknown_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyName_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyNameOrUnknown_limit = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public readonly everyPossibleName_limitType = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public readonly everyPossibleName_soundEffect = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public readonly everyPossibleName_soundEffectCategory = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public readonly everyPossibleName_MiiCostumeCategory = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public readonly everyPossibleUniqueEnglishName_mysteryMushroom = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleConditionToUnlockIt_mysteryMushroom = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    public readonly everyPossibleNameWithAmount_officialNotification = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public readonly everyPossibleName_predefinedMessage = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Instrument --------------------

    public readonly everyPossibleName_instrument = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleNameOnEntity_instrument = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Instrument --------------------
    //region -------------------- Version --------------------

    public readonly everyPossibleName_version = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_version_smm = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_version_smm3ds = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY
    public readonly everyPossibleName_version_smm2 = HeaderTypesForConvertorForProduction.#EMPTY_ARRAY

    //endregion -------------------- Version --------------------

}

/**
 * <p>
 *  A dynamic variable to make the production built faster.
 *  Mainly to avoid any useless validations (since they will never be used)
 *  and to avoid any {@link Array array} creation that will never be used.
 * </p>
 *
 * <p>
 *  The constant is made of the {@link HeaderTypesForConvertorForProduction production build (HeaderTypesForConvertorForProduction)}
 *  and the {@link HeaderTypesForConvertorForTestAndDevelopment test & development build (HeaderTypesForConvertorForTestAndDevelopment)}.
 * </p>
 * @see HeaderTypesForConvertorDefinition
 */
const HeaderTypesForConvertor: HeaderTypesForConvertorDefinition = isInProduction ? HeaderTypesForConvertorForProduction.get : HeaderTypesForConvertorForTestAndDevelopment.get
export {HeaderTypesForConvertor}
