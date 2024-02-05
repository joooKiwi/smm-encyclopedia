import type {EveryLanguages}            from 'lang/EveryLanguages'
import type {Name}                      from 'lang/name/Name'
import type {NameTraitWithADescription} from 'lang/name/NameTraitWithADescription'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class ClassContainingANameWithADescription<const out T, const out U, const out DESCRIPTION extends Name<U>, >
    extends ClassContainingAName<T>
    implements NameTraitWithADescription<T, U, DESCRIPTION> {

    //region -------------------- Fields --------------------

    readonly #descriptionContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<T>, description: DESCRIPTION,) {
        super(name,)
        this.#descriptionContainer = description
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get descriptionContainer(): DESCRIPTION {
        return this.#descriptionContainer
    }

    public get descriptionLanguageValue(): this['descriptionContainer']['languageValue'] {
        return this.descriptionContainer.languageValue
    }

    //region -------------------- English properties --------------------

    public get descriptionOriginalEnglish(): this['descriptionContainer']['originalEnglish'] {
        return this.descriptionContainer.originalEnglish
    }

    public get descriptionEnglish(): this['descriptionContainer']['english'] {
        return this.descriptionContainer.english
    }

    public get descriptionAmericanEnglish(): this['descriptionContainer']['americanEnglish'] {
        return this.descriptionContainer.americanEnglish
    }

    public get descriptionEuropeanEnglish(): this['descriptionContainer']['europeanEnglish'] {
        return this.descriptionContainer.europeanEnglish
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get descriptionOriginalFrench(): this['descriptionContainer']['originalFrench'] {
        return this.descriptionContainer.originalFrench
    }

    public get descriptionFrench(): this['descriptionContainer']['french'] {
        return this.descriptionContainer.french
    }

    public get descriptionCanadianFrench(): this['descriptionContainer']['canadianFrench'] {
        return this.descriptionContainer.canadianFrench
    }

    public get descriptionEuropeanFrench(): this['descriptionContainer']['europeanFrench'] {
        return this.descriptionContainer.europeanFrench
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get descriptionGerman(): this['descriptionContainer']['german'] {
        return this.descriptionContainer.german
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get descriptionOriginalSpanish(): this['descriptionContainer']['originalSpanish'] {
        return this.descriptionContainer.originalSpanish
    }

    public get descriptionSpanish(): this['descriptionContainer']['spanish'] {
        return this.descriptionContainer.spanish
    }

    public get descriptionAmericanSpanish(): this['descriptionContainer']['americanSpanish'] {
        return this.descriptionContainer.americanSpanish
    }

    public get descriptionEuropeanSpanish(): this['descriptionContainer']['europeanSpanish'] {
        return this.descriptionContainer.europeanSpanish
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get descriptionItalian(): this['descriptionContainer']['italian'] {
        return this.descriptionContainer.italian
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get descriptionDutch(): this['descriptionContainer']['dutch'] {
        return this.descriptionContainer.dutch
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get descriptionOriginalPortuguese(): this['descriptionContainer']['originalPortuguese'] {
        return this.descriptionContainer.originalPortuguese
    }

    public get descriptionPortuguese(): this['descriptionContainer']['portuguese'] {
        return this.descriptionContainer.portuguese
    }

    public get descriptionAmericanPortuguese(): this['descriptionContainer']['americanPortuguese'] {
        return this.descriptionContainer.americanPortuguese
    }

    public get descriptionEuropeanPortuguese(): this['descriptionContainer']['europeanPortuguese'] {
        return this.descriptionContainer.europeanPortuguese
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get descriptionRussian(): this['descriptionContainer']['russian'] {
        return this.descriptionContainer.russian
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get descriptionJapanese(): this['descriptionContainer']['japanese'] {
        return this.descriptionContainer.japanese
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get descriptionOriginalChinese(): this['descriptionContainer']['originalChinese'] {
        return this.descriptionContainer.originalChinese
    }

    public get descriptionChinese(): this['descriptionContainer']['chinese'] {
        return this.descriptionContainer.chinese
    }

    public get descriptionTraditionalChinese(): this['descriptionContainer']['traditionalChinese'] {
        return this.descriptionContainer.traditionalChinese
    }

    public get descriptionSimplifiedChinese(): this['descriptionContainer']['simplifiedChinese'] {
        return this.descriptionContainer.simplifiedChinese
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get descriptionKorean(): this['descriptionContainer']['korean'] {
        return this.descriptionContainer.korean
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get descriptionIsHebrewUsed(): this['descriptionContainer']['isHebrewUsed'] {
        return this.descriptionContainer.isHebrewUsed
    }

    public get descriptionHebrew(): this['descriptionContainer']['hebrew'] {
        return this.descriptionContainer.hebrew
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get descriptionIsPolishUsed(): this['descriptionContainer']['isPolishUsed'] {
        return this.descriptionContainer.isPolishUsed
    }

    public get descriptionPolish(): this['descriptionContainer']['polish'] {
        return this.descriptionContainer.polish
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get descriptionIsUkrainianUsed(): this['descriptionContainer']['isUkrainianUsed'] {
        return this.descriptionContainer.isUkrainianUsed
    }

    public get descriptionUkrainian(): this['descriptionContainer']['ukrainian'] {
        return this.descriptionContainer.ukrainian
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get descriptionIsGreekUsed(): this['descriptionContainer']['isGreekUsed'] {
        return this.descriptionContainer.isGreekUsed
    }

    public get descriptionGreek(): this['descriptionContainer']['greek'] {
        return this.descriptionContainer.greek
    }

    //endregion -------------------- Greek properties --------------------

    public get descriptionOriginalLanguages(): this['descriptionContainer']['originalLanguages'] {
        return this.descriptionContainer.originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //endregion -------------------- Convertor methods --------------------

    public toDescriptionNameMap(): ReadonlyMap<EveryLanguages, U> {
        return this.descriptionContainer.toNameMap()
    }

    //region -------------------- Convertor methods --------------------


}
