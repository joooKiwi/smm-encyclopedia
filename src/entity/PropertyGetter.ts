import type {Entity} from './simple/Entity';

export interface PropertyGetter<PROPERTY, > {

    get(property: PROPERTY,): boolean

}

export interface PropertyReferenceGetter<REFERENCE_PROPERTY, > {

    getReference(referenceProperty: REFERENCE_PROPERTY,): Entity

}
