import type {EntityLimit}       from './EntityLimit';
import type {EntityLimitAmount} from './properties/EntityLimitAmount';
import type {EntityLimitLink}   from './properties/EntityLimitLink';

import {EMPTY_OBJECT} from '../../util/emptyVariables';
import {EmptyName}    from '../../lang/name/EmptyName';

/**
 * @singleton
 */
export class EmptyEntityLimit
    implements EntityLimit {

    public static readonly EMPTY_LIMIT_AMOUNT: EntityLimitAmount<null, false, null> = {
        amount: null,
        isAmountUnknown: false,
        amountComment: null,
    };
    public static readonly EMPTY_LINK_CONTAINER: EntityLimitLink<{}, {}> = {
        groupName: EMPTY_OBJECT,
        entityName: EMPTY_OBJECT,
    };

    static readonly #instance = new EmptyEntityLimit();

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    //region -------------------- Type --------------------

    public get type(): never {
        throw new EvalError(`No types is compatible with an ${this}.`);
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public readonly acronym = null;

    //endregion -------------------- Acronym --------------------
    //region -------------------- Name --------------------

    public readonly nameContainer = EmptyName.get;

    public readonly languageValue = this.nameContainer.languageValue;

    public readonly originalEnglish = this.nameContainer.originalEnglish;
    public readonly english = this.nameContainer.english;
    public readonly americanEnglish = this.nameContainer.americanEnglish;
    public readonly europeanEnglish = this.nameContainer.europeanEnglish;

    public readonly originalFrench = this.nameContainer.originalFrench;
    public readonly french = this.nameContainer.french;
    public readonly canadianFrench = this.nameContainer.canadianFrench;
    public readonly europeanFrench = this.nameContainer.europeanFrench;

    public readonly german = this.nameContainer.german;

    public readonly originalSpanish = this.nameContainer.originalSpanish;
    public readonly spanish = this.nameContainer.spanish;
    public readonly americanSpanish = this.nameContainer.americanSpanish;
    public readonly europeanSpanish = this.nameContainer.europeanSpanish;

    public readonly italian = this.nameContainer.italian;

    public readonly dutch = this.nameContainer.dutch;

    public readonly isPortugueseUsed = this.nameContainer.isPortugueseUsed;
    public readonly originalPortuguese = this.nameContainer.originalPortuguese;
    public readonly portuguese = this.nameContainer.portuguese;
    public readonly americanPortuguese = this.nameContainer.americanPortuguese;
    public readonly europeanPortuguese = this.nameContainer.europeanPortuguese;

    public readonly russian = this.nameContainer.russian;

    public readonly japanese = this.nameContainer.japanese;

    public readonly originalChinese = this.nameContainer.originalChinese;
    public readonly chinese = this.nameContainer.chinese;
    public readonly traditionalChinese = this.nameContainer.traditionalChinese;
    public readonly simplifiedChinese = this.nameContainer.simplifiedChinese;

    public readonly korean = this.nameContainer.korean;

    public readonly originalLanguages = this.nameContainer.originalLanguages;

    //endregion -------------------- Name --------------------
    //region -------------------- Alternative entity limit --------------------

    public readonly alternativeContainer = this;

    public readonly alternativeAcronym = null;

    //region -------------------- Name --------------------

    public readonly alternativeNameContainer = EmptyName.get;

    public readonly alternativeLanguageValue = this.alternativeNameContainer.languageValue;

    public readonly alternativeOriginalEnglish = this.alternativeNameContainer.originalEnglish;
    public readonly alternativeEnglish = this.alternativeNameContainer.english;
    public readonly alternativeAmericanEnglish = this.alternativeNameContainer.americanEnglish;
    public readonly alternativeEuropeanEnglish = this.alternativeNameContainer.europeanEnglish;

    public readonly alternativeOriginalFrench = this.alternativeNameContainer.originalFrench;
    public readonly alternativeFrench = this.alternativeNameContainer.french;
    public readonly alternativeCanadianFrench = this.alternativeNameContainer.canadianFrench;
    public readonly alternativeEuropeanFrench = this.alternativeNameContainer.europeanFrench;

    public readonly alternativeGerman = this.alternativeNameContainer.german;

    public readonly alternativeOriginalSpanish = this.alternativeNameContainer.originalSpanish;
    public readonly alternativeSpanish = this.alternativeNameContainer.spanish;
    public readonly alternativeAmericanSpanish = this.alternativeNameContainer.americanSpanish;
    public readonly alternativeEuropeanSpanish = this.alternativeNameContainer.europeanSpanish;

    public readonly alternativeItalian = this.alternativeNameContainer.italian;

    public readonly alternativeDutch = this.alternativeNameContainer.dutch;

    public readonly alternativeIsPortugueseUsed = this.alternativeNameContainer.isPortugueseUsed;
    public readonly alternativeOriginalPortuguese = this.alternativeNameContainer.originalPortuguese;
    public readonly alternativePortuguese = this.alternativeNameContainer.portuguese;
    public readonly alternativeAmericanPortuguese = this.alternativeNameContainer.americanPortuguese;
    public readonly alternativeEuropeanPortuguese = this.alternativeNameContainer.europeanPortuguese;

    public readonly alternativeRussian = this.alternativeNameContainer.russian;

    public readonly alternativeJapanese = this.alternativeNameContainer.japanese;

    public readonly alternativeOriginalChinese = this.alternativeNameContainer.originalChinese;
    public readonly alternativeChinese = this.alternativeNameContainer.chinese;
    public readonly alternativeTraditionalChinese = this.alternativeNameContainer.traditionalChinese;
    public readonly alternativeSimplifiedChinese = this.alternativeNameContainer.simplifiedChinese;

    public readonly alternativeKorean = this.alternativeNameContainer.korean;

    public readonly alternativeOriginalLanguages = this.alternativeNameContainer.originalLanguages;

    //endregion -------------------- Name --------------------
    //region -------------------- Limit amount --------------------

    public readonly alternativeLimitContainer = EmptyEntityLimit.EMPTY_LIMIT_AMOUNT;

    public readonly alternativeAmount = this.alternativeLimitContainer.amount;
    public readonly alternativeIsAmountUnknown = this.alternativeLimitContainer.isAmountUnknown;
    public readonly alternativeAmountComment = this.alternativeLimitContainer.amountComment;

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public readonly alternativeLinkContainer = EmptyEntityLimit.EMPTY_LINK_CONTAINER;

    public readonly alternativeGroupName = this.alternativeLinkContainer.groupName;
    public readonly alternativeEntityName = this.alternativeLinkContainer.entityName;

    //endregion -------------------- Link --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public readonly limitContainer = EmptyEntityLimit.EMPTY_LIMIT_AMOUNT;

    public readonly amount = this.limitContainer.amount;
    public readonly isAmountUnknown = this.limitContainer.isAmountUnknown;
    public readonly amountComment = this.limitContainer.amountComment;

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public readonly linkContainer = EmptyEntityLimit.EMPTY_LINK_CONTAINER;

    public readonly groupName = this.linkContainer.groupName;
    public readonly entityName = this.linkContainer.entityName;

    //endregion -------------------- Link --------------------

    public toAlternativeNameMap() {
        return this.alternativeNameContainer.toNameMap();
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }


    public toString(): 'Empty entity limit' {
        return 'Empty entity limit';
    }

}