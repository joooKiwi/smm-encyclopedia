import {EmptyName}             from '../../lang/name/EmptyName';
import {GenericEntityCategory} from './GenericEntityCategory';

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


    public get individualValues() {
        return this.name.individualValues;
    }

    public toNameMap() {
        return EmptyEntityCategory.EMPTY_MAP;
    }

    public toString(): 'Empty entity category' {
        return 'Empty entity category';
    }

}
