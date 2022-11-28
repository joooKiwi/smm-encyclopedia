import type {NullOrBoolean} from '../../../../util/types'
import type {TimeProperty}  from './TimeProperty'

import {Import}     from '../../../../util/DynamicImporter'
import type {Times} from '../../../time/Times'

/**
 * @classWithDynamicImport {@link Times}
 */
export class TimePropertyContainer<DAY extends boolean = boolean, NIGHT extends NullOrBoolean = NullOrBoolean, >
    implements TimeProperty<DAY, NIGHT> {

    //region -------------------- Fields --------------------

    #map?: ReadonlyMap<Times, boolean>
    readonly #isInDayTheme
    readonly #isInNightTheme: NIGHT//FIXME this type is only there to help typescript (it's not the standard)

    //endregion -------------------- Fields --------------------

    constructor(isInDayTheme: DAY, isInNightTheme: NIGHT,) {
        this.#isInDayTheme = isInDayTheme
        this.#isInNightTheme = isInNightTheme
    }

    //region -------------------- Getter methods --------------------

    public get isInDayTheme() {
        return this.#isInDayTheme
    }

    public get isInNightTheme() {
        return this.#isInNightTheme
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#map ??= new Map(Import.Times.values.map(time => [time, time.get(this),]))
    }

    //endregion -------------------- Convertor methods --------------------

}
