export interface PropertyGetter<PROPERTY, > {

    get(property: PROPERTY,): boolean

}

export interface PropertyReferenceGetter<REFERENCE_PROPERTY, REFERENCE,> {

    getReference(referenceProperty: REFERENCE_PROPERTY,): REFERENCE

}
