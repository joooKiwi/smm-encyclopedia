import {AbstractTheme}    from './AbstractTheme';
import {CallbackCaller}   from '../../util/CallbackCaller';
import {CourseTheme}      from './CourseTheme';
import {Entity}           from '../simple/Entity';
import {IsInGameProperty} from '../properties/IsInGameProperty';
import {Name}             from '../../lang/name/Name';

export class GenericCourseTheme
    extends AbstractTheme
    implements CourseTheme {

    readonly #entities: CallbackCaller<Entity[]>;

    public constructor(name: Name, isInProperty: IsInGameProperty, entities: () => Entity[]) {
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
