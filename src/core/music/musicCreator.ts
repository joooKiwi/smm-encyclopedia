import type {MusicSoundFile, NonRepeatableMusicSoundFile}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               from 'core/music/file/MusicSoundFile'
import type {PossibleLink_LinkMusic, PossibleOther_FastMusic, PossibleOther_RegularMusic, PossibleSMB2_SMB2Music}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       from 'core/music/backgroundMusic/types'
import type {BackgroundMusic, PossibleLink_FastMusic_GroupContainer, PossibleLink_RegularMusic_GroupContainer, PossibleNSMBU_EditorMusic_GroupContainer, PossibleNSMBU_FastMusic_GroupContainer, PossibleNSMBU_FastYoshiSound_GroupContainer, PossibleNSMBU_RegularMusic_GroupContainer, PossibleNSMBU_RegularYoshiSound_GroupContainer, PossibleSM3DW_EditorMusic_GroupContainer, PossibleSM3DW_FastMusic_GroupContainer, PossibleSM3DW_FastUnderwaterMusic_GroupContainer, PossibleSM3DW_RegularMusic_GroupContainer, PossibleSM3DW_UnderwaterMusic_GroupContainer, PossibleSMB2_FastMusic_GroupContainer, PossibleSMB2_RegularMusic_GroupContainer, PossibleSMB3_EditorMusic_GroupContainer, PossibleSMB3_FastMusic_GroupContainer, PossibleSMB3_RegularMusic_GroupContainer, PossibleSMB_EditorMusic_GroupContainer, PossibleSMB_FastMusic_GroupContainer, PossibleSMB_RegularMusic_GroupContainer, PossibleSMW_EditorMusic_GroupContainer, PossibleSMW_FastMusic_GroupContainer, PossibleSMW_FastYoshiSound_GroupContainer, PossibleSMW_RegularMusic_GroupContainer, PossibleSMW_RegularYoshiSound_GroupContainer} from 'core/music/backgroundMusic/BackgroundMusic'
import type {NonChangeableSoundEffectBackgroundMusic}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic'
import type {PossibleSoundEffectName, SingleSoundEffectMusic}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/music/soundEffect/SingleSoundEffectMusic'
import type {PossibleSoundEffectEditorOnly_EditorName, PossibleSoundEffectEditorOnly_Name, SoundEffectMusicWithDifferentEditor}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor'

import {BackgroundMusicContainer}                                          from 'core/music/backgroundMusic/BackgroundMusic.container'
import {NonChangeableSoundEffectBackgroundMusicContainer}                  from 'core/music/backgroundMusic/NonChangeableSoundEffectBackgroundMusic.container'
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect}          from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect'
import {SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer} from 'core/music/backgroundMusic/SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect.container'
import {nonRepeatable}                                                     from 'core/music/file/nonRepeatable'
import {SingleSoundEffectMusicContainer}                                   from 'core/music/soundEffect/SingleSoundEffectMusic.container'
import {SoundEffectMusicWithDifferentEditorContainer}                      from 'core/music/soundEffect/SoundEffectMusicWithDifferentEditor.container'

