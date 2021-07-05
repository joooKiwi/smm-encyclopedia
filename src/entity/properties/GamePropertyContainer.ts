import type {ExclusiveSMM1GameProperty} from './exclusive/ExclusiveSMM1GameProperty';
import type {ExclusiveSMM2GameProperty} from './exclusive/ExclusiveSMM2GameProperty';
import type {GameProperty}              from './GameProperty';

/**
 * @multiton
 * @provider
 */
export class GamePropertyContainer
    implements GameProperty {

    //region -------------------- predefined containers --------------------
    static readonly #IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY = new GamePropertyContainer(true,  false,) as ExclusiveSMM1GameProperty;
    static readonly #IS_IN_ONLY_SUPER_MARIO_MAKER_2_PROPERTY = new GamePropertyContainer(false, true, ) as ExclusiveSMM2GameProperty;

    static readonly #IS_IN_BOTH_GAMES_PROPERTY =               new GamePropertyContainer(true,  true, );
    static readonly #IS_IN_NO_GAMES_PROPERTY =                 new GamePropertyContainer(false, false,);

    //endregion -------------------- predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInSuperMarioMaker1;
    readonly #isInSuperMarioMaker2;

    private constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,) {
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1;
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2;
    }


    public get isInSuperMarioMaker1() {
        return this.#isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.#isInSuperMarioMaker2;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider/Multiton method --------------------

    public static get(isInSuperMarioMaker1: true, isInSuperMarioMaker2: false,): ExclusiveSMM1GameProperty
    public static get(isInSuperMarioMaker1: false, isInSuperMarioMaker2: true,): ExclusiveSMM2GameProperty
    public static get(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,): GameProperty
    /**
     * <p>
     *     Return the property instance based on the booleans values received.
     *     Note that it does not duplicate the class creation, but only give a predefined instance.
     * </p>
     *
     * The result vary based on the values received.
     * <table>
     *     <tr><th>booleans</th><th>result</th></tr>
     *     <tr><td>true & true</td><td>A property in every games</td></tr>
     *     <tr><td>true & false</td><td>A property only in {@link Games.SUPER_MARIO_MAKER_1}</td></tr>
     *     <tr><td>false & true</td><td>A property only in {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>false & false</td><td>A property where it is in no games.</td></tr>
     * </table>
     *
     * @param isInSuperMarioMaker1
     * @param isInSuperMarioMaker2
     */
    public static get(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,): GameProperty {
        if (isInSuperMarioMaker1 && isInSuperMarioMaker2)
            return this.#IS_IN_BOTH_GAMES_PROPERTY;
        if (isInSuperMarioMaker1 && !isInSuperMarioMaker2)
            return this.#IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY;
        if (!isInSuperMarioMaker1 && isInSuperMarioMaker2)
            return this.#IS_IN_ONLY_SUPER_MARIO_MAKER_2_PROPERTY;
        return this.#IS_IN_NO_GAMES_PROPERTY;
    }

    //endregion -------------------- Provider/Multiton method --------------------

}
