import {IsInGameProperty} from '../properties/IsInGameProperty';
import {SMM2Name}         from '../lang/SMM2Name';

export interface Theme
    extends SMM2Name, IsInGameProperty {

    name: SMM2Name;

    isInProperty: IsInGameProperty

}
