import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                   from 'core/ClassWithReference'
import type {MusicSoundFile}                                                                                                                                       from 'core/music/file/MusicSoundFile'
import type {PossibleSoundEffectMusicEditorName}                                                                                                                   from 'core/music/soundEffect/SoundEffectMusic'
import type {SoundEffect}                                                                                                                                          from 'core/soundEffect/SoundEffect'
import type {EnglishNames, Names, Ordinals, PossibleEnglishName, PossibleSMM1ImageFiles, SoundEffectGames, SoundEffectImageName_SMM2, SoundEffectImageNumber_SMM1} from 'core/soundEffect/SoundEffects.types'
import type {SMM1SoundEffectSoundFile}                                                                                                                             from 'core/soundEffect/file/SMM1SoundEffectSoundFile'
import type {SMM2SoundEffectImageFile}                                                                                                                             from 'core/soundEffect/file/SMM2SoundEffectImageFile'
import type {SMM2SoundEffectSoundFile}                                                                                                                             from 'core/soundEffect/file/SMM2SoundEffectSoundFile'
import type {SoundEffectSoundFile}                                                                                                                                 from 'core/soundEffect/file/SoundEffectSoundFile'
import type {PossibleValueOnLinkOrSMB2Value_SMM2, SMM2SoundEffectSound}                                                                                            from 'core/soundEffect/sound/SMM2SoundEffectSound'
import type {SMM1ExclusiveSoundEffectSound}                                                                                                                        from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound'
import type {SMM1StandaloneSoundEffectSound}                                                                                                                       from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound'
import type {SoundEffectSoundNamesForTwistyTurnyAndWoozy}                                                                                                          from 'core/soundEffect/sound/types'
import type {Builder}                                                                                                                                              from 'util/builder/Builder'
import type {Nullable, NullOr}                                                                                                                                     from 'util/types/nullable'

import type {Musics}                                        from 'core/music/Musics'
import SoundEffectComponent                                 from 'core/soundEffect/SoundEffect.component'
import {SoundEffectFromMusicAdaptor}                        from 'core/soundEffect/SoundEffectFromMusicAdaptor'
import {SMM1SoundEffectImageFileContainer as SMM1ImageFile} from 'core/soundEffect/file/SMM1SoundEffectImageFile.container'
import {SMM2SoundEffectImageFileContainer as SMM2ImageFile} from 'core/soundEffect/file/SMM2SoundEffectImageFile.container'
import {EmptySMMSoundEffectSound}                           from 'core/soundEffect/sound/EmptySMMSoundEffectSound'
import {SMM1ExclusiveSoundEffectSoundBuilder}               from 'core/soundEffect/sound/SMM1ExclusiveSoundEffectSound.builder'
import {SMM1StandaloneSoundEffectSoundBuilder}              from 'core/soundEffect/sound/SMM1StandaloneSoundEffectSound.builder'
import {SMM2SoundEffectSoundFromSoundEffectBuilder}         from 'core/soundEffect/sound/SMM2SoundEffectSoundFromSoundEffect.builder'
import {Import}                                             from 'util/DynamicImporter'
import {StringContainer}                                    from 'util/StringContainer'
import {getValueByEnglishName}                              from 'util/utilitiesMethods'

/**
 * @todo move the images in a delayed method instead of in the constructor.
 * @recursiveReference {@link SoundEffectLoader}, {@link Musics}
 * @classWithDynamicImport {@link SoundEffectLoader}
 */
