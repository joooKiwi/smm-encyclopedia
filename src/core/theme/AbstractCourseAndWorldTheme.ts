import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {CourseAndWorldTheme}              from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}                      from 'core/theme/CourseTheme'
import type {WorldTheme}                       from 'core/theme/WorldTheme'
import type {Name}                             from 'lang/name/Name'

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

    public abstract get isInProperty(): GameProperty

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return this.isInProperty.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): this['isInProperty']['isInSuperMarioMakerFor3DS'] {
        return this.isInProperty.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return this.isInProperty.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public abstract get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart

    public get isAvailableFromTheStartInSMM1(): this['isAvailableFromTheStartContainer']['isAvailableFromTheStartInSMM1'] {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1
    }

    public get isAvailableFromTheStartInSMM3DS(): this['isAvailableFromTheStartContainer']['isAvailableFromTheStartInSMM3DS'] {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS
    }

    public get isAvailableFromTheStartInSMM2(): this['isAvailableFromTheStartContainer']['isAvailableFromTheStartInSMM2'] {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2
    }

    //endregion -------------------- "Is available from the start" properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
