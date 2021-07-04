import {Entity}       from '../simple/Entity';
import {GameProperty} from '../properties/GameProperty';
import {Name}         from '../../lang/name/Name';

export interface GameStyle
    extends Name, GameProperty {

    get name(): Name

    get isInProperty(): GameProperty

    get entities(): readonly Entity[]

}