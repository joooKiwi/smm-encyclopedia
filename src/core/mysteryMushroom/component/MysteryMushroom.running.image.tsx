import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomRunningImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomRunningImage({value,}: MysteryMushroomRunningImageProperties,) {
    const images = value.runningImages
    if (images.isEmpty)
        return null

    const {englishNameInHtml,} = value
    return <div className="mysteryMushroom-image mysteryMushroom-animated-image">{images.map((it, i,) =>
        <Image key={`Running animation #${i + 1}`} partialId={`${englishNameInHtml}-${i + 1}`} images={it.map(it => ({file: it,}),)}/>
    ,)}</div>
}
