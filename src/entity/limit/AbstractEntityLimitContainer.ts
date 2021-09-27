import type {AlternativeEntityLimit, EntityLimit}                                 from './EntityLimit';
import type {EntityLimitAmount}                                                   from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                     from './properties/EntityLimitLink';
import type {EntityLimitTypes}                                                    from './EntityLimitTypes';
import type {EveryLanguages}                                                      from '../../lang/EveryLanguages';
import type {Name}                                                                from '../../lang/name/Name';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits} from './EntityLimits.types';

import {CallbackCaller} from '../../util/CallbackCaller';

export abstract class AbstractEntityLimitContainer<ACRONYM extends PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null = PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount, >
    implements EntityLimit<ACRONYM, TYPE, LIMIT_AMOUNT> {

    //region -------------------- Attributes --------------------

    readonly #nameContainer: Name;
    readonly #acronym: PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null;
    readonly #alternativeCaller: CallbackCaller<AlternativeEntityLimit>;
    readonly #typeCaller: CallbackCaller<EntityLimitTypes>;
    readonly #limitContainer: EntityLimitAmount;
    readonly #linkContainer: EntityLimitLink;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name, acronym: PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null, alternative: () => AlternativeEntityLimit, type: () => EntityLimitTypes, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        this.#nameContainer = name;
        this.#acronym = acronym;
        this.#alternativeCaller = new CallbackCaller(alternative);
        this.#typeCaller = new CallbackCaller(type);
        this.#limitContainer = limitAmount;
        this.#linkContainer = link;
    }

    //region -------------------- Type --------------------

    public get type(): TYPE {
        return this.#typeCaller.get as TYPE;
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public get acronym(): ACRONYM {
        return this.#acronym as ACRONYM;
    }

    //endregion -------------------- Acronym --------------------
    //region -------------------- Name --------------------

    public get nameContainer(): Name {
        return this.#nameContainer;
    }


    public get languageValue() {
        return this.nameContainer.languageValue;
    }


    public get originalEnglish() {
        return this.nameContainer.originalEnglish;
    }

    public get english() {
        return this.nameContainer.english;
    }

    public get americanEnglish() {
        return this.nameContainer.americanEnglish;
    }

    public get europeanEnglish() {
        return this.nameContainer.europeanEnglish;
    }


    public get originalFrench() {
        return this.nameContainer.originalFrench;
    }

    public get french() {
        return this.nameContainer.french;
    }

    public get canadianFrench() {
        return this.nameContainer.canadianFrench;
    }

    public get europeanFrench() {
        return this.nameContainer.europeanFrench;
    }


    public get german() {
        return this.nameContainer.german;
    }


    public get originalSpanish() {
        return this.nameContainer.originalSpanish;
    }

    public get spanish() {
        return this.nameContainer.spanish;
    }

    public get americanSpanish() {
        return this.nameContainer.americanSpanish;
    }

    public get europeanSpanish() {
        return this.nameContainer.europeanSpanish;
    }


    public get italian() {
        return this.nameContainer.italian;
    }


    public get dutch() {
        return this.nameContainer.dutch;
    }


    public get isPortugueseUsed() {
        return this.nameContainer.isPortugueseUsed;
    }

    public get originalPortuguese() {
        return this.nameContainer.originalPortuguese;
    }

    public get portuguese() {
        return this.nameContainer.portuguese;
    }

    public get americanPortuguese() {
        return this.nameContainer.americanPortuguese;
    }

    public get europeanPortuguese() {
        return this.nameContainer.europeanPortuguese;
    }


    public get russian() {
        return this.nameContainer.russian;
    }


    public get japanese() {
        return this.nameContainer.japanese;
    }


    public get originalChinese() {
        return this.nameContainer.originalChinese;
    }

    public get chinese() {
        return this.nameContainer.chinese;
    }

    public get simplifiedChinese() {
        return this.nameContainer.simplifiedChinese;
    }

    public get traditionalChinese() {
        return this.nameContainer.traditionalChinese;
    }


    public get korean() {
        return this.nameContainer.korean;
    }


    public get originalLanguages() {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name --------------------
    //region -------------------- Alternative entity limit --------------------

    public get alternativeContainer(): AlternativeEntityLimit {
        return this.#alternativeCaller.get;
    }

    public get alternativeAcronym(): this['alternativeContainer']['acronym'] {
        return this.alternativeContainer.acronym;
    }

    //region -------------------- Name --------------------

    public get alternativeNameContainer(): this['alternativeContainer']['nameContainer'] {
        return this.alternativeContainer.nameContainer;
    }


    public get alternativeLanguageValue() {
        return this.alternativeNameContainer.languageValue;
    }


    public get alternativeOriginalEnglish() {
        return this.alternativeNameContainer.originalEnglish;
    }

    public get alternativeEnglish() {
        return this.alternativeNameContainer.english;
    }

    public get alternativeAmericanEnglish() {
        return this.alternativeNameContainer.americanEnglish;
    }

    public get alternativeEuropeanEnglish() {
        return this.alternativeNameContainer.europeanEnglish;
    }


    public get alternativeOriginalFrench() {
        return this.alternativeNameContainer.originalFrench;
    }

    public get alternativeFrench() {
        return this.alternativeNameContainer.french;
    }

    public get alternativeCanadianFrench() {
        return this.alternativeNameContainer.canadianFrench;
    }

    public get alternativeEuropeanFrench() {
        return this.alternativeNameContainer.europeanFrench;
    }


    public get alternativeGerman() {
        return this.alternativeNameContainer.german;
    }


    public get alternativeOriginalSpanish() {
        return this.alternativeNameContainer.originalSpanish;
    }

    public get alternativeSpanish() {
        return this.alternativeNameContainer.spanish;
    }

    public get alternativeAmericanSpanish() {
        return this.alternativeNameContainer.americanSpanish;
    }

    public get alternativeEuropeanSpanish() {
        return this.alternativeNameContainer.europeanSpanish;
    }


    public get alternativeItalian() {
        return this.alternativeNameContainer.italian;
    }


    public get alternativeDutch() {
        return this.alternativeNameContainer.dutch;
    }


    public get alternativeOriginalPortuguese() {
        return this.alternativeNameContainer.originalPortuguese;
    }

    public get alternativePortuguese() {
        return this.alternativeNameContainer.portuguese;
    }

    public get alternativeAmericanPortuguese() {
        return this.alternativeNameContainer.americanPortuguese;
    }

    public get alternativeEuropeanPortuguese() {
        return this.alternativeNameContainer.europeanPortuguese;
    }


    public get alternativeRussian() {
        return this.alternativeNameContainer.russian;
    }


    public get alternativeJapanese() {
        return this.alternativeNameContainer.japanese;
    }


    public get alternativeOriginalChinese() {
        return this.alternativeNameContainer.originalChinese;
    }

    public get alternativeChinese() {
        return this.alternativeNameContainer.chinese;
    }

    public get alternativeSimplifiedChinese() {
        return this.alternativeNameContainer.simplifiedChinese;
    }

    public get alternativeTraditionalChinese() {
        return this.alternativeNameContainer.traditionalChinese;
    }


    public get alternativeKorean() {
        return this.alternativeNameContainer.korean;
    }


    public get alternativeOriginalLanguages() {
        return this.alternativeNameContainer.originalLanguages;
    }

    //endregion -------------------- Name --------------------
    //region -------------------- Limit amount --------------------

    public get alternativeLimitContainer(): this['alternativeContainer']['limitContainer'] {
        return this.alternativeContainer.limitContainer;
    }


    public get alternativeAmount(): this['alternativeLimitContainer']['amount'] {
        return this.alternativeLimitContainer.amount;
    }

    public get alternativeIsAmountUnknown(): this['alternativeLimitContainer']['isAmountUnknown'] {
        return this.alternativeLimitContainer.isAmountUnknown;
    }

    public get alternativeAmountComment(): this['alternativeLimitContainer']['amountComment'] {
        return this.alternativeLimitContainer.amountComment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get alternativeLinkContainer(): this['alternativeContainer']['linkContainer'] {
        return this.alternativeContainer.linkContainer;
    }


    public get alternativeGroupName(): this['alternativeLinkContainer']['groupName'] {
        return this.alternativeLinkContainer.groupName;
    }


    public get alternativeEntities(): this['alternativeLinkContainer']['entities'] {
        return this.alternativeLinkContainer.entities;
    }

    public get alternativeEntity1(): this['alternativeEntities'][0] {
        return this.alternativeEntities[0];
    }

    public get alternativeEntity2(): this['alternativeEntities'][1] {
        return this.alternativeEntities[1];
    }

    //endregion -------------------- Link --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public get limitContainer(): LIMIT_AMOUNT {
        return this.#limitContainer as LIMIT_AMOUNT;
    }


    public get amount(): this['limitContainer']['amount'] {
        return this.limitContainer.amount;
    }

    public get isAmountUnknown(): this['limitContainer']['isAmountUnknown'] {
        return this.limitContainer.isAmountUnknown;
    }

    public get amountComment(): this['limitContainer']['amountComment'] {
        return this.limitContainer.amountComment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get linkContainer(): EntityLimitLink {
        return this.#linkContainer;
    }


    public get groupName(): this['linkContainer']['groupName'] {
        return this.linkContainer.groupName;
    }


    public get entities(): this['linkContainer']['entities'] {
        return this.linkContainer.entities;
    }

    public get entity1(): this['entities'][0] {
        return this.entities[0];
    }

    public get entity2(): this['entities'][1] {
        return this.entities[1];
    }

    //endregion -------------------- Link --------------------

    public toAlternativeNameMap(): ReadonlyMap<EveryLanguages, string> {
        return this.alternativeNameContainer.toNameMap();
    }

    public toNameMap(): ReadonlyMap<EveryLanguages, string> {
        return this.nameContainer.toNameMap();
    }

}
