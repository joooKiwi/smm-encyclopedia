import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";

export interface Entity
    extends SMM2Name, IsInProperty {

    name: SMM2Name

    isInProperty: IsInProperty

}