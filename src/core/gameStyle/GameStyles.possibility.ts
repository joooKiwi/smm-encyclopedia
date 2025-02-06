import type {CollectionHolder}       from '@joookiwi/collection'
import {LazyGenericCollectionHolder} from '@joookiwi/collection'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'
import {GameStyles}        from 'core/gameStyle/GameStyles'

/**
 * An object class that holds only the possibilities of {@link GameStyles}
 * in different kind of {@link CollectionHolder} structure to be used everywhere in the application
 */
export class GameStylesPossibility {

    //region -------------------- Fields --------------------

    static #SMB_ONLY?: CollectionHolder<GameStyles>
    static #SMB3_ONLY?: CollectionHolder<GameStyles>
    static #SMW_ONLY?: CollectionHolder<GameStyles>
    static #NSMBU_ONLY?: CollectionHolder<GameStyles>
    static #SM3DW_ONLY?: CollectionHolder<GameStyles>

    static #SMB_AND_SMB3?: CollectionHolder<GameStyles>
    static #SMB_AND_SMW?: CollectionHolder<GameStyles>
    static #SMB_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMB_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMB3_AND_SMW?: CollectionHolder<GameStyles>
    static #SMB3_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMB3_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMW_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMW_AND_SM3DW?: CollectionHolder<GameStyles>
    static #NSMBU_AND_SM3DW?: CollectionHolder<GameStyles>

    static #SMB_AND_SMB3_AND_SMW?: CollectionHolder<GameStyles>
    static #SMB_AND_SMB3_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMB_AND_SMB3_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMB_AND_SMW_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMB_AND_SMW_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMB_AND_NSMBU_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMB3_AND_SMW_AND_NSMBU?: CollectionHolder<GameStyles>
    static #SMB3_AND_SMW_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMB3_AND_NSMBU_AND_SM3DW?: CollectionHolder<GameStyles>
    static #SMW_AND_NSMBU_AND_SM3DW?: CollectionHolder<GameStyles>

    static #NOT_SMB?: CollectionHolder<GameStyles>
    static #NOT_SMB3?: CollectionHolder<GameStyles>
    static #NOT_SMW?: CollectionHolder<GameStyles>
    static #NOT_NSMBU?: CollectionHolder<GameStyles>
    static #NOT_SM3DW?: CollectionHolder<GameStyles>

    static #ALL_GAME_STYLES?: CollectionHolder<GameStyles>

    static #EVERY_SINGLE_GAME_STYLE?: CollectionHolder<CollectionHolder<GameStyles>>
    static #EVERY_DOUBLE_GAME_STYLE?: CollectionHolder<CollectionHolder<GameStyles>>
    static #EVERY_TRIPLE_GAME_STYLE?: CollectionHolder<CollectionHolder<GameStyles>>
    static #EVERY_QUADRUPLE_GAME_STYLE?: CollectionHolder<CollectionHolder<GameStyles>>
    static #EVERY_GAME_STYLE?: CollectionHolder<CollectionHolder<GameStyles>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Singular possibility --------------------

