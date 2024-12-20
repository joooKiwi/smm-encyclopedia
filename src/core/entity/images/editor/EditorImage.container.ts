import type {CollectionHolder}                                                  from '@joookiwi/collection'
import type {Array, MutableArray, Nullable}                                     from '@joookiwi/type'
import {filterByArray, forEachByArray, GenericCollectionHolder, isEmptyByArray} from '@joookiwi/collection'

import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {EditorImage}     from 'core/entity/images/editor/EditorImage'
import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {Themes}          from 'core/theme/Themes'
import type {Times}           from 'core/time/Times'

import {Empty} from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EditorImageContainer<const out T extends EditorImageFile, >
    implements EditorImage<T> {

    //region -------------------- Fields --------------------

    #images?: Array<T>
    readonly #imagesWithAssociation

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: Array<readonly [Times, GameStyles, Themes, T,]>,) {
        this.#imagesWithAssociation = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): Array<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[3],)
    }

    public get imagesWithAssociation(): Array<readonly [Times, GameStyles, Themes, T,]> {
        return this.#imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): CollectionHolder<T> {
        if (gameStyle == null && theme == null && time == null)
            return EMPTY_COLLECTION_HOLDER

        const images = this.imagesWithAssociation
        if (isEmptyByArray(images,))
            return EMPTY_COLLECTION_HOLDER

        const imagesFound: MutableArray<T> = []
        forEachByArray(images, value => {
            if (gameStyle != null) {
                if (theme != null) {
                    if (time != null) {
                        if (value[0] === time && value[1] === gameStyle && value[2] === theme)
                            imagesFound.push(value[3],)
                        return
                    }
                    if (value[1] === gameStyle && value[2] === theme)
                        imagesFound.push(value[3],)
                    return
                }
                if (value[1] === gameStyle)
                    imagesFound.push(value[3],)
                return
            }

            if (theme != null) {
                if (time != null) {
                    if (value[0] === time && value[2] === theme)
                        imagesFound.push(value[3],)
                    return
                }
                if (value[2] === theme)
                    imagesFound.push(value[3],)
                return
            }

            if (time == null)
                return
            if (value[0] === time)
                imagesFound.push(value[3],)
        },)
        return new GenericCollectionHolder(imagesFound,)
    }

    public getFromGameStyle(gameStyle: Nullable<GameStyles>,): CollectionHolder<T> {
        if (gameStyle == null)
            return EMPTY_COLLECTION_HOLDER
        return filterByArray(this.imagesWithAssociation, it => it[1] === gameStyle,).map(it => it[3],)
    }

    public getFromTheme(theme: Nullable<Themes>,): CollectionHolder<T> {
        if (theme == null)
            return EMPTY_COLLECTION_HOLDER
        return filterByArray(this.imagesWithAssociation, it => it[2] === theme,).map(it => it[3],)
    }

    public getFromTime(time: Nullable<Times>,): CollectionHolder<T> {
        if (time == null)
            return EMPTY_COLLECTION_HOLDER
        return filterByArray(this.imagesWithAssociation, it => it[0] === time,).map(it => it[3],)
    }

    //endregion -------------------- Methods --------------------

}
