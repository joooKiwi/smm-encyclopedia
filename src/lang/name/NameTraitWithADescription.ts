import type {NameTrait} from 'lang/name/NameTrait'
import type {EveryLanguages} from 'lang/EveryLanguages'
import {Name} from 'lang/name/Name'

export interface NameTraitWithADescription<out T, out U, out DESCRIPTION extends Name<U>, >
    extends NameTrait<T> {

    get descriptionContainer(): DESCRIPTION

    //region -------------------- Properties --------------------

    get descriptionLanguageValue(): this['descriptionContainer']['languageValue']

    //region -------------------- English properties --------------------

    get descriptionOriginalEnglish(): this['descriptionContainer']['originalEnglish']

    get descriptionEnglish(): this['descriptionContainer']['english']

    get descriptionAmericanEnglish(): this['descriptionContainer']['americanEnglish']

    get descriptionEuropeanEnglish(): this['descriptionContainer']['europeanEnglish']

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    get descriptionOriginalFrench(): this['descriptionContainer']['originalFrench']

    get descriptionFrench(): this['descriptionContainer']['french']

    get descriptionCanadianFrench(): this['descriptionContainer']['canadianFrench']

    get descriptionEuropeanFrench(): this['descriptionContainer']['europeanFrench']

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    get descriptionGerman(): this['descriptionContainer']['german']

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    get descriptionOriginalSpanish(): this['descriptionContainer']['originalSpanish']

    get descriptionSpanish(): this['descriptionContainer']['spanish']

    get descriptionAmericanSpanish(): this['descriptionContainer']['americanSpanish']

    get descriptionEuropeanSpanish(): this['descriptionContainer']['europeanSpanish']

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    get descriptionItalian(): this['descriptionContainer']['italian']

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    get descriptionDutch(): this['descriptionContainer']['dutch']

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    get descriptionOriginalPortuguese(): this['descriptionContainer']['originalPortuguese']

    get descriptionPortuguese(): this['descriptionContainer']['portuguese']

    get descriptionAmericanPortuguese(): this['descriptionContainer']['americanPortuguese']

    get descriptionEuropeanPortuguese(): this['descriptionContainer']['europeanPortuguese']

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    get descriptionRussian(): this['descriptionContainer']['russian']

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    get descriptionJapanese(): this['descriptionContainer']['japanese']

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    get descriptionOriginalChinese(): this['descriptionContainer']['originalChinese']

    get descriptionChinese(): this['descriptionContainer']['chinese']

    get descriptionTraditionalChinese(): this['descriptionContainer']['traditionalChinese']

    get descriptionSimplifiedChinese(): this['descriptionContainer']['simplifiedChinese']

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    get descriptionKorean(): this['descriptionContainer']['korean']

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    get descriptionIsHebrewUsed(): this['descriptionContainer']['isHebrewUsed']

    get descriptionHebrew(): this['descriptionContainer']['hebrew']

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    get descriptionIsPolishUsed(): this['descriptionContainer']['isPolishUsed']

    get descriptionPolish(): this['descriptionContainer']['polish']

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    get descriptionIsUkrainianUsed(): this['descriptionContainer']['isUkrainianUsed']

    get descriptionUkrainian(): this['descriptionContainer']['ukrainian']

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    get descriptionIsGreekUsed(): this['descriptionContainer']['isGreekUsed']

    get descriptionGreek(): this['descriptionContainer']['greek']

    //endregion -------------------- Greek properties --------------------

    get descriptionOriginalLanguages(): this['descriptionContainer']['originalLanguages']

    //endregion -------------------- Properties --------------------

    toDescriptionNameMap(): ReadonlyMap<EveryLanguages, U>

}
