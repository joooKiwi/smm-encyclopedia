import type {ExtendedMap}   from '../../../../util/extended/ExtendedMap';
import type {GameProperty}  from './GameProperty';
import type {GameStructure} from '../../../game/GameStructure';

import {ExtendedMapContainer}   from '../../../../util/extended/ExtendedMap.container';
import {Games}                  from '../../../game/Games';
import {GameStructureContainer} from '../../../game/GameStructure.container';

/**
 * @multiton
 * @provider
 */
export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GamePropertyContainer> = new ExtendedMapContainer();

    #map?: ReadonlyMap<Games, boolean>;
    readonly #structure;

    //endregion -------------------- Fields --------------------

    private constructor(structure: GameStructure<boolean, boolean, boolean>,) {
        this.#structure = structure;
    }

    //region -------------------- Getter methods --------------------

    public get isInSuperMarioMaker1() {
        return this.#structure.superMarioMaker;
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.#structure.superMarioMakerForNintendo3DS;
    }

    public get isInSuperMarioMaker2() {
        return this.#structure.superMarioMaker2;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#map ??= new Map(Games.values.map(game => [game, game.get(this),]));
    }

    //endregion -------------------- Convertor methods --------------------
    //region -------------------- Provider / Multiton method --------------------


    public static get<SMM1 extends boolean = boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1And3DS: SMM1, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM1, SMM2>
    public static get<SMM1 extends boolean = boolean, SMM3DS extends boolean = boolean, SMM2 extends boolean = boolean, >(isInSuperMarioMaker1: SMM1, isInSuperMarioMakerFor3DS: SMM3DS, isInSuperMarioMaker2: SMM2,): GameProperty<SMM1, SMM3DS, SMM2>
    /**
     * Get a property instance based on the {@link Games} properties.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified) {
        if (argumentsReceived.length === 2)
            return this.get(argumentsReceived[0], argumentsReceived[0], argumentsReceived[1],);

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(GameStructureContainer.get(...argumentsReceived),)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean,];
type ArgumentsReceived_Simplified = readonly [isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,];
