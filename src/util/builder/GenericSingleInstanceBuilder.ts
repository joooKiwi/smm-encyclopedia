import type {Builder}      from 'util/builder/Builder'
import type {ObjectHolder} from 'util/holder/ObjectHolder'

import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'

/**
 * A generic builder that create only <b>once</b> an instance from another {@link Builder}.
 * @see Builder
 */
export class GenericSingleInstanceBuilder<T>
    implements Builder<T> {

    readonly #sourceBuilder: Builder<T>
    readonly #callbackCallerForBuilder: ObjectHolder<T>

    public constructor(builder: Builder<T>,) {
        this.#sourceBuilder = builder
        this.#callbackCallerForBuilder = new DelayedObjectHolderContainer(() => this.builder.build())
    }


    public get builder(): Builder<T> {
        return this.#sourceBuilder
    }

    public build(): T {
        return this.#callbackCallerForBuilder.get
    }

}
