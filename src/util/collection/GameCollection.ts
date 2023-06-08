import type {CollectionHolder}                             from '@joookiwi/enumerable/dist/types'
import {AbstractCollectionHolder, GenericCollectionHolder} from '@joookiwi/enumerable'

import {Games} from 'core/game/Games'

export class GameCollection<const T extends Games = Games, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }


    override _new<const U,>(iterable: Iterable<U>,): CollectionHolder<U> {
        return new GenericCollectionHolder(iterable,)
    }

    public get hasAllGames(): & GameWithSMM1<T> & GameWithSMM3DS<T> & GameWithSMM2<T> {
        return this.hasSMM1 && this.hasSMM3DS && this.hasSMM2
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_1 SMM1} type in its values */
    public get hasSMM1(): GameWithSMM1<T> {
        return this.hasOne(Games.SUPER_MARIO_MAKER_1) as GameWithSMM1<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} type in its values */
    public get hasSMM3DS(): GameWithSMM3DS<T> {
        return this.hasOne(Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS) as GameWithSMM3DS<T>
    }

    /** The collection has the {@link Games.SUPER_MARIO_MAKER_2 SMM2} type in its values */
    public get hasSMM2(): GameWithSMM2<T> {
        return this.hasOne(Games.SUPER_MARIO_MAKER_2) as GameWithSMM2<T>
    }

}

type GameWithSMM1<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_1'] ? true : false
type GameWithSMM3DS<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_FOR_NINTENDO_3DS'] ? true : false
type GameWithSMM2<T extends Games, > = T extends typeof Games['SUPER_MARIO_MAKER_2'] ? true : false
