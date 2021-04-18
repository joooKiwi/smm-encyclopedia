import {AbstractEntity} from "./AbstractEntity";
import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";

export class GenericEntity
    extends AbstractEntity {

    public constructor(name: SMM2Name, isInProperty: IsInProperty) {
        super(name, isInProperty);
    }

}
