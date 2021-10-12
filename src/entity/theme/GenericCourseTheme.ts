import type {CourseTheme}  from './CourseTheme';
import type {Entity}       from '../simple/Entity';
import type {GameProperty} from '../properties/GameProperty';
import type {Name}         from '../../lang/name/Name';
import type {ObjectHolder} from '../../util/holder/ObjectHolder';

import {AbstractTheme}                from './AbstractTheme';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export class GenericCourseTheme
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Attributes --------------------

    readonly #entities: ObjectHolder<Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, isInProperty: GameProperty, entities: () => Entity[],) {
        super(name, isInProperty);
        this.#entities = new DelayedObjectHolderContainer(entities);
    }

    public get entities() {
        return this.#entities.get;
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
