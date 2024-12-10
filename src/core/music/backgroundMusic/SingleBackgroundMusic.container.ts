import type {PossibleMusicArray, PossibleNSMBU_Music_SingleContainer, PossibleSM3DW_Music_SingleContainer, PossibleSMB3_Music_SingleContainer, PossibleSMB_Music_SingleContainer, PossibleSMW_Music_SingleContainer, SingleBackgroundMusic} from 'core/music/backgroundMusic/SingleBackgroundMusic'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

/**@deprecated The use of a more simplistic structure on {@link IndividualMusics} is used */
export class SingleBackgroundMusicContainer<const SMB_MUSIC extends PossibleSMB_Music_SingleContainer,
    const SMB3_MUSIC extends PossibleSMB3_Music_SingleContainer,
    const SMW_MUSIC extends PossibleSMW_Music_SingleContainer,
    const NSMBU_MUSIC extends PossibleNSMBU_Music_SingleContainer,
    const SM3DW_MUSIC extends PossibleSM3DW_Music_SingleContainer, >
    implements SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC> {

    //region -------------------- Fields --------------------

    readonly #all

    readonly #smb: SMB_MUSIC//FIXME this type is only there to help typescript (it's not the standard)
    readonly #smb3: SMB3_MUSIC//FIXME this type is only there to help typescript (it's not the standard)
    readonly #smw: SMW_MUSIC//FIXME this type is only there to help typescript (it's not the standard)
    readonly #nsmbu: NSMBU_MUSIC//FIXME this type is only there to help typescript (it's not the standard)
    readonly #sm3dw: SM3DW_MUSIC//FIXME this type is only there to help typescript (it's not the standard)

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(smb: SMB_MUSIC, smb3: SMB3_MUSIC, smw: SMW_MUSIC, nsmbu: NSMBU_MUSIC, sm3dw: SM3DW_MUSIC,) {
        this.#all = new ArrayAsCollection([this.#smb = smb, this.#smb3 = smb3, this.#smw = smw, this.#nsmbu = nsmbu, this.#sm3dw = sm3dw,],).filterNotNull().toArray() as unknown as PossibleMusicArray<[SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC,]>
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get all(): PossibleMusicArray<readonly [SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC]> {
        return this.#all
    }


    public get smb(): SMB_MUSIC {
        return this.#smb
    }

    public get smb3(): SMB3_MUSIC {
        return this.#smb3
    }

    public get smw(): SMW_MUSIC {
        return this.#smw
    }

    public get nsmbu(): NSMBU_MUSIC {
        return this.#nsmbu
    }

    public get sm3dw(): SM3DW_MUSIC {
        return this.#sm3dw
    }

    //endregion -------------------- Getter methods --------------------

}
