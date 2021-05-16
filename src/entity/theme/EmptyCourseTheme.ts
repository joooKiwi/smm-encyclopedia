import {EmptyIsInProperty}  from '../properties/EmptyIsInProperty';
import {EmptyName}          from '../lang/EmptyName';
import {GenericCourseTheme} from './GenericCourseTheme';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyCourseTheme
    extends GenericCourseTheme {

    private static readonly instance = new EmptyCourseTheme();
    public static readonly EMPTY_ARRAY = [];

    private constructor() {
        super(EmptyName.get, EmptyIsInProperty.get, () => EmptyCourseTheme.EMPTY_ARRAY)
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty Course Theme';
    }

}
