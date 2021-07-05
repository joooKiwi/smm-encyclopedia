import type {Entity}       from '../simple/Entity';
import type {GameProperty} from '../properties/GameProperty';
import type {Name}         from '../../lang/name/Name';

export interface GameStyle
    extends Name, GameProperty {

    get name(): Name

    get isInProperty(): GameProperty

    get entities(): readonly Entity[]

}