import type {ClassWithAcronym} from '../entity/ClassWithAcronym';
import type {PossibleAcronym}  from './GameReferences.types';
import type {NameTrait}        from '../lang/name/NameTrait';

export interface GameReference
    extends ClassWithAcronym<PossibleAcronym>, NameTrait {
}
