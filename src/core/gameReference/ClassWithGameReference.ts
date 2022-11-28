import type {NullOr}         from '../../util/types'
import type {GameReferences} from './GameReferences'

export interface ClassWithGameReference<T extends NullOr<GameReferences> = GameReferences, > {

    get gameReference(): T

}
