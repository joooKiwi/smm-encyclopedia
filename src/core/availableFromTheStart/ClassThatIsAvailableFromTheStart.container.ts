import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from './ClassThatIsAvailableFromTheStart';
import type {ExtendedMap}                                                       from '../../util/extended/ExtendedMap';
import type {GameStructure}                                                     from '../game/GameStructure';

import {ExtendedMapContainer}   from '../../util/extended/ExtendedMap.container';
import {GameStructureContainer} from '../game/GameStructure.container';

export class ClassThatIsAvailableFromTheStartContainer<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >
    implements ClassThatIsAvailableFromTheStart<SMM1, SMM3DS, SMM2> {

    //region -------------------- Attribute --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, ClassThatIsAvailableFromTheStart> = new ExtendedMapContainer();

    readonly #structure;

    //endregion -------------------- Attribute --------------------

    private constructor(structure: GameStructure<SMM1, SMM3DS, SMM2>,) {
        this.#structure = structure;
    }

    //region -------------------- Getter methods --------------------

    public get isAvailableFromTheStartInSMM1(): SMM1 {
        return this.#structure.superMarioMaker;
    }

    public get isAvailableFromTheStartInSMM3DS(): SMM3DS {
        return this.#structure.superMarioMakerForNintendo3DS;
    }

    public get isAvailableFromTheStartInSMM2(): SMM2 {
        return this.#structure.superMarioMaker2;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    /**
     * Get the arguments to know if this is available from the start or not.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >(...argumentsReceived: ArgumentsReceived<SMM1, SMM3DS, SMM2>): ClassThatIsAvailableFromTheStart<SMM1, SMM3DS, SMM2>
    public static get(...argumentsReceived: ArgumentsReceived): ClassThatIsAvailableFromTheStart {
        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(GameStructureContainer.get(...argumentsReceived),)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------


}

type ArgumentsReceived<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = readonly [SMM1, SMM3DS, SMM2,];
