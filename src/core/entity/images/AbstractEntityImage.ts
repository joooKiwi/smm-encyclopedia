import type {EntityImage}      from 'core/entity/images/EntityImage'
import type {EntityImageFile}  from 'core/entity/file/EntityImageFile'
import type {CollectionHolder} from '@joookiwi/collection'

import {GameStyles} from 'core/gameStyle/GameStyles'

export abstract class AbstractEntityImage<const T extends EntityImageFile, >
    implements EntityImage<T> {

    #smbImages?: CollectionHolder<T>
    #smb3Images?: CollectionHolder<T>
    #smwImages?: CollectionHolder<T>
    #nsmbuImages?: CollectionHolder<T>
    #sm3dwImages?: CollectionHolder<T>

    public abstract get images(): CollectionHolder<T>

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

    protected abstract _get(gameStyle: GameStyles,): CollectionHolder<T>

    public getSmb(): CollectionHolder<T> { return this.#smbImages ??= this._get(GameStyles.SMB,) }
    public getSmb3(): CollectionHolder<T> { return this.#smb3Images ??= this._get(GameStyles.SMB3,) }
    public getSmw(): CollectionHolder<T> { return this.#smwImages ??= this._get(GameStyles.SMW,) }
    public getNsmbu(): CollectionHolder<T> { return this.#nsmbuImages ??= this._get(GameStyles.NSMBU,) }
    public getSm3dw(): CollectionHolder<T> { return this.#sm3dwImages ??= this._get(GameStyles.SM3DW,) }

}
