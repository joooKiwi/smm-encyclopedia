import {EntityBehaviourIsInOnly} from './EntityBehaviourIsInOnly';

/**
 * @multiton
 * @provider
 */
export class EntityBehaviourIsInOnlyContainer
    implements EntityBehaviourIsInOnly {

    //region -------------------- predefined containers --------------------

    static readonly #IS_IN_NONE =          new EntityBehaviourIsInOnlyContainer(false, false, );

    static readonly #IS_ONLINE_ONLY =      new EntityBehaviourIsInOnlyContainer(true,  false,);
    static readonly #IS_MULTIPLAYER_ONLY = new EntityBehaviourIsInOnlyContainer(false, true, );

    //endregion -------------------- predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInOnlineOnly;
    readonly #isInMultiplayerOnly;

    private constructor(isInOnlineOnly: boolean, isInMultiplayerOnly: boolean,) {
        this.#isInOnlineOnly = isInOnlineOnly;
        this.#isInMultiplayerOnly = isInMultiplayerOnly;
    }

    public get isOnlineOnly() {
        return this.#isInOnlineOnly;
    }

    public get isMultiplayerOnly() {
        return this.#isInMultiplayerOnly;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------


    public static get(isInOnlineOnly: boolean, isInMultiplayerOnly: boolean,): EntityBehaviourIsInOnly {
        if (!isInOnlineOnly && !isInMultiplayerOnly)
            return this.#IS_IN_NONE;

        if (isInOnlineOnly && !isInMultiplayerOnly)
            return this.#IS_ONLINE_ONLY;
        if (!isInOnlineOnly && isInMultiplayerOnly)
            return this.#IS_MULTIPLAYER_ONLY;

        throw new ReferenceError(`No predefined behaviour (is in only) container is compatible with (${isInOnlineOnly} & ${isInMultiplayerOnly}).`);
    }

}