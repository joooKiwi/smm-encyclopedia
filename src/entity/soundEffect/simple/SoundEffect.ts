import type {NameTrait}              from '../../../lang/name/NameTrait';
import type {NameTraitFromACategory} from '../../../lang/name/NameTraitFromACategory';
import type {SoundEffectCategory}    from '../category/SoundEffectCategory';
import type {SoundEffectProperty}    from './properties/SoundEffectProperty';

export interface SoundEffect
    extends NameTrait, NameTraitFromACategory<SoundEffectCategory> {

    //region -------------------- Properties --------------------

    get propertyContainer(): SoundEffectProperty

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------

    //endregion -------------------- Properties --------------------

}
