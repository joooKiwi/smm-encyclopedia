export interface ClassWithAcronym<ACRONYM extends string, >
    extends ClassWithNullableAcronym<ACRONYM> {

    get acronym(): ACRONYM

}

export interface ClassWithNullableAcronym<ACRONYM extends string, > {

    get acronym(): | ACRONYM | null

}
