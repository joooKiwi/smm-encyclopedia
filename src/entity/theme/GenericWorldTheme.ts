import {AbstractTheme}             from './AbstractTheme';
import {IsInGamePropertyContainer} from '../properties/IsInGamePropertyContainer';
import {IsInOnlySMM2GameProperty}  from '../properties/IsInOnlySMM2GameProperty';
import {SMM2Name}                  from '../lang/SMM2Name';
import {WorldTheme}                from './WorldTheme';

export class GenericWorldTheme
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: SMM2Name) {
        super(name, IsInGamePropertyContainer.get(false, true));
    }


    public get isInProperty() {
        return super.isInProperty as IsInOnlySMM2GameProperty;
    }

    public get isInSuperMarioMaker1(): false {
        return false;
    }

    public get isInSuperMarioMaker2(): true {
        return true;
    }

}
