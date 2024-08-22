import {CollectionHolder, GenericCollectionHolder}                        from '@joookiwi/collection'
import type {CompanionEnumDeclaration, Enumerable, EnumerableConstructor} from '@joookiwi/enumerable'
import type {Dispatch, SetStateAction}                                    from 'react'
import {CompanionEnum}                                                    from '@joookiwi/enumerable'

import {EMPTY_MAP}          from 'util/emptyVariables'
import {isCollectionEquals} from 'util/utilitiesMethods'

/** A {@link CompanionEnum} that hold a "current" values ({@link CollectionHolder}) as well as a "current event" */
export class CompanionEnumWithCurrentAndSetCurrentEventAsCollection<const ENUM extends Enumerable,
    const out ENUM_CONSTRUCTOR extends EnumerableConstructor<ENUM, CompanionEnumDeclaration<ENUM, ENUM_CONSTRUCTOR>>, >
    extends CompanionEnum<ENUM, ENUM_CONSTRUCTOR> {

    //region -------------------- Fields --------------------

    #current?: CollectionHolder<ENUM>
    #onSetCurrentEvents?: Map<string, Dispatch<SetStateAction<NullOr<CollectionHolder<ENUM>>>>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Current --------------------


    /** Get the current {@link Enumerable instances} that may be initialized */
    public get currentOrNull(): NullOr<CollectionHolder<ENUM>> {
        return this.#current ?? null
    }

    /**
     * Get the non-nullable current {@link Enumerable instances}
     *
     * @throws ReferenceError The current {@link Enumerable instances} have not been initialized yet
     */
    public get current(): CollectionHolder<ENUM> {
        if (this.#current == null)
            throw new ReferenceError(`The current values in "${this.instance.name}" has not been initialized yet.`,)
        return this.#current
    }

    /**
     * Set the current {@link Enumerable instances} held in the current instance
     *
     * @param value The {@link Enumerable instances} to set as the selected one
     */
    public set current(value: | CollectionHolder<ENUM> | readonly ENUM[],) {
        const current = this.currentOrNull
        if (value === current)
            return
        if (value instanceof Array)
            value = new GenericCollectionHolder(value,)
        if (current != null)
            if (isCollectionEquals(value, current,))
                return
        this.onSetCurrentEventOrEmpty.forEach(it => it(value as CollectionHolder<ENUM>,),)
        this._onSetCurrent(value,)
        this.#current = value
    }

    protected _onSetCurrent(value: CollectionHolder<ENUM>,): void {}

    //region -------------------- Current --------------------
    //region -------------------- Event --------------------

    /** Get the current {@link Enumerable instances} event listener or <b>null</b> if it has not been initialized */
    public get onSetCurrentEventOrEmpty(): ReadonlyMap<string, Dispatch<SetStateAction<NullOr<CollectionHolder<ENUM>>>>> {
        return this.#onSetCurrentEvents ?? EMPTY_MAP
    }

    /**
     * Get the non-nullable current {@link Enumerable instances} event listener
     *
     * @throws {ReferenceError} The event listener has not been initialized
     */
    public get onSetCurrentEvent(): ReadonlyMap<string, Dispatch<SetStateAction<NullOr<CollectionHolder<ENUM>>>>> {
        if (this.#onSetCurrentEvents == null)
            throw new ReferenceError(`The events to set the current values in "${this.instance.name}" has not been initialized yet.`,)
        return this.#onSetCurrentEvents
    }

    /**
     * Initialize the event listener on the setting of the current {@link Enumerable instances}
     *
     * @param key The key associated to the event listener
     * @param value The event listener to set
     * @shouldOnlyBeCalledOnce
     */
    public setOnCurrentEvent(key: string, value: Dispatch<SetStateAction<NullOr<CollectionHolder<ENUM>>>>,) {
        (this.#onSetCurrentEvents ??= new Map()).set(key, value,)
    }

    //region -------------------- Event --------------------

    //endregion -------------------- Getter & setter methods --------------------

}
