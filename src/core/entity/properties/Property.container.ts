import type {Property}                                                                                                                                                                        from 'core/entity/properties/Property'
import type {GameProperty}                                                                                                                                                                    from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}                                                                                                                                                               from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty}                                                                                                                       from 'core/entity/properties/instrument/InstrumentProperty'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                                   from 'core/entity/properties/instrument/loader.types'
import type {GameStructureForEditorLimit, LimitProperty, PossibleIsInGeneralGlobalLimit, PossibleIsInGeneralLimit, PossibleIsInPowerUpLimit, PossibleIsInProjectileLimit, PossibleOtherLimit} from 'core/entity/properties/limit/LimitProperty'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment}                                     from 'core/entity/properties/limit/loader.types'
import type {ThemeProperty}                                                                                                                                                                   from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}                                                                                                                                                                    from 'core/entity/properties/time/TimeProperty'
import type {EntityLimits}                                                                                                                                                                    from 'core/entityLimit/EntityLimits'
import type {Games}                                                                                                                                                                           from 'core/game/Games'
import type {GameStyles}                                                                                                                                                                      from 'core/gameStyle/GameStyles'
import type {Instrument}                                                                                                                                                                      from 'core/instrument/Instrument'
import type {Themes}                                                                                                                                                                          from 'core/theme/Themes'
import type {Times}                                                                                                                                                                           from 'core/time/Times'
import type {ObjectHolder}                                                                                                                                                                    from 'util/holder/ObjectHolder'
import type {NullOr, NullOrBoolean}                                                                                                                                                           from 'util/types/nullable'
import type {BooleanOrNotApplicable, NotApplicable}                                                                                                                                           from 'util/types/variables'

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

    public constructor(game: ObjectHolder<GameProperty>, gameStyle: ObjectHolder<GameStyleProperty>, theme: ObjectHolder<ThemeProperty>, time: ObjectHolder<TimeProperty>, limit: ObjectHolder<LimitProperty>, instrument: ObjectHolder<InstrumentProperty>,) {
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
        return this.#gameContainer.get
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
        return this.#gameStyleContainer.get
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
        return this.#themeContainer.get
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
        return this.#timeContainer.get
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
        return this.#limitContainer.get
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

    public get isInGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralLimit {
        return this.limitContainer.isInGeneralLimitWhilePlayingContainer
    }

    public get isInGeneralLimitWhilePlaying(): BooleanOrNotApplicable {
        return this.limitContainer.isInGeneralLimitWhilePlaying
    }

    public get isInGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralEntityLimitComment> {
        return this.limitContainer.isInGeneralLimitWhilePlayingComment
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralGlobalLimit {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingContainer
    }

    public get isInGlobalGeneralLimitWhilePlaying(): BooleanOrNotApplicable {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlaying
    }

    public get isInGlobalGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralGlobalEntityLimitComment> {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingComment
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer(): PossibleIsInPowerUpLimit {
        return this.limitContainer.isInPowerUpLimitWhilePlayingContainer
    }

    public get isInPowerUpLimitWhilePlaying(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInPowerUpLimitWhilePlaying
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer(): PossibleIsInProjectileLimit {
        return this.limitContainer.isInProjectileLimitWhilePlayingContainer
    }

    public get isInProjectileLimitWhilePlaying(): NullOr<BooleanOrNotApplicable> {
        return this.limitContainer.isInProjectileLimitWhilePlaying
    }

    public get isInProjectileLimitWhilePlayingComment(): NullOr<PossibleProjectileEntityLimitComment> {
        return this.limitContainer.isInProjectileLimitWhilePlayingComment
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get otherLimitWhilePlayingContainer(): PossibleOtherLimit {
        return this.limitContainer.otherLimitWhilePlayingContainer
    }

    public get otherLimitWhilePlaying(): | EntityLimits | NotApplicable {
        return this.limitContainer.otherLimitWhilePlaying
    }

    public get otherLimitWhilePlayingComment(): NullOr<PossibleOtherLimitComment> {
        return this.limitContainer.otherLimitWhilePlayingComment
    }

    //endregion -------------------- Custom limit --------------------
    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    public get instrumentContainer(): InstrumentProperty {
        return this.#instrumentHolder.get
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
