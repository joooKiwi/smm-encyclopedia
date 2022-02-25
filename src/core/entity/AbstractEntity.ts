import type {Entity, PossibleOtherEntities} from './Entity';
import type {EntityCategory}                from '../entityCategory/EntityCategory';
import type {EntityReferences}              from './properties/EntityReferences';
import type {GameStyles}                    from '../gameStyle/GameStyles';
import type {Name}                          from '../../lang/name/Name';
import type {Property}                      from './properties/Property';
import type {Themes}                        from '../theme/Themes';
import type {Times}                         from '../time/Times';

import {ClassContainingANameAndACategory} from '../../lang/name/ClassContainingANameAndACategory';

/**
 * A simple entity implementation, but without any specification.
 *
 * @note It use the generic to have a type based on the property used for each methods in {@link Property}.
 *
 * @property CATEGORY the {@link EntityCategory entity category} instance
 * @property PROPERTY the {@link Property property} specific to the current instance
 */
export abstract class AbstractEntity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends Property = Property, >
    extends ClassContainingANameAndACategory<string, string, CATEGORY>
    implements Entity<CATEGORY, PROPERTY> {

    //region -------------------- Attributes --------------------

    protected static readonly NOT_APPLICABLE = 'N/A';

    readonly #propertyContainer;
    readonly #referencesContainer;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name<string>, category: EntityCategory, property: Property, references: EntityReferences,) {
        super(name, category as CATEGORY,);
        this.__testCategory(this.categoryContainer);
        this.#propertyContainer = this.__testProperty(property);
        this.#referencesContainer = references;
    }

    private __testCategory(category: EntityCategory,): CATEGORY
    private __testCategory(category: EntityCategory,) {
        return window.IS_IN_PRODUCTION
            ? category
            : this._testCategory(category);
    }

    protected _testCategory(category: EntityCategory,): EntityCategory {
        return category;
    }

    private __testProperty(property: Property,): PROPERTY
    private __testProperty(property: Property,) {
        return window.IS_IN_PRODUCTION
            ? property
            : this._testProperty(property);
    }

    protected _testProperty(property: Property,): Property {
        return property;
    }

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

    public get otherLimitWhilePlayingContainer(): this['limitContainer']['otherLimitWhilePlayingContainer'] {
        return this.limitContainer.otherLimitWhilePlayingContainer;
    }

    public get otherLimitWhilePlaying(): this['limitContainer']['otherLimitWhilePlaying'] {
        return this.limitContainer.otherLimitWhilePlaying;
    }

    public get isOtherLimitWhilePlayingUnknown(): this['limitContainer']['isOtherLimitWhilePlayingUnknown'] {
        return this.limitContainer.isOtherLimitWhilePlayingUnknown;
    }

    public get otherLimitWhilePlayingComment(): this['limitContainer']['otherLimitWhilePlayingComment'] {
        return this.limitContainer.otherLimitWhilePlayingComment;
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

    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
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

    public toGameMap() {
        return this.propertyContainer.toGameMap();
    }

    public toGameStyleMap() {
        return this.propertyContainer.toGameStyleMap();
    }

    public toCourseThemeMap() {
        return this.themeContainer.toCourseThemeMap();
    }

    public toTimeMap() {
        return this.timeContainer.toTimeMap();
    }

    public toLimitMap() {
        return this.limitContainer.toLimitMap();
    }

    public toLimitInTheEditorMap() {
        return this.limitContainer.toLimitInTheEditorMap();
    }

    public toLimitWhilePlayingMap() {
        return this.limitContainer.toLimitWhilePlayingMap();
    }


}
