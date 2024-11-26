import './CanBeThrownByALakitu.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBeThrownByALakitu({value,}: EntityOnlyProperties,) {
    if (value.reference.canBeThrownByALakitu !== true)
        return null
    return <em className="canBeThrownByALakitu-property lakitu-throwing-image-property"/>
}
