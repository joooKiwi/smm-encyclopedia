import {AbstractEntity} from "./AbstractEntity";
import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";
import {EntityCategory} from "../category/EntityCategory";

export class GenericEntity
    extends AbstractEntity {

    public constructor(name: SMM2Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, category, isInProperty, references,);
    }

}
