import type {DEFAULT_AMOUNT, DEFAULT_COMMENT, DEFAULT_IS_UNKNOWN}                                                       from './Property'
import type {FalseProperty, NotApplicableProperty, NullProperty, PropertyWithEverything, TrueProperty, UnknownProperty} from './PropertyWithEverything'
import type {NullOrNumber, NullOrString}                                                                                from '../../util/types'
import type {ObjectHolder, PossibleValueOnObjectHolder}                                                                 from '../../util/holder/ObjectHolder'

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container'

export class PropertyContainer<T, IS_UNKNOWN extends boolean = DEFAULT_IS_UNKNOWN, AMOUNT extends NullOrNumber = DEFAULT_AMOUNT, COMMENT extends NullOrString = DEFAULT_COMMENT, >
    implements PropertyWithEverything<T, IS_UNKNOWN, AMOUNT, COMMENT> {

    //region -------------------- Constants --------------------

    public static readonly UNKNOWN = '?'
    static readonly #DEFAULT_IS_UNKNOWN: DEFAULT_IS_UNKNOWN = false
    static readonly #DEFAULT_AMOUNT: DEFAULT_AMOUNT = null
    static readonly #DEFAULT_COMMENT: DEFAULT_COMMENT = null

    //endregion -------------------- Constants --------------------
    //region -------------------- Predefined properties --------------------

    public static readonly NULL_CONTAINER: NullProperty = new PropertyContainer(null, false, null, null,)

    public static readonly UNKNOWN_CONTAINER: UnknownProperty = new PropertyContainer(null, true, null, null,)

    public static readonly NOT_APPLICABLE_CONTAINER: NotApplicableProperty = new PropertyContainer('N/A', false, null, null,)

    public static readonly TRUE_CONTAINER: TrueProperty = new PropertyContainer(true, false, null, null,)
    public static readonly TRUE_WITH_AMOUNT_CONTAINER: TrueProperty<1> = new PropertyContainer(true, false, 1, null,)

    public static readonly FALSE_CONTAINER: FalseProperty = new PropertyContainer(false, false, null, null,)
    public static readonly FALSE_WITH_AMOUNT_CONTAINER: FalseProperty<0> = new PropertyContainer(false, false, 0, null,)

    //endregion -------------------- Predefined properties --------------------
    //region -------------------- Fields --------------------

    readonly #value: ObjectHolder<T>
    readonly #isUnknown: IS_UNKNOWN
    readonly #amount: AMOUNT
    readonly #comment: COMMENT

    //endregion -------------------- Fields --------------------

    protected constructor(value: PossibleValueOnObjectHolder<T>,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, comment: COMMENT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, amount: AMOUNT, comment: COMMENT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, comment: COMMENT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, isUnknown: IS_UNKNOWN, amount: AMOUNT, comment: COMMENT,)
    protected constructor(value: PossibleValueOnObjectHolder<T>, isUnknown_or_amount_or_comment?: | IS_UNKNOWN | AMOUNT | COMMENT, comment_or_amount?: | AMOUNT | COMMENT, comment?: COMMENT,) {
        this.#value = new DelayedObjectHolderContainer<T>(value)

        switch (typeof isUnknown_or_amount_or_comment) {
            default://Everything can only be null.
                this.#isUnknown = PropertyContainer.#DEFAULT_IS_UNKNOWN as IS_UNKNOWN
                this.#amount = PropertyContainer.#DEFAULT_AMOUNT as AMOUNT
                this.#comment = PropertyContainer.#DEFAULT_COMMENT as COMMENT
                break
            case 'boolean':
                this.#isUnknown = isUnknown_or_amount_or_comment
                switch (typeof comment_or_amount) {
                    default://Everything (excluding is unknown) can only be null.
                        this.#amount = PropertyContainer.#DEFAULT_AMOUNT as AMOUNT
                        this.#comment = PropertyContainer.#DEFAULT_COMMENT as COMMENT
                        break
                    case 'string':
                        this.#amount = PropertyContainer.#DEFAULT_AMOUNT as AMOUNT
                        this.#comment = comment_or_amount as COMMENT
                        break
                    case 'number':
                        this.#amount = comment_or_amount as AMOUNT
                        this.#comment = (comment == null ? PropertyContainer.#DEFAULT_COMMENT : comment) as COMMENT
                        break
                }
                break
            case 'string':
                this.#isUnknown = PropertyContainer.#DEFAULT_IS_UNKNOWN as IS_UNKNOWN
                this.#amount = PropertyContainer.#DEFAULT_AMOUNT as AMOUNT
                this.#comment = isUnknown_or_amount_or_comment as COMMENT
                break
            case 'number':
                this.#isUnknown = PropertyContainer.#DEFAULT_IS_UNKNOWN as IS_UNKNOWN
                this.#amount = isUnknown_or_amount_or_comment as AMOUNT
                this.#comment = (comment_or_amount == null ? PropertyContainer.#DEFAULT_COMMENT : comment_or_amount) as COMMENT
                break
        }
    }

    //region -------------------- Getter methods --------------------

    public get value() {
        return this.#value.get
    }

    public get isUnknown() {
        return this.#isUnknown
    }

    public get amount() {
        return this.#amount
    }

    public get comment() {
        return this.#comment
    }

    //endregion -------------------- Getter methods --------------------


}
