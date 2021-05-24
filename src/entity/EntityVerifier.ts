import {Entity} from './simple/Entity';

export interface EntityVerifier<Name extends string> {

    englishName: Name

    isEntityOn(entity: Entity): boolean

}

export interface EntityVerifierWithReference<Name extends string, Reference>
    extends EntityVerifier<Name> {

    references: Reference

}
