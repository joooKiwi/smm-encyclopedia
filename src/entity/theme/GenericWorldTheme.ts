import {AbstractTheme}            from './AbstractTheme';
import {GamePropertyContainer}     from '../properties/GamePropertyContainer';
import {ExclusiveSMM2GameProperty} from '../properties/exclusive/ExclusiveSMM2GameProperty';
import {Name}                      from '../../lang/name/Name';
import {WorldTheme}                from './WorldTheme';

export class GenericWorldTheme
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: Name) {
        super(name, GamePropertyContainer.get(false, true));
    }


    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return super.isInProperty as ExclusiveSMM2GameProperty;
    }

    public get isInSuperMarioMaker1(): false {
        return false;
    }

    public get isInSuperMarioMaker2(): true {
        return true;
    }

    //endregion -------------------- Game properties --------------------

    public toNameMap() {
        return this.name.toNameMap();
    }

}
