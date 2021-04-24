import {Entity} from "./Entity";
import {IsInExclusiveSMM2Property} from "../properties/IsInExclusiveSMM2Property";

export interface SMM2ExclusiveEntity
    extends Entity, IsInExclusiveSMM2Property {

    isInProperty: IsInExclusiveSMM2Property

    isInSuperMarioMaker1: false
    isInSuperMarioMaker2: true

}
