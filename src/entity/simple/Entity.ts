import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";

export interface Entity
    extends SMM2Name, IsInProperty, EntityReferences {

    name: SMM2Name

    isInProperty: IsInProperty

    references: EntityReferences

}
