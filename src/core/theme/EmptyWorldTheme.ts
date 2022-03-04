import type {ClassWithNullObjectPattern, EmptyWorldThemeName} from '../../util/ClassWithNullObjectPattern';
import type {WorldTheme}                                      from './WorldTheme';

import {ClassContainingAName}  from '../../lang/name/ClassContainingAName';
import {EMPTY_MAP}             from '../../util/emptyVariables';
import {EmptyStringName}       from '../../lang/name/EmptyStringName';
import {GamePropertyContainer} from '../entity/properties/GameProperty.container';

/**
 * @singleton
 */
export class EmptyWorldTheme
    extends ClassContainingAName<string>
    implements WorldTheme, ClassWithNullObjectPattern<EmptyWorldThemeName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyWorldTheme;

    private constructor() {
        super(EmptyStringName.get,);
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Game properties --------------------

    public readonly isInProperty = GamePropertyContainer.get(false, true,);

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.isInProperty.isInSuperMarioMakerFor3DS;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

    public toGameMap() {
        return EMPTY_MAP;
    }


    public toString(): EmptyWorldThemeName {
        return 'Empty world theme';
    }

}
