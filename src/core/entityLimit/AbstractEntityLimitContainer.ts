import type {AlternativeEntityLimit, EntityLimit}         from './EntityLimit';
import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitLink}                             from './properties/EntityLimitLink';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {EveryLanguages}                              from '../../lang/EveryLanguages';
import type {Name}                                        from '../../lang/name/Name';
import type {ObjectHolder}                                from '../../util/holder/ObjectHolder';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export abstract class AbstractEntityLimitContainer<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount,
    LINK extends EntityLimitLink = EntityLimitLink, >
    implements EntityLimit<ACRONYM, TYPE, LIMIT_AMOUNT, LINK> {

    //region -------------------- Attributes --------------------

    readonly #nameContainer: Name;
    readonly #acronym: PossibleAcronym | PossibleAlternativeAcronym | null;
    readonly #alternativeCaller: ObjectHolder<AlternativeEntityLimit>;
    readonly #typeCaller: ObjectHolder<EntityLimitTypes>;
    readonly #limitContainer: EntityLimitAmount;
    readonly #linkContainer: EntityLimitLink;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name, acronym: PossibleAcronym | PossibleAlternativeAcronym | null, alternative: () => AlternativeEntityLimit, type: () => EntityLimitTypes, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        this.#nameContainer = name;
        this.#acronym = acronym;
        this.#alternativeCaller = new DelayedObjectHolderContainer(alternative);
        this.#typeCaller = new DelayedObjectHolderContainer(type);
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

    public get traditionalChinese() {
        return this.nameContainer.traditionalChinese;
    }

    public get simplifiedChinese() {
        return this.nameContainer.simplifiedChinese;
    }


    public get korean() {
        return this.nameContainer.korean;
    }


    public get isGreekUsed() {
        return this.nameContainer.isGreekUsed;
    }

    public get greek() {
        return this.nameContainer.greek;
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

    public get alternativeTraditionalChinese() {
        return this.alternativeNameContainer.traditionalChinese;
    }

    public get alternativeSimplifiedChinese() {
        return this.alternativeNameContainer.simplifiedChinese;
    }


    public get alternativeKorean() {
        return this.alternativeNameContainer.korean;
    }


    public get alternativeIsGreekUsed() {
        return this.alternativeNameContainer.isGreekUsed;
    }

    public get alternativeGreek() {
        return this.alternativeNameContainer.greek;
    }


    public get alternativeOriginalLanguages() {
        return this.alternativeNameContainer.originalLanguages;
    }

    //endregion -------------------- Name --------------------
    //region -------------------- Limit amount --------------------

    public get alternativeLimitContainer(): this['alternativeContainer']['limitContainer'] {
        return this.alternativeContainer.limitContainer;
    }


    public get alternativeAmount(): this['alternativeLimitContainer']['value'] {
        return this.alternativeLimitContainer.value;
    }

    public get alternativeIsAmountUnknown(): this['alternativeLimitContainer']['isUnknown'] {
        return this.alternativeLimitContainer.isUnknown;
    }

    public get alternativeAmountComment(): this['alternativeLimitContainer']['comment'] {
        return this.alternativeLimitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get alternativeLinkContainer(): this['alternativeContainer']['linkContainer'] {
        return this.alternativeContainer.linkContainer;
    }


    public get alternativeGroupLink(): this['alternativeLinkContainer']['group'] {
        return this.alternativeLinkContainer.group;
    }


    public get alternativeEntityLink(): this['alternativeLinkContainer']['entity'] {
        return this.alternativeLinkContainer.entity;
    }

    //endregion -------------------- Link --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public get limitContainer(): LIMIT_AMOUNT {
        return this.#limitContainer as LIMIT_AMOUNT;
    }


    public get amount(): this['limitContainer']['value'] {
        return this.limitContainer.value;
    }

    public get isAmountUnknown(): this['limitContainer']['isUnknown'] {
        return this.limitContainer.isUnknown;
    }

    public get amountComment(): this['limitContainer']['comment'] {
        return this.limitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get linkContainer(): LINK {
        return this.#linkContainer as LINK;
    }


    public get groupLink(): this['linkContainer']['group'] {
        return this.linkContainer.group;
    }


    public get entityLink(): this['linkContainer']['entity'] {
        return this.linkContainer.entity;
    }

    //endregion -------------------- Link --------------------

    public toAlternativeNameMap(): ReadonlyMap<EveryLanguages, string> {
        return this.alternativeNameContainer.toNameMap();
    }

    public toNameMap(): ReadonlyMap<EveryLanguages, string> {
        return this.nameContainer.toNameMap();
    }

}