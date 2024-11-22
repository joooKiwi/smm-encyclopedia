import type {Nullable, NullableString} from '@joookiwi/type'

import type {GameStyles}      from 'core/gameStyle/GameStyles'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image   from 'app/tools/images/Image'
import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface GameStyleImageProperties
    extends ReactProperties {

    readonly reference: Nullable<GameStyles>

    readonly className?: NullableString

}

/** @reactComponent */
export default function GameStyleImage({reference, className,}: GameStyleImageProperties,) {
    if (reference == null)
        return null
    return <Image file={reference.imageFile} className={`gameStyle-image ${reference.englishNameInHtml}-image${className == null ? EMPTY_STRING : ` ${className}`}`}/>
}
