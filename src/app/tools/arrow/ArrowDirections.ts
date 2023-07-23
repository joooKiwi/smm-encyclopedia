import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleDirection, PossibleName} from 'app/tools/arrow/ArrowDirections.types'

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

    public static readonly CompanionEnum: CompanionEnumSingleton<ArrowDirections, typeof ArrowDirections> = class CompanionEnum_ArrowDirections
        extends CompanionEnum<ArrowDirections, typeof ArrowDirections> {

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

    // public static getValueByValue<T,>(value: T,): ArrowDirectionsByValue<T>
    public static getValueByValue(value: Nullable<| ArrowDirections | string>,): ArrowDirections {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.value === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<ArrowDirections>,): ArrowDirections {
        return ArrowDirections.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<ArrowDirections> {
        return ArrowDirections.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<ArrowDirections> {
        yield* ArrowDirections.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
