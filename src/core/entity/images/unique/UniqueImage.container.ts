import type {EntityImageFile}     from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage} from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}         from 'core/entity/images/editor/EditorImage'
import type {InGameImage_SMM1}    from 'core/entity/images/inGame/InGameImage_SMM1'
import type {UniqueImage}         from 'core/entity/images/unique/UniqueImage'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

import {EMPTY_ARRAY} from 'util/emptyVariables'

export class UniqueImageContainer
    implements UniqueImage {

    //region -------------------- Fields --------------------

    readonly #editorImage
    readonly #clearConditionImage
    readonly #inGameImage
    readonly #map

    //endregion -------------------- Fields --------------------

    constructor(editor: EditorImage, clearCondition: ClearConditionImage, inGame: InGameImage_SMM1, map: ReadonlyMap<GameStyles, readonly EntityImageFile[]>,) {
        this.#editorImage = editor
        this.#clearConditionImage = clearCondition
        this.#inGameImage = inGame
        this.#map = map
    }

    //region -------------------- Getter methods --------------------

    public get editorImage(): EditorImage {
        return this.#editorImage
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage
    }

    public get inGameImage(): InGameImage_SMM1 {
        return this.#inGameImage
    }

    public get map(): ReadonlyMap<GameStyles, readonly EntityImageFile[]> {
        return this.#map
    }

    //endregion -------------------- Getter methods --------------------

    public get(gameStyle: GameStyles,): readonly EntityImageFile[] {
        return this.map.get(gameStyle) ?? EMPTY_ARRAY
    }
}
