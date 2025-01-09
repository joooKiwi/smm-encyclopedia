import type {Array, NullOr} from '@joookiwi/type'

import type {Music}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/music/Music'
import type {SingleBackgroundMusic}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from 'core/music/backgroundMusic/SingleBackgroundMusic'
import type {Possible_Music, PossibleLink_FastMusic, PossibleLink_LinkMusic, PossibleLink_RegularMusic, PossibleNSMBU_EditorMusic, PossibleNSMBU_FastMusic, PossibleNSMBU_FastYoshiSound, PossibleNSMBU_RegularMusic, PossibleNSMBU_RegularYoshiSound, PossibleOther_EditorMusic, PossibleOther_FastMusic, PossibleOther_RegularMusic, PossibleSM3DW_EditorMusic, PossibleSM3DW_FastMusic, PossibleSM3DW_FastUnderwaterMusic, PossibleSM3DW_RegularMusic, PossibleSM3DW_RegularUnderwaterMusic, PossibleSMB2_FastMusic, PossibleSMB2_RegularMusic, PossibleSMB2_SMB2Music, PossibleSMB3_EditorMusic, PossibleSMB3_FastMusic, PossibleSMB3_RegularMusic, PossibleSMB_EditorMusic, PossibleSMB_FastMusic, PossibleSMB_RegularMusic, PossibleSMW_EditorMusic, PossibleSMW_FastMusic, PossibleSMW_FastYoshiSound, PossibleSMW_RegularMusic, PossibleSMW_RegularYoshiSound} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           from 'core/music/file/MusicSoundFile'

