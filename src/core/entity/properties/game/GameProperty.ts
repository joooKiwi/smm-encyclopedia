import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Games}                         from 'core/game/Games'

export interface GameProperty<SMM1 extends boolean = boolean, SMM3DS extends boolean = boolean, SMM2 extends boolean = boolean, >
    extends ClassInAnySuperMarioMakerGame<SMM1, SMM3DS, SMM2> {

    toGameMap(): ReadonlyMap<Games, boolean>

}

/**@deprecated*/export type AbstractExclusiveSMM2GameProperty = GameProperty<false, false, true>
