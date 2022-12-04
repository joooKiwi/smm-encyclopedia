/**
 * The base map (not exported) for every type of music for a "sound effect" or simply for a "background music".
 *
 * It can be from a sound effect that is also a game ({@link SoundEffects.SUPER_MARIO_KART_MUSIC Super Mario Kart}, {@link SoundEffects.SUPER_MARIO_64_MUSIC Super Mario 64},
 * {@link SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC Super Mario Sunshine}, {@link SoundEffects.SUPER_MARIO_GALAXY_MUSIC Super Mario Galaxy}).
 * It also has a possible variant for the {@link SoundEffects.PEACEFUL Peaceful} sound effect.
 * And there is the {@link SoundEffects.BONUS_MUSIC Bonus}, {@link SoundEffects.BOSS_MUSIC Boss} & {@link SoundEffects.FINAL_BOSS_MUSIC Final boss} music that can be used from a sound effect.
 *
 * @todo add GameStyles for the course & world theme
 */
interface MusicTemplateMap {
    'Peaceful': SingleSoundEffectBackgroundMusic<`M1_BGM_${UniqueLinkNameFor<'Healing'>}`, 'BGM_M1_USA_Ending'>

    'Bonus': BackgroundMusic_NSMBUYoshi_SMB2AndLink<'Bonus', UniqueLinkNameFor<'Bonus'>, UniqueLinkNameFor<'Bonus'>, UniqueSMB2NameFor<'CharacterSelect'>>
    'Boss': BackgroundMusic_SMB2AndLink<'Boss', 'Link_Boss', 'Link_Boss_', UniqueSMB2NameFor<'Boss'>>
    'Final Boss': BackgroundMusic_SMBAsSMB3_SMWIcon_SMB2AndLink<'LastBoss', 'Link_LastBoss', 'Link_LastBoss_', 'USA_LastBoss'>
    'Super Mario Kart': SimpleBackgroundMusic<'SFCMarioKart', 'Circuit'>
    'Super Mario 64': SimpleBackgroundMusic<'SuperMario64', 'Slider'>
    'Super Mario Sunshine': SimpleBackgroundMusic<'MarioSunshine', 'DolphicTown'>
    'Super Mario Galaxy': SimpleBackgroundMusic<'MarioGalaxy', 'WindGarden'>
}

//region -------------------- Internal types --------------------

interface BackgroundMusicFromAGameStyle<EDITOR extends string, REGULAR extends string, FAST extends string, > {
    editor: EDITOR
    regular: REGULAR
    fast: FAST
}

type BackgroundMusicFromAGameStyleWithSameEditorAsRegular<REGULAR extends string, FAST extends string, > = BackgroundMusicFromAGameStyle<REGULAR, REGULAR, FAST>


type AnyBackgroundMusicInSMB<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`M1_BGM_Otoasobi_${UNIQUE_NAME}`, `M1_BGM_Otoasobi_${UNIQUE_NAME}Hurry`>
type AnyBackgroundMusicInSMB_Link<LINK_UNIQUE_NAME extends string, FAST_LINK_UNIQUE_NAME extends string, > = readonly [`M1_BGM_${LINK_UNIQUE_NAME}`, `M1_BGM_${FAST_LINK_UNIQUE_NAME}Hurry`,]
type AnyBackgroundMusicInSMB_SMB2<SMB2_UNIQUE_NAME extends string, > = readonly [`BGM_M1_${SMB2_UNIQUE_NAME}`, `BGM_M1_${SMB2_UNIQUE_NAME}_hurry`,]

type AnyBackgroundMusicInSMB3<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`M3_BGM_Otoasobi_${UNIQUE_NAME}`, `M3_BGM_Otoasobi_${UNIQUE_NAME}Hurry`>

type AnyBackgroundMusicInSMW<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`MW_BGM_Otoasobi_${UNIQUE_NAME}`, `MW_BGM_Otoasobi_${UNIQUE_NAME}Hurry`>
type AnyBackgroundMusicInSMWWithIcon<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyle<`MW_BGM_Otoasobi_${UNIQUE_NAME}Icon`, AnyBackgroundMusicInSMW<UNIQUE_NAME>['regular'], AnyBackgroundMusicInSMW<UNIQUE_NAME>['fast']>

