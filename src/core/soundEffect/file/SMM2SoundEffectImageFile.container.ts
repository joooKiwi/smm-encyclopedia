import type {PossibleEnglishName, SoundEffectImageName_SMM2}      from 'core/soundEffect/SoundEffects.types'
import type {PossibleSMM2ImageFileName, SMM2SoundEffectImageFile} from 'core/soundEffect/file/SMM2SoundEffectImageFile'

import {AbstractSoundEffectImageFile} from 'core/soundEffect/file/AbstractSoundEffectImageFile'

export class SMM2SoundEffectImageFileContainer
    extends AbstractSoundEffectImageFile<PossibleSMM2ImageFileName>
    implements SMM2SoundEffectImageFile {

    public constructor(englishName: PossibleEnglishName, imageName: SoundEffectImageName_SMM2,) {
        super(englishName, `Lyt_E_P_SE_${imageName}`,)
    }

}
