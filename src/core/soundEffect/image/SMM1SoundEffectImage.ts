import type {SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'

import {AbstractSoundEffectImage} from 'core/soundEffect/image/AbstractSoundEffectImage'

export class SMM1SoundEffectImage
    extends AbstractSoundEffectImage {

    public constructor(image: SoundEffectImageNumber_SMM1,)
    public constructor(image1: SoundEffectImageNumber_SMM1, image2: SoundEffectImageNumber_SMM1,)
    public constructor(image1: SoundEffectImageNumber_SMM1, image2?: SoundEffectImageNumber_SMM1,) {
        super(image2 == null ? image1 : [image1, image2,], null,)
    }

}
