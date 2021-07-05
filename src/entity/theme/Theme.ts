import type {GameProperty} from '../properties/GameProperty';
import type {Name}         from '../../lang/name/Name';

export interface Theme
    extends Name, GameProperty {

    get name(): Name

    get isInProperty(): GameProperty

}
