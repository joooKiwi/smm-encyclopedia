import type {ClearConditionImage} from '../clearCondition/ClearConditionImage';
import type {EditorImage}         from '../editor/EditorImage';
import type {GameStyles}          from '../../../gameStyle/GameStyles';
import type {InGameImage}         from '../inGame/InGameImage';
import type {UniqueImage}         from './UniqueImage';

import {EMPTY_ARRAY} from '../../../../util/emptyVariables';

export class UniqueImageContainer
    implements UniqueImage {

    //region -------------------- Fields --------------------

    readonly #editorImage;
    readonly #clearConditionImage;
    readonly #inGameImage;
    readonly #map;

    //endregion -------------------- Fields --------------------

    constructor(editor: EditorImage, clearCondition: ClearConditionImage, inGame: InGameImage, map: ReadonlyMap<GameStyles, readonly string[]>,) {
        this.#editorImage = editor;
        this.#clearConditionImage = clearCondition;
        this.#inGameImage = inGame;
        this.#map = map;
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

    public get map(): ReadonlyMap<GameStyles, readonly string[]> {
        return this.#map;
    }

    //endregion -------------------- Getter methods --------------------

    public get(gameStyle: GameStyles,): readonly string[] {
        return this.map.get(gameStyle) ?? EMPTY_ARRAY;
    }
}
