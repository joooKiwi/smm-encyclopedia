import type {Possible_Music, PossibleLink_Music, PossibleNSMBU_Music, PossibleNSMBU_YoshiSound, PossibleOther_Music, PossibleSM3DW_Music, PossibleSM3DW_UnderwaterMusic, PossibleSMB2_Music, PossibleSMB3_Music, PossibleSMB_Music, PossibleSMW_Music, PossibleSMW_YoshiSound} from 'core/music/backgroundMusic/types'
import type {MusicSoundFile}                                                                                                                                                                                                                                                   from 'core/music/file/MusicSoundFile'

/**
 * A single "background music" with only the {@link Themes} as the basis.
 *
 * The return value used in {@link SingleBackgroundMusic.all all()} returns the values with the null excluded.
 */
export interface SingleBackgroundMusic<out SMB_MUSIC extends PossibleSMB_Music_SingleContainer = PossibleSMB_Music_SingleContainer,
    out SMB3_MUSIC extends PossibleSMB3_Music_SingleContainer = PossibleSMB3_Music_SingleContainer,
    out SMW_MUSIC extends PossibleSMW_Music_SingleContainer = PossibleSMW_Music_SingleContainer,
    out NSMBU_MUSIC extends PossibleNSMBU_Music_SingleContainer = PossibleNSMBU_Music_SingleContainer,
    out SM3DW_MUSIC extends PossibleSM3DW_Music_SingleContainer = PossibleSM3DW_Music_SingleContainer, > {

    get all(): PossibleMusicArray<readonly [SMB_MUSIC, SMB3_MUSIC, SMW_MUSIC, NSMBU_MUSIC, SM3DW_MUSIC,]>


    get smb(): SMB_MUSIC

    get smb3(): SMB3_MUSIC

    get smw(): SMW_MUSIC

    get nsmbu(): NSMBU_MUSIC

    get sm3dw(): SM3DW_MUSIC

}

export type PossibleSMB_Music_SingleContainer = NullOr<MusicSoundFile<| PossibleSMB_Music | PossibleLink_Music | PossibleSMB2_Music | PossibleOther_Music>>
export type PossibleSMB3_Music_SingleContainer = NullOr<MusicSoundFile<| PossibleSMB3_Music | PossibleOther_Music>>
export type PossibleSMW_Music_SingleContainer = NullOr<MusicSoundFile<| PossibleSMW_Music | PossibleSMW_YoshiSound | PossibleOther_Music>>
export type PossibleNSMBU_Music_SingleContainer = NullOr<MusicSoundFile<| PossibleNSMBU_Music | PossibleNSMBU_YoshiSound | PossibleOther_Music>>
export type PossibleSM3DW_Music_SingleContainer = NullOr<MusicSoundFile<| PossibleSM3DW_Music | PossibleSM3DW_UnderwaterMusic | PossibleOther_Music>>

type PossibleArray = readonly [
    NullOr<MusicSoundFile<Possible_Music>>,
    NullOr<MusicSoundFile<Possible_Music>>,
    NullOr<MusicSoundFile<Possible_Music>>,
    NullOr<MusicSoundFile<Possible_Music>>,
    NullOr<MusicSoundFile<Possible_Music>>,
]
/**
 * The possible music array (with a variable size from 0 to 5)
 * applicable to any possible {@link SingleBackgroundMusic}.
 *
 * @todo convert to maybe a non-null array type (to be created too)
 */
export type PossibleMusicArray<MUSIC extends PossibleArray = PossibleArray, > = readonly [
    ...MUSIC[0] extends null ? [] : [MUSIC[0],],
    ...MUSIC[1] extends null ? [] : [MUSIC[1],],
    ...MUSIC[2] extends null ? [] : [MUSIC[2],],
    ...MUSIC[3] extends null ? [] : [MUSIC[3],],
    ...MUSIC[4] extends null ? [] : [MUSIC[4],],
]
