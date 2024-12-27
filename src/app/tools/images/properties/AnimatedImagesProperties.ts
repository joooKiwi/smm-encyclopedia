import type {CollectionHolder}             from '@joookiwi/collection'

import type {ImageFromFileProperties} from 'app/tools/images/properties/ImageFromFileProperties'
import type {ImageProperties}         from 'app/tools/images/properties/ImageProperties'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {HTMLDivProperties}       from 'util/react/html/HTMLDivProperties'

export interface AnimatedImagesProperties
    extends ReactProperties,
        HTMLDivProperties {

    readonly id: string

    /**
     * Multiple images
     *
     * @note, the length of the array is required to be between 2 & 10 items
     */
    readonly images: CollectionHolder<| ImageProperties | ImageFromFileProperties>

    readonly displayAnimations?: boolean

    readonly displayEveryImages?: boolean

}
