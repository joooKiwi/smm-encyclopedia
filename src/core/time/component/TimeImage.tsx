import type {Nullable, NullableString} from '@joookiwi/type'

import type {Times}           from 'core/time/Times'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image   from 'app/tools/images/Image'
import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface TimeImageProperties
    extends ReactProperties {

    readonly reference: Nullable<Times>

    readonly className?: NullableString

}

/** @reactComponent */
export default function TimeImage({reference, className,}: TimeImageProperties,) {
    if (reference == null)
        return null
    return <Image file={reference.imageFile} className={`time-image ${reference.englishNameInHtml}-image${className == null ? EMPTY_STRING : ` ${className}`}`}/>
}
