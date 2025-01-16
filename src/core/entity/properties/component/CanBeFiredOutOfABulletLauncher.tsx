import './CanBeFiredOutOfABulletLauncher.scss'

import type {EntityOnlyProperties} from 'core/entity/properties/EntityOnlyProperties'

/** @reactComponent */
export default function CanBeFiredOutOfABulletLauncher({value,}: EntityOnlyProperties,) {
    if (!value.reference.canBeFiredOutOfABillBlaster)
        return null
    return <em className="canBeFiredOutOfABulletLauncher-property bullet-launcher-image-property"/>
}
