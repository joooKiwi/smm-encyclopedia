import type {WorldTheme} from 'core/theme/WorldTheme'
import type {Name}       from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'
import {EmptyCourseTheme}            from 'core/theme/EmptyCourseTheme'

export class WorldOnlyThemeContainer
    extends AbstractCourseAndWorldTheme {

    public constructor(name: Name<string>, worldTheme: WorldTheme,) {
        super(name, EmptyCourseTheme.get, worldTheme,)
    }

    //region -------------------- Theme properties --------------------

    public override get isInCourseTheme(): false {
        return false
    }


    public override get isInWorldTheme(): true {
        return true
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Game properties --------------------

    public override get isInProperty() {
        return this.worldTheme.isInProperty
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public override get isAvailableFromTheStartContainer() {
        return this.worldTheme.isAvailableFromTheStartContainer
    }

    //endregion -------------------- "Is available from the start" properties --------------------

}