type AnyBackgroundMusicInNSMBU<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`WU_BGM_Otoasobi_${UNIQUE_NAME}`, `WU_BGM_Otoasobi_${UNIQUE_NAME}Hurry`>
type AnyBackgroundMusicInNSMBU_NoYoshi<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`WU_BGM_Otoasobi_${UNIQUE_NAME} - Track 1`, `WU_BGM_Otoasobi_${UNIQUE_NAME}Hurry - Track 1`>
type AnyBackgroundMusicInNSMBU_Yoshi<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`WU_BGM_Otoasobi_${UNIQUE_NAME} - Track 2`, `WU_BGM_Otoasobi_${UNIQUE_NAME}Hurry - Track 2`>

type AnyBackgroundMusicInSM3DW<UNIQUE_NAME extends string, > = BackgroundMusicFromAGameStyleWithSameEditorAsRegular<`3W_BGM_Otoasobi_${UNIQUE_NAME}`, `3W_BGM_Otoasobi_${UNIQUE_NAME}Hurry`>


type UniqueLinkNameFor<UNIQUE_NAME extends string, > = `Otoasobi_Link_${UNIQUE_NAME}`
type UniqueSMB2NameFor<UNIQUE_NAME extends string, > = `USA_${UNIQUE_NAME}`


interface BackgroundMusic_SMB2AndLink<UNIQUE_NAME extends string, LINK_UNIQUE_NAME extends string, FAST_LINK_UNIQUE_NAME extends string, SMB2_UNIQUE_NAME extends string = UniqueSMB2NameFor<UNIQUE_NAME>, > {
    editor: never
    regular: never
    fast: never

    smb: AnyBackgroundMusicInSMB<UNIQUE_NAME>
    link: AnyBackgroundMusicInSMB_Link<LINK_UNIQUE_NAME, FAST_LINK_UNIQUE_NAME>
    smb2: AnyBackgroundMusicInSMB_SMB2<SMB2_UNIQUE_NAME>
    smb3: AnyBackgroundMusicInSMB3<UNIQUE_NAME>
    smw: AnyBackgroundMusicInSMW<UNIQUE_NAME>
    'smw (yoshi)': never
    nsmbu: AnyBackgroundMusicInNSMBU<UNIQUE_NAME>
    'nsmbu (yoshi)': never
    sm3dw: AnyBackgroundMusicInSM3DW<UNIQUE_NAME>
    'sm3dw (underwater)': never
}

interface BackgroundMusic_NSMBUYoshi_SMB2AndLink<UNIQUE_NAME extends string, LINK_UNIQUE_NAME extends string, FAST_LINK_UNIQUE_NAME extends string, SMB2_UNIQUE_NAME extends string, > {
    editor: never
    regular: never
    fast: never

    smb: AnyBackgroundMusicInSMB<UNIQUE_NAME>
    link: AnyBackgroundMusicInSMB_Link<LINK_UNIQUE_NAME, FAST_LINK_UNIQUE_NAME>
    smb2: AnyBackgroundMusicInSMB_SMB2<SMB2_UNIQUE_NAME>
    smb3: AnyBackgroundMusicInSMB3<UNIQUE_NAME>
    smw: AnyBackgroundMusicInSMW<UNIQUE_NAME>
    'smw (yoshi)': never
    nsmbu: AnyBackgroundMusicInNSMBU_NoYoshi<UNIQUE_NAME>
    'nsmbu (yoshi)': AnyBackgroundMusicInNSMBU_Yoshi<UNIQUE_NAME>
    sm3dw: AnyBackgroundMusicInSM3DW<UNIQUE_NAME>
    'sm3dw (underwater)': never
}

interface BackgroundMusic_SMBAsSMB3_SMWIcon_SMB2AndLink<UNIQUE_NAME extends string, LINK_UNIQUE_NAME extends string, FAST_LINK_UNIQUE_NAME extends string, SMB2_UNIQUE_NAME extends string, > {
    editor: never
    regular: never
    fast: never

    smb: AnyBackgroundMusicInSMB3<UNIQUE_NAME>
    link: AnyBackgroundMusicInSMB_Link<LINK_UNIQUE_NAME, FAST_LINK_UNIQUE_NAME>
    smb2: AnyBackgroundMusicInSMB_SMB2<SMB2_UNIQUE_NAME>
    smb3: AnyBackgroundMusicInSMB3<UNIQUE_NAME>
    smw: AnyBackgroundMusicInSMWWithIcon<UNIQUE_NAME>
    'smw (yoshi)': never
    nsmbu: AnyBackgroundMusicInNSMBU<UNIQUE_NAME>
    'nsmbu (yoshi)': never
    sm3dw: AnyBackgroundMusicInSM3DW<UNIQUE_NAME>
    'sm3dw (underwater)': never
}

