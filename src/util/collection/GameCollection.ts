import {GenericCollectionHolder} from '@joookiwi/collection'

import {Games} from 'core/game/Games'

export class GameCollection<const T extends Games = Games, const REFERENCE extends Iterable<T> = Iterable<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGames?: boolean
    #hasSMM1?: boolean
    #hasSMM3DS?: boolean
    #hasSMM1Or3DS?: boolean
    #hasSMM2?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has every game ({@link Games.SUPER_MARIO_MAKER_1 SMM1},
     * {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} & {@link Games.SUPER_MARIO_MAKER_2 SMM2}) type in its values
     */
    public get hasAllGames(): boolean {
        return this.#hasAllGames = this.hasAll(Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,)
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_1 SMM1} type in its values */
    public get hasSMM1(): boolean {
        return this.#hasSMM1 ??= this.hasOne(Games.SUPER_MARIO_MAKER_1)
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} type in its values */
    public get hasSMM3DS(): boolean {
        return this.#hasSMM3DS ??= this.hasOne(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS)
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_1 SMM1} or {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} type in its values */
    public get hasSMM1Or3DS(): boolean {
        return this.#hasSMM1Or3DS ??= this.hasOne(Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,)
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_2 SMM2} type in its values */
    public get hasSMM2(): boolean {
        return this.#hasSMM2 ??= this.hasOne(Games.SUPER_MARIO_MAKER_2)
    }

    //endregion -------------------- Getter methods --------------------

}
