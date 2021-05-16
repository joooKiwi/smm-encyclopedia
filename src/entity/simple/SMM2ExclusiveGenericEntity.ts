import {SMM2Name}                 from '../lang/SMM2Name';
import {IsInProperty}             from '../properties/IsInProperty';
import {EntityCategory}           from '../category/EntityCategory';
import {EntityReferences}         from '../properties/EntityReferences';
import {GenericEntity}            from './GenericEntity';
import {IsInOnlySMM2GameProperty} from '../properties/IsInOnlySMM2GameProperty';
import {IsInOnlySMM2Property}     from '../properties/IsInOnlySMM2Property';
import {SMM2ExclusiveEntity}      from './SMM2ExclusiveEntity';

export class SMM2ExclusiveGenericEntity
    extends GenericEntity
    implements SMM2ExclusiveEntity {

    public constructor(name: SMM2Name, category: EntityCategory, isInProperty: IsInProperty, references: EntityReferences,) {
        super(name, category, validateIsInProperty(isInProperty), references,);
    }

    //region -------------------- Is in properties --------------------

    public get isInProperty(): IsInOnlySMM2Property {
        return super.isInProperty as IsInOnlySMM2Property;
    }


    get isInGame(): IsInOnlySMM2GameProperty {
        return super.isInGame as IsInOnlySMM2GameProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in properties --------------------

}

function validateIsInProperty(isInProperty: IsInProperty): IsInOnlySMM2Property {
    if (isInProperty.isInSuperMarioMaker1)
        throw new TypeError('The property isInSMM1 should always be set to false for a SMM2 exclusive property.');
    if (!isInProperty.isInSuperMarioMaker2)
        throw new TypeError('The property isInSMM2 should always be set to true for a SMM2 exclusive property.');
    return isInProperty as IsInOnlySMM2Property;
}
