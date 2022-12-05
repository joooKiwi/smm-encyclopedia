import type {GameReferences} from 'core/gameReference/GameReferences'
import type {NullOr}         from 'util/types/nullable'

export interface ClassWithGameReference<T extends NullOr<GameReferences> = GameReferences, > {

    get gameReference(): T

}
