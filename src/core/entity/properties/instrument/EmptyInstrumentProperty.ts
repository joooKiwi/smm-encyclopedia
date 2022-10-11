import type {ClassWithNullObjectPattern, EmptyInstrumentName} from '../../../../util/ClassWithNullObjectPattern'
import type {InstrumentProperty}                              from './InstrumentProperty'
import type {NotApplicableProperty}                           from '../../../_properties/PropertyWithEverything'

import {EMPTY_ARRAY}       from '../../../../util/emptyVariables'
import {PropertyContainer} from '../../../_properties/Property.container'

/**
 * @singleton
 */
export class EmptyInstrumentProperty
    implements InstrumentProperty<NotApplicableProperty>,
        ClassWithNullObjectPattern<EmptyInstrumentName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyInstrumentProperty

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly instruments = EMPTY_ARRAY

    public readonly canMakeASoundOutOfAMusicBlockContainer = PropertyContainer.NOT_APPLICABLE_CONTAINER
    public readonly canMakeASoundOutOfAMusicBlock = this.canMakeASoundOutOfAMusicBlockContainer.value
    public readonly canMakeASoundOutOfAMusicBlockComment = this.canMakeASoundOutOfAMusicBlockContainer.comment

    //endregion -------------------- Getter methods --------------------

    public toString(): EmptyInstrumentName {
        return 'Empty instrument'
    }

}
