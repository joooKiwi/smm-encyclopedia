import {IsInGameStyleProperty}         from './IsInGameStyleProperty';
import {IsInOnlySMM1GameStyleProperty} from './IsInOnlySMM1GameStyleProperty';
import {IsInOnlySMM2GameStyleProperty} from './IsInOnlySMM2GameStyleProperty';

/**
 * @multiton
 * @provider
 */
export class IsInGameStylePropertyContainer
    implements IsInGameStyleProperty {

    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_IN_SUPER_MARIO_MAKER_1_PROPERTY = new IsInGameStylePropertyContainer(true, false, false, false, null,) as IsInOnlySMM1GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_IN_SUPER_MARIO_MAKER_2_PROPERTY = new IsInGameStylePropertyContainer(true, false, false, false, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_3_PROPERTY = new IsInGameStylePropertyContainer(false, true, false, false, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_WORLD_PROPERTY = new IsInGameStylePropertyContainer(false, false, true, false, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_AND_SUPER_MARIO_BROS_3_AND_NEW_SUPER_MARIO_BROS_U = new IsInGameStylePropertyContainer(true, true, true, false, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_NEW_SUPER_MARIO_BROS_U_PROPERTY = new IsInGameStylePropertyContainer(false, false, false, true, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_3D_WORLD_PROPERTY = new IsInGameStylePropertyContainer(false, false, false, false, true,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_AND_SUPER_MARIO_BROS_3_PROPERTY = new IsInGameStylePropertyContainer(true, true, false, false, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EXCLUSIVE_TO_SUPER_MARIO_WORLD_AND_NEW_SUPER_MARIO_BROS_U_PROPERTY = new IsInGameStylePropertyContainer(false, false, true, true, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_ORIGINAL_4_STYLES_PROPERTY = new IsInGameStylePropertyContainer(true, true, true, true, false,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_EVERY_GAME_STYLES_PROPERTY = new IsInGameStylePropertyContainer(true, true, true, true, true,) as IsInOnlySMM2GameStyleProperty;
    private static readonly __IS_IN_NO_GAME_STYLES_PROPERTY = new IsInGameStylePropertyContainer(false, false, false, false, null,);

    readonly #isInSuperMarioBrosStyle;
    readonly #isInSuperMarioBros3Style;
    readonly #isInSuperMarioWorldStyle;
    readonly #isInNewSuperMarioBrosUStyle;
    readonly #isInSuperMario3DWorldStyle;


    private constructor(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,) {
        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle;
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style;
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle;
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle;
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle;
    }


    public get isInSuperMarioBrosStyle() {
        return this.#isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.#isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.#isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.#isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.#isInSuperMario3DWorldStyle;
    }


    public toGameStyleMap(): Map<GameStyles, boolean> {
        return new Map(GameStyles.values.map(gameStyle => [gameStyle, gameStyle.get(this),]));
    }

    public static get(isInSuperMarioBrosStyle: false, isInSuperMarioBros3Style: false, isInSuperMarioWorldStyle: false, isInNewSuperMarioBrosUStyle: false, isInSuperMario3DWorldStyle: null,): IsInGameStyleProperty
    public static get(isInSuperMarioBrosStyle: true, isInSuperMarioBros3Style: false, isInSuperMarioWorldStyle: false, isInNewSuperMarioBrosUStyle: false, isInSuperMario3DWorldStyle: null,): IsInOnlySMM1GameStyleProperty
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: boolean,): IsInOnlySMM2GameStyleProperty
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,): IsInGameStyleProperty
    /**
     * <p>
     *     Return the property instance based on the booleans values received.
     *     Note that it does not duplicate the class creation, but only give a predefined instance.
     * </p>
     *
     * The result vary based on the values received.
     * <table>
     *     <tr><th>booleans</th><th>result</th></tr>
     *     <tr><td>true  true  true  true  & true</td> <td>A property in every game styles</td></tr>
     *     <tr><td>true  false false false & null</td> <td>A property only in {@link GameStyles.SUPER_MARIO_BROS} and in {@link Games.SUPER_MARIO_MAKER_1}</td></tr>
     *     <tr><td>true  false false false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS} and in {@link Games.SUPER_MARIO_MAKER_2}</td></tr>
     *     <tr><td>false true  false false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS_3}</td></tr>
     *     <tr><td>false false true  false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_WORLD}</td></tr>
     *     <tr><td>false false false true  & false</td><td>A property only in {@link GameStyles.NEW_SUPER_MARIO_BROS_U}</td></tr>
     *     <tr><td>false false false false & true</td><td>A property only in {@link GameStyles.SUPER_MARIO_3D_WORLD}</td></tr>
     *     <tr><td>true  true  true  true  & false</td><td>A property in the original 4 styles ({@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3}, {@link GameStyles.SUPER_MARIO_WORLD} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U})</td></tr>
     *     <tr><td>true  true  false false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS} & {@link GameStyles.SUPER_MARIO_BROS_3}</td></tr>
     *     <tr><td>false false true  true  & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_WORLD} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U}</td></tr>
     *     <tr><td>true  true  false true  & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U}</td></tr>
     *     <tr><td>false false false false & null</td><td>A property no game styles. It also catch every other cases, but it should not happen.</td></tr>
     * </table>
     *
     * @param isInSuperMarioBrosStyle
     * @param isInSuperMarioBros3Style
     * @param isInSuperMarioWorldStyle
     * @param isInNewSuperMarioBrosUStyle
     * @param isInSuperMario3DWorldStyle
     */
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: null | boolean,): IsInGameStyleProperty {
        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle) {
            if (isInSuperMario3DWorldStyle === true)
                return IsInGameStylePropertyContainer.__IS_IN_EVERY_GAME_STYLES_PROPERTY;
            return IsInGameStylePropertyContainer.__IS_IN_ORIGINAL_4_STYLES_PROPERTY;
        }
        //region ----- Exclusive for 1 game style -----
        if (isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle) {
            if (isInSuperMario3DWorldStyle == null)
                return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_IN_SUPER_MARIO_MAKER_1_PROPERTY;
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_IN_SUPER_MARIO_MAKER_2_PROPERTY;
        }
        if (!isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_3_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_WORLD_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_NEW_SUPER_MARIO_BROS_U_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === true)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_3D_WORLD_PROPERTY;
        //endregion ----- Exclusive for 1 game style -----
        //region ----- Exclusive for 2 game styles -----
        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_AND_SUPER_MARIO_BROS_3_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_WORLD_AND_NEW_SUPER_MARIO_BROS_U_PROPERTY;
        //endregion ----- Exclusive for 2 game styles -----
        //region ----- Exclusive for 3 game styles -----
        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === false)
            return IsInGameStylePropertyContainer.__IS_IN_EXCLUSIVE_TO_SUPER_MARIO_BROS_AND_SUPER_MARIO_BROS_3_AND_NEW_SUPER_MARIO_BROS_U;
        //endregion ----- Exclusive for 3 game styles -----

        return IsInGameStylePropertyContainer.__IS_IN_NO_GAME_STYLES_PROPERTY;
    }

}