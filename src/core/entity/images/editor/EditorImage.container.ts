import {CollectionHolder}            from '@joookiwi/collection'
import type {MutableArray, Nullable} from '@joookiwi/type'

import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {EditorImage}     from 'core/entity/images/editor/EditorImage'
import type {Themes}          from 'core/theme/Themes'
import type {Times}           from 'core/time/Times'

import {GameStyles}        from 'core/gameStyle/GameStyles'
import {Empty}             from 'util/emptyVariables'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

export class EditorImageContainer<const T extends EditorImageFile, >
    implements EditorImage<T> {

    //region -------------------- Fields --------------------

    #images?: CollectionHolder<T>
    #smbImages?: CollectionHolder<T>
    #smb3Images?: CollectionHolder<T>
    #smwImages?: CollectionHolder<T>
    #nsmbuImages?: CollectionHolder<T>
    #sm3dwImages?: CollectionHolder<T>
    readonly #imagesWithAssociation

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: CollectionHolder<readonly [Times, GameStyles, Themes, T,]>,) {
        this.#imagesWithAssociation = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): CollectionHolder<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[3],)
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [Times, GameStyles, Themes, T,]> {
        return this.#imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): CollectionHolder<T> {
        if (theme == null && time == null)
            if (gameStyle == null)
                return EMPTY_COLLECTION_HOLDER
            else
                return this.getFromGameStyle(gameStyle,)

        const images = this.imagesWithAssociation
        if (images.isEmpty)
            return EMPTY_COLLECTION_HOLDER

        const imagesFound: MutableArray<T> = []
        images.forEach(value => {
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
        return new ArrayAsCollection(imagesFound,)
    }

    public getFromGameStyle(gameStyle: Nullable<GameStyles>,): CollectionHolder<T> {
        if (gameStyle == null)
            return EMPTY_COLLECTION_HOLDER
        if (gameStyle === GameStyles.SMB)
            return this.getSmb()
        if (gameStyle === GameStyles.SMB3)
            return this.getSmb3()
        if (gameStyle === GameStyles.SMW)
            return this.getSmw()
        if (gameStyle === GameStyles.NSMBU)
            return this.getNsmbu()
        return this.getSm3dw()
    }

    protected _getFromGameStyle(gameStyle: GameStyles,): CollectionHolder<T> {
        return this.imagesWithAssociation.filter(it => it[1] === gameStyle,).map(it => it[3],)
    }

    public getFromTheme(theme: Nullable<Themes>,): CollectionHolder<T> {
        if (theme == null)
            return EMPTY_COLLECTION_HOLDER
        return this.imagesWithAssociation.filter(it => it[2] === theme,).map(it => it[3],)
    }

    public getFromTime(time: Nullable<Times>,): CollectionHolder<T> {
        if (time == null)
            return EMPTY_COLLECTION_HOLDER
        return this.imagesWithAssociation.filter(it => it[0] === time,).map(it => it[3],)
    }


    public getSmb(): CollectionHolder<T> { return this.#smbImages ??= this._getFromGameStyle(GameStyles.SMB,) }
    public getSmb3(): CollectionHolder<T> { return this.#smb3Images ??= this._getFromGameStyle(GameStyles.SMB3,) }
    public getSmw(): CollectionHolder<T> { return this.#smwImages ??= this._getFromGameStyle(GameStyles.SMW,) }
    public getNsmbu(): CollectionHolder<T> { return this.#nsmbuImages ??= this._getFromGameStyle(GameStyles.NSMBU,) }
    public getSm3dw(): CollectionHolder<T> { return this.#sm3dwImages ??= this._getFromGameStyle(GameStyles.SM3DW,) }

    //endregion -------------------- Methods --------------------

}
