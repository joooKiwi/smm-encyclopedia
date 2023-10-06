import type {Property}                                                                                                                                                                            from 'core/_properties/Property'
import type {PropertyThatCanBeUnknown}                                                                                                                                                            from 'core/_properties/PropertyThatCanBeUnknown'
import type {PropertyThatCanBeUnknownWithComment}                                                                                                                                                 from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PropertyWithComment}                                                                                                                                                                 from 'core/_properties/PropertyWithComment'
import type {NotApplicableProperty, UnknownProperty}                                                                                                                                              from 'core/_properties/PropertyWithEverything'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment, PossibleRenderedObjectLimitTypeComment} from 'core/entity/properties/limit/loader.types'
import type {EntityLimits}                                                                                                                                                                        from 'core/entityLimit/EntityLimits'
import type {GameStructureFrom2Games}                                                                                                                                                             from 'core/game/GameStructure'

export interface LimitProperty {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): GameStructureForEditorLimit

    get editorLimit_smm1And3ds(): NullOr<EntityLimits>

    get editorLimit_smm2(): NullOr<| EntityLimits | NotApplicable>

    get isUnknown_editorLimit_smm2(): boolean

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitContainer(): PossibleIsInGeneralLimit

    get isInGeneralLimit(): BooleanOrNotApplicable

    get isInGeneralLimitComment(): NullOr<PossibleGeneralEntityLimitComment>

    //endregion -------------------- General limit --------------------
    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitContainer(): PossibleIsInGeneralGlobalLimit

    get isInGlobalGeneralLimit(): BooleanOrNotApplicable

    get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalEntityLimitComment>

    //endregion -------------------- Global general limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitContainer(): PossibleIsInPowerUpLimit

    get isInPowerUpLimit(): NullOr<BooleanOrNotApplicable>

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitContainer(): PossibleIsInProjectileLimit

    get isInProjectileLimit(): NullOr<BooleanOrNotApplicable>

    get isInProjectileLimitComment(): NullOr<PossibleProjectileEntityLimitComment>

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

    get otherLimit(): NullOr<| EntityLimits | NotApplicable>

    get otherLimitComment(): NullOr<PossibleOtherLimitComment>

    //endregion -------------------- Other limit --------------------

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits}
     * with every value stored inside {@link LimitProperty this instance}
     * as a boolean.
     *
     * @note It contain every value of the {@link EntityLimits}
     */
    toLimitMap(): ReadonlyMap<EntityLimits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits},
     * but with only the <u>limit in the editor</u> as possible true value.
     *
     * @see toLimitMap
     */
    toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits},
     * but with only the <u>limit while playing</u> as possible true value.
     *
     * @see toLimitMap
     */
    toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, boolean>

}

/** The game structure for the <u>editor {@link EntityLimits limit}</u> */
export type GameStructureForEditorLimit = GameStructureFrom2Games<NullOr<EntityLimits>, PossibleEditorLimit_SMM2>

//region -------------------- Single entity limit --------------------

type EditorLimit_SMM2 = PropertyThatCanBeUnknown<EntityLimits, false>
export type PossibleEditorLimit_SMM2 = | EditorLimit_SMM2 | UnknownProperty | NotApplicableProperty

type GeneralLimitProperty = PropertyWithComment<boolean, NullOr<PossibleGeneralEntityLimitComment>>
export type PossibleIsInGeneralLimit = | GeneralLimitProperty | NotApplicableProperty

type GeneralGlobalLimitProperty = PropertyWithComment<boolean, NullOr<PossibleGeneralGlobalEntityLimitComment>>
export type PossibleIsInGeneralGlobalLimit = | GeneralGlobalLimitProperty | NotApplicableProperty

type PowerUpLimitProperty = Property<NullOrBoolean>
export type PossibleIsInPowerUpLimit = | PowerUpLimitProperty | NotApplicableProperty

type ProjectileLimitProperty = PropertyWithComment<boolean, NullOr<PossibleProjectileEntityLimitComment>>
export type PossibleIsInProjectileLimit = | ProjectileLimitProperty | UnknownProperty | NotApplicableProperty

type RenderedObjectLimit = PropertyThatCanBeUnknownWithComment<boolean, boolean, NullOr<PossibleRenderedObjectLimitTypeComment>>
export type PossibleIsInRenderedObjectLimit = | RenderedObjectLimit | NotApplicableProperty

type CollectedCoinLimit = Property<NullOrBoolean>
export type PossibleIsInCollectedCoinLimit = | CollectedCoinLimit | NotApplicableProperty

type OtherLimitProperty = PropertyThatCanBeUnknownWithComment<EntityLimits, boolean, NullOr<PossibleOtherLimitComment>>
export type PossibleOtherLimit = | OtherLimitProperty | UnknownProperty | NotApplicableProperty

//endregion -------------------- Single entity limit --------------------
