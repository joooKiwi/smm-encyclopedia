import type {ClassWithComment, PossibleComment}                                    from './ClassWithComment';
import type {ClassThatCanBeUnknown}                                                from './ClassThatCanBeUnknown';
import type {DEFAULT_COMMENT, DEFAULT_IS_UNKNOWN, PossibleValueReceived, Property} from './Property';
import type {ObjectHolder}                                                         from '../../util/holder/ObjectHolder';

import {CallbackCaller}        from '../../util/CallbackCaller';
import {ObjectHolderContainer} from '../../util/holder/ObjectHolderContainer';

export abstract class AbstractProperty<T, IS_UNKNOWN extends boolean = DEFAULT_IS_UNKNOWN, COMMENT extends PossibleComment = DEFAULT_COMMENT, >
    implements Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN>, ClassWithComment<COMMENT> {

    static readonly #DEFAULT_IS_UNKNOWN: DEFAULT_IS_UNKNOWN = false;
    static readonly #DEFAULT_COMMENT: DEFAULT_COMMENT = null;

    readonly #value: ObjectHolder<T>;
    readonly #isUnknown: IS_UNKNOWN;
    readonly #comment: COMMENT;

    protected constructor(value: PossibleValueReceived<T>,)
    protected constructor(value: PossibleValueReceived<T>, isUnknown: IS_UNKNOWN,)
    protected constructor(value: PossibleValueReceived<T>, comment: COMMENT,)
    protected constructor(value: PossibleValueReceived<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,)
    protected constructor(value: PossibleValueReceived<T>, isUnknown_or_comment?: IS_UNKNOWN | COMMENT, comment?: COMMENT,) {
        this.#value = value instanceof Function ? new CallbackCaller(value) : new ObjectHolderContainer<T>(value);
        if (isUnknown_or_comment == null) {
            this.#isUnknown = AbstractProperty.#DEFAULT_IS_UNKNOWN as IS_UNKNOWN;
            this.#comment = AbstractProperty.#DEFAULT_COMMENT as COMMENT;
        } else {
            if (typeof isUnknown_or_comment === 'boolean') {
                this.#isUnknown = isUnknown_or_comment;
                this.#comment = AbstractProperty.#DEFAULT_COMMENT as COMMENT;
            } else {
                this.#isUnknown = AbstractProperty.#DEFAULT_IS_UNKNOWN as IS_UNKNOWN;
                if (comment === undefined) {
                    this.#comment = isUnknown_or_comment;
                } else {
                    this.#comment = comment;
                }
            }
        }
    }


    public get value() {
        return this.#value.get;
    }

    public get isUnknown() {
        return this.#isUnknown;
    }

    public get comment() {
        return this.#comment;
    }

}
