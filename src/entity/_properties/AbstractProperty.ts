import {ClassWithComment, PossibleComment} from './ClassWithComment';
import {Property}                          from './Property';
import {ClassThatCanBeUnknown}             from './ClassThatCanBeUnknown';

export class AbstractProperty<T, IS_UNKNOWN extends boolean = DEFAULT_IS_UNKNOWN, COMMENT extends PossibleComment = DEFAULT_COMMENT, >
    implements Property<T>, ClassThatCanBeUnknown<IS_UNKNOWN>, ClassWithComment<COMMENT> {

    static readonly #DEFAULT_IS_UNKNOWN: DEFAULT_IS_UNKNOWN = false;
    static readonly #DEFAULT_COMMENT: DEFAULT_COMMENT = null;

    readonly #value: T;
    readonly #isUnknown: IS_UNKNOWN;
    readonly #comment: COMMENT;

    public constructor(value: T,)
    public constructor(value: T, isUnknown: IS_UNKNOWN,)
    public constructor(value: T, comment: COMMENT,)
    public constructor(value: T, isUnknown: IS_UNKNOWN, comment: COMMENT,)
    public constructor(value: T, isUnknown_or_comment?: IS_UNKNOWN | COMMENT, comment?: COMMENT,) {
        this.#value = value;
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
        return this.#value;
    }

    public get isUnknown() {
        return this.#isUnknown;
    }

    public get comment() {
        return this.#comment;
    }

}

export type DEFAULT_IS_UNKNOWN = false;
export type DEFAULT_COMMENT = null;
