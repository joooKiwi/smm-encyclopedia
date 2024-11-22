import type {MiiCostumeCategories} from 'core/miiCostumeCategory/MiiCostumeCategories'
import type {ReactProperties}      from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface MiiCostumeCategoryIconProperties
    extends ReactProperties {

    readonly reference: MiiCostumeCategories

}

/** @reactComponent */
export default function MiiCostumeCategoryIcon({reference,}: MiiCostumeCategoryIconProperties,) {
    return <Image file={reference.imageFile} className="miiCostumeCategory-icon"/>
}
