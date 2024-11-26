import './CanSpawnOutOfAPipe.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanSpawnOutOfAPipe({value,}: EntityOnlyProperties,) {
    if (!value.reference.canSpawnOutOfAPipe)
        return null
    return <em className="canSpawnOutOfAPipe-property pipe-image-property"/>
}
