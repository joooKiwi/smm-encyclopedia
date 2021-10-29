import type {LimitProperty}                              from './LimitProperty';
import type {ClassWithNullObjectPattern, EmptyLimitName} from '../../../util/ClassWithNullObjectPattern';

import {PropertyContainer} from '../../_properties/Property.container';

/**
 * @singleton
 */
export class EmptyLimitProperty
    implements LimitProperty<null, null, null, null, null, null>, ClassWithNullObjectPattern<EmptyLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimitProperty;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly editorLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly editorLimit = this.editorLimitContainer.value;
    public readonly isEditorLimitUnknown = this.editorLimitContainer.isUnknown;

    public readonly isInGeneralLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInGeneralLimitWhilePlaying = this.isInGeneralLimitWhilePlayingContainer.value;
    public readonly isInGeneralLimitWhilePlayingComment = this.isInGeneralLimitWhilePlayingContainer.comment;

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInGlobalGeneralLimitWhilePlaying = this.isInGlobalGeneralLimitWhilePlayingContainer.value;
    public readonly isInGlobalGeneralLimitWhilePlayingComment = this.isInGlobalGeneralLimitWhilePlayingContainer.comment;

    public readonly isInPowerUpLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInPowerUpLimitWhilePlaying = this.isInPowerUpLimitWhilePlayingContainer.value;
    public readonly isInPowerUpLimitWhilePlayingComment = this.isInPowerUpLimitWhilePlayingContainer.comment;

    public readonly isInProjectileLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInProjectileLimitWhilePlaying = this.isInProjectileLimitWhilePlayingContainer.value;
    public readonly isInProjectileLimitWhilePlayingUnknown = this.isInProjectileLimitWhilePlayingContainer.isUnknown;
    public readonly isInProjectileLimitWhilePlayingComment = this.isInProjectileLimitWhilePlayingContainer.comment;

    public readonly customLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly customLimitWhilePlaying = this.customLimitWhilePlayingContainer.value;
    public readonly isCustomLimitWhilePlayingUnknown = this.customLimitWhilePlayingContainer.isUnknown;
    public readonly customLimitWhilePlayingComment = this.customLimitWhilePlayingContainer.comment;


    public toString(): EmptyLimitName {
        return 'Empty limit';
    }

}
