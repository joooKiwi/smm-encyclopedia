import type {Lazy} from '@joookiwi/lazy'

import type {Entity, PossibleOtherEntities}                                                                                                                                                                                                                    from 'core/entity/Entity'
import type {EntityReferences}                                                                                                                                                                                                                                 from 'core/entity/properties/EntityReferences'
import type {Property}                                                                                                                                                                                                                                         from 'core/entity/properties/Property'
import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment, PossibleRenderedObjectLimitTypeComment}                                                              from 'core/entity/properties/limit/loader.types'
import type {EntityCategory}                                                                                                                                                                                                                                   from 'core/entityCategory/EntityCategory'
import type {EntityLimits}                                                                                                                                                                                                                                     from 'core/entityLimit/EntityLimits'
import type {Games}                                                                                                                                                                                                                                            from 'core/game/Games'
import type {GameStyles}                                                                                                                                                                                                                                       from 'core/gameStyle/GameStyles'
import type {Themes}                                                                                                                                                                                                                                           from 'core/theme/Themes'
import type {Times}                                                                                                                                                                                                                                            from 'core/time/Times'
import type {Name}                                                                                                                                                                                                                                             from 'lang/name/Name'

import {isInProduction}                   from 'variables'
import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'

/**
 * A simple entity implementation, but without any specification.
 *
 * @note It use the generic to have a type based on the property used for each method in {@link Property}.
 */
