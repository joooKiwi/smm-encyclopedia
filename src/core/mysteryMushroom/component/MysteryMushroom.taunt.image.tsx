import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomTauntImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomTauntImage({value,}: MysteryMushroomTauntImageProperties,) {
    const images = value.tauntImage
    if (images.isEmpty)
        return null

    return <div className="mysteryMushroom-image mysteryMushroom-standalone-image">{images.map((it, i,) =>
        <Image key={`Taunt image #${i + 1}`} file={it}/>
    ,)}</div>
}
