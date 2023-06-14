import type {UniqueImage}                                      from 'core/entity/images/unique/UniqueImage'
import type {ClassWithNullObjectPattern, EmptyUniqueImageName} from 'util/ClassWithNullObjectPattern'
import type {EmptyArray}                                       from 'util/types/variables'

import {ClearConditionImageFactory} from 'core/entity/images/clearCondition/ClearConditionImage.factory'
import {EditorImageFactory}         from 'core/entity/images/editor/EditorImage.factory'
import {InGameImageFactory}         from 'core/entity/images/inGame/InGameImage.factory'
import {EMPTY_ARRAY, EMPTY_MAP}     from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyUniqueImage
    implements UniqueImage, ClassWithNullObjectPattern<EmptyUniqueImageName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyUniqueImage

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    public readonly clearConditionImage = ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE
    public readonly editorImage = EditorImageFactory.EMPTY_EDITOR_IMAGE
    public readonly inGameImage = InGameImageFactory.EMPTY_IN_GAME_IMAGE
    public readonly map = EMPTY_MAP

    public get(): EmptyArray {
        return EMPTY_ARRAY
    }

    public toString(): EmptyUniqueImageName {
        return 'Empty unique image'
    }

}
