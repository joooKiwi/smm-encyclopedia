import type {Lazy} from '@joookiwi/lazy'

import type {Property}                                                                                                                                                                                                                                         from 'core/entity/properties/Property'
import type {GameProperty}                                                                                                                                                                                                                                     from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}                                                                                                                                                                                                                                from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty}                                                                                                                                                                                        from 'core/entity/properties/instrument/InstrumentProperty'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                                                                                                    from 'core/entity/properties/instrument/loader.types'
import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInCollectedCoinLimit, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleIsInRenderedObjectLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment, PossibleRenderedObjectLimitTypeComment}                                                              from 'core/entity/properties/limit/loader.types'
import type {ThemeProperty}                                                                                                                                                                                                                                    from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}                                                                                                                                                                                                                                     from 'core/entity/properties/time/TimeProperty'
import type {EntityLimits}                                                                                                                                                                                                                                     from 'core/entityLimit/EntityLimits'
import type {Games}                                                                                                                                                                                                                                            from 'core/game/Games'
import type {GameStyles}                                                                                                                                                                                                                                       from 'core/gameStyle/GameStyles'
import type {Instrument}                                                                                                                                                                                                                                       from 'core/instrument/Instrument'
import type {Themes}                                                                                                                                                                                                                                           from 'core/theme/Themes'
import type {Times}                                                                                                                                                                                                                                            from 'core/time/Times'
import type {NullOr, NullOrBoolean}                                                                                                                                                                                                                            from 'util/types/nullable'
import type {BooleanOrNotApplicable, NotApplicable}                                                                                                                                                                                                            from 'util/types/variables'

