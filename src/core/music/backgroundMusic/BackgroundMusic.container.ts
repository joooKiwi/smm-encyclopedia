import type {BackgroundMusic, PossibleLink_FastMusic_GroupContainer, PossibleLink_RegularMusic_GroupContainer, PossibleNSMBU_EditorMusic_GroupContainer, PossibleNSMBU_FastMusic_GroupContainer, PossibleNSMBU_FastYoshiSound_GroupContainer, PossibleNSMBU_RegularMusic_GroupContainer, PossibleNSMBU_RegularYoshiSound_GroupContainer, PossibleSM3DW_EditorMusic_GroupContainer, PossibleSM3DW_FastMusic_GroupContainer, PossibleSM3DW_FastUnderwaterMusic_GroupContainer, PossibleSM3DW_RegularMusic_GroupContainer, PossibleSM3DW_UnderwaterMusic_GroupContainer, PossibleSMB2_FastMusic_GroupContainer, PossibleSMB2_RegularMusic_GroupContainer, PossibleSMB3_EditorMusic_GroupContainer, PossibleSMB3_FastMusic_GroupContainer, PossibleSMB3_RegularMusic_GroupContainer, PossibleSMB_EditorMusic_GroupContainer, PossibleSMB_FastMusic_GroupContainer, PossibleSMB_RegularMusic_GroupContainer, PossibleSMW_EditorMusic_GroupContainer, PossibleSMW_FastMusic_GroupContainer, PossibleSMW_FastYoshiSound_GroupContainer, PossibleSMW_RegularMusic_GroupContainer, PossibleSMW_RegularYoshiSound_GroupContainer} from 'core/music/backgroundMusic/BackgroundMusic'
import type {SingleBackgroundMusic}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     from 'core/music/backgroundMusic/SingleBackgroundMusic'
import type {Possible_Music}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from 'core/music/file/MusicSoundFile'

import {AbstractMusic}                from 'core/music/AbstractMusic'
import {SingleBackgroundMusicFactory} from 'core/music/backgroundMusic/SingleBackgroundMusic.factory'

