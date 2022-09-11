import type {ClearConditionImage} from '../clearCondition/ClearConditionImage';
import type {EditorImage}         from '../editor/EditorImage';
import type {GameStyles}          from '../../../gameStyle/GameStyles';
import type {InGameImage}         from '../inGame/InGameImage';
import type {UniqueImage}         from './UniqueImage';

import {ClearConditionImageFactory} from '../clearCondition/ClearConditionImage.factory';
import {EditorImageFactory}         from '../editor/EditorImage.factory';
import {InGameImageFactory}         from '../inGame/InGameImage.factory';

export abstract class AbstractUniqueImage
    implements UniqueImage {

    //region -------------------- Fields --------------------

    readonly #editorImage;
    readonly #clearConditionImage;
    readonly #inGameImage;

    //endregion -------------------- Fields --------------------

    protected constructor(editor: | EditorImage | null, clearCondition: | ClearConditionImage | null, inGame: | InGameImage | null,) {
        this.#editorImage = editor ?? EditorImageFactory.EMPTY_EDITOR_IMAGE;
        this.#clearConditionImage = clearCondition ?? ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE;
        this.#inGameImage = inGame ?? InGameImageFactory.EMPTY_IN_GAME_IMAGE;
    }

    //region -------------------- Getter methods --------------------

    public get editorImage(): EditorImage {
        return this.#editorImage;
    }

    public get clearConditionImage(): ClearConditionImage {
        return this.#clearConditionImage;
    }

    public get inGameImage(): InGameImage {
        return this.#inGameImage;
    }

    //endregion -------------------- Getter methods --------------------

    public abstract get(gameStyle: GameStyles,): readonly string[];

}
