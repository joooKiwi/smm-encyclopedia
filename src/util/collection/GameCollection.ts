import {GenericCollectionHolder} from '@joookiwi/collection'

import {Games} from 'core/game/Games'

export class GameCollection<const T extends Games = Games, const REFERENCE extends Iterable<T> = Iterable<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllGames?: & GameWithSMM1<T> & GameWithSMM3DS<T> & GameWithSMM2<T>
    #hasSMM1?: GameWithSMM1<T>
    #hasSMM3DS?: GameWithSMM3DS<T>
    #hasSMM1Or3DS?: & GameWithSMM1<T> & GameWithSMM3DS<T>
    #hasSMM2?: GameWithSMM2<T>

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    /**
     * The collection has every game ({@link Games.SUPER_MARIO_MAKER_1 SMM1},
     * {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} & {@link Games.SUPER_MARIO_MAKER_2 SMM2}) type in its values
     */
    public get hasAllGames(): & GameWithSMM1<T> & GameWithSMM3DS<T> & GameWithSMM2<T> {
        return this.#hasAllGames = this.hasAll(Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS, Games.SUPER_MARIO_MAKER_2,) as & GameWithSMM1<T> & GameWithSMM3DS<T> & GameWithSMM2<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_1 SMM1} type in its values */
    public get hasSMM1(): GameWithSMM1<T> {
        return this.#hasSMM1 ??= this.hasOne(Games.SUPER_MARIO_MAKER_1) as GameWithSMM1<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} type in its values */
    public get hasSMM3DS(): GameWithSMM3DS<T> {
        return this.#hasSMM3DS ??= this.hasOne(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS) as GameWithSMM3DS<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_1 SMM1} or {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} type in its values */
    public get hasSMM1Or3DS(): & GameWithSMM1<T> & GameWithSMM3DS<T> {
        return this.#hasSMM1Or3DS ??= this.hasOne(Games.SUPER_MARIO_MAKER_1, Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS,) as & GameWithSMM1<T> & GameWithSMM3DS<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_2 SMM2} type in its values */
    public get hasSMM2(): GameWithSMM2<T> {
        return this.#hasSMM2 ??= this.hasOne(Games.SUPER_MARIO_MAKER_2) as GameWithSMM2<T>
    }

    //endregion -------------------- Getter methods --------------------

}

type GameWithSMM1<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_1'] ? true : false
type GameWithSMM3DS<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_FOR_NINTENDO_3DS'] ? true : false
type GameWithSMM2<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_2'] ? true : false
