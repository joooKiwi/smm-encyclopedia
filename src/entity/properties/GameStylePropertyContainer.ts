import type {AbstractExclusiveSMM2GameStyleProperty, ExclusiveSMM1GameStyleProperty, GameStyleProperty} from './GameStyleProperty';

import {GameStyles} from '../gameStyle/GameStyles';

/**
 * @multiton
 * @provider
 */
export class GameStylePropertyContainer
    implements GameStyleProperty {

    //region -------------------- predefined containers --------------------

    static readonly #IS_IN_EXCLUSIVE_TO_SMB_IN_SMM1_PROPERTY =         new GameStylePropertyContainer(true,  false, false, false, null, ) as ExclusiveSMM1GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMB_IN_SMM2_PROPERTY =         new GameStylePropertyContainer(true,  false, false, false, false,) as AbstractExclusiveSMM2GameStyleProperty;

    static readonly #IS_IN_EXCLUSIVE_TO_SMB3_PROPERTY =                new GameStylePropertyContainer(false, true,  false, false, false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMW_PROPERTY =                 new GameStylePropertyContainer(false, false, true,  false, false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_NSMBU_PROPERTY =               new GameStylePropertyContainer(false, false, false, true,  false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SM3DW_PROPERTY =               new GameStylePropertyContainer(false, false, false, false, true, ) as AbstractExclusiveSMM2GameStyleProperty;

    static readonly #IS_IN_EXCLUSIVE_TO_SMB_AND_SMB3_PROPERTY =        new GameStylePropertyContainer(true,  true,  false, false, false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMW_AND_NSMBU_PROPERTY =       new GameStylePropertyContainer(false, false, true,  true,  false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMW_AND_SM3DW_PROPERTY =       new GameStylePropertyContainer(false, false, true,  false, true, ) as AbstractExclusiveSMM2GameStyleProperty;

    static readonly #IS_IN_EXCLUSIVE_TO_SMB_SMB3_AND_SMW =             new GameStylePropertyContainer(true,  true,  true,  false, false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMB_SMB3_AND_NSMBU =           new GameStylePropertyContainer(true,  true,  false, true,  false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EXCLUSIVE_TO_SMW_NSMBU_AND_SM3DW_PROPERTY = new GameStylePropertyContainer(false, false, true,  true,  true, ) as AbstractExclusiveSMM2GameStyleProperty;

    static readonly #IS_IN_EXCLUSIVE_TO_SMB_SMB3_NSMBU_AND_SM3DW =     new GameStylePropertyContainer(true,  true,  true,  false, true, ) as AbstractExclusiveSMM2GameStyleProperty;

    static readonly #IS_IN_ORIGINAL_4_STYLES_PROPERTY =                new GameStylePropertyContainer(true,  true,  true,  true,  false,) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_EVERY_GAME_STYLES_PROPERTY =                new GameStylePropertyContainer(true,  true,  true,  true,  true, ) as AbstractExclusiveSMM2GameStyleProperty;
    static readonly #IS_IN_NO_GAME_STYLES_PROPERTY =                   new GameStylePropertyContainer(false, false, false, false, null, );

    //endregion -------------------- predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInSuperMarioBrosStyle;
    readonly #isInSuperMarioBros3Style;
    readonly #isInSuperMarioWorldStyle;
    readonly #isInNewSuperMarioBrosUStyle;
    readonly #isInSuperMario3DWorldStyle;


    private constructor(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: | boolean | null,) {
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

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider/Multiton method --------------------

    public static get(isInSuperMarioBrosStyle: false, isInSuperMarioBros3Style: false, isInSuperMarioWorldStyle: false, isInNewSuperMarioBrosUStyle: false, isInSuperMario3DWorldStyle: null,): GameStyleProperty
    public static get(isInSuperMarioBrosStyle: true, isInSuperMarioBros3Style: false, isInSuperMarioWorldStyle: false, isInNewSuperMarioBrosUStyle: false, isInSuperMario3DWorldStyle: null,): ExclusiveSMM1GameStyleProperty
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: boolean,): AbstractExclusiveSMM2GameStyleProperty
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: | boolean | null,): GameStyleProperty
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
     *     <tr><td>false false false false & true</td> <td>A property only in {@link GameStyles.SUPER_MARIO_3D_WORLD}</td></tr>
     *     <tr><td>true  true  true  true  & false</td><td>A property in the original 4 styles ({@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3}, {@link GameStyles.SUPER_MARIO_WORLD} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U})</td></tr>
     *     <tr><td>true  true  false false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS} & {@link GameStyles.SUPER_MARIO_BROS_3}</td></tr>
     *     <tr><td>false false true  true  & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_WORLD} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U}</td></tr>
     *     <tr><td>false false true  false & true</td> <td>A property only in {@link GameStyles.SUPER_MARIO_WORLD} & {@link GameStyles.SUPER_MARIO_3D_WORLD}</td></tr>
     *     <tr><td>true  true  false true  & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3} & {@link GameStyles.NEW_SUPER_MARIO_BROS_U}</td></tr>
     *     <tr><td>true  true  true  false & false</td><td>A property only in {@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3} & {@link GameStyles.SUPER_MARIO_WORLD}</td></tr>
     *     <tr><td>true  true  false true  & true</td> <td>A property only in {@link GameStyles.SUPER_MARIO_BROS}, {@link GameStyles.SUPER_MARIO_BROS_3}, {@link GameStyles.NEW_SUPER_MARIO_BROS_U} & {@link GameStyles.SUPER_MARIO_3D_WORLD}</td></tr>
     *     <tr><td>false false false false & null</td> <td>A property no game styles. It also catch every other cases, but it should not happen.</td></tr>
     * </table>
     *
     * @param isInSuperMarioBrosStyle
     * @param isInSuperMarioBros3Style
     * @param isInSuperMarioWorldStyle
     * @param isInNewSuperMarioBrosUStyle
     * @param isInSuperMario3DWorldStyle
     */
    public static get(isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: | boolean | null,): GameStyleProperty {
        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle) {
            if (isInSuperMario3DWorldStyle === true)
                return this.#IS_IN_EVERY_GAME_STYLES_PROPERTY;
            return this.#IS_IN_ORIGINAL_4_STYLES_PROPERTY;
        }
        //region ----- Exclusive for 1 game style -----

        if (isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle) {
            if (isInSuperMario3DWorldStyle === null)
                return this.#IS_IN_EXCLUSIVE_TO_SMB_IN_SMM1_PROPERTY;
            return this.#IS_IN_EXCLUSIVE_TO_SMB_IN_SMM2_PROPERTY;
        }
        if (!isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle !== true)
            return this.#IS_IN_EXCLUSIVE_TO_SMB3_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle !== true)
            return this.#IS_IN_EXCLUSIVE_TO_SMW_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle !== true)
            return this.#IS_IN_EXCLUSIVE_TO_NSMBU_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === true)
            return this.#IS_IN_EXCLUSIVE_TO_SM3DW_PROPERTY;

        //endregion ----- Exclusive for 1 game style -----
        //region ----- Exclusive for 2 game styles -----

        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle !== true)
            return this.#IS_IN_EXCLUSIVE_TO_SMB_AND_SMB3_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle !== true)
            return this.#IS_IN_EXCLUSIVE_TO_SMW_AND_NSMBU_PROPERTY;
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === true)
            return this.#IS_IN_EXCLUSIVE_TO_SMW_AND_SM3DW_PROPERTY;

        //endregion ----- Exclusive for 2 game styles -----
        //region ----- Exclusive for 3 game styles -----

        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && isInSuperMario3DWorldStyle !== true) {
            if (isInSuperMarioWorldStyle && !isInNewSuperMarioBrosUStyle)
                return this.#IS_IN_EXCLUSIVE_TO_SMB_SMB3_AND_SMW;
            if (!isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle)
                return this.#IS_IN_EXCLUSIVE_TO_SMB_SMB3_AND_NSMBU;
        }
        if (!isInSuperMarioBrosStyle && !isInSuperMarioBros3Style && isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === true)
            return this.#IS_IN_EXCLUSIVE_TO_SMW_NSMBU_AND_SM3DW_PROPERTY;

        //endregion ----- Exclusive for 3 game styles -----
        //region ----- Exclusive for 4 game styles -----

        if (isInSuperMarioBrosStyle && isInSuperMarioBros3Style && !isInSuperMarioWorldStyle && isInNewSuperMarioBrosUStyle && isInSuperMario3DWorldStyle === true)
            return this.#IS_IN_EXCLUSIVE_TO_SMB_SMB3_NSMBU_AND_SM3DW;

        //endregion ----- Exclusive for 4 game styles -----

        return this.#IS_IN_NO_GAME_STYLES_PROPERTY;
    }

    //endregion -------------------- Provider/Multiton method --------------------

}