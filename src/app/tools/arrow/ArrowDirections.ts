import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleDirection, PossibleName} from 'app/tools/arrow/ArrowDirections.types'
import type {CompanionEnumByValueSingleton}                    from 'util/enumerable/Singleton.types'

import {CompanionEnumByValue} from 'util/enumerable/companion/CompanionEnumByValue'

/**
 * The arrow direction.<br/>
 *
 * It contains the value as a string directly.<br/>
 *
 * The only possible values are vertical & horizontal.
 */
export class ArrowDirections
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly HORIZONTAL = new ArrowDirections('horizontal', 'row',)
    public static readonly VERTICAL =   new ArrowDirections('vertical', 'column',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByValueSingleton<string, ArrowDirections, typeof ArrowDirections> = class CompanionEnum_ArrowDirections
        extends CompanionEnumByValue<string, ArrowDirections, typeof ArrowDirections> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ArrowDirections

        private constructor() {
            super(ArrowDirections,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ArrowDirections()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #value
    readonly #direction

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: PossibleName, direction: PossibleDirection,) {
        super()
        this.#value = value
        this.#direction = direction
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /** The basic name of an arrow direction */
    public get value(): PossibleName {
        return this.#value
    }

    /** The flex direction of a container */
    public get direction(): PossibleDirection {
        return this.#direction
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
