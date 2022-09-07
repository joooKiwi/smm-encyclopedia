import type {HTMLDivProperties} from '../../../../util/react/html/HTMLDivProperties';
import type {ImageProperties}   from './ImageProperties';
import type {ReactProperties}   from '../../../../util/react/ReactProperties';

export interface AnimatedImagesProperties
    extends ReactProperties, Omit<HTMLDivProperties, 'key' | 'id'> {

    partialId: string

    /**
     * Multiple images
     *
     * @note, the length of the array is required to have more than 2 items.
     */
    images: readonly ImageProperties[]

    displayAnimations?: boolean

    displayEveryImages?: boolean

}
