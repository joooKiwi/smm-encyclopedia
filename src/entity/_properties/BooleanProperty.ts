import type {Property} from './Property';

export interface BooleanProperty<B extends PossibleBoolean = PossibleBoolean, >
    extends Property<B> {

}

export type PossibleBoolean = | null | boolean;
