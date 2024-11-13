import type {Instrument} from 'core/instrument/Instrument'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EmptyStringName}      from 'lang/name/EmptyStringName'
import {Empty}                from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY
import EMPTY_MAP =   Empty.EMPTY_MAP

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
    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    public toGameMap(): EmptyMap {
        return EMPTY_MAP
    }

}
