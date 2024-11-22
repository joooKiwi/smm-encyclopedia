import './SoundEffectCategoryIcon.scss'

import Image                        from 'app/tools/images/Image'

import type {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'
import type {ReactProperties}       from 'util/react/ReactProperties'

interface SoundEffectCategoryIconProperties
    extends ReactProperties {

    readonly reference: SoundEffectCategories

    readonly asWhiteImage?: boolean

}

export default function SoundEffectCategoryIcon({reference,asWhiteImage = false,}: SoundEffectCategoryIconProperties,) {
    if (asWhiteImage)
        return <Image file={reference.imageFile} className={`soundEffectCategory-icon white-soundEffectCategory-icon soundEffectCategory-icon-${reference.englishNameInHtml}`}/>
    return <Image file={reference.imageFile} className={`soundEffectCategory-icon colored-soundEffectCategory-icon soundEffectCategory-icon-${reference.englishNameInHtml}`}/>
}