interface SingleSoundEffectBackgroundMusic<LINK_UNIQUE_NAME extends string, SMB2_UNIQUE_NAME extends string, > {
    editor: never
    regular: never
    fast: never

    smb: never
    link: LINK_UNIQUE_NAME
    smb2: SMB2_UNIQUE_NAME
    smb3: never
    smw: never
    'smw (yoshi)': never
    nsmbu: never
    'nsmbu (yoshi)': never
    sm3dw: never
    'sm3dw (underwater)': never
}

interface SimpleBackgroundMusic<UNIQUE_NAME_PART_1 extends string, UNIQUE_NAME_PART_2 extends string, > {
    editor: this['regular']
    regular: `BGM_Otoasobi_${UNIQUE_NAME_PART_1}_${UNIQUE_NAME_PART_2}`
    fast: `BGM_Otoasobi_${UNIQUE_NAME_PART_1}Hurry_${UNIQUE_NAME_PART_2}`

    smb: never
    link: never
    smb2: never
    smb3: never
    smw: never
    'smw (yoshi)': never
    nsmbu: never
    'nsmbu (yoshi)': never
    sm3dw: never
    'sm3dw (underwater)': never
}

//endregion -------------------- Internal types --------------------
//region -------------------- External types --------------------

export type Possible_Music = | Possible_EditorMusic | Possible_RegularMusic | Possible_FastMusic
export type Possible_EditorMusic = | PossibleSMB_EditorMusic
                                   | PossibleSMB3_EditorMusic
                                   | PossibleSMW_EditorMusic
                                   | PossibleNSMBU_EditorMusic
                                   | PossibleSM3DW_EditorMusic
                                   | PossibleOther_EditorMusic
export type Possible_RegularMusic = | PossibleSMB_RegularMusic | PossibleLink_RegularMusic | PossibleLink_LinkMusic | PossibleSMB2_RegularMusic | PossibleSMB2_SMB2Music
                                    | PossibleSMB3_RegularMusic
                                    | PossibleSMW_RegularMusic | PossibleSMW_RegularYoshiSound
                                    | PossibleNSMBU_RegularMusic | PossibleNSMBU_RegularYoshiSound
                                    | PossibleSM3DW_RegularMusic | PossibleSM3DW_RegularUnderwaterMusic
                                    | PossibleOther_RegularMusic
export type Possible_FastMusic = | PossibleSMB_FastMusic | PossibleLink_FastMusic | PossibleSMB2_FastMusic
                                 | PossibleSMB3_FastMusic
                                 | PossibleSMW_FastMusic | PossibleSMW_FastYoshiSound
                                 | PossibleNSMBU_FastMusic | PossibleNSMBU_FastYoshiSound
                                 | PossibleSM3DW_FastMusic | PossibleSM3DW_FastUnderwaterMusic
                                 | PossibleOther_FastMusic


type _GetFromRegularBackgroundMusic<GAME extends | 'smb' | 'link' | 'smb2' | 'smb3' | `${| 'smw' | 'nsmbu'}${| '' | ' (yoshi)'}` | `sm3dw${| '' | ' (underwater)'}`, > = MusicTemplateMap[| 'Bonus' | 'Boss' | 'Final Boss'][GAME]

export type PossibleSMB_Music = | PossibleSMB_EditorMusic | PossibleSMB_RegularMusic | PossibleSMB_FastMusic
export type PossibleSMB_EditorMusic = _GetFromRegularBackgroundMusic<'smb'>['editor']
export type PossibleSMB_RegularMusic = _GetFromRegularBackgroundMusic<'smb'>['regular']
export type PossibleSMB_FastMusic = _GetFromRegularBackgroundMusic<'smb'>['fast']

export type PossibleLink_Music = | PossibleLink_RegularMusic | PossibleLink_LinkMusic | PossibleLink_FastMusic
export type PossibleLink_RegularMusic = _GetFromRegularBackgroundMusic<'link'>[0]
export type PossibleLink_LinkMusic = MusicTemplateMap['Peaceful']['link']
export type PossibleLink_FastMusic = _GetFromRegularBackgroundMusic<'link'>[1]

