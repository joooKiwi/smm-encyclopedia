import type {PossibleMusicArray, PossibleNSMBU_Music_SingleContainer, PossibleSM3DW_Music_SingleContainer, PossibleSMB3_Music_SingleContainer, PossibleSMB_Music_SingleContainer, PossibleSMW_Music_SingleContainer, SingleBackgroundMusic} from 'core/music/backgroundMusic/SingleBackgroundMusic'

import {nonNull} from 'util/utilitiesMethods'

export class SingleBackgroundMusicContainer<SMB_MUSIC extends PossibleSMB_Music_SingleContainer,
    SMB3_MUSIC extends PossibleSMB3_Music_SingleContainer,
    SMW_MUSIC extends PossibleSMW_Music_SingleContainer,
    NSMBU_MUSIC extends PossibleNSMBU_Music_SingleContainer,
    SM3DW_MUSIC extends PossibleSM3DW_Music_SingleContainer, >
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
        this.#all = nonNull([this.#smb = smb, this.#smb3 = smb3, this.#smw = smw, this.#nsmbu = nsmbu, this.#sm3dw = sm3dw,]) as unknown as PossibleMusicArray<[SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC,]>
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get all(): PossibleMusicArray<[SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC]> {
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
