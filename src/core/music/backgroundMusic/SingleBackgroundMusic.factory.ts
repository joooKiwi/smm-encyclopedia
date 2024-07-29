import type {PossibleNSMBU_Music_SingleContainer, PossibleSM3DW_Music_SingleContainer, PossibleSMB3_Music_SingleContainer, PossibleSMB_Music_SingleContainer, PossibleSMW_Music_SingleContainer, SingleBackgroundMusic} from 'core/music/backgroundMusic/SingleBackgroundMusic'

import {EmptySingleBackgroundMusic}     from 'core/music/backgroundMusic/EmptySingleBackgroundMusic'
import {SingleBackgroundMusicContainer} from 'core/music/backgroundMusic/SingleBackgroundMusic.container'

/**@deprecated The use of a more simplistic structure on {@link IndividualMusics} is used and better */
export class SingleBackgroundMusicFactory {

    public static create<const SMB_MUSIC extends PossibleSMB_Music_SingleContainer, const SMB3_MUSIC extends PossibleSMB3_Music_SingleContainer, const SMW_MUSIC extends PossibleSMW_Music_SingleContainer, const NSMBU_MUSIC extends PossibleNSMBU_Music_SingleContainer, const SM3DW_MUSIC extends PossibleSM3DW_Music_SingleContainer, >(smb: SMB_MUSIC, smb3: SMB3_MUSIC, smw: SMW_MUSIC, nsmbu: NSMBU_MUSIC, sm3dw: SM3DW_MUSIC,): SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC>
    public static create(smb: PossibleSMB_Music_SingleContainer, smb3: PossibleSMB3_Music_SingleContainer, smw: PossibleSMW_Music_SingleContainer, nsmbu: PossibleNSMBU_Music_SingleContainer, sm3dw: PossibleSM3DW_Music_SingleContainer,): SingleBackgroundMusic {
        if (smb == null)
            if (smb3 == null)
                if (smw == null)
                    if (nsmbu == null)
                        if (sm3dw == null)
                            return EmptySingleBackgroundMusic.get as SingleBackgroundMusic<null, null, null, null, null>
        return new SingleBackgroundMusicContainer(smb, smb3, smw, nsmbu, sm3dw,)
    }

}
