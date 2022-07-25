import type {AbstractExclusiveSMM2GameProperty} from '../entity/properties/game/GameProperty';
import type {Theme}                             from './Theme';

export interface WorldTheme
    extends Theme, AbstractExclusiveSMM2GameProperty {

    get isInProperty(): AbstractExclusiveSMM2GameProperty


    get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1']

    get isInSuperMarioMakerFor3DS(): this['isInProperty']['isInSuperMarioMakerFor3DS']

    get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2']

}
