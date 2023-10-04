import type {TimeProperty} from 'core/entity/properties/time/TimeProperty'

import type {Times} from 'core/time/Times'
import {Import}     from 'util/DynamicImporter'

/**
 * @classWithDynamicImport {@link Times}
 */
export class TimePropertyContainer<const DAY extends boolean = boolean, const NIGHT extends NullOrBoolean = NullOrBoolean, >
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

    public get isInDayTheme(): DAY {
        return this.#isInDayTheme
    }

    public get isInNightTheme(): NIGHT {
        return this.#isInNightTheme
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#map ??= new Map(Import.Times.CompanionEnum.get.values.map(time => [time, time.get(this),],),)
    }

    //endregion -------------------- Convertor methods --------------------

}
