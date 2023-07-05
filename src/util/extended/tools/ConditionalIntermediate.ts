import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import {AbstractIntermediate} from 'util/extended/tools/AbstractIntermediate'

export class ConditionalIntermediate<T, >
    extends AbstractIntermediate<T> {

    //region -------------------- Fields --------------------

    readonly #conditionCallbackHolder: Lazy<boolean>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(reference: T, conditionCallback: () => boolean,) {
        super(reference)
        this.#conditionCallbackHolder = lazy(conditionCallback,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    protected get _conditionCallbackResult(): boolean {
        return this.#conditionCallbackHolder.value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public isMet<U>(callback: (reference: T,) => U,): | T | U {
        if (this._conditionCallbackResult)
            return callback(this._reference)
        return this._reference
    }

    public isNotMet<U>(callback: (reference: T,) => U,): | T | U {
        if (!this._conditionCallbackResult)
            return callback(this._reference)
        return this._reference
    }

    public throwAnException<U>(callback: (exception: Error,) => U,): | T | U {
        try {
            // eslint-disable-next-line
            this._conditionCallbackResult
        } catch (exception) {
            if (exception instanceof Error)
                return callback(exception)
            throw exception
        }
        return this._reference
    }

    //endregion -------------------- Methods --------------------

}