export abstract class AbstractEntity
    extends ClassContainingANameAndACategory<string, string, EntityCategory>
    implements Entity {

    //region -------------------- Fields --------------------

    readonly #propertyContainer
    readonly #referencesContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: Name<string>, category: Lazy<EntityCategory>, property: Property, references: EntityReferences,) {
        super(name, category,)
        this.#testCategory(this.categoryContainer)
        this.#propertyContainer = this.#testProperty(property)
        this.#referencesContainer = references
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Tester methods --------------------

    #testCategory(category: EntityCategory,): EntityCategory {
        if (!isInProduction)
            this._testCategory(category)
        return category
    }

    /**
     * Test the category during development or in test.
     *
     * @param category the category
     * @onlyCalledDuringConstruction
     * @onlyCalledOnDevelopment
     * @onlyCalledOnTest
     */
    protected _testCategory(category: EntityCategory,): void {
    }

    #testProperty(property: Property,): Property {
        if (!isInProduction)
            this._testProperty(property)
        return property
    }

    /**
     * Test the property in development or in test.
     *
     * @param property the property
     * @onlyCalledDuringConstruction
     * @onlyCalledOnDevelopment
     * @onlyCalledOnTest
     */
    protected _testProperty(property: Property,): void {
    }

    //endregion -------------------- Tester methods --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Properties --------------------

    public get propertyContainer(): Property {
        return this.#propertyContainer
    }

    //region -------------------- Game properties --------------------

    public get gameContainer(): this['propertyContainer']['gameContainer'] {
        return this.propertyContainer.gameContainer
    }

    public get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1'] {
        return this.gameContainer.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): this['gameContainer']['isInSuperMarioMakerFor3DS'] {
        return this.gameContainer.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2'] {
        return this.gameContainer.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public get gameStyleContainer(): this['propertyContainer']['gameStyleContainer'] {
        return this.propertyContainer.gameStyleContainer
    }

    public get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle'] {
        return this.gameStyleContainer.isInSuperMarioBrosStyle
    }

    public get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style'] {
        return this.gameStyleContainer.isInSuperMarioBros3Style
    }

    public get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle'] {
        return this.gameStyleContainer.isInSuperMarioWorldStyle
    }

    public get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle'] {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle
    }

    public get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle'] {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle
    }

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public get themeContainer(): this['propertyContainer']['themeContainer'] {
        return this.propertyContainer.themeContainer
    }

    public get isInGroundTheme(): this['themeContainer']['isInGroundTheme'] {
        return this.themeContainer.isInGroundTheme
    }

    public get isInUndergroundTheme(): this['themeContainer']['isInUndergroundTheme'] {
        return this.themeContainer.isInUndergroundTheme
    }

    public get isInUnderwaterTheme(): this['themeContainer']['isInUnderwaterTheme'] {
        return this.themeContainer.isInUnderwaterTheme
    }

    public get isInDesertTheme(): this['themeContainer']['isInDesertTheme'] {
        return this.themeContainer.isInDesertTheme
    }

    public get isInSnowTheme(): this['themeContainer']['isInSnowTheme'] {
        return this.themeContainer.isInSnowTheme
    }

    public get isInSkyTheme(): this['themeContainer']['isInSkyTheme'] {
        return this.themeContainer.isInSkyTheme
    }

    public get isInForestTheme(): this['themeContainer']['isInForestTheme'] {
        return this.themeContainer.isInForestTheme
    }

    public get isInGhostHouseTheme(): this['themeContainer']['isInGhostHouseTheme'] {
        return this.themeContainer.isInGhostHouseTheme
    }

    public get isInAirshipTheme(): this['themeContainer']['isInAirshipTheme'] {
        return this.themeContainer.isInAirshipTheme
    }

    public get isInCastleTheme(): this['themeContainer']['isInCastleTheme'] {
        return this.themeContainer.isInCastleTheme
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public get timeContainer(): this['propertyContainer']['timeContainer'] {
        return this.propertyContainer.timeContainer
    }

    public get isInDayTheme(): this['timeContainer']['isInDayTheme'] {
        return this.timeContainer.isInDayTheme
    }

    public get isInNightTheme(): this['timeContainer']['isInNightTheme'] {
        return this.timeContainer.isInNightTheme
    }

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public get limitContainer(): LimitProperty {
        return this.propertyContainer.limitContainer
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer(): GameStructureForEditorLimit {
        return this.propertyContainer.editorLimitContainer
    }

    public get editorLimit_smm1And3ds(): NullOr<EntityLimits> {
        return this.propertyContainer.editorLimit_smm1And3ds
    }

    public get editorLimit_smm2(): NullOr<| EntityLimits | NotApplicable> {
        return this.propertyContainer.editorLimit_smm2
    }

    public get isUnknown_editorLimit_smm2(): boolean {
        return this.propertyContainer.isUnknown_editorLimit_smm2
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitContainer(): PossibleIsInGeneralLimit {
        return this.propertyContainer.isInGeneralLimitContainer
    }

    public get isInGeneralLimit(): BooleanOrNotApplicable {
        return this.propertyContainer.isInGeneralLimit
    }

    public get isInGeneralLimitComment(): NullOr<PossibleGeneralEntityLimitComment> {
        return this.propertyContainer.isInGeneralLimitComment
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitContainer(): PossibleIsInGeneralGlobalLimit {
        return this.propertyContainer.isInGlobalGeneralLimitContainer
    }

    public get isInGlobalGeneralLimit(): BooleanOrNotApplicable {
        return this.propertyContainer.isInGlobalGeneralLimit
    }

    public get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalEntityLimitComment> {
        return this.propertyContainer.isInGlobalGeneralLimitComment
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitContainer(): PossibleIsInPowerUpLimit {
        return this.propertyContainer.isInPowerUpLimitContainer
    }

    public get isInPowerUpLimit(): NullOr<BooleanOrNotApplicable> {
        return this.propertyContainer.isInPowerUpLimit
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitContainer(): PossibleIsInProjectileLimit {
        return this.propertyContainer.isInProjectileLimitContainer
    }

    public get isInProjectileLimit(): NullOr<BooleanOrNotApplicable> {
        return this.propertyContainer.isInProjectileLimit
    }

    public get isInProjectileLimitComment(): NullOr<PossibleProjectileEntityLimitComment> {
        return this.propertyContainer.isInProjectileLimitComment
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Rendered object limit --------------------

    public get isInRenderedObjectLimitContainer(): PossibleIsInRenderedObjectLimit {
        return this.propertyContainer.isInRenderedObjectLimitContainer
    }

    public get isInRenderedObjectLimit(): NullOr<BooleanOrNotApplicable> {
        return this.propertyContainer.isInRenderedObjectLimit
    }

    public get isInRenderedObjectLimitComment(): NullOr<PossibleRenderedObjectLimitTypeComment> {
        return this.propertyContainer.isInRenderedObjectLimitComment
    }

    //endregion -------------------- Rendered object limit --------------------
    //region -------------------- Collected object limit --------------------

    public get isInCollectedCoinLimitContainer(): PossibleIsInCollectedCoinLimit {
        return this.propertyContainer.isInCollectedCoinLimitContainer
    }

    public get isInCollectedCoinLimit(): NullOr<BooleanOrNotApplicable> {
        return this.propertyContainer.isInCollectedCoinLimit
    }

    //endregion -------------------- Collected object limit --------------------
    //region -------------------- Other limit --------------------

    public get otherLimitContainer(): PossibleOtherLimit {
        return this.propertyContainer.otherLimitContainer
    }

    public get otherLimit(): | EntityLimits | NotApplicable {
        return this.propertyContainer.otherLimit
    }

    public get otherLimitComment(): NullOr<PossibleOtherLimitComment> {
        return this.propertyContainer.otherLimitComment
    }

    //endregion -------------------- Other limit --------------------

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    public get instrumentContainer(): this['propertyContainer']['instrumentContainer'] {
        return this.propertyContainer.instrumentContainer
    }


    public get instruments(): this['instrumentContainer']['instruments'] {
        return this.instrumentContainer.instruments
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlockContainer'] {
        return this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer
    }

    public get canMakeASoundOutOfAMusicBlock(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlock'] {
        return this.instrumentContainer.canMakeASoundOutOfAMusicBlock
    }

    public get canMakeASoundOutOfAMusicBlockComment(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlockComment'] {
        return this.instrumentContainer.canMakeASoundOutOfAMusicBlockComment
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Instrument properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References --------------------

    public get referencesContainer(): EntityReferences {
        return this.#referencesContainer
    }

    //region -------------------- Game style references --------------------

    public get referenceInSuperMarioBrosStyle(): this['referencesContainer']['referenceInSuperMarioBrosStyle'] {
        return this.referencesContainer.referenceInSuperMarioBrosStyle
    }

    public get referenceInSuperMarioBros3Style(): this['referencesContainer']['referenceInSuperMarioBros3Style'] {
        return this.referencesContainer.referenceInSuperMarioBros3Style
    }

    public get referenceInSuperMarioWorldStyle(): this['referencesContainer']['referenceInSuperMarioWorldStyle'] {
        return this.referencesContainer.referenceInSuperMarioWorldStyle
    }

    public get referenceInNewSuperMarioBrosUStyle(): this['referencesContainer']['referenceInNewSuperMarioBrosUStyle'] {
        return this.referencesContainer.referenceInNewSuperMarioBrosUStyle
    }

    public get referenceInSuperMario3DWorldStyle(): this['referencesContainer']['referenceInSuperMario3DWorldStyle'] {
        return this.referencesContainer.referenceInSuperMario3DWorldStyle
    }

    //endregion -------------------- Game style references --------------------
    //region -------------------- Theme references --------------------

    public get referenceInGroundTheme(): this['referencesContainer']['referenceInGroundTheme'] {
        return this.referencesContainer.referenceInGroundTheme
    }

    public get referenceInUndergroundTheme(): this['referencesContainer']['referenceInUndergroundTheme'] {
        return this.referencesContainer.referenceInUndergroundTheme
    }

    public get referenceInUnderwaterTheme(): this['referencesContainer']['referenceInUnderwaterTheme'] {
        return this.referencesContainer.referenceInUnderwaterTheme
    }

    public get referenceInDesertTheme(): this['referencesContainer']['referenceInDesertTheme'] {
        return this.referencesContainer.referenceInDesertTheme
    }

    public get referenceInSnowTheme(): this['referencesContainer']['referenceInSnowTheme'] {
        return this.referencesContainer.referenceInSnowTheme
    }

    public get referenceInSkyTheme(): this['referencesContainer']['referenceInSkyTheme'] {
        return this.referencesContainer.referenceInSkyTheme
    }

    public get referenceInForestTheme(): this['referencesContainer']['referenceInForestTheme'] {
        return this.referencesContainer.referenceInForestTheme
    }

    public get referenceInGhostHouseTheme(): this['referencesContainer']['referenceInGhostHouseTheme'] {
        return this.referencesContainer.referenceInGhostHouseTheme
    }

    public get referenceInAirshipTheme(): this['referencesContainer']['referenceInAirshipTheme'] {
        return this.referencesContainer.referenceInAirshipTheme
    }

    public get referenceInCastleTheme(): this['referencesContainer']['referenceInCastleTheme'] {
        return this.referencesContainer.referenceInCastleTheme
    }

    //endregion -------------------- Theme references --------------------
    //region -------------------- Time references --------------------

    public get referenceInDayTheme(): this['referencesContainer']['referenceInDayTheme'] {
        return this.referencesContainer.referenceInDayTheme
    }

    public get referenceInNightTheme(): this['referencesContainer']['referenceInNightTheme'] {
        return this.referencesContainer.referenceInNightTheme
    }

    //endregion -------------------- Time references --------------------

    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities {
        return this.referencesContainer.getReferenceFrom(gameStyleOrThemeOrTime)
    }

    public get everyGameStyleReferences(): readonly Entity[] {
        return this.referencesContainer.everyGameStyleReferences
    }

    public get everyThemeReferences(): readonly Entity[] {
        return this.referencesContainer.everyThemeReferences
    }

    public get everyTimeReferences(): readonly Entity[] {
        return this.referencesContainer.everyTimeReferences
    }

    public get everyReferences(): readonly Entity[] {
        return this.referencesContainer.everyReferences
    }

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.propertyContainer.toGameMap()
    }

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.propertyContainer.toGameStyleMap()
    }

    public toCourseThemeMap(): ReadonlyMap<Themes, boolean> {
        return this.themeContainer.toCourseThemeMap()
    }

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.timeContainer.toTimeMap()
    }

    public toLimitMap(): ReadonlyMap<EntityLimits, boolean> {
        return this.limitContainer.toLimitMap()
    }

    public toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, boolean> {
        return this.limitContainer.toLimitInTheEditorMap()
    }

    public toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, boolean> {
        return this.limitContainer.toLimitWhilePlayingMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
