import type {Music}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../Music'
import type {MusicSoundFile}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from '../file/MusicSoundFile'
import type {Possible_Music, PossibleLink_FastMusic, PossibleLink_LinkMusic, PossibleLink_RegularMusic, PossibleNSMBU_EditorMusic, PossibleNSMBU_FastMusic, PossibleNSMBU_FastYoshiSound, PossibleNSMBU_RegularMusic, PossibleNSMBU_RegularYoshiSound, PossibleOther_EditorMusic, PossibleOther_FastMusic, PossibleOther_RegularMusic, PossibleSM3DW_EditorMusic, PossibleSM3DW_FastMusic, PossibleSM3DW_FastUnderwaterMusic, PossibleSM3DW_RegularMusic, PossibleSM3DW_RegularUnderwaterMusic, PossibleSMB2_FastMusic, PossibleSMB2_RegularMusic, PossibleSMB2_SMB2Music, PossibleSMB3_EditorMusic, PossibleSMB3_FastMusic, PossibleSMB3_RegularMusic, PossibleSMB_EditorMusic, PossibleSMB_FastMusic, PossibleSMB_RegularMusic, PossibleSMW_EditorMusic, PossibleSMW_FastMusic, PossibleSMW_FastYoshiSound, PossibleSMW_RegularMusic, PossibleSMW_RegularYoshiSound} from './types'
import type {SingleBackgroundMusic}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from './SingleBackgroundMusic'

export interface BackgroundMusic<SMB_EDITOR_MUSIC extends PossibleSMB_EditorMusic_GroupContainer = PossibleSMB_EditorMusic_GroupContainer, SMB_MUSIC extends PossibleSMB_RegularMusic_GroupContainer = PossibleSMB_RegularMusic_GroupContainer, SMB_FAST_MUSIC extends PossibleSMB_FastMusic_GroupContainer = PossibleSMB_FastMusic_GroupContainer,
    LINK_MUSIC extends PossibleLink_RegularMusic_GroupContainer = PossibleLink_RegularMusic_GroupContainer, LINK_FAST_MUSIC extends PossibleLink_FastMusic_GroupContainer = PossibleLink_FastMusic_GroupContainer,
    SMB2_MUSIC extends PossibleSMB2_RegularMusic_GroupContainer = PossibleSMB2_RegularMusic_GroupContainer, SMB2_FAST_MUSIC extends PossibleSMB2_FastMusic_GroupContainer = PossibleSMB2_FastMusic_GroupContainer,
    SMB3_EDITOR_MUSIC extends PossibleSMB3_EditorMusic_GroupContainer = PossibleSMB3_EditorMusic_GroupContainer, SMB3_MUSIC extends PossibleSMB3_RegularMusic_GroupContainer = PossibleSMB3_RegularMusic_GroupContainer, SMB3_FAST_MUSIC extends PossibleSMB3_FastMusic_GroupContainer = PossibleSMB3_FastMusic_GroupContainer,
    SMW_EDITOR_MUSIC extends PossibleSMW_EditorMusic_GroupContainer = PossibleSMW_EditorMusic_GroupContainer, SMW_MUSIC extends PossibleSMW_RegularMusic_GroupContainer = PossibleSMW_RegularMusic_GroupContainer, SMW_YOSHI_SOUND extends PossibleSMW_RegularYoshiSound_GroupContainer = PossibleSMW_RegularYoshiSound_GroupContainer, SMW_FAST_MUSIC extends PossibleSMW_FastMusic_GroupContainer = PossibleSMW_FastMusic_GroupContainer, SMW_FAST_YOSHI_SOUND extends PossibleSMW_FastYoshiSound_GroupContainer = PossibleSMW_FastYoshiSound_GroupContainer,
    NSMBU_EDITOR_MUSIC extends PossibleNSMBU_EditorMusic_GroupContainer = PossibleNSMBU_EditorMusic_GroupContainer, NSMBU_MUSIC extends PossibleNSMBU_RegularMusic_GroupContainer = PossibleNSMBU_RegularMusic_GroupContainer, NSMBU_YOSHI_SOUND extends PossibleNSMBU_RegularYoshiSound_GroupContainer = PossibleNSMBU_RegularYoshiSound_GroupContainer, NSMBU_FAST_MUSIC extends PossibleNSMBU_FastMusic_GroupContainer = PossibleNSMBU_FastMusic_GroupContainer, NSMBU_FAST_YOSHI_SOUND extends PossibleNSMBU_FastYoshiSound_GroupContainer = PossibleNSMBU_FastYoshiSound_GroupContainer,
    SM3DW_EDITOR_MUSIC extends PossibleSM3DW_EditorMusic_GroupContainer = PossibleSM3DW_EditorMusic_GroupContainer, SM3DW_MUSIC extends PossibleSM3DW_RegularMusic_GroupContainer = PossibleSM3DW_RegularMusic_GroupContainer, SM3DW_UNDERWATER_MUSIC extends PossibleSM3DW_UnderwaterMusic_GroupContainer = PossibleSM3DW_UnderwaterMusic_GroupContainer, SM3DW_FAST_MUSIC extends PossibleSM3DW_FastMusic_GroupContainer = PossibleSM3DW_FastMusic_GroupContainer, SM3DW_FAST_UNDERWATER_MUSIC extends PossibleSM3DW_FastUnderwaterMusic_GroupContainer = PossibleSM3DW_FastUnderwaterMusic_GroupContainer, >
    extends Music<readonly MusicSoundFile<Possible_Music>[]> {

    get editorMusic(): SingleBackgroundMusic<SMB_EDITOR_MUSIC, SMB3_EDITOR_MUSIC, SMW_EDITOR_MUSIC, NSMBU_EDITOR_MUSIC, SM3DW_EDITOR_MUSIC>


    get regularMusic(): SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC>

    get linkMusic(): SingleBackgroundMusic<LINK_MUSIC, null, null, null, null>

    get smb2Music(): SingleBackgroundMusic<SMB2_MUSIC, null, null, null, null>

    get underwaterMusic(): SingleBackgroundMusic<null, null, null, null, SM3DW_UNDERWATER_MUSIC>

    get yoshiSound(): SingleBackgroundMusic<null, null, SMW_YOSHI_SOUND, NSMBU_YOSHI_SOUND, null>


    get fastMusic(): SingleBackgroundMusic<SMB_FAST_MUSIC, SMB3_FAST_MUSIC, SMW_FAST_MUSIC, NSMBU_FAST_MUSIC, SM3DW_FAST_MUSIC>

    get fastLinkMusic(): SingleBackgroundMusic<LINK_FAST_MUSIC, null, null, null, null>

    get fastSmb2Music(): SingleBackgroundMusic<SMB2_FAST_MUSIC, null, null, null, null>

    get fastUnderwaterMusic(): SingleBackgroundMusic<null, null, null, null, SM3DW_FAST_UNDERWATER_MUSIC>

    get fastYoshiSound(): SingleBackgroundMusic<null, null, SMW_FAST_YOSHI_SOUND, NSMBU_FAST_YOSHI_SOUND, null>

}

