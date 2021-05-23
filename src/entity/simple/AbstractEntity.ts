import {Entity}           from './Entity';
import {EntityCategory}   from '../category/EntityCategory';
import {EntityReferences} from '../properties/EntityReferences';
import {IsInProperty}     from '../properties/IsInProperty';
import {Name}             from '../../lang/name/Name';

export abstract class AbstractEntity
    implements Entity {

    readonly #name;
    readonly #category;
    readonly #isInProperty;
    readonly #references;

    protected constructor(name: Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        this.#name = name;
        this.#category = category;
        this.#isInProperty = isInProperty;
        this.#references = references;
    }


    //region -------------------- Name properties --------------------

    public get name() {
        return this.#name;
    }


    public get languageValue() {
        return this.name.languageValue;
    }


    public get originalEnglish() {
        return this.name.originalEnglish;
    }

    public get english() {
        return this.name.english;
    }

    public get americanEnglish() {
        return this.name.americanEnglish;
    }

    public get europeanEnglish() {
        return this.name.europeanEnglish;
    }


    public get originalFrench() {
        return this.name.originalFrench;
    }

    public get french() {
        return this.name.french;
    }

    public get canadianFrench() {
        return this.name.canadianFrench;
    }

    public get europeanFrench() {
        return this.name.europeanFrench;
    }


    public get german() {
        return this.name.german;
    }


    public get originalSpanish() {
        return this.name.originalSpanish;
    }

    public get spanish() {
        return this.name.spanish;
    }

    public get americanSpanish() {
        return this.name.americanSpanish;
    }

    public get europeanSpanish() {
        return this.name.europeanSpanish;
    }


    public get italian() {
        return this.name.italian;
    }


    public get dutch() {
        return this.name.dutch;
    }


    public get originalPortuguese() {
        return this.name.originalPortuguese;
    }

    public get portuguese() {
        return this.name.portuguese;
    }

    public get americanPortuguese() {
        return this.name.americanPortuguese;
    }

    public get europeanPortuguese() {
        return this.name.europeanPortuguese;
    }


    public get russian() {
        return this.name.russian;
    }


    public get japanese() {
        return this.name.japanese;
    }


    public get originalChinese() {
        return this.name.originalChinese;
    }

    public get chinese() {
        return this.name.chinese;
    }

    public get simplifiedChinese() {
        return this.name.simplifiedChinese;
    }

    public get traditionalChinese() {
        return this.name.traditionalChinese;
    }


    public get korean() {
        return this.name.korean;
    }

    public get individualValues() {
        return this.name.individualValues;
    }

    //endregion -------------------- Name properties --------------------

    //region -------------------- Category properties --------------------

    public get category() {
        return this.#category;
    }


    public get categoryName() {
        return this.#name;
    }


    public get categoryLanguageValue() {
        return this.categoryName.languageValue;
    }


    public get categoryOriginalEnglish() {
        return this.categoryName.originalEnglish;
    }

    public get categoryEnglish() {
        return this.categoryName.english;
    }

    public get categoryAmericanEnglish() {
        return this.categoryName.americanEnglish;
    }

    public get categoryEuropeanEnglish() {
        return this.categoryName.europeanEnglish;
    }


    public get categoryOriginalFrench() {
        return this.categoryName.originalFrench;
    }

    public get categoryFrench() {
        return this.categoryName.french;
    }

    public get categoryCanadianFrench() {
        return this.categoryName.canadianFrench;
    }

    public get categoryEuropeanFrench() {
        return this.categoryName.europeanFrench;
    }


    public get categoryGerman() {
        return this.categoryName.german;
    }


    public get categoryOriginalSpanish() {
        return this.categoryName.originalSpanish;
    }

    public get categorySpanish() {
        return this.categoryName.spanish;
    }

    public get categoryAmericanSpanish() {
        return this.categoryName.americanSpanish;
    }

    public get categoryEuropeanSpanish() {
        return this.categoryName.europeanSpanish;
    }


    public get categoryItalian() {
        return this.categoryName.italian;
    }


    public get categoryDutch() {
        return this.categoryName.dutch;
    }


    public get categoryOriginalPortuguese() {
        return this.categoryName.originalPortuguese;
    }

    public get categoryPortuguese() {
        return this.categoryName.portuguese;
    }

    public get categoryAmericanPortuguese() {
        return this.categoryName.americanPortuguese;
    }

    public get categoryEuropeanPortuguese() {
        return this.categoryName.europeanPortuguese;
    }


    public get categoryJapanese() {
        return this.categoryName.japanese;
    }


    public get categoryOriginalChinese() {
        return this.categoryName.originalChinese;
    }

    public get categoryChinese() {
        return this.categoryName.chinese;
    }

    public get categorySimplifiedChinese() {
        return this.categoryName.simplifiedChinese;
    }

    public get categoryTraditionalChinese() {
        return this.categoryName.traditionalChinese;
    }


    public get categoryKorean() {
        return this.categoryName.korean;
    }


    public get categoryRussian() {
        return this.categoryName.russian;
    }

    //endregion -------------------- Category properties --------------------

    //region -------------------- Is in properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
    }

    public get isInGame() {
        return this.isInProperty.isInGame;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }


    public get isInSuperMarioBrosStyle() {
        return this.isInProperty.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.isInProperty.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.isInProperty.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.isInProperty.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.isInProperty.isInSuperMario3DWorldStyle;
    }


    public get isInGroundTheme() {
        return this.isInProperty.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.isInProperty.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.isInProperty.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.isInProperty.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.isInProperty.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.isInProperty.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.isInProperty.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.isInProperty.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.isInProperty.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.isInProperty.isInCastleTheme;
    }


    public get isInDayTheme() {
        return this.isInProperty.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInProperty.isInNightTheme;
    }

    //endregion -------------------- Is in properties --------------------

    //region -------------------- References properties --------------------

    public get references() {
        return this.#references;
    }


    public get referenceInSuperMarioBrosStyle() {
        return this.references.referenceInSuperMarioBrosStyle;
    }

    public get referenceInSuperMarioBros3Style() {
        return this.references.referenceInSuperMarioBros3Style;
    }

    public get referenceInSuperMarioWorldStyle() {
        return this.references.referenceInSuperMarioWorldStyle;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return this.references.referenceInNewSuperMarioBrosUStyle;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return this.references.referenceInSuperMario3DWorldStyle;
    }


    public get referenceInGroundTheme() {
        return this.references.referenceInGroundTheme;
    }

    public get referenceInUndergroundTheme() {
        return this.references.referenceInUndergroundTheme;
    }

    public get referenceInUnderwaterTheme() {
        return this.references.referenceInUnderwaterTheme;
    }

    public get referenceInDesertTheme() {
        return this.references.referenceInDesertTheme;
    }

    public get referenceInSnowTheme() {
        return this.references.referenceInSnowTheme;
    }

    public get referenceInSkyTheme() {
        return this.references.referenceInSkyTheme;
    }

    public get referenceInForestTheme() {
        return this.references.referenceInForestTheme;
    }

    public get referenceInGhostHouseTheme() {
        return this.references.referenceInGhostHouseTheme;
    }

    public get referenceInAirshipTheme() {
        return this.references.referenceInAirshipTheme;
    }

    public get referenceInCastleTheme() {
        return this.references.referenceInCastleTheme;
    }


    public get referenceInDayTheme() {
        return this.references.referenceInDayTheme;
    }

    public get referenceInNightTheme() {
        return this.references.referenceInNightTheme;
    }


    public get everyReferences() {
        return this.references.everyReferences;
    }

    //endregion -------------------- References properties --------------------


    public toNameMap() {
        return this.name.toNameMap();
    }

}
