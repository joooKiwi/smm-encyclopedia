import type {ClassWithNullObjectPattern, EmptyUniqueImageName} from '../../../../util/ClassWithNullObjectPattern';
import type {UniqueImage}                                      from './UniqueImage';

import {ClearConditionImageFactory} from '../clearCondition/ClearConditionImage.factory';
import {EditorImageFactory}         from '../editor/EditorImage.factory';
import {EMPTY_ARRAY}                from '../../../../util/emptyVariables';
import {WhilePlayingImageFactory}   from '../whilePlaying/WhilePlayingImage.factory';

/**
 * @singleton
 */
export class EmptyUniqueImage
    implements UniqueImage, ClassWithNullObjectPattern<EmptyUniqueImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUniqueImage;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly clearConditionImage = ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE;
    public readonly editorImage = EditorImageFactory.EMPTY_EDITOR_IMAGE;
    public readonly whilePlayingImage = WhilePlayingImageFactory.EMPTY_WHILE_PLAYING_IMAGE;

    public get() {
        return EMPTY_ARRAY;
    }

    public toString(): EmptyUniqueImageName {
        return 'Empty unique image';
    }

}
