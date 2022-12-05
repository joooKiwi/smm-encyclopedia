import type {SoundEffectImageName_SMM2} from 'core/soundEffect/SoundEffects.types'

import {AbstractSoundEffectImage} from 'core/soundEffect/image/AbstractSoundEffectImage'

export class SMM2SoundEffectImage
    extends AbstractSoundEffectImage {

    public constructor(image: SoundEffectImageName_SMM2,) {
        super(null, image,)
    }

}
