import type {ExtendedMap}   from '../../util/extended/ExtendedMap';
import type {GameStructure} from './GameStructure';

import {ExtendedMapContainer} from '../../util/extended/ExtendedMap.container';

/**
 * @multiton
 * @provider
 */
export class GameStructureContainer<SMM1, SMM3DS, SMM2, >
    implements GameStructure<SMM1, SMM3DS, SMM2> {

    //region -------------------- Attributes --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GameStructure<any, any, any>> = new ExtendedMapContainer();

    readonly #superMarioMaker;
    readonly #superMarioMakerForNintendo3DS;
    readonly #superMarioMaker2;

    //endregion -------------------- Attributes --------------------

    private constructor([isInSuperMarioMaker1, isInSuperMarioMakerFor3DS, isInSuperMarioMaker2,]: ArgumentsReceived<SMM1, SMM3DS, SMM2>,) {
        this.#superMarioMaker = isInSuperMarioMaker1;
        this.#superMarioMakerForNintendo3DS = isInSuperMarioMakerFor3DS;
        this.#superMarioMaker2 = isInSuperMarioMaker2;
    }

    //region -------------------- Getter methods --------------------

    public get superMarioMaker(): SMM1 {
        return this.#superMarioMaker;
    }

    public get superMarioMakerForNintendo3DS(): SMM3DS {
        return this.#superMarioMakerForNintendo3DS;
    }

    public get superMarioMaker2(): SMM2 {
        return this.#superMarioMaker2;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get<SMM1AND3DS, SMM2, >(isInSuperMarioMaker1And3DS: SMM1AND3DS, isInSuperMarioMaker2: SMM2,): GameStructure<SMM1AND3DS, SMM1AND3DS, SMM2>
    public static get<SMM1, SMM3DS, SMM2, >(isInSuperMarioMaker1: SMM1, isInSuperMarioMakerFor3DS: SMM3DS, isInSuperMarioMaker2: SMM2,): GameStructure<SMM1, SMM3DS, SMM2>
    /**
     * Get a game structure based on the {@link Games} properties.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified) {
        if (argumentsReceived.length === 2)
            return this.get(argumentsReceived[0], argumentsReceived[0], argumentsReceived[1],);

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(argumentsReceived,)))
            .get(argumentsReceived);
    }


    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived<_1 = any, _3DS = any, _2 = any, > = [smm1: _1, smm3ds: _3DS, smm2: _2,];
type ArgumentsReceived_Simplified<_1 = any, _3DS = any, _2 = any, > = | [smm1And3DS: _1 & _3DS, smm2: _2,]
