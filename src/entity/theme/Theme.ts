import {ClassWithEveryLanguages} from '../../lang/ClassWithEveryLanguages';
import {IsInGameProperty}        from '../properties/IsInGameProperty';

export interface Theme
    extends ClassWithEveryLanguages, IsInGameProperty {

    name: ClassWithEveryLanguages;

    isInProperty: IsInGameProperty

}
