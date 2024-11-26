import './CanBePutInALakituCloud.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutInALakituCloud({value,}: EntityOnlyProperties,) {
    if (value.reference.canBePutInALakituCloud !== true)
        return null
    return <em className="canBePutInALakituCloud-property lakitu-cloud-image-property"/>
}
