import type {ReactState} from '../../util/react/ReactState'

import {Enum}           from '../../util/enum/Enum'
import {isInProduction} from '../../variables'

/**@deprecated*/
export abstract class AbstractAppOption<T, S extends ReactState, O extends number = number, N extends string = string, >
    extends Enum<O, N> {

    //region -------------------- Fields --------------------

    readonly #defaultValue: T

    //endregion -------------------- Fields --------------------

    protected constructor(defaultValue: T,) {
        super()
        this.#defaultValue = defaultValue
    }

    //region -------------------- Getter & setter methods --------------------

    /**@deprecated The method should no longer be used*/public get get(): T {
        if (!isInProduction)
            console.warn(`The get method in "${this._static.name}" is deprecated.`)
        return this.#defaultValue
    }


    /**@deprecated The method should no longer be used*/public set(value: T,): this
    /**@deprecated The method should no longer be used*/public set(value: T, nextState: S,): this
    public set(): this {
        if (!isInProduction)
            console.warn(`The set value in "${this._static.name}" is deprecated, a new method will be under its way!`)
        return this
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------
    //endregion -------------------- Enum methods --------------------

}
