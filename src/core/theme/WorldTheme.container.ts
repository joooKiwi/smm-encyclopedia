import type {AbstractExclusiveSMM2GameProperty} from '../properties/GameProperty';
import type {Name}                              from '../../lang/name/Name';
import type {WorldTheme}                        from './WorldTheme';

import {AbstractTheme}         from './AbstractTheme';
import {GamePropertyContainer} from '../properties/GameProperty.container';

export class WorldThemeContainer
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: Name,) {
        super(name, GamePropertyContainer.get(false, true,));
    }

    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return super.isInProperty as AbstractExclusiveSMM2GameProperty;
    }

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return false;
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return true;
    }

    //endregion -------------------- Game properties --------------------

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
