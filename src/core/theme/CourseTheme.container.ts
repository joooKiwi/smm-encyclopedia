import type {CourseTheme}  from './CourseTheme';
import type {Entity}       from '../entity/Entity';
import type {GameProperty} from '../entity/properties/GameProperty';
import type {Name}         from '../../lang/name/Name';
import type {NightEffects} from './NightEffects';
import type {ObjectHolder} from '../../util/holder/ObjectHolder';

import {AbstractTheme} from './AbstractTheme';

export class CourseThemeContainer
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Attributes --------------------

    readonly #entities;
    readonly #effect;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name<string>, isInProperty: GameProperty, entities: ObjectHolder<readonly Entity[]>, effect: ObjectHolder<NightEffects>,) {
        super(name, isInProperty);
        this.#entities = entities;
        this.#effect = effect;
    }

    public get entities() {
        return this.#entities.get;
    }

    public get effect() {
        return this.#effect.get;
    }

}
