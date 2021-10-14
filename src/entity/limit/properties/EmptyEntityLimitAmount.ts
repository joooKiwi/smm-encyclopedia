import type {ClassWithNullObjectPattern, EmptyEntityLimitAmountName} from '../../../util/ClassWithNullObjectPattern';
import type {EntityLimitAmount}                                      from './EntityLimitAmount';

/**
 * @singleton
 */
export class EmptyEntityLimitAmount
    implements EntityLimitAmount<null, false, null>, ClassWithNullObjectPattern<EmptyEntityLimitAmountName> {

    static #instance?: EmptyEntityLimitAmount;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    public readonly value = null;
    public readonly isUnknown = false;
    public readonly comment = null;

    public toString(): EmptyEntityLimitAmountName {
        return 'Empty entity limit (amount)';
    }

}