/**
 * Create a {@link NonChangeableSoundEffectBackgroundMusic} from a {@link music} and a {@link fastMusic fast music}
 *
 * @param music The normal-speed music
 * @param fastMusic The fast-speed music
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export function nonChangeableBackgroundMusic<const MUSIC extends MusicSoundFile<PossibleOther_RegularMusic>, const FAST_MUSIC extends MusicSoundFile<PossibleOther_FastMusic>, >(music: MUSIC, fastMusic: FAST_MUSIC,): NonChangeableSoundEffectBackgroundMusic<MUSIC, FAST_MUSIC> {
    return new NonChangeableSoundEffectBackgroundMusicContainer(music, fastMusic,)
}

/**
 * Create a {@link SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect} from a {@link linkMusic link} and a {@link smb2Music SMB2} music
 *
 * @param linkMusic The link-theme music
 * @param smb2Music The SMB2-theme music
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export function linkAndSmb2BackgroundMusic<const LINK_MUSIC extends MusicSoundFile<PossibleLink_LinkMusic>, const SMB2_MUSIC extends MusicSoundFile<PossibleSMB2_SMB2Music>, >(linkMusic: LINK_MUSIC, smb2Music: SMB2_MUSIC,): SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffect<LINK_MUSIC, SMB2_MUSIC> {
    return new SoundEffectBackgroundMusicInSuperMarioBrosForSoundEffectContainer(linkMusic, smb2Music,)
}


/**
 * Create an {@link BackgroundMusic} with every possible track than can be played in order:
 *  - {@link SMB} (editor, normal & fast)
 *  - "Link" (normal & fast)
 *  - {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} (normal & fast)
 *  - {@link SMB3} (editor, normal & fast)
 *  - {@link SMW} (editor, normal & fast)
 *  - {@link NSMBU} (editor, normal & fast)
 *  - {@link SM3DW} (editor, normal & fast)
 *
 * @param smbEditor The editor sound effect in {@link SMB}
 * @param smb The {@link SMB} music when playing
 * @param smbFast The fast {@link SMB} music when playing
 * @param link The "Link" music when playing
 * @param linkFast The fast "Link" music when playing
 * @param smb2 The {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} music when playing
 * @param smb2Fast The fast {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} music when playing
 * @param smb3Editor The editor sound effect in {@link SMB3}
 * @param smb3 The {@link SMB3} music when playing
 * @param smb3Fast The fast {@link SMB3} music when playing
 * @param smwEditor The editor sound effect in {@link SMW}
 * @param smw The {@link SMW} music when playing
 * @param smwYoshi The {@link SMW} music when playing and riding a "Yoshi"
 * @param smwFast The {@link SMW} music when playing
 * @param smwFastYoshi The fast {@link SMW} music when playing and riding a "Yoshi"
 * @param nsmbuEditor The editor sound effect in {@link NSMBU}
 * @param nsmbu The {@link NSMBU} music when playing
 * @param nsmbuYoshi The {@link NSMBU} music when playing and riding a "Yoshi"
 * @param nsmbuFast The fast {@link NSMBU} music when playing
 * @param nsmbuFastYoshi The fast {@link NSMBU} music when playing and riding a "Yoshi"
 * @param sm3dwEditor The editor sound effect in {@link SM3DW}
 * @param sm3dw The {@link SM3DW} music when playing
 * @param sm3dwUnderwater The {@link SM3DW} music when playing while being {@link Themes.UNDERWATER underwater}
 * @param sm3dwFast The fast {@link SM3DW} music when playing
 * @param sm3dwFastUnderwater The fast {@link SM3DW} music when playing while being {@link Themes.UNDERWATER underwater}
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export function backgroundMusic<const SMB_EDITOR_MUSIC extends PossibleSMB_EditorMusic_GroupContainer, const SMB_MUSIC extends PossibleSMB_RegularMusic_GroupContainer, const SMB_FAST_MUSIC extends PossibleSMB_FastMusic_GroupContainer,
    const LINK_MUSIC extends PossibleLink_RegularMusic_GroupContainer, const LINK_FAST_MUSIC extends PossibleLink_FastMusic_GroupContainer,
    const SMB2_MUSIC extends PossibleSMB2_RegularMusic_GroupContainer, const SMB2_FAST_MUSIC extends PossibleSMB2_FastMusic_GroupContainer,
    const SMB3_EDITOR_MUSIC extends PossibleSMB3_EditorMusic_GroupContainer, const SMB3_MUSIC extends PossibleSMB3_RegularMusic_GroupContainer, const SMB3_FAST_MUSIC extends PossibleSMB3_FastMusic_GroupContainer,
    const SMW_EDITOR_MUSIC extends PossibleSMW_EditorMusic_GroupContainer, const SMW_MUSIC extends PossibleSMW_RegularMusic_GroupContainer, const SMW_YOSHI_SOUND extends PossibleSMW_RegularYoshiSound_GroupContainer, const SMW_FAST_MUSIC extends PossibleSMW_FastMusic_GroupContainer, const SMW_FAST_YOSHI_SOUND extends PossibleSMW_FastYoshiSound_GroupContainer,
    const NSMBU_EDITOR_MUSIC extends PossibleNSMBU_EditorMusic_GroupContainer, const NSMBU_MUSIC extends PossibleNSMBU_RegularMusic_GroupContainer, const NSMBU_YOSHI_SOUND extends PossibleNSMBU_RegularYoshiSound_GroupContainer, const NSMBU_FAST_MUSIC extends PossibleNSMBU_FastMusic_GroupContainer, const NSMBU_FAST_YOSHI_SOUND extends PossibleNSMBU_FastYoshiSound_GroupContainer,
    const SM3DW_EDITOR_MUSIC extends PossibleSM3DW_EditorMusic_GroupContainer, const SM3DW_MUSIC extends PossibleSM3DW_RegularMusic_GroupContainer, const SM3DW_UNDERWATER_MUSIC extends PossibleSM3DW_UnderwaterMusic_GroupContainer, const SM3DW_FAST_MUSIC extends PossibleSM3DW_FastMusic_GroupContainer, const SM3DW_FAST_UNDERWATER_MUSIC extends PossibleSM3DW_FastUnderwaterMusic_GroupContainer, >(
    smbEditor: SMB_EDITOR_MUSIC, smb: SMB_MUSIC, smbFast: SMB_FAST_MUSIC,
    link: LINK_MUSIC, linkFast: LINK_FAST_MUSIC,
    smb2: SMB2_MUSIC, smb2Fast: SMB2_FAST_MUSIC,
    smb3Editor: SMB3_EDITOR_MUSIC, smb3: SMB3_MUSIC, smb3Fast: SMB3_FAST_MUSIC,
    smwEditor: SMW_EDITOR_MUSIC, smw: SMW_MUSIC, smwYoshi: SMW_YOSHI_SOUND, smwFast: SMW_FAST_MUSIC, smwFastYoshi: SMW_FAST_YOSHI_SOUND,
    nsmbuEditor: NSMBU_EDITOR_MUSIC, nsmbu: NSMBU_MUSIC, nsmbuYoshi: NSMBU_YOSHI_SOUND, nsmbuFast: NSMBU_FAST_MUSIC, nsmbuFastYoshi: NSMBU_FAST_YOSHI_SOUND,
    sm3dwEditor: SM3DW_EDITOR_MUSIC, sm3dw: SM3DW_MUSIC, sm3dwUnderwater: SM3DW_UNDERWATER_MUSIC, sm3dwFast: SM3DW_FAST_MUSIC, sm3dwFastUnderwater: SM3DW_FAST_UNDERWATER_MUSIC,
): BackgroundMusic<SMB_EDITOR_MUSIC, SMB_MUSIC, SMB_FAST_MUSIC, LINK_MUSIC, LINK_FAST_MUSIC, SMB2_MUSIC, SMB2_FAST_MUSIC,
    SMB3_EDITOR_MUSIC, SMB3_MUSIC, SMB3_FAST_MUSIC, SMW_EDITOR_MUSIC,
    SMW_MUSIC, SMW_YOSHI_SOUND, SMW_FAST_MUSIC, SMW_FAST_YOSHI_SOUND,
    NSMBU_EDITOR_MUSIC, NSMBU_MUSIC, NSMBU_YOSHI_SOUND, NSMBU_FAST_MUSIC, NSMBU_FAST_YOSHI_SOUND,
    SM3DW_EDITOR_MUSIC, SM3DW_MUSIC, SM3DW_UNDERWATER_MUSIC, SM3DW_FAST_MUSIC, SM3DW_FAST_UNDERWATER_MUSIC> {
    return new BackgroundMusicContainer(smbEditor, smb, smbFast,
        link, linkFast,
        smb2, smb2Fast,
        smb3Editor, smb3, smb3Fast,
        smwEditor, smw, smwYoshi, smwFast, smwFastYoshi,
        nsmbuEditor, nsmbu, nsmbuYoshi, nsmbuFast, nsmbuFastYoshi,
        sm3dwEditor, sm3dw, sm3dwUnderwater, sm3dwFast, sm3dwFastUnderwater,)
}


/**
 * Create a {@link SoundEffectMusicWithDifferentEditor} with {@link NonRepeatableSoundFile} {@link editorName editor} and {@link name regular} name
 *
 * @param name The music when playing
 * @param editorName The editor sound effect
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export function separatedSoundEffectMusic<const NAME extends PossibleSoundEffectEditorOnly_Name, const EDITOR_NAME extends PossibleSoundEffectEditorOnly_EditorName, >(name: NAME, editorName: EDITOR_NAME,): SoundEffectMusicWithDifferentEditor<NonRepeatableMusicSoundFile<NAME>, NonRepeatableMusicSoundFile<EDITOR_NAME>> {
    return new SoundEffectMusicWithDifferentEditorContainer(nonRepeatable(name,), nonRepeatable(editorName,),)
}

/**
 * Create a {@link SingleSoundEffectMusic} with {@link NonRepeatableSoundFile} from the {@link name} provided
 *
 * @param name The editor sound effect and music when playing
 * @deprecated The use of a more simplistic {@link IndividualMusics} is used and better
 */
export function singleSoundEffectMusic<const NAME extends PossibleSoundEffectName, >(name: NAME,): SingleSoundEffectMusic<NonRepeatableMusicSoundFile<NAME>> {
    return new SingleSoundEffectMusicContainer(nonRepeatable(name,),)
}
