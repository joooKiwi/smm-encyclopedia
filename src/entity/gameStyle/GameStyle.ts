import {Entity} from '../simple/Entity';
import {Name}   from '../../lang/name/Name';

export interface GameStyle
    extends Name {

    name: Name

    entities: readonly Entity[]

}