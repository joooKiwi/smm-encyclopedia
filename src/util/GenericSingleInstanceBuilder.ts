import type {Builder} from './Builder';

import {CallbackCaller} from './CallbackCaller';

/**
 * A generic builder that create only <b>once</b> an instance from another {@link Builder}.
 * @see Builder
 */
export class GenericSingleInstanceBuilder<T>
    implements Builder<T> {

    readonly #sourceBuilder: Builder<T>;
    readonly #callbackCallerForBuilder: CallbackCaller<T>;

    public constructor(builder: Builder<T>,) {
        this.#sourceBuilder = builder;
        this.#callbackCallerForBuilder = new CallbackCaller(() => this.builder.build());
    }


    public get builder(): Builder<T> {
        return this.#sourceBuilder;
    }

    public build(): T {
        return this.#callbackCallerForBuilder.get;
    }

}
