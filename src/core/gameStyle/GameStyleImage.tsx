import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {ReactProperties} from 'util/react/ReactProperties'
import Image                  from 'app/tools/images/Image'

interface GameStyleImageProperties
extends ReactProperties{

    readonly reference: GameStyles

}

/** @reactComponent */
export default function GameStyleImage({reference,}: GameStyleImageProperties,) {
    return <Image file={reference.imageFile} className={`gameStyle-image ${reference.englishNameInHtml}-image`}/>
}
