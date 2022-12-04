import type {ClassThatIsAvailableFromTheStart, InferredClassThatIsAvailableFromTheStartBySMM1, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {ProviderForNullable}                                                                                               from 'util/provider/ProviderForNullable'
import type {ProviderWithoutKey}                                                                                                from 'util/provider/ProviderWithoutKey'

import {ClassThatIsAvailableFromTheStartContainer} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container'
import {GameStructureProvider}                     from 'core/game/GameStructure.provider'
import {AbstractProvider}                          from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class ClassThatIsAvailableFromTheStartProvider
    extends AbstractProvider<ArgumentsReceived, ClassThatIsAvailableFromTheStart>
    implements ProviderWithoutKey<ClassThatIsAvailableFromTheStart, ArgumentsReceived>, ProviderForNullable<ClassThatIsAvailableFromTheStart, ClassThatIsAvailableFromTheStart<null, null, null>, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ClassThatIsAvailableFromTheStartProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * A fast way to retrieve an empty {@link ClassThatIsAvailableFromTheStart} with only null as their parameters
     */
    public get null() {
        return this.get(null, null, null,)
    }

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
    public get<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >(isAvailableInSMM1: SMM1,): InferredClassThatIsAvailableFromTheStartBySMM1<SMM1>
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
    public get<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, >(isAvailableFromTheStart_SMM1: SMM1, isAvailableFromTheStart_SMM3DS: SMM3DS, isAvailableFromTheStart_SMM2: SMM2,): ClassThatIsAvailableFromTheStart<SMM1, SMM3DS, SMM2>
    public get(...argumentsReceived: | ArgumentsReceived | ArgumentsReceived_Simplified): ClassThatIsAvailableFromTheStart {
        if (argumentsReceived.length === 1)
            return argumentsReceived[0] == null
                ? this.get(null, null, true,)
                : this.get(argumentsReceived[0], true, true,)

        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new ClassThatIsAvailableFromTheStartContainer(GameStructureProvider.get.get(...argumentsReceived),)))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM3DS extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, SMM2 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = readonly [
    SMM1,
    SMM3DS,
    SMM2,
]
type ArgumentsReceived_Simplified<SMM1 extends PossibleIsAvailableFromTheStart = PossibleIsAvailableFromTheStart, > = readonly [
    SMM1,
]
