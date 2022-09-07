import type {PossibleEnglishName} from '../SoundEffects.types';
import type {BasePath}            from '../../../variables';

interface SoundEffectSoundTemplateMap_SMM1Exclusive {

    'Shock': SoundEffectSound_NoEditor<['yr_SToy_01_OssanOdoroki_L_pxsps_l_ear', 'yr_SToy_01_OssanOdoroki_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Shock']
    'Scream': SoundEffectSound_NoEditor<['yr_SToy_01_OssanHimei4_L_pxsps_l_ear', 'yr_SToy_01_OssanHimei4_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Scream']
    'Laughter': SoundEffectSound_NoEditor<['yr_v_Laugh_Tsuji_01_pxsps_l_ear', 'yr_v_Laugh_Tsuji_02_pxsps_r_ear', 'yr_v_Laugh_Tsuji_03_pxsps_l_ear', 'yr_v_Laugh_Tsuji_04_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Laughter']
    'Guffaw': never
    'Booo!': never
    'Cheer': SoundEffectSound_Editor1<['SE_DaigunshuShort', 'SE_daikansei_3d',]>
    'Baby': SoundEffectSound_NoEditor<['SE_Affun_outL_type4_invF_Rmic', 'SE_Affun_outR_type4_invF_Rmic',]>//SoundEffectSoundTemplateMap_All['Baby']
    'Party Popper': never
    'Applause': SoundEffectSound_Editor1<['SE_KANSEI', 'SE_KANSEI_pxsps_l_ear', 'SE_KANSEI_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Applause']
    'Near Miss': never

    'Clatter': SoundEffectSound_NoEditor<['yr_SToy_02_destruction01_2D_L_pxsps_l_ear', 'yr_SToy_02_destruction01_3D_L_pxsps_l_ear', 'yr_SToy_02_destruction01_3D_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Clatter']
    'Drama!': SoundEffectSound_NoEditor<['yr_SToy_02_shocking4_2D_L_pxsps_l_ear', 'yr_SToy_02_shocking4_3D_L_pxsps_l_ear', 'yr_SToy_02_shocking4_3D_R_pxsps_r_ear',]>
    'Kick': SoundEffectSound_NoEditor<['yr_SToy_03_Aw_3D_L_pxsps_l_ear', 'yr_SToy_03_Aw_3D_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Kick']
    'Jump': SoundEffectSound_NoEditor<['yr_SToy_03_How_3D_L_pxsps_r_ear', 'yr_SToy_03_How_3D_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Jump']
    'Honk Honk': SoundEffectSound_NoEditor<['bse_pafu00_e.a.44.cn4_pxsps_l_ear', 'bse_pafu00_e.a.44.cn4_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Honk Honk']
    'Punch': SoundEffectSound_NoEditor<['SE_Punch3_pxsps_r_ear', 'SE_Punch4_pxsps_l_ear', 'bse_cat00_pxsps_r_ear',]>
    'Oink': never
    'Kuh-thunk!': never
    'Beep!': never
    'Ninja Attack!': never
    'Zap!': never

    'Ding Dong': SoundEffectSound_NoEditor<['SE_BELL_pxsps_l_ear', 'SE_BELL_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Ding Dong']
    'Bzzzt!': SoundEffectSound_NoEditor<['SE_BU_pxsps_l_ear', 'SE_BU_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Bzzzt!']
    'Glory': SoundEffectSound_NoEditor<['yr_SToy_06_Godd_01_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Glory']
    'Doom': SoundEffectSound_NoEditor<['yr_SToy_06_Devil_01_pxsps_l_ear',]>//SoundEffectSoundTemplateMap_All['Doom']
    'Yeah!': never
    'Aww...': never

