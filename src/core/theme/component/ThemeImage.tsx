import type {Nullable, NullableString} from '@joookiwi/type'

import type {Themes}          from 'core/theme/Themes'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image   from 'app/tools/images/Image'
import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface ThemeImageProperties
    extends ReactProperties {

    readonly reference: Nullable<Themes>

    readonly isSmallPath?: boolean

    readonly className?: NullableString

}

export default function ThemeImage({reference, isSmallPath = false, className,}: ThemeImageProperties,) {
    if (reference == null)
        return null
    if (isSmallPath)
        return <Image file={reference.smallImageFile} className={`theme-image ${reference.englishNameInHtml}-image${className == null ? EMPTY_STRING : ` ${className}`}`}/>
    return <Image file={reference.largeImageFile} className={`theme-image ${reference.englishNameInHtml}-image${className == null ? EMPTY_STRING : ` ${className}`}`}/>
}
