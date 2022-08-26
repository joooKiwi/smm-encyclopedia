import type {PossibleSMM1ImagePathReceived} from './SoundEffectImage';
import type {SoundEffectImageNumber_SMM1}   from '../SoundEffects.types';

import {AbstractSoundEffectImage} from './AbstractSoundEffectImage';

export class SMM1SoundEffectImage
    extends AbstractSoundEffectImage {

    public constructor(image: SoundEffectImageNumber_SMM1,)
    public constructor(image1: SoundEffectImageNumber_SMM1, image2: SoundEffectImageNumber_SMM1,)
    public constructor(images: NonNullable<PossibleSMM1ImagePathReceived>) {
        super(images, null,);
    }

}