    'Fireworks': SoundEffectSound_NoEditor<['yr_SToy_07_FireWorks_01_1_pxsps_r_ear', 'yr_SToy_07_FireWorks_01_2_pxsps_l_ear',]>//SoundEffectSoundTemplateMap_All['Fireworks']
    'Audience': never
    'Scatting': never
    'Bird\'s Chirping': SoundEffectSound_Editor2<['SE_UGUISU', 'SE_UGUISU_Edit', 'SE_UGUISU_pxsps_r_ear',]>
    'Spark': never
    'Traditional': never
    'Electric Guitar': never
    'Distortion': SoundEffectSound_Editor3<['yr_TaoeDown_01', 'yr_SToy_13_Sweep_01', 'yr_SToy_13_Sweep_01_l_ear', 'yr_SToy_13_Sweep_01_r_ear', 'yr_Sweep_Up_01',]>
    'Twisty Turny': never
    'Woozy': never
    'Telephone': SoundEffectSound_Editor10<SoundEffectSoundNamesForTelephone>
    'Flash': never

    'Peaceful': never
    'Horror': never
    'Festive Music': SoundEffectSound_Editor2<['SE_SAMBA_3D_Perc', 'SE_Samba3',]>
    'Rave Music': SoundEffectSound_Editor2<['SE_Disco6measure', 'SE_Disco6measure_InUp2',]>
    'Heartbeat': SoundEffectSound_NoEditor<['yr_SToy_04_HeartBeat_H_L_pxsps_l_ear', 'yr_SToy_04_HeartBeat_H_R_pxsps_r_ear',]>//SoundEffectSoundTemplateMap_All['Heartbeat']
    'Silence': SoundEffectSound_Editor1<['yr_NOISE_short_1', 'yr_NOISE_short_1_pxsps_l_ear', 'yr_NOISE_short_2', 'yr_NOISE_short_2_pxsps_r_ear', 'yr_NOISE_short_3', 'yr_NOISE_short_3_pxsps_l_ear',]>
    'Bird\'s Tweeting Noise': SoundEffectSound_Editor1<['hz_inco_1_removed1s50per', 'hz_inco_1_L_pxsps_l_ear', 'hz_inco_1_R_pxsps_r_ear',]>
    'Chicken\'s Clucking Noise': SoundEffectSound_Editor1<['yr_SToy_14_Bird_B_01', 'yr_SToy_14_Bird_B_L_pxsps_l_ear', 'yr_SToy_14_Bird_B_R_pxsps_r_ear',]>
    'Bonus Music': never
    'Boss Music': never
    'Final Boss': never
    'Super Mario Kart': never
    'Super Mario 64': never
    'Super Mario Sunshine': never
    'Super Mario Galaxy': never,

}

interface SoundEffectSoundTemplateMap_SMM2Exclusive {

    'Shock': SingleSoundEffectSound<'SE_OssanOdoroki'>
    'Scream': SingleSoundEffectSound<'SE_OssanHimei4'>
    'Laughter': SoundEffectSound_Editor5<['yr_Air_01', 'yr_v_Laugh_Tsuji_01', 'yr_v_Laugh_Tsuji_02', 'yr_v_Laugh_Tsuji_03', 'yr_v_Laugh_Tsuji_04',]>
    'Guffaw': SoundEffectSound_Editor7<['se_otoasobi_oowarai_00', 'se_otoasobi_oowarai_01', 'se_otoasobi_oowarai_02', 'se_otoasobi_oowarai_03', 'se_otoasobi_oowarai_04', 'se_otoasobi_oowarai_05', 'se_otoasobi_oowarai_06', 'se_otoasobi_oowarai_07',]>
    'Booo!': SingleSoundEffectSound<'Otoasobi_Booing01'>
    'Cheer': SoundEffectSound_Editor2<['Otoasobi_Crowd_yubibue', 'Otoasobi_Crowd_donpafu',]>
    'Baby': SoundEffectSound_Editor1<['SE_Affun', 'se_otoasobi_affun_night',]>//TODO add the other variation
    'Party Popper': SingleSoundEffectSound<'Otoasobi_Cracker'>
    'Applause': SingleSoundEffectSound<'Otoasobi_Crap'>
    'Near Miss': SoundEffectSound_Editor2<['se_otoasobi_hiyarihat_07_edit', 'se_otoasobi_hiyarihat_07',]>

