import type {SoundEffect}    from './SoundEffect';
import {SoundEffectCategory} from '../category/SoundEffectCategory';
import {Name}                from '../../../lang/name/Name';
import {EveryLanguages}      from '../../../lang/EveryLanguages';
import {SoundEffectProperty} from './properties/SoundEffectProperty';

export class SoundEffectContainer
    implements SoundEffect {

    //region -------------------- Attributes --------------------

    readonly #nameContainer;
    readonly #category;
    readonly #propertyContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, category: SoundEffectCategory, property: SoundEffectProperty,) {
        this.#nameContainer = name;
        this.#category = category;
        this.#propertyContainer = property;
    }

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
    //region -------------------- Category properties --------------------

    public get category(): SoundEffectCategory {
        return this.#category;
    }


    public get categoryName(): this['category']['nameContainer'] {
        return this.category.nameContainer;
    }


    public get categoryLanguageValue(): this['categoryName']['languageValue'] {
        return this.categoryName.languageValue;
    }


    public get categoryOriginalEnglish(): this['categoryName']['originalEnglish'] {
        return this.categoryName.originalEnglish;
    }

    public get categoryEnglish(): this['categoryName']['english'] {
        return this.categoryName.english;
    }

    public get categoryAmericanEnglish(): this['categoryName']['americanEnglish'] {
        return this.categoryName.americanEnglish;
    }

    public get categoryEuropeanEnglish(): this['categoryName']['europeanEnglish'] {
        return this.categoryName.europeanEnglish;
    }


    public get categoryOriginalFrench(): this['categoryName']['originalFrench'] {
        return this.categoryName.originalFrench;
    }

    public get categoryFrench(): this['categoryName']['french'] {
        return this.categoryName.french;
    }

    public get categoryCanadianFrench(): this['categoryName']['canadianFrench'] {
        return this.categoryName.canadianFrench;
    }

    public get categoryEuropeanFrench(): this['categoryName']['europeanFrench'] {
        return this.categoryName.europeanFrench;
    }


    public get categoryGerman(): this['categoryName']['german'] {
        return this.categoryName.german;
    }


    public get categoryOriginalSpanish(): this['categoryName']['originalSpanish'] {
        return this.categoryName.originalSpanish;
    }

    public get categorySpanish(): this['categoryName']['spanish'] {
        return this.categoryName.spanish;
    }

    public get categoryAmericanSpanish(): this['categoryName']['americanSpanish'] {
        return this.categoryName.americanSpanish;
    }

    public get categoryEuropeanSpanish(): this['categoryName']['europeanSpanish'] {
        return this.categoryName.europeanSpanish;
    }


    public get categoryItalian(): this['categoryName']['italian'] {
        return this.categoryName.italian;
    }


    public get categoryDutch(): this['categoryName']['dutch'] {
        return this.categoryName.dutch;
    }


    public get categoryOriginalPortuguese(): this['categoryName']['originalPortuguese'] {
        return this.categoryName.originalPortuguese;
    }

    public get categoryPortuguese(): this['categoryName']['portuguese'] {
        return this.categoryName.portuguese;
    }

    public get categoryAmericanPortuguese(): this['categoryName']['americanPortuguese'] {
        return this.categoryName.americanPortuguese;
    }

    public get categoryEuropeanPortuguese(): this['categoryName']['europeanPortuguese'] {
        return this.categoryName.europeanPortuguese;
    }


    public get categoryRussian(): this['categoryName']['russian'] {
        return this.categoryName.russian;
    }


    public get categoryJapanese(): this['categoryName']['japanese'] {
        return this.categoryName.japanese;
    }


    public get categoryOriginalChinese(): this['categoryName']['originalChinese'] {
        return this.categoryName.originalChinese;
    }

    public get categoryChinese(): this['categoryName']['chinese'] {
        return this.categoryName.chinese;
    }

    public get categoryTraditionalChinese(): this['categoryName']['traditionalChinese'] {
        return this.categoryName.traditionalChinese;
    }

    public get categorySimplifiedChinese(): this['categoryName']['simplifiedChinese'] {
        return this.categoryName.simplifiedChinese;
    }


    public get categoryKorean(): this['categoryName']['korean'] {
        return this.categoryName.korean;
    }

    public get categoryIsGreekUsed(): this['categoryName']['isGreekUsed'] {
        return this.categoryName.isGreekUsed;
    }

    public get categoryGreek(): this['categoryName']['greek'] {
        return this.categoryName.german;
    }


    public get categoryOriginalLanguages(): this['categoryName']['originalLanguages'] {
        return this.categoryName.originalLanguages;
    }

    //endregion -------------------- Category properties --------------------
    //region -------------------- Properties --------------------

    public get propertyContainer(): SoundEffectProperty {
        return this.#propertyContainer;
    }

    //region -------------------- Game properties --------------------

    public get gameContainer(): this['propertyContainer']['gameContainer'] {
        return this.propertyContainer.gameContainer;
    }

    public get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1'] {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2'] {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

    //endregion -------------------- Properties --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, string> {
        return this.nameContainer.toNameMap();
    }

}