export class PropertyContainer
    implements Property {

    //region -------------------- Fields --------------------

    readonly #gameContainer
    readonly #gameStyleContainer
    readonly #themeContainer
    readonly #timeContainer
    readonly #limitContainer
    readonly #instrumentHolder

    //endregion -------------------- Fields --------------------

    public constructor(game: Lazy<GameProperty>,
                       gameStyle: Lazy<GameStyleProperty>,
                       theme: Lazy<ThemeProperty>,
                       time: Lazy<TimeProperty>,
                       limit: Lazy<LimitProperty>,
                       instrument: Lazy<InstrumentProperty>,) {
        this.#gameContainer = game
        this.#gameStyleContainer = gameStyle
        this.#themeContainer = theme
        this.#timeContainer = time
        this.#limitContainer = limit
        this.#instrumentHolder = instrument
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public get gameContainer(): GameProperty {
        return this.#gameContainer.value
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.gameContainer.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.gameContainer.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.gameContainer.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public get gameStyleContainer(): GameStyleProperty {
        return this.#gameStyleContainer.value
    }

    public get isInSuperMarioBrosStyle(): boolean {
        return this.gameStyleContainer.isInSuperMarioBrosStyle
    }

    public get isInSuperMarioBros3Style(): boolean {
        return this.gameStyleContainer.isInSuperMarioBros3Style
    }

    public get isInSuperMarioWorldStyle(): boolean {
        return this.gameStyleContainer.isInSuperMarioWorldStyle
    }

    public get isInNewSuperMarioBrosUStyle(): boolean {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle
    }

    public get isInSuperMario3DWorldStyle(): NullOrBoolean {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle
    }

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public get themeContainer(): ThemeProperty {
        return this.#themeContainer.value
    }

    public get isInGroundTheme(): boolean {
        return this.themeContainer.isInGroundTheme
    }

    public get isInUndergroundTheme(): boolean {
        return this.themeContainer.isInUndergroundTheme
    }

    public get isInUnderwaterTheme(): boolean {
        return this.themeContainer.isInUnderwaterTheme
    }

    public get isInDesertTheme(): NullOrBoolean {
        return this.themeContainer.isInDesertTheme
    }

    public get isInSnowTheme(): NullOrBoolean {
        return this.themeContainer.isInSnowTheme
    }

    public get isInSkyTheme(): NullOrBoolean {
        return this.themeContainer.isInSkyTheme
    }

    public get isInForestTheme(): NullOrBoolean {
        return this.themeContainer.isInForestTheme
    }

    public get isInGhostHouseTheme(): boolean {
        return this.themeContainer.isInGhostHouseTheme
    }

    public get isInAirshipTheme(): boolean {
        return this.themeContainer.isInAirshipTheme
    }

    public get isInCastleTheme(): boolean {
        return this.themeContainer.isInCastleTheme
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public get timeContainer(): TimeProperty {
        return this.#timeContainer.value
    }

    public get isInDayTheme(): boolean {
        return this.timeContainer.isInDayTheme
    }

    public get isInNightTheme(): NullOrBoolean {
        return this.timeContainer.isInNightTheme
    }

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public get limitContainer(): LimitProperty {
        return this.#limitContainer.value
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer(): GameStructureForEditorLimit {
        return this.limitContainer.editorLimitContainer
    }

    public get editorLimit_smm1And3ds(): NullOr<EntityLimits> {
        return this.limitContainer.editorLimit_smm1And3ds
    }

    public get editorLimit_smm2(): NullOr<| EntityLimits | NotApplicable> {
        return this.limitContainer.editorLimit_smm2
    }

    public get isUnknown_editorLimit_smm2(): boolean {
        return this.limitContainer.isUnknown_editorLimit_smm2
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitContainer(): PossibleIsInGeneralLimit {
        return this.limitContainer.isInGeneralLimitContainer
    }

    public get isInGeneralLimit(): BooleanOrNotApplicable {
        return this.limitContainer.isInGeneralLimit
    }

    public get isInGeneralLimitComment(): NullOr<PossibleGeneralEntityLimitComment> {
        return this.limitContainer.isInGeneralLimitComment
    }

    //endregion -------------------- General limit --------------------
    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitContainer(): PossibleIsInGeneralGlobalLimit {
        return this.limitContainer.isInGlobalGeneralLimitContainer
    }

    public get isInGlobalGeneralLimit(): BooleanOrNotApplicable {
        return this.limitContainer.isInGlobalGeneralLimit
    }

    public get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalEntityLimitComment> {
        return this.limitContainer.isInGlobalGeneralLimitComment
    }

    //endregion -------------------- Global general limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitContainer(): PossibleIsInPowerUpLimit {
        return this.limitContainer.isInPowerUpLimitContainer
    }

    public get isInPowerUpLimit(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInPowerUpLimit
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitContainer(): PossibleIsInProjectileLimit {
        return this.limitContainer.isInProjectileLimitContainer
    }

    public get isInProjectileLimit(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInProjectileLimit
    }

    public get isInProjectileLimitComment(): NullOr<PossibleProjectileEntityLimitComment> {
        return this.limitContainer.isInProjectileLimitComment
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Rendered object limit --------------------

    public get isInRenderedObjectLimitContainer(): PossibleIsInRenderedObjectLimit {
        return this.limitContainer.isInRenderedObjectLimitContainer
    }

    public get isInRenderedObjectLimit(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInRenderedObjectLimit
    }

    public get isInRenderedObjectLimitComment(): NullOr<PossibleRenderedObjectLimitTypeComment> {
        return this.limitContainer.isInRenderedObjectLimitComment
    }

    //endregion -------------------- Rendered object limit --------------------
    //region -------------------- Collected object limit --------------------

    public get isInCollectedCoinLimitContainer(): PossibleIsInCollectedCoinLimit {
        return this.limitContainer.isInCollectedCoinLimitContainer
    }

    public get isInCollectedCoinLimit(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInCollectedCoinLimit
    }

    //endregion -------------------- Collected object limit --------------------
    //region -------------------- Other limit --------------------

    public get otherLimitContainer(): PossibleOtherLimit {
        return this.limitContainer.otherLimitContainer
    }

    public get otherLimit(): | EntityLimits | NotApplicable {
        return this.limitContainer.otherLimit
    }

    public get otherLimitComment(): NullOr<PossibleOtherLimitComment> {
        return this.limitContainer.otherLimitComment
    }

    //endregion -------------------- Other limit --------------------

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    public get instrumentContainer(): InstrumentProperty {
        return this.#instrumentHolder.value
    }


    public get instruments(): readonly Instrument[] {
        return this.instrumentContainer.instruments
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer(): CanMakeASoundOutOfAMusicBlockProperty {
        return this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer
    }

    public get canMakeASoundOutOfAMusicBlock(): BooleanOrNotApplicable {
        return this.canMakeASoundOutOfAMusicBlockContainer.value
    }

    public get canMakeASoundOutOfAMusicBlockComment(): NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment> {
        return this.canMakeASoundOutOfAMusicBlockContainer.comment
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Instrument properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.gameContainer.toGameMap()
    }

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.gameStyleContainer.toGameStyleMap()
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