    'Clatter': SoundEffectSound_Editor1<['yr_SToy_02_destruction01_2D_L_pxsps_l_ear', 'se_otoasobi_hachoo',]>
    'Drama!': SingleSoundEffectSound<'se_otoasobi_gagaaan'>
    'Kick': SingleSoundEffectSound<'yr_SToy_03_Aw_2D'>
    'Jump': SingleSoundEffectSound<'yr_SToy_03_How_2D'>
    'Honk Honk': SoundEffectSound_Editor1<['bse_pafu00.a.44.cn4', 'bse_pafu00_e.44.cn4',]>
    'Punch': SoundEffectSound_Editor2<['SE_Punch3_excited', 'SE_Punch4', 'SE_Punch4_excited',]>
    'Oink': SoundEffectSound_Editor1<['se_otoasobi_oimo', 'se_mariopaint-pig', 'se_otoasobi_whoopee_0',]>
    'Kuh-thunk!': SingleSoundEffectSound<'Otoasobi_dodon'>
    'Beep!': SoundEffectSound_Editor1<['glitch_M1_000', 'glitch_M1_001', 'glitch_M1_002', 'glitch_M1_003', 'glitch_M1_004', 'glitch_M1_005', 'glitch_M1_006', 'glitch_M1_007', 'muon_2sec',]>
    'Ninja Attack!': never
    'Zap!': SingleSoundEffectSound<'se_otoasobi_gaaann'>

    'Ding Dong': SoundEffectSound_Editor1_Link3<['SE_BELL', 'SE_BELL_excited', 'SE_LinkItemAppear',]>
    'Bzzzt!': SoundEffectSound_Editor1<['SE_BU=', 'SE_BU=_excited',]>
    'Glory': SingleSoundEffectSound<'yr_SToy_06_Godd_01'>
    'Doom': SingleSoundEffectSound<'yr_SToy_06_Devil_01'>
    'Yeah!': SingleSoundEffectSound<'Otoasobi_YEAH'>
    'Aww...': SingleSoundEffectSound<'Otoasobi_AAHH'>

    'Fireworks': SoundEffectSound_Editor1<['yr_SToy_07_FireWorks_01', 'yr_SToy_07_FireWorks_01_1', 'yr_SToy_07_FireWorks_01_2',]>
    'Audience': never
    'Scatting': never
    'Bird\'s Chirping': NoSoundEffectSound
    'Spark': SoundEffectSound_Editor3<['se_otoasobi_spark_00', 'se_otoasobi_spark_01', 'se_otoasobi_spark_02', 'se_otoasobi_spark_03', 'se_otoasobi_spark_04',]>
    'Traditional': never
    'Electric Guitar': SoundEffectSound_Editor1<['Otoasobi_Guitar01', 'Otoasobi_Guitar02',]>
    'Distortion': NoSoundEffectSound
    'Twisty Turny': SoundEffectSound_Editor1<SoundEffectSoundNamesForTwistyTurnyAndWoozy>
    'Woozy': SoundEffectSound_Editor5<SoundEffectSoundNamesForTwistyTurnyAndWoozy>
    'Telephone': NoSoundEffectSound
    'Flash': SingleSoundEffectSound<'se_otoasobi_haloeffect'>

    'Peaceful': SoundEffectSound_Editor1<SoundEffectSoundNamesForPeaceful>//SoundEffectSound<SoundEffectSoundNamesForPeaceful, 'Otoasobi_Calm_Hit_01', ['M1_BGM_Otoasobi_Link_Healing',], ['BGM_M1_USA_Ending',]>
    'Horror': SoundEffectSound_Editor2<SoundEffectSoundNamesForHorror>
    'Festive Music': NoSoundEffectSound
    'Rave Music': NoSoundEffectSound
    'Heartbeat': SoundEffectSound_Editor1<['yr_SToy_04_HeartBeat_p1', 'yr_SToy_04_HeartBeat_p2', 'yr_SToy_04_HeartBeat_p3',]>
    'Silence': SingleSoundEffectSound<'se_otoasobi_silence'>
    'Bird\'s Tweeting Noise': NoSoundEffectSound
    'Chicken\'s Clucking Noise': NoSoundEffectSound
    'Bonus Music': never
    'Boss Music': never
    'Final Boss': never
    'Super Mario Kart': never
    'Super Mario 64': never
    'Super Mario Sunshine': never
    'Super Mario Galaxy': never,

}

