import type {Entity}       from '../simple/Entity';
import type {GameProperty} from '../properties/GameProperty';
import type {NameTrait}    from '../../lang/name/NameTrait';

export interface GameStyle
    extends NameTrait, GameProperty/*,
        ClassWithAcronym<PossibleGameStyleAcronym>,
        ClassWithEnglishName<PossibleGameStyleName>,*/ {

    get isInProperty(): GameProperty

    get entities(): readonly Entity[]

}
