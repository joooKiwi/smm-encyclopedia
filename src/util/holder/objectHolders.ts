import {ObjectHolder}          from './ObjectHolder';
import {ObjectHolderContainer} from './ObjectHolderContainer';

export class ObjectHolders {

    private constructor() {
        throw new Error(`The class ${this} cannot be instantiated.`);
    }

    /**
     * A callback holder that only return null.
     */
    public static readonly NULL: ObjectHolder<null> = new ObjectHolderContainer(null);
    /**
     * A callback holder that only return true.
     */
    public static readonly TRUE: ObjectHolder<true> = new ObjectHolderContainer(true);
    /**
     * A callback holder that only return false.
     */
    public static readonly FALSE: ObjectHolder<false> = new ObjectHolderContainer(false);
    /**
     * A callback holder that only return an empty string.
     */
    public static readonly EMPTY_STRING: ObjectHolder<''> = new ObjectHolderContainer('');
    /**
     * A callback holder that only return an empty array.
     * @note that the never type is used to be used for any possible array.
     */
    public static readonly EMPTY_ARRAY: ObjectHolder<never[]> = new ObjectHolderContainer([]);

}
