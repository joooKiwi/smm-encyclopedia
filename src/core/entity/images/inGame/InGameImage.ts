import type {InGameImageFile} from 'core/entity/file/EntityImageFile'
import type {Image}           from 'core/entity/images/Image'
import type {GameStyles}      from 'core/gameStyle/GameStyles'

export interface InGameImage<out T extends InGameImageFile = InGameImageFile, >
    extends Image {

    readonly images: readonly T[]
    readonly imagesWithAssociation: readonly (readonly [GameStyles, T,])[]

    get(gameStyle: GameStyles,): readonly T[]

}
