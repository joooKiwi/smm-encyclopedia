import type {GameProperty} from '../properties/GameProperty';
import type {NameTrait}    from '../../lang/name/NameTrait';

export interface Theme
    extends NameTrait, GameProperty/*,
        ClassWithEnglishName<PossibleTheme>*/ {

    get isInProperty(): GameProperty

}
