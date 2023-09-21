import type {ClearConditionImageFile} from 'core/entity/file/EntityImageFile.clearCondition'
import type {ClearConditionImage}     from 'core/entity/images/clearCondition/ClearConditionImage'
import type {GameStyles}              from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class ClearConditionImageContainer
    implements ClearConditionImage {

    //region -------------------- Fields --------------------

    readonly #map

    //endregion -------------------- Fields --------------------

    public constructor(map: ReadonlyMap<GameStyles, readonly ClearConditionImageFile[]>,) {
        this.#map = map
    }

    public get map(): ReadonlyMap<GameStyles, readonly ClearConditionImageFile[]> {
        return this.#map
    }

    public get(gameStyle: GameStyles,): readonly ClearConditionImageFile[] {
        return this.#map.get(gameStyle) ?? EMPTY_ARRAY
    }

}
