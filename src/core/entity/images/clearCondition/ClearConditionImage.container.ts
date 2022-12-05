import type {GameStyles} from 'core/gameStyle/GameStyles'

import {ClearConditionImage} from 'core/entity/images/clearCondition/ClearConditionImage'

export class ClearConditionImageContainer
    implements ClearConditionImage {

    //region -------------------- Fields --------------------

    static readonly #EMPTY_ARRAY = []

    readonly #map

    //endregion -------------------- Fields --------------------

    public constructor(map: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#map = map
    }

    public get(gameStyle: GameStyles,): readonly string[] {
        return this.#map.get(gameStyle) ?? ClearConditionImageContainer.#EMPTY_ARRAY
    }
}
