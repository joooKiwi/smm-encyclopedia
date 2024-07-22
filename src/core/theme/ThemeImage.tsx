import type {Themes}          from 'core/theme/Themes'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface ThemeImageProperties
    extends ReactProperties {

    readonly reference: Themes

    readonly isSmallPath?: boolean

}

export default function ThemeImage({reference, isSmallPath = false,}: ThemeImageProperties,) {
    if (isSmallPath)
        return <Image file={reference.smallImageFile} className={`theme-image ${reference.englishNameInHtml}-image`}/>
    return <Image file={reference.largeImageFile} className={`theme-image ${reference.englishNameInHtml}-image`}/>
}
