import {GameProperty} from '../properties/GameProperty';
import {Name}         from '../../lang/name/Name';

export interface Theme
    extends Name, GameProperty {

    name: Name

    isInProperty: GameProperty

}