export class BackgroundMusicContainer<SMB_EDITOR_MUSIC extends PossibleSMB_EditorMusic_GroupContainer, SMB_MUSIC extends PossibleSMB_RegularMusic_GroupContainer, SMB_FAST_MUSIC extends PossibleSMB_FastMusic_GroupContainer,
    LINK_MUSIC extends PossibleLink_RegularMusic_GroupContainer, LINK_FAST_MUSIC extends PossibleLink_FastMusic_GroupContainer,
    SMB2_MUSIC extends PossibleSMB2_RegularMusic_GroupContainer, SMB2_FAST_MUSIC extends PossibleSMB2_FastMusic_GroupContainer,
    SMB3_EDITOR_MUSIC extends PossibleSMB3_EditorMusic_GroupContainer, SMB3_MUSIC extends PossibleSMB3_RegularMusic_GroupContainer, SMB3_FAST_MUSIC extends PossibleSMB3_FastMusic_GroupContainer,
    SMW_EDITOR_MUSIC extends PossibleSMW_EditorMusic_GroupContainer, SMW_MUSIC extends PossibleSMW_RegularMusic_GroupContainer, SMW_YOSHI_SOUND extends PossibleSMW_RegularYoshiSound_GroupContainer, SMW_FAST_MUSIC extends PossibleSMW_FastMusic_GroupContainer, SMW_FAST_YOSHI_SOUND extends PossibleSMW_FastYoshiSound_GroupContainer,
    NSMBU_EDITOR_MUSIC extends PossibleNSMBU_EditorMusic_GroupContainer, NSMBU_MUSIC extends PossibleNSMBU_RegularMusic_GroupContainer, NSMBU_YOSHI_SOUND extends PossibleNSMBU_RegularYoshiSound_GroupContainer, NSMBU_FAST_MUSIC extends PossibleNSMBU_FastMusic_GroupContainer, NSMBU_FAST_YOSHI_SOUND extends PossibleNSMBU_FastYoshiSound_GroupContainer,
    SM3DW_EDITOR_MUSIC extends PossibleSM3DW_EditorMusic_GroupContainer, SM3DW_MUSIC extends PossibleSM3DW_RegularMusic_GroupContainer, SM3DW_UNDERWATER_MUSIC extends PossibleSM3DW_UnderwaterMusic_GroupContainer, SM3DW_FAST_MUSIC extends PossibleSM3DW_FastMusic_GroupContainer, SM3DW_FAST_UNDERWATER_MUSIC extends PossibleSM3DW_FastUnderwaterMusic_GroupContainer, >
    extends AbstractMusic<readonly MusicSoundFile<Possible_Music>[]>
    implements BackgroundMusic<SMB_EDITOR_MUSIC, SMB_MUSIC, SMB_FAST_MUSIC, LINK_MUSIC, LINK_FAST_MUSIC, SMB2_MUSIC, SMB2_FAST_MUSIC, SMB3_EDITOR_MUSIC, SMB3_MUSIC, SMB3_FAST_MUSIC, SMW_EDITOR_MUSIC,
        SMW_MUSIC, SMW_YOSHI_SOUND, SMW_FAST_MUSIC, SMW_FAST_YOSHI_SOUND, NSMBU_EDITOR_MUSIC, NSMBU_MUSIC, NSMBU_YOSHI_SOUND, NSMBU_FAST_MUSIC, NSMBU_FAST_YOSHI_SOUND, SM3DW_EDITOR_MUSIC,
        SM3DW_MUSIC, SM3DW_UNDERWATER_MUSIC, SM3DW_FAST_MUSIC, SM3DW_FAST_UNDERWATER_MUSIC> {

    //region -------------------- Fields --------------------

    readonly #editorMusic
    readonly #regularMusic
    readonly #linkMusic
    readonly #smb2Music
    readonly #underwaterMusic
    readonly #yoshiSound
    readonly #fastMusic
    readonly #fastLinkMusic
    readonly #fastSmb2Music
    readonly #fastUnderwaterMusic
    readonly #fastYoshiSound

    //endregion -------------------- Fields --------------------

    public constructor(smbEditor: SMB_EDITOR_MUSIC, smb: SMB_MUSIC, smbFast: SMB_FAST_MUSIC,
                       link: LINK_MUSIC, linkFast: LINK_FAST_MUSIC,
                       smb2: SMB2_MUSIC, smb2Fast: SMB2_FAST_MUSIC,
                       smb3Editor: SMB3_EDITOR_MUSIC, smb3: SMB3_MUSIC, smb3Fast: SMB3_FAST_MUSIC,
                       smwEditor: SMW_EDITOR_MUSIC, smw: SMW_MUSIC, smwYoshi: SMW_YOSHI_SOUND, smwFast: SMW_FAST_MUSIC, smwFastYoshi: SMW_FAST_YOSHI_SOUND,
                       nsmbuEditor: NSMBU_EDITOR_MUSIC, nsmbu: NSMBU_MUSIC, nsmbuYoshi: NSMBU_YOSHI_SOUND, nsmbuFast: NSMBU_FAST_MUSIC, nsmbuFastYoshi: NSMBU_FAST_YOSHI_SOUND,
                       sm3dwEditor: SM3DW_EDITOR_MUSIC, sm3dw: SM3DW_MUSIC, sm3dwUnderwater: SM3DW_UNDERWATER_MUSIC, sm3dwFast: SM3DW_FAST_MUSIC, sm3dwFastUnderwater: SM3DW_FAST_UNDERWATER_MUSIC,
    ) {
        super()
        this.#editorMusic = SingleBackgroundMusicFactory.create(smbEditor, smb3Editor, smwEditor, nsmbuEditor, sm3dwEditor,)
        this.#regularMusic = SingleBackgroundMusicFactory.create(smb, smb3, smw, nsmbu, sm3dw,)
        this.#linkMusic = SingleBackgroundMusicFactory.create(link, null, null, null, null,)
        this.#smb2Music = SingleBackgroundMusicFactory.create(smb2, null, null, null, null,)
        this.#underwaterMusic = SingleBackgroundMusicFactory.create(null, null, null, null, sm3dwUnderwater,)
        this.#yoshiSound = SingleBackgroundMusicFactory.create(null, null, smwYoshi, nsmbuYoshi, null,)
        this.#fastMusic = SingleBackgroundMusicFactory.create(smbFast, smb3Fast, smwFast, nsmbuFast, sm3dwFast,)
        this.#fastLinkMusic = SingleBackgroundMusicFactory.create(linkFast, null, null, null, null,)
        this.#fastSmb2Music = SingleBackgroundMusicFactory.create(smb2Fast, null, null, null, null,)
        this.#fastUnderwaterMusic = SingleBackgroundMusicFactory.create(null, null, null, null, sm3dwFastUnderwater,)
        this.#fastYoshiSound = SingleBackgroundMusicFactory.create(null, null, smwFastYoshi, nsmbuFastYoshi, null,)
    }

    //region -------------------- Getter methods --------------------

    protected override _createEveryMusics(): readonly MusicSoundFile<Possible_Music>[] {
        const regular = this.regularMusic
        const fast = this.fastMusic
        const link = this.linkMusic.smb
        const fastLink = this.fastLinkMusic.smb
        const smb2 = this.smb2Music.smb
        const fastSmb2 = this.fastSmb2Music.smb

        //TODO Change the set to only have an array instead
        return [...new Set([
            ...this.editorMusic.all.filter(music => !regular.all.includes(music as never)),
            regular.smb, link, smb2, regular.smb3, regular.smw, regular.nsmbu, regular.sm3dw,
            ...this.underwaterMusic.all, ...this.yoshiSound.all,
            fast.smb, fastLink, fastSmb2, fast.smb3, fast.smw, fast.nsmbu, fast.sm3dw,
            ...this.fastUnderwaterMusic.all, ...this.fastYoshiSound.all,
        ].filter(music => music != null) as unknown as readonly MusicSoundFile<Possible_Music>[],),]
    }


    public get editorMusic(): SingleBackgroundMusic<SMB_EDITOR_MUSIC, SMB3_EDITOR_MUSIC, SMW_EDITOR_MUSIC, NSMBU_EDITOR_MUSIC, SM3DW_EDITOR_MUSIC> {
        return this.#editorMusic
    }


    public get regularMusic(): SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC> {
        return this.#regularMusic
    }

    public get linkMusic(): SingleBackgroundMusic<LINK_MUSIC, null, null, null, null> {
        return this.#linkMusic
    }

    public get smb2Music(): SingleBackgroundMusic<SMB2_MUSIC, null, null, null, null> {
        return this.#smb2Music
    }

    public get underwaterMusic(): SingleBackgroundMusic<null, null, null, null, SM3DW_UNDERWATER_MUSIC> {
        return this.#underwaterMusic
    }

    public get yoshiSound(): SingleBackgroundMusic<null, null, SMW_YOSHI_SOUND, NSMBU_YOSHI_SOUND, null> {
        return this.#yoshiSound
    }


    public get fastMusic(): SingleBackgroundMusic<SMB_FAST_MUSIC, SMB3_FAST_MUSIC, SMW_FAST_MUSIC, NSMBU_FAST_MUSIC, SM3DW_FAST_MUSIC> {
        return this.#fastMusic
    }

    public get fastLinkMusic(): SingleBackgroundMusic<LINK_FAST_MUSIC, null, null, null, null> {
        return this.#fastLinkMusic
    }

    public get fastSmb2Music(): SingleBackgroundMusic<SMB2_FAST_MUSIC, null, null, null, null> {
        return this.#fastSmb2Music
    }

    public get fastUnderwaterMusic(): SingleBackgroundMusic<null, null, null, null, SM3DW_FAST_UNDERWATER_MUSIC> {
        return this.#fastUnderwaterMusic
    }

    public get fastYoshiSound(): SingleBackgroundMusic<null, null, SMW_FAST_YOSHI_SOUND, NSMBU_FAST_YOSHI_SOUND, null> {
        return this.#fastYoshiSound
    }

    //endregion -------------------- Getter methods --------------------

}