//TODO add the unused sound effects

//region -------------------- Name for ... --------------------

type SoundEffectSoundNamesForTelephone = readonly [
    'yr_SToy_11_TEL_2D_H_Long_L', 'yr_SToy_11_TEL_2D_H_Long_R',
    'yr_SToy_11_TEL_2D_H_Short_L', 'yr_SToy_11_TEL_2D_H_Short_mono', 'yr_SToy_11_TEL_2D_H_Short_R',
    'yr_SToy_11_TEL_2D_L_Long_L', 'yr_SToy_11_TEL_2D_L_Long_R',
    'yr_SToy_11_TEL_2D_L_Short_L', 'yr_SToy_11_TEL_2D_L_Short_R',

    'yr_SToy_11_TEL_3D_H_Long_L_pxsps_l_ear', 'yr_SToy_11_TEL_3D_H_Long_R_pxsps_r_ear',
    'yr_SToy_11_TEL_3D_H_Short_L_pxsps_l_ear', 'yr_SToy_11_TEL_3D_H_Short_R_pxsps_r_ear',
    'yr_SToy_11_TEL_3D_L_Long_L_pxsps_l_ear', 'yr_SToy_11_TEL_3D_L_Long_R_pxsps_r_ear',
    'yr_SToy_11_TEL_3D_L_Short_L_pxsps_l_ear', 'yr_SToy_11_TEL_3D_L_Short_R_pxsps_r_ear',
];

export type SoundEffectSoundNamesForTwistyTurnyAndWoozy = readonly ['Otoasobi_DJ00', 'Otoasobi_DJ01', 'Otoasobi_DJ02', 'Otoasobi_DJ03', 'Otoasobi_DJ04', 'Otoasobi_DJ05',];
type SoundEffectSoundNamesForPeaceful = readonly [
    'Otoasobi_Calm_Hit_01',
    'Otoasobi_Calm_Harp_01', 'Otoasobi_Calm_Harp_02', 'Otoasobi_Calm_Harp_03', 'Otoasobi_Calm_Harp_04', 'Otoasobi_Calm_Harp_05', 'Otoasobi_Calm_Harp_06', 'Otoasobi_Calm_Harp_07', 'Otoasobi_Calm_Harp_09', 'Otoasobi_Calm_Harp_10',
    'Otoasobi_Calm_Pad_01', 'Otoasobi_Calm_Pad_02', 'Otoasobi_Calm_Pad_03', 'Otoasobi_Calm_Pad_04', 'Otoasobi_Calm_Pad_05', 'Otoasobi_Calm_Pad_06', 'Otoasobi_Calm_Pad_07', 'Otoasobi_Calm_Pad_09', 'Otoasobi_Calm_Pad_10', 'Otoasobi_Calm_Pad_11',
    'Otoasobi_Calm_SE_01', 'Otoasobi_Calm_SE_02', 'Otoasobi_Calm_SE_03', 'Otoasobi_Calm_SE_04', 'Otoasobi_Calm_SE_05', 'Otoasobi_Calm_SE_06', 'Otoasobi_Calm_SE_07', 'Otoasobi_Calm_SE_08_edit',
    'Otoasobi_Horror_SE_04',
    // 'M1_BGM_Otoasobi_Link_Healing',
    // 'BGM_M1_USA_Ending',
];
type SoundEffectSoundNamesForHorror = readonly [
    'Otoasobi_Calm_SE_06',
    'Otoasobi_Horror_01', 'Otoasobi_Horror_02', 'Otoasobi_Horror_03', 'Otoasobi_Horror_04', 'Otoasobi_Horror_05',
    'Otoasobi_Horror_SE_01', 'Otoasobi_Horror_SE_02', 'Otoasobi_Horror_SE_03', 'Otoasobi_Horror_SE_04', 'Otoasobi_Horror_SE_05', 'Otoasobi_Horror_SE_06', 'Otoasobi_Horror_SE_07', 'Otoasobi_Horror_SE_08',
    'Otoasobi_Horror_Strings_01', 'Otoasobi_Horror_Strings_02',
];

