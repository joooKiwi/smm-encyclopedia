import './HasAMushroomVariant.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function HasAMushroomVariant({value,}: EntityOnlyProperties,) {
    if (!value.reference.hasAMushroomVariant)
        return null

    return <em className="hasAMushroom-property mushroom-image-property"/>
}
