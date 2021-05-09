import {AbstractEntity} from "./AbstractEntity";
import {EmptyName} from "../lang/EmptyName";
import {EmptyIsInProperty} from "../properties/EmptyIsInProperty";
import {EmptyEntityReference} from "../properties/EmptyEntityReference";
import {EmptyEntityCategory} from "../category/EmptyEntityCategory";

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntity
    extends AbstractEntity {

    private static readonly instance = new EmptyEntity();

    private constructor() {
        super(EmptyName.get, EmptyEntityCategory.get, EmptyIsInProperty.get, EmptyEntityReference.get,)
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty entity';
    }

}