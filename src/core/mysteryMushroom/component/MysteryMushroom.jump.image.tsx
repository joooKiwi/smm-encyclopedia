import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomJumpImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomJumpImage({value,}: MysteryMushroomJumpImageProperties,) {
    const images = value.jumpImages
    if (images.isEmpty)
        return null

    const {englishNameInHtml,} = value
    if (images.getFirst().size > 1)
        return <div className="mysteryMushroom-image mysteryMushroom-animated-image">{images.map((it, i,) =>
            <Image key={`Jump animation #${i + 1}`} id={`${englishNameInHtml}-${i + 1}`} images={it.map(it => ({file: it,}),)}/>
        ,)}</div>
    return <div className="mysteryMushroom-image mysteryMushroom-standalone-image">{images.map(it => it.getFirst(),).map((it, i,) =>
        <Image key={`Jump image #${i + 1}`} file={it}/>
    ,)}</div>
}
