import {AbstractTheme}             from './AbstractTheme';
import {IsInGamePropertyContainer} from '../properties/IsInGamePropertyContainer';
import {IsInOnlySMM2GameProperty}  from '../properties/IsInOnlySMM2GameProperty';
import {Name}                      from '../../lang/name/Name';
import {WorldTheme}                from './WorldTheme';

export class GenericWorldTheme
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: Name) {
        super(name, IsInGamePropertyContainer.get(false, true));
    }


    //region -------------------- Is in game properties --------------------

    public get isInProperty() {
        return super.isInProperty as IsInOnlySMM2GameProperty;
    }

    public get isInSuperMarioMaker1(): false {
        return false;
    }

    public get isInSuperMarioMaker2(): true {
        return true;
    }

    //endregion -------------------- Is in game properties --------------------

    public toNameMap() {
        return this.name.toNameMap();
    }

}
