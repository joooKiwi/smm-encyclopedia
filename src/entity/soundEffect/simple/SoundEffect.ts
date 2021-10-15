import type {CategoryTrait}       from '../../../lang/name/CategoryTrait';
import type {NameTrait}           from '../../../lang/name/NameTrait';
import type {SoundEffectCategory} from '../category/SoundEffectCategory';
import type {SoundEffectProperty} from './properties/SoundEffectProperty';

export interface SoundEffect
    extends NameTrait, CategoryTrait<SoundEffectCategory> {

    //region -------------------- Properties --------------------

    get propertyContainer(): SoundEffectProperty

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------

    //endregion -------------------- Properties --------------------

}