//endregion -------------------- Name for ... --------------------
//region -------------------- Value for map --------------------

type PossibleEditorValue<NAMES extends readonly string[], > = | NAMES[number] | null;
type PossibleValueOnLinkOrSMB2Value<NAMES extends readonly string[], > = | readonly [] | readonly [NAMES[number],] | readonly [NAMES[number], NAMES[number],];

interface SoundEffectSound<SOUNDS extends readonly string[], NAME_IN_EDITOR extends PossibleEditorValue<SOUNDS>, LINK_NAMES extends PossibleValueOnLinkOrSMB2Value<SOUNDS>, SMB2_NAMES extends PossibleValueOnLinkOrSMB2Value<SOUNDS>, > {
    sounds: SOUNDS
    editorName: NAME_IN_EDITOR
    linkNames: LINK_NAMES
    smb2Names: SMB2_NAMES,
}

type SoundEffectFromSoundEffect<SOUND extends SoundEffectSound<any, any, any, any>, > = SOUND;
type NoSoundEffectSound = SoundEffectSound<[], null, [], []>;

//region -------------------- Sound effect --------------------

type SingleSoundEffectSound<SOUND extends string, > = SoundEffectFromSoundEffect<SoundEffectSound<readonly [SOUND,], SOUND, [], []>>;
type SoundEffectSound_NoEditor<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, never, [], []>>;
type SoundEffectSound_Editor1<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[0], [], []>>;
type SoundEffectSound_Editor2<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[1], [], []>>;
type SoundEffectSound_Editor3<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[2], [], []>>;
// type SoundEffectSound_Editor4<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[3], [], []>>;
type SoundEffectSound_Editor5<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[4], [], []>>;
// type SoundEffectSound_Editor6<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[5], [], []>>;
type SoundEffectSound_Editor7<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[6], [], []>>;
type SoundEffectSound_Editor10<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[9], [], []>>;
type SoundEffectSound_Editor1_Link3<SOUNDS extends readonly string[], > = SoundEffectFromSoundEffect<SoundEffectSound<SOUNDS, SOUNDS[0], [SOUNDS[2],], []>>;

//endregion -------------------- Sound effect --------------------

//endregion -------------------- Value for map --------------------

export type PossibleSoundEffectSoundName_SMM1 = SoundEffectSoundTemplateMap_SMM1Exclusive[PossibleEnglishName]['sounds'][number];
export type PossibleSoundEffectSoundName_SMM2 = | SoundEffectSoundTemplateMap_SMM2Exclusive[PossibleEnglishName]['sounds'][number];

type _PossibleSoundEffectSoundFileNameFromSoundEffect<GAME extends | 1 | 2, NAME extends PossibleSoundEffectSoundName, > = `${BasePath}/sound/sound effect/SMM${GAME}/${NAME}.wav`;
export type PossibleSoundEffectSoundFileName_SMM1 = _PossibleSoundEffectSoundFileNameFromSoundEffect<1, PossibleSoundEffectSoundName_SMM1>;
export type PossibleSoundEffectSoundFileName_SMM2 = _PossibleSoundEffectSoundFileNameFromSoundEffect<2, PossibleSoundEffectSoundName_SMM2>;

export type PossibleSoundEffectSoundName = | PossibleSoundEffectSoundName_SMM1 | PossibleSoundEffectSoundName_SMM2;
export type PossibleSoundEffectSoundFileName = | PossibleSoundEffectSoundFileName_SMM1 | PossibleSoundEffectSoundFileName_SMM2;
