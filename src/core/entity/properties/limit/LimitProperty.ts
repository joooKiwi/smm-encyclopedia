import type {BooleanProperty}                                                                                                                             from '../../../_properties/Property';
import type {BooleanPropertyWithComment, PropertyWithComment}                                                                                             from '../../../_properties/PropertyWithComment';
import type {EntityLimits}                                                                                                                                from '../../../entityLimit/EntityLimits';
import type {GameStructure}                                                                                                                               from '../../../game/GameStructure';
import type {NotApplicableProperty, UnknownProperty}                                                                                                      from '../../../_properties/PropertyWithEverything';
import type {PossibleGeneralEntityLimitComment, PossibleGeneralGlobalEntityLimitComment, PossibleOtherLimitComment, PossibleProjectileEntityLimitComment} from './Loader.types';
import {PropertyThatCanBeUnknown}                                                                                                                         from '../../../_properties/PropertyThatCanBeUnknown';

export interface LimitProperty<EDITOR_SMM1AND3DS extends PossibleEditorLimit_SMM1And3DS = PossibleEditorLimit_SMM1And3DS,
    EDITOR_SMM2 extends PossibleEditorLimit_SMM2 = PossibleEditorLimit_SMM2,
    GENERAL extends PossibleIsInGeneralLimit = PossibleIsInGeneralLimit,
    GENERAL_GLOBAL extends PossibleIsInGeneralGlobalLimit = PossibleIsInGeneralGlobalLimit,
    POWER_UP extends PossibleIsInPowerUpLimit = PossibleIsInPowerUpLimit,
    PROJECTILE extends PossibleIsInProjectileLimit = PossibleIsInProjectileLimit,
    OTHER extends PossibleOtherLimit = PossibleOtherLimit, > {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): GameStructure<EDITOR_SMM1AND3DS, EDITOR_SMM1AND3DS, EDITOR_SMM2>

    get editorLimit_smm1And3ds(): EDITOR_SMM1AND3DS

    get editorLimit_smm2(): EDITOR_SMM2['value']

    get isUnknown_editorLimit_smm2(): EDITOR_SMM2['isUnknown']

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): GENERAL

    get isInGeneralLimitWhilePlaying(): GENERAL['value']

    get isInGeneralLimitWhilePlayingComment(): GENERAL['comment']

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): GENERAL_GLOBAL

    get isInGlobalGeneralLimitWhilePlaying(): GENERAL_GLOBAL['value']

    get isInGlobalGeneralLimitWhilePlayingComment(): GENERAL_GLOBAL['comment']

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): POWER_UP

    get isInPowerUpLimitWhilePlaying(): POWER_UP['value']

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): PROJECTILE

    get isInProjectileLimitWhilePlaying(): PROJECTILE['value']

    get isInProjectileLimitWhilePlayingComment(): PROJECTILE['comment']

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Other limit --------------------

    get otherLimitWhilePlayingContainer(): OTHER

    get otherLimitWhilePlaying(): OTHER['value']

    get otherLimitWhilePlayingComment(): OTHER['comment']

    //endregion -------------------- Other limit --------------------

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits}
     * with every values stored inside {@link LimitProperty this instance}
     * as a boolean.
     *
     * @note It contain every values of the {@link EntityLimits}
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

//region -------------------- Single entity limit --------------------

export type PossibleEditorLimit_SMM1And3DS = | EntityLimits | null;
export type EditorLimit_SMM2 = PropertyThatCanBeUnknown<EntityLimits, false>;
export type PossibleEditorLimit_SMM2 = | EditorLimit_SMM2 | UnknownProperty | NotApplicableProperty;

export type GeneralLimitProperty<COMMENT extends | PossibleGeneralEntityLimitComment | null = | PossibleGeneralEntityLimitComment | null, >
    = BooleanPropertyWithComment<boolean, COMMENT>;
export type PossibleIsInGeneralLimit = | GeneralLimitProperty | NotApplicableProperty;

export type GeneralGlobalLimitProperty<COMMENT extends | PossibleGeneralGlobalEntityLimitComment | null = | PossibleGeneralGlobalEntityLimitComment | null, >
    = BooleanPropertyWithComment<boolean, COMMENT>;
export type PossibleIsInGeneralGlobalLimit = | GeneralGlobalLimitProperty | NotApplicableProperty;

export type PowerUpLimitProperty = BooleanProperty;
export type PossibleIsInPowerUpLimit = | PowerUpLimitProperty | NotApplicableProperty;

export type ProjectileLimitProperty<COMMENT extends | PossibleProjectileEntityLimitComment | null = | PossibleProjectileEntityLimitComment | null, >
    = BooleanPropertyWithComment<boolean, COMMENT>;
export type PossibleIsInProjectileLimit = | ProjectileLimitProperty | UnknownProperty | NotApplicableProperty;

export type OtherLimitProperty<COMMENT extends | PossibleOtherLimitComment | null = | PossibleOtherLimitComment | null, >
    = PropertyWithComment<EntityLimits, COMMENT>;
export type PossibleOtherLimit = | OtherLimitProperty | NotApplicableProperty;

//endregion -------------------- Single entity limit --------------------
//region -------------------- Exclusive entity limit --------------------

/**@deprecated*/export type ExclusiveSMM1LimitProperty<EDITOR_SMM1AND3DS extends PossibleEditorLimit_SMM1And3DS = PossibleEditorLimit_SMM1And3DS, >
    = LimitProperty<EDITOR_SMM1AND3DS, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty>;
/**@deprecated*/export type AbstractExclusiveSMM2LimitProperty<EDITOR_SMM2 extends PossibleEditorLimit_SMM2 = PossibleEditorLimit_SMM2, GENERAL extends GeneralLimitProperty = GeneralLimitProperty, GENERAL_GLOBAL extends GeneralGlobalLimitProperty = GeneralGlobalLimitProperty, POWER_UP extends PowerUpLimitProperty = PowerUpLimitProperty, PROJECTILE extends PossibleIsInProjectileLimit = PossibleIsInProjectileLimit, OTHER extends PossibleOtherLimit = PossibleOtherLimit, >
    = LimitProperty<null, EDITOR_SMM2, GENERAL, GENERAL_GLOBAL, POWER_UP, PROJECTILE, OTHER>;
/**@deprecated*/export type ExclusiveSMM2LimitPropertyInSM3DW = AbstractExclusiveSMM2LimitProperty<PossibleEditorLimit_SMM2, GeneralLimitProperty, GeneralGlobalLimitProperty, PowerUpLimitProperty, ProjectileLimitProperty, NotApplicableProperty>;
/**@deprecated*/export type ExclusiveSMM2LimitProperty = AbstractExclusiveSMM2LimitProperty;

//endregion -------------------- Exclusive entity limit --------------------
