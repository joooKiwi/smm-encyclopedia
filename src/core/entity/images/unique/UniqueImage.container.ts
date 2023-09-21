import type {EntityImageFile}     from 'core/entity/file/EntityImageFile'
import type {ClearConditionImage} from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}         from 'core/entity/images/editor/EditorImage'
import type {InGameImage}         from 'core/entity/images/inGame/InGameImage'
import type {UniqueImage}         from 'core/entity/images/unique/UniqueImage'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export class UniqueImageContainer<const out T extends EntityImageFile, >
    implements UniqueImage<T> {

    //region -------------------- Fields --------------------

    readonly #editorImage
    readonly #clearConditionImage
    readonly #inGameImage
    readonly #map

    //endregion -------------------- Fields --------------------

    constructor(editor: EditorImage, clearCondition: ClearConditionImage, inGame: InGameImage, map: ReadonlyMap<GameStyles, readonly EntityImageFile[]>,) {
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

    public get inGameImage(): InGameImage {
        return this.#inGameImage
    }

    public get map(): ReadonlyMap<GameStyles, readonly T[]> {
        return this.#map
    }

    //endregion -------------------- Getter methods --------------------

}
