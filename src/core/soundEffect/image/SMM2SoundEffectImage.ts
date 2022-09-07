import type {SoundEffectImageName_SMM2} from '../SoundEffects.types';

import {AbstractSoundEffectImage} from './AbstractSoundEffectImage';

export class SMM2SoundEffectImage
    extends AbstractSoundEffectImage {

    public constructor(image: SoundEffectImageName_SMM2,) {
        super(null, image,);
    }

}
