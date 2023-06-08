import type {EnumerableConstructor, Enumerable, PossibleEnumerableValueBy, BasicCompanionEnumDeclaration} from '@joookiwi/enumerable/dist/types'
import type {Dispatch, SetStateAction}                                                                    from 'react'

import type {ClassWithCurrent}         from 'util/enumerable/ClassWithCurrent'
import type {ClassWithSetCurrentEvent} from 'util/enumerable/ClassWithSetCurrentEvent'
import type {NullOr}                   from 'util/types/nullable'

/**
 * A simple implementation of the {@link ClassWithCurrent} using the {@link Enumerable} as the type validation
 * as well as the {@link EnumerableConstructor} to call the static methods
 */
export class ClassWithCurrentAndEventImplementation<const T extends Enumerable, >
    implements ClassWithCurrent<T>, ClassWithSetCurrentEvent<T> {

    //region -------------------- Fields --------------------

    readonly #constructorValue
    #current?: T
    #onSetCurrentEvent?: Dispatch<SetStateAction<NullOr<T>>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(constructorValue: EnumerableConstructor<T, BasicCompanionEnumDeclaration<T, any>> & Iterable<T>,) {
        this.#constructorValue = constructorValue
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Current --------------------

    public get currentOrNull(): NullOr<T> {
        return this.#current ?? null
    }

    public get current(): T {
        if (this.#current == null)
            throw new ReferenceError(`The current value in "${this.#constructorValue.name}" has not been initialized yet.`)
        return this.#current
    }

    public set current(value: PossibleEnumerableValueBy<T>,) {
        const selectedValue = this.#constructorValue.CompanionEnum.get.getValue(value)
        if (selectedValue === this.currentOrNull)
            return
        this.onSetCurrentEventOrNull?.(selectedValue,)
        this._onSetCurrent(selectedValue)
        this.#current = selectedValue
    }

    protected _onSetCurrent(value: T,): void {
    }

    //endregion -------------------- Current --------------------
    //region -------------------- Event --------------------

    public get onSetCurrentEventOrNull(): NullOr<Dispatch<SetStateAction<NullOr<T>>>> {
        return this.#onSetCurrentEvent ?? null
    }

    public get onSetCurrentEvent(): Dispatch<SetStateAction<NullOr<T>>> {
        if (this.#onSetCurrentEvent == null)
            throw new ReferenceError(`The event to set the current value in "${this.#constructorValue.name}" has not been initialized yet.`)
        return this.#onSetCurrentEvent
    }

    public set onSetCurrentEvent(value: Dispatch<SetStateAction<NullOr<T>>>,) {
        this.#onSetCurrentEvent = value
    }

    //endregion -------------------- Event --------------------

    //endregion -------------------- Getter & setter methods --------------------

}
