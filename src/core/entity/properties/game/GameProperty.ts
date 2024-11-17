import type {ClassInAnySuperMarioMakerGame} from 'core/game/ClassInAnySuperMarioMakerGame'
import type {Games}                         from 'core/game/Games'

export interface GameProperty
    extends ClassInAnySuperMarioMakerGame {

    toGameMap(): ReadonlyMap<Games, boolean>

}
