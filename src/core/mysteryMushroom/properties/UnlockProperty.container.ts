import type {ExtendedMap}                                 from '../../../util/extended/ExtendedMap';
import type {PossibleConditionToUnlockIt, UnlockProperty} from './UnlockProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';

/**
 * @multiton
 * @provider
 */
export class UnlockPropertyContainer
    implements UnlockProperty {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, UnlockPropertyContainer> = new ExtendedMapContainer();

    readonly #conditionToUnlockIt;
    readonly #canBeUnlockedByAnAmiibo;

    //endregion -------------------- Fields --------------------

    private constructor([conditionToUnlockIt, canBeUnlockedByAnAmiibo,]: ArgumentsReceived,) {
        this.#conditionToUnlockIt = conditionToUnlockIt;
        this.#canBeUnlockedByAnAmiibo = canBeUnlockedByAnAmiibo;
    }

    //region -------------------- Getter methods --------------------

    public get conditionToUnlockIt() {
        return this.#conditionToUnlockIt;
    }

    public get canBeUnlockedByAnAmiibo() {
        return this.#canBeUnlockedByAnAmiibo;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get(conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,): UnlockProperty {
        const argumentsReceived: ArgumentsReceived = [conditionToUnlockIt, canBeUnlockedByAnAmiibo,];

        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(reference => reference.set(argumentsReceived, new this(argumentsReceived)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,];
