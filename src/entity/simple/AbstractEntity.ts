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
export abstract class AbstractEntity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends Property = Property, >
    implements Entity<CATEGORY, PROPERTY> {

    //region -------------------- Attributes --------------------

    readonly #nameContainer;
    readonly #category;
    readonly #propertyContainer;
    readonly #referencesContainer;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name, category: EntityCategory, property: Property, references: EntityReferences,) {
        this.#nameContainer = name;
        this.#category = this.__testCategory(category);
        this.#propertyContainer = this.__testProperty(property);
        this.#referencesContainer = references;
    }

    private __testCategory(category: EntityCategory,): CATEGORY {
        return window.IS_IN_PRODUCTION
            ? category as CATEGORY
            : this._testCategory(category) as CATEGORY;
    }

    protected _testCategory(category: EntityCategory,): EntityCategory {
        return category;
    }

    private __testProperty(property: Property,): PROPERTY {
        return window.IS_IN_PRODUCTION
            ? property as PROPERTY
            : this._testProperty(property) as PROPERTY;
    }

    protected _testProperty(property: Property,): Property {
        return property;
    }

    //region -------------------- Name properties --------------------

    public get nameContainer(): Name {
        return this.#nameContainer;
    }


    public get languageValue(): this['nameContainer']['languageValue'] {
        return this.nameContainer.languageValue;
    }


    public get originalEnglish(): this['nameContainer']['originalEnglish'] {
        return this.nameContainer.originalEnglish;
    }

    public get english(): this['nameContainer']['english'] {
        return this.nameContainer.english;
    }

    public get americanEnglish(): this['nameContainer']['americanEnglish'] {
        return this.nameContainer.americanEnglish;
    }

    public get europeanEnglish(): this['nameContainer']['europeanEnglish'] {
        return this.nameContainer.europeanEnglish;
    }


    public get originalFrench(): this['nameContainer']['originalFrench'] {
        return this.nameContainer.originalFrench;
    }

    public get french(): this['nameContainer']['french'] {
        return this.nameContainer.french;
    }

    public get canadianFrench(): this['nameContainer']['canadianFrench'] {
        return this.nameContainer.canadianFrench;
    }

    public get europeanFrench(): this['nameContainer']['europeanFrench'] {
        return this.nameContainer.europeanFrench;
    }


    public get german(): this['nameContainer']['german'] {
        return this.nameContainer.german;
    }


    public get originalSpanish(): this['nameContainer']['originalSpanish'] {
        return this.nameContainer.originalSpanish;
    }

    public get spanish(): this['nameContainer']['spanish'] {
        return this.nameContainer.spanish;
    }

    public get americanSpanish(): this['nameContainer']['americanSpanish'] {
        return this.nameContainer.americanSpanish;
    }

    public get europeanSpanish(): this['nameContainer']['europeanSpanish'] {
        return this.nameContainer.europeanSpanish;
    }


    public get italian(): this['nameContainer']['italian'] {
        return this.nameContainer.italian;
    }


    public get dutch(): this['nameContainer']['dutch'] {
        return this.nameContainer.dutch;
    }


    public get isPortugueseUsed(): this['nameContainer']['isPortugueseUsed'] {
        return this.nameContainer.isPortugueseUsed;
    }

    public get originalPortuguese(): this['nameContainer']['originalPortuguese'] {
        return this.nameContainer.originalPortuguese;
    }

    public get portuguese(): this['nameContainer']['portuguese'] {
        return this.nameContainer.portuguese;
    }

    public get americanPortuguese(): this['nameContainer']['americanPortuguese'] {
        return this.nameContainer.americanPortuguese;
    }

    public get europeanPortuguese(): this['nameContainer']['europeanPortuguese'] {
        return this.nameContainer.europeanPortuguese;
    }


    public get russian(): this['nameContainer']['russian'] {
        return this.nameContainer.russian;
    }


    public get japanese(): this['nameContainer']['japanese'] {
        return this.nameContainer.japanese;
    }


    public get originalChinese(): this['nameContainer']['originalChinese'] {
        return this.nameContainer.originalChinese;
    }

    public get chinese(): this['nameContainer']['chinese'] {
        return this.nameContainer.chinese;
    }

    public get traditionalChinese(): this['nameContainer']['traditionalChinese'] {
        return this.nameContainer.traditionalChinese;
    }

    public get simplifiedChinese(): this['nameContainer']['simplifiedChinese'] {
        return this.nameContainer.simplifiedChinese;
    }


    public get korean(): this['nameContainer']['korean'] {
        return this.nameContainer.korean;
    }


    public get isGreekUsed(): this['nameContainer']['isGreekUsed'] {
        return this.nameContainer.isGreekUsed;
    }

    public get greek(): this['nameContainer']['greek'] {
        return this.nameContainer.greek;
    }


    public get originalLanguages(): this['nameContainer']['originalLanguages'] {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name properties --------------------
    //region -------------------- Category properties --------------------

    public get category(): CATEGORY {
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


    public get categoryIsPortugueseUsed(): this['categoryName']['isPortugueseUsed'] {
        return this.categoryName.isPortugueseUsed;
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


    public get categoryOriginalLanguages(): this['nameContainer']['originalLanguages'] {
        return this.categoryName.originalLanguages;
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
