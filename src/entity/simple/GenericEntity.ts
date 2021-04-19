import {AbstractEntity} from "./AbstractEntity";
import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";

export class GenericEntity
    extends AbstractEntity {

    public constructor(name: SMM2Name, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, isInProperty, references,);
    }

}
