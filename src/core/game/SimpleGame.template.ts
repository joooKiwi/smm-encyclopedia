/**
 * @template
 */
export type SimpleGameTemplate<_1 extends boolean = boolean, _3DS_OR_2 extends boolean = boolean, _2 extends boolean = never, >
    = _2 extends never
    ? SimpleGameFrom1And2Template<_1, _3DS_OR_2>
    : SimpleGameFromAllGamesTemplate<_1, _3DS_OR_2, _2>;

/**
 * A game template with only 2 arguments
 * <ol>
 *     <li>{@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}</li>
 *     <li>{@link Games.SUPER_MARIO_MAKER_2 SMM2}</li>
 * </ol>
 *
 * @template
 */
export interface SimpleGameFrom1And2Template<_1 extends boolean = boolean, _2 extends boolean = boolean, > {

    '1And3DS': _1

    2: _2

}

/**
 * A game template with every possible <i>Super Mario Maker</i> game.
 * <ol>
 *     <li>{@link Games.SUPER_MARIO_MAKER_1 SMM1}</li>
 *     <li>{@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}</li>
 *     <li>{@link Games.SUPER_MARIO_MAKER_2 SMM2}</li>
 * </ol>
 *
 * @template
 */
export interface SimpleGameFromAllGamesTemplate<_1 extends boolean = boolean, _3DS extends boolean = boolean, _2 extends boolean = boolean, > {

    1: _1

    '3DS': _3DS

    2: _2

}
