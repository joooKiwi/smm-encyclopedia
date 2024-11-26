import type {Themes}          from 'core/theme/Themes'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface EndlessMarioImageProperties
    extends ReactProperties {

    readonly reference: Themes

}

/** @reactComponent */
export default function EndlessMarioImage({reference,}: EndlessMarioImageProperties,) {
    return <Image file={reference.endlessMarioImageFile} className="endlessMario-image"/>
}
