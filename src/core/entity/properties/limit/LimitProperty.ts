import type {EntityLimits}                                                                                                                                                from '../../../entityLimit/EntityLimits';
import type {CustomLimitContainer, EditorLimitContainer, PowerUpLimitContainer, ProjectileLimitContainer, SingleGeneralGlobalLimitContainer, SingleGeneralLimitContainer} from './LimitProperty.types';
import type {CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                   from './Loader.types';

export interface LimitProperty<EDITOR extends EditorLimitType = EditorLimitType,
    GENERAL extends GeneralEntityLimitType = GeneralEntityLimitType,
    GENERAL_GLOBAL extends GeneralGlobalEntityLimitType = GeneralGlobalEntityLimitType,
    POWER_UP extends PowerUpEntityLimitType = PowerUpEntityLimitType,
    PROJECTILE extends ProjectileEntityLimitType = ProjectileEntityLimitType,
    CUSTOM extends CustomLimitType = CustomLimitType, > {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): EditorLimitContainer<EDITOR>

    get editorLimit(): EditorLimitContainer<EDITOR>['value']

    get isEditorLimitUnknown(): EditorLimitContainer<EDITOR>['isUnknown']

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): SingleGeneralLimitContainer<GENERAL>

    get isInGeneralLimitWhilePlaying(): SingleGeneralLimitContainer<GENERAL>['value']

    get isInGeneralLimitWhilePlayingComment(): SingleGeneralLimitContainer<GENERAL>['comment']

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): SingleGeneralGlobalLimitContainer<GENERAL_GLOBAL>

    get isInGlobalGeneralLimitWhilePlaying(): SingleGeneralGlobalLimitContainer<GENERAL_GLOBAL>['value']

    get isInGlobalGeneralLimitWhilePlayingComment():  SingleGeneralGlobalLimitContainer<GENERAL_GLOBAL>['comment']

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): PowerUpLimitContainer<POWER_UP>

    get isInPowerUpLimitWhilePlaying(): PowerUpLimitContainer<POWER_UP>['value']

    get isInPowerUpLimitWhilePlayingComment(): PowerUpLimitContainer<POWER_UP>['comment']

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): ProjectileLimitContainer<PROJECTILE>

    get isInProjectileLimitWhilePlaying(): ProjectileLimitContainer<PROJECTILE>['value']

    get isInProjectileLimitWhilePlayingUnknown(): ProjectileLimitContainer<PROJECTILE>['isUnknown']

    get isInProjectileLimitWhilePlayingComment(): ProjectileLimitContainer<PROJECTILE>['comment']

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    get customLimitWhilePlayingContainer(): CustomLimitContainer<CUSTOM>

    get customLimitWhilePlaying(): CustomLimitContainer<CUSTOM>['value']

    get isCustomLimitWhilePlayingUnknown(): CustomLimitContainer<CUSTOM>['isUnknown']

    get customLimitWhilePlayingComment(): CustomLimitContainer<CUSTOM>['comment']

    //endregion -------------------- Custom limit --------------------

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

export type ExclusiveSMM1LimitProperty = LimitProperty<null, null, null, null, null, null>;
export type AbstractExclusiveSMM2LimitProperty<EDITOR extends EditorLimitType = EditorLimitType, GENERAL extends boolean = boolean, GENERAL_GLOBAL extends boolean = boolean, POWER_UP extends boolean = boolean, PROJECTILE extends ProjectileEntityLimitType = ProjectileEntityLimitType, CUSTOM extends CustomLimitType = CustomLimitType,>
    = LimitProperty<EDITOR, GENERAL, GENERAL_GLOBAL, POWER_UP, PROJECTILE, CUSTOM>;
export type ExclusiveSMM2LimitPropertyInSM3DW = AbstractExclusiveSMM2LimitProperty<EditorLimitType, boolean, boolean, boolean, boolean, null>;
export type ExclusiveSMM2LimitProperty = AbstractExclusiveSMM2LimitProperty;
