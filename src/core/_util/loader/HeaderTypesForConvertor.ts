import type {
    EveryAlternativeAcronym_EntityLimit, EveryConditionToUnlockIt_MysteryMushroom, EveryEnglishName_EntityLimit, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronym_GameStyle, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleCategory_MiiCostume, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_PredefinedMessage, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleEnglishNameOnFile_MysteryMushroom, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleName_Theme, EveryPossibleName_ThemeNightEffect, EveryPossibleNameWithAmount_officialNotification, EveryPossibleSimpleName_Version, EveryPossibleTranslationKey_EntityBehaviour, EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom, EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter, UnknownReference
} from './HeaderTypesForConvertorDefinition';

import {Import} from '../../../util/DynamicImporter';

//region -------------------- Dynamic imports --------------------

//endregion -------------------- Dynamic imports --------------------

/**
 * @singleton
 * @classWithDynamicImport {@link GameReferences}, {@link GameStyles}, {@link Entities}, {@link EntityBehaviours} {@link Themes}, {@link NightEffects}, {@link EntityCategories}, {@link EntityLimits}, {@link EntityLimitTypes}, {@link SoundEffects}, {@link SoundEffectCategories}, {@link MiiCostumeCategories}, {@link MysteryMushrooms}, {@link Versions}
 */
