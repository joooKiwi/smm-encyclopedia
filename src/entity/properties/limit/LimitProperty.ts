import type {EntityLimits}                                                                                                                                                      from '../../limit/EntityLimits';
import type {CustomLimitContainer, EditorLimitContainer, PowerUpLimitContainer, ProjectileLimitContainer, SingleGeneralGlobalLimitContainer, SingleGeneralLimitContainer}       from './LimitProperty.types';
import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType} from './Loader.types';

export interface LimitProperty<EDITOR extends EditorLimitType = EditorLimitType,
    GENERAL extends GeneralEntityLimitType = GeneralEntityLimitType,
    GENERAL_GLOBAL extends GeneralGlobalEntityLimitType = GeneralGlobalEntityLimitType,
    POWER_UP extends PowerUpEntityLimitType = PowerUpEntityLimitType,
    PROJECTILE extends ProjectileEntityLimitType = ProjectileEntityLimitType,
    CUSTOM extends CustomLimitType = CustomLimitType, CUSTOM_COMMENT extends CustomLimitCommentType = CustomLimitCommentType, > {

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): EditorLimitContainer<EDITOR>

    get editorLimit(): this['editorLimitContainer']['value']

    get isEditorLimitUnknown(): this['editorLimitContainer']['isUnknown']

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): SingleGeneralLimitContainer<GENERAL>

    get isInGeneralLimitWhilePlaying(): this['isInGeneralLimitWhilePlayingContainer']['value']

    get isInGeneralLimitWhilePlayingComment(): this['isInGeneralLimitWhilePlayingContainer']['comment']

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): SingleGeneralGlobalLimitContainer<GENERAL_GLOBAL>

    get isInGlobalGeneralLimitWhilePlaying(): this['isInGlobalGeneralLimitWhilePlayingContainer']['value']

    get isInGlobalGeneralLimitWhilePlayingComment():  this['isInGlobalGeneralLimitWhilePlayingContainer']['comment']

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): PowerUpLimitContainer<POWER_UP>

    get isInPowerUpLimitWhilePlaying(): this['isInPowerUpLimitWhilePlayingContainer']['value']

    get isInPowerUpLimitWhilePlayingComment(): this['isInPowerUpLimitWhilePlayingContainer']['comment']

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): ProjectileLimitContainer<PROJECTILE>

    get isInProjectileLimitWhilePlaying(): this['isInProjectileLimitWhilePlayingContainer']['value']

    get isInProjectileLimitWhilePlayingUnknown(): this['isInProjectileLimitWhilePlayingContainer']['isUnknown']

    get isInProjectileLimitWhilePlayingComment(): this['isInProjectileLimitWhilePlayingContainer']['comment']

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    get customLimitWhilePlayingContainer(): CustomLimitContainer<CUSTOM>

    get customLimitWhilePlaying(): this['customLimitWhilePlayingContainer']['value']

    get isCustomLimitWhilePlayingUnknown(): this['customLimitWhilePlayingContainer']['isUnknown']

    get customLimitWhilePlayingComment(): this['customLimitWhilePlayingContainer']['comment']

    //endregion -------------------- Custom limit --------------------

    /**
     * Return a {@link Map} based on the enum {@link EntityLimits}
     * with every values stored inside {@link LimitProperty this instance}
     * as a boolean.
     */
    // toLimitMap(): ReadonlyMap<EntityLimits, | boolean | 'Variable'>
    //
    // toLimitInTheEditorMap(): ReadonlyMap<EntityLimits, | boolean>
    //
    // toLimitWhilePlayingMap(): ReadonlyMap<EntityLimits, | boolean>

}

export type ExclusiveSMM1LimitProperty = LimitProperty<null, null, null, null, null, null>;
export type AbstractExclusiveSMM2LimitProperty<EDITOR extends EditorLimitType = EditorLimitType, GENERAL extends boolean = boolean, GENERAL_GLOBAL extends boolean = boolean, POWER_UP extends boolean = boolean, PROJECTILE extends ProjectileEntityLimitType = ProjectileEntityLimitType, CUSTOM extends CustomLimitType = CustomLimitType, >
    = LimitProperty<EDITOR, GENERAL, GENERAL_GLOBAL, POWER_UP, PROJECTILE, CUSTOM, null>;
export type ExclusiveSMM2LimitPropertyInSM3DW = AbstractExclusiveSMM2LimitProperty<EditorLimitType, boolean, boolean, boolean, boolean>;
export type ExclusiveSMM2LimitProperty = AbstractExclusiveSMM2LimitProperty;