    /** A {@link CollectionHolder} representing the game styles with only {@link SMB} */
    public static get SMB_ONLY() { return this.#SMB_ONLY ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3} */
    public static get SMB3_ONLY() { return this.#SMB3_ONLY ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMW} */
    public static get SMW_ONLY() { return this.#SMW_ONLY ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link NSMBU} */
    public static get NSMBU_ONLY() { return this.#NSMBU_ONLY ??= new LazyGenericCollectionHolder(() => [GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SM3DW} */
    public static get SM3DW_ONLY() { return this.#SM3DW_ONLY ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_3D_WORLD,],) }

    /** A {@link CollectionHolder} representing the game styles with only {@link SMB} & {@link SMB3} */
    public static get SMB_AND_SMB3() { return this.#SMB_AND_SMB3 ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB} & {@link SMW} */
    public static get SMB_AND_SMW() { return this.#SMB_AND_SMW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB} & {@link NSMBU} */
    public static get SMB_AND_NSMBU() { return this.#SMB_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB} & {@link SM3DW} */
    public static get SMB_AND_SM3DW() { return this.#SMB_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3} & {@link SMW} */
    public static get SMB3_AND_SMW() { return this.#SMB3_AND_SMW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3} & {@link NSMBU} */
    public static get SMB3_AND_NSMBU() { return this.#SMB3_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3} & {@link SM3DW} */
    public static get SMB3_AND_SM3DW() { return this.#SMB3_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMW} & {@link NSMBU} */
    public static get SMW_AND_NSMBU() { return this.#SMW_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMW} & {@link SM3DW} */
    public static get SMW_AND_SM3DW() { return this.#SMW_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link NSMBU} & {@link SM3DW} */
    public static get NSMBU_AND_SM3DW() { return this.#NSMBU_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }

    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link SMB3} & {@link SMW} */
    public static get SMB_AND_SMB3_AND_SMW() { return this.#SMB_AND_SMB3_AND_SMW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link SMB3} & {@link NSMBU} */
    public static get SMB_AND_SMB3_AND_NSMBU() { return this.#SMB_AND_SMB3_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link SMB3} & {@link SM3DW} */
    public static get SMB_AND_SMB3_AND_SM3DW() { return this.#SMB_AND_SMB3_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link SMW} & {@link NSMBU} */
    public static get SMB_AND_SMW_AND_NSMBU() { return this.#SMB_AND_SMW_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link SMW} & {@link SM3DW} */
    public static get SMB_AND_SMW_AND_SM3DW() { return this.#SMB_AND_SMW_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB}, {@link NSMBU} & {@link SM3DW} */
    public static get SMB_AND_NSMBU_AND_SM3DW() { return this.#SMB_AND_NSMBU_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3}, {@link SMW} & {@link NSMBU} */
    public static get SMB3_AND_SMW_AND_NSMBU() { return this.#SMB3_AND_SMW_AND_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3}, {@link SMW} & {@link SM3DW} */
    public static get SMB3_AND_SMW_AND_SM3DW() { return this.#SMB3_AND_SMW_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMB3}, {@link NSMBU} & {@link SM3DW} */
    public static get SMB3_AND_NSMBU_AND_SM3DW() { return this.#SMB3_AND_NSMBU_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles with only {@link SMW}, {@link NSMBU} & {@link SM3DW} */
    public static get SMW_AND_NSMBU_AND_SM3DW() { return this.#SMW_AND_NSMBU_AND_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }

    /** A {@link CollectionHolder} representing the game styles excluding {@link SMB} */
    public static get NOT_SMB() { return this.#NOT_SMB ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles excluding {@link SMB3} */
    public static get NOT_SMB3() { return this.#NOT_SMB3 ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles excluding {@link SMW} */
    public static get NOT_SMW() { return this.#NOT_SMW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles excluding {@link NSMBU} */
    public static get NOT_NSMBU() { return this.#NOT_NSMBU ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,],) }
    /** A {@link CollectionHolder} representing the game styles excluding {@link SM3DW} */
    public static get NOT_SM3DW() { return this.#NOT_SM3DW ??= new LazyGenericCollectionHolder(() => [GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3, GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,],) }

    /**
     * A {@link CollectionHolder} representing every game style
     * ({@link SMB}, {@link SMB3}, {@link SMW}, {@link NSMBU} & {@link SM3DW})
     */
    private static get ALL_GAME_STYLES() { return this.#ALL_GAME_STYLES ??= new LazyGenericCollectionHolder(() => GameStyles.CompanionEnum.get.values,) }

    //endregion -------------------- Singular possibility --------------------
    //region -------------------- Group possibility --------------------

    /** Every single (1x) {@link GameStyles} fields in the {@link GameStyles} possibilities */
    public static get EVERY_SINGLE_GAME_STYLE() { return this.#EVERY_SINGLE_GAME_STYLE ??= new ArrayAsCollection([this.SMB_ONLY, this.SMB3_ONLY, this.SMW_ONLY, this.NSMBU_ONLY, this.SM3DW_ONLY,],) }

    /** Every double (2x) {@link GameStyles} fields in the {@link GameStyles} possibilities */
    public static get EVERY_DOUBLE_GAME_STYLE() { return this.#EVERY_DOUBLE_GAME_STYLE ??= new ArrayAsCollection([
        this.SMB_AND_SMB3, this.SMB_AND_SMW, this.SMB_AND_NSMBU, this.SMB_AND_SM3DW,
        this.SMB3_AND_SMW, this.SMB3_AND_NSMBU, this.SMB3_AND_SM3DW,
        this.SMW_AND_NSMBU, this.SMW_AND_SM3DW,
        this.NSMBU_AND_SM3DW,
    ],) }

    /** Every triple (3x) {@link GameStyles} fields in the {@link GameStyles} possibilities */
    public static get EVERY_TRIPLE_GAME_STYLE() { return this.#EVERY_TRIPLE_GAME_STYLE ??= new ArrayAsCollection([
        this.SMB_AND_SMB3_AND_SMW, this.SMB_AND_SMB3_AND_NSMBU, this.SMB_AND_SMB3_AND_SM3DW,
        this.SMB_AND_SMW_AND_NSMBU, this.SMB_AND_SMW_AND_SM3DW,
        this.SMB_AND_NSMBU_AND_SM3DW,

        this.SMB3_AND_SMW_AND_NSMBU, this.SMB3_AND_SMW_AND_SM3DW,
        this.SMB3_AND_NSMBU_AND_SM3DW,

        this.SMW_AND_NSMBU_AND_SM3DW,
    ],) }

    /** Every quadruple (4x) {@link GameStyles} fields in the {@link GameStyles} possibilities */
    public static get EVERY_QUADRUPLE_GAME_STYLE() { return this.#EVERY_QUADRUPLE_GAME_STYLE ??= new ArrayAsCollection([this.NOT_SM3DW, this.NOT_NSMBU, this.NOT_SMW, this.NOT_SMB3, this.NOT_SMB,],) }

    /** Every {@link GameStyles} fields in the {@link GameStyles} possibilities */
    public static get EVERY_GAME_STYLE() { return this.#EVERY_GAME_STYLE ??= new ArrayAsCollection([
        this.ALL_GAME_STYLES,


        this.SMB_ONLY, this.SMB3_ONLY, this.SMW_ONLY, this.NSMBU_ONLY, this.SM3DW_ONLY,


        this.SMB_AND_SMB3, this.SMB_AND_SMW, this.SMB_AND_NSMBU, this.SMB_AND_SM3DW,
        this.SMB3_AND_SMW, this.SMB3_AND_NSMBU, this.SMB3_AND_SM3DW,
        this.SMW_AND_NSMBU, this.SMW_AND_SM3DW,
        this.NSMBU_AND_SM3DW,


        this.SMB_AND_SMB3_AND_SMW, this.SMB_AND_SMB3_AND_NSMBU, this.SMB_AND_SMB3_AND_SM3DW,
        this.SMB_AND_SMW_AND_NSMBU, this.SMB_AND_SMW_AND_SM3DW,
        this.SMB_AND_NSMBU_AND_SM3DW,

        this.SMB3_AND_SMW_AND_NSMBU, this.SMB3_AND_SMW_AND_SM3DW,
        this.SMB3_AND_NSMBU_AND_SM3DW,

        this.SMW_AND_NSMBU_AND_SM3DW,


        this.NOT_SM3DW, this.NOT_NSMBU, this.NOT_SMW, this.NOT_SMB3, this.NOT_SMB,
    ],) }

    //endregion -------------------- Group possibility --------------------

    /** All the {@link GameStyles} present in {@link SMM2} */
    public static get ALL() { return this.ALL_GAME_STYLES }

    /** The {@link GameStyles} present in {@link SMM1} */
    public static get ALL_SMM1() { return this.NOT_SM3DW }

}
