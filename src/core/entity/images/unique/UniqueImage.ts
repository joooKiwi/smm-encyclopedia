import type {ClearConditionImage} from '../clearCondition/ClearConditionImage'
import type {EditorImage}         from '../editor/EditorImage'
import type {GameStyles}          from '../../../gameStyle/GameStyles'
import type {Image}               from '../Image'
import type {InGameImage}         from '../inGame/InGameImage'

export interface UniqueImage
    extends Image {

    get editorImage(): EditorImage

    get clearConditionImage(): ClearConditionImage

    get inGameImage(): InGameImage

    get map(): ReadonlyMap<GameStyles, readonly string[]>


    get(gameStyle: GameStyles,): readonly string[]

}
