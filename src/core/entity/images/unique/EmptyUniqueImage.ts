import type {UniqueImage}                                      from 'core/entity/images/unique/UniqueImage'
import type {ClassWithNullObjectPattern, EmptyUniqueImageName} from 'util/ClassWithNullObjectPattern'

import {EmptyClearConditionImage} from 'core/entity/images/clearCondition/EmptyClearConditionImage'
import {EmptyEditorImage}         from 'core/entity/images/editor/EmptyEditorImage'
import {EmptyInGameImage}         from 'core/entity/images/inGame/EmptyInGameImage'
import {EMPTY_MAP}                from 'util/emptyVariables'

/** @singleton */
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

    public readonly clearConditionImage = EmptyClearConditionImage.get
    public readonly editorImage = EmptyEditorImage.get
    public readonly inGameImage = EmptyInGameImage.get
    public readonly map = EMPTY_MAP

    public toString(): EmptyUniqueImageName {
        return 'Empty unique image'
    }

}
