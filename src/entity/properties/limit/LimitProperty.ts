import type {EntityLimits}                                   from '../../limit/EntityLimits';
import type {SingleLimitThatCanBeUnknownProperty}            from './single/SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                 from './single/SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty} from './single/SingleLimitWithCommentThatCanBeUnknownProperty';

export type PossibleEditorLimit = EntityLimits;
export type PossibleGeneralLimitWhilePlaying = | boolean | 2 | 'Only when collected';
export type PossibleGlobalGeneralLimitWhilePlaying = | boolean | 'Not on track';
export type PossiblePowerUpLimitWhilePlaying = boolean;
export type PossibleProjectileLimitWhilePlaying = | boolean | 'Temporary as it comes out' | 'Each one separated';
export type PossibleCustomLimitWhilePlaying = EntityLimits;

export interface LimitProperty<EDITOR extends | PossibleEditorLimit | null = | PossibleEditorLimit | null,
    GENERAL extends | PossibleGeneralLimitWhilePlaying | null = | PossibleGeneralLimitWhilePlaying | null,
    GENERAL_GLOBAL extends | PossibleGlobalGeneralLimitWhilePlaying | null = | PossibleGlobalGeneralLimitWhilePlaying | null,
    POWER_UP extends | PossiblePowerUpLimitWhilePlaying | null = | PossiblePowerUpLimitWhilePlaying | null,
    PROJECTILE extends | PossibleProjectileLimitWhilePlaying | null = | PossibleProjectileLimitWhilePlaying | null,
    CUSTOM extends | PossibleCustomLimitWhilePlaying | null = | PossibleCustomLimitWhilePlaying | null, > {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): | SingleLimitThatCanBeUnknownProperty<Exclude<EDITOR, null>> | null

    get editorLimit(): EDITOR

    get isEditorLimitKnown(): boolean

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): | SingleLimitWithCommentProperty<Exclude<GENERAL, null>> | null

    get isInGeneralLimitWhilePlaying(): GENERAL

    get isInGeneralLimitWhilePlayingComment(): | string | null

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): | SingleLimitWithCommentProperty<Exclude<GENERAL_GLOBAL, null>> | null

    get isInGlobalGeneralLimitWhilePlaying(): GENERAL_GLOBAL

    get isInGlobalGeneralLimitWhilePlayingComment(): | string | null

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): | SingleLimitWithCommentProperty<Exclude<POWER_UP, null>> | null

    get isInPowerUpLimitWhilePlaying(): POWER_UP

    get isInPowerUpLimitWhilePlayingComment(): | string | null

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): | SingleLimitWithCommentThatCanBeUnknownProperty<Exclude<PROJECTILE, null>> | null

    get isInProjectileLimitWhilePlaying(): PROJECTILE

    get isInProjectileLimitWhilePlayingKnown(): boolean

    get isInProjectileLimitWhilePlayingComment(): | string | null

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    get customLimitWhilePlayingContainer(): | SingleLimitWithCommentThatCanBeUnknownProperty<Exclude<CUSTOM, null>> | null

    get customLimitWhilePlaying(): CUSTOM

    get isCustomLimitWhilePlayingKnown(): boolean

    get customLimitWhilePlayingComment(): | string | null

    //endregion -------------------- Custom limit --------------------

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits}
     * with every values stored inside {@link LimitProperty this instance}
     * as a boolean or the constant {@link LimitPropertyContainer.VARIABLE_STRING}.
     */
    // toLimitMap(): ReadonlyMap<EntityLimits, | boolean | 'Variable'>
    //
    // toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, | boolean | 'Variable'>
    //
    // toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, | boolean | 'Variable'>

}

export type ExclusiveSMM1LimitProperty = LimitProperty<null, null, null, null, null, null>;
export type ExclusiveSMM2LimitProperty<EDITOR extends | PossibleEditorLimit | null = | PossibleEditorLimit | null, GENERAL extends | boolean = boolean, GENERAL_GLOBAL extends boolean = boolean, POWER_UP extends boolean = boolean, PROJECTILE extends | PossibleProjectileLimitWhilePlaying = | PossibleProjectileLimitWhilePlaying, CUSTOM extends | PossibleCustomLimitWhilePlaying | null = | PossibleCustomLimitWhilePlaying | null, >
    = LimitProperty<EDITOR, GENERAL, GENERAL_GLOBAL, POWER_UP, PROJECTILE, CUSTOM>;
export type ExclusiveSMM2LimitPropertyInSM3DW = ExclusiveSMM2LimitProperty<| PossibleEditorLimit | null, boolean, boolean, boolean, boolean>;
export type ExclusiveSMM2LimitPropertyInAnyStyle = ExclusiveSMM2LimitProperty;