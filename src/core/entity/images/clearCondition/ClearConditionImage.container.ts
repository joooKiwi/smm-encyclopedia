import type {GameStyles} from '../../../gameStyle/GameStyles';

import {ClearConditionImage} from './ClearConditionImage';

export class ClearConditionImageContainer
    implements ClearConditionImage {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_ARRAY = [];

    readonly #map;

    //endregion -------------------- Attributes --------------------

    public constructor(map: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#map = map;
    }

    public get(gameStyle: GameStyles,): readonly string[] {
        return this.#map.get(gameStyle) ?? ClearConditionImageContainer.#EMPTY_ARRAY;
    }
}
