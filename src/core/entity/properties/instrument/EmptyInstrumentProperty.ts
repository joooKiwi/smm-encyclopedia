import type {InstrumentProperty}                              from 'core/entity/properties/instrument/InstrumentProperty'
import type {ClassWithNullObjectPattern, EmptyInstrumentName} from 'util/ClassWithNullObjectPattern'

import {PropertyContainer} from 'core/_properties/Property.container'
import {EMPTY_ARRAY}       from 'util/emptyVariables'

/** @singleton */
export class EmptyInstrumentProperty
    implements InstrumentProperty,
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
