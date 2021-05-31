import {ExclusiveSMM2GameProperty} from '../properties/ExclusiveSMM2GameProperty';
import {Theme}                     from './Theme';

export interface WorldTheme
    extends Theme, ExclusiveSMM2GameProperty {

    isInProperty: ExclusiveSMM2GameProperty

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

}
