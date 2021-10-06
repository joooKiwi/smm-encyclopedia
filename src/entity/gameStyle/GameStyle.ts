import type {Entity}        from '../simple/Entity';
import type {GameProperty}  from '../properties/GameProperty';
import type {NameWithAName} from '../../lang/name/NameWithAName';

export interface GameStyle
    extends NameWithAName, GameProperty/*,
        ClassWithAcronym<PossibleGameStyleAcronym>,
        ClassWithEnglishName<PossibleGameStyleName>,*/ {

    get isInProperty(): GameProperty

    get entities(): readonly Entity[]

}
