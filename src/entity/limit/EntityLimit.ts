import type {EntityLimitAmount}                                                   from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                     from './properties/EntityLimitLink';
import type {EntityLimitTypes}                                                    from './EntityLimitTypes';
import type {EveryLanguages}                                                      from '../../lang/EveryLanguages';
import type {Name}                                                                from '../../lang/name/Name';
import type {PossibleAcronymEntityLimits, PossibleAlternativeAcronymEntityLimits} from './EntityLimits.types';

export interface EntityLimit<ACRONYM extends PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null = PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount, >
    extends Name,
        EntityLimitAmount<LIMIT_AMOUNT['amount'], LIMIT_AMOUNT['isAmountUnknown'], LIMIT_AMOUNT['amountComment']>,
        EntityLimitLink {

    get type(): TYPE

    get acronym(): ACRONYM

    get nameContainer(): Name

    //region -------------------- Alternative entity limit --------------------

    get alternativeContainer(): AlternativeEntityLimit

    get alternativeAcronym(): AlternativeEntityLimit['acronym']

    //region -------------------- Name --------------------

    get alternativeNameContainer(): AlternativeEntityLimit['nameContainer']


    get alternativeLanguageValue(): AlternativeEntityLimit['languageValue']


    get alternativeOriginalEnglish(): AlternativeEntityLimit['originalEnglish']

    get alternativeEnglish(): AlternativeEntityLimit['english']

    get alternativeAmericanEnglish(): AlternativeEntityLimit['americanEnglish']

    get alternativeEuropeanEnglish(): AlternativeEntityLimit['europeanEnglish']


    get alternativeOriginalFrench(): AlternativeEntityLimit['originalFrench']

    get alternativeFrench(): AlternativeEntityLimit['french']

    get alternativeCanadianFrench(): AlternativeEntityLimit['canadianFrench']

    get alternativeEuropeanFrench(): AlternativeEntityLimit['europeanFrench']


    get alternativeGerman(): AlternativeEntityLimit['german']


    get alternativeOriginalSpanish(): AlternativeEntityLimit['originalSpanish']

    get alternativeSpanish(): AlternativeEntityLimit['spanish']

    get alternativeAmericanSpanish(): AlternativeEntityLimit['americanSpanish']

    get alternativeEuropeanSpanish(): AlternativeEntityLimit['europeanSpanish']


    get alternativeItalian(): AlternativeEntityLimit['italian']


    get alternativeDutch(): AlternativeEntityLimit['dutch']


    get alternativeOriginalPortuguese(): AlternativeEntityLimit['originalPortuguese']

    get alternativePortuguese(): AlternativeEntityLimit['portuguese']

    get alternativeAmericanPortuguese(): AlternativeEntityLimit['americanPortuguese']

    get alternativeEuropeanPortuguese(): AlternativeEntityLimit['europeanPortuguese']


    get alternativeRussian(): AlternativeEntityLimit['russian']


    get alternativeJapanese(): AlternativeEntityLimit['japanese']


    get alternativeOriginalChinese(): AlternativeEntityLimit['originalChinese']

    get alternativeChinese(): AlternativeEntityLimit['chinese']

    get alternativeSimplifiedChinese(): AlternativeEntityLimit['simplifiedChinese']

    get alternativeTraditionalChinese(): AlternativeEntityLimit['traditionalChinese']


    get alternativeKorean(): AlternativeEntityLimit['korean']


    get alternativeOriginalLanguages(): AlternativeEntityLimit['originalLanguages']


    //endregion -------------------- Name --------------------
    //region -------------------- Limit amount --------------------

    get alternativeAmount(): AlternativeEntityLimit['amount']

    get alternativeIsAmountUnknown(): AlternativeEntityLimit['isAmountUnknown']

    get alternativeAmountComment(): AlternativeEntityLimit['amountComment']

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    get alternativeLinkContainer(): AlternativeEntityLimit['linkContainer']


    get alternativeGroupName(): AlternativeEntityLimit['groupName']


    get alternativeEntities(): AlternativeEntityLimit['entities']

    get alternativeEntity1(): AlternativeEntityLimit['entity1']

    get alternativeEntity2(): AlternativeEntityLimit['entity2']

    //endregion -------------------- Link --------------------

    toAlternativeNameMap(): ReadonlyMap<EveryLanguages, string>

    //endregion -------------------- Alternative entity limit --------------------

    get limitContainer(): LIMIT_AMOUNT

    get linkContainer(): EntityLimitLink

}

export type EntityLimitWithPossibleAlternativeEntityLimit = EntityLimit<| PossibleAcronymEntityLimits | null>;
export type AlternativeEntityLimit = EntityLimit<| PossibleAlternativeAcronymEntityLimits | null, EntityLimitWithPossibleAlternativeEntityLimit['type'], EntityLimitWithPossibleAlternativeEntityLimit['limitContainer']>;