class HeaderTypesForConvertorForTestAndDevelopment
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForTestAndDevelopment;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Attributes --------------------

    static readonly #UNKNOWN_CHARACTER: UnknownCharacter = '?';
    static readonly #UNKNOWN_REFERENCE: UnknownReference = '???';

    //region -------------------- Array attributes --------------------

    #everyPossibleGameReferenceAcronym?: EveryPossibleAcronym_GameReference;
    #everyPossibleGameReferenceAcronymWithPokemonGeneration?: EveryPossibleAcronymWithPokemonGeneration_GameReference;
    #everyPossibleGameReferenceEnglishName?: EveryPossibleName_GameReference;

    #everyPossibleGameStyleAcronym?: EveryPossibleAcronym_GameStyle;

    #everyPossibleEntityNames?: EveryPossibleName_Entity;

    #everyPossibleBehavioursAcronyms?: EveryPossibleAcronym_EntityBehaviour;
    #everyPossibleBehavioursTranslationKeys?: EveryPossibleTranslationKey_EntityBehaviour;

    #everyPossibleGroupNames?: EveryPossibleName_EntityGroup;

    #everyPossibleName_theme?: EveryPossibleName_Theme;
    #everyPossibleName_themeNightEffect?: EveryPossibleName_ThemeNightEffect;

    #everyPossibleEntityCategoriesNames?: EveryPossibleName_EntityCategory;

    #everyPossibleLimitsAcronyms?: EveryPossibleAcronym_EntityLimit;
    #everyAlternativeLimitAcronyms?: EveryAlternativeAcronym_EntityLimit;
    #everyPossibleLimitsNames?: EveryPossibleName_EntityLimit;
    #everyLimitsNames?: EveryEnglishName_EntityLimit;
    #everyLimitsNamesOrUnknown?: EveryEnglishNameOrUnknown_EntityLimit;

    #everyPossibleLimitTypesNames?: EveryPossibleEnglishName_EntityLimitType;

    #everyPossibleSoundEffectsNames?: EveryPossibleEnglishName_SoundEffect;
    #everyPossibleSoundEffectCategoriesNames?: EveryPossibleEnglishName_SoundEffectCategory;

    #everyPossibleName_MiiCostumeCategory?: EveryPossibleCategory_MiiCostume;

    #everyPossibleMysteryMushroomsIndividualNames?: EveryPossibleEnglishNameOnFile_MysteryMushroom;
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: EveryConditionToUnlockIt_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom;

    #everyPossibleNameWithAmount_officialNotification?: EveryPossibleNameWithAmount_officialNotification;

    #everyPossibleName_predefinedMessage?: EveryPossibleEnglishName_PredefinedMessage;

    #everyPossibleName_version?: EveryPossibleSimpleName_Version;

    //endregion -------------------- Array attributes --------------------

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleGameReferenceAcronym() {
        return this.#everyPossibleGameReferenceAcronym ??= Import.GameReferences.everyAcronyms;
    }

    public get everyPossibleGameReferenceAcronymWithPokemonGeneration() {
        return this.#everyPossibleGameReferenceAcronymWithPokemonGeneration ??= [
            ...Import.GameReferences.everyAcronyms,
            'Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',
        ];
    }

    public get everyPossibleGameReferenceEnglishName() {
        return this.#everyPossibleGameReferenceEnglishName ??= Import.GameReferences.everyEnglishNames;
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleGameStyleAcronym() {
        return this.#everyPossibleGameStyleAcronym ??= Import.GameStyles.everyAcronyms;
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleEntityNames() {
        return this.#everyPossibleEntityNames ??= Import.Entities.everyEnglishNames;
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleBehavioursAcronyms() {
        return this.#everyPossibleBehavioursAcronyms ??= Import.EntityBehaviours.everyAcronyms;
    }

    public get everyPossibleBehavioursTranslationKeys() {
        return this.#everyPossibleBehavioursTranslationKeys ??= Import.EntityBehaviours.everyTranslationKeys;
    }

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public get everyPossibleGroupNames() {
        //TODO implements this methods
        return this.#everyPossibleGroupNames ??= [];
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public get everyPossibleName_theme(): EveryPossibleName_Theme {
        return this.#everyPossibleName_theme ??= Import.Themes.everyEnglishNames;
    }

    public get everyPossibleName_themeNightEffect(): EveryPossibleName_ThemeNightEffect {
        return this.#everyPossibleName_themeNightEffect ??= Import.NightEffects.everyEnglishNames;
    }

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleEntityCategoriesNames() {
        return this.#everyPossibleEntityCategoriesNames ??= Import.EntityCategories.everyEnglishNames;
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleLimitsAcronyms() {
        return this.#everyPossibleLimitsAcronyms ??= [...Import.EntityLimits.everyAcronyms, ...Import.EntityLimits.everyAlternativeAcronyms,];
    }

    public get everyAlternativeLimitAcronyms() {
        return this.#everyAlternativeLimitAcronyms ??= Import.EntityLimits.everyAlternativeAcronyms;
    }

    public get everyPossibleLimitsNames() {
        return this.#everyPossibleLimitsNames ??= [...Import.EntityLimits.everyEnglishNames, ...Import.EntityLimits.everyAlternativeEnglishNames,];
    }

    public get everyLimitsNames() {
        return this.#everyLimitsNames ??= Import.EntityLimits.everyEnglishNames;
    }

    public get everyLimitsNamesOrUnknown() {
        return this.#everyLimitsNamesOrUnknown ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...Import.EntityLimits.everyEnglishNames,];
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public get everyPossibleLimitTypesNames() {
        return this.#everyPossibleLimitTypesNames ??= Import.EntityLimitTypes.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleSoundEffectsNames() {
        return this.#everyPossibleSoundEffectsNames ??= Import.SoundEffects.everyEnglishNames;
    }

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public get everyPossibleSoundEffectCategoriesNames() {
        return this.#everyPossibleSoundEffectCategoriesNames ??= Import.SoundEffectCategories.everyEnglishNames;
    }

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public get everyPossibleName_MiiCostumeCategory() {
        return this.#everyPossibleName_MiiCostumeCategory ??= Import.MiiCostumeCategories.everyEnglishNames;
    }

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleMysteryMushroomIndividualEnglishNames() {
        return this.#everyPossibleMysteryMushroomsIndividualNames ??= Import.MysteryMushrooms.everyIndividualEnglishNames;
    }

    public get everyPossibleConditionToUnlockIt_mysteryMushroom() {
        return this.#everyPossibleConditionToUnlockIt_mysteryMushroom ??= [
            'Unlock Mystery Mushroom',
            '100 Mario (easy)', '100 Mario (normal)', '100 Mario (expert)', '100 Mario (super expert)',
            'Gnat Attack (normal)', 'Gnat Attack (hard)',
            'Complete Event', 'Complete 3 Events (by Arino)',
        ];
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
        ];
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
        ];
    }

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    public get everyPossibleNameWithAmount_officialNotification(): EveryPossibleNameWithAmount_officialNotification {
        return this.#everyPossibleNameWithAmount_officialNotification ??= Import.OfficialNotifications.values.map(enumerable => [enumerable.englishName, enumerable.additionalEnglishName]).flat(2);
    }

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public get everyPossibleName_predefinedMessage() {
        return this.#everyPossibleName_predefinedMessage ??= Import.PredefinedMessages.everyEnglishNames;
    }

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Version --------------------

    public get everyPossibleName_version() {
        return this.#everyPossibleName_version ??= Import.Versions.everySimpleNames;
    }

    //endregion -------------------- Version --------------------

}

/**
 * @singleton
 */
class HeaderTypesForConvertorForProduction
    implements HeaderTypesForConvertorDefinition {

    //region -------------------- Singleton usage --------------------

    static #instance?: HeaderTypesForConvertorForProduction;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Attributes --------------------

    static readonly #STRING_VALUE: StringConstant = 'string';
    // static readonly #NUMBER_VALUE: NumberConstant = 'number';
    // static readonly #STRING_AND_NUMBER: StringAndNumber = [this.#STRING_VALUE, this.#NUMBER_VALUE,];
    // static readonly #EMPTY_ARRAY: EmptyArray = [];

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public readonly everyPossibleGameReferenceAcronym = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceAcronymWithPokemonGeneration = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceEnglishName = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public readonly everyPossibleGameStyleAcronym = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public readonly everyPossibleEntityNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public readonly everyPossibleBehavioursAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleBehavioursTranslationKeys = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public readonly everyPossibleGroupNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity group --------------------
    //region -------------------- Theme --------------------

    public readonly everyPossibleName_theme = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleName_themeNightEffect = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Theme --------------------
    //region -------------------- Entity category --------------------

    public readonly everyPossibleEntityCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    public readonly everyPossibleLimitsAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyAlternativeLimitAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleLimitsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyLimitsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyLimitsNamesOrUnknown = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public readonly everyPossibleLimitTypesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public readonly everyPossibleSoundEffectsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Sound effect category --------------------

    public readonly everyPossibleSoundEffectCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Sound effect category --------------------
    //region -------------------- Mii costume --------------------
    //endregion -------------------- Mii costume --------------------
    //region -------------------- Mii costume category --------------------

    public readonly everyPossibleName_MiiCostumeCategory = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mii costume category --------------------
    //region -------------------- Mystery Mushroom --------------------

    public readonly everyPossibleMysteryMushroomIndividualEnglishNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleConditionToUnlockIt_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mystery Mushroom --------------------
    //region -------------------- Official notification --------------------

    public readonly everyPossibleNameWithAmount_officialNotification = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Official notification --------------------
    //region -------------------- Predefined message --------------------

    public readonly everyPossibleName_predefinedMessage = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Predefined message --------------------
    //region -------------------- Version --------------------

    public readonly everyPossibleName_version = HeaderTypesForConvertorForProduction.#STRING_VALUE;

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
const HeaderTypesForConvertor: HeaderTypesForConvertorDefinition = process.env.NODE_ENV === 'production' ? HeaderTypesForConvertorForProduction.get : HeaderTypesForConvertorForTestAndDevelopment.get;
export {HeaderTypesForConvertor};
