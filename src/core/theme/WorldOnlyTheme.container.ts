import type {Games}      from 'core/game/Games'
import type {WorldTheme} from 'core/theme/WorldTheme'
import type {Name}       from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'
import {EmptyCourseTheme}            from 'core/theme/EmptyCourseTheme'

export class WorldOnlyThemeContainer
    extends AbstractCourseAndWorldTheme {

    public constructor(name: Name<string>, worldTheme: WorldTheme,) {
        super(name, EmptyCourseTheme.get, worldTheme,)
    }

    //region -------------------- Getter methods --------------------

    public override get isInCourseTheme(): false {
        return false
    }


    public override get isInWorldTheme(): true {
        return true
    }


    public override get isInSuperMarioMaker1() {
        return this.worldTheme.isInSuperMarioMaker1
    }

    public override get isInSuperMarioMakerFor3DS() {
        return this.worldTheme.isInSuperMarioMakerFor3DS
    }

    public override get isInSuperMarioMaker2() {
        return this.worldTheme.isInSuperMarioMaker2
    }


    public override get isAvailableFromTheStartInSMM1() {
        return this.worldTheme.isAvailableFromTheStartInSMM1
    }

    public override get isAvailableFromTheStartInSMM3DS() {
        return this.worldTheme.isAvailableFromTheStartInSMM3DS
    }

    public override get isAvailableFromTheStartInSMM2() {
        return this.worldTheme.isAvailableFromTheStartInSMM2
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.worldTheme.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
