import type {ClassInAnySuperMarioMakerGame} from '../../../game/ClassInAnySuperMarioMakerGame';
import type {Games}                         from '../../../game/Games';

export interface GameProperty<SMM1 extends boolean = boolean, SMM3DS extends boolean = boolean, SMM2 extends boolean = boolean, >
    extends ClassInAnySuperMarioMakerGame<SMM1, SMM3DS, SMM2> {

    toGameMap(): ReadonlyMap<Games, boolean>

}

/**@deprecated*/export type ExclusiveSMM1GameProperty = GameProperty<true, false, false>;
/**@deprecated*/export type AbstractExclusiveSMM2GameProperty = GameProperty<false, false, true>;
/**@deprecated*/export type ExclusiveSMM2GamePropertyInSM3DW = AbstractExclusiveSMM2GameProperty;
/**@deprecated*/export type ExclusiveSMM2GameProperty = AbstractExclusiveSMM2GameProperty;
