import './CanBeAffectedByATwister.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBeAffectedByATwister({value,}: EntityOnlyProperties,) {
    const reference = value.reference
    if (reference.canBeAffectedByATwister)
        return <em className="canBeAffectedByATwister-property twister-image-property"/>
    if (reference.canBeAffectedByATwisterWhenInAFallingState)
        return <em className="canBeAffectedByATwister-property twister-image-property"/> //TODO add differentiation when it is in a falling state
    if (reference.canBeAffectedByATwisterWhenItIsWithAParachute)
        return <em className="canBeAffectedByATwister-property twister-image-property"/> //TODO add differentiation when it is with a parachute
    return null
}
