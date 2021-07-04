import {EMPTY_MAP}            from '../../util/emptyVariables';
import {EmptyEntityReference} from '../properties/EmptyEntityReference';
import {EmptyEntityCategory}  from '../category/EmptyEntityCategory';
import {EmptyIsInProperty}    from '../properties/EmptyIsInProperty';
import {EmptyName}            from '../../lang/name/EmptyName';
import {Entity}               from './Entity';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntity
    implements Entity {

    static readonly #instance = new EmptyEntity();

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    //region -------------------- Name properties --------------------

    public readonly name = EmptyName.get;

    public readonly languageValue = this.name.languageValue;

    public readonly originalEnglish = this.name.originalEnglish;
    public readonly english = this.name.english;
    public readonly americanEnglish = this.name.americanEnglish;
    public readonly europeanEnglish = this.name.europeanEnglish;

    public readonly originalFrench = this.name.originalFrench;
    public readonly french = this.name.french;
    public readonly canadianFrench = this.name.canadianFrench;
    public readonly europeanFrench = this.name.europeanFrench;

    public readonly german = this.name.german;

    public readonly originalSpanish = this.name.originalSpanish;
    public readonly spanish = this.name.spanish;
    public readonly americanSpanish = this.name.americanSpanish;
    public readonly europeanSpanish = this.name.europeanSpanish;

    public readonly italian = this.name.italian;

    public readonly dutch = this.name.dutch;

    public readonly originalPortuguese = this.name.originalPortuguese;
    public readonly portuguese = this.name.portuguese;
    public readonly americanPortuguese = this.name.americanPortuguese;
    public readonly europeanPortuguese = this.name.europeanPortuguese;

    public readonly russian = this.name.russian;

    public readonly japanese = this.name.japanese;

    public readonly originalChinese = this.name.originalChinese;
    public readonly chinese = this.name.chinese;
    public readonly simplifiedChinese = this.name.simplifiedChinese;
    public readonly traditionalChinese = this.name.traditionalChinese;

    public readonly korean = this.name.korean;

    public readonly individualValues = this.name.individualValues;

    //endregion -------------------- Name properties --------------------
    //region -------------------- Category properties --------------------

    public readonly category = EmptyEntityCategory.get;

    public readonly categoryName = this.category.name;

    public readonly categoryLanguageValue = this.categoryName.languageValue;

    public readonly categoryOriginalEnglish = this.categoryName.originalEnglish;
    public readonly categoryEnglish = this.categoryName.english;
    public readonly categoryAmericanEnglish = this.categoryName.americanEnglish;
    public readonly categoryEuropeanEnglish = this.categoryName.europeanEnglish;


    public readonly categoryOriginalFrench = this.categoryName.originalFrench;
    public readonly categoryFrench = this.categoryName.french;
    public readonly categoryCanadianFrench = this.categoryName.canadianFrench;
    public readonly categoryEuropeanFrench = this.categoryName.europeanFrench;

    public readonly categoryGerman = this.categoryName.german;

    public readonly categoryOriginalSpanish = this.categoryName.originalSpanish;
    public readonly categorySpanish = this.categoryName.spanish;
    public readonly categoryAmericanSpanish = this.categoryName.americanSpanish;
    public readonly categoryEuropeanSpanish = this.categoryName.europeanSpanish;

    public readonly categoryItalian = this.categoryName.italian;

    public readonly categoryDutch = this.categoryName.dutch;

    public readonly categoryOriginalPortuguese = this.categoryName.originalPortuguese;
    public readonly categoryPortuguese = this.categoryName.portuguese;
    public readonly categoryAmericanPortuguese = this.categoryName.americanPortuguese;
    public readonly categoryEuropeanPortuguese = this.categoryName.europeanPortuguese;

    public readonly categoryJapanese = this.categoryName.japanese;

    public readonly categoryOriginalChinese = this.categoryName.originalChinese;
    public readonly categoryChinese = this.categoryName.chinese;
    public readonly categorySimplifiedChinese = this.categoryName.simplifiedChinese;
    public readonly categoryTraditionalChinese = this.categoryName.traditionalChinese;

    public readonly categoryKorean = this.categoryName.korean;

    public readonly categoryRussian = this.categoryName.russian;

    //endregion -------------------- Category properties --------------------
    //region -------------------- Properties --------------------

    public readonly propertyContainer = EmptyIsInProperty.get;

    //region -------------------- Game properties --------------------

    public readonly gameContainer = this.propertyContainer.gameContainer;

    public readonly isInSuperMarioMaker1 = this.gameContainer.isInSuperMarioMaker1;
    public readonly isInSuperMarioMaker2 = this.gameContainer.isInSuperMarioMaker2;

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public readonly gameStyleContainer = this.propertyContainer.gameStyleContainer;

    public readonly isInSuperMarioBrosStyle = this.gameStyleContainer.isInSuperMarioBrosStyle;
    public readonly isInSuperMarioBros3Style = this.gameStyleContainer.isInSuperMarioBros3Style;
    public readonly isInSuperMarioWorldStyle = this.gameStyleContainer.isInSuperMarioWorldStyle;
    public readonly isInNewSuperMarioBrosUStyle = this.gameStyleContainer.isInNewSuperMarioBrosUStyle;
    public readonly isInSuperMario3DWorldStyle = this.gameStyleContainer.isInSuperMario3DWorldStyle;

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public readonly themeContainer = this.propertyContainer.themeContainer;

    public readonly isInGroundTheme = this.themeContainer.isInGroundTheme;
    public readonly isInUndergroundTheme = this.themeContainer.isInUndergroundTheme;
    public readonly isInUnderwaterTheme = this.themeContainer.isInUnderwaterTheme;
    public readonly isInDesertTheme = this.themeContainer.isInDesertTheme;
    public readonly isInSnowTheme = this.themeContainer.isInSnowTheme;
    public readonly isInSkyTheme = this.themeContainer.isInSkyTheme;
    public readonly isInForestTheme = this.themeContainer.isInForestTheme;
    public readonly isInGhostHouseTheme = this.themeContainer.isInGhostHouseTheme;
    public readonly isInAirshipTheme = this.themeContainer.isInAirshipTheme;
    public readonly isInCastleTheme = this.themeContainer.isInCastleTheme;

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public readonly timeContainer = this.propertyContainer.timeContainer;

    public readonly isInDayTheme = this.propertyContainer.isInDayTheme;
    public readonly isInNightTheme = this.propertyContainer.isInNightTheme;

    //endregion -------------------- Time properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References properties --------------------

    public readonly referencesContainer = EmptyEntityReference.get;

    public readonly referenceInSuperMarioBrosStyle = this.referencesContainer.referenceInSuperMarioBrosStyle;
    public readonly referenceInSuperMarioBros3Style = this.referencesContainer.referenceInSuperMarioBros3Style;
    public readonly referenceInSuperMarioWorldStyle = this.referencesContainer.referenceInSuperMarioWorldStyle;
    public readonly referenceInNewSuperMarioBrosUStyle = this.referencesContainer.referenceInNewSuperMarioBrosUStyle;
    public readonly referenceInSuperMario3DWorldStyle = this.referencesContainer.referenceInSuperMario3DWorldStyle;

    public readonly referenceInGroundTheme = this.referencesContainer.referenceInGroundTheme;
    public readonly referenceInUndergroundTheme = this.referencesContainer.referenceInUndergroundTheme;
    public readonly referenceInUnderwaterTheme = this.referencesContainer.referenceInUnderwaterTheme;
    public readonly referenceInDesertTheme = this.referencesContainer.referenceInDesertTheme;
    public readonly referenceInSnowTheme = this.referencesContainer.referenceInSnowTheme;
    public readonly referenceInSkyTheme = this.referencesContainer.referenceInSkyTheme;
    public readonly referenceInForestTheme = this.referencesContainer.referenceInForestTheme;
    public readonly referenceInGhostHouseTheme = this.referencesContainer.referenceInGhostHouseTheme;
    public readonly referenceInAirshipTheme = this.referencesContainer.referenceInAirshipTheme;
    public readonly referenceInCastleTheme = this.referencesContainer.referenceInCastleTheme;

    public readonly referenceInDayTheme = this.referencesContainer.referenceInDayTheme;
    public readonly referenceInNightTheme = this.referencesContainer.referenceInNightTheme;

    public readonly everyReferences = this.referencesContainer.everyReferences;

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