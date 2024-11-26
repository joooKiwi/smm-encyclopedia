import './CanContainOrSpawnAKey.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanContainOrSpawnAKey({value,}: EntityOnlyProperties,) {
    if (!value.reference.canContainOrSpawnAKey)
        return null
    return <em className="canContainOrSpawnAKey-property key-image-property"/>
}
