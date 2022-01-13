import type {ClassWithNullObjectPattern, EmptyEntityName} from '../../util/ClassWithNullObjectPattern';
import type {Entity}                                      from './Entity';

import {assert}               from '../../util/utilitiesMethods';
import {EMPTY_MAP}            from '../../util/emptyVariables';
import {EmptyEntityReference} from './properties/EmptyEntityReference';
import {EmptyEntityCategory}  from '../entityCategory/EmptyEntityCategory';
import {EmptyIsInProperty}    from './properties/EmptyIsInProperty';
import {EmptyName}            from '../../lang/name/EmptyName';

/**
 * An empty entity with the default values of nothing
 *
 * @note A value that is equivalent to nothing can be false, null and itself
 * @singleton
 */
export class EmptyEntity
    implements Entity, ClassWithNullObjectPattern<EmptyEntityName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntity;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Name properties --------------------

    public readonly nameContainer = EmptyName.get;

    public readonly languageValue = this.nameContainer.languageValue;

    public readonly originalEnglish = this.nameContainer.originalEnglish;
    public readonly english = this.nameContainer.english;
    public readonly americanEnglish = this.nameContainer.americanEnglish;
    public readonly europeanEnglish = this.nameContainer.europeanEnglish;

    public readonly originalFrench = this.nameContainer.originalFrench;
    public readonly french = this.nameContainer.french;
    public readonly canadianFrench = this.nameContainer.canadianFrench;
    public readonly europeanFrench = this.nameContainer.europeanFrench;

    public readonly german = this.nameContainer.german;

    public readonly originalSpanish = this.nameContainer.originalSpanish;
    public readonly spanish = this.nameContainer.spanish;
    public readonly americanSpanish = this.nameContainer.americanSpanish;
    public readonly europeanSpanish = this.nameContainer.europeanSpanish;

    public readonly italian = this.nameContainer.italian;

    public readonly dutch = this.nameContainer.dutch;

    public readonly originalPortuguese = this.nameContainer.originalPortuguese;
    public readonly portuguese = this.nameContainer.portuguese;
    public readonly americanPortuguese = this.nameContainer.americanPortuguese;
    public readonly europeanPortuguese = this.nameContainer.europeanPortuguese;

    public readonly russian = this.nameContainer.russian;

    public readonly japanese = this.nameContainer.japanese;

    public readonly originalChinese = this.nameContainer.originalChinese;
    public readonly chinese = this.nameContainer.chinese;
    public readonly traditionalChinese = this.nameContainer.traditionalChinese;
    public readonly simplifiedChinese = this.nameContainer.simplifiedChinese;

    public readonly korean = this.nameContainer.korean;

    public readonly isGreekUsed = this.nameContainer.isGreekUsed;
    public readonly greek = this.nameContainer.greek;

    public readonly originalLanguages = this.nameContainer.originalLanguages;

    //endregion -------------------- Name properties --------------------
    //region -------------------- Category properties --------------------

    public readonly category = EmptyEntityCategory.get;

    public readonly categoryName = this.category.nameContainer;

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

    public readonly categoryRussian = this.categoryName.russian;

    public readonly categoryJapanese = this.categoryName.japanese;

    public readonly categoryOriginalChinese = this.categoryName.originalChinese;
    public readonly categoryChinese = this.categoryName.chinese;
    public readonly categoryTraditionalChinese = this.categoryName.traditionalChinese;
    public readonly categorySimplifiedChinese = this.categoryName.simplifiedChinese;

    public readonly categoryKorean = this.categoryName.korean;

    public readonly categoryIsGreekUsed = this.categoryName.isGreekUsed;
    public readonly categoryGreek = this.categoryName.greek;

    public readonly categoryOriginalLanguages = this.categoryName.originalLanguages;

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
    //region -------------------- Limit properties --------------------

    public readonly limitContainer = this.propertyContainer.limitContainer;

    public readonly editorLimitContainer = this.propertyContainer.editorLimitContainer;
    public readonly editorLimit = this.propertyContainer.editorLimit;
    public readonly isEditorLimitUnknown = this.propertyContainer.isEditorLimitUnknown;

    public readonly isInGeneralLimitWhilePlayingContainer = this.propertyContainer.isInGeneralLimitWhilePlayingContainer;
    public readonly isInGeneralLimitWhilePlaying = this.propertyContainer.isInGeneralLimitWhilePlaying;
    public readonly isInGeneralLimitWhilePlayingComment = this.propertyContainer.isInGeneralLimitWhilePlayingComment;

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = this.propertyContainer.isInGlobalGeneralLimitWhilePlayingContainer;
    public readonly isInGlobalGeneralLimitWhilePlaying = this.propertyContainer.isInGlobalGeneralLimitWhilePlaying;
    public readonly isInGlobalGeneralLimitWhilePlayingComment = this.propertyContainer.isInGlobalGeneralLimitWhilePlayingComment;

    public readonly isInPowerUpLimitWhilePlayingContainer = this.propertyContainer.isInPowerUpLimitWhilePlayingContainer;
    public readonly isInPowerUpLimitWhilePlaying = this.propertyContainer.isInPowerUpLimitWhilePlaying;
    public readonly isInPowerUpLimitWhilePlayingComment = this.propertyContainer.isInPowerUpLimitWhilePlayingComment;

    public readonly isInProjectileLimitWhilePlayingContainer = this.propertyContainer.isInProjectileLimitWhilePlayingContainer;
    public readonly isInProjectileLimitWhilePlaying = this.propertyContainer.isInProjectileLimitWhilePlaying;
    public readonly isInProjectileLimitWhilePlayingUnknown = this.propertyContainer.isInProjectileLimitWhilePlayingUnknown;
    public readonly isInProjectileLimitWhilePlayingComment = this.propertyContainer.isInProjectileLimitWhilePlayingComment;

    public readonly customLimitWhilePlayingContainer = this.propertyContainer.customLimitWhilePlayingContainer;
    public readonly customLimitWhilePlaying = this.propertyContainer.customLimitWhilePlaying;
    public readonly isCustomLimitWhilePlayingUnknown = this.propertyContainer.isCustomLimitWhilePlayingUnknown;
    public readonly customLimitWhilePlayingComment = this.propertyContainer.customLimitWhilePlayingComment;

    //endregion -------------------- Limit properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References --------------------

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

    public getReferenceFrom() {
        return this.referencesContainer.getReferenceFrom();
    }

    public readonly everyGameStyleReferences = this.referencesContainer.everyGameStyleReferences;
    public readonly everyThemeReferences = this.referencesContainer.everyThemeReferences;
    public readonly everyTimeReferences = this.referencesContainer.everyTimeReferences;
    public readonly everyReferences = this.referencesContainer.everyReferences;

    //endregion -------------------- References --------------------

    public toGameStyleMap(): never {
        assert(false,`An ${this} cannot have a game style map.`,);
    }

    public toCourseThemeMap(): never {
        assert(false,`An ${this} cannot have a course theme map.`,);
    }

    public toTimeMap(): never {
        assert(false,`An ${this} cannot have a time map.`,);
    }

    public toLimitMap() {
        return EMPTY_MAP;
    }

    public toLimitInTheEditorMap() {
        return EMPTY_MAP;
    }

    public toLimitWhilePlayingMap() {
        return EMPTY_MAP;
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }


    public toString(): EmptyEntityName {
        return 'Empty entity';
    }

}
