import type {PossibleSMM1ImagePathReceived}                          from './SoundEffectImage'
import type {SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from '../SoundEffects.types'

import {AbstractSoundEffectImage} from './AbstractSoundEffectImage'

export class SoundEffectImageInBothGames
    extends AbstractSoundEffectImage {

    public constructor(image_smm1: SoundEffectImageNumber_SMM1, image_smm2: SoundEffectImageName_SMM2,)
    public constructor(images_smm1: readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1], image_smm2: SoundEffectImageName_SMM2,)
    public constructor(images_smm1: NonNullable<PossibleSMM1ImagePathReceived>, image_smm2: SoundEffectImageName_SMM2,) {
        super(images_smm1, image_smm2,)
    }

}
