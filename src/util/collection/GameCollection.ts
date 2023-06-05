import type {BooleanCallback, CollectionHolder, MapCallback, MapIndexCallback, RestrainedBooleanCallback} from '@joookiwi/enumerable/dist/types'
import {AbstractCollectionHolder, GenericCollectionHolder}                                                from '@joookiwi/enumerable'

import {Games} from 'core/game/Games'

export class GameCollection<T extends Games = Games, >
    extends AbstractCollectionHolder<T> {

    public constructor(iterable: Iterable<T>,) {
        super(iterable,)
    }

    public override filter<S extends T, >(callback: RestrainedBooleanCallback<T, S>,): GameCollection<S>
    public override filter(callback: BooleanCallback<T>,): GameCollection<T>
    public override filter<S extends T, >(callback: | BooleanCallback<T> | RestrainedBooleanCallback<T, S>,) {
        return new GameCollection(this._array.filter(callback,),)
    }


    public override map<U, >(callback: MapCallback<T, U>,): CollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((value, index,) => callback(value, index,),),)
    }

    public override mapIndex<U, >(callback: MapIndexCallback<U>,): CollectionHolder<U> {
        return new GenericCollectionHolder(this._array.map((_, index,) => callback(index,),),)
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