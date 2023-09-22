import type {GameReferences} from 'core/gameReference/GameReferences'

export interface ClassWithGameReference<T extends NullOr<GameReferences> = GameReferences, > {

    get gameReference(): T

}
