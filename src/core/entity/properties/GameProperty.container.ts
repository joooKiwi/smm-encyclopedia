import type {ExtendedMap}  from '../../../util/extended/ExtendedMap';
import type {GameProperty} from './GameProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';

/**
 * @multiton
 * @provider
 */
export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GamePropertyContainer> = new ExtendedMapContainer();

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInSuperMarioMaker1;
    readonly #isInSuperMarioMaker2;

    private constructor([isInSuperMarioMaker1, isInSuperMarioMaker2,]: ArgumentsReceived,) {
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1;
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2;
    }


    public get isInSuperMarioMaker1() {
        return this.#isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.#isInSuperMarioMaker2;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------


    public static get<SMM1 extends boolean = boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1: SMM1, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM2>
    /**
     * Get a property instance based on the {@link Games} properties.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get(...argumentsReceived: ArgumentsReceived) {
        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(argumentsReceived,)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,];
