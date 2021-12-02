import type {Entity}               from '../../entity/Entity';
import type {PropertyWithNoValues} from '../../_properties/PropertyWithNoValues';

export interface EntityLimitLink<GROUP extends PossibleGroupLink = PossibleGroupLink,
    ENTITY extends PossibleEntityLink = PossibleEntityLink, >
    extends PropertyWithNoValues {

    get group(): GROUP

    get entity(): ENTITY

}

export type PossibleGroupLink = | object | null;
export type PossibleEntityLink = | Entity | null;