export type PossibleSMB2_Music = | PossibleSMB2_RegularMusic | PossibleSMB2_SMB2Music | PossibleSMB2_FastMusic
export type PossibleSMB2_RegularMusic = _GetFromRegularBackgroundMusic<'smb2'>[0]
export type PossibleSMB2_SMB2Music = MusicTemplateMap['Peaceful']['smb2']
export type PossibleSMB2_FastMusic = _GetFromRegularBackgroundMusic<'smb2'>[1]

export type PossibleSMB3_Music = | PossibleSMB3_EditorMusic | PossibleSMB3_RegularMusic | PossibleSMB3_FastMusic
export type PossibleSMB3_EditorMusic = _GetFromRegularBackgroundMusic<'smb3'>['editor']
export type PossibleSMB3_RegularMusic = _GetFromRegularBackgroundMusic<'smb3'>['regular']
export type PossibleSMB3_FastMusic = _GetFromRegularBackgroundMusic<'smb3'>['fast']

export type PossibleSMW_Music = | PossibleSMW_EditorMusic | PossibleSMW_RegularMusic | PossibleSMW_FastMusic
export type PossibleSMW_YoshiSound = | PossibleSMW_RegularYoshiSound | PossibleSMW_FastYoshiSound
export type PossibleSMW_EditorMusic = _GetFromRegularBackgroundMusic<'smw'>['editor']
export type PossibleSMW_RegularMusic = _GetFromRegularBackgroundMusic<'smw'>['regular']
export type PossibleSMW_RegularYoshiSound = _GetFromRegularBackgroundMusic<'smw (yoshi)'>['regular']
export type PossibleSMW_FastMusic = _GetFromRegularBackgroundMusic<'smw'>['fast']
export type PossibleSMW_FastYoshiSound = _GetFromRegularBackgroundMusic<'smw (yoshi)'>['fast']

export type PossibleNSMBU_Music = | PossibleNSMBU_EditorMusic | PossibleNSMBU_RegularMusic | PossibleNSMBU_FastMusic
export type PossibleNSMBU_YoshiSound = | PossibleNSMBU_RegularYoshiSound | PossibleNSMBU_FastYoshiSound
export type PossibleNSMBU_EditorMusic = _GetFromRegularBackgroundMusic<'nsmbu'>['editor']
export type PossibleNSMBU_RegularMusic = _GetFromRegularBackgroundMusic<'nsmbu'>['regular']
export type PossibleNSMBU_RegularYoshiSound = _GetFromRegularBackgroundMusic<'nsmbu (yoshi)'>['regular']
export type PossibleNSMBU_FastMusic = _GetFromRegularBackgroundMusic<'nsmbu'>['fast']
export type PossibleNSMBU_FastYoshiSound = _GetFromRegularBackgroundMusic<'nsmbu (yoshi)'>['fast']

export type PossibleSM3DW_Music = | PossibleSM3DW_EditorMusic | PossibleSM3DW_RegularMusic | PossibleSM3DW_FastMusic
export type PossibleSM3DW_UnderwaterMusic = | PossibleSM3DW_RegularUnderwaterMusic | PossibleSM3DW_FastUnderwaterMusic
export type PossibleSM3DW_EditorMusic = _GetFromRegularBackgroundMusic<'sm3dw'>['editor']
export type PossibleSM3DW_RegularMusic = _GetFromRegularBackgroundMusic<'sm3dw'>['regular']
export type PossibleSM3DW_RegularUnderwaterMusic = _GetFromRegularBackgroundMusic<'sm3dw (underwater)'>['regular']
export type PossibleSM3DW_FastMusic = _GetFromRegularBackgroundMusic<'sm3dw'>['fast']
export type PossibleSM3DW_FastUnderwaterMusic = _GetFromRegularBackgroundMusic<'sm3dw (underwater)'>['fast']


type OtherMusicName = `Super Mario ${| 'Kart' | 64 | 'Sunshine' | 'Galaxy'}`
export type PossibleOther_Music = | PossibleOther_EditorMusic | PossibleOther_RegularMusic | PossibleOther_FastMusic
export type PossibleOther_EditorMusic = MusicTemplateMap[OtherMusicName]['editor']
export type PossibleOther_RegularMusic = MusicTemplateMap[OtherMusicName]['regular']
export type PossibleOther_FastMusic = MusicTemplateMap[OtherMusicName]['fast']

//endregion -------------------- External types --------------------
