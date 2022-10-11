import type {ObjectHolder, PossibleValueOnObjectHolder} from './ObjectHolder'

import {ObjectHolderContainer} from './ObjectHolder.container'

export class DelayedObjectHolderContainer<T>
    implements ObjectHolder<T> {

    #hasBeenInitialised
    #object?: T
    readonly #callback

    public constructor(value: PossibleValueOnObjectHolder<T>,) {
        this.#hasBeenInitialised = false
        this.#callback = () => {
            this.#hasBeenInitialised = true
            return new ObjectHolderContainer(value).get
        }
    }


    public get hasBeenInitialised(): boolean {
        return this.#hasBeenInitialised
    }

    public get callback(): () => T {
        return this.#callback
    }

    public get get(): T {
        if (!this.hasBeenInitialised)
            this.#object = this.#callback()
        return this.#object!
    }

}
