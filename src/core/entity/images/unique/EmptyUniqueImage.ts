import type {ClassWithNullObjectPattern, EmptyUniqueImageName} from '../../../../util/ClassWithNullObjectPattern';
import type {UniqueImage}                                      from './UniqueImage';

import {ClearConditionImageFactory} from '../clearCondition/ClearConditionImage.factory';
import {EditorImageFactory}         from '../editor/EditorImage.factory';
import {EMPTY_ARRAY, EMPTY_MAP} from '../../../../util/emptyVariables';
import {InGameImageFactory}     from '../inGame/InGameImage.factory';

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
    public readonly inGameImage = InGameImageFactory.EMPTY_IN_GAME_IMAGE;
    public readonly map = EMPTY_MAP;

    public get() {
        return EMPTY_ARRAY;
    }

    public toString(): EmptyUniqueImageName {
        return 'Empty unique image';
    }

}
