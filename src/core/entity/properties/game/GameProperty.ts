import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Games}                         from 'core/game/Games'

export interface GameProperty<out SMM1 extends boolean = boolean, out SMM3DS extends boolean = boolean, out SMM2 extends boolean = boolean, >
    extends ClassInAnySuperMarioMakerGame<SMM1, SMM3DS, SMM2> {

    toGameMap(): ReadonlyMap<Games, boolean>

}
