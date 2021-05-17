import {GenericEntityCategory} from './GenericEntityCategory';
import {EmptyName}             from '../lang/EmptyName';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntityCategory
    extends GenericEntityCategory {

    private static readonly instance = new EmptyEntityCategory();
    public static readonly EMPTY_MAP = new Map();

    private constructor() {
        super(EmptyName.get);
    }


    public static get get() {
        return this.instance;
    }


    public toNameMap() {
        return EmptyEntityCategory.EMPTY_MAP;
    }

    public toString() {
        return 'Empty entity category';
    }

}