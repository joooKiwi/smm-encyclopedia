import type {AlternativeLimit}                                      from 'core/limit/AlternativeLimit'
import type {ClassWithNullObjectPattern, EmptyAlternativeLimitName} from 'util/ClassWithNullObjectPattern'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {EmptyStringName}      from 'lang/name/EmptyStringName'

/** @singleton */
export class EmptyAlternativeLimit
    extends ClassContainingAName<string>
    implements AlternativeLimit,
        ClassWithNullObjectPattern<EmptyAlternativeLimitName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyAlternativeLimit

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    public readonly acronym = null

    //endregion -------------------- Getter methods --------------------

    public override toString(): EmptyAlternativeLimitName {
        return 'Empty alternative limit'
    }

}
