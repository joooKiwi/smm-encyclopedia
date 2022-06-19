import type {ObjectHolder} from '../../holder/ObjectHolder';

import {AbstractIntermediate}         from './AbstractIntermediate';
import {DelayedObjectHolderContainer} from '../../holder/DelayedObjectHolder.container';

export class ConditionalIntermediate<T, >
    extends AbstractIntermediate<T> {

    //region -------------------- Attributes --------------------

    readonly #conditionCallbackHolder: ObjectHolder<boolean>;

    //endregion -------------------- Attributes --------------------

    public constructor(reference: T, conditionCallback: () => boolean,) {
        super(reference);
        this.#conditionCallbackHolder = new DelayedObjectHolderContainer(conditionCallback);
    }

    //region -------------------- Getter methods --------------------

    protected get _conditionCallbackResult(): boolean {
        return this.#conditionCallbackHolder.get;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public isMet<U>(callback: (reference: T,) => U,): | T | U {
        if (this._conditionCallbackResult)
            return callback(this._reference);
        return this._reference;
    }

    public isNotMet<U>(callback: (reference: T,) => U,): | T | U {
        if (!this._conditionCallbackResult)
            return callback(this._reference);
        return this._reference;
    }

    public throwAnException<U>(callback: (exception: Error,) => U,): | T | U {
        try {
            // eslint-disable-next-line
            this._conditionCallbackResult;
        } catch (exception) {
            if (exception instanceof Error)
                return callback(exception);
            throw exception;
        }
        return this._reference;
    }

    //endregion -------------------- Methods --------------------

}
