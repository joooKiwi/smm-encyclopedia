import type {ClassThatIsAvailableFromTheStart, InferredClassThatIsAvailableFromTheStartBySMM1, PossibleIsAvailableFromTheStart} from './ClassThatIsAvailableFromTheStart';
import type {ExtendedMap}                                                                                                       from '../../util/extended/ExtendedMap';
import type {GameStructure}                                                                                                     from '../game/GameStructure';

import {ExtendedMapContainer}   from '../../util/extended/ExtendedMap.container';
import {GameStructureContainer} from '../game/GameStructure.container';

/**
 * @multiton
 * @provider
 */
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
     * <p>
     *  Get the arguments to know if this is available from the start or not.
     * </p>
     * <p>
     *  It will create an instance of {@link ClassThatIsAvailableFromTheStart}
     *  based on the argument received.
     *  And depending on the value received, it will return a specific instance:
     *  <ol>
     *      <li>null → {@link ClassThatIsAvailableFromTheStart}&#60;null, null, true&#62;</li>
     *      <li>boolean → {@link ClassThatIsAvailableFromTheStart}&#60;boolean, true, true&#62;</li>
     *  <ol/>
     * </p>
     *
     * @param isAvailableInSMM1 is available from the start in {@link Games.SUPER_MARIO_MAKER_1}
     * @noDuplicateInstanceCreation
     */
    public static get<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >(isAvailableInSMM1: SMM1,): InferredClassThatIsAvailableFromTheStartBySMM1<SMM1>
    /**
     * <p>
     *  Get the arguments to know if this is available from the start or not.
     * </p>
     * <p>
     *  It will create or get an instance of {@link ClassThatIsAvailableFromTheStart}
     *  based on the 3 arguments received.
     * </p>
     *
     * @param isAvailableFromTheStart_SMM1 is available from the start in {@link Games.SUPER_MARIO_MAKER_1}
     * @param isAvailableFromTheStart_SMM3DS is available from the start in {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS}
     * @param isAvailableFromTheStart_SMM2 is available from the start in {@link Games.SUPER_MARIO_MAKER_2}
     * @noDuplicateInstanceCreation
     */
    public static get<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >(isAvailableFromTheStart_SMM1: SMM1, isAvailableFromTheStart_SMM3DS: SMM3DS, isAvailableFromTheStart_SMM2: SMM2,): ClassThatIsAvailableFromTheStart<SMM1, SMM3DS, SMM2>
    public static get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified): ClassThatIsAvailableFromTheStart {
        if (argumentsReceived.length === 1)
            return argumentsReceived[0] == null
                ? this.get(null, null, true,)
                : this.get(argumentsReceived[0], true, true,);

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(GameStructureContainer.get(...argumentsReceived),)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------


}

type ArgumentsReceived<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = readonly [SMM1, SMM3DS, SMM2,];
type ArgumentsReceived_Simplified<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = readonly [SMM1,];
