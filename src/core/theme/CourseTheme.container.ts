import type {Lazy} from '@joookiwi/lazy'

import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                           from 'core/entity/Entity'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {NightEffects}                     from 'core/nightEffect/NightEffects'
import type {CourseTheme}                      from 'core/theme/CourseTheme'
import type {Name}                             from 'lang/name/Name'

import {AbstractTheme} from 'core/theme/AbstractTheme'

export class CourseThemeContainer
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Fields --------------------

    readonly #entitiesHolder
    readonly #effectHolder

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isInProperty: GameProperty,
                       isAvailableFromTheStart: ClassThatIsAvailableFromTheStart,
                       entities: Lazy<readonly Entity[]>,
                       effect: NightEffects,) {
        super(name, isInProperty, isAvailableFromTheStart,)
        this.#entitiesHolder = entities
        this.#effectHolder = effect
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get entities() {
        return this.#entitiesHolder.value
    }

    public get effect() {
        return this.#effectHolder
    }

    //endregion -------------------- Getter methods --------------------

}
