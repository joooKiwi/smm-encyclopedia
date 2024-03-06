import type {Games}           from 'core/game/Games'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface GameImageProperties
    extends ReactProperties {

    readonly reference: Games

}

/** @reactComponent */
export default function GameImage({reference,}: GameImageProperties,) {
    return <Image file={reference.imageFile} className={`game-image ${reference.englishNameInHtml}-image`}/>
}
