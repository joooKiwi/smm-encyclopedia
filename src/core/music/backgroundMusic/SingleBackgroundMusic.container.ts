import type {FullMusicPathOn}                                                                                                                                                                                                               from '../Music';
import type {PossibleMusicArray, PossibleNSMBU_Music_SingleContainer, PossibleSM3DW_Music_SingleContainer, PossibleSMB3_Music_SingleContainer, PossibleSMB_Music_SingleContainer, PossibleSMW_Music_SingleContainer, SingleBackgroundMusic} from './SingleBackgroundMusic';

import {createMusicPathOn}            from '../createMusicPathOn';
import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container';

export class SingleBackgroundMusicContainer<SMB_MUSIC extends PossibleSMB_Music_SingleContainer,
    SMB3_MUSIC extends PossibleSMB3_Music_SingleContainer,
    SMW_MUSIC extends PossibleSMW_Music_SingleContainer,
    NSMBU_MUSIC extends PossibleNSMBU_Music_SingleContainer,
    SM3DW_MUSIC extends PossibleSM3DW_Music_SingleContainer, >
    implements SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC> {

    //region -------------------- Fields --------------------

    readonly #allHolder;

    readonly #smbHolder;
    readonly #smb3Holder;
    readonly #smwHolder;
    readonly #nsmbuHolder;
    readonly #sm3dwHolder;

    //endregion -------------------- Fields --------------------

    constructor(smb: SMB_MUSIC, smb3: SMB3_MUSIC, smw: SMW_MUSIC, nsmbu: NSMBU_MUSIC, sm3dw: SM3DW_MUSIC,) {
        this.#smbHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(smb));
        this.#smb3Holder = new DelayedObjectHolderContainer(() => createMusicPathOn(smb3));
        this.#smwHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(smw));
        this.#nsmbuHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(nsmbu));
        this.#sm3dwHolder = new DelayedObjectHolderContainer(() => createMusicPathOn(sm3dw));

        this.#allHolder = new DelayedObjectHolderContainer(() => [this.smb, this.smb3, this.smw, this.nsmbu, this.sm3dw,].filter(music => music != null) as unknown as PossibleMusicArray<[SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC]>);
    }

    //region -------------------- Getter methods --------------------

    public get all(): PossibleMusicArray<[SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC]> {
        return this.#allHolder.get;
    }


    public get smb(): FullMusicPathOn<SMB_MUSIC> {
        return this.#smbHolder.get;
    }

    public get smb3(): FullMusicPathOn<SMB3_MUSIC> {
        return this.#smb3Holder.get;
    }

    public get smw(): FullMusicPathOn<SMW_MUSIC> {
        return this.#smwHolder.get;
    }

    public get nsmbu(): FullMusicPathOn<NSMBU_MUSIC> {
        return this.#nsmbuHolder.get;
    }

    public get sm3dw(): FullMusicPathOn<SM3DW_MUSIC> {
        return this.#sm3dwHolder.get;
    }

    //endregion -------------------- Getter methods --------------------

}
