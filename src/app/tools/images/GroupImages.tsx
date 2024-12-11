import type {CollectionHolder} from '@joookiwi/collection'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'

import Image from 'app/tools/images/Image'

interface GroupImagesProperties
    extends ReactProperties {

    readonly id: string

    readonly images: CollectionHolder<EntityImageFile>

}

/** @reactComponent */
export default function GroupImages({id, images,}: GroupImagesProperties,) {
    return <div id={id} className="group-images">
        {images.map((it, i,) => <Image key={`Image #${i + 1}`} file={it}/>)}
    </div>
}
