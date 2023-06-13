import type {NullOr} from 'util/types/nullable'

/** A simple class with an "acronym" on the getter method */
export interface ClassWithAcronym<ACRONYM extends string, >
    extends ClassWithNullableAcronym<ACRONYM> {

    get acronym(): ACRONYM

}

/** A simple class with a {@link NullOr nullable} "acronym" on the getter method */
export interface ClassWithNullableAcronym<ACRONYM extends string, > {

    get acronym(): NullOr<ACRONYM>

}
