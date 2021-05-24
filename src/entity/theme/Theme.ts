import {IsInGameProperty} from '../properties/IsInGameProperty';
import {Name}             from '../../lang/name/Name';

export interface Theme
    extends Name, IsInGameProperty {

    name: Name

    isInProperty: IsInGameProperty

}
