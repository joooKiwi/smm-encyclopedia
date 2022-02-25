import type {EveryLanguages}                            from '../EveryLanguages';
import type {Name}                                      from './Name';
import type {NameTrait}                                 from './NameTrait';
import type {NameTraitFromACategory}                    from './NameTraitFromACategory';
import type {ObjectHolder, PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder';

import {ClassContainingAName}         from './ClassContainingAName';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';

export class ClassContainingANameAndACategory<T, U, CATEGORY extends NameTrait<U>, >
    extends ClassContainingAName<T>
    implements NameTraitFromACategory<U, CATEGORY> {

    //region -------------------- Attributes --------------------

    readonly #categoryContainer: ObjectHolder<CATEGORY>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<T>>, category: PossibleValueOnObjectHolder<CATEGORY>,) {
        super(name,);
        this.#categoryContainer = new DelayedObjectHolderContainer(category);
    }

    //region -------------------- Getter methods --------------------

    public get categoryContainer(): CATEGORY {
        return this.#categoryContainer.get;
    }

    public get categoryNameContainer(): this['categoryContainer']['nameContainer'] {
        return this.categoryContainer.nameContainer;
    }


    public get categoryLanguageValue(): this['categoryNameContainer']['languageValue'] {
        return this.categoryNameContainer.languageValue;
    }


    public get categoryOriginalEnglish(): this['categoryNameContainer']['originalEnglish'] {
        return this.categoryNameContainer.originalEnglish;
    }

    public get categoryEnglish(): this['categoryNameContainer']['english'] {
        return this.categoryNameContainer.english;
    }

    public get categoryAmericanEnglish(): this['categoryNameContainer']['americanEnglish'] {
        return this.categoryNameContainer.americanEnglish;
    }

    public get categoryEuropeanEnglish(): this['categoryNameContainer']['europeanEnglish'] {
        return this.categoryNameContainer.europeanEnglish;
    }


    public get categoryOriginalFrench(): this['categoryNameContainer']['originalFrench'] {
        return this.categoryNameContainer.originalFrench;
    }

    public get categoryFrench(): this['categoryNameContainer']['french'] {
        return this.categoryNameContainer.french;
    }

    public get categoryCanadianFrench(): this['categoryNameContainer']['canadianFrench'] {
        return this.categoryNameContainer.canadianFrench;
    }

    public get categoryEuropeanFrench(): this['categoryNameContainer']['europeanFrench'] {
        return this.categoryNameContainer.europeanFrench;
    }


    public get categoryGerman(): this['categoryNameContainer']['german'] {
        return this.categoryNameContainer.german;
    }


    public get categoryOriginalSpanish(): this['categoryNameContainer']['originalSpanish'] {
        return this.categoryNameContainer.originalSpanish;
    }

    public get categorySpanish(): this['categoryNameContainer']['spanish'] {
        return this.categoryNameContainer.spanish;
    }

    public get categoryAmericanSpanish(): this['categoryNameContainer']['americanSpanish'] {
        return this.categoryNameContainer.americanSpanish;
    }

    public get categoryEuropeanSpanish(): this['categoryNameContainer']['europeanSpanish'] {
        return this.categoryNameContainer.europeanSpanish;
    }


    public get categoryItalian(): this['categoryNameContainer']['italian'] {
        return this.categoryNameContainer.italian;
    }


    public get categoryDutch(): this['categoryNameContainer']['dutch'] {
        return this.categoryNameContainer.dutch;
    }


    public get categoryOriginalPortuguese(): this['categoryNameContainer']['originalPortuguese'] {
        return this.categoryNameContainer.originalPortuguese;
    }

    public get categoryPortuguese(): this['categoryNameContainer']['portuguese'] {
        return this.categoryNameContainer.portuguese;
    }

    public get categoryAmericanPortuguese(): this['categoryNameContainer']['americanPortuguese'] {
        return this.categoryNameContainer.americanPortuguese;
    }

    public get categoryEuropeanPortuguese(): this['categoryNameContainer']['europeanPortuguese'] {
        return this.categoryNameContainer.europeanPortuguese;
    }


    public get categoryRussian(): this['categoryNameContainer']['russian'] {
        return this.categoryNameContainer.russian;
    }


    public get categoryJapanese(): this['categoryNameContainer']['japanese'] {
        return this.categoryNameContainer.japanese;
    }


    public get categoryOriginalChinese(): this['categoryNameContainer']['originalChinese'] {
        return this.categoryNameContainer.originalChinese;
    }

    public get categoryChinese(): this['categoryNameContainer']['chinese'] {
        return this.categoryNameContainer.chinese;
    }

    public get categoryTraditionalChinese(): this['categoryNameContainer']['traditionalChinese'] {
        return this.categoryNameContainer.traditionalChinese;
    }

    public get categorySimplifiedChinese(): this['categoryNameContainer']['simplifiedChinese'] {
        return this.categoryNameContainer.simplifiedChinese;
    }


    public get categoryKorean(): this['categoryNameContainer']['korean'] {
        return this.categoryNameContainer.korean;
    }

    public get categoryIsGreekUsed(): this['categoryNameContainer']['isGreekUsed'] {
        return this.categoryNameContainer.isGreekUsed;
    }

    public get categoryGreek(): this['categoryNameContainer']['greek'] {
        return this.categoryNameContainer.german;
    }


    public get categoryOriginalLanguages(): this['categoryNameContainer']['originalLanguages'] {
        return this.categoryNameContainer.originalLanguages;
    }

    //endregion -------------------- Getter methods --------------------

    public toCategoryNameMap(): ReadonlyMap<EveryLanguages, U> {
        return this.categoryNameContainer.toNameMap();
    }

}
