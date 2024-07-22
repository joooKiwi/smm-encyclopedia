import type {GameReferences} from 'core/gameReference/GameReferences'

export interface ClassWithGameReference<out T extends NullOr<GameReferences> = GameReferences, > {

    get gameReference(): T

}
