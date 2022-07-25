import type {ClassWithNullObjectPattern, EmptyLimitName} from '../../../../util/ClassWithNullObjectPattern';
import type {LimitProperty}                              from './LimitProperty';
import type {NotApplicableProperty}                      from '../../../_properties/PropertyWithEverything';

import {EMPTY_MAP}              from '../../../../util/emptyVariables';
import {GameStructureContainer} from '../../../game/GameStructure.container';
import {PropertyContainer}      from '../../../_properties/Property.container';

/**
 * @singleton
 */
export class EmptyLimitProperty
    implements LimitProperty<null, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty, NotApplicableProperty>,
        ClassWithNullObjectPattern<EmptyLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimitProperty;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly editorLimitContainer = GameStructureContainer.get(null, PropertyContainer.NOT_APPLICABLE_CONTAINER,);
    public readonly editorLimit_smm1And3ds = this.editorLimitContainer.superMarioMaker;
    public readonly editorLimit_smm2 = this.editorLimitContainer.superMarioMaker2.value;
    public readonly isUnknown_editorLimit_smm2 = this.editorLimitContainer.superMarioMaker2.isUnknown;

    public readonly isInGeneralLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInGeneralLimitWhilePlaying = this.isInGeneralLimitWhilePlayingContainer.value;
    public readonly isInGeneralLimitWhilePlayingComment = this.isInGeneralLimitWhilePlayingContainer.comment;

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInGlobalGeneralLimitWhilePlaying = this.isInGlobalGeneralLimitWhilePlayingContainer.value;
    public readonly isInGlobalGeneralLimitWhilePlayingComment = this.isInGlobalGeneralLimitWhilePlayingContainer.comment;

    public readonly isInPowerUpLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInPowerUpLimitWhilePlaying = this.isInPowerUpLimitWhilePlayingContainer.value;

    public readonly isInProjectileLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly isInProjectileLimitWhilePlaying = this.isInProjectileLimitWhilePlayingContainer.value;
    public readonly isInProjectileLimitWhilePlayingComment = this.isInProjectileLimitWhilePlayingContainer.comment;

    public readonly otherLimitWhilePlayingContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER;
    public readonly otherLimitWhilePlaying = this.otherLimitWhilePlayingContainer.value;
    public readonly otherLimitWhilePlayingComment = this.otherLimitWhilePlayingContainer.comment;

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toLimitMap() {
        return EMPTY_MAP;
    }

    public toLimitInTheEditorMap() {
        return EMPTY_MAP;
    }

    public toLimitWhilePlayingMap() {
        return EMPTY_MAP;
    }

    //endregion -------------------- Convertor methods --------------------

    public toString(): EmptyLimitName {
        return 'Empty limit';
    }

}
