import type {SoundEffects}         from 'core/soundEffect/SoundEffects'
import type {SoundEffectImageFile} from 'core/soundEffect/file/SoundEffectImageFile'
import type {ReactProperties}      from 'util/react/ReactProperties'

import Image from 'app/tools/images/Image'

interface SoundEffectImageProperties
    extends ReactProperties {

    readonly reference: SoundEffects

    /** The file associated or {@link SoundEffects.SMM2ImageFile} by default */
    readonly file?: SoundEffectImageFile

}

export default function SoundEffectImage({reference, file,}: SoundEffectImageProperties,) {
    return <Image file={file ?? reference.SMM2ImageFile} className={`soundEffect-image ${reference.englishNameInHtml}-image`}/>
}
