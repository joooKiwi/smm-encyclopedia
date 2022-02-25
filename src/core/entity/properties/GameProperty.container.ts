import type {EnumArray}    from '../../game/Games.types';
import type {ExtendedMap}  from '../../../util/extended/ExtendedMap';
import type {GameProperty} from './GameProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import type {Games}           from '../../game/Games';

/**
 * @multiton
 * @provider
 * @classWithDynamicImport
 */
export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- Attributes --------------------

    static #values?: EnumArray;
    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GamePropertyContainer> = new ExtendedMapContainer();

    #map?: ReadonlyMap<Games, boolean>;
    readonly #isInSuperMarioMaker1;
    readonly #isInSuperMarioMaker2;

    //endregion -------------------- Attributes --------------------

    private constructor([isInSuperMarioMaker1, isInSuperMarioMaker2,]: ArgumentsReceived,) {
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1;
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2;
    }

    //region -------------------- Getter methods --------------------

    private static get __values(): EnumArray {
        return this.#values ??= require('../../game/Games').Games.values;
    }


    public get isInSuperMarioMaker1() {
        return this.#isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.#isInSuperMarioMaker2;
    }

    //endregion -------------------- Getter methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#map ??= new Map(GamePropertyContainer.__values.map(game => [game, game.get(this),]));
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
