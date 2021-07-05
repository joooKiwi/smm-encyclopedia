import type {CourseTheme}  from './CourseTheme';
import type {Entity}       from '../simple/Entity';
import type {GameProperty} from '../properties/GameProperty';
import type {Name}         from '../../lang/name/Name';

import {AbstractTheme}  from './AbstractTheme';
import {CallbackCaller} from '../../util/CallbackCaller';

export class GenericCourseTheme
    extends AbstractTheme
    implements CourseTheme {

    //region -------------------- Attributes --------------------

    readonly #entities: CallbackCaller<Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, isInProperty: GameProperty, entities: () => Entity[]) {
        super(name, isInProperty);
        this.#entities = new CallbackCaller(entities);
    }

    public get entities() {
        return this.#entities.get;
    }

    public toNameMap() {
        return this.name.toNameMap();
    }

}
