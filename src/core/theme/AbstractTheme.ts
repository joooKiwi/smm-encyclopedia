import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {Theme}                            from 'core/theme/Theme'
import type {Name}                             from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class AbstractTheme<PROPERTY extends GameProperty = GameProperty, >
    extends ClassContainingAName<string>
    implements Theme {

    //region -------------------- Fields --------------------

    readonly #isInProperty
    readonly #isAvailableFromTheStartHolder

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(name: Name<string>,
                          isInProperty: PROPERTY,
                          isAvailableFromTheStart: ClassThatIsAvailableFromTheStart,) {
        super(name,)
        this.#isInProperty = isInProperty
        this.#isAvailableFromTheStartHolder = isAvailableFromTheStart
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public get isInProperty(): PROPERTY {
        return this.#isInProperty
    }

    public get isInSuperMarioMaker1(): this['isInProperty']['isInSuperMarioMaker1'] {
        return this.isInProperty.isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): this['isInProperty']['isInSuperMarioMakerFor3DS'] {
        return this.isInProperty.isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): this['isInProperty']['isInSuperMarioMaker2'] {
        return this.isInProperty.isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart {
        return this.#isAvailableFromTheStartHolder
    }

    public get isAvailableFromTheStartInSMM1() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1
    }

    public get isAvailableFromTheStartInSMM3DS() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS
    }

    public get isAvailableFromTheStartInSMM2() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2
    }

    //endregion -------------------- "Is available from the start" properties --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
