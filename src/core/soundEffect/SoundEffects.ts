import type {Array, NullOr} from '@joookiwi/type'
import {isArray}            from '@joookiwi/collection'
import {Enum}               from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                   from 'core/ClassWithReference'
import type {MusicSoundFile}                                                                                                       from 'core/music/file/MusicSoundFile'
import type {PossibleSoundEffectMusicEditorName}                                                                                   from 'core/music/soundEffect/SoundEffectMusic'
import type {SoundEffect}                                                                                                          from 'core/soundEffect/SoundEffect'
import type {SoundEffectFromMusicAdaptor}                                                                                          from 'core/soundEffect/SoundEffectFromMusicAdaptor'
import type {Names, Ordinals, PossibleEnglishName, PossibleSMM1ImageFiles, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SMM2SoundEffectImageFile}                                                                                             from 'core/soundEffect/file/SoundEffectImageFile'
import type {SMM1SoundEffectSoundFile, SMM2SoundEffectSoundFile, SoundEffectSoundFile}                                             from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound}                                                            from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {SMM1ExclusiveSoundEffectSound}                                                                                        from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1StandaloneSoundEffectSound}                                                                                       from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound'
import type {SoundEffectSoundNamesForTwistyTurnyAndWoozy}                                                                          from 'core/soundEffect/sound/types'
import type {CompanionEnumByNameSingleton}                                                                                         from 'util/enumerable/Singleton.types'

import type {Musics}                                                    from 'core/music/Musics'
import {IndividualMusics}                                               from 'core/music/IndividualMusics'
import {EmptySoundEffectFromMusicAdaptor}                               from 'core/soundEffect/EmptySoundEffectFromMusicAdaptor'
import {SoundEffectFromMusicAdaptorContainer}                           from 'core/soundEffect/SoundEffectFromMusicAdaptor.container'
import {SoundEffectLoader}                                              from 'core/soundEffect/SoundEffect.loader'
import * as FileCreator                                                 from 'core/soundEffect/file/fileCreator'
import {EmptySMMSoundEffectSound as EmptySound}                         from 'core/soundEffect/sound/EmptySMMSoundEffectSound'
import {SMM1ExclusiveSoundEffectSoundContainer as SMM1ExclusiveSound}   from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound.container'
import {SMM1StandaloneSoundEffectSoundContainer as SMM1StandaloneSound} from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound.container'
import {SMM2SoundEffectSoundContainer as SMM2Sound}                     from 'core/soundEffect/sound/SMM2SoundEffectSound.container'
import {Import}                                                         from 'util/DynamicImporter'
import {Empty}                                                          from 'util/emptyVariables'
import {StringContainer}                                                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly}                                 from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'
import {ArrayAsCollection}                                              from 'util/collection/ArrayAsCollection'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

/**
 * @recursiveReference<{@link Musics}>
 */
