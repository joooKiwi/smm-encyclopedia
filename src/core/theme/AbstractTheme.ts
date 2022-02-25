import type {GameProperty} from '../entity/properties/GameProperty';
import type {Name}         from '../../lang/name/Name';
import type {Theme}        from './Theme';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class AbstractTheme<PROPERTY extends GameProperty = GameProperty, >
    extends ClassContainingAName<string>
    implements Theme {

    //region -------------------- Attributes --------------------

    readonly #isInProperty;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name<string>, isInProperty: PROPERTY,) {
        super(name,);
        this.#isInProperty = isInProperty;
    }

    //region -------------------- Game properties --------------------

    public get isInProperty(): PROPERTY {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap();
    }

}
