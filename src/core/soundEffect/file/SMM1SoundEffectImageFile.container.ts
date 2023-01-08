import type {PossibleEnglishName}                                 from 'core/soundEffect/SoundEffects.types'
import {SoundEffectImageNumber_SMM1}                              from 'core/soundEffect/SoundEffects.types'
import type {PossibleSMM1ImageFileName, SMM1SoundEffectImageFile} from 'core/soundEffect/file/SMM1SoundEffectImageFile'

import {AbstractSoundEffectImageFile} from 'core/soundEffect/file/AbstractSoundEffectImageFile'

export class SMM1SoundEffectImageFileContainer
    extends AbstractSoundEffectImageFile<PossibleSMM1ImageFileName>
    implements SMM1SoundEffectImageFile {

    public constructor(englishName: PossibleEnglishName, imageNumber: SoundEffectImageNumber_SMM1,) {
        super(englishName, `Edit_Lyt_P_SE${imageNumber}`,)
    }

}
