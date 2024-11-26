import './CanBePutInATree.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutInATree({value,}: EntityOnlyProperties,) {
    if (!value.reference.canBePutInATree)
        return null
    return <em className="canBePutInATree-property tree-image-property"/>
}
