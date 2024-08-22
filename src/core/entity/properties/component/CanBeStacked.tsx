import './CanBeStacked.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBeStacked({value,}: EntityOnlyProperties,) {
    if (!value.reference.canBeStacked)
        return null
    return <em className="canBeStacked-property stacked-goomba-image-property"/>
}
