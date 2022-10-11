import type {Instrument} from './Instrument'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'
import {EmptyStringName}      from '../../lang/name/EmptyStringName'
import {EMPTY_ARRAY}          from '../../util/emptyVariables'

export class EmptyInstrument
    extends ClassContainingAName<string>
    implements Instrument {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyInstrument

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly entities = EMPTY_ARRAY

}
