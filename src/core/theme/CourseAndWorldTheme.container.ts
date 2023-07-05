import type {Lazy} from '@joookiwi/lazy'

import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {CourseTheme}                      from 'core/theme/CourseTheme'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {WorldTheme}                       from 'core/theme/WorldTheme'
import type {Name}                             from 'lang/name/Name'

import {AbstractCourseAndWorldTheme} from 'core/theme/AbstractCourseAndWorldTheme'

export class CourseAndWorldThemeContainer
    extends AbstractCourseAndWorldTheme {

    //region -------------------- Fields --------------------

    readonly #isInPropertyHolder
    readonly #isAvailableFromTheStartHolder

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>,
                       gameProperty: Lazy<GameProperty>,
                       isAvailableFromTheStart: Lazy<ClassThatIsAvailableFromTheStart>,
                       courseTheme: CourseTheme,
                       worldTheme: WorldTheme,) {
        super(name, courseTheme, worldTheme,)
        this.#isInPropertyHolder = gameProperty
        this.#isAvailableFromTheStartHolder = isAvailableFromTheStart
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Theme properties --------------------

    public override get isInCourseTheme(): true {
        return true
    }


    public override get isInWorldTheme(): true {
        return true
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Game properties --------------------

    public override get isInProperty(): GameProperty {
        return this.#isInPropertyHolder.value
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public override get isAvailableFromTheStartContainer() {
        return this.#isAvailableFromTheStartHolder.value
    }

    //endregion -------------------- "Is available from the start" properties --------------------

    //endregion -------------------- Getter methods --------------------

}
