import type {MiiCostumes}     from 'core/miiCostume/MiiCostumes'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MiiCostumeImageProperties
    extends ReactProperties {

    readonly reference: MiiCostumes

}

/** @reactComponent */
export default function MiiCostumeImage({reference,}: MiiCostumeImageProperties,) {
    return <Image file={reference.imageFile} className="miiCostume-image"/>
}
