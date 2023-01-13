import type {LimitProperty}                              from 'core/entity/properties/limit/LimitProperty'
import type {ClassWithNullObjectPattern, EmptyLimitName} from 'util/ClassWithNullObjectPattern'
import type {EmptyMap}                                   from 'util/types/variables'

import {PropertyContainer}     from 'core/_properties/Property.container'
import {GameStructureProvider} from 'core/game/GameStructure.provider'
import {EMPTY_MAP}             from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyLimitProperty
    implements LimitProperty,
        ClassWithNullObjectPattern<EmptyLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyLimitProperty

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly editorLimitContainer = GameStructureProvider.get.get(null, PropertyContainer.NOT_APPLICABLE_CONTAINER,)
    public readonly editorLimit_smm1And3ds = this.editorLimitContainer.superMarioMaker
    public readonly editorLimit_smm2 = this.editorLimitContainer.superMarioMaker2.value
    public readonly isUnknown_editorLimit_smm2 = this.editorLimitContainer.superMarioMaker2.isUnknown

    public readonly isInGeneralLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInGeneralLimit = this.isInGeneralLimitContainer.value
    public readonly isInGeneralLimitComment = this.isInGeneralLimitContainer.comment

    public readonly isInGlobalGeneralLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInGlobalGeneralLimit = this.isInGlobalGeneralLimitContainer.value
    public readonly isInGlobalGeneralLimitComment = this.isInGlobalGeneralLimitContainer.comment

    public readonly isInPowerUpLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInPowerUpLimit = this.isInPowerUpLimitContainer.value

    public readonly isInProjectileLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInProjectileLimit = this.isInProjectileLimitContainer.value
    public readonly isInProjectileLimitComment = this.isInProjectileLimitContainer.comment

    public readonly isInRenderedObjectLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInRenderedObjectLimit = this.isInRenderedObjectLimitContainer.value
    public readonly isInRenderedObjectLimitComment = this.isInRenderedObjectLimitContainer.comment

    public readonly isInCollectedCoinLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly isInCollectedCoinLimit = this.isInCollectedCoinLimitContainer.value

    public readonly otherLimitContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly otherLimit = this.otherLimitContainer.value
    public readonly otherLimitComment = this.otherLimitContainer.comment

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toLimitMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toLimitInTheEditorMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toLimitWhilePlayingMap(): EmptyMap {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public toString(): EmptyLimitName {
        return 'Empty limit'
    }

}
