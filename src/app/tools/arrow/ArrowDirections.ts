import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleName} from 'app/tools/arrow/ArrowDirections.types'
import type {Nullable}                      from 'util/types/nullable'

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

    public static readonly HORIZONTAL = new ArrowDirections('horizontal',)
    public static readonly VERTICAL =   new ArrowDirections('vertical',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: ArrowDirections

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------

    private constructor(value: PossibleName,) {
        super()
        this.#value = value
    }

    //region -------------------- Getter methods --------------------

    public get value(): PossibleName {
        return this.#value
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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ArrowDirections
    }

    public static getValue(value: PossibleValueByEnumerable<ArrowDirections>,): ArrowDirections {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ArrowDirections> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<ArrowDirections> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}
