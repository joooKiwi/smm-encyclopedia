import './CanBePutOnASwingingClaw.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutOnASwingingClaw({value,}: EntityOnlyProperties,) {
    if (!value.reference.canBePutOnASwingingClaw)
        return null
    return <em className="canBePutOnASwingingClaw-property swinging-claw-image-property"/>
}
