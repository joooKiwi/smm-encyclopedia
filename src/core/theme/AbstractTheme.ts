import type {GameProperty} from '../entity/properties/GameProperty';
import type {Name}         from '../../lang/name/Name';
import type {Theme}        from './Theme';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class AbstractTheme
    extends ClassContainingAName<string>
    implements Theme {

    //region -------------------- Attributes --------------------

    readonly #isInProperty;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name<string>, isInProperty: GameProperty,) {
        super(name,);
        this.#isInProperty = isInProperty;
    }

    //region -------------------- Game properties --------------------

    public get isInProperty(): GameProperty {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

}
