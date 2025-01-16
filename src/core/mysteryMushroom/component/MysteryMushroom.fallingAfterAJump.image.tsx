import './MysteryMushroom.image.scss'

import type {MysteryMushrooms} from 'core/mysteryMushroom/MysteryMushrooms'
import type {ReactProperties}  from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MysteryMushroomFallingAfterAJumpImageProperties
    extends ReactProperties {

    readonly value: MysteryMushrooms

}

/** @reactComponent */
export default function MysteryMushroomFallingAfterAJumpImage({value,}: MysteryMushroomFallingAfterAJumpImageProperties,) {
    const images = value.fallingAfterAJumpImage
    if (images.isEmpty)
        return null

    return <div className="mysteryMushroom-image mysteryMushroom-standalone-image">{images.map((it, i,) =>
        <Image key={`Falling after a jump image #${i + 1}`} file={it}/>
    ,)}</div>
}
