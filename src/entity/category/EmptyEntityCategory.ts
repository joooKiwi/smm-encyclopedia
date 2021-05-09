import {GenericEntityCategory} from "./GenericEntityCategory";
import {EmptyName} from "../lang/EmptyName";

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntityCategory
    extends GenericEntityCategory {

    private static readonly instance = new EmptyEntityCategory();

    private constructor() {
        super(EmptyName.get);
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty entity category';
    }

}