/** @deprecated The use of {@link Tracks} should be used instead */
export interface BackgroundMusic<out SMB_EDITOR_MUSIC extends PossibleSMB_EditorMusic_GroupContainer = PossibleSMB_EditorMusic_GroupContainer,
    out SMB_MUSIC extends PossibleSMB_RegularMusic_GroupContainer = PossibleSMB_RegularMusic_GroupContainer,
    out SMB_FAST_MUSIC extends PossibleSMB_FastMusic_GroupContainer = PossibleSMB_FastMusic_GroupContainer,
    out LINK_MUSIC extends PossibleLink_RegularMusic_GroupContainer = PossibleLink_RegularMusic_GroupContainer,
    out LINK_FAST_MUSIC extends PossibleLink_FastMusic_GroupContainer = PossibleLink_FastMusic_GroupContainer,
    out SMB2_MUSIC extends PossibleSMB2_RegularMusic_GroupContainer = PossibleSMB2_RegularMusic_GroupContainer,
    out SMB2_FAST_MUSIC extends PossibleSMB2_FastMusic_GroupContainer = PossibleSMB2_FastMusic_GroupContainer,
    out SMB3_EDITOR_MUSIC extends PossibleSMB3_EditorMusic_GroupContainer = PossibleSMB3_EditorMusic_GroupContainer,
    out SMB3_MUSIC extends PossibleSMB3_RegularMusic_GroupContainer = PossibleSMB3_RegularMusic_GroupContainer,
    out SMB3_FAST_MUSIC extends PossibleSMB3_FastMusic_GroupContainer = PossibleSMB3_FastMusic_GroupContainer,
    out SMW_EDITOR_MUSIC extends PossibleSMW_EditorMusic_GroupContainer = PossibleSMW_EditorMusic_GroupContainer,
    out SMW_MUSIC extends PossibleSMW_RegularMusic_GroupContainer = PossibleSMW_RegularMusic_GroupContainer,
    out SMW_YOSHI_SOUND extends PossibleSMW_RegularYoshiSound_GroupContainer = PossibleSMW_RegularYoshiSound_GroupContainer,
    out SMW_FAST_MUSIC extends PossibleSMW_FastMusic_GroupContainer = PossibleSMW_FastMusic_GroupContainer,
    out SMW_FAST_YOSHI_SOUND extends PossibleSMW_FastYoshiSound_GroupContainer = PossibleSMW_FastYoshiSound_GroupContainer,
    out NSMBU_EDITOR_MUSIC extends PossibleNSMBU_EditorMusic_GroupContainer = PossibleNSMBU_EditorMusic_GroupContainer,
    out NSMBU_MUSIC extends PossibleNSMBU_RegularMusic_GroupContainer = PossibleNSMBU_RegularMusic_GroupContainer,
    out NSMBU_YOSHI_SOUND extends PossibleNSMBU_RegularYoshiSound_GroupContainer = PossibleNSMBU_RegularYoshiSound_GroupContainer,
    out NSMBU_FAST_MUSIC extends PossibleNSMBU_FastMusic_GroupContainer = PossibleNSMBU_FastMusic_GroupContainer,
    out NSMBU_FAST_YOSHI_SOUND extends PossibleNSMBU_FastYoshiSound_GroupContainer = PossibleNSMBU_FastYoshiSound_GroupContainer,
    out SM3DW_EDITOR_MUSIC extends PossibleSM3DW_EditorMusic_GroupContainer = PossibleSM3DW_EditorMusic_GroupContainer,
    out SM3DW_MUSIC extends PossibleSM3DW_RegularMusic_GroupContainer = PossibleSM3DW_RegularMusic_GroupContainer,
    out SM3DW_UNDERWATER_MUSIC extends PossibleSM3DW_UnderwaterMusic_GroupContainer = PossibleSM3DW_UnderwaterMusic_GroupContainer,
    out SM3DW_FAST_MUSIC extends PossibleSM3DW_FastMusic_GroupContainer = PossibleSM3DW_FastMusic_GroupContainer,
    out SM3DW_FAST_UNDERWATER_MUSIC extends PossibleSM3DW_FastUnderwaterMusic_GroupContainer = PossibleSM3DW_FastUnderwaterMusic_GroupContainer, >
    extends Music<Array<MusicSoundFile<Possible_Music>>> {

    readonly editorMusic: SingleBackgroundMusic<SMB_EDITOR_MUSIC, SMB3_EDITOR_MUSIC, SMW_EDITOR_MUSIC, NSMBU_EDITOR_MUSIC, SM3DW_EDITOR_MUSIC>

    readonly regularMusic: SingleBackgroundMusic<SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC>
    readonly linkMusic: SingleBackgroundMusic<LINK_MUSIC, null, null, null, null>
    readonly smb2Music: SingleBackgroundMusic<SMB2_MUSIC, null, null, null, null>
    readonly underwaterMusic: SingleBackgroundMusic<null, null, null, null, SM3DW_UNDERWATER_MUSIC>
    readonly yoshiSound: SingleBackgroundMusic<null, null, SMW_YOSHI_SOUND, NSMBU_YOSHI_SOUND, null>

    readonly fastMusic: SingleBackgroundMusic<SMB_FAST_MUSIC, SMB3_FAST_MUSIC, SMW_FAST_MUSIC, NSMBU_FAST_MUSIC, SM3DW_FAST_MUSIC>
    readonly fastLinkMusic: SingleBackgroundMusic<LINK_FAST_MUSIC, null, null, null, null>
    readonly fastSmb2Music: SingleBackgroundMusic<SMB2_FAST_MUSIC, null, null, null, null>
    readonly fastUnderwaterMusic: SingleBackgroundMusic<null, null, null, null, SM3DW_FAST_UNDERWATER_MUSIC>
    readonly fastYoshiSound: SingleBackgroundMusic<null, null, SMW_FAST_YOSHI_SOUND, NSMBU_FAST_YOSHI_SOUND, null>

}

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB_EditorMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB_EditorMusic | PossibleOther_EditorMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB_RegularMusic | PossibleOther_RegularMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB_FastMusic | PossibleOther_FastMusic>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleLink_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleLink_RegularMusic | PossibleLink_LinkMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleLink_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleLink_FastMusic | PossibleLink_LinkMusic>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB2_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB2_RegularMusic | PossibleSMB2_SMB2Music>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB2_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB2_FastMusic | PossibleSMB2_SMB2Music>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB3_EditorMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB3_EditorMusic | PossibleOther_EditorMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB3_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB3_RegularMusic | PossibleOther_RegularMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMB3_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMB3_FastMusic | PossibleOther_FastMusic>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMW_EditorMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMW_EditorMusic | PossibleOther_EditorMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMW_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMW_RegularMusic | PossibleOther_RegularMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMW_RegularYoshiSound_GroupContainer = NullOr<MusicSoundFile<PossibleSMW_RegularYoshiSound>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMW_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSMW_FastMusic | PossibleOther_FastMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSMW_FastYoshiSound_GroupContainer = NullOr<MusicSoundFile<PossibleSMW_FastYoshiSound>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleNSMBU_EditorMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleNSMBU_EditorMusic | PossibleOther_EditorMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleNSMBU_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleNSMBU_RegularMusic | PossibleOther_RegularMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleNSMBU_RegularYoshiSound_GroupContainer = NullOr<MusicSoundFile<PossibleNSMBU_RegularYoshiSound>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleNSMBU_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleNSMBU_FastMusic | PossibleOther_FastMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleNSMBU_FastYoshiSound_GroupContainer = NullOr<MusicSoundFile<PossibleNSMBU_FastYoshiSound>>

/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSM3DW_EditorMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSM3DW_EditorMusic | PossibleOther_EditorMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSM3DW_RegularMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSM3DW_RegularMusic | PossibleOther_RegularMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSM3DW_UnderwaterMusic_GroupContainer = NullOr<MusicSoundFile<PossibleSM3DW_RegularUnderwaterMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSM3DW_FastMusic_GroupContainer = NullOr<MusicSoundFile<| PossibleSM3DW_FastMusic | PossibleOther_FastMusic>>
/** @deprecated The use of {@link Tracks} should be used instead */export type PossibleSM3DW_FastUnderwaterMusic_GroupContainer = NullOr<MusicSoundFile<PossibleSM3DW_FastUnderwaterMusic>>
