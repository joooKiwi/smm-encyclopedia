import type {Medals}          from 'core/medal/Medals'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MedalIconProperties
    extends ReactProperties {

    readonly reference: Medals

}

/** @reactComponent */
export default function MedalIcon({reference,}: MedalIconProperties,) {
    return <Image file={reference.imageFile} className="medal-icon"/>
}
