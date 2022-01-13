import type {ExtendedList}                                from '../../../util/extended/ExtendedList';
import type {PossibleConditionToUnlockIt, UnlockProperty} from './UnlockProperty';

import {isArrayEquals} from '../../../util/utilitiesMethods';
import {ExtendedSet}   from '../../../util/extended/ExtendedSet';

/**
 * @multiton
 * @provider
 */
export class UnlockPropertyContainer
    implements UnlockProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedList<UnlockPropertyContainer> = new ExtendedSet();

    readonly #argumentsReceived: ArgumentsReceived;

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #conditionToUnlockIt;
    readonly #canBeUnlockedByAnAmiibo;

    private constructor(argumentsReceived: ArgumentsReceived,) {
        const [conditionToUnlockIt, canBeUnlockedByAnAmiibo,] = this.#argumentsReceived = argumentsReceived;

        this.#conditionToUnlockIt = conditionToUnlockIt;
        this.#canBeUnlockedByAnAmiibo = canBeUnlockedByAnAmiibo;
    }

    public get conditionToUnlockIt() {
        return this.#conditionToUnlockIt;
    }

    public get canBeUnlockedByAnAmiibo() {
        return this.#canBeUnlockedByAnAmiibo;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,): UnlockProperty {
        const argumentsReceived: ArgumentsReceived = [conditionToUnlockIt, canBeUnlockedByAnAmiibo,];

        return this.#EVERY_CONTAINERS.find(value => isArrayEquals(value.#argumentsReceived, argumentsReceived,))
            ?? this.#EVERY_CONTAINERS.addAndGet(new this(argumentsReceived,));
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,];
