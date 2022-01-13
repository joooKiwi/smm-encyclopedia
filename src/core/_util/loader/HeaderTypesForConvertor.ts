import type {EveryAlternativeAcronym_EntityLimit, EveryConditionToUnlockIt_MysteryMushroom, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronym_GameStyle, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleEnglishNameOnFile_MysteryMushroom, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleTranslationKey_EntityBehaviour, EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom, EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter, UnknownReference} from './HeaderTypesForConvertorDefinition';

import {EntityBehaviours}      from '../../behaviour/EntityBehaviours';
import {EntityCategoryLoader}  from '../../entityCategory/EntityCategory.loader';
import {EntityLimits}          from '../../entityLimit/EntityLimits';
import {EntityLimitTypes}      from '../../entityLimit/EntityLimitTypes';
import {Entities}              from '../../entity/Entities';
import {GameReferences}        from '../../gameReference/GameReferences';
import {MysteryMushrooms}      from '../../mysteryMushroom/MysteryMushrooms';
import {SoundEffectCategories} from '../../soundEffectCategory/SoundEffectCategories';
import {SoundEffects}          from '../../soundEffect/SoundEffects';
import {GameStyles}            from '../../gameStyle/GameStyles';

/**
 * @singleton
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

    #everyPossibleGameReferenceAcronym?: EveryPossibleAcronym_GameReference;
    #everyPossibleGameReferenceAcronymWithPokemonGeneration?: EveryPossibleAcronymWithPokemonGeneration_GameReference;
    #everyPossibleGameReferenceEnglishName?: EveryPossibleName_GameReference;

    #everyPossibleGameStyleAcronym?: EveryPossibleAcronym_GameStyle;

    #everyPossibleEntityNames?: EveryPossibleName_Entity;

    #everyPossibleBehavioursAcronyms?: EveryPossibleAcronym_EntityBehaviour;
    #everyPossibleBehavioursTranslationKeys?: EveryPossibleTranslationKey_EntityBehaviour;

    #everyPossibleGroupNames?: EveryPossibleName_EntityGroup;

    #everyPossibleEntityCategoriesNames?: EveryPossibleName_EntityCategory;

    #everyPossibleLimitsAcronyms?: EveryPossibleAcronym_EntityLimit;
    #everyAlternativeLimitAcronyms?: EveryAlternativeAcronym_EntityLimit;
    #everyPossibleLimitsNames?: EveryPossibleName_EntityLimit;
    #everyLimitsNamesOrUnknown?: EveryEnglishNameOrUnknown_EntityLimit;

    #everyPossibleLimitTypesNames?: EveryPossibleEnglishName_EntityLimitType;

    #everyPossibleSoundEffectsNames?: EveryPossibleEnglishName_SoundEffect;
    #everyPossibleSoundEffectCategoriesNames?: EveryPossibleEnglishName_SoundEffectCategory;

    #everyPossibleMysteryMushroomsIndividualNames?: EveryPossibleEnglishNameOnFile_MysteryMushroom;
    #everyPossibleConditionToUnlockIt_mysteryMushroom?: EveryConditionToUnlockIt_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom?: EverySmallDefinition_SoundEffectOnGoalPole_MysteryMushroom;
    #everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom?: EverySmallDefinition_SoundEffectOnDeath_MysteryMushroom;

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public get everyPossibleGameReferenceAcronym() {
        return this.#everyPossibleGameReferenceAcronym ??= GameReferences.everyAcronyms;
    }

    public get everyPossibleGameReferenceAcronymWithPokemonGeneration() {
        return this.#everyPossibleGameReferenceAcronymWithPokemonGeneration ??= [...GameReferences.everyAcronyms, 'Pokémon gen 1', 'Pokémon gen 4', 'Pokémon gen 6',];
    }

    public get everyPossibleGameReferenceEnglishName() {
        return this.#everyPossibleGameReferenceEnglishName ??= GameReferences.everyEnglishNames;
    }

    //endregion -------------------- Game reference --------------------
    //region -------------------- Game style --------------------

    public get everyPossibleGameStyleAcronym() {
        return this.#everyPossibleGameStyleAcronym ??= GameStyles.everyAcronyms;
    }

    //endregion -------------------- Game style --------------------
    //region -------------------- Entity --------------------

    public get everyPossibleEntityNames() {
        return this.#everyPossibleEntityNames ??= Entities.everyEnglishNames;
    }

    //endregion -------------------- Entity --------------------
    //region -------------------- Entity behaviour --------------------

    public get everyPossibleBehavioursAcronyms() {
        return this.#everyPossibleBehavioursAcronyms ??= EntityBehaviours.everyAcronyms;
    }

    public get everyPossibleBehavioursTranslationKeys() {
        return this.#everyPossibleBehavioursTranslationKeys ??= EntityBehaviours.everyTranslationKeys;
    }

    //endregion -------------------- Entity behaviour --------------------
    //region -------------------- Entity group --------------------

    public get everyPossibleGroupNames() {
        //TODO implements this methods
        return this.#everyPossibleGroupNames ??= [];
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity category --------------------

    public get everyPossibleEntityCategoriesNames() {
        //TODO change to enum usage instead (when it will be created)
        return this.#everyPossibleEntityCategoriesNames ??= [...EntityCategoryLoader.get.load().keys()];
    }

    //endregion -------------------- Entity group --------------------
    //region -------------------- Entity limit --------------------

    public get everyPossibleLimitsAcronyms() {
        return this.#everyPossibleLimitsAcronyms ??= [...EntityLimits.everyAcronyms, ...EntityLimits.everyAlternativeAcronyms,];
    }

    public get everyAlternativeLimitAcronyms() {
        return this.#everyAlternativeLimitAcronyms ??= EntityLimits.everyAlternativeAcronyms;
    }

    public get everyPossibleLimitsNames() {
        return this.#everyPossibleLimitsNames ??= [...EntityLimits.everyEnglishNames, ...EntityLimits.everyAlternativeEnglishNames,];
    }

    public get everyLimitsNamesOrUnknown() {
        return this.#everyLimitsNamesOrUnknown ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...EntityLimits.everyEnglishNames,];
    }

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public get everyPossibleLimitTypesNames() {
        return this.#everyPossibleLimitTypesNames ??= EntityLimitTypes.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public get everyPossibleSoundEffectsNames() {
        return this.#everyPossibleSoundEffectsNames ??= SoundEffects.everyEnglishNames;
    }

    public get everyPossibleSoundEffectCategoriesNames() {
        return this.#everyPossibleSoundEffectCategoriesNames ??= SoundEffectCategories.everyEnglishNames;
    }

    //endregion -------------------- Sound effectds --------------------
    //region -------------------- Mystery Mushroom --------------------

    public get everyPossibleMysteryMushroomIndividualEnglishNames() {
        return this.#everyPossibleMysteryMushroomsIndividualNames ??= MysteryMushrooms.everyIndividualEnglishNames;
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
    //region -------------------- Entity category --------------------

    public readonly everyPossibleEntityCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity category --------------------
    //region -------------------- Entity limit --------------------

    public readonly everyPossibleLimitsAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyAlternativeLimitAcronyms = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleLimitsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyLimitsNamesOrUnknown = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit --------------------
    //region -------------------- Entity limit type --------------------

    public readonly everyPossibleLimitTypesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Entity limit type --------------------
    //region -------------------- Sound effect --------------------

    public readonly everyPossibleSoundEffectsNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSoundEffectCategoriesNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Sound effect --------------------
    //region -------------------- Mystery Mushroom --------------------

    public readonly everyPossibleMysteryMushroomIndividualEnglishNames = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleConditionToUnlockIt_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Mystery Mushroom --------------------

}

/**
 * <p>
 *  A dynamic variable to make the production built faster.
 *  Mainly to avoid any useless validations (since they will never be used).
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
