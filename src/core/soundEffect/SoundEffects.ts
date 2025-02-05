import type {Array, NullOr} from '@joookiwi/type'
import {CollectionHolder}   from '@joookiwi/collection'
import {Enum}               from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                   from 'core/ClassWithReference'
import type {SoundEffect}                                                                                                          from 'core/soundEffect/SoundEffect'
import type {Names, Ordinals, PossibleEnglishName, PossibleSMM1ImageFiles, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SMM2SoundEffectImageFile}                                                                                             from 'core/soundEffect/file/SoundEffectImageFile'
import type {SMM2SoundEffectSoundFile}                                                                                             from 'core/soundEffect/file/SoundEffectSoundFile'
import type {CompanionEnumByNameSingleton}                                                                                         from 'util/enumerable/Singleton.types'
import type {SoundFile}                                                                                                            from 'util/file/sound/SoundFile'

import {Tracks}                         from 'core/track/Tracks'
import {SoundEffectLoader}              from 'core/soundEffect/SoundEffect.loader'
import {smm1ImageFiles}                 from 'core/soundEffect/file/smm1.imageFile'
import {smm1SoundFile}                  from 'core/soundEffect/file/smm1.soundFile'
import {smm2ImageFile}                  from 'core/soundEffect/file/smm2.imageFile'
import {smm2SoundFile}                  from 'core/soundEffect/file/smm2.soundFile'
import {Empty}                          from 'util/emptyVariables'
import {StringContainer}                from 'util/StringContainer'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/** @todo add the unused sound effects */
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


        //README: The editor sound → SE_OssanOdoroki

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_01_OssanOdoroki_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_01_OssanOdoroki_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_OssanOdoroki',),],)
        }

    }('Shock',)
    public static readonly SCREAM =                     new class SoundEffects_Scream extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '00_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Scream' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → SE_OssanHimei4

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_01_OssanHimei4_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_01_OssanHimei4_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_OssanHimei4',),],)
        }

    }('Scream',)
    public static readonly LAUGHTER =                   new class SoundEffects_Laughter extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '09_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Laughter' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_v_Laugh_Tsuji_04

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([
                smm2.getFirst(), smm1SoundFile('yr_v_Laugh_Tsuji_01_pxsps_l_ear',),
                smm2.get(1,),    smm1SoundFile('yr_v_Laugh_Tsuji_02_pxsps_r_ear',),
                smm2.get(2,),    smm1SoundFile('yr_v_Laugh_Tsuji_03_pxsps_l_ear',),
                smm2.getLast(),  smm1SoundFile('yr_v_Laugh_Tsuji_04_pxsps_r_ear',)
            ,],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([
                smm2SoundFile('yr_v_Laugh_Tsuji_01',), smm2SoundFile('yr_v_Laugh_Tsuji_02',),
                smm2SoundFile('yr_v_Laugh_Tsuji_03',), smm2SoundFile('yr_v_Laugh_Tsuji_04',),
            ],)
        }

    }('Laughter',)
    public static readonly GUFFAW =                     new class SoundEffects_Guffaw extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'LoudLaughter' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_oowarai_06

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([
                smm2SoundFile('se_otoasobi_oowarai_00',),
                smm2SoundFile('se_otoasobi_oowarai_01',),
                smm2SoundFile('se_otoasobi_oowarai_02',),
                smm2SoundFile('se_otoasobi_oowarai_03',),
                smm2SoundFile('se_otoasobi_oowarai_04',),
                smm2SoundFile('se_otoasobi_oowarai_05',),
                smm2SoundFile('se_otoasobi_oowarai_06',),
                smm2SoundFile('se_otoasobi_oowarai_07',),
            ],)
        }

    }('Guffaw',)
    public static readonly BOOO =                       new class SoundEffects_Booo extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Boo' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_Booing01

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_Booing01',),],)
        }

    }('Booo!',)
    public static readonly CHEER =                      new class SoundEffects_Cheer extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '04_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Cheer' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm1 → SE_DaigunshuShort
        //README: The editor sound in Smm2 → Otoasobi_Crowd_yubibue

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('SE_DaigunshuShort',), smm1SoundFile('SE_daikansei_3d',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_Crowd_yubibue',), smm2SoundFile('Otoasobi_Crowd_donpafu',),],)
        }

    }('Cheer',)
    public static readonly BABY =                       new class SoundEffects_Baby extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '10_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Baby' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → SE_Affun

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('SE_Affun_outL_type4_invF_Rmic',), smm1SoundFile('SE_Affun_outR_type4_invF_Rmic',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_Affun',), smm2SoundFile('se_otoasobi_affun_night',),],)
        }

    }('Baby',)
    public static readonly PARTY_POPPER =               new class SoundEffects_PartyPopper extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Cracker' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_Cracker

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_Cracker',),],)
        }

    }('Party Popper',)
    public static readonly APPLAUSE =                   new class SoundEffects_Applause extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '04_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Applause' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm1 → SE_KANSEI
        //README: The editor sound in Smm2 → Otoasobi_Crap

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('SE_KANSEI',), smm1SoundFile('SE_KANSEI_pxsps_l_ear',), smm1SoundFile('SE_KANSEI_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_Crap',),],)
        }

    }('Applause',)
    public static readonly NEAR_MISS =                  new class SoundEffects_NearMiss extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Incident' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_hiyarihat_07_edit

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_hiyarihat_07_edit',), smm2SoundFile('se_otoasobi_hiyarihat_07',),],)
        }

    }('Near Miss',)

    public static readonly CLATTER =                    new class SoundEffects_Clatter extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '01_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Clatter' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_02_destruction01_2D_L_pxsps_l_ear

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_02_destruction01_3D_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_02_destruction01_3D_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_02_destruction01_2D_L_pxsps_l_ear',),],)
        }

    }('Clatter',)
    public static readonly DRAMA =                      new class SoundEffects_Drama extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '01_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Drama' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm1 → yr_SToy_02_shocking4_2D_L_pxsps_l_ear
        //README: The editor sound in Smm2 → se_otoasobi_gagaaan

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('yr_SToy_02_shocking4_2D_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_02_shocking4_3D_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_02_shocking4_3D_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_gagaaan',),],)
        }

    }('Drama!',)
    public static readonly KICK =                       new class SoundEffects_Kick extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '02_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Kick' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_03_Aw_2D

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_03_Aw_3D_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_03_Aw_3D_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_03_Aw_2D',),],)
        }

    }('Kick',)
    public static readonly JUMP =                       new class SoundEffects_Jump extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '02_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Jump' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → yr_SToy_03_How_2D

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_03_How_3D_L_pxsps_r_ear',), smm1SoundFile('yr_SToy_03_How_3D_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_03_How_2D',),],)
        }

    }('Jump',)
    public static readonly HONK_HONK =                  new class SoundEffects_HonkHonk extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '10_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Honk' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → bse_pafu00.a.44.cn4

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm2.getLast(), smm1SoundFile('yr_SToy_03_How_3D_L_pxsps_r_ear',), smm1SoundFile('yr_SToy_03_How_3D_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('bse_pafu00.a.44.cn4',), smm2SoundFile('bse_pafu00_e.44.cn4',),],)
        }

    }('Honk Honk',)
    public static readonly PUNCH =                      new class SoundEffects_Punch extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '06_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Punch' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm1 → SE_Punch3_pxsps_r_ear
        //README: The editor sound in Smm2 → SE_Punch4

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('SE_Punch3_pxsps_r_ear',), smm1SoundFile('SE_Punch4_pxsps_l_ear',), smm1SoundFile('bse_cat00_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_Punch3_excited',), smm2SoundFile('SE_Punch4',), smm2SoundFile('SE_Punch4_excited',),],)
        }

    }('Punch',)
    public static readonly OINK =                       new class SoundEffects_Oink extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Whoopee' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_oimo

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_oimo',), smm2SoundFile('se_mariopaint-pig',), smm2SoundFile('se_otoasobi_whoopee_0',),],)
        }

    }('Oink',)
    public static readonly KUH_THUNK =                  new class SoundEffects_Kuh_Thunk extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Focus' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_dodon

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_dodon',),],)
        }

    }('Kuh-thunk!',)
    public static readonly BEEP =                       new class SoundEffects_Beep extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Glitch' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → glitch_M1_000

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([
                smm2SoundFile('glitch_M1_000',), smm2SoundFile('glitch_M1_001',), smm2SoundFile('glitch_M1_002',),
                smm2SoundFile('glitch_M1_003',), smm2SoundFile('glitch_M1_004',), smm2SoundFile('glitch_M1_005',),
                smm2SoundFile('glitch_M1_006',), smm2SoundFile('glitch_M1_007',),
                smm2SoundFile('muon_2sec',),
            ],)
        }

    }('Beep!',)
    public static readonly NINJA_ATTACK =               new class SoundEffects_NinjaAttack extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Uproar' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.NINJA_ATTACK_EDITOR.file, Tracks.NINJA_ATTACK.file,],)
        }

    }('Ninja Attack!',)
    public static readonly ZAP =                        new class SoundEffects_Zap extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Discord' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_gaaann

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_gaaann',),],)
        }

    }('Zap!',)

    public static readonly DING_DONG =                  new class SoundEffects_DingDong extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '11_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Ding' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → SE_BELL

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('SE_BELL_pxsps_l_ear',), smm1SoundFile('SE_BELL_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_BELL',), smm2SoundFile('SE_BELL_excited',),],)
        }

        protected override _createSoundsInSmbOnLink() {
            return new ArrayAsCollection([smm2SoundFile('SE_LinkItemAppear',),],)
        }

    }('Ding Dong',)
    public static readonly BZZZT =                      new class SoundEffects_Bzzzzt extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '11_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Bzzzt' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → SE_BU=

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('SE_BU_pxsps_l_ear',), smm1SoundFile('SE_BU_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('SE_BU=',), smm2SoundFile('SE_BU=_excited',),],)
        }

    }('Bzzzt!',)
    public static readonly GLORY =                      new class SoundEffects_Glory extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '05_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Glory' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_06_Godd_01

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_06_Godd_01_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_06_Godd_01',),],)
        }

    }('Glory',)
    public static readonly DOOM =                       new class SoundEffects_Doom extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '05_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Doom' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_06_Devil_01

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_06_Devil_01_pxsps_l_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_06_Devil_01',),],)
        }

    }('Doom',)
    public static readonly YEAH =                       new class SoundEffects_Yeah extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Admiration' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_YEAH

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_YEAH',),],)
        }

    }('Yeah!',)
    public static readonly AWW =                        new class SoundEffects_Aww extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Anguish' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_AAHH

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_AAHH',),],)
        }

    }('Aww...',)

    public static readonly FIREWORKS =                  new class SoundEffects_Fireworks extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '06_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Fireworks' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_07_FireWorks_01

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm1SoundFile('yr_SToy_07_FireWorks_01_1_pxsps_r_ear',), smm1SoundFile('yr_SToy_07_FireWorks_01_2_pxsps_l_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_07_FireWorks_01',), smm2SoundFile('yr_SToy_07_FireWorks_01_1',), smm2SoundFile('yr_SToy_07_FireWorks_01_2',),],)
        }

    }('Fireworks',)
    public static readonly AUDIENCE =                   new class SoundEffects_Audience extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Audience' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.AUDIENCE.file,],)
        }


    }('Audience',)
    public static readonly SCATTING =                   new class SoundEffects_Scatting extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Scat' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.SCATTING.file,],)
        }


    }('Scatting',)
    public static readonly BIRD_CHIRPING =              new class SoundEffects_BirdChirping extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '09_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        //README: The editor sound in Smm1 → SE_UGUISU

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('SE_UGUISU',), smm1SoundFile('SE_UGUISU_Edit',), smm1SoundFile('SE_UGUISU_pxsps_r_ear',),],)
        }

    }('Bird’s Chirping',)
    public static readonly SPARK =                      new class SoundEffects_Spark extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Firecracker' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_spark_02

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([
                smm2SoundFile('se_otoasobi_spark_00',),
                smm2SoundFile('se_otoasobi_spark_01',),
                smm2SoundFile('se_otoasobi_spark_02',),
                smm2SoundFile('se_otoasobi_spark_03',),
                smm2SoundFile('se_otoasobi_spark_04',),
            ],)
        }

    }('Spark',)
    public static readonly TRADITIONAL =                new class SoundEffects_Traditional extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Ohayasi' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.TRADITIONAL.file,],)
        }


    }('Traditional',)
    public static readonly ELECTRIC_GUITAR =            new class SoundEffects_ElectricGuitar extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'ElectricGuitar' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_Guitar01

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('Otoasobi_Guitar01',), smm2SoundFile('Otoasobi_Guitar02',),],)
        }

    }('Electric Guitar',)
    public static readonly DISTORTION =                 new class SoundEffects_Distortion extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '12_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        //README: The editor sound in Smm1 → yr_TaoeDown_01

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([
                smm1SoundFile('yr_TaoeDown_01',),
                smm1SoundFile('yr_SToy_13_Sweep_01',), smm1SoundFile('yr_SToy_13_Sweep_01_l_ear',), smm1SoundFile('yr_SToy_13_Sweep_01_r_ear',), smm1SoundFile('yr_Sweep_Up_01',),
            ],)
        }

    }('Distortion',)
    public static readonly TWISTY_TURNY =               new class SoundEffects_TwistyTurny extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Filter' as const satisfies SoundEffectImageName_SMM2
        }

        //README: The editor sound in Smm2 → Otoasobi_DJ00

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return SoundEffects._soundsForTwistyTurnyAndWoozy
        }

    }('Twisty Turny',)
    public static readonly WOOZY =                      new class SoundEffects_Woozy extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'SoundEffect' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_DJ03

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return SoundEffects._soundsForTwistyTurnyAndWoozy
        }

    }('Woozy',)
    public static readonly TELEPHONE =                  new class SoundEffects_Telephone extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '12_00' as const satisfies SoundEffectImageNumber_SMM1
        }


        //README: The editor sound in Smm1 → yr_SToy_11_TEL_2D_H_Long_R

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([
                smm1SoundFile('yr_SToy_11_TEL_2D_H_Long_L',),
                smm1SoundFile('yr_SToy_11_TEL_2D_H_Long_R',),
                smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_L',),
                smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_mono',),
                smm1SoundFile('yr_SToy_11_TEL_2D_H_Short_R',),
                smm1SoundFile('yr_SToy_11_TEL_2D_L_Long_L',),
                smm1SoundFile('yr_SToy_11_TEL_2D_L_Long_R',),
                smm1SoundFile('yr_SToy_11_TEL_2D_L_Short_L',),
                smm1SoundFile('yr_SToy_11_TEL_2D_L_Short_R',),

                smm1SoundFile('yr_SToy_11_TEL_3D_H_Long_L_pxsps_l_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_H_Long_R_pxsps_r_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_H_Short_L_pxsps_l_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_H_Short_R_pxsps_r_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_L_Long_L_pxsps_l_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_L_Long_R_pxsps_r_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_L_Short_L_pxsps_l_ear',),
                smm1SoundFile('yr_SToy_11_TEL_3D_L_Short_R_pxsps_r_ear',),
            ],)
        }

    }('Telephone',)
    public static readonly FLASH =                      new class SoundEffects_Flash extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Halo' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → se_otoasobi_haloeffect

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_haloeffect',),],)
        }

    }('Flash',)

    public static readonly PEACEFUL =                   new class SoundEffects_Peaceful extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Calm' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_Calm_Hit_01

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([
                smm2SoundFile('Otoasobi_Calm_Hit_01',),
                smm2SoundFile('Otoasobi_Calm_Harp_01',),
                smm2SoundFile('Otoasobi_Calm_Harp_02',),
                smm2SoundFile('Otoasobi_Calm_Harp_03',),
                smm2SoundFile('Otoasobi_Calm_Harp_04',),
                smm2SoundFile('Otoasobi_Calm_Harp_05',),
                SoundEffects._calmHarp6Sound,
                smm2SoundFile('Otoasobi_Calm_Harp_07',),
                smm2SoundFile('Otoasobi_Calm_Harp_09',),
                smm2SoundFile('Otoasobi_Calm_Harp_10',),
                smm2SoundFile('Otoasobi_Calm_Pad_01',),
                smm2SoundFile('Otoasobi_Calm_Pad_02',),
                smm2SoundFile('Otoasobi_Calm_Pad_03',),
                smm2SoundFile('Otoasobi_Calm_Pad_04',),
                smm2SoundFile('Otoasobi_Calm_Pad_05',),
                smm2SoundFile('Otoasobi_Calm_Pad_06',),
                smm2SoundFile('Otoasobi_Calm_Pad_07',),
                smm2SoundFile('Otoasobi_Calm_Pad_09',),
                smm2SoundFile('Otoasobi_Calm_Pad_10',),
                smm2SoundFile('Otoasobi_Calm_Pad_11',),
                smm2SoundFile('Otoasobi_Calm_SE_01',),
                smm2SoundFile('Otoasobi_Calm_SE_02',),
                smm2SoundFile('Otoasobi_Calm_SE_03',),
                smm2SoundFile('Otoasobi_Calm_SE_04',),
                smm2SoundFile('Otoasobi_Calm_SE_05',),
                smm2SoundFile('Otoasobi_Calm_SE_06',),
                smm2SoundFile('Otoasobi_Calm_SE_07',),
                smm2SoundFile('Otoasobi_Calm_SE_08_edit',),
                SoundEffects._horror4Sound,
            ],)
        }

        protected override _createSoundsInSmbOnLink() {
            return new ArrayAsCollection([Tracks.PEACEFUL_LINK.file,],)
        }

        protected override _createSoundsInSmbOnSmb2() {
            return new ArrayAsCollection([Tracks.PEACEFUL_SMB2.file,],)
        }

    }('Peaceful',)
    public static readonly HORROR =                     new class SoundEffects_Horror extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Unrest' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm2 → Otoasobi_Horror_01

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            //'se_otoasobi_hachoo'
            return new ArrayAsCollection([
                SoundEffects._calmHarp6Sound,
                smm2SoundFile('Otoasobi_Horror_01',),
                smm2SoundFile('Otoasobi_Horror_02',),
                smm2SoundFile('Otoasobi_Horror_03',),
                SoundEffects._horror4Sound,
                smm2SoundFile('Otoasobi_Horror_05',),
                smm2SoundFile('Otoasobi_Horror_SE_01',),
                smm2SoundFile('Otoasobi_Horror_SE_02',),
                smm2SoundFile('Otoasobi_Horror_SE_03',),
                smm2SoundFile('Otoasobi_Horror_SE_04',),
                smm2SoundFile('Otoasobi_Horror_SE_05',),
                smm2SoundFile('Otoasobi_Horror_SE_06',),
                smm2SoundFile('Otoasobi_Horror_SE_07',),
                smm2SoundFile('Otoasobi_Horror_SE_08',),
                smm2SoundFile('Otoasobi_Horror_Strings_01',),
                smm2SoundFile('Otoasobi_Horror_Strings_02',),
            ],)
        }

    }('Horror',)
    public static readonly FESTIVE_MUSIC =              new class SoundEffects_FestiveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '07_00' as const satisfies SoundEffectImageNumber_SMM1
        }


        //README: The editor sound in Smm1 → SE_Samba3

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('SE_SAMBA_3D_Perc',), smm1SoundFile('SE_Samba3',),])
        }

    }('Festive Music',)
    public static readonly RAVE_MUSIC =                 new class SoundEffects_RaveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '07_01' as const satisfies SoundEffectImageNumber_SMM1
        }


        //README: The editor sound in Smm2 → SE_Disco6measure_InUp2

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('SE_Disco6measure',), smm1SoundFile('SE_Disco6measure_InUp2',),])
        }

    }('Rave Music',)
    public static readonly HEARTBEAT =                  new class SoundEffects_HeartBeat extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '03_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Heartbeat' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound → yr_SToy_04_HeartBeat_p1

        protected override _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,) {
            return new ArrayAsCollection([smm2.getFirst(), smm2.get(1,), smm2.getLast(), smm1SoundFile('yr_SToy_04_HeartBeat_H_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_04_HeartBeat_H_R_pxsps_r_ear',),],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('yr_SToy_04_HeartBeat_p1',), smm2SoundFile('yr_SToy_04_HeartBeat_p2',), smm2SoundFile('yr_SToy_04_HeartBeat_p3',),],)
        }

    }('Heartbeat',)
    public static readonly SILENCE =                    new class SoundEffects_Silence extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '03_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Silence' as const satisfies SoundEffectImageName_SMM2
        }


        //README: The editor sound in Smm1 → yr_NOISE_short_1
        //README: The editor sound in Smm2 → se_otoasobi_silence

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([
                smm1SoundFile('yr_NOISE_short_1',), smm1SoundFile('yr_NOISE_short_1_pxsps_l_ear',),
                smm1SoundFile('yr_NOISE_short_2',), smm1SoundFile('yr_NOISE_short_2_pxsps_r_ear',),
                smm1SoundFile('yr_NOISE_short_3',), smm1SoundFile('yr_NOISE_short_3_pxsps_l_ear',),
            ],)
        }

        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([smm2SoundFile('se_otoasobi_silence',),],)
        }

    }('Silence',)
    public static readonly BIRD_TWEETING_NOISE =        new class SoundEffects_BirdTweetingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return ['13_00', '14_00',] as const satisfies Array<SoundEffectImageNumber_SMM1>
        }


        //README: The editor sound in Smm2 → hz_inco_1_removed1s50per

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('hz_inco_1_removed1s50per',), smm1SoundFile('hz_inco_1_L_pxsps_l_ear',), smm1SoundFile('hz_inco_1_R_pxsps_r_ear',),],)
        }

    }('Bird’s Tweeting Noise',)
    public static readonly CHICKEN_CLUCKING_NOISE =     new class SoundEffects_ChickenCluckingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return ['13_01', '14_01',] as const satisfies Array<SoundEffectImageNumber_SMM1>
        }


        //README: The editor sound in Smm2 → yr_SToy_14_Bird_B_01

        protected override _createSoundsInNoSpecificGameStyleInSmm1() {
            return new ArrayAsCollection([smm1SoundFile('yr_SToy_14_Bird_B_01',), smm1SoundFile('yr_SToy_14_Bird_B_L_pxsps_l_ear',), smm1SoundFile('yr_SToy_14_Bird_B_R_pxsps_r_ear',),],)
        }

    }('Chicken’s Clucking Noise',)

    public static readonly BONUS_MUSIC =                new class SoundEffects_BonusMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '08_01' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Bonus' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInSmb() {
            return new ArrayAsCollection([Tracks.BONUS_SMB_EDITOR.file, Tracks.BONUS_SMB.file, Tracks.BONUS_SMB_FAST.file,],)
        }

        protected override _createSoundsInSmb3() {
            return new ArrayAsCollection([Tracks.BONUS_SMB3_EDITOR.file, Tracks.BONUS_SMB3.file, Tracks.BONUS_SMB3_FAST.file,],)
        }

        protected override _createSoundsInSmw() {
            return new ArrayAsCollection([Tracks.BONUS_SMW_EDITOR.file, Tracks.BONUS_SMW.file, Tracks.BONUS_SMW_FAST.file,],)
        }

        protected override _createSoundsInNsmbu() {
            return new ArrayAsCollection([Tracks.BONUS_NSMBU_EDITOR.file, Tracks.BONUS_NSMBU.file, Tracks.BONUS_NSMBU_FAST.file,],)
        }

        protected override _createSoundsInNsmbuOnYoshi() {
            return new ArrayAsCollection([Tracks.BONUS_NSMBU_YOSHI.file, Tracks.BONUS_NSMBU_YOSHI_FAST.file,],)
        }

        protected override _createSoundsInSm3dw() {
            return new ArrayAsCollection([Tracks.BONUS_SM3DW_EDITOR.file, Tracks.BONUS_SM3DW.file, Tracks.BONUS_SM3DW_FAST.file,],)
        }

    }('Bonus Music',)
    public static readonly BOSS_MUSIC =                 new class SoundEffects_BossMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers() {
            return '08_00' as const satisfies SoundEffectImageNumber_SMM1
        }

        protected override _createSMM2ImageName() {
            return 'Boss' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInSmb() {
            return new ArrayAsCollection([Tracks.BOSS_SMB_EDITOR.file, Tracks.BOSS_SMB.file, Tracks.BOSS_SMB_FAST.file,],)
        }

        protected override _createSoundsInSmb3() {
            return new ArrayAsCollection([Tracks.BOSS_SMB3_EDITOR.file, Tracks.BOSS_SMB3.file, Tracks.BOSS_SMB3_FAST.file,],)
        }

        protected override _createSoundsInSmw() {
            return new ArrayAsCollection([Tracks.BOSS_SMW_EDITOR.file, Tracks.BOSS_SMW.file, Tracks.BOSS_SMW_FAST.file,],)
        }

        protected override _createSoundsInNsmbu() {
            return new ArrayAsCollection([Tracks.BOSS_NSMBU_EDITOR.file, Tracks.BOSS_NSMBU.file, Tracks.BOSS_NSMBU_FAST.file,],)
        }

        protected override _createSoundsInSm3dw() {
            return new ArrayAsCollection([Tracks.BOSS_SM3DW_EDITOR.file, Tracks.BOSS_SM3DW.file, Tracks.BOSS_SM3DW_FAST.file,],)
        }

    }('Boss Music',)
    public static readonly FINAL_BOSS_MUSIC =           new class SoundEffects_FinalBossMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'LastBoss' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInSmb() {
            return new ArrayAsCollection([Tracks.FINAL_BOSS_SMB3_EDITOR.file, Tracks.FINAL_BOSS_SMB3.file, Tracks.FINAL_BOSS_SMB3_FAST.file,],)
        }

        protected override _createSoundsInSmb3() {
            return new ArrayAsCollection([Tracks.FINAL_BOSS_SMB3_EDITOR.file, Tracks.FINAL_BOSS_SMB3.file, Tracks.FINAL_BOSS_SMB3_FAST.file,],)
        }

        protected override _createSoundsInSmw() {
            return new ArrayAsCollection([Tracks.FINAL_BOSS_SMW_EDITOR.file, Tracks.FINAL_BOSS_SMW.file, Tracks.FINAL_BOSS_SMW_FAST.file,],)
        }

        protected override _createSoundsInNsmbu() {
            return new ArrayAsCollection([Tracks.FINAL_BOSS_NSMBU_EDITOR.file, Tracks.FINAL_BOSS_NSMBU.file, Tracks.FINAL_BOSS_NSMBU_FAST.file,],)
        }

        protected override _createSoundsInSm3dw() {
            return new ArrayAsCollection([Tracks.FINAL_BOSS_SM3DW_EDITOR.file, Tracks.FINAL_BOSS_SM3DW.file, Tracks.FINAL_BOSS_SM3DW_FAST.file,],)
        }

    }('Final Boss',)
    public static readonly SUPER_MARIO_KART_MUSIC =     new class SoundEffects_SuperMarioKartMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario03' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.SMK_EDITOR.file, Tracks.SMK.file,],)
        }

    }('Super Mario Kart',)
    public static readonly SUPER_MARIO_64_MUSIC =       new class SoundEffects_SuperMario64Music extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario01' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.SM64_EDITOR.file, Tracks.SM64.file,],)
        }

    }('Super Mario 64',)
    public static readonly SUPER_MARIO_SUNSHINE_MUSIC = new class SoundEffects_SuperMarioSunshineMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario02' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.SMS_EDITOR.file, Tracks.SMS.file,],)
        }

    }('Super Mario Sunshine',)
    public static readonly SUPER_MARIO_GALAXY_MUSIC =   new class SoundEffects_SuperMarioGalaxyMusic extends SoundEffects {

        protected override _createSMM2ImageName() {
            return 'Mario00' as const satisfies SoundEffectImageName_SMM2
        }


        protected override _createSoundsInNoSpecificGameStyleInSmm2() {
            return new ArrayAsCollection([Tracks.SMG_EDITOR.file, Tracks.SMG.file,],)
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

    #soundsInNoSpecificGameStyleInSmm1?: CollectionHolder<SoundFile>
    #soundsInNoSpecificGameStyleInSmm2?: CollectionHolder<SoundFile>

    #soundsInSmb?: CollectionHolder<SoundFile>
    #soundsInSmbOnLink?: CollectionHolder<SoundFile>
    #soundsInSmbOnSmb2?: CollectionHolder<SoundFile>

    #soundsInSmb3?: CollectionHolder<SoundFile>
    #soundsInSmw?: CollectionHolder<SoundFile>
    #soundsInNsmbu?: CollectionHolder<SoundFile>
    #soundsInNsmbuOnYoshi?: CollectionHolder<SoundFile>
    #soundsInSm3dw?: CollectionHolder<SoundFile>

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
        return this.#reference ??= SoundEffects.REFERENCE_MAP.get(this.englishName,)!
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
            return this.#smm1ImageFiles = smm1ImageFiles(this.englishName, imageNumbers,)
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
            return this.#smm2ImageFile = smm2ImageFile(this.englishName, imageName,)
        }
        return this.#smm2ImageFile
    }

    //endregion -------------------- Getter methods (image) --------------------
    //region -------------------- Getter methods (sound) --------------------

    public get soundsInNoSpecificGameStyleInSmm1(): CollectionHolder<SoundFile> { return this.#soundsInNoSpecificGameStyleInSmm1 ??= this._createSoundsInNoSpecificGameStyleInSmm1(this.soundsInNoSpecificGameStyleInSmm2,) }
    protected _createSoundsInNoSpecificGameStyleInSmm1(smm2: CollectionHolder<SoundFile>,): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInNoSpecificGameStyleInSmm2(): CollectionHolder<SoundFile> { return this.#soundsInNoSpecificGameStyleInSmm2 ??= this._createSoundsInNoSpecificGameStyleInSmm2() }
    protected _createSoundsInNoSpecificGameStyleInSmm2(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSmb(): CollectionHolder<SoundFile> { return this.#soundsInSmb ??= this._createSoundsInSmb() }
    protected _createSoundsInSmb(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSmbOnLink(): CollectionHolder<SoundFile> { return this.#soundsInSmbOnLink ??= this._createSoundsInSmbOnLink() }
    protected _createSoundsInSmbOnLink(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSmbOnSmb2(): CollectionHolder<SoundFile> { return this.#soundsInSmbOnSmb2 ??= this._createSoundsInSmbOnSmb2() }
    protected _createSoundsInSmbOnSmb2(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSmb3(): CollectionHolder<SoundFile> { return this.#soundsInSmb3 ??= this._createSoundsInSmb3() }
    protected _createSoundsInSmb3(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSmw(): CollectionHolder<SoundFile> { return this.#soundsInSmw ??= this._createSoundsInSmw() }
    protected _createSoundsInSmw(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInNsmbu(): CollectionHolder<SoundFile> { return this.#soundsInNsmbu ??= this._createSoundsInNsmbu() }
    protected _createSoundsInNsmbu(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInNsmbuOnYoshi(): CollectionHolder<SoundFile> { return this.#soundsInNsmbuOnYoshi ??= this._createSoundsInNsmbuOnYoshi() }
    protected _createSoundsInNsmbuOnYoshi(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    public get soundsInSm3dw(): CollectionHolder<SoundFile> { return this.#soundsInSm3dw ??= this._createSoundsInSm3dw() }
    protected _createSoundsInSm3dw(): CollectionHolder<SoundFile> { return EMPTY_COLLECTION_HOLDER }

    //endregion -------------------- Getter methods (sound) --------------------
    //region -------------------- Getter methods (shared sound) --------------------

    protected static get _soundsForTwistyTurnyAndWoozy(): TwistyTurnyAndWoozySounds {
        return this.#SOUNDS_FOR_TWISTY_TURNY_AND_WOOZY ??= new ArrayAsCollection([smm2SoundFile('Otoasobi_DJ00',), smm2SoundFile('Otoasobi_DJ01',), smm2SoundFile('Otoasobi_DJ02',), smm2SoundFile('Otoasobi_DJ03',), smm2SoundFile('Otoasobi_DJ04',), smm2SoundFile('Otoasobi_DJ05',),],)
    }

    protected static get _calmHarp6Sound(): CalmHarp6Sound {
        return this.#CALM_HARP_6_SOUND ??= smm2SoundFile('Otoasobi_Calm_Harp_06',)
    }

    protected static get _horror4Sound(): Horror4Sound {
        return this.#HORROR_4_SOUND ??= smm2SoundFile('Otoasobi_Horror_SE_04',)
    }

    //endregion -------------------- Getter methods (shared sound) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SoundEffects {// eslint-disable-line @typescript-eslint/no-namespace

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

/** The {@link SMM2SoundEffectSoundFile} associated to both {@link SoundEffects.TWISTY_TURNY} and {@link SoundEffects.WOOZY} */
type TwistyTurnyAndWoozySounds = CollectionHolder<SMM2SoundEffectSoundFile<`Otoasobi_DJ0${| 0 | 1 | 2 | 3 | 4 | 5}`>>

type CalmHarp6Sound = SMM2SoundEffectSoundFile<'Otoasobi_Calm_Harp_06'>
type Horror4Sound = SMM2SoundEffectSoundFile<'Otoasobi_Horror_SE_04'>
