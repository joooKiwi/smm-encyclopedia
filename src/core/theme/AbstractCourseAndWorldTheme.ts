import type {Games}               from 'core/game/Games'
import type {CourseAndWorldTheme} from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}         from 'core/theme/CourseTheme'
import type {WorldTheme}          from 'core/theme/WorldTheme'
import type {Name}                from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export abstract class AbstractCourseAndWorldTheme
    extends ClassContainingAName<string>
    implements CourseAndWorldTheme {

    //region -------------------- Fields --------------------

    readonly #courseTheme: CourseTheme
    readonly #worldTheme: WorldTheme

    //endregion -------------------- Fields --------------------

    protected constructor(name: Name<string>, courseTheme: CourseTheme, worldTheme: WorldTheme,) {
        super(name,)
        this.#courseTheme = courseTheme
        this.#worldTheme = worldTheme
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Theme properties --------------------

    public get courseTheme(): CourseTheme {
        return this.#courseTheme
    }

    public abstract get isInCourseTheme(): boolean


    public get worldTheme(): WorldTheme {
        return this.#worldTheme
    }

    public abstract get isInWorldTheme(): boolean

    //endregion -------------------- Theme properties --------------------

    //region -------------------- Game properties --------------------

    public abstract get isInSuperMarioMaker1(): boolean

    public abstract get isInSuperMarioMakerFor3DS(): boolean

    public abstract get isInSuperMarioMaker2(): boolean

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public abstract get isAvailableFromTheStartInSMM1(): NullOrBoolean

    public abstract get isAvailableFromTheStartInSMM3DS(): NullOrTrue

    public abstract get isAvailableFromTheStartInSMM2(): NullOrTrue

    //endregion -------------------- "Is available from the start" properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public abstract toGameMap(): ReadonlyMap<Games, boolean>

    //endregion -------------------- Convertor methods --------------------

}
