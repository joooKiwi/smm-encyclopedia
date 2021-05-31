import {EMPTY_MAP}            from '../../util/emptyVariables';
import {EmptyIsInProperty}    from '../properties/EmptyIsInProperty';
import {EmptyEntityReference} from '../properties/EmptyEntityReference';
import {EmptyEntityCategory}  from '../category/EmptyEntityCategory';
import {EmptyName}            from '../../lang/name/EmptyName';
import {Entity}               from './Entity';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntity
    implements Entity {

    private static readonly instance = new EmptyEntity();

    private constructor() {
    }

    public static get get() {
        return this.instance;
    }


    //region -------------------- Name properties --------------------

    public readonly name = EmptyName.get;


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

    public readonly category = EmptyEntityCategory.get;


    public get categoryName() {
        return this.category.name;
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

    public readonly propertyContainer = EmptyIsInProperty.get;

    //region -------------------- Is in game properties --------------------

    public get gameContainer() {
        return this.propertyContainer.gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------
    //region -------------------- Is in game style properties --------------------

    public get gameStyleContainer() {
        return this.propertyContainer.gameStyleContainer;
    }

    public get isInSuperMarioBrosStyle() {
        return this.gameStyleContainer.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.gameStyleContainer.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.gameStyleContainer.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Is in game style properties --------------------
    //region -------------------- Is in theme properties --------------------

    public get themeContainer() {
        return this.propertyContainer.themeContainer;
    }

    public get isInGroundTheme() {
        return this.themeContainer.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.themeContainer.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.themeContainer.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.themeContainer.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.themeContainer.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.themeContainer.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.themeContainer.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.themeContainer.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.themeContainer.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.themeContainer.isInCastleTheme;
    }

    //endregion -------------------- Is in theme properties --------------------
    //region -------------------- Is in time properties --------------------

    public get timeContainer() {
        return this.propertyContainer.timeContainer;
    }

    public get isInDayTheme() {
        return this.propertyContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.propertyContainer.isInNightTheme;
    }

    //endregion -------------------- Is in time properties --------------------

    //endregion -------------------- Is in properties --------------------
    //region -------------------- References properties --------------------

    public readonly referencesContainer = EmptyEntityReference.get;


    public get referenceInSuperMarioBrosStyle() {
        return this.referencesContainer.referenceInSuperMarioBrosStyle;
    }

    public get referenceInSuperMarioBros3Style() {
        return this.referencesContainer.referenceInSuperMarioBros3Style;
    }

    public get referenceInSuperMarioWorldStyle() {
        return this.referencesContainer.referenceInSuperMarioWorldStyle;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return this.referencesContainer.referenceInNewSuperMarioBrosUStyle;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return this.referencesContainer.referenceInSuperMario3DWorldStyle;
    }


    public get referenceInGroundTheme() {
        return this.referencesContainer.referenceInGroundTheme;
    }

    public get referenceInUndergroundTheme() {
        return this.referencesContainer.referenceInUndergroundTheme;
    }

    public get referenceInUnderwaterTheme() {
        return this.referencesContainer.referenceInUnderwaterTheme;
    }

    public get referenceInDesertTheme() {
        return this.referencesContainer.referenceInDesertTheme;
    }

    public get referenceInSnowTheme() {
        return this.referencesContainer.referenceInSnowTheme;
    }

    public get referenceInSkyTheme() {
        return this.referencesContainer.referenceInSkyTheme;
    }

    public get referenceInForestTheme() {
        return this.referencesContainer.referenceInForestTheme;
    }

    public get referenceInGhostHouseTheme() {
        return this.referencesContainer.referenceInGhostHouseTheme;
    }

    public get referenceInAirshipTheme() {
        return this.referencesContainer.referenceInAirshipTheme;
    }

    public get referenceInCastleTheme() {
        return this.referencesContainer.referenceInCastleTheme;
    }


    public get referenceInDayTheme() {
        return this.referencesContainer.referenceInDayTheme;
    }

    public get referenceInNightTheme() {
        return this.referencesContainer.referenceInNightTheme;
    }


    public get everyReferences() {
        return this.referencesContainer.everyReferences;
    }

    //endregion -------------------- References properties --------------------

    public toGameStyleMap(): never {
        throw new ReferenceError(`An ${this} cannot have a game style map.`);
    }

    public toCourseThemeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a course theme map.`);
    }

    public toTimeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a time map.`);
    }

    public toNameMap() {
        return EMPTY_MAP;
    }

    public toString(): 'Empty entity' {
        return 'Empty entity';
    }

}