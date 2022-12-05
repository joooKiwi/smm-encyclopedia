import type {CourseTheme} from 'core/theme/CourseTheme'
import type {Name}        from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'
import {EmptyWorldTheme}             from 'core/theme/EmptyWorldTheme'

export class CourseOnlyThemeContainer
    extends AbstractCourseAndWorldTheme {

    public constructor(name: Name<string>, courseTheme: CourseTheme,) {
        super(name, courseTheme, EmptyWorldTheme.get,)
    }

    //region -------------------- Theme properties --------------------

    public override get isInCourseTheme(): true {
        return true
    }


    public override get isInWorldTheme(): false {
        return false
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Game properties --------------------

    public override get isInProperty() {
        return this.courseTheme.isInProperty
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public override get isAvailableFromTheStartContainer() {
        return this.courseTheme.isAvailableFromTheStartContainer
    }

    //endregion -------------------- "Is available from the start" properties --------------------

}
