import type {ClassThatIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {CourseTheme}                      from './CourseTheme';
import type {Entity}                           from '../entity/Entity';
import type {GameProperty}                     from '../entity/properties/GameProperty';
import type {Name}                             from '../../lang/name/Name';
import type {NightEffects}                     from '../nightEffect/NightEffects';
import type {ObjectHolder}                     from '../../util/holder/ObjectHolder';

import {AbstractTheme} from './AbstractTheme';

export class CourseThemeContainer
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Attributes --------------------

    readonly #entitiesHolder;
    readonly #effectHolder;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name<string>, isInProperty: GameProperty, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart>, entities: ObjectHolder<readonly Entity[]>, effect: ObjectHolder<NightEffects>,) {
        super(name, isInProperty, isAvailableFromTheStart,);
        this.#entitiesHolder = entities;
        this.#effectHolder = effect;
    }

    public get entities() {
        return this.#entitiesHolder.get;
    }

    public get effect() {
        return this.#effectHolder.get;
    }

}
