import type {Games}       from 'core/game/Games'
import type {CourseTheme} from 'core/theme/CourseTheme'
import type {Name}        from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'
import {EmptyWorldTheme}             from 'core/theme/EmptyWorldTheme'

export class CourseOnlyThemeContainer
    extends AbstractCourseAndWorldTheme {

    public constructor(name: Name<string>, courseTheme: CourseTheme,) {
        super(name, courseTheme, EmptyWorldTheme.get,)
    }

    //region -------------------- Getter methods --------------------

    public override get isInCourseTheme(): true {
        return true
    }


    public override get isInWorldTheme(): false {
        return false
    }


    public override get isInSuperMarioMaker1() {
        return this.courseTheme.isInSuperMarioMaker1
    }

    public override get isInSuperMarioMakerFor3DS() {
        return this.courseTheme.isInSuperMarioMakerFor3DS
    }

    public override get isInSuperMarioMaker2() {
        return this.courseTheme.isInSuperMarioMaker2
    }


    public override get isAvailableFromTheStartInSMM1() {
        return this.courseTheme.isAvailableFromTheStartInSMM1
    }

    public override get isAvailableFromTheStartInSMM3DS() {
        return this.courseTheme.isAvailableFromTheStartInSMM3DS
    }

    public override get isAvailableFromTheStartInSMM2() {
        return this.courseTheme.isAvailableFromTheStartInSMM2
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.courseTheme.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------
}
