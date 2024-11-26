import './CanBePutInAClownCar.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBePutInAClownCar({value,}: EntityOnlyProperties,) {
    if (!value.reference.canBePutInAClownCar)
        return null
    return <em className="canBePutInAClownCar-property clown-car-image-property"/>
}
