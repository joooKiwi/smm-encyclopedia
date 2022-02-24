import type {Entity}       from '../entity/Entity';
import type {GameProperty} from '../entity/properties/GameProperty';
import type {NameTrait}    from '../../lang/name/NameTrait';

export interface GameStyle
    extends NameTrait<string>, GameProperty {

    get isInProperty(): GameProperty

    get entities(): readonly Entity[]

}
