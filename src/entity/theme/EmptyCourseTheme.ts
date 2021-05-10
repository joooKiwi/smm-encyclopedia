/**
 * @nullObjectPattern
 * @singleton
 */
import {EmptyName} from "../lang/EmptyName";
import {GenericCourseTheme} from "./GenericCourseTheme";

export class EmptyCourseTheme
    extends GenericCourseTheme {

    private static readonly instance = new EmptyCourseTheme();
    public static readonly EMPTY_ARRAY = [];

    private constructor() {
        super(EmptyName.get, () => EmptyCourseTheme.EMPTY_ARRAY)
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty Course Theme';
    }

}
