import './HasAMushroomVariant.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function HasAMushroomVariant({value: entity,}: EntityOnlyProperties,) {
    const reference = entity.reference
    const value = reference.hasAMushroomVariant
    if (value !== true)
        return null

    return <i id={`${entity.englishNameInHtml}-hasAMushroom-property`} className="hasAMushroom-property mushroom-image-property"/>
}
