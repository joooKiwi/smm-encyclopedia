import type {ExclusiveSMM2GameProperty} from '../properties/exclusive/ExclusiveSMM2GameProperty';
import type {Name}                      from '../../lang/name/Name';
import type {WorldTheme}                from './WorldTheme';

import {AbstractTheme}         from './AbstractTheme';
import {GamePropertyContainer} from '../properties/GamePropertyContainer';

export class GenericWorldTheme
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: Name) {
        super(name, GamePropertyContainer.get(false, true,));
    }

    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return super.isInProperty as ExclusiveSMM2GameProperty;
    }

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return false;
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return true;
    }

    //endregion -------------------- Game properties --------------------

    public toNameMap() {
        return this.name.toNameMap();
    }

}
