import type {EmptyMap} from '@joookiwi/type'

import type {Instrument} from 'core/instrument/Instrument'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EmptyStringName}      from 'lang/name/EmptyStringName'
import {Empty}                from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER
import EMPTY_MAP =               Empty.EMPTY_MAP

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

    public readonly entities = EMPTY_COLLECTION_HOLDER
    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    public readonly isInSuperMarioBrosStyle = false
    public readonly isInSuperMarioBros3Style = false
    public readonly isInSuperMarioWorldStyle = false
    public readonly isInNewSuperMarioBrosUStyle = false
    public readonly isInSuperMario3DWorldStyle = false

    public readonly isInDayTheme = false
    public readonly isInNightTheme = false

    public toGameMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toGameStyleMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toTimeMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

}
