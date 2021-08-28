import type {ExclusiveSMM2GameProperty} from '../properties/GameProperty';
import type {Theme}                     from './Theme';

export interface WorldTheme
    extends Theme, ExclusiveSMM2GameProperty {

    get isInProperty(): ExclusiveSMM2GameProperty


    get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2']

}
