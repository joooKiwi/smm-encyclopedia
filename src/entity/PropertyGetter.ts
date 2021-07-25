export interface PropertyGetter<Name extends string, Property> {

    englishName: Name

    get(property: Property,): boolean

}

export interface PropertyGetterWithReference<Name extends string, Property, Reference>
    extends PropertyGetter<Name, Property> {

    references: Reference

}
