import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleName, PossiblePlacement} from './HeaderTypes.types'
import type {Nullable}                                         from '../../../../util/types'

export abstract class HeaderTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly HEAD = new class HeaderTypes_Head extends HeaderTypes {

        public override getLayout(layout: readonly string[][],) {
            return layout
        }

    }('head', 'top',)
    public static readonly FOOT = new class HeaderTypes_Foot extends HeaderTypes {

        public override getLayout(layout: readonly string[][],) {
            return [...layout].reverse()
        }

    }('foot', 'bottom',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: HeaderTypes

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #name
    readonly #placement

    //endregion -------------------- Fields --------------------

    private constructor(name: PossibleName, placement: PossiblePlacement,) {
        super()
        this.#name = name
        this.#placement = placement
    }

    //region -------------------- Getter methods --------------------

    public get simpleName(): PossibleName {
        return this.#name
    }

    public get placement(): PossiblePlacement {
        return this.#placement
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract getLayout(layout: readonly string[][],): readonly string[][]


    public static getValueByName(value: Nullable<| HeaderTypes | string>,): HeaderTypes {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.simpleName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return HeaderTypes
    }

    public static getValue(value: PossibleValueByEnumerable<HeaderTypes>,): HeaderTypes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<HeaderTypes> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
