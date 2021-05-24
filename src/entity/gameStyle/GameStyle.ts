import {Entity}           from '../simple/Entity';
import {IsInGameProperty} from '../properties/IsInGameProperty';
import {Name}             from '../../lang/name/Name';

export interface GameStyle
    extends Name, IsInGameProperty {

    name: Name

    isInProperty: IsInGameProperty

    entities: readonly Entity[]

}