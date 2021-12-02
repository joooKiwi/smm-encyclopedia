import type {CourseTheme}                from './CourseTheme';
import type {Entity}                     from '../entity/Entity';
import type {GameProperty}               from '../entity/properties/GameProperty';
import type {Name}                       from '../../lang/name/Name';
import type {ObjectHolder}               from '../../util/holder/ObjectHolder';
import type {PossibleEffectInNightTheme} from './Theme.template';

import {AbstractTheme}                from './AbstractTheme';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export class CourseThemeContainer
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Attributes --------------------

    readonly #entities: ObjectHolder<Entity[]>;
    readonly #effect;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, isInProperty: GameProperty, entities: () => Entity[], effect: PossibleEffectInNightTheme,) {
        super(name, isInProperty);
        this.#entities = new DelayedObjectHolderContainer(entities);
        this.#effect = effect;
    }

    public get entities() {
        return this.#entities.get;
    }

    public get effect() {
        return this.#effect;
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
