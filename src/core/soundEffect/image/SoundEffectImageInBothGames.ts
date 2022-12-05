import type {SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {PossibleSMM1ImagePathReceived}                          from 'core/soundEffect/image/SoundEffectImage'

import {AbstractSoundEffectImage} from 'core/soundEffect/image/AbstractSoundEffectImage'

export class SoundEffectImageInBothGames
    extends AbstractSoundEffectImage {

    public constructor(image_smm1: SoundEffectImageNumber_SMM1, image_smm2: SoundEffectImageName_SMM2,)
    public constructor(images_smm1: readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1], image_smm2: SoundEffectImageName_SMM2,)
    public constructor(images_smm1: NonNullable<PossibleSMM1ImagePathReceived>, image_smm2: SoundEffectImageName_SMM2,) {
        super(images_smm1, image_smm2,)
    }

}
