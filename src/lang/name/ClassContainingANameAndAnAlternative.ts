import type {EveryLanguages}                            from '../EveryLanguages';
import type {Name}                                      from './Name';
import type {NameTrait}                                 from './NameTrait';
import type {NameTraitFromAnAlternativeContainer}       from './NameTraitFromAnAlternativeContainer';
import type {ObjectHolder, PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder';

import {ClassContainingAName}         from './ClassContainingAName';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';

export class ClassContainingANameAndAnAlternative<T, U, ALTERNATIVE extends NameTrait<U>, >
    extends ClassContainingAName<T>
    implements NameTraitFromAnAlternativeContainer<U, ALTERNATIVE> {

    //region -------------------- Attributes --------------------

    readonly #alternativeContainer: ObjectHolder<ALTERNATIVE>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<T>>, alternative: PossibleValueOnObjectHolder<ALTERNATIVE>,) {
        super(name,);
        this.#alternativeContainer = new DelayedObjectHolderContainer(alternative);
    }

    //region -------------------- Getter methods --------------------

    public get alternativeContainer(): ALTERNATIVE {
        return this.#alternativeContainer.get;
    }

    public get alternativeNameContainer(): this['alternativeContainer']['nameContainer'] {
        return this.alternativeContainer.nameContainer;
    }


    public get alternativeLanguageValue(): this['alternativeNameContainer']['languageValue'] {
        return this.alternativeNameContainer.languageValue;
    }


    public get alternativeOriginalEnglish(): this['alternativeNameContainer']['originalEnglish'] {
        return this.alternativeNameContainer.originalEnglish;
    }

    public get alternativeEnglish(): this['alternativeNameContainer']['english'] {
        return this.alternativeNameContainer.english;
    }

    public get alternativeAmericanEnglish(): this['alternativeNameContainer']['americanEnglish'] {
        return this.alternativeNameContainer.americanEnglish;
    }

    public get alternativeEuropeanEnglish(): this['alternativeNameContainer']['europeanEnglish'] {
        return this.alternativeNameContainer.europeanEnglish;
    }


    public get alternativeOriginalFrench(): this['alternativeNameContainer']['originalFrench'] {
        return this.alternativeNameContainer.originalFrench;
    }

    public get alternativeFrench(): this['alternativeNameContainer']['french'] {
        return this.alternativeNameContainer.french;
    }

    public get alternativeCanadianFrench(): this['alternativeNameContainer']['canadianFrench'] {
        return this.alternativeNameContainer.canadianFrench;
    }

    public get alternativeEuropeanFrench(): this['alternativeNameContainer']['europeanFrench'] {
        return this.alternativeNameContainer.europeanFrench;
    }


    public get alternativeGerman(): this['alternativeNameContainer']['german'] {
        return this.alternativeNameContainer.german;
    }


    public get alternativeOriginalSpanish(): this['alternativeNameContainer']['originalSpanish'] {
        return this.alternativeNameContainer.originalSpanish;
    }

    public get alternativeSpanish(): this['alternativeNameContainer']['spanish'] {
        return this.alternativeNameContainer.spanish;
    }

    public get alternativeAmericanSpanish(): this['alternativeNameContainer']['americanSpanish'] {
        return this.alternativeNameContainer.americanSpanish;
    }

    public get alternativeEuropeanSpanish(): this['alternativeNameContainer']['europeanSpanish'] {
        return this.alternativeNameContainer.europeanSpanish;
    }


    public get alternativeItalian(): this['alternativeNameContainer']['italian'] {
        return this.alternativeNameContainer.italian;
    }


    public get alternativeDutch(): this['alternativeNameContainer']['dutch'] {
        return this.alternativeNameContainer.dutch;
    }


    public get alternativeOriginalPortuguese(): this['alternativeNameContainer']['originalPortuguese'] {
        return this.alternativeNameContainer.originalPortuguese;
    }

    public get alternativePortuguese(): this['alternativeNameContainer']['portuguese'] {
        return this.alternativeNameContainer.portuguese;
    }

    public get alternativeAmericanPortuguese(): this['alternativeNameContainer']['americanPortuguese'] {
        return this.alternativeNameContainer.americanPortuguese;
    }

    public get alternativeEuropeanPortuguese(): this['alternativeNameContainer']['europeanPortuguese'] {
        return this.alternativeNameContainer.europeanPortuguese;
    }


    public get alternativeRussian(): this['alternativeNameContainer']['russian'] {
        return this.alternativeNameContainer.russian;
    }


    public get alternativeJapanese(): this['alternativeNameContainer']['japanese'] {
        return this.alternativeNameContainer.japanese;
    }


    public get alternativeOriginalChinese(): this['alternativeNameContainer']['originalChinese'] {
        return this.alternativeNameContainer.originalChinese;
    }

    public get alternativeChinese(): this['alternativeNameContainer']['chinese'] {
        return this.alternativeNameContainer.chinese;
    }

    public get alternativeTraditionalChinese(): this['alternativeNameContainer']['traditionalChinese'] {
        return this.alternativeNameContainer.traditionalChinese;
    }

    public get alternativeSimplifiedChinese(): this['alternativeNameContainer']['simplifiedChinese'] {
        return this.alternativeNameContainer.simplifiedChinese;
    }


    public get alternativeKorean(): this['alternativeNameContainer']['korean'] {
        return this.alternativeNameContainer.korean;
    }

    public get alternativeIsGreekUsed(): this['alternativeNameContainer']['isGreekUsed'] {
        return this.alternativeNameContainer.isGreekUsed;
    }

    public get alternativeGreek(): this['alternativeNameContainer']['greek'] {
        return this.alternativeNameContainer.german;
    }


    public get alternativeOriginalLanguages(): this['alternativeNameContainer']['originalLanguages'] {
        return this.alternativeNameContainer.originalLanguages;
    }

    //endregion -------------------- Getter methods --------------------

    public toAlternativeNameMap(): ReadonlyMap<EveryLanguages, U> {
        return this.alternativeNameContainer.toNameMap();
    }

}
