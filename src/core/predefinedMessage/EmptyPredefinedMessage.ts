import type {PredefinedMessage}                                      from './PredefinedMessage'
import type {ClassWithNullObjectPattern, EmptyPredefinedMessageName} from '../../util/ClassWithNullObjectPattern'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'
import {EmptyStringName}      from '../../lang/name/EmptyStringName'

export class EmptyPredefinedMessage
    extends ClassContainingAName<string>
    implements PredefinedMessage, ClassWithNullObjectPattern<EmptyPredefinedMessageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyPredefinedMessage

    private constructor() {
        super(EmptyStringName.get,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public override toString(): EmptyPredefinedMessageName {
        return 'Empty predefined message'
    }

}