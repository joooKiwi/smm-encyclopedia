import type {GameProperty}  from '../properties/GameProperty';
import type {NameWithAName} from '../../lang/name/NameWithAName';

export interface Theme
    extends NameWithAName, GameProperty {

    get isInProperty(): GameProperty

}
