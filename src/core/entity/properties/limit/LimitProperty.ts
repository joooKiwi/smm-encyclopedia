import type {BooleanProperty}                                                                                                                             from 'core/_properties/Property'
import type {PropertyThatCanBeUnknown}                                                                                                                    from 'core/_properties/PropertyThatCanBeUnknown'
import type {BooleanPropertyWithComment, PropertyWithComment}                                                                                             from 'core/_properties/PropertyWithComment'
import type {NotApplicableProperty, UnknownProperty}                                                                                                      from 'core/_properties/PropertyWithEverything'
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment} from 'core/entity/properties/limit/loader.types'
import type {EntityLimits}                                                                                                                                from 'core/entityLimit/EntityLimits'
import type {GameStructure}                                                                                                                               from 'core/game/GameStructure'
import type {NullOr}                                                                                                                                      from 'util/types/nullable'
import type {BooleanOrNotApplicable, NotApplicable}                                                                                                       from 'util/types/variables'

export interface LimitProperty<EDITOR_SMM1AND3DS extends NullOr<EntityLimits> = NullOr<EntityLimits>,
    EDITOR_SMM2 extends PossibleEditorLimit_SMM2 = PossibleEditorLimit_SMM2,
    GENERAL extends PossibleIsInGeneralLimit = PossibleIsInGeneralLimit,
    GENERAL_GLOBAL extends PossibleIsInGeneralGlobalLimit = PossibleIsInGeneralGlobalLimit,
    POWER_UP extends PossibleIsInPowerUpLimit = PossibleIsInPowerUpLimit,
    PROJECTILE extends PossibleIsInProjectileLimit = PossibleIsInProjectileLimit,
    OTHER extends PossibleOtherLimit = PossibleOtherLimit, > {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): GameStructureForEditorLimit

    get editorLimit_smm1And3ds(): NullOr<EntityLimits>

    get editorLimit_smm2(): NullOr<| EntityLimits | NotApplicable>

    get isUnknown_editorLimit_smm2(): boolean

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralLimit

    get isInGeneralLimitWhilePlaying(): BooleanOrNotApplicable

    get isInGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralEntityLimitComment>

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): PossibleIsInGeneralGlobalLimit

    get isInGlobalGeneralLimitWhilePlaying(): BooleanOrNotApplicable

    get isInGlobalGeneralLimitWhilePlayingComment(): NullOr<PossibleGeneralGlobalEntityLimitComment>

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): PossibleIsInPowerUpLimit

    get isInPowerUpLimitWhilePlaying(): NullOr<BooleanOrNotApplicable>

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): PossibleIsInProjectileLimit

    get isInProjectileLimitWhilePlaying(): NullOr<BooleanOrNotApplicable>

    get isInProjectileLimitWhilePlayingComment(): NullOr<PossibleProjectileEntityLimitComment>

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Other limit --------------------

    get otherLimitWhilePlayingContainer(): PossibleOtherLimit

    get otherLimitWhilePlaying(): | EntityLimits | NotApplicable

    get otherLimitWhilePlayingComment(): NullOr<PossibleOtherLimitComment>

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
export type GameStructureForEditorLimit = GameStructure<NullOr<EntityLimits>, NullOr<EntityLimits>, PossibleEditorLimit_SMM2>

//region -------------------- Single entity limit --------------------

/**@deprecated Use the type directly*/export type PossibleEditorLimit_SMM1And3DS = NullOr<EntityLimits>
export type EditorLimit_SMM2 = PropertyThatCanBeUnknown<EntityLimits, false>
export type PossibleEditorLimit_SMM2 = | EditorLimit_SMM2 | UnknownProperty | NotApplicableProperty

export type GeneralLimitProperty<COMMENT extends NullOr<PossibleGeneralEntityLimitComment> = NullOr<PossibleGeneralEntityLimitComment>, >
    = BooleanPropertyWithComment<boolean, COMMENT>
export type PossibleIsInGeneralLimit = | GeneralLimitProperty | NotApplicableProperty

export type GeneralGlobalLimitProperty<COMMENT extends NullOr<PossibleGeneralGlobalEntityLimitComment> = NullOr<PossibleGeneralGlobalEntityLimitComment>, >
    = BooleanPropertyWithComment<boolean, COMMENT>
export type PossibleIsInGeneralGlobalLimit = | GeneralGlobalLimitProperty | NotApplicableProperty

export type PowerUpLimitProperty = BooleanProperty
export type PossibleIsInPowerUpLimit = | PowerUpLimitProperty | NotApplicableProperty

export type ProjectileLimitProperty<COMMENT extends NullOr<PossibleProjectileEntityLimitComment> = NullOr<PossibleProjectileEntityLimitComment>, >
    = BooleanPropertyWithComment<boolean, COMMENT>
export type PossibleIsInProjectileLimit = | ProjectileLimitProperty | UnknownProperty | NotApplicableProperty

export type OtherLimitProperty<COMMENT extends NullOr<PossibleOtherLimitComment> = NullOr<PossibleOtherLimitComment>, >
    = PropertyWithComment<EntityLimits, COMMENT>
export type PossibleOtherLimit = | OtherLimitProperty | NotApplicableProperty

//endregion -------------------- Single entity limit --------------------
//region -------------------- Exclusive entity limit --------------------

/**@deprecated*/export type ExclusiveSMM1LimitProperty<EDITOR_SMM1AND3DS extends PossibleEditorLimit_SMM1And3DS = PossibleEditorLimit_SMM1And3DS, >
    = LimitProperty<EDITOR_SMM1AND3DS, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty>
/**@deprecated*/export type AbstractExclusiveSMM2LimitProperty<EDITOR_SMM2 extends PossibleEditorLimit_SMM2 = PossibleEditorLimit_SMM2, GENERAL extends GeneralLimitProperty = GeneralLimitProperty, GENERAL_GLOBAL extends GeneralGlobalLimitProperty = GeneralGlobalLimitProperty, POWER_UP extends PowerUpLimitProperty = PowerUpLimitProperty, PROJECTILE extends PossibleIsInProjectileLimit = PossibleIsInProjectileLimit, OTHER extends PossibleOtherLimit = PossibleOtherLimit, >
    = LimitProperty<null, EDITOR_SMM2, GENERAL, GENERAL_GLOBAL, POWER_UP, PROJECTILE, OTHER>
/**@deprecated*/export type ExclusiveSMM2LimitPropertyInSM3DW = AbstractExclusiveSMM2LimitProperty<PossibleEditorLimit_SMM2, GeneralLimitProperty, GeneralGlobalLimitProperty, PowerUpLimitProperty, ProjectileLimitProperty, NotApplicableProperty>
/**@deprecated*/export type ExclusiveSMM2LimitProperty = AbstractExclusiveSMM2LimitProperty

//endregion -------------------- Exclusive entity limit --------------------
