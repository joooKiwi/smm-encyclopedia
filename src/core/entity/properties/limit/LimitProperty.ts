import type {Property}                                                                                                                                                          from 'core/_properties/Property'
import type {PropertyThatCanBeUnknown}                                                                                                                                          from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyThatCanBeUnknownWithComment}                                                                                                                               from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PropertyWithComment}                                                                                                                                               from 'core/_properties/PropertyWithComment'
import type {NotApplicableProperty, UnknownProperty}                                                                                                                            from 'core/_properties/PropertyWithEverything'
import type {PossibleGeneralLimitComment, PossibleGeneralGlobalLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment} from 'core/entity/properties/limit/loader.types'
import type {GameStructureFrom2Games}                                                                                                                                           from 'core/game/GameStructure'
import type {Limits}                                                                                                                                                            from 'core/limit/Limits'

export interface LimitProperty {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): GameStructureForEditorLimit

    get editorLimit_smm1And3ds(): NullOr<Limits>

    get editorLimit_smm2(): NullOr<| Limits | NotApplicable>

    get isUnknown_editorLimit_smm2(): boolean

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitContainer(): PossibleIsInGeneralLimit

    get isInGeneralLimit(): BooleanOrNotApplicable

    get isInGeneralLimitComment(): NullOr<PossibleGeneralLimitComment>

    //endregion -------------------- General limit --------------------
    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitContainer(): PossibleIsInGeneralGlobalLimit

    get isInGlobalGeneralLimit(): BooleanOrNotApplicable

    get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalLimitComment>

    //endregion -------------------- Global general limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitContainer(): PossibleIsInPowerUpLimit

    get isInPowerUpLimit(): NullOr<BooleanOrNotApplicable>

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitContainer(): PossibleIsInProjectileLimit

    get isInProjectileLimit(): NullOr<BooleanOrNotApplicable>

    get isInProjectileLimitComment(): NullOr<PossibleProjectileLimitComment>

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Rendered object limit --------------------

    get isInRenderedObjectLimitContainer(): PossibleIsInRenderedObjectLimit

    get isInRenderedObjectLimit(): NullOr<BooleanOrNotApplicable>

    get isInRenderedObjectLimitComment(): NullOr<PossibleRenderedObjectLimitTypeComment>

    //endregion -------------------- Rendered object limit --------------------
    //region -------------------- Collected object limit --------------------

    get isInCollectedCoinLimitContainer(): PossibleIsInCollectedCoinLimit

    get isInCollectedCoinLimit(): NullOr<BooleanOrNotApplicable>

    //endregion -------------------- Collected object limit --------------------
    //region -------------------- Other limit --------------------

    get otherLimitContainer(): PossibleOtherLimit

    get otherLimit(): NullOr<| Limits | NotApplicable>

    get otherLimitComment(): NullOr<PossibleOtherLimitComment>

    //endregion -------------------- Other limit --------------------

    /**
     * Return a {@link Map} based on the enum {@link Limits}
     * with every value stored inside {@link LimitProperty this instance}
     * as a boolean.
     *
     * @note It contain every value of the {@link Limits}
     */
    toLimitMap(): ReadonlyMap<Limits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link Limits},
     * but with only the <u>limit in the editor</u> as possible true value.
     *
     * @see toLimitMap
     */
    toLimitInTheEditorMap(): ReadonlyMap<Limits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link Limits},
     * but with only the <u>limit while playing</u> as possible true value.
     *
     * @see toLimitMap
     */
    toLimitWhilePlayingMap(): ReadonlyMap<Limits, boolean>

}

/** The game structure for the <u>editor {@link Limits}</u> */
export type GameStructureForEditorLimit = GameStructureFrom2Games<NullOr<Limits>, PossibleEditorLimit_SMM2>

//region -------------------- Single entity limit --------------------

type EditorLimit_SMM2 = PropertyThatCanBeUnknown<Limits, false>
export type PossibleEditorLimit_SMM2 = | EditorLimit_SMM2 | UnknownProperty | NotApplicableProperty

type GeneralLimitProperty = PropertyWithComment<boolean, NullOr<PossibleGeneralLimitComment>>
export type PossibleIsInGeneralLimit = | GeneralLimitProperty | NotApplicableProperty

type GeneralGlobalLimitProperty = PropertyWithComment<boolean, NullOr<PossibleGeneralGlobalLimitComment>>
export type PossibleIsInGeneralGlobalLimit = | GeneralGlobalLimitProperty | NotApplicableProperty

type PowerUpLimitProperty = Property<NullOrBoolean>
export type PossibleIsInPowerUpLimit = | PowerUpLimitProperty | NotApplicableProperty

type ProjectileLimitProperty = PropertyWithComment<boolean, NullOr<PossibleProjectileLimitComment>>
export type PossibleIsInProjectileLimit = | ProjectileLimitProperty | UnknownProperty | NotApplicableProperty

type RenderedObjectLimit = PropertyThatCanBeUnknownWithComment<boolean, boolean, NullOr<PossibleRenderedObjectLimitTypeComment>>
export type PossibleIsInRenderedObjectLimit = | RenderedObjectLimit | NotApplicableProperty

type CollectedCoinLimit = Property<NullOrBoolean>
export type PossibleIsInCollectedCoinLimit = | CollectedCoinLimit | NotApplicableProperty

type OtherLimitProperty = PropertyThatCanBeUnknownWithComment<Limits, boolean, NullOr<PossibleOtherLimitComment>>
export type PossibleOtherLimit = | OtherLimitProperty | UnknownProperty | NotApplicableProperty

//endregion -------------------- Single entity limit --------------------
