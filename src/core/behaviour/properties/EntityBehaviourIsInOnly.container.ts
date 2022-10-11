import type {EntityBehaviourIsInOnly} from './EntityBehaviourIsInOnly'

export class EntityBehaviourIsInOnlyContainer
    implements EntityBehaviourIsInOnly {

    //region -------------------- Fields --------------------

    readonly #isInOnlineOnly
    readonly #isInMultiplayerOnly

    //endregion -------------------- Fields --------------------

    constructor(isInOnlineOnly: boolean, isInMultiplayerOnly: boolean,) {
        this.#isInOnlineOnly = isInOnlineOnly
        this.#isInMultiplayerOnly = isInMultiplayerOnly
    }

    //region -------------------- Getter methods --------------------

    public get isOnlineOnly() {
        return this.#isInOnlineOnly
    }

    public get isMultiplayerOnly() {
        return this.#isInMultiplayerOnly
    }

    //endregion -------------------- Getter methods --------------------

}