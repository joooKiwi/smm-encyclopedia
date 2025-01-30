import type {CollectionHolder} from '@joookiwi/collection'

import type {InGameImageFile}     from 'core/entity/file/EntityImageFile'
import type {InGameImage_Regular} from 'core/entity/images/inGame/InGameImage_Regular'

import {GameStyles} from 'core/gameStyle/GameStyles'

export class InGameImage_RegularContainer<const T extends InGameImageFile, >
    implements InGameImage_Regular<T> {

    #images?: CollectionHolder<T>
    #smbImages?: CollectionHolder<T>
    #smb3Images?: CollectionHolder<T>
    #smwImages?: CollectionHolder<T>
    #nsmbuImages?: CollectionHolder<T>
    #sm3dwImages?: CollectionHolder<T>
    readonly #imagesWithAssociation

    public constructor(images: CollectionHolder<readonly [GameStyles, T,]>,) {
        this.#imagesWithAssociation = images
    }

    public get images(): CollectionHolder<T> {
        return this.#images ??= this.imagesWithAssociation.map(it => it[1],)
    }

    public get imagesWithAssociation(): CollectionHolder<readonly [GameStyles, T,]> {
        return this.#imagesWithAssociation
    }


    public get(gameStyle: GameStyles,): CollectionHolder<T> {
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

    protected _get(gameStyle: GameStyles,): CollectionHolder<T> {
        return this.imagesWithAssociation.filter(it => it[0] === gameStyle,).map(it => it[1],)
    }

    public getSmb(): CollectionHolder<T> { return this.#smbImages ??= this._get(GameStyles.SMB,) }
    public getSmb3(): CollectionHolder<T> { return this.#smb3Images ??= this._get(GameStyles.SMB3,) }
    public getSmw(): CollectionHolder<T> { return this.#smwImages ??= this._get(GameStyles.SMW,) }
    public getNsmbu(): CollectionHolder<T> { return this.#nsmbuImages ??= this._get(GameStyles.NSMBU,) }
    public getSm3dw(): CollectionHolder<T> { return this.#sm3dwImages ??= this._get(GameStyles.SM3DW,) }

}
