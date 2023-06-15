import type {EntityImageFile}     from 'core/entity/file/EntityImageFile'
import type {Image}               from 'core/entity/images/Image'
import type {ClearConditionImage} from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}         from 'core/entity/images/editor/EditorImage'
import type {InGameImage}         from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}          from 'core/gameStyle/GameStyles'

export interface UniqueImage
    extends Image {

    get editorImage(): EditorImage

    get clearConditionImage(): ClearConditionImage

    get inGameImage(): InGameImage

    get map(): ReadonlyMap<GameStyles, readonly EntityImageFile[]>


    get(gameStyle: GameStyles,): readonly EntityImageFile[]

}
