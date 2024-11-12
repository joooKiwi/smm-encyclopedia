import type {
    BackgroundMusic, PossibleLink_FastMusic_GroupContainer, PossibleLink_RegularMusic_GroupContainer, PossibleNSMBU_EditorMusic_GroupContainer, PossibleNSMBU_FastMusic_GroupContainer, PossibleNSMBU_FastYoshiSound_GroupContainer, PossibleNSMBU_RegularMusic_GroupContainer, PossibleNSMBU_RegularYoshiSound_GroupContainer, PossibleSM3DW_EditorMusic_GroupContainer, PossibleSM3DW_FastMusic_GroupContainer, PossibleSM3DW_FastUnderwaterMusic_GroupContainer, PossibleSM3DW_RegularMusic_GroupContainer, PossibleSM3DW_UnderwaterMusic_GroupContainer, PossibleSMB2_FastMusic_GroupContainer, PossibleSMB2_RegularMusic_GroupContainer, PossibleSMB3_EditorMusic_GroupContainer, PossibleSMB3_FastMusic_GroupContainer, PossibleSMB3_RegularMusic_GroupContainer, PossibleSMB_EditorMusic_GroupContainer, PossibleSMB_FastMusic_GroupContainer, PossibleSMB_RegularMusic_GroupContainer, PossibleSMW_EditorMusic_GroupContainer, PossibleSMW_FastMusic_GroupContainer, PossibleSMW_FastYoshiSound_GroupContainer, PossibleSMW_RegularMusic_GroupContainer, PossibleSMW_RegularYoshiSound_GroupContainer
}                                   from 'core/music/backgroundMusic/BackgroundMusic'
import type {SingleBackgroundMusic} from 'core/music/backgroundMusic/SingleBackgroundMusic'

import {SingleBackgroundMusicFactory} from 'core/music/backgroundMusic/SingleBackgroundMusic.factory'

