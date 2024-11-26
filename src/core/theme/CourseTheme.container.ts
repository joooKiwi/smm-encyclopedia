import type {Lazy}                 from '@joookiwi/lazy'
import type {Array, NullOrBoolean} from '@joookiwi/type'

import type {Entity}       from 'core/entity/Entity'
import type {NightEffects} from 'core/nightEffect/NightEffects'
import type {CourseTheme}  from 'core/theme/CourseTheme'
import type {Name}         from 'lang/name/Name'

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
                       isInSuperMarioMaker1And3ds: boolean,
                       isAvailableFromTheStartInSuperMarioMaker1: NullOrBoolean,
                       entities: Lazy<Array<Entity>>,
                       effect: NightEffects,) {
        super(name, isInSuperMarioMaker1And3ds, isAvailableFromTheStartInSuperMarioMaker1, isAvailableFromTheStartInSuperMarioMaker1 == null ? null : true,)
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
