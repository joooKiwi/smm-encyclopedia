import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleName, PossiblePlacement} from 'app/tools/table/header/HeaderTypes.types'
import type {Nullable}                                         from 'util/types/nullable'

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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<HeaderTypes, typeof HeaderTypes>> = class CompanionEnum_HeaderTypes
        extends BasicCompanionEnum<HeaderTypes, typeof HeaderTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_HeaderTypes

        private constructor() {
            super(HeaderTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_HeaderTypes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
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

    public static getValue(value: PossibleEnumerableValueBy<HeaderTypes>,): HeaderTypes {
        return HeaderTypes.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<HeaderTypes> {
        return HeaderTypes.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<HeaderTypes> {
        yield* HeaderTypes.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
