import type {ClearConditionImage} from '../clearCondition/ClearConditionImage';
import type {EditorImage}         from '../editor/EditorImage';
import type {GameStyles}          from '../../../gameStyle/GameStyles';
import type {Image}               from '../Image';
import type {WhilePlayingImage}   from '../whilePlaying/WhilePlayingImage';

export interface UniqueImage
    extends Image {

    get editorImage(): EditorImage

    get clearConditionImage(): ClearConditionImage

    get whilePlayingImage(): WhilePlayingImage


    get(gameStyle: GameStyles,): readonly string[]

}