export abstract class SoundEffects
    extends Enum<Ordinals, Names>
    implements ClassWithReference<SoundEffect>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SHOCK =                      new class SoundEffects_Shock extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '00_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Shock'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(endName => `yr_SToy_01_OssanOdoroki_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_OssanOdoroki',)
        }

    }('Shock',)
    public static readonly SCREAM =                     new class SoundEffects_Scream extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '00_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Scream'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(endName => `yr_SToy_01_OssanHimei4_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_OssanHimei4',)
        }

    }('Scream',)
    public static readonly LAUGHTER =                   new class SoundEffects_Laughter extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '09_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Laughter'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = (['1_pxsps_l', '2_pxsps_r', '3_pxsps_l', '4_pxsps_r',] as const).map(endName => `yr_v_Laugh_Tsuji_0${endName}_ear`as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .smm2(1).smm1(1)
                .smm2(2).smm1(2)
                .smm2(3).smm1(3)
                .editor(2, 4,)/*FIXME change to 2 only*/.smm1(4)
        }

        protected override _createSMM2Sounds() {
            const sounds = ([1, 2, 3, 4,] as const).map(index => `yr_v_Laugh_Tsuji_0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
                .editor(4)
        }

    }('Laughter',)
    public static readonly GUFFAW =                     new class SoundEffects_Guffaw extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'LoudLaughter'
        }


        protected override _createSMM2Sounds() {
            const sounds = ([0, 1, 2, 3, 4, 5, 6, 7,] as const).map(index => `se_otoasobi_oowarai_0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
                .editor(7)
        }

    }('Guffaw',)
    public static readonly BOOO =                       new class SoundEffects_Booo extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Boo'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Booing01',)
        }

    }('Booo!',)
    public static readonly CHEER =                      new class SoundEffects_Cheer extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '04_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Cheer'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('SE_DaigunshuShort', 'SE_daikansei_3d',)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Crowd_yubibue', 'Otoasobi_Crowd_donpafu',)
        }

    }('Cheer',)
    public static readonly BABY =                       new class SoundEffects_Baby extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '10_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Baby'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_AND_RIGHT_UPPERCASE.map(direction => `SE_Affun_out${direction}_type4_invF_Rmic` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_Affun', 'se_otoasobi_affun_night',)
        }

    }('Baby',)
    public static readonly PARTY_POPPER =               new class SoundEffects_PartyPopper extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Cracker'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Cracker',)
        }

    }('Party Popper',)
    public static readonly APPLAUSE =                   new class SoundEffects_Applause extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '04_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Applause'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = (['', SoundEffects._LEFT_AND_RIGHT_LOWERCASE.map(direction => `_pxsps_${direction}_ear` as const)] as const).flat().map(endName => `SE_KANSEI${endName}` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Crap',)
        }

    }('Applause',)
    public static readonly NEAR_MISS =                  new class SoundEffects_NearMiss extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Incident'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_hiyarihat_07_edit', 'se_otoasobi_hiyarihat_07',)
        }

    }('Near Miss',)

    public static readonly CLATTER =                    new class SoundEffects_Clatter extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '01_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Clatter'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(endName => `yr_SToy_02_destruction01_3D_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('yr_SToy_02_destruction01_2D_L_pxsps_l_ear',)
        }

    }('Clatter',)
    public static readonly DRAMA =                      new class SoundEffects_Drama extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '01_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Drama'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = (['2D_L_pxsps_l', '3D_L_pxsps_l','3D_R_pxsps_r',] as const).map(endName => `yr_SToy_02_shocking4_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_gagaaan',)
        }

    }('Drama!',)
    public static readonly KICK =                       new class SoundEffects_Kick extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '02_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Kick'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(endName => `yr_SToy_03_Aw_3D_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('yr_SToy_03_Aw_2D',)
        }

    }('Kick',)
    public static readonly JUMP =                       new class SoundEffects_Jump extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '02_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Jump'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_RIGHT_AND_RIGHT_RIGHT.map(endName => `yr_SToy_03_How_3D_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('yr_SToy_03_How_2D',)
        }

    }('Jump',)
    public static readonly HONK_HONK =                  new class SoundEffects_HonkHonk extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '10_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Honk'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_AND_RIGHT_LOWERCASE.map(direction => `bse_pafu00_e.a.44.cn4_pxsps_${direction}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .editor(2, 1,)
                .smm2(2).smm1(1).smm1(2)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('bse_pafu00.a.44.cn4', 'bse_pafu00_e.44.cn4',)
        }

    }('Honk Honk',)
    public static readonly PUNCH =                      new class SoundEffects_Punch extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '06_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Punch'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('SE_Punch3_pxsps_r_ear', 'SE_Punch4_pxsps_l_ear', 'bse_cat00_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .smm2(1).editor(1, 1).smm1(2)
                .smm1(3)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_Punch3_excited', 'SE_Punch4', 'SE_Punch4_excited',)
                .editor(2)
        }

    }('Punch',)
    public static readonly OINK =                       new class SoundEffects_Oink extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Whoopee'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_oimo', 'se_mariopaint-pig', 'se_otoasobi_whoopee_0',)
        }

    }('Oink',)
    public static readonly KUH_THUNK =                  new class SoundEffects_Kuh_Thunk extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Focus'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_dodon',)
        }

    }('Kuh-thunk!',)
    public static readonly BEEP =                       new class SoundEffects_Beep extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Glitch'
        }


        protected override _createSMM2Sounds() {
            const sounds = ([0, 1, 2, 3, 4, 5, 6, 7,] as const).map(index => `glitch_M1_00${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(...sounds, 'muon_2sec',)
        }

    }('Beep!',)
    public static readonly NINJA_ATTACK =               new class SoundEffects_NinjaAttack extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Uproar'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.NINJA_ATTACK
        }

    }('Ninja Attack!',)
    public static readonly ZAP =                        new class SoundEffects_Zap extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Discord'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_gaaann',)
        }

    }('Zap!',)

    public static readonly DING_DONG =                  new class SoundEffects_DingDong extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '11_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Ding'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_AND_RIGHT_LOWERCASE.map(direction => `SE_BELL_pxsps_${direction}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_BELL', 'SE_BELL_excited', 'SE_LinkItemAppear',)
                .link(3)
        }

    }('Ding Dong',)
    public static readonly BZZZT =                      new class SoundEffects_Bzzzzt extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '11_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Bzzzt'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_AND_RIGHT_LOWERCASE.map(direction => `SE_BU_pxsps_${direction}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('SE_BU=', 'SE_BU=_excited',)
        }

    }('Bzzzt!',)
    public static readonly GLORY =                      new class SoundEffects_Glory extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '05_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Glory'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('yr_SToy_06_Godd_01_pxsps_r_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor1Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('yr_SToy_06_Godd_01',)
        }

    }('Glory',)
    public static readonly DOOM =                       new class SoundEffects_Doom extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '05_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Doom'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('yr_SToy_06_Devil_01_pxsps_l_ear',)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor1Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('yr_SToy_06_Devil_01',)
        }

    }('Doom',)
    public static readonly YEAH =                       new class SoundEffects_Yeah extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Admiration'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_YEAH',)
        }

    }('Yeah!',)
    public static readonly AWW =                        new class SoundEffects_Aww extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Anguish'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_AAHH',)
        }

    }('Aww...',)

    public static readonly FIREWORKS =                  new class SoundEffects_Fireworks extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '06_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Fireworks'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = (['1_pxsps_r', '2_pxsps_l',] as const).map(endName => `yr_SToy_07_FireWorks_01_${endName}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return SoundEffects._smm1ExclusiveCallbackFor2Smm1And1Smm2(smm1, smm2,)
        }

        protected override _createSMM2Sounds() {
            const sounds = ([1, '1_1', '1_2',] as const).map(number => `yr_SToy_07_FireWorks_0${number}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
        }

    }('Fireworks',)
    public static readonly AUDIENCE =                   new class SoundEffects_Audience extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Audience'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.AUDIENCE
        }


    }('Audience',)
    public static readonly SCATTING =                   new class SoundEffects_Scatting extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Scat'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SCATTING
        }


    }('Scatting',)
    public static readonly BIRD_CHIRPING =              new class SoundEffects_BirdChirping extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '09_01'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('SE_UGUISU', 'SE_UGUISU_Edit', 'SE_UGUISU_pxsps_r_ear',)
        }

    }('Bird\'s Chirping',)
    public static readonly SPARK =                      new class SoundEffects_Spark extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Firecracker'
        }


        protected override _createSMM2Sounds() {
            const sounds = ([0, 1, 2, 3, 4,] as const).map(index => `se_otoasobi_spark_0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
                .editor(3)
        }

    }('Spark',)
    public static readonly TRADITIONAL =                new class SoundEffects_Traditional extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Ohayasi'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.TRADITIONAL
        }


    }('Traditional',)
    public static readonly ELECTRIC_GUITAR =            new class SoundEffects_ElectricGuitar extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'ElectricGuitar'
        }


        protected override _createSMM2Sounds() {
            const sounds = ([1, 2,] as const).map(index => `Otoasobi_Guitar0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
        }

    }('Electric Guitar',)
    public static readonly DISTORTION =                 new class SoundEffects_Distortion extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '12_01'
        }


        protected override _createExclusiveSMM1Sounds() {
            const soundsSweep = (['', '_l_ear', '_r_ear',] as const).map(direction => `yr_SToy_13_Sweep_01${direction}` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder('yr_TaoeDown_01', ...soundsSweep, 'yr_Sweep_Up_01',)
        }

    }('Distortion',)
    public static readonly TWISTY_TURNY =               new class SoundEffects_TwistyTurny extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Filter'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder(SoundEffects._soundsForTwistyTurnyAndWoozy,)
        }

    }('Twisty Turny',)
    public static readonly WOOZY =                      new class SoundEffects_Woozy extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'SoundEffect'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder(SoundEffects._soundsForTwistyTurnyAndWoozy,)
                .editor(5)
        }

    }('Woozy',)
    public static readonly TELEPHONE =                  new class SoundEffects_Telephone extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '12_00'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds2D = (['H_Long_L', 'H_Long_R', 'H_Short_mono', 'H_Short_L', 'H_Short_R', 'L_Long_L', 'L_Long_R', 'L_Short_L', 'L_Short_R',] as const).map(endName => `yr_SToy_11_TEL_2D_${endName}` as const)
            const durations = ['Long', 'Short',] as const
            const orientations = ['H', 'L',] as const
            const sounds3D = orientations.map(orientation => durations.map(duration => SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(direction => `yr_SToy_11_TEL_3D_${orientation}_${duration}_${direction}_ear` as const))).flat(2)
            const sounds = [
                ([0, 1,] as const).map(index => [sounds2D[index], sounds3D[index]]),
                sounds2D[2],
                ([3, 4, 5, 6, 7, 8,] as const).map(index => [sounds2D[index], sounds3D[index - 1],])].flat(2)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
                .editor(3)
        }

    }('Telephone',)
    public static readonly FLASH =                      new class SoundEffects_Flash extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Halo'
        }


        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_haloeffect',)
        }

    }('Flash',)

    public static readonly PEACEFUL =                   new class SoundEffects_Peaceful extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Calm'
        }


        #sounds_smm2?:PossibleSMM2SoundEffect

        public override get sounds_smm2(): PossibleSMM2SoundEffect {
            return this.#sounds_smm2 ??= [Import.Musics.PEACEFUL.music!.everyMusics, super.sounds_smm2,].flat()
        }

        protected override _createSMM2Sounds() {
            const soundsHarp = ([1, 2, 3, 4, 5, 6, 7, 9, 10,] as const).map(index => `Otoasobi_Calm_Harp_${index === 10 ? index : `0${index}` as const}` as const)
            const soundsPad = ([1, 2, 3, 4, 5, 6, 7, 9, 10, 11,] as const).map(index => `Otoasobi_Calm_Pad_${index === 10 || index === 11 ? index : `0${index}` as const}` as const)
            const soundsSE = ([1, 2, 3, 4, 5, 6, 7,] as const).map(index => `Otoasobi_Calm_SE_0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Calm_Hit_01', ...soundsHarp, ...soundsPad, ...soundsSE, 'Otoasobi_Calm_SE_08_edit', 'Otoasobi_Horror_SE_04',)
        }

    }('Peaceful',)
    public static readonly HORROR =                     new class SoundEffects_Horror extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Unrest'
        }


        protected override _createSMM2Sounds() {
            //'se_otoasobi_hachoo'
            const soundsHorror = ([1, 2, 3, 4, 5,] as const).map(index => `Otoasobi_Horror_0${index}` as const)
            const soundsHorrorSE = ([1, 2, 3, 4, 5, 6, 7, 8,] as const).map(index => `Otoasobi_Horror_SE_0${index}` as const)
            const soundsHorrorStrings = ([1, 2,] as const).map(index => `Otoasobi_Horror_Strings_0${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder('Otoasobi_Calm_SE_06', ...soundsHorror, ...soundsHorrorSE, ...soundsHorrorStrings,)
                .editor(2)
        }

    }('Horror',)
    public static readonly FESTIVE_MUSIC =              new class SoundEffects_FestiveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '07_00'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('SE_SAMBA_3D_Perc', 'SE_Samba3',)
                .editor(2)
        }

    }('Festive Music',)
    public static readonly RAVE_MUSIC =                 new class SoundEffects_RaveMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '07_01'
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('SE_Disco6measure','SE_Disco6measure_InUp2',)
                .editor(2)
        }

    }('Rave Music',)
    public static readonly HEARTBEAT =                  new class SoundEffects_HeartBeat extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '03_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Heartbeat'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = SoundEffects._LEFT_LEFT_AND_RIGHT_RIGHT.map(direction => `yr_SToy_04_HeartBeat_H_${direction}_ear` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) {
            return new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .editor(2, 1,).smm2(2).smm2(3)
                .smm1(1).smm1(2)
        }

        protected override _createSMM2Sounds() {
            const sounds = ([1, 2, 3,] as const).map(index => `yr_SToy_04_HeartBeat_p${index}` as const)

            return new SMM2SoundEffectSoundFromSoundEffectBuilder(sounds,)
        }

    }('Heartbeat',)
    public static readonly SILENCE =                    new class SoundEffects_Silence extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '03_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Silence'
        }


        protected override _createExclusiveSMM1Sounds() {
            const sounds = ([1, '1_pxsps_l_ear', 2, '2_pxsps_r_ear', 3, '3_pxsps_l_ear',] as const).map(index => `yr_NOISE_short_${index}` as const)

            return new SMM1ExclusiveSoundEffectSoundBuilder(sounds,)
        }

        protected override _createSMM2Sounds() {
            return new SMM2SoundEffectSoundFromSoundEffectBuilder('se_otoasobi_silence',)
        }

    }('Silence',)
    public static readonly BIRD_TWEETING_NOISE =        new class SoundEffects_BirdTweetingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return ['13_00', '14_00',]
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('hz_inco_1_removed1s50per', 'hz_inco_1_L_pxsps_l_ear', 'hz_inco_1_R_pxsps_r_ear',)
        }

    }('Bird\'s Tweeting Noise',)
    public static readonly CHICKEN_CLUCKING_NOISE =     new class SoundEffects_ChickenCluckingNoise extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return ['13_01', '14_01',]
        }


        protected override _createExclusiveSMM1Sounds() {
            return new SMM1ExclusiveSoundEffectSoundBuilder('yr_SToy_14_Bird_B_01', 'yr_SToy_14_Bird_B_L_pxsps_l_ear', 'yr_SToy_14_Bird_B_R_pxsps_r_ear',)
        }

    }('Chicken\'s Clucking Noise',)

    public static readonly BONUS_MUSIC =                new class SoundEffects_BonusMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '08_01'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Bonus'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.BONUS
        }

    }('Bonus Music',)
    public static readonly BOSS_MUSIC =                 new class SoundEffects_BossMusic extends SoundEffects {

        protected override _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
            return '08_00'
        }

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Boss'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.BOSS
        }

    }('Boss Music',)
    public static readonly FINAL_BOSS_MUSIC =           new class SoundEffects_FinalBossMusic extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'LastBoss'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.FINAL_BOSS
        }

    }('Final Boss',)
    public static readonly SUPER_MARIO_KART_MUSIC =     new class SoundEffects_SuperMarioKartMusic extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Mario03'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_KART
        }

    }('Super Mario Kart',)
    public static readonly SUPER_MARIO_64_MUSIC =       new class SoundEffects_SuperMario64Music extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Mario01'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_64
        }

    }('Super Mario 64',)
    public static readonly SUPER_MARIO_SUNSHINE_MUSIC = new class SoundEffects_SuperMarioSunshineMusic extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Mario02'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_SUNSHINE
        }

    }('Super Mario Sunshine',)
    public static readonly SUPER_MARIO_GALAXY_MUSIC =   new class SoundEffects_SuperMarioGalaxyMusic extends SoundEffects {

        public override _createSMM2ImageName(): SoundEffectImageName_SMM2 {
            return 'Mario00'
        }


        protected override _createSMM2Sounds(): Musics {
            return Import.Musics.SUPER_MARIO_GALAXY
        }

    }('Super Mario Galaxy',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundEffects

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SoundEffect>
    static #soundEffect_games?: SoundEffectGames

    #reference?: SoundEffect
    readonly #englishName

    #smm1ImageFiles?: PossibleSMM1ImageFiles
    #smm2ImageFile?: NullOr<SMM2SoundEffectImageFile>

    static #smm1ExclusiveCallbackFor2Smm1And1Smm2: SMM1ExclusiveCallback
    static #smm1ExclusiveCallbackFor1Smm1And1Smm2: SMM1ExclusiveCallback
    static #SOUNDS_FOR_TWISTY_TURNY_AND_WOOZY?: SoundEffectSoundNamesForTwistyTurnyAndWoozy
    protected static readonly _LEFT_AND_RIGHT_LOWERCASE = ['l', 'r',] as const
    protected static readonly _LEFT_AND_RIGHT_UPPERCASE = ['L', 'R',] as const
    protected static readonly _LEFT_LEFT_AND_RIGHT_RIGHT = ['L_pxsps_l', 'R_pxsps_r',] as const
    protected static readonly _LEFT_RIGHT_AND_RIGHT_RIGHT = ['L_pxsps_r', 'R_pxsps_r',] as const
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
        return this.#REFERENCE_MAP ??= Import.SoundEffectLoader.get.load()
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


    protected _createSMM1ImageNumbers(): PossibleSMM1ImagePaths {
        return null
    }

    public get SMM1ImageFiles(): PossibleSMM1ImageFiles {
        if (this.#smm1ImageFiles === undefined) {
            const imageNumbers = this._createSMM1ImageNumbers()
            this.#smm1ImageFiles = imageNumbers == null
                ? null
                : typeof imageNumbers == 'string'
                    ? [new SMM1ImageFile(this.englishName, imageNumbers),]
                    : [new SMM1ImageFile(this.englishName, imageNumbers[0]), new SMM1ImageFile(this.englishName, imageNumbers[1]),]
        }
        return this.#smm1ImageFiles
    }


    protected _createSMM2ImageName(): NullOr<SoundEffectImageName_SMM2> {
        return null
    }

    public get SMM2ImageFile(): NullOr<SMM2SoundEffectImageFile> {
        if (this.#smm2ImageFile === undefined) {
            const imageName = this._createSMM2ImageName()
            this.#smm2ImageFile = imageName == null
                ? null
                : new SMM2ImageFile(this.englishName, imageName,)
        }
        return this.#smm2ImageFile
    }

    //endregion -------------------- Getter methods (image) --------------------
    //region -------------------- Getter methods (sound) --------------------

    protected static get _smm1ExclusiveCallbackFor1Smm1And1Smm2(): SMM1ExclusiveCallback {
        return this.#smm1ExclusiveCallbackFor1Smm1And1Smm2 ??= (smm1, smm2) =>
            new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .editor(2, 1,).smm1(1)
    }

    protected static get _smm1ExclusiveCallbackFor2Smm1And1Smm2(): SMM1ExclusiveCallback {
        return this.#smm1ExclusiveCallbackFor2Smm1And1Smm2 ??= (smm1, smm2,) =>
            new SMM1StandaloneSoundEffectSoundBuilder(smm1, smm2,)
                .editor(2, 1,)
                .smm1(1)
                .smm1(2)
    }

    protected _createExclusiveSMM1Sounds(): NullOr<Builder<SMM1ExclusiveSoundEffectSound>> {
        return null
    }

    protected _createStandaloneSMM1Sounds(smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,): NullOr<Builder<SMM1StandaloneSoundEffectSound>> {
        return null
    }

    /** The "sound effect" exclusive sounds (in a container) of the {@link Games.SUPER_MARIO_MAKER_1 SMM1} game (& {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} inclusively) */
    public get soundsContainer_exclusiveSmm1(): SMM1ExclusiveSoundEffectSound {
        return this.#sounds_exclusiveSmm1 ??= this._createExclusiveSMM1Sounds()?.build() ?? EmptySMMSoundEffectSound.get
    }

    /** The "sound effect" sounds (in a container) of the {@link Games.SUPER_MARIO_MAKER_1 SMM1} game (& {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} inclusively) */
    public get soundsContainer_standaloneSMM1(): SMM1StandaloneSoundEffectSound {
        if (this.#sounds_standaloneSmm1 == null) {
            const smm1 = this.soundsContainer_exclusiveSmm1
            const smm2 = this.soundsContainer_smm2
            const valueToCreate = this._createStandaloneSMM1Sounds(smm1, smm2 instanceof SoundEffectFromMusicAdaptor ? EmptySMMSoundEffectSound.get : smm2,)

            this.#sounds_standaloneSmm1 = valueToCreate == null
                ? smm1 === EmptySMMSoundEffectSound.get
                    ? EmptySMMSoundEffectSound.get
                    : new SMM1StandaloneSoundEffectSoundBuilder(smm1).build()
                : valueToCreate.build()
        }
        return this.#sounds_standaloneSmm1
    }

    /** Every "sound effect" sounds stored in a {@link SMM1ExclusiveSoundEffectSound SMM1/SMM3DS exclusive "sound effect" sound} */
    public get sounds_exclusiveSmm1(): readonly SMM1SoundEffectSoundFile[] {
        return this.soundsContainer_exclusiveSmm1.sounds
    }

    /** Every "sound effect" sounds stored in a {@link SMM1StandaloneSoundEffectSound SMM1 standalone "sound effect" sound} */
    public get sounds_standaloneSmm1(): readonly SoundEffectSoundFile[] {
        return this.soundsContainer_standaloneSMM1.sounds
    }

    /** The "sound effect" sound for a {@link Games.SUPER_MARIO_MAKER_1 SMM1}/{@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS} when placed in the editor */
    public get editorSound_smm1(): NullOr<SoundEffectSoundFile> {
        return this.soundsContainer_standaloneSMM1.editorSound
    }


    protected static get _soundsForTwistyTurnyAndWoozy(): SoundEffectSoundNamesForTwistyTurnyAndWoozy {
        return this.#SOUNDS_FOR_TWISTY_TURNY_AND_WOOZY ??= ['Otoasobi_DJ00', 'Otoasobi_DJ01', 'Otoasobi_DJ02', 'Otoasobi_DJ03', 'Otoasobi_DJ04', 'Otoasobi_DJ05',]
    }

    protected _createSMM2Sounds(): NullOr<| Builder<SMM2SoundEffectSound> | Musics> {
        return null
    }

    /** The "sound effect" sounds (in a container) of the {@link Games.SUPER_MARIO_MAKER_2 SMM2} game */
    public get soundsContainer_smm2(): | SMM2SoundEffectSound | SoundEffectFromMusicAdaptor {
        if (this.#sounds_smm2 == null) {
            const value = this._createSMM2Sounds()
            this.#sounds_smm2 = value == null ? EmptySMMSoundEffectSound.get : 'build' in value ? value.build() : new SoundEffectFromMusicAdaptor(value)
        }
        return this.#sounds_smm2
    }

    /** Every "sound effect" sounds stored in a {@link SMM2SoundEffectSound SMM2 "sound effect" sound} */
    public get sounds_smm2(): PossibleSMM2SoundEffect {
        return this.soundsContainer_smm2.sounds
    }

    /** The "sound effect" sound for a {@link Games.SUPER_MARIO_MAKER_2 SMM2} when placed in the editor */
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

    //endregion -------------------- Getter methods (sound) --------------------

    public static get soundEffect_games(): SoundEffectGames {
        return this.#soundEffect_games ??= [this.SUPER_MARIO_KART_MUSIC, this.SUPER_MARIO_64_MUSIC, this.SUPER_MARIO_SUNSHINE_MUSIC, this.SUPER_MARIO_GALAXY_MUSIC,]
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get renderSingleComponent() {
        return SoundEffectComponent.render(this)
    }

    public static get everyEnglishNames(): EnglishNames {
        return this.values.map(it => it.englishName).toArray() as EnglishNames
    }


    public static getValueByName(value: Nullable<| SoundEffects | string>,): SoundEffects {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return SoundEffects
    }

    public static getValue(value: PossibleValueByEnumerable<SoundEffects>,): SoundEffects {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SoundEffects> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleSMM1ImagePaths = NullOr<| SoundEffectImageNumber_SMM1 | readonly [SoundEffectImageNumber_SMM1, SoundEffectImageNumber_SMM1,]>
type SMM1ExclusiveCallback = (smm1: SMM1ExclusiveSoundEffectSound, smm2: SMM2SoundEffectSound,) => Builder<SMM1StandaloneSoundEffectSound>
type PossibleSMM2SoundEffect = readonly (| SMM2SoundEffectSoundFile | MusicSoundFile)[]
