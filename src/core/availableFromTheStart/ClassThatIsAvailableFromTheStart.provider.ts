import type {ClassThatIsAvailableFromTheStart, InferredClassThatIsAvailableFromTheStartBySMM1, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {ProviderForNullable}                from 'util/provider/ProviderForNullable'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {ClassThatIsAvailableFromTheStartContainer} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.container'
import {GameStructureProvider}                     from 'core/game/GameStructure.provider'
import {isArrayEquals}                             from 'util/utilitiesMethods'
import {AbstractProvider}                          from 'util/provider/AbstractProvider'

/**
 * @singleton
 */
export class ClassThatIsAvailableFromTheStartProvider
    extends AbstractProvider<ArgumentsReceived, ClassThatIsAvailableFromTheStart>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, ClassThatIsAvailableFromTheStart>,
        ProviderForNullable<ClassThatIsAvailableFromTheStart, ClassThatIsAvailableFromTheStart<null, null, null>, ArgumentsReceived> {

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
    public get(isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart, isAvailableFromTheStart_SMM3DS?: PossibleIsAvailableFromTheStart, isAvailableFromTheStart_SMM2?: PossibleIsAvailableFromTheStart,): ClassThatIsAvailableFromTheStart {
        if (arguments.length === 1){
            if(isAvailableFromTheStart_SMM1 == null)
                return this.get(null, null, true,)
            return this.get(isAvailableFromTheStart_SMM1, true, true,)
        }

        if (isAvailableFromTheStart_SMM3DS === undefined)
            isAvailableFromTheStart_SMM3DS = null
        if (isAvailableFromTheStart_SMM2 === undefined)
            isAvailableFromTheStart_SMM2 = null
        const argumentsReceived = [isAvailableFromTheStart_SMM1, isAvailableFromTheStart_SMM3DS, isAvailableFromTheStart_SMM2,] as const as ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new ClassThatIsAvailableFromTheStartContainer(GameStructureProvider.get.get(isAvailableFromTheStart_SMM1, isAvailableFromTheStart_SMM3DS, isAvailableFromTheStart_SMM2,),),)
        return everyContainer.get(argumentsReferenced,)!
    }

}

type ArgumentsReceived = readonly [
    isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart,
    isAvailableFromTheStart_SMM3DS: PossibleIsAvailableFromTheStart,
    isAvailableFromTheStart_SMM2: PossibleIsAvailableFromTheStart,
]