/**@deprecated The use of a more simplistic structure on {@link IndividualMusics} is used and better */
export class BackgroundMusicContainer<const out SMB_EDITOR_MUSIC extends PossibleSMB_EditorMusic_GroupContainer,
    const out SMB_MUSIC extends PossibleSMB_RegularMusic_GroupContainer,
    const out SMB_FAST_MUSIC extends PossibleSMB_FastMusic_GroupContainer,
    const out LINK_MUSIC extends PossibleLink_RegularMusic_GroupContainer,
    const out LINK_FAST_MUSIC extends PossibleLink_FastMusic_GroupContainer,
    const out SMB2_MUSIC extends PossibleSMB2_RegularMusic_GroupContainer,
    const out SMB2_FAST_MUSIC extends PossibleSMB2_FastMusic_GroupContainer,
    const out SMB3_EDITOR_MUSIC extends PossibleSMB3_EditorMusic_GroupContainer,
    const out SMB3_MUSIC extends PossibleSMB3_RegularMusic_GroupContainer,
    const out SMB3_FAST_MUSIC extends PossibleSMB3_FastMusic_GroupContainer,
    const out SMW_EDITOR_MUSIC extends PossibleSMW_EditorMusic_GroupContainer,
    const out SMW_MUSIC extends PossibleSMW_RegularMusic_GroupContainer,
    const out SMW_YOSHI_SOUND extends PossibleSMW_RegularYoshiSound_GroupContainer,
    const out SMW_FAST_MUSIC extends PossibleSMW_FastMusic_GroupContainer,
    const out SMW_FAST_YOSHI_SOUND extends PossibleSMW_FastYoshiSound_GroupContainer,
    const out NSMBU_EDITOR_MUSIC extends PossibleNSMBU_EditorMusic_GroupContainer,
    const out NSMBU_MUSIC extends PossibleNSMBU_RegularMusic_GroupContainer,
    const out NSMBU_YOSHI_SOUND extends PossibleNSMBU_RegularYoshiSound_GroupContainer,
    const out NSMBU_FAST_MUSIC extends PossibleNSMBU_FastMusic_GroupContainer,
    const out NSMBU_FAST_YOSHI_SOUND extends PossibleNSMBU_FastYoshiSound_GroupContainer,
    const out SM3DW_EDITOR_MUSIC extends PossibleSM3DW_EditorMusic_GroupContainer,
    const out SM3DW_MUSIC extends PossibleSM3DW_RegularMusic_GroupContainer,
    const out SM3DW_UNDERWATER_MUSIC extends PossibleSM3DW_UnderwaterMusic_GroupContainer,
    const out SM3DW_FAST_MUSIC extends PossibleSM3DW_FastMusic_GroupContainer,
    const out SM3DW_FAST_UNDERWATER_MUSIC extends PossibleSM3DW_FastUnderwaterMusic_GroupContainer, >
    implements BackgroundMusic<SMB_EDITOR_MUSIC, SMB_MUSIC, SMB_FAST_MUSIC, LINK_MUSIC, LINK_FAST_MUSIC, SMB2_MUSIC, SMB2_FAST_MUSIC, SMB3_EDITOR_MUSIC, SMB3_MUSIC, SMB3_FAST_MUSIC, SMW_EDITOR_MUSIC,
        SMW_MUSIC, SMW_YOSHI_SOUND, SMW_FAST_MUSIC, SMW_FAST_YOSHI_SOUND, NSMBU_EDITOR_MUSIC, NSMBU_MUSIC, NSMBU_YOSHI_SOUND, NSMBU_FAST_MUSIC, NSMBU_FAST_YOSHI_SOUND, SM3DW_EDITOR_MUSIC,
        SM3DW_MUSIC, SM3DW_UNDERWATER_MUSIC, SM3DW_FAST_MUSIC, SM3DW_FAST_UNDERWATER_MUSIC> {

    //region -------------------- Fields --------------------

    #everyMusic?: readonly NonNullable<| SMB_EDITOR_MUSIC | SMB_MUSIC | SMB_FAST_MUSIC | LINK_MUSIC | LINK_FAST_MUSIC | SMB2_MUSIC | SMB2_FAST_MUSIC
                                       | SMB3_EDITOR_MUSIC | SMB3_MUSIC | SMB3_FAST_MUSIC | SMW_EDITOR_MUSIC
                                       | SMW_MUSIC | SMW_YOSHI_SOUND | SMW_FAST_MUSIC | SMW_FAST_YOSHI_SOUND
                                       | NSMBU_EDITOR_MUSIC | NSMBU_MUSIC | NSMBU_YOSHI_SOUND | NSMBU_FAST_MUSIC | NSMBU_FAST_YOSHI_SOUND
                                       | SM3DW_EDITOR_MUSIC | SM3DW_MUSIC | SM3DW_UNDERWATER_MUSIC | SM3DW_FAST_MUSIC | SM3DW_FAST_UNDERWATER_MUSIC>[]

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
    //region -------------------- Constructor --------------------

    public constructor(smbEditor: SMB_EDITOR_MUSIC, smb: SMB_MUSIC, smbFast: SMB_FAST_MUSIC,
                       link: LINK_MUSIC, linkFast: LINK_FAST_MUSIC,
                       smb2: SMB2_MUSIC, smb2Fast: SMB2_FAST_MUSIC,
                       smb3Editor: SMB3_EDITOR_MUSIC, smb3: SMB3_MUSIC, smb3Fast: SMB3_FAST_MUSIC,
                       smwEditor: SMW_EDITOR_MUSIC, smw: SMW_MUSIC, smwYoshi: SMW_YOSHI_SOUND, smwFast: SMW_FAST_MUSIC, smwFastYoshi: SMW_FAST_YOSHI_SOUND,
                       nsmbuEditor: NSMBU_EDITOR_MUSIC, nsmbu: NSMBU_MUSIC, nsmbuYoshi: NSMBU_YOSHI_SOUND, nsmbuFast: NSMBU_FAST_MUSIC, nsmbuFastYoshi: NSMBU_FAST_YOSHI_SOUND,
                       sm3dwEditor: SM3DW_EDITOR_MUSIC, sm3dw: SM3DW_MUSIC, sm3dwUnderwater: SM3DW_UNDERWATER_MUSIC, sm3dwFast: SM3DW_FAST_MUSIC, sm3dwFastUnderwater: SM3DW_FAST_UNDERWATER_MUSIC,
    ) {
        //TODO relocate the object creation in another class
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

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------


    public get everyMusics(): readonly NonNullable<| SMB_EDITOR_MUSIC | SMB_MUSIC | SMB_FAST_MUSIC | LINK_MUSIC | LINK_FAST_MUSIC | SMB2_MUSIC | SMB2_FAST_MUSIC
                                                   | SMB3_EDITOR_MUSIC | SMB3_MUSIC | SMB3_FAST_MUSIC | SMW_EDITOR_MUSIC
                                                   | SMW_MUSIC | SMW_YOSHI_SOUND | SMW_FAST_MUSIC | SMW_FAST_YOSHI_SOUND
                                                   | NSMBU_EDITOR_MUSIC | NSMBU_MUSIC | NSMBU_YOSHI_SOUND | NSMBU_FAST_MUSIC | NSMBU_FAST_YOSHI_SOUND
                                                   | SM3DW_EDITOR_MUSIC | SM3DW_MUSIC | SM3DW_UNDERWATER_MUSIC | SM3DW_FAST_MUSIC | SM3DW_FAST_UNDERWATER_MUSIC>[] {
        if (this.#everyMusic != null)
            return this.#everyMusic

        const all: NonNullable<| SMB_EDITOR_MUSIC | SMB_MUSIC | SMB_FAST_MUSIC | LINK_MUSIC | LINK_FAST_MUSIC | SMB2_MUSIC | SMB2_FAST_MUSIC
                               | SMB3_EDITOR_MUSIC | SMB3_MUSIC | SMB3_FAST_MUSIC | SMW_EDITOR_MUSIC
                               | SMW_MUSIC | SMW_YOSHI_SOUND | SMW_FAST_MUSIC | SMW_FAST_YOSHI_SOUND
                               | NSMBU_EDITOR_MUSIC | NSMBU_MUSIC | NSMBU_YOSHI_SOUND | NSMBU_FAST_MUSIC | NSMBU_FAST_YOSHI_SOUND
                               | SM3DW_EDITOR_MUSIC | SM3DW_MUSIC | SM3DW_UNDERWATER_MUSIC | SM3DW_FAST_MUSIC | SM3DW_FAST_UNDERWATER_MUSIC>[] = []

        //region -------------------- Add every music then the editor music (without duplication) --------------------

        const regularMusic = this.regularMusic
        const regularMusics = regularMusic.all
        const editorMusics = this.editorMusic.all
        const size1 = editorMusics.length
        let index1 = -1
        while (++index1 < size1) {
            const value = editorMusics[index1]
            if (value == null)
                continue
            if (regularMusics.includes(value as never,))
                continue
            if (all.includes(value,))
                continue
            all.push(value,)
        }

        //endregion -------------------- Add every music then the editor music (without duplication) --------------------
        //region -------------------- Add every other music (without duplication) --------------------

        /**
         * Simply add the {@link value} if it is not <b>null</b> and
         * is not contained in the {@link array}
         *
         * @param value The value to possibly add
         * @param array The {@link Array mutable array} to possibly add the value
         */
        function add<const T, >(array: T[], value: Nullable<T>,) {
            if (value == null)
                return
            if (array.includes(value,))
                return
            array.push(value,)
        }

        add(all, regularMusic.smb,)
        add(all, this.linkMusic.smb,)
        add(all, this.smb2Music.smb,)
        add(all, regularMusic.smb3,)
        add(all, regularMusic.smw,)
        add(all, regularMusic.nsmbu,)
        add(all, regularMusic.sm3dw,)
        add(all, this.underwaterMusic.sm3dw,)

        const yoshiSounds = this.yoshiSound
        add(all, yoshiSounds.smw,)
        add(all, yoshiSounds.nsmbu,)

        const fastMusic = this.fastMusic
        add(all, fastMusic.smb,)
        add(all, this.fastLinkMusic.smb,)
        add(all, this.fastSmb2Music.smb,)
        add(all, fastMusic.smb3,)
        add(all, fastMusic.smw,)
        add(all, fastMusic.nsmbu,)
        add(all, fastMusic.sm3dw,)
        add(all, this.fastUnderwaterMusic.sm3dw,)

        const fastYoshiSounds = this.fastYoshiSound
        add(all, fastYoshiSounds.smw,)
        add(all, fastYoshiSounds.nsmbu,)

        //endregion -------------------- Add every other music (without duplication) --------------------

        return this.#everyMusic = all
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
