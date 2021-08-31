import type {Entity} from './simple/Entity';

export interface PropertyGetter<Property, > {

    get(property: Property,): boolean

}

export interface PropertyReferenceGetter<ReferenceProperty, > {

    getReference(referenceProperty: ReferenceProperty,): Entity

}
