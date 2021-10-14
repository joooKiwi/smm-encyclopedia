import type {PropertyWithNoValues} from './PropertyWithNoValues';

/**
 * A generic property with a value contained in it.
 */
export interface Property<T>
    extends PropertyWithNoValues {

    get value(): T

}

export type BooleanProperty<B extends PossibleBoolean = PossibleBoolean, > = Property<B>;
export type NumberProperty<N extends PossibleNumber = PossibleNumber> = Property<N>;


export type DEFAULT_IS_UNKNOWN = false;
export type DEFAULT_COMMENT = null;

export type PossibleBoolean = | null | boolean;
export type PossibleNumber = | number | null;
