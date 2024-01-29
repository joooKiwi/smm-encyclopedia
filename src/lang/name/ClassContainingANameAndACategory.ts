import type {Lazy} from '@joookiwi/lazy'

import type {EveryLanguages}         from 'lang/EveryLanguages'
import type {Name}                   from 'lang/name/Name'
import type {NameTrait}              from 'lang/name/NameTrait'
import type {NameTraitFromACategory} from 'lang/name/NameTraitFromACategory'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class ClassContainingANameAndACategory<const out T, const out U, const out CATEGORY extends NameTrait<U>, >
    extends ClassContainingAName<T>
    implements NameTraitFromACategory<U, CATEGORY> {

    //region -------------------- Fields --------------------

    readonly #categoryContainer: Lazy<CATEGORY>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<T>, category: Lazy<CATEGORY>,) {
        super(name,)
        this.#categoryContainer = category
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get categoryContainer(): CATEGORY {
        return this.#categoryContainer.value
    }

    public get categoryNameContainer(): this['categoryContainer']['nameContainer'] {
        return this.categoryContainer.nameContainer
    }


    public get categoryLanguageValue(): this['categoryNameContainer']['languageValue'] {
        return this.categoryNameContainer.languageValue
    }

    //region -------------------- English properties --------------------

    public get categoryOriginalEnglish(): this['categoryNameContainer']['originalEnglish'] {
        return this.categoryNameContainer.originalEnglish
    }

    public get categoryEnglish(): this['categoryNameContainer']['english'] {
        return this.categoryNameContainer.english
    }

    public get categoryAmericanEnglish(): this['categoryNameContainer']['americanEnglish'] {
        return this.categoryNameContainer.americanEnglish
    }

    public get categoryEuropeanEnglish(): this['categoryNameContainer']['europeanEnglish'] {
        return this.categoryNameContainer.europeanEnglish
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get categoryOriginalFrench(): this['categoryNameContainer']['originalFrench'] {
        return this.categoryNameContainer.originalFrench
    }

    public get categoryFrench(): this['categoryNameContainer']['french'] {
        return this.categoryNameContainer.french
    }

    public get categoryCanadianFrench(): this['categoryNameContainer']['canadianFrench'] {
        return this.categoryNameContainer.canadianFrench
    }

    public get categoryEuropeanFrench(): this['categoryNameContainer']['europeanFrench'] {
        return this.categoryNameContainer.europeanFrench
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get categoryGerman(): this['categoryNameContainer']['german'] {
        return this.categoryNameContainer.german
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get categoryOriginalSpanish(): this['categoryNameContainer']['originalSpanish'] {
        return this.categoryNameContainer.originalSpanish
    }

    public get categorySpanish(): this['categoryNameContainer']['spanish'] {
        return this.categoryNameContainer.spanish
    }

    public get categoryAmericanSpanish(): this['categoryNameContainer']['americanSpanish'] {
        return this.categoryNameContainer.americanSpanish
    }

    public get categoryEuropeanSpanish(): this['categoryNameContainer']['europeanSpanish'] {
        return this.categoryNameContainer.europeanSpanish
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get categoryItalian(): this['categoryNameContainer']['italian'] {
        return this.categoryNameContainer.italian
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get categoryDutch(): this['categoryNameContainer']['dutch'] {
        return this.categoryNameContainer.dutch
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get categoryOriginalPortuguese(): this['categoryNameContainer']['originalPortuguese'] {
        return this.categoryNameContainer.originalPortuguese
    }

    public get categoryPortuguese(): this['categoryNameContainer']['portuguese'] {
        return this.categoryNameContainer.portuguese
    }

    public get categoryAmericanPortuguese(): this['categoryNameContainer']['americanPortuguese'] {
        return this.categoryNameContainer.americanPortuguese
    }

    public get categoryEuropeanPortuguese(): this['categoryNameContainer']['europeanPortuguese'] {
        return this.categoryNameContainer.europeanPortuguese
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get categoryRussian(): this['categoryNameContainer']['russian'] {
        return this.categoryNameContainer.russian
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get categoryJapanese(): this['categoryNameContainer']['japanese'] {
        return this.categoryNameContainer.japanese
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get categoryOriginalChinese(): this['categoryNameContainer']['originalChinese'] {
        return this.categoryNameContainer.originalChinese
    }

    public get categoryChinese(): this['categoryNameContainer']['chinese'] {
        return this.categoryNameContainer.chinese
    }

    public get categoryTraditionalChinese(): this['categoryNameContainer']['traditionalChinese'] {
        return this.categoryNameContainer.traditionalChinese
    }

    public get categorySimplifiedChinese(): this['categoryNameContainer']['simplifiedChinese'] {
        return this.categoryNameContainer.simplifiedChinese
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get categoryKorean(): this['categoryNameContainer']['korean'] {
        return this.categoryNameContainer.korean
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get categoryIsHebrewUsed(): this['categoryNameContainer']['isHebrewUsed'] {
        return this.categoryNameContainer.isHebrewUsed
    }

    public get categoryHebrew(): this['categoryNameContainer']['hebrew'] {
        return this.categoryNameContainer.hebrew
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get categoryIsPolishUsed(): this['categoryNameContainer']['isPolishUsed'] {
        return this.categoryNameContainer.isPolishUsed
    }

    public get categoryPolish(): this['categoryNameContainer']['polish'] {
        return this.categoryNameContainer.polish
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get categoryIsUkrainianUsed(): this['categoryNameContainer']['isUkrainianUsed'] {
        return this.categoryNameContainer.isUkrainianUsed
    }

    public get categoryUkrainian(): this['categoryNameContainer']['ukrainian'] {
        return this.categoryNameContainer.ukrainian
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get categoryIsGreekUsed(): this['categoryNameContainer']['isGreekUsed'] {
        return this.categoryNameContainer.isGreekUsed
    }

    public get categoryGreek(): this['categoryNameContainer']['greek'] {
        return this.categoryNameContainer.german
    }

    //endregion -------------------- Greek properties --------------------

    public get categoryOriginalLanguages(): this['categoryNameContainer']['originalLanguages'] {
        return this.categoryNameContainer.originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //endregion -------------------- Convertor methods --------------------

    public toCategoryNameMap(): ReadonlyMap<EveryLanguages, U> {
        return this.categoryNameContainer.toNameMap()
    }

    //region -------------------- Convertor methods --------------------

}
