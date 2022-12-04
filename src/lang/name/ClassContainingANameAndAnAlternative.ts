import type {EveryLanguages}                            from 'lang/EveryLanguages'
import type {Name}                                      from 'lang/name/Name'
import type {NameTrait}                                 from 'lang/name/NameTrait'
import type {NameTraitFromAnAlternativeContainer}       from 'lang/name/NameTraitFromAnAlternativeContainer'
import type {ObjectHolder, PossibleValueOnObjectHolder} from 'util/holder/ObjectHolder'

import {ClassContainingAName}         from 'lang/name/ClassContainingAName'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'

export class ClassContainingANameAndAnAlternative<T, U, ALTERNATIVE extends NameTrait<U>, >
    extends ClassContainingAName<T>
    implements NameTraitFromAnAlternativeContainer<U, ALTERNATIVE> {

    //region -------------------- Fields --------------------

    readonly #alternativeContainer: ObjectHolder<ALTERNATIVE>

    //endregion -------------------- Fields --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<T>>, alternative: PossibleValueOnObjectHolder<ALTERNATIVE>,) {
        super(name,)
        this.#alternativeContainer = new DelayedObjectHolderContainer(alternative)
    }

    //region -------------------- Getter methods --------------------

    public get alternativeContainer(): ALTERNATIVE {
        return this.#alternativeContainer.get
    }

    public get alternativeNameContainer(): this['alternativeContainer']['nameContainer'] {
        return this.alternativeContainer.nameContainer
    }


    public get alternativeLanguageValue(): this['alternativeNameContainer']['languageValue'] {
        return this.alternativeNameContainer.languageValue
    }

    //region -------------------- English properties --------------------

    public get alternativeOriginalEnglish(): this['alternativeNameContainer']['originalEnglish'] {
        return this.alternativeNameContainer.originalEnglish
    }

    public get alternativeEnglish(): this['alternativeNameContainer']['english'] {
        return this.alternativeNameContainer.english
    }

    public get alternativeAmericanEnglish(): this['alternativeNameContainer']['americanEnglish'] {
        return this.alternativeNameContainer.americanEnglish
    }

    public get alternativeEuropeanEnglish(): this['alternativeNameContainer']['europeanEnglish'] {
        return this.alternativeNameContainer.europeanEnglish
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get alternativeOriginalFrench(): this['alternativeNameContainer']['originalFrench'] {
        return this.alternativeNameContainer.originalFrench
    }

    public get alternativeFrench(): this['alternativeNameContainer']['french'] {
        return this.alternativeNameContainer.french
    }

    public get alternativeCanadianFrench(): this['alternativeNameContainer']['canadianFrench'] {
        return this.alternativeNameContainer.canadianFrench
    }

    public get alternativeEuropeanFrench(): this['alternativeNameContainer']['europeanFrench'] {
        return this.alternativeNameContainer.europeanFrench
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get alternativeGerman(): this['alternativeNameContainer']['german'] {
        return this.alternativeNameContainer.german
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get alternativeOriginalSpanish(): this['alternativeNameContainer']['originalSpanish'] {
        return this.alternativeNameContainer.originalSpanish
    }

    public get alternativeSpanish(): this['alternativeNameContainer']['spanish'] {
        return this.alternativeNameContainer.spanish
    }

    public get alternativeAmericanSpanish(): this['alternativeNameContainer']['americanSpanish'] {
        return this.alternativeNameContainer.americanSpanish
    }

    public get alternativeEuropeanSpanish(): this['alternativeNameContainer']['europeanSpanish'] {
        return this.alternativeNameContainer.europeanSpanish
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get alternativeItalian(): this['alternativeNameContainer']['italian'] {
        return this.alternativeNameContainer.italian
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get alternativeDutch(): this['alternativeNameContainer']['dutch'] {
        return this.alternativeNameContainer.dutch
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get alternativeOriginalPortuguese(): this['alternativeNameContainer']['originalPortuguese'] {
        return this.alternativeNameContainer.originalPortuguese
    }

    public get alternativePortuguese(): this['alternativeNameContainer']['portuguese'] {
        return this.alternativeNameContainer.portuguese
    }

    public get alternativeAmericanPortuguese(): this['alternativeNameContainer']['americanPortuguese'] {
        return this.alternativeNameContainer.americanPortuguese
    }

    public get alternativeEuropeanPortuguese(): this['alternativeNameContainer']['europeanPortuguese'] {
        return this.alternativeNameContainer.europeanPortuguese
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get alternativeRussian(): this['alternativeNameContainer']['russian'] {
        return this.alternativeNameContainer.russian
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get alternativeJapanese(): this['alternativeNameContainer']['japanese'] {
        return this.alternativeNameContainer.japanese
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get alternativeOriginalChinese(): this['alternativeNameContainer']['originalChinese'] {
        return this.alternativeNameContainer.originalChinese
    }

    public get alternativeChinese(): this['alternativeNameContainer']['chinese'] {
        return this.alternativeNameContainer.chinese
    }

    public get alternativeTraditionalChinese(): this['alternativeNameContainer']['traditionalChinese'] {
        return this.alternativeNameContainer.traditionalChinese
    }

    public get alternativeSimplifiedChinese(): this['alternativeNameContainer']['simplifiedChinese'] {
        return this.alternativeNameContainer.simplifiedChinese
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get alternativeKorean(): this['alternativeNameContainer']['korean'] {
        return this.alternativeNameContainer.korean
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get alternativeIsHebrewUsed(): this['alternativeNameContainer']['isHebrewUsed'] {
        return this.alternativeNameContainer.isHebrewUsed
    }

    public get alternativeHebrew(): this['alternativeNameContainer']['hebrew'] {
        return this.alternativeNameContainer.hebrew
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get alternativeIsPolishUsed(): this['alternativeNameContainer']['isPolishUsed'] {
        return this.alternativeNameContainer.isPolishUsed
    }

    public get alternativePolish(): this['alternativeNameContainer']['polish'] {
        return this.alternativeNameContainer.polish
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get alternativeIsUkrainianUsed(): this['alternativeNameContainer']['isUkrainianUsed'] {
        return this.alternativeNameContainer.isUkrainianUsed
    }

    public get alternativeUkrainian(): this['alternativeNameContainer']['ukrainian'] {
        return this.alternativeNameContainer.ukrainian
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get alternativeIsGreekUsed(): this['alternativeNameContainer']['isGreekUsed'] {
        return this.alternativeNameContainer.isGreekUsed
    }

    public get alternativeGreek(): this['alternativeNameContainer']['greek'] {
        return this.alternativeNameContainer.greek
    }

    //endregion -------------------- Greek properties --------------------

    public get alternativeOriginalLanguages(): this['alternativeNameContainer']['originalLanguages'] {
        return this.alternativeNameContainer.originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toAlternativeNameMap(): ReadonlyMap<EveryLanguages, U> {
        return this.alternativeNameContainer.toNameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
