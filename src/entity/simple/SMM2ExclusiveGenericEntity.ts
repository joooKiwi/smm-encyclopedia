import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";
import {GenericEntity} from "./GenericEntity";
import {IsInExclusiveSMM2Property} from "../properties/IsInExclusiveSMM2Property";
import {SMM2ExclusiveEntity} from "./SMM2ExclusiveEntity";

export class SMM2ExclusiveGenericEntity
    extends GenericEntity
    implements SMM2ExclusiveEntity {

    public constructor(name: SMM2Name, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, validateIsInProperty(isInProperty), references,);
    }

    //region -------------------- Is in properties --------------------

    public get isInProperty(): IsInExclusiveSMM2Property {
        return super.isInProperty as IsInExclusiveSMM2Property;
    }


    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in properties --------------------

}

function validateIsInProperty(isInProperty: IsInProperty): IsInExclusiveSMM2Property {
    if (isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to false for a SMM2 exclusive property.');
    if (!isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to true for a SMM2 exclusive property.');
    return isInProperty as IsInExclusiveSMM2Property;
}
