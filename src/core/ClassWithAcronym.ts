/** A class with an "acronym" on the getter method */
export interface ClassWithAcronym<out ACRONYM extends string, >
    extends ClassWithNullableAcronym<ACRONYM> {

    get acronym(): ACRONYM

}

/** A class with a {@link NullOr nullable} "acronym" on the getter method */
export interface ClassWithNullableAcronym<out ACRONYM extends string, > {

    get acronym(): NullOr<ACRONYM>

}