export abstract class SoundEffects
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffect>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                      new class SoundEffects_Shock extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '00_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Shock' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_01_OssanOdoroki_L_pxsps_l_ear', 'yr_SToy_01_OssanOdoroki_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('SE_OssanOdoroki',)
        }

    }('Shock',)
    public static readonly SCREAM =                     new class SoundEffects_Scream extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '00_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Scream' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_01_OssanHimei4_L_pxsps_l_ear','yr_SToy_01_OssanHimei4_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('SE_OssanHimei4',)
        }

    }('Scream',)
    public static readonly LAUGHTER =                   new class SoundEffects_Laughter extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '09_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Laughter' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_v_Laugh_Tsuji_01_pxsps_l_ear', 'yr_v_Laugh_Tsuji_02_pxsps_r_ear', 'yr_v_Laugh_Tsuji_03_pxsps_l_ear', 'yr_v_Laugh_Tsuji_04_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            const smm1Sounds = smm1.sounds
            const smm2Sounds = smm2.sounds

            return new SMM1StandaloneSound([smm2Sounds[0]!, smm1Sounds[0]!, smm2Sounds[1]!, smm1Sounds[1]!, smm2Sounds[2]!, smm1Sounds[2]!, smm2Sounds[3]!, smm1Sounds[3]!,], smm2.editorSound, smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            const sounds = FileCreator.smm2SoundFiles('yr_v_Laugh_Tsuji_01', 'yr_v_Laugh_Tsuji_02', 'yr_v_Laugh_Tsuji_03', 'yr_v_Laugh_Tsuji_04',)

            return new SMM2Sound(sounds, sounds[3], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Laughter',)
    public static readonly GUFFAW =                     new class SoundEffects_Guffaw extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'LoudLaughter' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            const sounds = FileCreator.smm2SoundFiles(
                'se_otoasobi_oowarai_00',
                'se_otoasobi_oowarai_01',
                'se_otoasobi_oowarai_02',
                'se_otoasobi_oowarai_03',
                'se_otoasobi_oowarai_04',
                'se_otoasobi_oowarai_05',
                'se_otoasobi_oowarai_06',
                'se_otoasobi_oowarai_07',
            )

            return new SMM2Sound(sounds, sounds[6], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Guffaw',)
    public static readonly BOOO =                       new class SoundEffects_Booo extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Boo' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_Booing01',)
        }

    }('Booo!',)
    public static readonly CHEER =                      new class SoundEffects_Cheer extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '04_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Cheer' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_DaigunshuShort', 'SE_daikansei_3d',)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_Crowd_yubibue', 'Otoasobi_Crowd_donpafu',)
        }

    }('Cheer',)
    public static readonly BABY =                       new class SoundEffects_Baby extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '10_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Baby' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_Affun_outL_type4_invF_Rmic', 'SE_Affun_outR_type4_invF_Rmic',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('SE_Affun', 'se_otoasobi_affun_night',)
        }

    }('Baby',)
    public static readonly PARTY_POPPER =               new class SoundEffects_PartyPopper extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Cracker' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_Cracker',)
        }

    }('Party Popper',)
    public static readonly APPLAUSE =                   new class SoundEffects_Applause extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '04_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Applause' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_KANSEI', 'SE_KANSEI_pxsps_l_ear', 'SE_KANSEI_pxsps_r_ear',)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_Crap',)
        }

    }('Applause',)
    public static readonly NEAR_MISS =                  new class SoundEffects_NearMiss extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Incident' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_hiyarihat_07_edit', 'se_otoasobi_hiyarihat_07',)
        }

    }('Near Miss',)

    public static readonly CLATTER =                    new class SoundEffects_Clatter extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '01_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Clatter' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_02_destruction01_2D_L_pxsps_l_ear', 'yr_SToy_02_destruction01_3D_L_pxsps_l_ear', 'yr_SToy_02_destruction01_3D_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_02_destruction01_2D_L_pxsps_l_ear',)
        }

    }('Clatter',)
    public static readonly DRAMA =                      new class SoundEffects_Drama extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '01_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Drama' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_02_shocking4_2D_L_pxsps_l_ear', 'yr_SToy_02_shocking4_3D_L_pxsps_l_ear', 'yr_SToy_02_shocking4_3D_R_pxsps_r_ear',)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_gagaaan',)
        }

    }('Drama!',)
    public static readonly KICK =                       new class SoundEffects_Kick extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '02_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Kick' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_03_Aw_3D_L_pxsps_l_ear', 'yr_SToy_03_Aw_3D_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_03_Aw_2D',)
        }

    }('Kick',)
    public static readonly JUMP =                       new class SoundEffects_Jump extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '02_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Jump' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_03_How_3D_L_pxsps_r_ear', 'yr_SToy_03_How_3D_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_03_How_2D',)
        }

    }('Jump',)
    public static readonly HONK_HONK =                  new class SoundEffects_HonkHonk extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '10_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Honk' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_03_How_3D_L_pxsps_r_ear', 'yr_SToy_03_How_3D_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            const smm1Sounds = smm1.sounds
            const smm2Sounds = smm2.sounds

            return new SMM1StandaloneSound([smm2Sounds[0]!, smm2Sounds[1]!, smm1Sounds[0]!, smm1Sounds[1]!,], smm2.editorSound, smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('bse_pafu00.a.44.cn4', 'bse_pafu00_e.44.cn4',)
        }

    }('Honk Honk',)
    public static readonly PUNCH =                      new class SoundEffects_Punch extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '06_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Punch' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_Punch3_pxsps_r_ear', 'SE_Punch4_pxsps_l_ear', 'bse_cat00_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            const smm1Sounds = smm1.sounds
            const smm2Sounds = smm2.sounds

            return new SMM1StandaloneSound([smm2Sounds[0]!, smm1Sounds[0]!, smm1Sounds[1]!, smm1Sounds[2]!,], smm1.editorSound, smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            const sounds = FileCreator.smm2SoundFiles('SE_Punch3_excited', 'SE_Punch4', 'SE_Punch4_excited',)

            return new SMM2Sound(sounds, sounds[1], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Punch',)
    public static readonly OINK =                       new class SoundEffects_Oink extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Whoopee' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_oimo', 'se_mariopaint-pig', 'se_otoasobi_whoopee_0',)
        }

    }('Oink',)
    public static readonly KUH_THUNK =                  new class SoundEffects_Kuh_Thunk extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Focus' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_dodon',)
        }

    }('Kuh-thunk!',)
    public static readonly BEEP =                       new class SoundEffects_Beep extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Glitch' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('glitch_M1_000', 'glitch_M1_001', 'glitch_M1_002', 'glitch_M1_003', 'glitch_M1_004', 'glitch_M1_005', 'glitch_M1_006', 'glitch_M1_007', 'muon_2sec',)
        }

    }('Beep!',)
    public static readonly NINJA_ATTACK =               new class SoundEffects_NinjaAttack extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Uproar' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.NINJA_ATTACK
        }

    }('Ninja Attack!',)
    public static readonly ZAP =                        new class SoundEffects_Zap extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Discord' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_gaaann',)
        }

    }('Zap!',)

    public static readonly DING_DONG =                  new class SoundEffects_DingDong extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '11_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Ding' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_BELL_pxsps_l_ear', 'SE_BELL_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            const sounds = FileCreator.smm2SoundFiles('SE_BELL', 'SE_BELL_excited', 'SE_LinkItemAppear',)

            return new SMM2Sound(sounds, sounds[0], [sounds[2],] as const, EMPTY_ARRAY,)
        }

    }('Ding Dong',)
    public static readonly BZZZT =                      new class SoundEffects_Bzzzzt extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '11_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Bzzzt' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_BU_pxsps_l_ear', 'SE_BU_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('SE_BU=', 'SE_BU=_excited',)
        }

    }('Bzzzt!',)
    public static readonly GLORY =                      new class SoundEffects_Glory extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '05_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Glory' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_06_Godd_01_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundWhere1IsFromSmm1And2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_06_Godd_01',)
        }

    }('Glory',)
    public static readonly DOOM =                       new class SoundEffects_Doom extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '05_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Doom' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_06_Devil_01_pxsps_l_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundWhere1IsFromSmm1And2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_06_Devil_01',)
        }

    }('Doom',)
    public static readonly YEAH =                       new class SoundEffects_Yeah extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Admiration' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_YEAH',)
        }

    }('Yeah!',)
    public static readonly AWW =                        new class SoundEffects_Aww extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Anguish' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_AAHH',)
        }

    }('Aww...',)

    public static readonly FIREWORKS =                  new class SoundEffects_Fireworks extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '06_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Fireworks' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_07_FireWorks_01_1_pxsps_r_ear', 'yr_SToy_07_FireWorks_01_2_pxsps_l_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_07_FireWorks_01', 'yr_SToy_07_FireWorks_01_1', 'yr_SToy_07_FireWorks_01_2',)
        }

    }('Fireworks',)
    public static readonly AUDIENCE =                   new class SoundEffects_Audience extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Audience' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.AUDIENCE
        }


    }('Audience',)
    public static readonly SCATTING =                   new class SoundEffects_Scatting extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Scat' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SCATTING
        }


    }('Scatting',)
    public static readonly BIRD_CHIRPING =              new class SoundEffects_BirdChirping extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '09_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('SE_UGUISU', 'SE_UGUISU_Edit', 'SE_UGUISU_pxsps_r_ear',)
        }

    }('Bird’s Chirping',)
    public static readonly SPARK =                      new class SoundEffects_Spark extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Firecracker' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            const sounds = FileCreator.smm2SoundFiles(
                'se_otoasobi_spark_00',
                'se_otoasobi_spark_01',
                'se_otoasobi_spark_02',
                'se_otoasobi_spark_03',
                'se_otoasobi_spark_04',
            )

            return new SMM2Sound(sounds, sounds[2], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Spark',)
    public static readonly TRADITIONAL =                new class SoundEffects_Traditional extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Ohayasi' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.TRADITIONAL
        }


    }('Traditional',)
    public static readonly ELECTRIC_GUITAR =            new class SoundEffects_ElectricGuitar extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'ElectricGuitar' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('Otoasobi_Guitar01', 'Otoasobi_Guitar02',)
        }

    }('Electric Guitar',)
    public static readonly DISTORTION =                 new class SoundEffects_Distortion extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '12_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_TaoeDown_01', 'yr_SToy_13_Sweep_01', 'yr_SToy_13_Sweep_01_l_ear', 'yr_SToy_13_Sweep_01_r_ear', 'yr_Sweep_Up_01',)
        }

    }('Distortion',)
    public static readonly TWISTY_TURNY =               new class SoundEffects_TwistyTurny extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Filter' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return SoundEffects._soundsForTwistyTurnyAndWoozy
        }

    }('Twisty Turny',)
    public static readonly WOOZY =                      new class SoundEffects_Woozy extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'SoundEffect' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            const sounds = SoundEffects._soundsForTwistyTurnyAndWoozy

            return new SMM2Sound(sounds, sounds[4], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Woozy',)
    public static readonly TELEPHONE =                  new class SoundEffects_Telephone extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '12_00' as const satisfies SoundEffectImageNumber_SMM1
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = [
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_H_Long_L',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_H_Long_R',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_L',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_mono',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_R',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_L_Long_L',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_L_Long_R',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_L_Short_L',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_2D_L_Short_R',),

                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_H_Long_L_pxsps_l_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_H_Long_R_pxsps_r_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_H_Short_L_pxsps_l_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_H_Short_R_pxsps_r_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_L_Long_L_pxsps_l_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_L_Long_R_pxsps_r_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_L_Short_L_pxsps_l_ear',),
                FileCreator.smm1SoundFile('yr_SToy_11_TEL_3D_L_Short_R_pxsps_r_ear',),
            ] as const

            return new SMM1ExclusiveSound(sounds, sounds[1],)
        }

    }('Telephone',)
    public static readonly FLASH =                      new class SoundEffects_Flash extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Halo' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_haloeffect',)
        }

    }('Flash',)

    public static readonly PEACEFUL =                   new class SoundEffects_Peaceful extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Calm' as const satisfies SoundEffectImageName_SMM2
        }


        #sounds_smm2?: PossibleSMM2SoundEffect

        public override get sounds_smm2(): PossibleSMM2SoundEffect {
            return this.#sounds_smm2 ??= [IndividualMusics.PEACEFUL_LINK.file, IndividualMusics.PEACEFUL_SMB2.file, super.sounds_smm2,].flat()
        }

        protected override _createSMM2Sounds() {
            return [
                FileCreator.smm2SoundFile('Otoasobi_Calm_Hit_01',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_01',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_02',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_03',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_04',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_05',),
                SoundEffects._calmHarp6Sound,
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_07',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_09',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_10',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_01',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_02',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_03',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_04',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_05',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_06',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_07',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_09',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_10',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_Pad_11',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_01',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_02',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_03',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_04',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_05',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_06',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_07',),
                FileCreator.smm2SoundFile('Otoasobi_Calm_SE_08_edit',),
                SoundEffects._horror4Sound,
            ] as const
        }

    }('Peaceful',)
    public static readonly HORROR =                     new class SoundEffects_Horror extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Unrest' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds() {
            //'se_otoasobi_hachoo'
            const sounds = [
                SoundEffects._calmHarp6Sound,
                FileCreator.smm2SoundFile('Otoasobi_Horror_01',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_02',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_03',),
                SoundEffects._horror4Sound,
                FileCreator.smm2SoundFile('Otoasobi_Horror_05',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_01',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_02',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_03',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_04',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_05',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_06',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_07',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_SE_08',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_Strings_01',),
                FileCreator.smm2SoundFile('Otoasobi_Horror_Strings_02',),
            ] as const

            return new SMM2Sound(sounds, sounds[1], EMPTY_ARRAY, EMPTY_ARRAY,)
        }

    }('Horror',)
    public static readonly FESTIVE_MUSIC =              new class SoundEffects_FestiveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '07_00' as const satisfies SoundEffectImageNumber_SMM1
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = FileCreator.smm1SoundFiles('SE_SAMBA_3D_Perc', 'SE_Samba3',)

            return new SMM1ExclusiveSound(sounds, sounds[1],)
        }

    }('Festive Music',)
    public static readonly RAVE_MUSIC =                 new class SoundEffects_RaveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '07_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = FileCreator.smm1SoundFiles('SE_Disco6measure', 'SE_Disco6measure_InUp2',)

            return new SMM1ExclusiveSound(sounds, sounds[1],)
        }

    }('Rave Music',)
    public static readonly HEARTBEAT =                  new class SoundEffects_HeartBeat extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '03_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Heartbeat' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_04_HeartBeat_H_L_pxsps_l_ear', 'yr_SToy_04_HeartBeat_H_R_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            const smm1Sounds = smm1.sounds
            const smm2Sounds = smm2.sounds

            return new SMM1StandaloneSound([smm2Sounds[0]!, smm2Sounds[1]!, smm2Sounds[2]!, smm1Sounds[0]!, smm1Sounds[1]!,], smm2.editorSound, smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('yr_SToy_04_HeartBeat_p1', 'yr_SToy_04_HeartBeat_p2', 'yr_SToy_04_HeartBeat_p3',)
        }

    }('Heartbeat',)
    public static readonly SILENCE =                    new class SoundEffects_Silence extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '03_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Silence' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_NOISE_short_1', 'yr_NOISE_short_1_pxsps_l_ear', 'yr_NOISE_short_2', 'yr_NOISE_short_2_pxsps_r_ear', 'yr_NOISE_short_3', 'yr_NOISE_short_3_pxsps_l_ear',)
        }

        protected override _createSMM2Sounds() {
            return FileCreator.smm2SoundFiles('se_otoasobi_silence',)
        }

    }('Silence',)
    public static readonly BIRD_TWEETING_NOISE =        new class SoundEffects_BirdTweetingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return ['13_00', '14_00',] as const satisfies Array<SoundEffectImageNumber_SMM1>
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('hz_inco_1_removed1s50per', 'hz_inco_1_L_pxsps_l_ear', 'hz_inco_1_R_pxsps_r_ear',)
        }

    }('Bird’s Tweeting Noise',)
    public static readonly CHICKEN_CLUCKING_NOISE =     new class SoundEffects_ChickenCluckingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return ['13_01', '14_01',] as const satisfies Array<SoundEffectImageNumber_SMM1>
        }


        protected override _createExclusiveSMM1Sounds() {
            return FileCreator.smm1SoundFiles('yr_SToy_14_Bird_B_01', 'yr_SToy_14_Bird_B_L_pxsps_l_ear', 'yr_SToy_14_Bird_B_R_pxsps_r_ear',)
        }

    }('Chicken’s Clucking Noise',)

    public static readonly BONUS_MUSIC =                new class SoundEffects_BonusMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '08_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Bonus' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound, smm2Adaptor: SoundEffectFromMusicAdaptor,) {
            const sounds = smm2Adaptor.sounds

            // @ts-ignore: TODO handle the music sound file as a valid possible instance
            return new SMM1StandaloneSound([sounds[5], sounds[8], sounds[9], sounds[10], sounds[13], sounds[16], sounds[17], sounds[18],], smm2Adaptor.editorSound, smm1, smm2Adaptor,)
        }

        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.BONUS
        }

    }('Bonus Music',)
    public static readonly BOSS_MUSIC =                 new class SoundEffects_BossMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '08_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Boss' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound, smm2Adaptor: SoundEffectFromMusicAdaptor,) {
            const sounds = smm2Adaptor.sounds

            // @ts-ignore: TODO handle the music sound file as a valid possible instance
            return new SMM1StandaloneSound([sounds[5], sounds[8], sounds[9], sounds[10], sounds[12], sounds[15], sounds[16], sounds[17],], smm2Adaptor.editorSound, smm1, smm2Adaptor,)
        }

        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.BOSS
        }

    }('Boss Music',)
    public static readonly FINAL_BOSS_MUSIC =           new class SoundEffects_FinalBossMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'LastBoss' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.FINAL_BOSS
        }

    }('Final Boss',)
    public static readonly SUPER_MARIO_KART_MUSIC =     new class SoundEffects_SuperMarioKartMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario03' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_KART
        }

    }('Super Mario Kart',)
    public static readonly SUPER_MARIO_64_MUSIC =       new class SoundEffects_SuperMario64Music extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario01' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_64
        }

    }('Super Mario 64',)
    public static readonly SUPER_MARIO_SUNSHINE_MUSIC = new class SoundEffects_SuperMarioSunshineMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario02' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_SUNSHINE
        }

    }('Super Mario Sunshine',)
    public static readonly SUPER_MARIO_GALAXY_MUSIC =   new class SoundEffects_SuperMarioGalaxyMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario00' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_GALAXY
        }

    }('Super Mario Galaxy',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<SoundEffects, typeof SoundEffects> = class CompanionEnum_SoundEffects
        extends CompanionEnumByEnglishNameOnly<SoundEffects, typeof SoundEffects> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffects

        private constructor() {
            super(SoundEffects,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundEffects()
        }

        //endregion -------------------- Singleton usage --------------------

        protected override readonly _EXCLUDED_NAMES = ['SMK', 'SM64', 'SMS', 'SMG',] as const satisfies Array<keyof typeof SoundEffects>

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffect>

    #reference?: SoundEffect
    readonly #englishName

    #smm1ImageFiles?: PossibleSMM1ImageFiles
    #smm2ImageFile?: NullOr<SMM2SoundEffectImageFile>

    static #SOUNDS_FOR_TWISTY_TURNY_AND_WOOZY?: TwistyTurnyAndWoozySounds
    static #CALM_HARP_6_SOUND?: CalmHarp6Sound
    static #HORROR_4_SOUND?: Horror4Sound
    #sounds_exclusiveSmm1?: SMM1ExclusiveSoundEffectSound
    #sounds_standaloneSmm1?: SMM1StandaloneSoundEffectSound
    #sounds_smm2?: | SMM2SoundEffectSound | SoundEffectFromMusicAdaptor

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, SoundEffect> {
        return this.#REFERENCE_MAP ??= SoundEffectLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): SoundEffect {
        return this.#reference ??= SoundEffects.REFERENCE_MAP.get(this.englishName)!
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //region -------------------- Getter methods (image) --------------------

    protected _createSMM1ImageNumbers(): NullOr<| SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,]> {
        return null
    }

    public get SMM1ImageFiles(): PossibleSMM1ImageFiles {
        if (this.#smm1ImageFiles === undefined) {
            const imageNumbers = this._createSMM1ImageNumbers()
            if (imageNumbers == null)
                return this.#smm1ImageFiles = null
            return this.#smm1ImageFiles = FileCreator.smm1ImageFiles(this.englishName, imageNumbers,)
        }
        return this.#smm1ImageFiles
    }


    protected _createSMM2ImageName(): NullOr<SoundEffectImageName_SMM2> {
        return null
    }

    public get SMM2ImageFile(): NullOr<SMM2SoundEffectImageFile> {
        if (this.#smm2ImageFile === undefined) {
            const imageName = this._createSMM2ImageName()
            if (imageName == null)
                return this.#smm2ImageFile = null
            return this.#smm2ImageFile = FileCreator.smm2ImageFile(this.englishName, imageName,)
        }
        return this.#smm2ImageFile
    }

    //endregion -------------------- Getter methods (image) --------------------
    //region -------------------- Getter methods (sound) --------------------

    //region -------------------- Getter methods (SMM1 sound) --------------------

    /**
     * Create a {@link SMM1StandaloneSoundEffectSound} in that order:
     *  - 1 image is from {@link smm2}
     *  - 1 image are from {@link smm1}
     *
     * @param smm1 The {@link SMM1ExclusiveSoundEffectSound} to retrieve its {@link SoundEffectSound.sounds sounds}
     * @param smm2 The {@link SMM2SoundEffectSound} to retrieve its {@link SoundEffectSound.sounds sounds} and {@link SoundEffectSound.editorSound editor sound}
     * @onlyCalledByChildren
     */
    protected static _createExclusiveSmm1SoundWhere1IsFromSmm1And2(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,): SMM1StandaloneSoundEffectSound {
        const smm1Sounds = smm1.sounds
        const smm2Sounds = smm2.sounds
        const smm2EditorSound = smm2.editorSound

        return new SMM1StandaloneSound([smm2Sounds[0]!, smm1Sounds[0]!,], smm2EditorSound, smm1, smm2,)
    }

    /**
     * Create a {@link SMM1StandaloneSoundEffectSound} in that order:
     *  - 1 image is from {@link smm2}
     *  - 2 images are from {@link smm1}
     *
     * @param smm1 The {@link SMM1ExclusiveSoundEffectSound} to retrieve its {@link SoundEffectSound.sounds sounds}
     * @param smm2 The {@link SMM2SoundEffectSound} to retrieve its {@link SoundEffectSound.sounds sounds} and {@link SoundEffectSound.editorSound editor sound}
     * @onlyCalledByChildren
     */
    protected static _createExclusiveSmm1SoundsWhere2IsFromSmm1And1IsFromSmm2(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,): SMM1StandaloneSoundEffectSound {
        const smm1Sounds = smm1.sounds
        const smm2Sounds = smm2.sounds
        const smm2EditorSound = smm2.editorSound

        return new SMM1StandaloneSound([smm2Sounds[0]!, smm1Sounds[0]!, smm1Sounds[1]!,], smm2EditorSound, smm1, smm2,)
    }

    /** Create an exclusive {@link SMM1ExclusiveSoundEffectSound} from either:
     *  - a <b>null</b>
     *  - a {@link SMM1ExclusiveSoundEffectSound} directly
     *  - an array of {@link SMM1SoundEffectSoundFile} (to create a {@link SMM1ExclusiveSoundEffectSound} after-end)
     *
     * @onlyCalledOnce
     * @onlyCalledBy soundsContainer_exclusiveSmm1
     */
    protected _createExclusiveSMM1Sounds(): NullOr<| SMM1ExclusiveSoundEffectSound | Array<SMM1SoundEffectSoundFile>> {
        return null
    }

    /**
     * Create a standalone {@link SMM1StandaloneSoundEffectSound}
     * from a {@link SMM1ExclusiveSoundEffectSound}, a {@link SMM2SoundEffectSound} and a {@link SoundEffectFromMusicAdaptor}
     *
     * @onlyCalledOnce
     * @onlyCalledBy soundsContainer_standaloneSMM1
     */
    protected _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound, smm2Adaptor: SoundEffectFromMusicAdaptor,): NullOr<SMM1StandaloneSoundEffectSound> {
        return null
    }

    /** The "sound effect" exclusive sounds (in a container) of the {@link SMM1} game (& {@link SMM3DS} inclusively) */
    public get soundsContainer_exclusiveSmm1(): SMM1ExclusiveSoundEffectSound {
        if (this.#sounds_exclusiveSmm1 != null)
            return this.#sounds_exclusiveSmm1

        const value = this._createExclusiveSMM1Sounds()
        if (value == null)
            return this.#sounds_exclusiveSmm1 = EmptySound.get
        if (isArray(value,))
            return this.#sounds_exclusiveSmm1 = new SMM1ExclusiveSound(value, new ArrayAsCollection(value,).getFirst(),)
        return this.#sounds_exclusiveSmm1 = value
    }

    /** The "sound effect" sounds (in a container) of the {@link SMM1} game (& {@link SMM3DS} inclusively) */
    public get soundsContainer_standaloneSMM1(): SMM1StandaloneSoundEffectSound {
        if (this.#sounds_standaloneSmm1 != null)
            return this.#sounds_standaloneSmm1

        const smm1 = this.soundsContainer_exclusiveSmm1
        const smm2 = this.soundsContainer_smm2
        const valueToCreate = smm2 instanceof SoundEffectFromMusicAdaptorContainer
            ? this._createStandaloneSMM1Sounds(smm1, EmptySound.get, smm2,)
            : this._createStandaloneSMM1Sounds(smm1, smm2 as SMM2SoundEffectSound, EmptySoundEffectFromMusicAdaptor.get,)

        if (valueToCreate != null)
            return this.#sounds_standaloneSmm1 = valueToCreate
        if (smm1 === EmptySound.get)
            return this.#sounds_standaloneSmm1 = EmptySound.get

        return this.#sounds_standaloneSmm1 = new SMM1StandaloneSound(smm1.sounds, smm1.editorSound, smm1, EmptySound.get,)
    }

    /** Every "sound effect" sound for {@link SMM1}/{@link SMM3DS} exclusively */
    public get sounds_exclusiveSmm1(): Array<SMM1SoundEffectSoundFile> {
        return this.soundsContainer_exclusiveSmm1.sounds
    }

    /** Every "sound effect" sound for {@link SMM1}/{@link SMM3DS}, but using some {@link SMM2} sounds */
    public get sounds_standaloneSmm1(): Array<SoundEffectSoundFile> {
        return this.soundsContainer_standaloneSMM1.sounds
    }

    /** The "sound effect" sound for a {@link SMM1}/{@link SMM3DS} when placed in the editor */
    public get editorSound_smm1(): NullOr<SoundEffectSoundFile> {
        return this.soundsContainer_standaloneSMM1.editorSound
    }

    //endregion -------------------- Getter methods (SMM1 sound) --------------------
    //region -------------------- Getter methods (shared sound) --------------------

    protected static get _soundsForTwistyTurnyAndWoozy(): TwistyTurnyAndWoozySounds {
        return this.#SOUNDS_FOR_TWISTY_TURNY_AND_WOOZY ??= FileCreator.smm2SoundFiles('Otoasobi_DJ00', 'Otoasobi_DJ01', 'Otoasobi_DJ02', 'Otoasobi_DJ03', 'Otoasobi_DJ04', 'Otoasobi_DJ05',)
    }

    protected static get _calmHarp6Sound(): CalmHarp6Sound {
        return this.#CALM_HARP_6_SOUND ??= FileCreator.smm2SoundFile('Otoasobi_Calm_Harp_06',)
    }

    protected static get _horror4Sound(): Horror4Sound {
        return this.#HORROR_4_SOUND ??= FileCreator.smm2SoundFile('Otoasobi_Horror_SE_04',)
    }

    //endregion -------------------- Getter methods (shared sound) --------------------
    //region -------------------- Getter methods (SMM2 sound) --------------------

    /** Create an exclusive {@link SMM2SoundEffectSound} from either:
     *  - a <b>null</b>
     *  - a {@link SMM2SoundEffectSound} directly
     *  - an array of {@link SMM1SoundEffectSoundFile} (to create a {@link SMM2SoundEffectSound} after-end)
     *  - a {@link Musics} reference
     *
     * @onlyCalledOnce
     * @onlyCalledBy soundsContainer_smm2
     */
    protected _createSMM2Sounds(): NullOr<| SMM2SoundEffectSound | Array<SMM2SoundEffectSoundFile> | Musics> {
        return null
    }

    /** The "sound effect" sounds (in a container) of the {@link SMM2} game */
    public get soundsContainer_smm2(): | SMM2SoundEffectSound | SoundEffectFromMusicAdaptor {
        if (this.#sounds_smm2 != null)
            return this.#sounds_smm2

        const value = this._createSMM2Sounds()
        if (value == null)
            return this.#sounds_smm2 = EmptySound.get
        if (isArray(value,))
            return this.#sounds_smm2 = new SMM2Sound(value, new ArrayAsCollection(value,).getFirst(), EMPTY_ARRAY, EMPTY_ARRAY,)
        if (value instanceof Import.Musics)
            return this.#sounds_smm2 = new SoundEffectFromMusicAdaptorContainer(value,)
        return this.#sounds_smm2 = value
    }

    /** Every "sound effect" sounds stored in a {@link SMM2SoundEffectSound SMM2 "sound effect" sound} */
    public get sounds_smm2(): PossibleSMM2SoundEffect {
        return this.soundsContainer_smm2.sounds
    }

    /** The "sound effect" sound for a {@link SMM2} when placed in the editor */
    public get editorSound_smm2(): NullOr<| SMM2SoundEffectSoundFile | PossibleSoundEffectMusicEditorName> {
        return this.soundsContainer_smm2.editorSound
    }

    /** The "sound effect" link sounds stored in a {@link SMM2SoundEffectSound SMM2 "sound effect" sound} */
    public get linkSounds(): PossibleValueOnLinkOrSMB2Value_SMM2 {
        return this.soundsContainer_smm2.linkSounds
    }

    /** The "sound effect" {@link GameReferences.SUPER_MARIO_BROS_2 SMB2} sounds stored in a {@link SMM2SoundEffectSound SMM2 "sound effect" sound} */
    public get smb2Sounds(): PossibleValueOnLinkOrSMB2Value_SMM2 {
        return this.soundsContainer_smm2.smb2Sounds
    }

    //endregion -------------------- Getter methods (SMM2 sound) --------------------

    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SoundEffects {

    /** The companion instance of a {@link SoundEffects} */
    export const Companion = SoundEffects.CompanionEnum.get

    /** An alias of {@link SoundEffects.SUPER_MARIO_KART_MUSIC} */
    export const SMK = SoundEffects.SUPER_MARIO_KART_MUSIC
    /** An alias of {@link SoundEffects.SUPER_MARIO_64_MUSIC} */
    export const SM64 = SoundEffects.SUPER_MARIO_64_MUSIC
    /** An alias of {@link SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC} */
    export const SMS = SoundEffects.SUPER_MARIO_SUNSHINE_MUSIC
    /** An alias of {@link SoundEffects.SUPER_MARIO_GALAXY_MUSIC} */
    export const SMG = SoundEffects.SUPER_MARIO_GALAXY_MUSIC

    export const ALL = Companion.values.toArray()

    /** Every {@link SoundEffects} that is also a {@link GameReferences} */
    export const soundEffect_games = [SMK, SM64, SMS, SMG,] as const

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).SoundEffects = SoundEffects

type PossibleSMM2SoundEffect = Array<| SMM2SoundEffectSoundFile | MusicSoundFile>

//region -------------------- SMM2 sound file --------------------

/** The {@link SMM2SoundEffectSoundFile} associated to every {@link SoundEffectSoundNamesForTwistyTurnyAndWoozy} */
type TwistyTurnyAndWoozySounds = readonly [
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[0]>,
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[1]>,
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[2]>,
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[3]>,
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[4]>,
    SMM2SoundEffectSoundFile<SoundEffectSoundNamesForTwistyTurnyAndWoozy[5]>,
]

type CalmHarp6Sound = SMM2SoundEffectSoundFile<'Otoasobi_Calm_Harp_06'>
type Horror4Sound = SMM2SoundEffectSoundFile<'Otoasobi_Horror_SE_04'>

//endregion -------------------- SMM2 sound file --------------------
