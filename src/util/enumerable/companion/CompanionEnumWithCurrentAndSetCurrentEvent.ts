import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import type {Dispatch, SetStateAction}                                                               from 'react'
import {CompanionEnum}                                                                               from '@joookiwi/enumerable'

import {EMPTY_MAP} from 'util/emptyVariables'

/** A {@link CompanionEnum} that hold a "current" value as well as a "current event" */
export class CompanionEnumWithCurrentAndSetCurrentEvent<const ENUM extends Enumerable,
    const out ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    //region -------------------- Fields --------------------

    #current?: ENUM
    #onSetCurrentEvents?: Map<string, Dispatch<SetStateAction<NullOr<ENUM>>>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Current --------------------

    /** Get the current {@link Enumerable instance} that may be initialized */
    public get currentOrNull(): NullOr<ENUM> {
        return this.#current ?? null
    }

    /**
     * Get the non-nullable current {@link Enumerable instance}
     *
     * @throws ReferenceError The current {@link Enumerable instance} has not been initialized yet
     */
    public get current(): ENUM {
        if (this.#current == null)
            throw new ReferenceError(`The current value in "${this.instance.name}" has not been initialized yet.`,)
        return this.#current
    }

    /**
     * Set the current {@link Enumerable instance} held in the current instance
     *
     * @param value The {@link Enumerable instance} to set as the current one
     */
    public set current(value: PossibleEnumerableValueBy<ENUM>,) {
        const selectedValue = this.getValue(value,) as ENUM
        if (selectedValue === this.currentOrNull)
            return
        this.onSetCurrentEventOrEmpty.forEach(it => it(selectedValue,),)
        this._onSetCurrent(selectedValue,)
        this.#current = selectedValue
    }

    protected _onSetCurrent(value: ENUM,): void {
    }

    //region -------------------- Current --------------------
    //region -------------------- Event --------------------

    /** Get the current {@link Enumerable instance} event listener or <b>null</b> if it has not been initialized */
    public get onSetCurrentEventOrEmpty(): ReadonlyMap<string, Dispatch<SetStateAction<NullOr<ENUM>>>> {
        return this.#onSetCurrentEvents ?? EMPTY_MAP
    }

    /**
     * Get the non-nullable current {@link Enumerable instance} event listener
     *
     * @throws {ReferenceError} The event listener has not been initialized
     */
    public get onSetCurrentEvent(): ReadonlyMap<string, Dispatch<SetStateAction<NullOr<ENUM>>>> {
        if (this.#onSetCurrentEvents == null)
            throw new ReferenceError(`The events to set the current value in "${this.instance.name}" has not been initialized yet.`,)
        return this.#onSetCurrentEvents
    }

    /**
     * Initialize the event listener on the setting of the current {@link Enumerable instance}
     *
     * @param key The key associated to the event listener
     * @param value The event listener to set
     * @shouldOnlyBeCalledOnce
     */
    public setOnCurrentEvent(key: string, value: Dispatch<SetStateAction<NullOr<ENUM>>>,) {
        (this.#onSetCurrentEvents ??= new Map()).set(key, value,)
    }

    //region -------------------- Event --------------------

    //endregion -------------------- Getter & setter methods --------------------

}
