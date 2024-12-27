import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomSwimmingImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomSwimmingImage({value,}: MysteryMushroomSwimmingImageProperties,) {
    const images = value.swimmingImages
    if (images.isEmpty)
        return null

    const {englishNameInHtml,} = value
    return <div className="mysteryMushroom-image mysteryMushroom-animated-image">{images.map((it, i,) =>
        <Image key={`Swimming animation #${i + 1}`} partial-id={`${englishNameInHtml}-${i + 1}`} images={it.map(it => ({file: it,}),)}/>
    ,)}</div>
}
