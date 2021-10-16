import type {EntityLimitTypeEnglishNameArray}                                                                                                                                                                                                                                                                                                                 from '../../../entity/limit/EntityLimitTypes.types';
import type {EveryAlternativeLimitsAcronyms, EveryLimitsNamesOrUnknown, EveryPossibleBehavioursAcronyms, EveryPossibleBehavioursTranslationKeys, EveryPossibleCategoriesNames, EveryPossibleEntityNames, EveryPossibleGroupNames, EveryPossibleLimitsAcronyms, EveryPossibleLimitsNames, HeaderTypesForConvertorDefinition, StringConstant, UnknownCharacter} from './HeaderTypesForConvertorDefinition';

import {EntityBehaviours}                      from '../../../entity/behaviours/EntityBehaviours';
import {EntityCategoryLoader}                  from '../../../entity/category/EntityCategory.loader';
import {EntityLimits}                          from '../../../entity/limit/EntityLimits';
import {EntityLimitTypes}                      from '../../../entity/limit/EntityLimitTypes';
import {SoundEffectCategories}                 from '../../../entity/soundEffect/category/SoundEffectCategories';
import {SoundEffectCategoriesEnglishNameArray} from '../../../entity/soundEffect/category/SoundEffectCategories.types';
import {SoundEffectsEnglishNameArray}          from '../../../entity/soundEffect/simple/SoundEffects.types';
import {SoundEffects}                          from '../../../entity/soundEffect/simple/SoundEffects';

/**
 * @singleton
 */
class HeaderTypesForConvertorForTestAndDevelopment
    implements HeaderTypesForConvertorDefinition {

    static #instance?: HeaderTypesForConvertorForTestAndDevelopment;

    //region -------------------- Attributes --------------------

    static readonly #UNKNOWN_CHARACTER: UnknownCharacter = '?';

    #everyPossibleEntityNames?: EveryPossibleEntityNames;

    #everyPossibleBehavioursAcronyms?: EveryPossibleBehavioursAcronyms;
    #everyPossibleBehavioursTranslationKeys?: EveryPossibleBehavioursTranslationKeys;

    #everyPossibleGroupNames?: EveryPossibleGroupNames;

    #everyPossibleEntityCategoriesNames?: EveryPossibleCategoriesNames;

    #everyPossibleLimitsAcronyms?: EveryPossibleLimitsAcronyms;
    #everyAlternativeLimitAcronyms?: EveryAlternativeLimitsAcronyms;
    #everyPossibleLimitsNames?: EveryPossibleLimitsNames;
    #everyLimitsNamesOrUnknown?: EveryLimitsNamesOrUnknown;

    #everyPossibleLimitTypesNames?: EntityLimitTypeEnglishNameArray;

    #everyPossibleSoundEffectsNames?: SoundEffectsEnglishNameArray;
    #everyPossibleSoundEffectCategoriesNames?: SoundEffectCategoriesEnglishNameArray;

    //endregion -------------------- Attributes --------------------

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //region -------------------- Entity getter methods --------------------

    public get everyPossibleEntityNames() {
        //TODO implements this methods
        return this.#everyPossibleEntityNames ??= [];
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- Entity behaviour methods --------------------

    public get everyPossibleBehavioursAcronyms() {
        return this.#everyPossibleBehavioursAcronyms ??= EntityBehaviours.everyAcronyms;
    }

    public get everyPossibleBehavioursTranslationKeys() {
        return this.#everyPossibleBehavioursTranslationKeys ??= EntityBehaviours.everyTranslationKeys;
    }

    //endregion -------------------- Entity behaviour methods --------------------
    //region -------------------- Entity group getter methods --------------------

    public get everyPossibleGroupNames() {
        //TODO implements this methods
        return this.#everyPossibleGroupNames ??= [];
    }

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity category getter methods --------------------

    public get everyPossibleEntityCategoriesNames() {
        //TODO change to enum usage instead (when it will be created)
        return this.#everyPossibleEntityCategoriesNames ??= [...EntityCategoryLoader.get.load().keys()];
    }

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity limits getter methods --------------------

    public get everyPossibleLimitsAcronyms() {
        return this.#everyPossibleLimitsAcronyms ??= [...EntityLimits.everyAcronyms, ...EntityLimits.everyAlternativeAcronyms,];
    }

    public get everyAlternativeLimitAcronyms() {
        return this.#everyAlternativeLimitAcronyms ??= EntityLimits.everyAcronyms;
    }

    public get everyPossibleLimitsNames() {
        return this.#everyPossibleLimitsNames ??= [...EntityLimits.everyEnglishNames, ...EntityLimits.everyAlternativeEnglishNames,];
    }

    public get everyLimitsNamesOrUnknown() {
        return this.#everyLimitsNamesOrUnknown ??= [HeaderTypesForConvertorForTestAndDevelopment.#UNKNOWN_CHARACTER, ...EntityLimits.everyEnglishNames,];
    }

    //endregion -------------------- Entity limits getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    public get everyPossibleLimitTypesNames() {
        return this.#everyPossibleLimitTypesNames ??= EntityLimitTypes.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    public get everyPossibleSoundEffectsNames() {
        return this.#everyPossibleSoundEffectsNames ??= SoundEffects.everyEnglishNames;
    }

    public get everyPossibleSoundEffectCategoriesNames() {
        return this.#everyPossibleSoundEffectCategoriesNames ??= SoundEffectCategories.everyEnglishNames;
    }

    //endregion -------------------- Entity limit type getter methods --------------------

}

/**
 * @singleton
 */
class HeaderTypesForConvertorForProduction
    implements HeaderTypesForConvertorDefinition {

    static #instance?: HeaderTypesForConvertorForProduction;

    //region -------------------- Attributes --------------------

    static readonly #STRING_VALUE: StringConstant = 'string';

    //endregion -------------------- Attributes --------------------

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //region -------------------- Entity getter methods --------------------

    public get everyPossibleEntityNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity getter methods --------------------
    //region -------------------- Entity behaviour methods --------------------

    public get everyPossibleBehavioursAcronyms(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    public get everyPossibleBehavioursTranslationKeys(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity behaviour methods --------------------
    //region -------------------- Entity group getter methods --------------------

    public get everyPossibleGroupNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity category getter methods --------------------

    public get everyPossibleEntityCategoriesNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity group getter methods --------------------
    //region -------------------- Entity limits getter methods --------------------

    public get everyPossibleLimitsAcronyms(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    public get everyAlternativeLimitAcronyms(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    public get everyPossibleLimitsNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    public get everyLimitsNamesOrUnknown(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity limits getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    public get everyPossibleLimitTypesNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity limit type getter methods --------------------
    //region -------------------- Entity limit type getter methods --------------------

    public get everyPossibleSoundEffectsNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    public get everyPossibleSoundEffectCategoriesNames(): StringConstant {
        return HeaderTypesForConvertorForProduction.#STRING_VALUE;
    }

    //endregion -------------------- Entity limit type getter methods --------------------

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
const HeaderTypesForConvertor = process.env.NODE_ENV === 'production' ? HeaderTypesForConvertorForProduction.get : HeaderTypesForConvertorForTestAndDevelopment.get;
export {HeaderTypesForConvertor};
