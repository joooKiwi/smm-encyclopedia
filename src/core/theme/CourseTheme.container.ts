import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                           from 'core/entity/Entity'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {NightEffects}                     from 'core/nightEffect/NightEffects'
import type {CourseTheme}                      from 'core/theme/CourseTheme'
import type {Name}                             from 'lang/name/Name'
import type {ObjectHolder}                     from 'util/holder/ObjectHolder'

import {AbstractTheme} from 'core/theme/AbstractTheme'

export class CourseThemeContainer
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Fields --------------------

    readonly #entitiesHolder
    readonly #effectHolder

    //endregion -------------------- Fields --------------------

    public constructor(name: Name<string>, isInProperty: GameProperty, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart>, entities: ObjectHolder<readonly Entity[]>, effect: ObjectHolder<NightEffects>,) {
        super(name, isInProperty, isAvailableFromTheStart,)
        this.#entitiesHolder = entities
        this.#effectHolder = effect
    }

    //region -------------------- Getter methods --------------------

    public get entities() {
        return this.#entitiesHolder.get
    }

    public get effect() {
        return this.#effectHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
