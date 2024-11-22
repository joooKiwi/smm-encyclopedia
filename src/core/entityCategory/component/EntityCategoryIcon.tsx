import './EntityCategoryIcon.scss'

import type {ReactProperties}  from 'util/react/ReactProperties'
import type {EntityCategories} from 'core/entityCategory/EntityCategories'

import Image                   from 'app/tools/images/Image'
import {Nullable}              from '@joookiwi/type'

interface EntityCategoryIconProperties
    extends ReactProperties {

    readonly reference: Nullable<EntityCategories>

    readonly asWhiteImage?: boolean

}

/** @reactComponent */
export default function EntityCategoryIcon({reference, asWhiteImage = false,}: EntityCategoryIconProperties,) {
    if (reference == null)
        return null
    if (asWhiteImage)
        return <Image file={reference.imageFile} className={`entityCategory-icon white-entityCategory-icon entityCategory-icon-${reference.englishNameInHtml}`}/>
    return <Image file={reference.imageFile} className={`entityCategory-icon colored-entityCategory-icon entityCategory-icon-${reference.englishNameInHtml}`}/>
}
