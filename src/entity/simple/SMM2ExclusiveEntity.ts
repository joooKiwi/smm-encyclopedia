import {Entity}               from "./Entity";
import {IsInOnlySMM2Property} from "../properties/IsInOnlySMM2Property";

export interface SMM2ExclusiveEntity
    extends Entity, IsInOnlySMM2Property {

    isInProperty: IsInOnlySMM2Property

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

}
