import type {ClassThatIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {GameProperty}                     from '../entity/properties/GameProperty';
import type {Name}                             from '../../lang/name/Name';
import type {ObjectHolder}                     from '../../util/holder/ObjectHolder';
import type {Theme}                            from './Theme';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class AbstractTheme<PROPERTY extends GameProperty = GameProperty, >
    extends ClassContainingAName<string>
    implements Theme {

    //region -------------------- Attributes --------------------

    readonly #isInProperty;
    readonly #isAvailableFromTheStartHolder;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name<string>, isInProperty: PROPERTY, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart>,) {
        super(name,);
        this.#isInProperty = isInProperty;
        this.#isAvailableFromTheStartHolder = isAvailableFromTheStart;
    }

    //region -------------------- Game properties --------------------

    public get isInProperty(): PROPERTY {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMakerFor3DS(): this['isInProperty']['isInSuperMarioMakerFor3DS'] {
        return this.isInProperty.isInSuperMarioMakerFor3DS;
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart {
        return this.#isAvailableFromTheStartHolder.get;
    }

    public get isAvailableFromTheStartInSMM1() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1;
    }

    public get isAvailableFromTheStartInSMM3DS() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS;
    }

    public get isAvailableFromTheStartInSMM2() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2;
    }

    //endregion -------------------- "Is available from the start" properties --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap();
    }

}
