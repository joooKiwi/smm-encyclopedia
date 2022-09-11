import type {ClearConditionImage} from '../clearCondition/ClearConditionImage';
import type {EditorImage}         from '../editor/EditorImage';
import type {GameStyles}          from '../../../gameStyle/GameStyles';
import type {UniqueImage}         from './UniqueImage';
import type {WhilePlayingImage}   from '../whilePlaying/WhilePlayingImage';

import {ClearConditionImageFactory} from '../clearCondition/ClearConditionImage.factory';
import {EditorImageFactory}         from '../editor/EditorImage.factory';
import {WhilePlayingImageFactory}   from '../whilePlaying/WhilePlayingImage.factory';

export abstract class AbstractUniqueImage
    implements UniqueImage {

    //region -------------------- Fields --------------------

    readonly #editorImage;
    readonly #clearConditionImage;
    readonly #inGameImage;

    //endregion -------------------- Fields --------------------

    protected constructor(editor: | EditorImage | null, clearCondition: | ClearConditionImage | null, whilePlaying: | WhilePlayingImage | null,) {
        this.#editorImage = editor ?? EditorImageFactory.EMPTY_EDITOR_IMAGE;
        this.#clearConditionImage = clearCondition ?? ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE;
        this.#inGameImage = whilePlaying ?? WhilePlayingImageFactory.EMPTY_WHILE_PLAYING_IMAGE;
    }

    //region -------------------- Getter methods --------------------

    public get editorImage(): EditorImage {
        return this.#editorImage;
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage;
    }

    public get whilePlayingImage(): WhilePlayingImage {
        return this.#inGameImage;
    }

    //endregion -------------------- Getter methods --------------------

    public abstract get(gameStyle: GameStyles,): readonly string[];

}
