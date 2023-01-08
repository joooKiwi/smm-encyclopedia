import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {EditorImageFile} from 'core/entity/file/EditorImageFile'

import {EditorImageContainer} from 'core/entity/images/editor/EditorImage.container'
import {EMPTY_MAP}            from 'util/emptyVariables'

export class PowerUpEditorImageContainer
    extends EditorImageContainer {

    public constructor(map: ReadonlyMap<GameStyles, readonly EditorImageFile[]>,) {
        super(EMPTY_MAP, map,)
    }

}
