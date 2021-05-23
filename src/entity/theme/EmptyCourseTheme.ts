import {EmptyIsInProperty}  from '../properties/EmptyIsInProperty';
import {EmptyName}          from '../../lang/name/EmptyName';
import {GenericCourseTheme} from './GenericCourseTheme';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyCourseTheme
    extends GenericCourseTheme {

    private static readonly instance = new EmptyCourseTheme();
    public static readonly EMPTY_ARRAY = [];
    public static readonly EMPTY_MAP = new Map();

    private constructor() {
        super(EmptyName.get, EmptyIsInProperty.get, () => EmptyCourseTheme.EMPTY_ARRAY,);
    }


    public static get get() {
        return this.instance;
    }

    public get individualValues() {
        return EmptyCourseTheme.EMPTY_ARRAY;
    }

    public toNameMap() {
        return EmptyCourseTheme.EMPTY_MAP;
    }

    public toString(): 'Empty course theme' {
        return 'Empty course theme';
    }

}