export type PossibleSMB_EditorMusic_GroupContainer = | MusicSoundFile<| PossibleSMB_EditorMusic | PossibleOther_EditorMusic> | null
export type PossibleSMB_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleSMB_RegularMusic | PossibleOther_RegularMusic> | null
export type PossibleSMB_FastMusic_GroupContainer = | MusicSoundFile<| PossibleSMB_FastMusic | PossibleOther_FastMusic> | null

export type PossibleLink_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleLink_RegularMusic | PossibleLink_LinkMusic> | null
export type PossibleLink_FastMusic_GroupContainer = | MusicSoundFile<| PossibleLink_FastMusic | PossibleLink_LinkMusic> | null

export type PossibleSMB2_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleSMB2_RegularMusic | PossibleSMB2_SMB2Music> | null
export type PossibleSMB2_FastMusic_GroupContainer = | MusicSoundFile<| PossibleSMB2_FastMusic | PossibleSMB2_SMB2Music> | null

export type PossibleSMB3_EditorMusic_GroupContainer = | MusicSoundFile<| PossibleSMB3_EditorMusic | PossibleOther_EditorMusic> | null
export type PossibleSMB3_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleSMB3_RegularMusic | PossibleOther_RegularMusic> | null
export type PossibleSMB3_FastMusic_GroupContainer = | MusicSoundFile<| PossibleSMB3_FastMusic | PossibleOther_FastMusic> | null

export type PossibleSMW_EditorMusic_GroupContainer = | MusicSoundFile<| PossibleSMW_EditorMusic | PossibleOther_EditorMusic> | null
export type PossibleSMW_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleSMW_RegularMusic | PossibleOther_RegularMusic> | null
export type PossibleSMW_RegularYoshiSound_GroupContainer = | MusicSoundFile<PossibleSMW_RegularYoshiSound> | null
export type PossibleSMW_FastMusic_GroupContainer = | MusicSoundFile<| PossibleSMW_FastMusic | PossibleOther_FastMusic> | null
export type PossibleSMW_FastYoshiSound_GroupContainer = | MusicSoundFile<PossibleSMW_FastYoshiSound> | null

export type PossibleNSMBU_EditorMusic_GroupContainer = | MusicSoundFile<| PossibleNSMBU_EditorMusic | PossibleOther_EditorMusic> | null
export type PossibleNSMBU_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleNSMBU_RegularMusic | PossibleOther_RegularMusic> | null
export type PossibleNSMBU_RegularYoshiSound_GroupContainer = | MusicSoundFile<PossibleNSMBU_RegularYoshiSound> | null
export type PossibleNSMBU_FastMusic_GroupContainer = | MusicSoundFile<| PossibleNSMBU_FastMusic | PossibleOther_FastMusic> | null
export type PossibleNSMBU_FastYoshiSound_GroupContainer = | MusicSoundFile<PossibleNSMBU_FastYoshiSound> | null

export type PossibleSM3DW_EditorMusic_GroupContainer = | MusicSoundFile<| PossibleSM3DW_EditorMusic | PossibleOther_EditorMusic> | null
export type PossibleSM3DW_RegularMusic_GroupContainer = | MusicSoundFile<| PossibleSM3DW_RegularMusic | PossibleOther_RegularMusic> | null
export type PossibleSM3DW_UnderwaterMusic_GroupContainer = | MusicSoundFile<PossibleSM3DW_RegularUnderwaterMusic> | null
export type PossibleSM3DW_FastMusic_GroupContainer = | MusicSoundFile<| PossibleSM3DW_FastMusic | PossibleOther_FastMusic> | null
export type PossibleSM3DW_FastUnderwaterMusic_GroupContainer = | MusicSoundFile<PossibleSM3DW_FastUnderwaterMusic> | null