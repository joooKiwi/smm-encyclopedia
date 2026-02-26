import './CanBePutOnATrack.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutOnATrack({value,}: EntityOnlyProperties,) {
    if (value.reference.canBePutOnATrack !== true)
        return null
    return <em className="canBePutOnATrack-property track-image-property"/>
}
