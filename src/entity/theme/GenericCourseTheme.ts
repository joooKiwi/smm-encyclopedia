import {AbstractTheme}  from './AbstractTheme';
import {CallbackCaller} from '../../util/CallbackCaller';
import {CourseTheme}    from './CourseTheme';
import {Entity}         from '../simple/Entity';
import {GameProperty}   from '../properties/GameProperty';
import {Name}           from '../../lang/name/Name';

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
