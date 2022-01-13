import type {GameReferences} from './GameReferences';

export interface ClassWithGameReference<T extends | GameReferences | null = GameReferences, > {

    get gameReference(): T

}
