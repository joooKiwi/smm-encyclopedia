import type {Entity} from './simple/Entity';

export interface PropertyGetter<Property, > {

    get(property: Property,): boolean

}

export interface PropertyReferenceGetter<ReferenceProperty, > {

    getReference(referenceProperty: ReferenceProperty,): Entity

}

export interface ClassWithEnglishName<Name extends string, > {

    get englishName(): Name

}

export interface ClassWithReference<Reference, > {

    get reference(): Reference

}
