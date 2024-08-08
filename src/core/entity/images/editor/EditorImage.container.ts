import type {EditorImageFile} from 'core/entity/file/EntityImageFile'
import type {EditorImage}     from 'core/entity/images/editor/EditorImage'
import type {GameStyles}       from 'core/gameStyle/GameStyles'
import type {Themes}           from 'core/theme/Themes'
import type {Times}            from 'core/time/Times'
import {EMPTY_ARRAY}           from 'util/emptyVariables'

export class EditorImageContainer<const out T extends EditorImageFile, >
    implements EditorImage<T> {

    //region -------------------- Fields --------------------

    #images?: readonly T[]
    readonly #imagesWithAssociation

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(images: readonly (readonly [Times, GameStyles, Themes, T,])[],) {
        this.#imagesWithAssociation = images
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get images(): readonly T[] {
        return this.#images ??= this.imagesWithAssociation.map(it => it[3],)
    }

    public get imagesWithAssociation(): readonly (readonly [Times, GameStyles, Themes, T,])[] {
        return this.#imagesWithAssociation
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): readonly T[] {
        if (gameStyle == null && theme == null && time == null)
            return EMPTY_ARRAY

        const images = this.imagesWithAssociation
        const size = images.length

        const imagesFound: T[] = []
        let index = -1
        while (++index < size) {
            const value = images[index]

            if (gameStyle != null) {
                if (theme != null) {
                    if (time != null) {
                        if (value[0] === time && value[1] === gameStyle && value[2] === theme)
                            imagesFound.push(value[3],)
                        continue
                    }
                    if (value[1] === gameStyle && value[2] === theme)
                        imagesFound.push(value[3],)
                    continue
                }
                if (value[1] === gameStyle)
                    imagesFound.push(value[3],)
                continue
            }

            if (theme != null) {
                if (time != null) {
                    if (value[0] === time && value[2] === theme)
                        imagesFound.push(value[3],)
                    continue
                }
                if (value[2] === theme)
                    imagesFound.push(value[3],)
                continue
            }

            if (time == null)
                continue
            if (value[0] === time)
                imagesFound.push(value[3],)
        }

        return imagesFound.reverse()
    }

    public getFromGameStyle(gameStyle: Nullable<GameStyles>,): readonly T[] {
        if (gameStyle == null)
            return EMPTY_ARRAY

        const images = this.imagesWithAssociation
        const size = images.length
        const imagesFound: T[] = []
        let index = -1
        while (++index < size)
            if (images[index][1] === gameStyle)
                imagesFound.push(images[index][3],)
        return imagesFound
    }

    public getFromTheme(theme: Nullable<Themes>,): readonly T[] {
        if (theme == null)
            return EMPTY_ARRAY

        const images = this.imagesWithAssociation
        const size = images.length
        const imagesFound: T[] = []
        let index = -1
        while (++index < size)
            if (images[index][2] === theme)
                imagesFound.push(images[index][3],)
        return imagesFound
    }

    public getFromTime(time: Nullable<Times>,): readonly T[] {
        if (time == null)
            return EMPTY_ARRAY

        const images = this.imagesWithAssociation
        const size = images.length
        const imagesFound: T[] = []
        let index = -1
        while (++index < size)
            if (images[index][0] === time)
                imagesFound.push(images[index][3],)
        return imagesFound
    }

    //endregion -------------------- Methods --------------------

}
