import type {PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment} from 'core/entity/properties/limit/loader.types'
import type {Limits}                                                                                                                                                            from 'core/limit/Limits'

export interface LimitProperty {

    //region -------------------- Editor limit --------------------

    get editorLimit_smm1And3ds(): NullOr<| Limits | NotApplicable>

    get editorLimit_smm2(): NullOr<| Limits | NotApplicable>

    get isUnknown_editorLimit_smm2(): boolean

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimit(): BooleanOrNotApplicable

    get isInGeneralLimitComment(): NullOr<PossibleGeneralLimitComment>

    //endregion -------------------- General limit --------------------
    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimit(): BooleanOrNotApplicable

    get isInGlobalGeneralLimitComment(): NullOr<PossibleGeneralGlobalLimitComment>

    //endregion -------------------- Global general limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimit(): NullOrBooleanOrNotApplicable

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimit(): NullOrBooleanOrNotApplicable

    get isInProjectileLimitComment(): NullOr<PossibleProjectileLimitComment>

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Rendered object limit --------------------

    get isInRenderedObjectLimit(): NullOrBooleanOrNotApplicable

    get isInRenderedObjectLimitComment(): NullOr<PossibleRenderedObjectLimitTypeComment>

    //endregion -------------------- Rendered object limit --------------------
    //region -------------------- Collected object limit --------------------

    get isInCollectedCoinLimit(): NullOrBooleanOrNotApplicable

    //endregion -------------------- Collected object limit --------------------
    //region -------------------- Other limit --------------------

    get otherLimit(): NullOr<| Limits | NotApplicable>

    get otherLimitComment(): NullOr<PossibleOtherLimitComment>

    get isUnknown_otherLimit(): boolean

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
     * but with only the <u>editor limit</u> as possible true value.
     *
     * @see toLimitMap
     */
    toEditorLimitMap(): ReadonlyMap<Limits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link Limits},
     * but with only the <u>play limit</u> as possible true value.
     *
     * @see toLimitMap
     */
    toPlayLimitMap(): ReadonlyMap<Limits, boolean>

}
