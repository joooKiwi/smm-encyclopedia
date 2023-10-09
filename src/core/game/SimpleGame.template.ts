/**
 * A game template with only 2 arguments
 * <ol>
 *     <li>{@link Games.SUPER_MARIO_MAKER_1 SMM1} & {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}</li>
 *     <li>{@link Games.SUPER_MARIO_MAKER_2 SMM2}</li>
 * </ol>
 *
 * @template
 */
export interface SimpleGameFrom1And2Template<SMM1AND3DS, SMM2, > {

    '1And3DS': SMM1AND3DS

    2: SMM2

}
