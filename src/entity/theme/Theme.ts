import type {GameProperty}    from '../properties/GameProperty';
import type {NameWithAName}   from '../../lang/name/NameWithAName';

export interface Theme
    extends NameWithAName, GameProperty/*,
        ClassWithEnglishName<PossibleTheme>*/ {

    get isInProperty(): GameProperty

}
