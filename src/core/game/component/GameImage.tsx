import type {Nullable, NullableString} from '@joookiwi/type'

import type {Games}           from 'core/game/Games'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image   from 'app/tools/images/Image'
import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface GameImageProperties
    extends ReactProperties {

    readonly reference: Nullable<Games>

    readonly className?: NullableString

}

/** @reactComponent */
export default function GameImage({reference, className,}: GameImageProperties,) {
    if (reference == null)
        return null
    return <Image file={reference.imageFile} className={`game-image ${reference.englishNameInHtml}-image${className == null ? EMPTY_STRING : ` ${className}`}`}/>
}
