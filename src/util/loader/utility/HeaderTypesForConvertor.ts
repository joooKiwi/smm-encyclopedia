import type {EveryAlternativeAcronym_EntityLimit, EveryEnglishNameOrUnknown_EntityLimit, EveryPossibleAcronym_EntityBehaviour, EveryPossibleAcronym_EntityLimit, EveryPossibleAcronym_GameReference, EveryPossibleAcronymWithPokemonGeneration_GameReference, EveryPossibleEnglishName_EntityLimitType, EveryPossibleEnglishName_SoundEffect, EveryPossibleEnglishName_SoundEffectCategory, EveryPossibleEnglishNameOnFile_MysteryMushroom, EveryPossibleName_Entity, EveryPossibleName_EntityCategory, EveryPossibleName_EntityGroup, EveryPossibleName_EntityLimit, EveryPossibleName_GameReference, EveryPossibleTranslationKey_EntityBehaviour, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter, UnknownReference} from './HeaderTypesForConvertorDefinition';

import {EntityBehaviours}      from '../../../entity/behaviours/EntityBehaviours';
import {EntityCategoryLoader}  from '../../../entity/category/EntityCategory.loader';
import {EntityLimits}          from '../../../entity/limit/EntityLimits';
import {EntityLimitTypes}      from '../../../entity/limit/EntityLimitTypes';
import {MysteryMushrooms}      from '../../../entity/mysteryMushrooms/MysteryMushrooms';
import {SoundEffectCategories} from '../../../entity/soundEffect/category/SoundEffectCategories';
import {SoundEffects}          from '../../../entity/soundEffect/simple/SoundEffects';
import {GameReferences}        from '../../../game/GameReferences';

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
    //region -------------------- Entity --------------------

    public get everyPossibleEntityNames() {
        //TODO implements this methods
        return this.#everyPossibleEntityNames ??= [];
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

    //endregion -------------------- Attributes --------------------

    //region -------------------- Game reference --------------------

    public readonly everyPossibleGameReferenceAcronym = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceAcronymWithPokemonGeneration = HeaderTypesForConvertorForProduction.#STRING_VALUE;
    public readonly everyPossibleGameReferenceEnglishName = HeaderTypesForConvertorForProduction.#STRING_VALUE;

    //endregion -------------------- Game reference --------------------
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
