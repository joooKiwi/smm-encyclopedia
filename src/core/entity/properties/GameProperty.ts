import type {ClassInAnySuperMarioMakerGame} from '../../ClassInAnySuperMarioMakerGame';

export interface GameProperty<SMM1 extends boolean = boolean, SMM2 extends boolean = boolean, >
    extends ClassInAnySuperMarioMakerGame<SMM1, SMM2> {

}

export type ExclusiveSMM1GameProperty = GameProperty<true, false>;
export type AbstractExclusiveSMM2GameProperty = GameProperty<false, true>;
export type ExclusiveSMM2GamePropertyInSM3DW = AbstractExclusiveSMM2GameProperty;
export type ExclusiveSMM2GameProperty = AbstractExclusiveSMM2GameProperty;
