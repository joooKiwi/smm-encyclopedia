import {IsInOnlySMM2GameProperty} from '../properties/IsInOnlySMM2GameProperty';
import {Theme}                    from './Theme';

export interface WorldTheme
    extends Theme, IsInOnlySMM2GameProperty {

    isInProperty: IsInOnlySMM2GameProperty

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

}
