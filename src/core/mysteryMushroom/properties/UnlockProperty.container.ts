import type {PossibleConditionToUnlockIt, UnlockProperty} from './UnlockProperty'

export class UnlockPropertyContainer
    implements UnlockProperty {

    //region -------------------- Fields --------------------

    readonly #conditionToUnlockIt
    readonly #canBeUnlockedByAnAmiibo

    //endregion -------------------- Fields --------------------

    constructor(conditionToUnlockIt: PossibleConditionToUnlockIt, canBeUnlockedByAnAmiibo: boolean,) {
        this.#conditionToUnlockIt = conditionToUnlockIt
        this.#canBeUnlockedByAnAmiibo = canBeUnlockedByAnAmiibo
    }

    //region -------------------- Getter methods --------------------

    public get conditionToUnlockIt() {
        return this.#conditionToUnlockIt
    }

    public get canBeUnlockedByAnAmiibo() {
        return this.#canBeUnlockedByAnAmiibo
    }

    //endregion -------------------- Getter methods --------------------

}
