import type {Entity}           from './Entity';
import type {EntityCategory}   from '../category/EntityCategory';
import type {EntityReferences} from '../properties/EntityReferences';
import type {GameStyles}       from '../gameStyle/GameStyles';
import type {Name}             from '../../lang/name/Name';
import type {Property}         from '../properties/Property';
import type {Themes}           from '../theme/Themes';
import type {Times}            from '../time/Times';

/**
 * A simple entity implementation, but without any specification.
 *
 * @note It use the generic to have a type based on the property used for each methods in {@link Property}.
 */
export abstract class AbstractEntity<PROPERTY extends Property = Property, >
    implements Entity<PROPERTY> {

    //region -------------------- Attributes --------------------

    readonly #nameContainer;
    readonly #category;
    readonly #propertyContainer;
    readonly #referencesContainer;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name, category: EntityCategory, property: PROPERTY, references: EntityReferences,) {
        this.#nameContainer = name;
        this.#category = category;
        this.#propertyContainer = property;
        this.#referencesContainer = references;
    }

    //region -------------------- Name properties --------------------

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


    public get isPortugueseUsed() {
        return this.nameContainer.isPortugueseUsed;
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


    public get originalLanguages() {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name properties --------------------
    //region -------------------- Category properties --------------------

    public get category(): EntityCategory {
        return this.#category;
    }


    public get categoryName() {
        return this.category.nameContainer;
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


    public get categoryIsPortugueseUsed() {
        return this.categoryName.isPortugueseUsed;
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

    public get categoryTraditionalChinese() {
        return this.categoryName.traditionalChinese;
    }

    public get categorySimplifiedChinese() {
        return this.categoryName.simplifiedChinese;
    }


    public get categoryKorean() {
        return this.categoryName.korean;
    }


    public get categoryRussian() {
        return this.categoryName.russian;
    }

    //endregion -------------------- Category properties --------------------
    //region -------------------- Properties --------------------

    public get propertyContainer(): PROPERTY {
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
    //region -------------------- Game style properties --------------------

    public get gameStyleContainer(): this['propertyContainer']['gameStyleContainer'] {
        return this.propertyContainer.gameStyleContainer;
    }

    public get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle'] {
        return this.gameStyleContainer.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style'] {
        return this.gameStyleContainer.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle'] {
        return this.gameStyleContainer.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle'] {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle'] {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public get themeContainer(): this['propertyContainer']['themeContainer'] {
        return this.propertyContainer.themeContainer;
    }

    public get isInGroundTheme(): this['themeContainer']['isInGroundTheme'] {
        return this.themeContainer.isInGroundTheme;
    }

    public get isInUndergroundTheme(): this['themeContainer']['isInUndergroundTheme'] {
        return this.themeContainer.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme(): this['themeContainer']['isInUnderwaterTheme'] {
        return this.themeContainer.isInUnderwaterTheme;
    }

    public get isInDesertTheme(): this['themeContainer']['isInDesertTheme'] {
        return this.themeContainer.isInDesertTheme;
    }

    public get isInSnowTheme(): this['themeContainer']['isInSnowTheme'] {
        return this.themeContainer.isInSnowTheme;
    }

    public get isInSkyTheme(): this['themeContainer']['isInSkyTheme'] {
        return this.themeContainer.isInSkyTheme;
    }

    public get isInForestTheme(): this['themeContainer']['isInForestTheme'] {
        return this.themeContainer.isInForestTheme;
    }

    public get isInGhostHouseTheme(): this['themeContainer']['isInGhostHouseTheme'] {
        return this.themeContainer.isInGhostHouseTheme;
    }

    public get isInAirshipTheme(): this['themeContainer']['isInAirshipTheme'] {
        return this.themeContainer.isInAirshipTheme;
    }

    public get isInCastleTheme(): this['themeContainer']['isInCastleTheme'] {
        return this.themeContainer.isInCastleTheme;
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public get timeContainer(): this['propertyContainer']['timeContainer'] {
        return this.propertyContainer.timeContainer;
    }

    public get isInDayTheme(): this['timeContainer']['isInDayTheme'] {
        return this.timeContainer.isInDayTheme;
    }

    public get isInNightTheme(): this['timeContainer']['isInNightTheme'] {
        return this.timeContainer.isInNightTheme;
    }

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public get limitContainer(): this['propertyContainer']['limitContainer'] {
        return this.propertyContainer.limitContainer;
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer(): this['limitContainer']['editorLimitContainer'] {
        return this.limitContainer.editorLimitContainer;
    }

    public get editorLimit(): this['limitContainer']['editorLimit'] {
        return this.limitContainer.editorLimit;
    }

    public get isEditorLimitUnknown(): this['limitContainer']['isEditorLimitUnknown'] {
        return this.limitContainer.isEditorLimitUnknown;
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitWhilePlayingContainer(): this['limitContainer']['isInGeneralLimitWhilePlayingContainer'] {
        return this.limitContainer.isInGeneralLimitWhilePlayingContainer;
    }

    public get isInGeneralLimitWhilePlaying(): this['limitContainer']['isInGeneralLimitWhilePlaying'] {
        return this.limitContainer.isInGeneralLimitWhilePlaying;
    }

    public get isInGeneralLimitWhilePlayingComment(): this['limitContainer']['isInGeneralLimitWhilePlayingComment'] {
        return this.limitContainer.isInGeneralLimitWhilePlayingComment;
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer(): this['limitContainer']['isInGlobalGeneralLimitWhilePlayingContainer'] {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingContainer;
    }

    public get isInGlobalGeneralLimitWhilePlaying(): this['limitContainer']['isInGlobalGeneralLimitWhilePlaying'] {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlaying;
    }

    public get isInGlobalGeneralLimitWhilePlayingComment(): this['limitContainer']['isInGlobalGeneralLimitWhilePlayingComment'] {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingComment;
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer(): this['limitContainer']['isInPowerUpLimitWhilePlayingContainer'] {
        return this.limitContainer.isInPowerUpLimitWhilePlayingContainer;
    }

    public get isInPowerUpLimitWhilePlaying(): this['limitContainer']['isInPowerUpLimitWhilePlaying'] {
        return this.limitContainer.isInPowerUpLimitWhilePlaying;
    }

    public get isInPowerUpLimitWhilePlayingComment(): this['limitContainer']['isInPowerUpLimitWhilePlayingComment'] {
        return this.limitContainer.isInPowerUpLimitWhilePlayingComment;
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer(): this['limitContainer']['isInProjectileLimitWhilePlayingContainer'] {
        return this.limitContainer.isInProjectileLimitWhilePlayingContainer;
    }

    public get isInProjectileLimitWhilePlaying(): this['limitContainer']['isInProjectileLimitWhilePlaying'] {
        return this.limitContainer.isInProjectileLimitWhilePlaying;
    }

    public get isInProjectileLimitWhilePlayingUnknown(): this['limitContainer']['isInProjectileLimitWhilePlayingUnknown'] {
        return this.limitContainer.isInProjectileLimitWhilePlayingUnknown;
    }

    public get isInProjectileLimitWhilePlayingComment(): this['limitContainer']['isInProjectileLimitWhilePlayingComment'] {
        return this.limitContainer.isInProjectileLimitWhilePlayingComment;
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get customLimitWhilePlayingContainer(): this['limitContainer']['customLimitWhilePlayingContainer'] {
        return this.limitContainer.customLimitWhilePlayingContainer;
    }

    public get customLimitWhilePlaying(): this['limitContainer']['customLimitWhilePlaying'] {
        return this.limitContainer.customLimitWhilePlaying;
    }

    public get isCustomLimitWhilePlayingUnknown(): this['limitContainer']['isCustomLimitWhilePlayingUnknown'] {
        return this.limitContainer.isCustomLimitWhilePlayingUnknown;
    }

    public get customLimitWhilePlayingComment(): this['limitContainer']['customLimitWhilePlayingComment'] {
        return this.limitContainer.customLimitWhilePlayingComment;
    }

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Limit properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References --------------------

    public get referencesContainer() {
        return this.#referencesContainer;
    }

    //region -------------------- Game style references --------------------

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

    //endregion -------------------- Game style references --------------------
    //region -------------------- Theme references --------------------

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

    //endregion -------------------- Theme references --------------------
    //region -------------------- Time references --------------------

    public get referenceInDayTheme() {
        return this.referencesContainer.referenceInDayTheme;
    }

    public get referenceInNightTheme() {
        return this.referencesContainer.referenceInNightTheme;
    }

    //endregion -------------------- Time references --------------------

    public getReferenceFrom(theme: Themes,): Entity
    public getReferenceFrom(time: Times,): Entity
    public getReferenceFrom(gameStyle: GameStyles,): Entity
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): Entity
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,) {
        return this.referencesContainer.getReferenceFrom(gameStyleOrThemeOrTime);
    }

    public get everyGameStyleReferences() {
        return this.referencesContainer.everyGameStyleReferences;
    }

    public get everyThemeReferences() {
        return this.referencesContainer.everyThemeReferences;
    }

    public get everyTimeReferences() {
        return this.referencesContainer.everyTimeReferences;
    }

    public get everyReferences() {
        return this.referencesContainer.everyReferences;
    }

    //endregion -------------------- References --------------------

    public toGameStyleMap() {
        return this.propertyContainer.toGameStyleMap();
    }

    public toCourseThemeMap() {
        return this.themeContainer.toCourseThemeMap();
    }

    public toTimeMap() {
        return this.timeContainer.toTimeMap();
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
