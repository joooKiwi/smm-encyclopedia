import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomWalkImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomWalkImage({value,}: MysteryMushroomWalkImageProperties,) {
    const images = value.walkImages
    if (images.isEmpty)
        return null

    const {englishNameInHtml,} = value
    return <div className="mysteryMushroom-image mysteryMushroom-animated-image">{images.map((it, i,) =>
        <Image key={`Walk animation #${i + 1}`} id={`${englishNameInHtml}-${i + 1}`} images={it.map(it => ({file: it,}),)}/>
    ,)}</div>
}
