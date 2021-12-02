import type {AbstractExclusiveSMM2GameProperty} from '../properties/GameProperty';
import type {Theme}                             from './Theme';

export interface WorldTheme
    extends Theme, AbstractExclusiveSMM2GameProperty {

    get isInProperty(): AbstractExclusiveSMM2GameProperty


    get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2']

}
