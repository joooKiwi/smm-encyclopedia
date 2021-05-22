import {IsInGameProperty}         from './IsInGameProperty';
import {IsInOnlySMM1GameProperty} from './IsInOnlySMM1GameProperty';
import {IsInOnlySMM2GameProperty} from './IsInOnlySMM2GameProperty';

export class IsInGamePropertyContainer
    implements IsInGameProperty {

    private static readonly __IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY = new IsInGamePropertyContainer(true, false) as IsInOnlySMM1GameProperty;
    private static readonly __IS_IN_ONLY_SUPER_MARIO_MAKER_2_PROPERTY = new IsInGamePropertyContainer(false, true) as IsInOnlySMM2GameProperty;
    private static readonly __IS_IN_BOTH_GAMES_PROPERTY = new IsInGamePropertyContainer(true, true);
    private static readonly __IS_IN_NO_GAMES_PROPERTY = new IsInGamePropertyContainer(false, false);

    readonly #isInSuperMarioMaker1: boolean
    readonly #isInSuperMarioMaker2: boolean

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

    /**
     * Return the proper instance based on the values received.
     * Note that it does not duplicate the class creation, but only give a predefined instance.
     * @param isInSuperMarioMaker1
     * @param isInSuperMarioMaker2
     */
    public static get(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,): IsInGameProperty
    /**
     * Return a Super Mario Maker 1 only property.
     * @param isInSuperMarioMaker1 true
     * @param isInSuperMarioMaker2 false
     */
    public static get(isInSuperMarioMaker1: true, isInSuperMarioMaker2: false,): IsInOnlySMM1GameProperty
    /**
     * Return a Super Mario Maker 2 only property.
     * @param isInSuperMarioMaker1 false
     * @param isInSuperMarioMaker2 true
     */
    public static get(isInSuperMarioMaker1: false, isInSuperMarioMaker2: true,): IsInOnlySMM2GameProperty
    public static get(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,): IsInGameProperty {
        if (isInSuperMarioMaker1 && isInSuperMarioMaker2)
            return IsInGamePropertyContainer.__IS_IN_BOTH_GAMES_PROPERTY;
        if (isInSuperMarioMaker1 && !isInSuperMarioMaker2)
            return IsInGamePropertyContainer.__IS_IN_ONLY_SUPER_MARIO_MAKER_1_PROPERTY;
        if (!isInSuperMarioMaker1 && isInSuperMarioMaker2)
            return IsInGamePropertyContainer.__IS_IN_ONLY_SUPER_MARIO_MAKER_2_PROPERTY;
        return IsInGamePropertyContainer.__IS_IN_NO_GAMES_PROPERTY;
    }

}
