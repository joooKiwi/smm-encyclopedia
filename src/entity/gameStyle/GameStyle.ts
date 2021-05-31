import {Entity}       from '../simple/Entity';
import {GameProperty} from '../properties/GameProperty';
import {Name}         from '../../lang/name/Name';

export interface GameStyle
    extends Name, GameProperty {

    name: Name

    isInProperty: GameProperty

    entities: readonly Entity[]

}