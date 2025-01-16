import './CanBePutInABlock.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutInABlock({value,}: EntityOnlyProperties,) {
    if (!value.reference.canComeOutOfABlock)
        return null
    return <em className="canComeOutOfABlock-property question-block-image-property"/>
}
