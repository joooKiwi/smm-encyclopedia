import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import type {NullOr}                 from '@joookiwi/type'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals}     from 'core/music/IndividualMusics.types'
import type {RepeatableSoundFile} from 'util/file/sound/RepeatableSoundFile'

import {repeatableAtTheEnd}      from 'core/music/file/repeatableAtTheEnd'
import {repeatableDuringThePlay} from 'core/music/file/repeatableDuringThePlay'

export class IndividualMusics<const FILE extends PossibleSoundFile = PossibleSoundFile,
    const TITLE_NAME extends string = string, >
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly TITLE_SCREEN = new IndividualMusics('title screen', null,)

    //region -------------------- Enum instances (ground) --------------------

    public static readonly GROUND_SMB_EDITOR_1 =          new IndividualMusics('editor ground music (SMB - track 1)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 1', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_2 =          new IndividualMusics('editor ground music (SMB - track 2)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 2', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_3 =          new IndividualMusics('editor ground music (SMB - track 3)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 3', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_4 =          new IndividualMusics('editor ground music (SMB - track 4)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 4', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_5 =          new IndividualMusics('editor ground music (SMB - track 5)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 5', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_6 =          new IndividualMusics('editor ground music (SMB - track 6)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 6', 115_053,),)
    public static readonly GROUND_SMB_EDITOR_7 =          new IndividualMusics('editor ground music (SMB - track 7)',           repeatableDuringThePlay('M1_BGM_Plain_Edit - Track 7', 115_053,),)
    public static readonly GROUND_SMB =                   new IndividualMusics('ground music (SMB - day)',                      repeatableDuringThePlay('M1_BGM_Plain_Play', 115_053,),)
    public static readonly GROUND_SMB_NIGHT =             new IndividualMusics('ground music (SMB - night)',                    repeatableDuringThePlay('M1_BGM_Plain_Play_Moon', 115_053,),)
    public static readonly GROUND_SMB_FAST =              new IndividualMusics('fast ground music (SMB - day)',                 repeatableDuringThePlay('M1_BGM_Plain_PlayHurry', 76_701,),)
    public static readonly GROUND_SMB_NIGHT_FAST =        new IndividualMusics('fast ground music (SMB - night)',               repeatableDuringThePlay('M1_BGM_Plain_PlayHurry_Moon', 76_612,),)
    public static readonly GROUND_SMB3_EDITOR_1 =         new IndividualMusics('editor ground music (SMB3 - track 1)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 1', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_2 =         new IndividualMusics('editor ground music (SMB3 - track 2)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 2', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_3 =         new IndividualMusics('editor ground music (SMB3 - track 3)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 3', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_4 =         new IndividualMusics('editor ground music (SMB3 - track 4)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 4', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_5 =         new IndividualMusics('editor ground music (SMB3 - track 5)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 5', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_6 =         new IndividualMusics('editor ground music (SMB3 - track 6)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 6', 307_200,),)
    public static readonly GROUND_SMB3_EDITOR_7 =         new IndividualMusics('editor ground music (SMB3 - track 7)',          repeatableDuringThePlay('M3_BGM_Plain_Edit - Track 7', 307_200,),)
    public static readonly GROUND_SMB3 =                  new IndividualMusics('ground music (SMB3 - day)',                     repeatableDuringThePlay('M3_BGM_Plain_Play', 307_200,),)
    public static readonly GROUND_SMB3_NIGHT =            new IndividualMusics('ground music (SMB3 - night)',                   repeatableDuringThePlay('M3_BGM_Plain_Play_Moon', 307_222,),)
    public static readonly GROUND_SMB3_FAST =             new IndividualMusics('fast ground music (SMB3 - day)',                repeatableDuringThePlay('M3_BGM_Plain_PlayHurry', 319_483,),)
    public static readonly GROUND_SMB3_NIGHT_FAST =       new IndividualMusics('fast ground music (SMB3 - night)',              repeatableDuringThePlay('M3_BGM_Plain_PlayHurry_Moon', 319_483,),)
    public static readonly GROUND_SMW_EDITOR_1 =          new IndividualMusics('editor ground music (SMW - track 1)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 1', 555_879,))
    public static readonly GROUND_SMW_EDITOR_2 =          new IndividualMusics('editor ground music (SMW - track 2)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 2', 555_879,))
    public static readonly GROUND_SMW_EDITOR_3 =          new IndividualMusics('editor ground music (SMW - track 3)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 3', 555_879,))
    public static readonly GROUND_SMW_EDITOR_4 =          new IndividualMusics('editor ground music (SMW - track 4)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 4', 555_879,))
    public static readonly GROUND_SMW_EDITOR_5 =          new IndividualMusics('editor ground music (SMW - track 5)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 5', 555_879,))
    public static readonly GROUND_SMW_EDITOR_6 =          new IndividualMusics('editor ground music (SMW - track 6)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 6', 555_879,))
    public static readonly GROUND_SMW_EDITOR_7 =          new IndividualMusics('editor ground music (SMW - track 7)',           repeatableDuringThePlay('MW_BGM_Plain_Edit - Track 7', 555_879,))
    public static readonly GROUND_SMW_STANDALONE =        new IndividualMusics('ground music (SMW - standalone)',               repeatableDuringThePlay('MW_BGM_Plain_Play - Track 1', 555_879,),)
    public static readonly GROUND_SMW_YOSHI =             new IndividualMusics('ground music (SMW - Yoshi)',                    repeatableDuringThePlay('MW_BGM_Plain_Play - Track 2', 555_879,),)
    public static readonly GROUND_SMW_NIGHT =             new IndividualMusics('ground music (SMW - night)',                    repeatableDuringThePlay('MW_BGM_Plain_Play_Moon', 938_702,),)
    public static readonly GROUND_SMW_STANDALONE_FAST =   new IndividualMusics('fast ground music (SMW - standalone)',          repeatableDuringThePlay('MW_BGM_Plain_PlayHurry - Track 1', 380_499,),)
    public static readonly GROUND_SMW_YOSHI_FAST =        new IndividualMusics('fast ground music (SMW - Yoshi)',               repeatableDuringThePlay('MW_BGM_Plain_PlayHurry - Track 2', 380_499,),)
    public static readonly GROUND_SMW_NIGHT_FAST =        new IndividualMusics('fast ground music (SMW - night)',               repeatableDuringThePlay('MW_BGM_Plain_PlayHurry_Moon', 380_499,),)
    public static readonly GROUND_NSMBU_EDITOR_1 =        new IndividualMusics('editor ground music (NSMBU - track 1)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 1', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_2 =        new IndividualMusics('editor ground music (NSMBU - track 2)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 2', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_3 =        new IndividualMusics('editor ground music (NSMBU - track 3)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 3', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_4 =        new IndividualMusics('editor ground music (NSMBU - track 4)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 4', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_5 =        new IndividualMusics('editor ground music (NSMBU - track 5)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 5', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_6 =        new IndividualMusics('editor ground music (NSMBU - track 6)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 6', 209_454,),)
    public static readonly GROUND_NSMBU_EDITOR_7 =        new IndividualMusics('editor ground music (NSMBU - track 7)',         repeatableDuringThePlay('WU_BGM_Plain_Edit - Track 7', 209_454,),)
    public static readonly GROUND_NSMBU_LESSON_EDITOR_1 = new IndividualMusics('lesson editor ground music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_Plain_Edit_Lesson - Track 1', 209_450,),)
    public static readonly GROUND_NSMBU_LESSON_EDITOR_2 = new IndividualMusics('lesson editor ground music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_Plain_Edit_Lesson - Track 2', 209_450,),)
    public static readonly GROUND_NSMBU_LESSON_EDITOR_3 = new IndividualMusics('lesson editor ground music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_Plain_Edit_Lesson - Track 3', 209_450,),)
    public static readonly GROUND_NSMBU_LESSON_EDITOR_4 = new IndividualMusics('lesson editor ground music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_Plain_Edit_Lesson - Track 4', 209_450,),)
    public static readonly GROUND_NSMBU_STANDALONE =      new IndividualMusics('ground music (NSMBU - standalone)',             repeatableDuringThePlay('WU_BGM_Plain_Play - Track 1', 209_454,),)
    public static readonly GROUND_NSMBU_YOSHI =           new IndividualMusics('ground music (NSMBU - Yoshi)',                  repeatableDuringThePlay('WU_BGM_Plain_Play - Track 2', 209_454,),)
    public static readonly GROUND_NSMBU_NIGHT =           new IndividualMusics('ground music (NSMBU - night)',                  repeatableDuringThePlay('WU_BGM_Plain_Play_Moon', 209_454,),)
    public static readonly GROUND_NSMBU_STANDALONE_FAST = new IndividualMusics('fast ground music (NSMBU - standalone)',        repeatableDuringThePlay('WU_BGM_Plain_PlayHurry - Track 1', 234_672,),)
    public static readonly GROUND_NSMBU_YOSHI_FAST =      new IndividualMusics('fast ground music (NSMBU - Yoshi)',             repeatableDuringThePlay('WU_BGM_Plain_PlayHurry - Track 2', 234_672,),)
    public static readonly GROUND_NSMBU_NIGHT_FAST =      new IndividualMusics('fast ground music (NSMBU - night)',             repeatableDuringThePlay('WU_BGM_Plain_PlayHurry_Moon', 234_672,),)
    public static readonly GROUND_SM3DW_EDITOR_1 =        new IndividualMusics('editor ground music (SM3DW - track 1)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 1', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_2 =        new IndividualMusics('editor ground music (SM3DW - track 2)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 2', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_3 =        new IndividualMusics('editor ground music (SM3DW - track 3)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 3', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_4 =        new IndividualMusics('editor ground music (SM3DW - track 4)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 4', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_5 =        new IndividualMusics('editor ground music (SM3DW - track 5)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 5', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_6 =        new IndividualMusics('editor ground music (SM3DW - track 6)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 6', 282_918,),)
    public static readonly GROUND_SM3DW_EDITOR_7 =        new IndividualMusics('editor ground music (SM3DW - track 7)',         repeatableDuringThePlay('3W_BGM_Plain_Edit - Track 7', 282_918,),)
    public static readonly GROUND_SM3DW =                 new IndividualMusics('ground music (SM3DW)',                          repeatableDuringThePlay('3W_BGM_Plain_Play', 282_918,),)
    public static readonly GROUND_SM3DW_FAST =            new IndividualMusics('fast ground music (SM3DW)',                     repeatableDuringThePlay('3W_BGM_Plain_PlayHurry', 126_702,),)

    //endregion -------------------- Enum instances (ground) --------------------
    //region -------------------- Enum instances (underground) --------------------

    public static readonly UNDERGROUND_SMB_EDITOR_1 =          new IndividualMusics('editor underground music (SMB - track 1)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 1',),)
    public static readonly UNDERGROUND_SMB_EDITOR_2 =          new IndividualMusics('editor underground music (SMB - track 2)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 2',),)
    public static readonly UNDERGROUND_SMB_EDITOR_3 =          new IndividualMusics('editor underground music (SMB - track 3)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 3',),)
    public static readonly UNDERGROUND_SMB_EDITOR_4 =          new IndividualMusics('editor underground music (SMB - track 4)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 4',),)
    public static readonly UNDERGROUND_SMB_EDITOR_5 =          new IndividualMusics('editor underground music (SMB - track 5)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 5',),)
    public static readonly UNDERGROUND_SMB_EDITOR_6 =          new IndividualMusics('editor underground music (SMB - track 6)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 6',),)
    public static readonly UNDERGROUND_SMB_EDITOR_7 =          new IndividualMusics('editor underground music (SMB - track 7)',    repeatableAtTheEnd('M1_BGM_UnderGround_Edit - Track 7',),)
    public static readonly UNDERGROUND_SMB =                   new IndividualMusics('underground music (SMB - day)',               repeatableAtTheEnd('M1_BGM_UnderGround_Play',),)
    public static readonly UNDERGROUND_SMB_NIGHT =             new IndividualMusics('underground music (SMB - night)',             repeatableAtTheEnd('M1_BGM_UnderGround_Play_Moon',),)
    public static readonly UNDERGROUND_SMB_FAST =              new IndividualMusics('fast underground music (SMB - day)',          repeatableAtTheEnd('M1_BGM_UnderGround_PlayHurry',),)
    public static readonly UNDERGROUND_SMB_NIGHT_FAST =        new IndividualMusics('fast underground music (SMB - night)',        repeatableAtTheEnd('M1_BGM_UnderGround_PlayHurry_Moon',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_1 =         new IndividualMusics('editor underground music (SMB3 - track 1)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 1',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_2 =         new IndividualMusics('editor underground music (SMB3 - track 2)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 2',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_3 =         new IndividualMusics('editor underground music (SMB3 - track 3)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 3',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_4 =         new IndividualMusics('editor underground music (SMB3 - track 4)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 4',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_5 =         new IndividualMusics('editor underground music (SMB3 - track 5)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 5',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_6 =         new IndividualMusics('editor underground music (SMB3 - track 6)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 6',),)
    public static readonly UNDERGROUND_SMB3_EDITOR_7 =         new IndividualMusics('editor underground music (SMB3 - track 7)',   repeatableAtTheEnd('M3_BGM_UnderGround_Edit - Track 7',),)
    public static readonly UNDERGROUND_SMB3 =                  new IndividualMusics('underground music (SMB3 - day)',              repeatableAtTheEnd('M3_BGM_UnderGround_Play',),)
    public static readonly UNDERGROUND_SMB3_NIGHT =            new IndividualMusics('underground music (SMB3 - night)',            repeatableAtTheEnd('M3_BGM_UnderGround_Play_Moon',),)
    public static readonly UNDERGROUND_SMB3_FAST =             new IndividualMusics('fast underground music (SMB3 - day)',         repeatableDuringThePlay('M3_BGM_UnderGround_PlayHurry', 765_987,),)
    public static readonly UNDERGROUND_SMB3_NIGHT_FAST =       new IndividualMusics('fast underground music (SMB3 - night)',       repeatableDuringThePlay('M3_BGM_UnderGround_PlayHurry_Moon', 766_097,),)
    public static readonly UNDERGROUND_SMW_EDITOR_1 =          new IndividualMusics('editor underground music (SMW - track 1)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 1', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_2 =          new IndividualMusics('editor underground music (SMW - track 2)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 2', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_3 =          new IndividualMusics('editor underground music (SMW - track 3)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 3', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_4 =          new IndividualMusics('editor underground music (SMW - track 4)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 4', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_5 =          new IndividualMusics('editor underground music (SMW - track 5)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 5', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_6 =          new IndividualMusics('editor underground music (SMW - track 6)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 6', 539_742,),)
    public static readonly UNDERGROUND_SMW_EDITOR_7 =          new IndividualMusics('editor underground music (SMW - track 7)',    repeatableDuringThePlay('MW_BGM_UnderGround_Edit - Track 7', 539_742,),)
    public static readonly UNDERGROUND_SMW_STANDALONE =        new IndividualMusics('underground music (SMW - standalone)',        repeatableDuringThePlay('MW_BGM_UnderGround_Play - Track 1', 539_742,),)
    public static readonly UNDERGROUND_SMW_YOSHI =             new IndividualMusics('underground music (SMW - Yoshi)',             repeatableDuringThePlay('MW_BGM_UnderGround_Play - Track 2', 539_742,),)
    public static readonly UNDERGROUND_SMW_NIGHT =             new IndividualMusics('underground music (SMW - night)',             repeatableDuringThePlay('MW_BGM_UnderGround_Play_Moon', 539_742,),)
    public static readonly UNDERGROUND_SMW_STANDALONE_FAST =   new IndividualMusics('fast underground music (SMW - standalone)',   repeatableDuringThePlay('MW_BGM_UnderGround_PlayHurry - Track 1', 421_722,),)
    public static readonly UNDERGROUND_SMW_YOSHI_FAST =        new IndividualMusics('fast underground music (SMW - Yoshi)',        repeatableDuringThePlay('MW_BGM_UnderGround_PlayHurry - Track 2', 421_722,),)
    public static readonly UNDERGROUND_SMW_NIGHT_FAST =        new IndividualMusics('fast underground music (SMW - night)',        repeatableDuringThePlay('MW_BGM_UnderGround_PlayHurry_Moon', 421_722,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_1 =        new IndividualMusics('editor underground music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 1', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_2 =        new IndividualMusics('editor underground music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 2', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_3 =        new IndividualMusics('editor underground music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 3', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_4 =        new IndividualMusics('editor underground music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 4', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_5 =        new IndividualMusics('editor underground music (NSMBU - track 5)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 5', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_6 =        new IndividualMusics('editor underground music (NSMBU - track 6)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 6', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_EDITOR_7 =        new IndividualMusics('editor underground music (NSMBU - track 7)',  repeatableDuringThePlay('WU_BGM_UnderGround_Edit - Track 7', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_STANDALONE =      new IndividualMusics('underground music (NSMBU - standalone)',      repeatableDuringThePlay('WU_BGM_UnderGround_Play - Track 1', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_YOSHI =           new IndividualMusics('underground music (NSMBU - Yoshi)',           repeatableDuringThePlay('WU_BGM_UnderGround_Play - Track 2', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_NIGHT =           new IndividualMusics('underground music (NSMBU - night)',           repeatableDuringThePlay('WU_BGM_UnderGround_Play_Moon', 475_051,),)
    public static readonly UNDERGROUND_NSMBU_STANDALONE_FAST = new IndividualMusics('fast underground music (NSMBU - standalone)', repeatableDuringThePlay('WU_BGM_UnderGround_PlayHurry - Track 1', 198_621,),)
    public static readonly UNDERGROUND_NSMBU_YOSHI_FAST =      new IndividualMusics('fast underground music (NSMBU - Yoshi)',      repeatableDuringThePlay('WU_BGM_UnderGround_PlayHurry - Track 2', 198_621,),)
    public static readonly UNDERGROUND_NSMBU_NIGHT_FAST =      new IndividualMusics('fast underground music (NSMBU - night)',      repeatableDuringThePlay('WU_BGM_UnderGround_PlayHurry_Moon', 198_621,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_1 =        new IndividualMusics('editor underground music (SM3DW - track 1)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 1', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_2 =        new IndividualMusics('editor underground music (SM3DW - track 2)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 2', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_3 =        new IndividualMusics('editor underground music (SM3DW - track 3)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 3', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_4 =        new IndividualMusics('editor underground music (SM3DW - track 4)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 4', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_5 =        new IndividualMusics('editor underground music (SM3DW - track 5)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 5', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_6 =        new IndividualMusics('editor underground music (SM3DW - track 6)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 6', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_EDITOR_7 =        new IndividualMusics('editor underground music (SM3DW - track 7)',  repeatableDuringThePlay('3W_BGM_UnderGround_Edit - Track 7', 544_615,),)
    public static readonly UNDERGROUND_SM3DW =                 new IndividualMusics('underground music (SM3DW)',                   repeatableDuringThePlay('3W_BGM_UnderGround_Play', 544_615,),)
    public static readonly UNDERGROUND_SM3DW_FAST =            new IndividualMusics('fast underground music (SM3DW)',              repeatableDuringThePlay('3W_BGM_UnderGround_PlayHurry', 30_876,),)

    //endregion -------------------- Enum instances (underground) --------------------
    //region -------------------- Enum instances (underwater) --------------------

    public static readonly UNDERWATER_SMB_EDITOR_1 =          new IndividualMusics('editor underwater music (SMB - track 1)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 1', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_2 =          new IndividualMusics('editor underwater music (SMB - track 2)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 2', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_3 =          new IndividualMusics('editor underwater music (SMB - track 3)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 3', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_4 =          new IndividualMusics('editor underwater music (SMB - track 4)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 4', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_5 =          new IndividualMusics('editor underwater music (SMB - track 5)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 5', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_6 =          new IndividualMusics('editor underwater music (SMB - track 6)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 6', 76_921,),)
    public static readonly UNDERWATER_SMB_EDITOR_7 =          new IndividualMusics('editor underwater music (SMB - track 7)',           repeatableDuringThePlay('M1_BGM_Water_Edit - Track 7', 76_921,),)
    public static readonly UNDERWATER_SMB =                   new IndividualMusics('underwater music (SMB - day)',                      repeatableDuringThePlay('M1_BGM_Water_Play', 76_921,),)
    public static readonly UNDERWATER_SMB_NIGHT =             new IndividualMusics('underwater music (SMB - night)',                    repeatableDuringThePlay('M1_BGM_Water_Play_Moon', 76_921,),)
    public static readonly UNDERWATER_SMB_FAST =              new IndividualMusics('fast underwater music (SMB - day)',                 repeatableDuringThePlay('M1_BGM_Water_PlayHurry', 33,),)
    public static readonly UNDERWATER_SMB_NIGHT_FAST =        new IndividualMusics('fast underwater music (SMB - night)',               repeatableDuringThePlay('M1_BGM_Water_PlayHurry_Moon', 33,),)
    public static readonly UNDERWATER_SMB3_EDITOR_1 =         new IndividualMusics('editor underwater music (SMB3 - track 1)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 1', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_2 =         new IndividualMusics('editor underwater music (SMB3 - track 2)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 2', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_3 =         new IndividualMusics('editor underwater music (SMB3 - track 3)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 3', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_4 =         new IndividualMusics('editor underwater music (SMB3 - track 4)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 4', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_5 =         new IndividualMusics('editor underwater music (SMB3 - track 5)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 5', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_6 =         new IndividualMusics('editor underwater music (SMB3 - track 6)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 6', 257_119,),)
    public static readonly UNDERWATER_SMB3_EDITOR_7 =         new IndividualMusics('editor underwater music (SMB3 - track 7)',          repeatableDuringThePlay('M3_BGM_Water_Edit - Track 7', 257_119,),)
    public static readonly UNDERWATER_SMB3 =                  new IndividualMusics('underwater music (SMB3 - day)',                     repeatableDuringThePlay('M3_BGM_Water_Play', 257_119,),)
    public static readonly UNDERWATER_SMB3_NIGHT =            new IndividualMusics('underwater music (SMB3 - night)',                   repeatableDuringThePlay('M3_BGM_Water_Play_Moon', 254_936,),)
    public static readonly UNDERWATER_SMB3_FAST =             new IndividualMusics('fast underwater music (SMB3 - day)',                repeatableDuringThePlay('M3_BGM_Water_PlayHurry', 191_698,),)
    public static readonly UNDERWATER_SMB3_NIGHT_FAST =       new IndividualMusics('fast underwater music (SMB3 - night)',              repeatableDuringThePlay('M3_BGM_Water_PlayHurry_Moon', 191_687,),)
    public static readonly UNDERWATER_SMW_EDITOR_1 =          new IndividualMusics('editor underwater music (SMW - track 1)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 1', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_2 =          new IndividualMusics('editor underwater music (SMW - track 2)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 2', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_3 =          new IndividualMusics('editor underwater music (SMW - track 3)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 3', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_4 =          new IndividualMusics('editor underwater music (SMW - track 4)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 4', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_5 =          new IndividualMusics('editor underwater music (SMW - track 5)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 5', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_6 =          new IndividualMusics('editor underwater music (SMW - track 6)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 6', 373_774,),)
    public static readonly UNDERWATER_SMW_EDITOR_7 =          new IndividualMusics('editor underwater music (SMW - track 7)',           repeatableDuringThePlay('MW_BGM_Water_Edit - Track 7', 373_774,),)
    public static readonly UNDERWATER_SMW_STANDALONE =        new IndividualMusics('underwater music (SMW - standalone)',               repeatableDuringThePlay('MW_BGM_Water_Play - Track 1', 373_774,),)
    public static readonly UNDERWATER_SMW_YOSHI =             new IndividualMusics('underwater music (SMW - Yoshi)',                    repeatableDuringThePlay('MW_BGM_Water_Play - Track 2', 373_774,),)
    public static readonly UNDERWATER_SMW_NIGHT =             new IndividualMusics('underwater music (SMW - night)',                    repeatableDuringThePlay('MW_BGM_Water_Play_Moon', 374_061,),)
    public static readonly UNDERWATER_SMW_STANDALONE_FAST =   new IndividualMusics('fast underwater music (SMW - standalone)',          repeatableDuringThePlay('MW_BGM_Water_PlayHurry - Track 1', 169_405,),)
    public static readonly UNDERWATER_SMW_YOSHI_FAST =        new IndividualMusics('fast underwater music (SMW - Yoshi)',               repeatableDuringThePlay('MW_BGM_Water_PlayHurry - Track 2', 169_405,),)
    public static readonly UNDERWATER_SMW_NIGHT_FAST =        new IndividualMusics('fast underwater music (SMW - night)',               repeatableDuringThePlay('MW_BGM_Water_PlayHurry_Moon', 169_804,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_1 =        new IndividualMusics('editor underwater music (NSMBU - track 1)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 1', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_2 =        new IndividualMusics('editor underwater music (NSMBU - track 2)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 2', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_3 =        new IndividualMusics('editor underwater music (NSMBU - track 3)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 3', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_4 =        new IndividualMusics('editor underwater music (NSMBU - track 4)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 4', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_5 =        new IndividualMusics('editor underwater music (NSMBU - track 5)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 5', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_6 =        new IndividualMusics('editor underwater music (NSMBU - track 6)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 6', 554_442,),)
    public static readonly UNDERWATER_NSMBU_EDITOR_7 =        new IndividualMusics('editor underwater music (NSMBU - track 7)',         repeatableDuringThePlay('WU_BGM_Water_Edit - Track 7', 554_442,),)
    public static readonly UNDERWATER_NSMBU_LESSON_EDITOR_1 = new IndividualMusics('lesson editor underwater music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_Water_Edit_Lesson - Track 1', 554_439,),)
    public static readonly UNDERWATER_NSMBU_LESSON_EDITOR_2 = new IndividualMusics('lesson editor underwater music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_Water_Edit_Lesson - Track 2', 554_439,),)
    public static readonly UNDERWATER_NSMBU_LESSON_EDITOR_3 = new IndividualMusics('lesson editor underwater music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_Water_Edit_Lesson - Track 3', 554_439,),)
    public static readonly UNDERWATER_NSMBU_LESSON_EDITOR_4 = new IndividualMusics('lesson editor underwater music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_Water_Edit_Lesson - Track 4', 554_439,),)
    public static readonly UNDERWATER_NSMBU_STANDALONE =      new IndividualMusics('underwater music (NSMBU - standalone)',             repeatableDuringThePlay('WU_BGM_Water_Play - Track 1', 554_441,),)
    public static readonly UNDERWATER_NSMBU_YOSHI =           new IndividualMusics('underwater music (NSMBU - Yoshi)',                  repeatableDuringThePlay('WU_BGM_Water_Play - Track 2', 554_441,),)
    public static readonly UNDERWATER_NSMBU_NIGHT =           new IndividualMusics('underwater music (NSMBU - night)',                  repeatableDuringThePlay('WU_BGM_Water_Play_Moon', 554_441,),)
    public static readonly UNDERWATER_NSMBU_STANDALONE_FAST = new IndividualMusics('fast underwater music (NSMBU - standalone)',        repeatableDuringThePlay('WU_BGM_Water_PlayHurry - Track 1', 674_329,),)
    public static readonly UNDERWATER_NSMBU_YOSHI_FAST =      new IndividualMusics('fast underwater music (NSMBU - Yoshi)',             repeatableDuringThePlay('WU_BGM_Water_PlayHurry - Track 2', 674_329,),)
    public static readonly UNDERWATER_NSMBU_NIGHT_FAST =      new IndividualMusics('fast underwater music (NSMBU - night)',             repeatableDuringThePlay('WU_BGM_Water_PlayHurry_Moon', 674_329,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_1 =        new IndividualMusics('editor underwater music (SM3DW - track 1)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 1', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_2 =        new IndividualMusics('editor underwater music (SM3DW - track 2)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 2', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_3 =        new IndividualMusics('editor underwater music (SM3DW - track 3)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 3', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_4 =        new IndividualMusics('editor underwater music (SM3DW - track 4)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 4', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_5 =        new IndividualMusics('editor underwater music (SM3DW - track 5)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 5', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_6 =        new IndividualMusics('editor underwater music (SM3DW - track 6)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 6', 509_735,),)
    public static readonly UNDERWATER_SM3DW_EDITOR_7 =        new IndividualMusics('editor underwater music (SM3DW - track 7)',         repeatableDuringThePlay('3W_BGM_Water_Edit - Track 7', 509_735,),)
    public static readonly UNDERWATER_SM3DW =                 new IndividualMusics('underwater music (SM3DW)',                          repeatableDuringThePlay('3W_BGM_Water_Play', 509_735,),)
    public static readonly UNDERWATER_SM3DW_FAST =            new IndividualMusics('fast underwater music (SM3DW)',                     repeatableDuringThePlay('3W_BGM_Water_PlayHurry', 119,),)

    //endregion -------------------- Enum instances (underwater) --------------------
    //region -------------------- Enum instances (desert) --------------------

    public static readonly DESERT_SMB_EDITOR_1 =          new IndividualMusics('editor desert music (SMB - track 1)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 1', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_2 =          new IndividualMusics('editor desert music (SMB - track 2)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 2', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_3 =          new IndividualMusics('editor desert music (SMB - track 3)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 3', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_4 =          new IndividualMusics('editor desert music (SMB - track 4)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 4', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_5 =          new IndividualMusics('editor desert music (SMB - track 5)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 5', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_6 =          new IndividualMusics('editor desert music (SMB - track 6)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 6', 238_346,),)
    public static readonly DESERT_SMB_EDITOR_7 =          new IndividualMusics('editor desert music (SMB - track 7)',    repeatableDuringThePlay('M1_BGM_Desert_Edit - Track 7', 238_346,),)
    public static readonly DESERT_SMB =                   new IndividualMusics('desert music (SMB - day)',               repeatableDuringThePlay('M1_BGM_Desert_Play', 159_035,),)
    public static readonly DESERT_SMB_NIGHT =             new IndividualMusics('desert music (SMB - night)',             repeatableDuringThePlay('M1_BGM_Desert_Play_Moon', 158_897,),)
    public static readonly DESERT_SMB_FAST =              new IndividualMusics('fast desert music (SMB - day)',          repeatableDuringThePlay('M1_BGM_Desert_PlayHurry', 128_014,),)
    public static readonly DESERT_SMB_NIGHT_FAST =        new IndividualMusics('fast desert music (SMB - night)',        repeatableDuringThePlay('M1_BGM_Desert_PlayHurry_Moon', 128_000,),)
    public static readonly DESERT_SMB3_EDITOR_1 =         new IndividualMusics('editor desert music (SMB3 - track 1)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 1', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_2 =         new IndividualMusics('editor desert music (SMB3 - track 2)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 2', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_3 =         new IndividualMusics('editor desert music (SMB3 - track 3)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 3', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_4 =         new IndividualMusics('editor desert music (SMB3 - track 4)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 4', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_5 =         new IndividualMusics('editor desert music (SMB3 - track 5)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 5', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_6 =         new IndividualMusics('editor desert music (SMB3 - track 6)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 6', 307_406,),)
    public static readonly DESERT_SMB3_EDITOR_7 =         new IndividualMusics('editor desert music (SMB3 - track 7)',   repeatableDuringThePlay('M3_BGM_Desert_Edit - Track 7', 307_406,),)
    public static readonly DESERT_SMW_EDITOR_1 =          new IndividualMusics('editor desert music (SMW - track 1)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 1', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_2 =          new IndividualMusics('editor desert music (SMW - track 2)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 2', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_3 =          new IndividualMusics('editor desert music (SMW - track 3)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 3', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_4 =          new IndividualMusics('editor desert music (SMW - track 4)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 4', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_5 =          new IndividualMusics('editor desert music (SMW - track 5)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 5', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_6 =          new IndividualMusics('editor desert music (SMW - track 6)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 6', 304_600,),)
    public static readonly DESERT_SMW_EDITOR_7 =          new IndividualMusics('editor desert music (SMW - track 7)',    repeatableDuringThePlay('MW_BGM_Desert_Edit - Track 7', 304_600,),)
    public static readonly DESERT_SMW_STANDALONE =        new IndividualMusics('desert music (SMW - standalone)',        repeatableDuringThePlay('MW_BGM_Desert_Play - Track 1', 230_400,),)
    public static readonly DESERT_SMW_YOSHI =             new IndividualMusics('desert music (SMW - Yoshi)',             repeatableDuringThePlay('MW_BGM_Desert_Play - Track 2', 230_400,),)
    public static readonly DESERT_SMW_NIGHT =             new IndividualMusics('desert music (SMW - night)',             repeatableDuringThePlay('MW_BGM_Desert_Play_Moon', 230_400,),)
    public static readonly DESERT_SMW_STANDALONE_FAST =   new IndividualMusics('fast desert music (SMW - standalone)',   repeatableDuringThePlay('MW_BGM_Desert_PlayHurry - Track 1', 265_846,),)
    public static readonly DESERT_SMW_YOSHI_FAST =        new IndividualMusics('fast desert music (SMW - Yoshi)',        repeatableDuringThePlay('MW_BGM_Desert_PlayHurry - Track 2', 265_846,),)
    public static readonly DESERT_SMW_NIGHT_FAST =        new IndividualMusics('fast desert music (SMW - night)',        repeatableDuringThePlay('MW_BGM_Desert_PlayHurry_Moon', 265_846,),)
    public static readonly DESERT_NSMBU_EDITOR_1 =        new IndividualMusics('editor desert music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 1', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_2 =        new IndividualMusics('editor desert music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 2', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_3 =        new IndividualMusics('editor desert music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 3', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_4 =        new IndividualMusics('editor desert music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 4', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_5 =        new IndividualMusics('editor desert music (NSMBU - track 5)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 5', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_6 =        new IndividualMusics('editor desert music (NSMBU - track 6)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 6', 431_978,),)
    public static readonly DESERT_NSMBU_EDITOR_7 =        new IndividualMusics('editor desert music (NSMBU - track 7)',  repeatableDuringThePlay('WU_BGM_Desert_Edit - Track 7', 431_978,),)
    public static readonly DESERT_NSMBU_STANDALONE =      new IndividualMusics('desert music (NSMBU - standalone)',      repeatableDuringThePlay('WU_BGM_Desert_Play - Track 1', 431_978,),)
    public static readonly DESERT_NSMBU_YOSHI =           new IndividualMusics('desert music (NSMBU - Yoshi)',           repeatableDuringThePlay('WU_BGM_Desert_Play - Track 2', 431_978,),)
    public static readonly DESERT_NSMBU_NIGHT =           new IndividualMusics('desert music (NSMBU - night)',           repeatableDuringThePlay('WU_BGM_Desert_Play_Moon', 431_978,),)
    public static readonly DESERT_NSMBU_STANDALONE_FAST = new IndividualMusics('fast desert music (NSMBU - standalone)', repeatableDuringThePlay('WU_BGM_Desert_PlayHurry - Track 1', 752_865,),)
    public static readonly DESERT_NSMBU_YOSHI_FAST =      new IndividualMusics('fast desert music (NSMBU - Yoshi)',      repeatableDuringThePlay('WU_BGM_Desert_PlayHurry - Track 2', 752_865,),)
    public static readonly DESERT_NSMBU_NIGHT_FAST =      new IndividualMusics('fast desert music (NSMBU - night)',      repeatableDuringThePlay('WU_BGM_Desert_PlayHurry_Moon', 752_865,),)
    public static readonly DESERT_SM3DW_EDITOR_1 =        new IndividualMusics('editor desert music (SM3DW - track 1)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 1', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_2 =        new IndividualMusics('editor desert music (SM3DW - track 2)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 2', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_3 =        new IndividualMusics('editor desert music (SM3DW - track 3)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 3', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_4 =        new IndividualMusics('editor desert music (SM3DW - track 4)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 4', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_5 =        new IndividualMusics('editor desert music (SM3DW - track 5)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 5', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_6 =        new IndividualMusics('editor desert music (SM3DW - track 6)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 6', 182_482,),)
    public static readonly DESERT_SM3DW_EDITOR_7 =        new IndividualMusics('editor desert music (SM3DW - track 7)',  repeatableDuringThePlay('3W_BGM_Desert_Edit - Track 7', 182_482,),)
    public static readonly DESERT_SM3DW =                 new IndividualMusics('desert music (SM3DW)',                   repeatableDuringThePlay('3W_BGM_Desert_Play', 182_482,),)
    public static readonly DESERT_SM3DW_FAST =            new IndividualMusics('fast desert music (SM3DW)',              repeatableDuringThePlay('3W_BGM_Desert_PlayHurry', 18,),)

    //endregion -------------------- Enum instances (desert) --------------------
    //region -------------------- Enum instances (snow) --------------------

    public static readonly SNOW_SMB_EDITOR_1 =          new IndividualMusics('editor snow music (SMB - track 1)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 1', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_2 =          new IndividualMusics('editor snow music (SMB - track 2)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 2', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_3 =          new IndividualMusics('editor snow music (SMB - track 3)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 3', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_4 =          new IndividualMusics('editor snow music (SMB - track 4)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 4', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_5 =          new IndividualMusics('editor snow music (SMB - track 5)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 5', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_6 =          new IndividualMusics('editor snow music (SMB - track 6)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 6', 279_273,),)
    public static readonly SNOW_SMB_EDITOR_7 =          new IndividualMusics('editor snow music (SMB - track 7)',    repeatableDuringThePlay('M1_BGM_Snow_Edit - Track 7', 279_273,),)
    public static readonly SNOW_SMB =                   new IndividualMusics('snow music (SMB - day)',               repeatableDuringThePlay('M1_BGM_Snow_Play', 279_273,),)
    public static readonly SNOW_SMB_NIGHT =             new IndividualMusics('snow music (SMB - night)',             repeatableDuringThePlay('M1_BGM_Snow_Play_Moon', 549_819,),)
    public static readonly SNOW_SMB_FAST =              new IndividualMusics('fast snow music (SMB - day)',          repeatableDuringThePlay('M1_BGM_Snow_PlayHurry', 230_400,),)
    public static readonly SNOW_SMB_NIGHT_FAST =        new IndividualMusics('fast snow music (SMB - night)',        repeatableDuringThePlay('M1_BGM_Snow_PlayHurry_Moon', 453_600,),)
    public static readonly SNOW_SMB3_EDITOR_1 =         new IndividualMusics('editor snow music (SMB3 - track 1)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 1', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_2 =         new IndividualMusics('editor snow music (SMB3 - track 2)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 2', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_3 =         new IndividualMusics('editor snow music (SMB3 - track 3)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 3', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_4 =         new IndividualMusics('editor snow music (SMB3 - track 4)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 4', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_5 =         new IndividualMusics('editor snow music (SMB3 - track 5)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 5', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_6 =         new IndividualMusics('editor snow music (SMB3 - track 6)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 6', 297_379,),)
    public static readonly SNOW_SMB3_EDITOR_7 =         new IndividualMusics('editor snow music (SMB3 - track 7)',   repeatableDuringThePlay('M3_BGM_Snow_Edit - Track 7', 297_379,),)
    public static readonly SNOW_SMB3 =                  new IndividualMusics('snow music (SMB3 - day)',              repeatableDuringThePlay('M3_BGM_Snow_Play', 297_379,),)
    public static readonly SNOW_SMB3_NIGHT =            new IndividualMusics('snow music (SMB3 - night)',            repeatableDuringThePlay('M3_BGM_Snow_Play_Moon', 300_018,),)
    public static readonly SNOW_SMB3_FAST =             new IndividualMusics('fast snow music (SMB3 - day)',         repeatableDuringThePlay('M3_BGM_Snow_PlayHurry', 340_387,),)
    public static readonly SNOW_SMB3_NIGHT_FAST =       new IndividualMusics('fast snow music (SMB3 - night)',       repeatableDuringThePlay('M3_BGM_Snow_PlayHurry_Moon', 340_387,),)
    public static readonly SNOW_SMW_EDITOR_1 =          new IndividualMusics('editor snow music (SMW - track 1)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 1', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_2 =          new IndividualMusics('editor snow music (SMW - track 2)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 2', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_3 =          new IndividualMusics('editor snow music (SMW - track 3)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 3', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_4 =          new IndividualMusics('editor snow music (SMW - track 4)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 4', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_5 =          new IndividualMusics('editor snow music (SMW - track 5)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 5', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_6 =          new IndividualMusics('editor snow music (SMW - track 6)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 6', 177_394,),)
    public static readonly SNOW_SMW_EDITOR_7 =          new IndividualMusics('editor snow music (SMW - track 7)',    repeatableDuringThePlay('MW_BGM_Snow_Edit - Track 7', 177_394,),)
    public static readonly SNOW_SMW_STANDALONE =        new IndividualMusics('snow music (SMW - standalone)',        repeatableDuringThePlay('MW_BGM_Snow_Play - Track 1', 177_231,),)
    public static readonly SNOW_SMW_YOSHI =             new IndividualMusics('snow music (SMW - Yoshi)',             repeatableDuringThePlay('MW_BGM_Snow_Play - Track 2', 177_231,),)
    public static readonly SNOW_SMW_NIGHT =             new IndividualMusics('snow music (SMW - night)',             repeatableDuringThePlay('MW_BGM_Snow_Play_Moon', 177_231,),)
    public static readonly SNOW_SMW_STANDALONE_FAST =   new IndividualMusics('fast snow music (SMW - standalone)',   repeatableDuringThePlay('MW_BGM_Snow_PlayHurry - Track 1', 111_380,),)
    public static readonly SNOW_SMW_YOSHI_FAST =        new IndividualMusics('fast snow music (SMW - Yoshi)',        repeatableDuringThePlay('MW_BGM_Snow_PlayHurry - Track 2', 111_380,),)
    public static readonly SNOW_SMW_NIGHT_FAST =        new IndividualMusics('fast snow music (SMW - night)',        repeatableDuringThePlay('MW_BGM_Snow_PlayHurry_Moon', 111_380,),)
    public static readonly SNOW_NSMBU_EDITOR_1 =        new IndividualMusics('editor snow music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 1', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_2 =        new IndividualMusics('editor snow music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 2', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_3 =        new IndividualMusics('editor snow music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 3', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_4 =        new IndividualMusics('editor snow music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 4', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_5 =        new IndividualMusics('editor snow music (NSMBU - track 5)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 5', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_6 =        new IndividualMusics('editor snow music (NSMBU - track 6)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 6', 261_817,),)
    public static readonly SNOW_NSMBU_EDITOR_7 =        new IndividualMusics('editor snow music (NSMBU - track 7)',  repeatableDuringThePlay('WU_BGM_Snow_Edit - Track 7', 261_817,),)
    public static readonly SNOW_NSMBU_STANDALONE =      new IndividualMusics('snow music (NSMBU - standalone)',      repeatableDuringThePlay('WU_BGM_Snow_Play - Track 1', 261_817,),)
    public static readonly SNOW_NSMBU_YOSHI =           new IndividualMusics('snow music (NSMBU - Yoshi)',           repeatableDuringThePlay('WU_BGM_Snow_Play - Track 2', 261_817,),)
    public static readonly SNOW_NSMBU_NIGHT =           new IndividualMusics('snow music (NSMBU - night)',           repeatableDuringThePlay('WU_BGM_Snow_Play_Moon', 261_817,),)
    public static readonly SNOW_NSMBU_STANDALONE_FAST = new IndividualMusics('fast snow music (NSMBU - standalone)', repeatableDuringThePlay('WU_BGM_Snow_PlayHurry - Track 1', 234_585,),)
    public static readonly SNOW_NSMBU_YOSHI_FAST =      new IndividualMusics('fast snow music (NSMBU - Yoshi)',      repeatableDuringThePlay('WU_BGM_Snow_PlayHurry - Track 2', 234_585,),)
    public static readonly SNOW_NSMBU_NIGHT_FAST =      new IndividualMusics('fast snow music (NSMBU - night)',      repeatableDuringThePlay('WU_BGM_Snow_PlayHurry_Moon', 234_585,),)
    public static readonly SNOW_SM3DW_EDITOR_1 =        new IndividualMusics('editor snow music (SM3DW - track 1)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 1', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_2 =        new IndividualMusics('editor snow music (SM3DW - track 2)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 2', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_3 =        new IndividualMusics('editor snow music (SM3DW - track 3)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 3', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_4 =        new IndividualMusics('editor snow music (SM3DW - track 4)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 4', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_5 =        new IndividualMusics('editor snow music (SM3DW - track 5)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 5', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_6 =        new IndividualMusics('editor snow music (SM3DW - track 6)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 6', 188_325,),)
    public static readonly SNOW_SM3DW_EDITOR_7 =        new IndividualMusics('editor snow music (SM3DW - track 7)',  repeatableDuringThePlay('3W_BGM_Snow_Edit - Track 7', 188_325,),)
    public static readonly SNOW_SM3DW =                 new IndividualMusics('snow music (SM3DW)',                   repeatableDuringThePlay('3W_BGM_Snow_Play', 188_325,),)
    public static readonly SNOW_SM3DW_FAST =            new IndividualMusics('fast snow music (SM3DW)',              repeatableDuringThePlay('3W_BGM_Snow_PlayHurry', 489,),)

    //endregion -------------------- Enum instances (snow) --------------------
    //region -------------------- Enum instances (sky) --------------------

    public static readonly SKY_SMB_EDITOR_1 =          new IndividualMusics('editor sky music (SMB - track 1)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 1', 229_250,),)
    public static readonly SKY_SMB_EDITOR_2 =          new IndividualMusics('editor sky music (SMB - track 2)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 2', 229_250,),)
    public static readonly SKY_SMB_EDITOR_3 =          new IndividualMusics('editor sky music (SMB - track 3)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 3', 229_250,),)
    public static readonly SKY_SMB_EDITOR_4 =          new IndividualMusics('editor sky music (SMB - track 4)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 4', 229_250,),)
    public static readonly SKY_SMB_EDITOR_5 =          new IndividualMusics('editor sky music (SMB - track 5)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 5', 229_250,),)
    public static readonly SKY_SMB_EDITOR_6 =          new IndividualMusics('editor sky music (SMB - track 6)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 6', 229_250,),)
    public static readonly SKY_SMB_EDITOR_7 =          new IndividualMusics('editor sky music (SMB - track 7)',    repeatableDuringThePlay('M1_BGM_Athletic_Edit - Track 7', 229_250,),)
    public static readonly SKY_SMB =                   new IndividualMusics('sky music (SMB - day)',               repeatableDuringThePlay('M1_BGM_Athletic_Play', 114_627,),)
    public static readonly SKY_SMB_NIGHT =             new IndividualMusics('sky music (SMB - night)',             repeatableDuringThePlay('M1_BGM_Athletic_Play_Moon', 229_250,),)
    public static readonly SKY_SMB_FAST =              new IndividualMusics('fast sky music (SMB - day)',          repeatableDuringThePlay('M1_BGM_Athletic_PlayHurry', 104_727,),)
    public static readonly SKY_SMB_NIGHT_FAST =        new IndividualMusics('fast sky music (SMB - night)',        repeatableDuringThePlay('M1_BGM_Athletic_PlayHurry_Moon', 209_450,),)
    public static readonly SKY_SMB3_EDITOR_1 =         new IndividualMusics('editor sky music (SMB3 - track 1)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 1', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_2 =         new IndividualMusics('editor sky music (SMB3 - track 2)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 2', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_3 =         new IndividualMusics('editor sky music (SMB3 - track 3)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 3', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_4 =         new IndividualMusics('editor sky music (SMB3 - track 4)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 4', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_5 =         new IndividualMusics('editor sky music (SMB3 - track 5)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 5', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_6 =         new IndividualMusics('editor sky music (SMB3 - track 6)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 6', 335_436,),)
    public static readonly SKY_SMB3_EDITOR_7 =         new IndividualMusics('editor sky music (SMB3 - track 7)',   repeatableDuringThePlay('M3_BGM_Athletic_Edit - Track 7', 335_436,),)
    public static readonly SKY_SMB3 =                  new IndividualMusics('sky music (SMB3 - day)',              repeatableDuringThePlay('M3_BGM_Athletic_Play', 153_958,),)
    public static readonly SKY_SMB3_NIGHT =            new IndividualMusics('sky music (SMB3 - night)',            repeatableDuringThePlay('M3_BGM_Athletic_Play_Moon', 153_380,),)
    public static readonly SKY_SMB3_FAST =             new IndividualMusics('fast sky music (SMB3 - day)',         repeatableDuringThePlay('M3_BGM_Athletic_PlayHurry', 143_763,),)
    public static readonly SKY_SMB3_NIGHT_FAST =       new IndividualMusics('fast sky music (SMB3 - night)',       repeatableDuringThePlay('M3_BGM_Athletic_PlayHurry_Moon', 143_763,),)
    public static readonly SKY_SMW_EDITOR_1 =          new IndividualMusics('editor sky music (SMW - track 1)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 1', 72_636,),)
    public static readonly SKY_SMW_EDITOR_2 =          new IndividualMusics('editor sky music (SMW - track 2)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 2', 72_636,),)
    public static readonly SKY_SMW_EDITOR_3 =          new IndividualMusics('editor sky music (SMW - track 3)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 3', 72_636,),)
    public static readonly SKY_SMW_EDITOR_4 =          new IndividualMusics('editor sky music (SMW - track 4)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 4', 72_636,),)
    public static readonly SKY_SMW_EDITOR_5 =          new IndividualMusics('editor sky music (SMW - track 5)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 5', 72_636,),)
    public static readonly SKY_SMW_EDITOR_6 =          new IndividualMusics('editor sky music (SMW - track 6)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 6', 72_636,),)
    public static readonly SKY_SMW_EDITOR_7 =          new IndividualMusics('editor sky music (SMW - track 7)',    repeatableDuringThePlay('MW_BGM_Athletic_Edit - Track 7', 72_636,),)
    public static readonly SKY_SMW_STANDALONE =        new IndividualMusics('sky music (SMW - standalone)',        repeatableDuringThePlay('MW_BGM_Athletic_Play - Track 1', 72_636,),)
    public static readonly SKY_SMW_YOSHI =             new IndividualMusics('sky music (SMW - Yoshi)',             repeatableDuringThePlay('MW_BGM_Athletic_Play - Track 2', 72_636,),)
    public static readonly SKY_SMW_NIGHT =             new IndividualMusics('sky music (SMW - night)',             repeatableDuringThePlay('MW_BGM_Athletic_Play_Moon', 72_636,),)
    public static readonly SKY_SMW_STANDALONE_FAST =   new IndividualMusics('fast sky music (SMW - standalone)',   repeatableDuringThePlay('MW_BGM_Athletic_PlayHurry - Track 1', 62_951,),)
    public static readonly SKY_SMW_YOSHI_FAST =        new IndividualMusics('fast sky music (SMW - Yoshi)',        repeatableDuringThePlay('MW_BGM_Athletic_PlayHurry - Track 2', 62_951,),)
    public static readonly SKY_SMW_NIGHT_FAST =        new IndividualMusics('fast sky music (SMW - night)',        repeatableDuringThePlay('MW_BGM_Athletic_PlayHurry_Moon', 62_951,),)
    public static readonly SKY_NSMBU_EDITOR_1 =        new IndividualMusics('editor sky music (NSMBU - track 1)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 1', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_2 =        new IndividualMusics('editor sky music (NSMBU - track 2)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 2', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_3 =        new IndividualMusics('editor sky music (NSMBU - track 3)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 3', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_4 =        new IndividualMusics('editor sky music (NSMBU - track 4)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 4', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_5 =        new IndividualMusics('editor sky music (NSMBU - track 5)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 5', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_6 =        new IndividualMusics('editor sky music (NSMBU - track 6)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 6', 185_806,),)
    public static readonly SKY_NSMBU_EDITOR_7 =        new IndividualMusics('editor sky music (NSMBU - track 7)',  repeatableDuringThePlay('WU_BGM_Athletic_Edit - Track 7', 185_806,),)
    public static readonly SKY_NSMBU_STANDALONE =      new IndividualMusics('sky music (NSMBU - standalone)',      repeatableDuringThePlay('WU_BGM_Athletic_Play - Track 1', 185_806,),)
    public static readonly SKY_NSMBU_YOSHI =           new IndividualMusics('sky music (NSMBU - Yoshi)',           repeatableDuringThePlay('WU_BGM_Athletic_Play - Track 2', 185_806,),)
    public static readonly SKY_NSMBU_NIGHT =           new IndividualMusics('sky music (NSMBU - night)',           repeatableDuringThePlay('WU_BGM_Athletic_Play_Moon', 371_613,),)
    public static readonly SKY_NSMBU_STANDALONE_FAST = new IndividualMusics('fast sky music (NSMBU - standalone)', repeatableDuringThePlay('WU_BGM_Athletic_PlayHurry - Track 1', 174_023,),)
    public static readonly SKY_NSMBU_YOSHI_FAST =      new IndividualMusics('fast sky music (NSMBU - Yoshi)',      repeatableDuringThePlay('WU_BGM_Athletic_PlayHurry - Track 2', 174_023,),)
    public static readonly SKY_NSMBU_NIGHT_FAST =      new IndividualMusics('fast sky music (NSMBU - night)',      repeatableDuringThePlay('WU_BGM_Athletic_PlayHurry_Moon', 309_261,),)
    public static readonly SKY_SM3DW_EDITOR_1 =        new IndividualMusics('editor sky music (SM3DW - track 1)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 1', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_2 =        new IndividualMusics('editor sky music (SM3DW - track 2)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 2', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_3 =        new IndividualMusics('editor sky music (SM3DW - track 3)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 3', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_4 =        new IndividualMusics('editor sky music (SM3DW - track 4)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 4', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_5 =        new IndividualMusics('editor sky music (SM3DW - track 5)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 5', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_6 =        new IndividualMusics('editor sky music (SM3DW - track 6)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 6', 677_197,),)
    public static readonly SKY_SM3DW_EDITOR_7 =        new IndividualMusics('editor sky music (SM3DW - track 7)',  repeatableDuringThePlay('3W_BGM_Athletic_Edit - Track 7', 677_197,),)
    public static readonly SKY_SM3DW =                 new IndividualMusics('sky music (SM3DW)',                   repeatableDuringThePlay('3W_BGM_Athletic_Play', 677_197,),)
    public static readonly SKY_SM3DW_FAST =            new IndividualMusics('fast sky music (SM3DW)',              repeatableDuringThePlay('3W_BGM_Athletic_PlayHurry', 163_605,),)

    //endregion -------------------- Enum instances (sky) --------------------
    //region -------------------- Enum instances (forest) --------------------

    public static readonly FOREST_SMB_EDITOR_1 =          new IndividualMusics('editor forest music (SMB - track 1)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 1', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_2 =          new IndividualMusics('editor forest music (SMB - track 2)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 2', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_3 =          new IndividualMusics('editor forest music (SMB - track 3)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 3', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_4 =          new IndividualMusics('editor forest music (SMB - track 4)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 4', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_5 =          new IndividualMusics('editor forest music (SMB - track 5)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 5', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_6 =          new IndividualMusics('editor forest music (SMB - track 6)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 6', 57_530,),)
    public static readonly FOREST_SMB_EDITOR_7 =          new IndividualMusics('editor forest music (SMB - track 7)',           repeatableDuringThePlay('M1_BGM_Woods_Edit - Track 7', 57_530,),)
    public static readonly FOREST_SMB =                   new IndividualMusics('forest music (SMB - day)',                      repeatableDuringThePlay('M1_BGM_Woods_Play', 57_530,),)
    public static readonly FOREST_SMB_NIGHT =             new IndividualMusics('forest music (SMB - night)',                    repeatableDuringThePlay('M1_BGM_Woods_Play_Moon', 57_600,),)
    public static readonly FOREST_SMB_FAST =              new IndividualMusics('fast forest music (SMB - day)',                 repeatableDuringThePlay('M1_BGM_Woods_PlayHurry', 50_998,),)
    public static readonly FOREST_SMB_NIGHT_FAST =        new IndividualMusics('fast forest music (SMB - night)',               repeatableDuringThePlay('M1_BGM_Woods_PlayHurry_Moon', 51_200,),)
    public static readonly FOREST_SMB3_EDITOR_1 =         new IndividualMusics('editor forest music (SMB3 - track 1)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 1', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_2 =         new IndividualMusics('editor forest music (SMB3 - track 2)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 2', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_3 =         new IndividualMusics('editor forest music (SMB3 - track 3)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 3', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_4 =         new IndividualMusics('editor forest music (SMB3 - track 4)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 4', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_5 =         new IndividualMusics('editor forest music (SMB3 - track 5)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 5', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_6 =         new IndividualMusics('editor forest music (SMB3 - track 6)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 6', 307_200,),)
    public static readonly FOREST_SMB3_EDITOR_7 =         new IndividualMusics('editor forest music (SMB3 - track 7)',          repeatableDuringThePlay('M3_BGM_Woods_Edit - Track 7', 307_200,),)
    public static readonly FOREST_SMW_EDITOR_1 =          new IndividualMusics('editor forest music (SMW - track 1)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 1', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_2 =          new IndividualMusics('editor forest music (SMW - track 2)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 2', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_3 =          new IndividualMusics('editor forest music (SMW - track 3)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 3', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_4 =          new IndividualMusics('editor forest music (SMW - track 4)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 4', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_5 =          new IndividualMusics('editor forest music (SMW - track 5)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 5', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_6 =          new IndividualMusics('editor forest music (SMW - track 6)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 6', 315_110,),)
    public static readonly FOREST_SMW_EDITOR_7 =          new IndividualMusics('editor forest music (SMW - track 7)',           repeatableDuringThePlay('MW_BGM_Woods_Edit - Track 7', 315_110,),)
    public static readonly FOREST_SMW_STANDALONE =        new IndividualMusics('forest music (SMW - standalone)',               repeatableDuringThePlay('MW_BGM_Woods_Play - Track 1', 209_455,),)
    public static readonly FOREST_SMW_YOSHI =             new IndividualMusics('forest music (SMW - Yoshi)',                    repeatableDuringThePlay('MW_BGM_Woods_Play - Track 2', 209_455,),)
    public static readonly FOREST_SMW_NIGHT =             new IndividualMusics('forest music (SMW - night)',                    repeatableDuringThePlay('MW_BGM_Woods_Play_Moon', 209_455,),)
    public static readonly FOREST_SMW_STANDALONE_FAST =   new IndividualMusics('fast forest music (SMW - standalone)',          repeatableDuringThePlay('MW_BGM_Woods_PlayHurry - Track 1', 164_571,),)
    public static readonly FOREST_SMW_YOSHI_FAST =        new IndividualMusics('fast forest music (SMW - Yoshi)',               repeatableDuringThePlay('MW_BGM_Woods_PlayHurry - Track 2', 164_571,),)
    public static readonly FOREST_SMW_NIGHT_FAST =        new IndividualMusics('fast forest music (SMW - night)',               repeatableDuringThePlay('MW_BGM_Woods_PlayHurry_Moon', 164_571,),)
    public static readonly FOREST_NSMBU_EDITOR_1 =        new IndividualMusics('editor forest music (NSMBU - track 1)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 1', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_2 =        new IndividualMusics('editor forest music (NSMBU - track 2)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 2', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_3 =        new IndividualMusics('editor forest music (NSMBU - track 3)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 3', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_4 =        new IndividualMusics('editor forest music (NSMBU - track 4)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 4', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_5 =        new IndividualMusics('editor forest music (NSMBU - track 5)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 5', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_6 =        new IndividualMusics('editor forest music (NSMBU - track 6)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 6', 204_727,),)
    public static readonly FOREST_NSMBU_EDITOR_7 =        new IndividualMusics('editor forest music (NSMBU - track 7)',         repeatableDuringThePlay('WU_BGM_Woods_Edit - Track 7', 204_727,),)
    public static readonly FOREST_NSMBU_LESSON_EDITOR_1 = new IndividualMusics('lesson editor forest music (NSMBU - track 1)',  repeatableAtTheEnd('WU_BGM_Woods_Edit_Lesson - Track 1',),)
    public static readonly FOREST_NSMBU_LESSON_EDITOR_2 = new IndividualMusics('lesson editor forest music (NSMBU - track 2)',  repeatableAtTheEnd('WU_BGM_Woods_Edit_Lesson - Track 2',),)
    public static readonly FOREST_NSMBU_LESSON_EDITOR_3 = new IndividualMusics('lesson editor forest music (NSMBU - track 3)',  repeatableAtTheEnd('WU_BGM_Woods_Edit_Lesson - Track 3',),)
    public static readonly FOREST_NSMBU_LESSON_EDITOR_4 = new IndividualMusics('lesson editor forest music (NSMBU - track 4)',  repeatableAtTheEnd('WU_BGM_Woods_Edit_Lesson - Track 4',),)
    public static readonly FOREST_NSMBU_STANDALONE =      new IndividualMusics('forest music (NSMBU - standalone)',             repeatableDuringThePlay('WU_BGM_Woods_Play - Track 1', 204_727,),)
    public static readonly FOREST_NSMBU_YOSHI =           new IndividualMusics('forest music (NSMBU - Yoshi)',                  repeatableDuringThePlay('WU_BGM_Woods_Play - Track 2', 204_727,),)
    public static readonly FOREST_NSMBU_NIGHT =           new IndividualMusics('forest music (NSMBU - night)',                  repeatableDuringThePlay('WU_BGM_Woods_Play_Moon', 204_727,),)
    public static readonly FOREST_NSMBU_STANDALONE_FAST = new IndividualMusics('fast forest music (NSMBU - standalone)',        repeatableAtTheEnd('WU_BGM_Woods_PlayHurry - Track 1',),)
    public static readonly FOREST_NSMBU_YOSHI_FAST =      new IndividualMusics('fast forest music (NSMBU - Yoshi)',             repeatableAtTheEnd('WU_BGM_Woods_PlayHurry - Track 2',),)
    public static readonly FOREST_NSMBU_NIGHT_FAST =      new IndividualMusics('fast forest music (NSMBU - night)',             repeatableAtTheEnd('WU_BGM_Woods_PlayHurry_Moon',),)
    public static readonly FOREST_SM3DW_EDITOR_1 =        new IndividualMusics('editor forest music (SM3DW - track 1)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 1', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_2 =        new IndividualMusics('editor forest music (SM3DW - track 2)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 2', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_3 =        new IndividualMusics('editor forest music (SM3DW - track 3)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 3', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_4 =        new IndividualMusics('editor forest music (SM3DW - track 4)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 4', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_5 =        new IndividualMusics('editor forest music (SM3DW - track 5)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 5', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_6 =        new IndividualMusics('editor forest music (SM3DW - track 6)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 6', 217_479,),)
    public static readonly FOREST_SM3DW_EDITOR_7 =        new IndividualMusics('editor forest music (SM3DW - track 7)',         repeatableDuringThePlay('3W_BGM_Woods_Edit - Track 7', 217_479,),)
    public static readonly FOREST_SM3DW =                 new IndividualMusics('forest music (SM3DW - standalone)',             repeatableDuringThePlay('3W_BGM_Woods_Play - Track 1', 217_479,),)
    public static readonly FOREST_SM3DW_UNDERWATER =      new IndividualMusics('forest music (SM3DW - underwater)',             repeatableDuringThePlay('3W_BGM_Woods_Play - Track 2', 217_479,),)
    public static readonly FOREST_SM3DW_FAST =            new IndividualMusics('fast forest music (SM3DW - standalone)',        repeatableDuringThePlay('3W_BGM_Woods_PlayHurry - Track 1', 60,),)
    public static readonly FOREST_SM3DW_UNDERWATER_FAST = new IndividualMusics('fast forest music (SM3DW - underwater)',        repeatableDuringThePlay('3W_BGM_Woods_PlayHurry - Track 2', 60,),)

    //endregion -------------------- Enum instances (forest) --------------------
    //region -------------------- Enum instances (ghost house) --------------------

    public static readonly GHOST_HOUSE_SMB_EDITOR_1 =          new IndividualMusics('editor ghost house music (SMB - track 1)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 1', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_2 =          new IndividualMusics('editor ghost house music (SMB - track 2)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 2', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_3 =          new IndividualMusics('editor ghost house music (SMB - track 3)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 3', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_4 =          new IndividualMusics('editor ghost house music (SMB - track 4)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 4', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_5 =          new IndividualMusics('editor ghost house music (SMB - track 5)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 5', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_6 =          new IndividualMusics('editor ghost house music (SMB - track 6)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 6', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_EDITOR_7 =          new IndividualMusics('editor ghost house music (SMB - track 7)',          repeatableDuringThePlay('M1_BGM_HauntedHouse_Edit - Track 7', 511_999,),)
    public static readonly GHOST_HOUSE_SMB =                   new IndividualMusics('ghost house music (SMB - day)',                     repeatableDuringThePlay('M1_BGM_HauntedHouse_Play', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_NIGHT =             new IndividualMusics('ghost house music (SMB - night)',                   repeatableDuringThePlay('M1_BGM_HauntedHouse_Play_Moon', 511_999,),)
    public static readonly GHOST_HOUSE_SMB_FAST =              new IndividualMusics('fast ghost house music (SMB - day)',                repeatableDuringThePlay('M1_BGM_HauntedHouse_PlayHurry', 10,),)
    public static readonly GHOST_HOUSE_SMB_NIGHT_FAST =        new IndividualMusics('fast ghost house music (SMB - night)',              repeatableDuringThePlay('M1_BGM_HauntedHouse_PlayHurry_Moon', 2,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_1 =         new IndividualMusics('editor ghost house music (SMB3 - track 1)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 1', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_2 =         new IndividualMusics('editor ghost house music (SMB3 - track 2)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 2', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_3 =         new IndividualMusics('editor ghost house music (SMB3 - track 3)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 3', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_4 =         new IndividualMusics('editor ghost house music (SMB3 - track 4)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 4', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_5 =         new IndividualMusics('editor ghost house music (SMB3 - track 5)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 5', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_6 =         new IndividualMusics('editor ghost house music (SMB3 - track 6)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 6', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_EDITOR_7 =         new IndividualMusics('editor ghost house music (SMB3 - track 7)',         repeatableDuringThePlay('M3_BGM_HauntedHouse_Edit - Track 7', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3 =                  new IndividualMusics('ghost house music (SMB3 - day)',                    repeatableDuringThePlay('M3_BGM_HauntedHouse_Play', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_NIGHT =            new IndividualMusics('ghost house music (SMB3 - night)',                  repeatableDuringThePlay('M3_BGM_Haunted_Play_Moon', 460_800,),)
    public static readonly GHOST_HOUSE_SMB3_FAST =             new IndividualMusics('fast ghost house music (SMB3 - day)',               repeatableDuringThePlay('M3_BGM_HauntedHouse_PlayHurry', 141_922,),)
    public static readonly GHOST_HOUSE_SMB3_NIGHT_FAST =       new IndividualMusics('fast ghost house music (SMB3 - night)',             repeatableDuringThePlay('M3_BGM_HauntedHouse_PlayHurry_Moon', 164_566,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_1 =          new IndividualMusics('editor ghost house music (SMW - track 1)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 1', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_2 =          new IndividualMusics('editor ghost house music (SMW - track 2)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 2', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_3 =          new IndividualMusics('editor ghost house music (SMW - track 3)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 3', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_4 =          new IndividualMusics('editor ghost house music (SMW - track 4)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 4', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_5 =          new IndividualMusics('editor ghost house music (SMW - track 5)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 5', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_6 =          new IndividualMusics('editor ghost house music (SMW - track 6)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 6', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_EDITOR_7 =          new IndividualMusics('editor ghost house music (SMW - track 7)',          repeatableDuringThePlay('MW_BGM_HauntedHouse_Edit - Track 7', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_STANDALONE =        new IndividualMusics('ghost house music (SMW - standalone)',              repeatableDuringThePlay('MW_BGM_HauntedHouse_Play - Track 1', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_YOSHI =             new IndividualMusics('ghost house music (SMW - Yoshi)',                   repeatableDuringThePlay('MW_BGM_HauntedHouse_Play - Track 2', 1_238_695,),)
    public static readonly GHOST_HOUSE_SMW_NIGHT =             new IndividualMusics('ghost house music (SMW - night)',                   repeatableDuringThePlay('MW_BGM_HauntedHouse_Play_Moon', 1_238_709,),)
    public static readonly GHOST_HOUSE_SMW_STANDALONE_FAST =   new IndividualMusics('fast ghost house music (SMW - standalone)',         repeatableDuringThePlay('MW_BGM_HauntedHouse_PlayHurry - Track 1', 808_421,),)
    public static readonly GHOST_HOUSE_SMW_YOSHI_FAST =        new IndividualMusics('fast ghost house music (SMW - Yoshi)',              repeatableDuringThePlay('MW_BGM_HauntedHouse_PlayHurry - Track 2', 808_421,),)
    public static readonly GHOST_HOUSE_SMW_NIGHT_FAST =        new IndividualMusics('fast ghost house music (SMW - night)',              repeatableDuringThePlay('MW_BGM_HauntedHouse_PlayHurry_Moon', 808_421,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_1 =        new IndividualMusics('editor ghost house music (NSMBU - track 1)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 1', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_2 =        new IndividualMusics('editor ghost house music (NSMBU - track 2)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 2', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_3 =        new IndividualMusics('editor ghost house music (NSMBU - track 3)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 3', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_4 =        new IndividualMusics('editor ghost house music (NSMBU - track 4)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 4', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_5 =        new IndividualMusics('editor ghost house music (NSMBU - track 5)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 5', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_6 =        new IndividualMusics('editor ghost house music (NSMBU - track 6)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 6', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_EDITOR_7 =        new IndividualMusics('editor ghost house music (NSMBU - track 7)',        repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit - Track 7', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_LESSON_EDITOR_1 = new IndividualMusics('lesson editor ghost house music (NSMBU - track 1)', repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit_Lesson - Track 1', 460_800,),)
    public static readonly GHOST_HOUSE_NSMBU_LESSON_EDITOR_2 = new IndividualMusics('lesson editor ghost house music (NSMBU - track 2)', repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit_Lesson - Track 2', 460_800,),)
    public static readonly GHOST_HOUSE_NSMBU_LESSON_EDITOR_3 = new IndividualMusics('lesson editor ghost house music (NSMBU - track 3)', repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit_Lesson - Track 3', 460_800,),)
    public static readonly GHOST_HOUSE_NSMBU_LESSON_EDITOR_4 = new IndividualMusics('lesson editor ghost house music (NSMBU - track 4)', repeatableDuringThePlay('WU_BGM_HauntedHouse_Edit_Lesson - Track 4', 460_800,),)
    public static readonly GHOST_HOUSE_NSMBU_STANDALONE =      new IndividualMusics('ghost house music (NSMBU - standalone)',            repeatableDuringThePlay('WU_BGM_HauntedHouse_Play - Track 1', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_YOSHI =           new IndividualMusics('ghost house music (NSMBU - Yoshi)',                 repeatableDuringThePlay('WU_BGM_HauntedHouse_Play - Track 2', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_NIGHT =           new IndividualMusics('ghost house music (NSMBU - night)',                 repeatableDuringThePlay('WU_BGM_HauntedHouse_Play_Moon', 599_403,),)
    public static readonly GHOST_HOUSE_NSMBU_STANDALONE_FAST = new IndividualMusics('fast ghost house music (NSMBU - standalone)',       repeatableDuringThePlay('WU_BGM_HauntedHouse_PlayHurry - Track 1', 383_680,),)
    public static readonly GHOST_HOUSE_NSMBU_YOSHI_FAST =      new IndividualMusics('fast ghost house music (NSMBU - Yoshi)',            repeatableDuringThePlay('WU_BGM_HauntedHouse_PlayHurry - Track 2', 383_680,),)
    public static readonly GHOST_HOUSE_NSMBU_NIGHT_FAST =      new IndividualMusics('fast ghost house music (NSMBU - night)',            repeatableDuringThePlay('WU_BGM_HauntedHouse_PlayHurry_Moon', 383_680,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_1 =        new IndividualMusics('editor ghost house music (SM3DW - track 1)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 1', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_2 =        new IndividualMusics('editor ghost house music (SM3DW - track 2)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 2', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_3 =        new IndividualMusics('editor ghost house music (SM3DW - track 3)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 3', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_4 =        new IndividualMusics('editor ghost house music (SM3DW - track 4)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 4', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_5 =        new IndividualMusics('editor ghost house music (SM3DW - track 5)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 5', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_6 =        new IndividualMusics('editor ghost house music (SM3DW - track 6)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 6', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_EDITOR_7 =        new IndividualMusics('editor ghost house music (SM3DW - track 7)',        repeatableDuringThePlay('3W_BGM_HauntedHouse_Edit - Track 7', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW =                 new IndividualMusics('ghost house music (SM3DW)',                         repeatableDuringThePlay('3W_BGM_HauntedHouse_Play', 1_542_766,),)
    public static readonly GHOST_HOUSE_SM3DW_FAST =            new IndividualMusics('fast ghost house music (SM3DW)',                    repeatableDuringThePlay('3W_BGM_HauntedHouse_PlayHurry', 234_840,),)

    //endregion -------------------- Enum instances (ghost house) --------------------
    //region -------------------- Enum instances (airship) --------------------

    public static readonly AIRSHIP_SMB_EDITOR_1 =          new IndividualMusics('editor airship music (SMB - track 1)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 1', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_2 =          new IndividualMusics('editor airship music (SMB - track 2)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 2', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_3 =          new IndividualMusics('editor airship music (SMB - track 3)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 3', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_4 =          new IndividualMusics('editor airship music (SMB - track 4)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 4', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_5 =          new IndividualMusics('editor airship music (SMB - track 5)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 5', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_6 =          new IndividualMusics('editor airship music (SMB - track 6)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 6', 384_000,),)
    public static readonly AIRSHIP_SMB_EDITOR_7 =          new IndividualMusics('editor airship music (SMB - track 7)',        repeatableDuringThePlay('M1_BGM_Airship_Edit - Track 7', 384_000,),)
    public static readonly AIRSHIP_SMB =                   new IndividualMusics('airship music (SMB - day)',                   repeatableDuringThePlay('M1_BGM_Airship_Play', 384_000,),)
    public static readonly AIRSHIP_SMB_NIGHT =             new IndividualMusics('airship music (SMB - night)',                 repeatableDuringThePlay('M1_BGM_Airship_Play_Moon', 384_000,),)
    public static readonly AIRSHIP_SMB_FAST =              new IndividualMusics('fast airship music (SMB - day)',              repeatableDuringThePlay('M1_BGM_Airship_PlayHurry', 143_980,),)
    public static readonly AIRSHIP_SMB_NIGHT_FAST =        new IndividualMusics('fast airship music (SMB - night)',            repeatableDuringThePlay('M1_BGM_Airship_PlayHurry_Moon', 143_980,),)
    public static readonly AIRSHIP_SMB3_EDITOR_1 =         new IndividualMusics('editor airship music (SMB3 - track 1)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 1', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_2 =         new IndividualMusics('editor airship music (SMB3 - track 2)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 2', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_3 =         new IndividualMusics('editor airship music (SMB3 - track 3)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 3', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_4 =         new IndividualMusics('editor airship music (SMB3 - track 4)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 4', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_5 =         new IndividualMusics('editor airship music (SMB3 - track 5)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 5', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_6 =         new IndividualMusics('editor airship music (SMB3 - track 6)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 6', 102_399,),)
    public static readonly AIRSHIP_SMB3_EDITOR_7 =         new IndividualMusics('editor airship music (SMB3 - track 7)',       repeatableDuringThePlay('M3_BGM_Airship_Edit - Track 7', 102_399,),)
    public static readonly AIRSHIP_SMB3 =                  new IndividualMusics('airship music (SMB3 - day)',                  repeatableDuringThePlay('M3_BGM_Airship_Play', 102_399,),)
    public static readonly AIRSHIP_SMB3_NIGHT =            new IndividualMusics('airship music (SMB3 - night)',                repeatableDuringThePlay('M3_BGM_Airship_Play_Moon', 102_399,),)
    public static readonly AIRSHIP_SMB3_FAST =             new IndividualMusics('fast airship music (SMB3 - day)',             repeatableDuringThePlay('M3_BGM_Airship_PlayHurry', 1_341_908,),)
    public static readonly AIRSHIP_SMB3_NIGHT_FAST =       new IndividualMusics('fast airship music (SMB3 - night)',           repeatableDuringThePlay('M3_BGM_Airship_PlayHurry_Moon', 1_341_908,),)
    public static readonly AIRSHIP_SMW_EDITOR_1 =          new IndividualMusics('editor airship music (SMW - track 1)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 1', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_2 =          new IndividualMusics('editor airship music (SMW - track 2)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 2', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_3 =          new IndividualMusics('editor airship music (SMW - track 3)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 3', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_4 =          new IndividualMusics('editor airship music (SMW - track 4)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 4', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_5 =          new IndividualMusics('editor airship music (SMW - track 5)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 5', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_6 =          new IndividualMusics('editor airship music (SMW - track 6)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 6', 506_487,),)
    public static readonly AIRSHIP_SMW_EDITOR_7 =          new IndividualMusics('editor airship music (SMW - track 7)',        repeatableDuringThePlay('MW_BGM_Airship_Edit - Track 7', 506_487,),)
    public static readonly AIRSHIP_SMW_STANDALONE =        new IndividualMusics('airship music (SMW - standalone)',            repeatableDuringThePlay('MW_BGM_Airship_Play - Track 1', 383_998,),)
    public static readonly AIRSHIP_SMW_YOSHI =             new IndividualMusics('airship music (SMW - Yoshi)',                 repeatableDuringThePlay('MW_BGM_Airship_Play - Track 2', 383_998,),)
    public static readonly AIRSHIP_SMW_NIGHT =             new IndividualMusics('airship music (SMW - night)',                 repeatableDuringThePlay('MW_BGM_Airship_Play_Moon', 383_998,),)
    public static readonly AIRSHIP_SMW_STANDALONE_FAST =   new IndividualMusics('fast airship music (SMW - standalone)',       repeatableDuringThePlay('MW_BGM_Airship_PlayHurry - Track 1', 287_998,),)
    public static readonly AIRSHIP_SMW_YOSHI_FAST =        new IndividualMusics('fast airship music (SMW - Yoshi)',            repeatableDuringThePlay('MW_BGM_Airship_PlayHurry - Track 2', 287_998,),)
    public static readonly AIRSHIP_SMW_NIGHT_FAST =        new IndividualMusics('fast airship music (SMW - night)',            repeatableDuringThePlay('MW_BGM_Airship_PlayHurry_Moon', 287_998,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_1 =        new IndividualMusics('editor airship music (NSMBU - track 1)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 1', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_2 =        new IndividualMusics('editor airship music (NSMBU - track 2)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 2', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_3 =        new IndividualMusics('editor airship music (NSMBU - track 3)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 3', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_4 =        new IndividualMusics('editor airship music (NSMBU - track 4)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 4', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_5 =        new IndividualMusics('editor airship music (NSMBU - track 5)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 5', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_6 =        new IndividualMusics('editor airship music (NSMBU - track 6)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 6', 601_042,),)
    public static readonly AIRSHIP_NSMBU_EDITOR_7 =        new IndividualMusics('editor airship music (NSMBU - track 7)',      repeatableDuringThePlay('WU_BGM_Airship_Edit - Track 7', 601_042,),)
    public static readonly AIRSHIP_NSMBU_STANDALONE =      new IndividualMusics('airship music (NSMBU - standalone)',          repeatableDuringThePlay('WU_BGM_Airship_Play - Track 1', 601_041,),)
    public static readonly AIRSHIP_NSMBU_YOSHI =           new IndividualMusics('airship music (NSMBU - Yoshi)',               repeatableDuringThePlay('WU_BGM_Airship_Play - Track 2', 601_041,),)
    public static readonly AIRSHIP_NSMBU_NIGHT =           new IndividualMusics('airship music (NSMBU - night)',               repeatableDuringThePlay('WU_BGM_Airship_Play_Moon', 601_043,),)
    public static readonly AIRSHIP_NSMBU_STANDALONE_FAST = new IndividualMusics('fast airship music (NSMBU - standalone)',     repeatableDuringThePlay('WU_BGM_Airship_PlayHurry - Track 1', 149_351,),)
    public static readonly AIRSHIP_NSMBU_YOSHI_FAST =      new IndividualMusics('fast airship music (NSMBU - Yoshi)',          repeatableDuringThePlay('WU_BGM_Airship_PlayHurry - Track 2', 149_351,),)
    public static readonly AIRSHIP_NSMBU_NIGHT_FAST =      new IndividualMusics('fast airship music (NSMBU - night)',          repeatableDuringThePlay('WU_BGM_Airship_PlayHurry_Moon', 149_333,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_1 =        new IndividualMusics('editor airship music (SM3DW - track 1)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 1', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_2 =        new IndividualMusics('editor airship music (SM3DW - track 2)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 2', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_3 =        new IndividualMusics('editor airship music (SM3DW - track 3)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 3', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_4 =        new IndividualMusics('editor airship music (SM3DW - track 4)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 4', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_5 =        new IndividualMusics('editor airship music (SM3DW - track 5)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 5', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_6 =        new IndividualMusics('editor airship music (SM3DW - track 6)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 6', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_EDITOR_7 =        new IndividualMusics('editor airship music (SM3DW - track 7)',      repeatableDuringThePlay('3W_BGM_Airship_Edit - Track 7', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW =                 new IndividualMusics('airship music (SM3DW)',                       repeatableDuringThePlay('3W_BGM_Airship_Play', 1_151_998,),)
    public static readonly AIRSHIP_SM3DW_FAST =            new IndividualMusics('fast airship music (SM3DW)',                  repeatableDuringThePlay('3W_BGM_Airship_PlayHurry', 243_850,),)

    //endregion -------------------- Enum instances (airship) --------------------
    //region -------------------- Enum instances (castle) --------------------

    public static readonly CASTLE_SMB_EDITOR_1 =          new IndividualMusics('editor castle music (SMB - track 1)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 1', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_2 =          new IndividualMusics('editor castle music (SMB - track 2)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 2', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_3 =          new IndividualMusics('editor castle music (SMB - track 3)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 3', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_4 =          new IndividualMusics('editor castle music (SMB - track 4)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 4', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_5 =          new IndividualMusics('editor castle music (SMB - track 5)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 5', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_6 =          new IndividualMusics('editor castle music (SMB - track 6)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 6', 516_054,),)
    public static readonly CASTLE_SMB_EDITOR_7 =          new IndividualMusics('editor castle music (SMB - track 7)',          repeatableDuringThePlay('M1_BGM_Castle_Edit - Track 7', 516_054,),)
    public static readonly CASTLE_SMB =                   new IndividualMusics('castle music (SMB - day)',                     repeatableDuringThePlay('M1_BGM_Castle_Play', 516_054,),)
    public static readonly CASTLE_SMB_NIGHT =             new IndividualMusics('castle music (SMB - night)',                   repeatableDuringThePlay('M1_BGM_Castle_Play_Moon', 516_054,),)
    public static readonly CASTLE_SMB_FAST =              new IndividualMusics('fast castle music (SMB - day)',                repeatableDuringThePlay('M1_BGM_Castle_PlayHurry', 310_068,),)
    public static readonly CASTLE_SMB_NIGHT_FAST =        new IndividualMusics('fast castle music (SMB - night)',              repeatableDuringThePlay('M1_BGM_Castle_PlayHurry_Moon', 310_068,),)
    public static readonly CASTLE_SMB3_EDITOR_1 =         new IndividualMusics('editor castle music (SMB3 - track 1)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 1', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_2 =         new IndividualMusics('editor castle music (SMB3 - track 2)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 2', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_3 =         new IndividualMusics('editor castle music (SMB3 - track 3)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 3', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_4 =         new IndividualMusics('editor castle music (SMB3 - track 4)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 4', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_5 =         new IndividualMusics('editor castle music (SMB3 - track 5)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 5', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_6 =         new IndividualMusics('editor castle music (SMB3 - track 6)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 6', 459_981,),)
    public static readonly CASTLE_SMB3_EDITOR_7 =         new IndividualMusics('editor castle music (SMB3 - track 7)',         repeatableDuringThePlay('M3_BGM_Castle_Edit - Track 7', 459_981,),)
    public static readonly CASTLE_SMB3 =                  new IndividualMusics('castle music (SMB3 - day)',                    repeatableDuringThePlay('M3_BGM_Castle_Play', 459_981,),)
    public static readonly CASTLE_SMB3_NIGHT =            new IndividualMusics('castle music (SMB3 - night)',                  repeatableDuringThePlay('M3_BGM_Castle_Play_Moon', 459_981,),)
    public static readonly CASTLE_SMB3_FAST =             new IndividualMusics('fast castle music (SMB3 - day)',               repeatableAtTheEnd('M3_BGM_Castle_PlayHurry',),)
    public static readonly CASTLE_SMB3_NIGHT_FAST =       new IndividualMusics('fast castle music (SMB3 - night)',             repeatableAtTheEnd('M3_BGM_Castle_PlayHurry_Moon',),)
    public static readonly CASTLE_SMW_EDITOR_1 =          new IndividualMusics('editor castle music (SMW - track 1)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 1', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_2 =          new IndividualMusics('editor castle music (SMW - track 2)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 2', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_3 =          new IndividualMusics('editor castle music (SMW - track 3)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 3', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_4 =          new IndividualMusics('editor castle music (SMW - track 4)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 4', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_5 =          new IndividualMusics('editor castle music (SMW - track 5)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 5', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_6 =          new IndividualMusics('editor castle music (SMW - track 6)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 6', 3_684_726,),)
    public static readonly CASTLE_SMW_EDITOR_7 =          new IndividualMusics('editor castle music (SMW - track 7)',          repeatableDuringThePlay('MW_BGM_Castle_Edit - Track 7', 3_684_726,),)
    public static readonly CASTLE_SMW_STANDALONE =        new IndividualMusics('castle music (SMW - standalone)',              repeatableDuringThePlay('MW_BGM_Castle_Play - Track 1', 3_683_879,),)
    public static readonly CASTLE_SMW_YOSHI =             new IndividualMusics('castle music (SMW - Yoshi)',                   repeatableDuringThePlay('MW_BGM_Castle_Play - Track 2', 3_683_879,),)
    public static readonly CASTLE_SMW_NIGHT =             new IndividualMusics('castle music (SMW - night)',                   repeatableDuringThePlay('MW_BGM_Castle_Play_Moon', 3_683_879,),)
    public static readonly CASTLE_SMW_STANDALONE_FAST =   new IndividualMusics('fast castle music (SMW - standalone)',         repeatableDuringThePlay('MW_BGM_Castle_PlayHurry - Track 1', 2_552_050,),)
    public static readonly CASTLE_SMW_YOSHI_FAST =        new IndividualMusics('fast castle music (SMW - Yoshi)',              repeatableDuringThePlay('MW_BGM_Castle_PlayHurry - Track 2', 2_552_050,),)
    public static readonly CASTLE_SMW_NIGHT_FAST =        new IndividualMusics('fast castle music (SMW - night)',              repeatableDuringThePlay('MW_BGM_Castle_PlayHurry_Moon', 2_552_050,),)
    public static readonly CASTLE_NSMBU_EDITOR_1 =        new IndividualMusics('editor castle music (NSMBU - track 1)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 1', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_2 =        new IndividualMusics('editor castle music (NSMBU - track 2)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 2', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_3 =        new IndividualMusics('editor castle music (NSMBU - track 3)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 3', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_4 =        new IndividualMusics('editor castle music (NSMBU - track 4)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 4', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_5 =        new IndividualMusics('editor castle music (NSMBU - track 5)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 5', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_6 =        new IndividualMusics('editor castle music (NSMBU - track 6)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 6', 839_032,),)
    public static readonly CASTLE_NSMBU_EDITOR_7 =        new IndividualMusics('editor castle music (NSMBU - track 7)',        repeatableDuringThePlay('WU_BGM_Castle_Edit - Track 7', 839_032,),)
    public static readonly CASTLE_NSMBU_LESSON_EDITOR_1 = new IndividualMusics('lesson editor castle music (NSMBU - track 1)', repeatableDuringThePlay('WU_BGM_Castle_Edit_Lesson - Track 1', 839_055,),)
    public static readonly CASTLE_NSMBU_LESSON_EDITOR_2 = new IndividualMusics('lesson editor castle music (NSMBU - track 2)', repeatableDuringThePlay('WU_BGM_Castle_Edit_Lesson - Track 2', 839_055,),)
    public static readonly CASTLE_NSMBU_LESSON_EDITOR_3 = new IndividualMusics('lesson editor castle music (NSMBU - track 3)', repeatableDuringThePlay('WU_BGM_Castle_Edit_Lesson - Track 3', 839_055,),)
    public static readonly CASTLE_NSMBU_LESSON_EDITOR_4 = new IndividualMusics('lesson editor castle music (NSMBU - track 4)', repeatableDuringThePlay('WU_BGM_Castle_Edit_Lesson - Track 4', 839_055,),)
    public static readonly CASTLE_NSMBU_STANDALONE =      new IndividualMusics('castle music (NSMBU - standalone)',            repeatableDuringThePlay('WU_BGM_Castle_Play - Track 1', 839_032,),)
    public static readonly CASTLE_NSMBU_YOSHI =           new IndividualMusics('castle music (NSMBU - Yoshi)',                 repeatableDuringThePlay('WU_BGM_Castle_Play - Track 2', 839_032,),)
    public static readonly CASTLE_NSMBU_NIGHT =           new IndividualMusics('castle music (NSMBU - night)',                 repeatableDuringThePlay('WU_BGM_Castle_Play_Moon', 839_891,),)
    public static readonly CASTLE_NSMBU_STANDALONE_FAST = new IndividualMusics('fast castle music (NSMBU - standalone)',       repeatableDuringThePlay('WU_BGM_Castle_PlayHurry - Track 1', 205_572,),)
    public static readonly CASTLE_NSMBU_YOSHI_FAST =      new IndividualMusics('fast castle music (NSMBU - Yoshi)',            repeatableDuringThePlay('WU_BGM_Castle_PlayHurry - Track 2', 205_572,),)
    public static readonly CASTLE_NSMBU_NIGHT_FAST =      new IndividualMusics('fast castle music (NSMBU - night)',            repeatableDuringThePlay('WU_BGM_Castle_PlayHurry_Moon', 207_144,),)
    public static readonly CASTLE_SM3DW_EDITOR_1 =        new IndividualMusics('editor castle music (SM3DW - track 1)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 1', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_2 =        new IndividualMusics('editor castle music (SM3DW - track 2)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 2', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_3 =        new IndividualMusics('editor castle music (SM3DW - track 3)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 3', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_4 =        new IndividualMusics('editor castle music (SM3DW - track 4)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 4', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_5 =        new IndividualMusics('editor castle music (SM3DW - track 5)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 5', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_6 =        new IndividualMusics('editor castle music (SM3DW - track 6)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 6', 1_010_134,),)
    public static readonly CASTLE_SM3DW_EDITOR_7 =        new IndividualMusics('editor castle music (SM3DW - track 7)',        repeatableDuringThePlay('3W_BGM_Castle_Edit - Track 7', 1_010_134,),)
    public static readonly CASTLE_SM3DW =                 new IndividualMusics('castle music (SM3DW)',                         repeatableDuringThePlay('3W_BGM_Castle_Play', 1_010_134,),)
    public static readonly CASTLE_SM3DW_FAST =            new IndividualMusics('fast castle music (SM3DW)',                    repeatableDuringThePlay('3W_BGM_Castle_PlayHurry', 431,),)

    //endregion -------------------- Enum instances (castle) --------------------

    //region -------------------- Enum instances (link) --------------------

    public static readonly GROUND_LINK =           new IndividualMusics('ground music (Link)',           repeatableDuringThePlay('M1_BGM_Link_Plain', 325_912,),)
    public static readonly GROUND_LINK_FAST =      new IndividualMusics('fast ground music (Link)',      repeatableDuringThePlay('M1_BGM_Link_Plain_Hurry', 277_648,),)
    public static readonly UNDERGROUND_LINK =      new IndividualMusics('underground music (Link)',      repeatableDuringThePlay('M1_BGM_Link_Underground', 8_034,),)
    public static readonly UNDERGROUND_LINK_FAST = new IndividualMusics('fast underground music (Link)', repeatableDuringThePlay('M1_BGM_Link_Underground_Hurry', 6_902,),)
    public static readonly CASTLE_LINK =           new IndividualMusics('castle music (Link)',           repeatableDuringThePlay('M1_BGM_Link_Castle', 182_200,),)
    public static readonly CASTLE_LINK_FAST =      new IndividualMusics('fast castle music (Link)',      repeatableDuringThePlay('M1_BGM_Link_Castle_Hurry', 164_622,),)

    //endregion -------------------- Enum instances (link) --------------------
    //region -------------------- Enum instances (smb2) --------------------

    public static readonly GROUND_SMB2 =           new IndividualMusics('ground music (SMB2)',           repeatableDuringThePlay('BGM_M1_USA_Plain', 230_021,),)
    public static readonly GROUND_SMB2_FAST =      new IndividualMusics('fast ground music (SMB2)',      repeatableDuringThePlay('BGM_M1_USA_Plain_hurry', 204_463,),)
    public static readonly UNDERGROUND_SMB2 =      new IndividualMusics('underground music (SMB2)',      repeatableDuringThePlay('BGM_M1_USA_Underground', 89_453,),)
    public static readonly UNDERGROUND_SMB2_FAST = new IndividualMusics('fast underground music (SMB2)', repeatableDuringThePlay('BGM_M1_USA_Underground_hurry', 70_284,),)

    //endregion -------------------- Enum instances (smb2) --------------------
    //region -------------------- Enum instances (sml) --------------------

    public static readonly SML =      new IndividualMusics('music (SML)', null,)
    public static readonly SML_FAST = new IndividualMusics('fast music (SML)', null,)

    //endregion -------------------- Enum instances (sml) --------------------

    //region -------------------- Enum instances (course world) --------------------

    public static readonly GROUND_WORLD_EDITOR =      new IndividualMusics('editor world music (ground)',      repeatableAtTheEnd('BGM_WorldMap_Plain_Edit',),)
    public static readonly GROUND_WORLD =             new IndividualMusics('world music (ground)',             repeatableAtTheEnd('BGM_WorldMap_Plain_Play',),)
    public static readonly UNDERGROUND_WORLD_EDITOR = new IndividualMusics('editor world music (underground)', repeatableDuringThePlay('BGM_WorldMap_UnderGround_Edit', 269_265,),)
    public static readonly UNDERGROUND_WORLD =        new IndividualMusics('world music (underground)',        repeatableDuringThePlay('BGM_WorldMap_UnderGround_Play', 269_265,),)
    public static readonly DESERT_WORLD_EDITOR =      new IndividualMusics('editor world music (desert)',      repeatableDuringThePlay('BGM_WorldMap_Desert_Edit', 205_714,),)
    public static readonly DESERT_WORLD =             new IndividualMusics('world music (desert)',             repeatableDuringThePlay('BGM_WorldMap_Desert_Play', 205_714,),)
    public static readonly SNOW_WORLD_EDITOR =        new IndividualMusics('editor world music (snow)',        repeatableDuringThePlay('BGM_WorldMap_Snow_Edit', 315_616,),)
    public static readonly SNOW_WORLD =               new IndividualMusics('world music (snow)',               repeatableDuringThePlay('BGM_WorldMap_Snow_Play', 315_616,),)
    public static readonly SKY_WORLD_EDITOR =         new IndividualMusics('editor world music (sky)',         repeatableDuringThePlay('BGM_WorldMap_Athletic_Edit', 179,),)
    public static readonly SKY_WORLD =                new IndividualMusics('world music (sky)',                repeatableDuringThePlay('BGM_WorldMap_Athletic_Play', 179,),)
    public static readonly FOREST_WORLD_EDITOR =      new IndividualMusics('editor world music (forest)',      repeatableDuringThePlay('BGM_WorldMap_Woods_Edit', 91,),)
    public static readonly FOREST_WORLD =             new IndividualMusics('world music (forest)',             repeatableDuringThePlay('BGM_WorldMap_Woods_Play', 91,),)
    public static readonly VOLCANO_WORLD_EDITOR =     new IndividualMusics('editor world music (volcano)',     repeatableDuringThePlay('BGM_WorldMap_Magma_Edit', 188_852,),)
    public static readonly VOLCANO_WORLD =            new IndividualMusics('world music (volcano)',            repeatableDuringThePlay('BGM_WorldMap_Magma_Play', 188_852,),)
    public static readonly SPACE_WORLD_EDITOR =       new IndividualMusics('editor world music (space)',       repeatableDuringThePlay('BGM_WorldMap_Night_Edit', 150_496,),)
    public static readonly SPACE_WORLD =              new IndividualMusics('world music (space)',              repeatableDuringThePlay('BGM_WorldMap_Night_Play', 150_496,),)

    //endregion -------------------- Enum instances (course world) --------------------

    public static readonly P_SWITCH = new IndividualMusics('p-switch', null,)

    public static readonly SUPER_STAR = new IndividualMusics('super star', null,)

    //region -------------------- Enum instances (peaceful) --------------------

    public static readonly PEACEFUL_LINK = new IndividualMusics('peaceful music (Link)', repeatableDuringThePlay('M1_BGM_Otoasobi_Link_Healing', 148_074,), )
    public static readonly PEACEFUL_SMB2 = new IndividualMusics('peaceful music (SMB2)', repeatableDuringThePlay('BGM_M1_USA_Ending', 368_993,),)

    //endregion -------------------- Enum instances (peaceful) --------------------
    //region -------------------- Enum instances (bonus) --------------------

    public static readonly BONUS_SMB =              new IndividualMusics('bonus music (SMB)',              repeatableDuringThePlay('M1_BGM_Otoasobi_Bonus', 4,),)
    public static readonly BONUS_SMB_FAST =         new IndividualMusics('fast bonus music (SMB)',         repeatableAtTheEnd('M1_BGM_Otoasobi_BonusHurry',),)
    public static readonly BONUS_LINK =             new IndividualMusics('bonus music (Link)',             repeatableDuringThePlay('M1_BGM_Otoasobi_Link_Bonus', 148_531,),)
    public static readonly BONUS_LINK_FAST =        new IndividualMusics('fast bonus music (Link)',        repeatableDuringThePlay('M1_BGM_Otoasobi_Link_BonusHurry', 122_177,),)
    public static readonly BONUS_SMB2 =             new IndividualMusics('bonus music (SMB2)',             repeatableDuringThePlay('BGM_M1_USA_CharacterSelect', 172_512,),)
    public static readonly BONUS_SMB2_FAST =        new IndividualMusics('fast bonus music (SMB2)',        repeatableDuringThePlay('BGM_M1_USA_CharacterSelect_hurry', 129_152,),)
    public static readonly BONUS_SMB3 =             new IndividualMusics('bonus music (SMB3)',             repeatableDuringThePlay('M3_BGM_Otoasobi_Bonus', 244,),)
    public static readonly BONUS_SMB3_FAST =        new IndividualMusics('fast bonus music (SMB3)',        repeatableAtTheEnd('M3_BGM_Otoasobi_BonusHurry',),)
    public static readonly BONUS_SMW =              new IndividualMusics('bonus music (SMW)',              repeatableDuringThePlay('MW_BGM_Otoasobi_Bonus', 97_302,),)
    public static readonly BONUS_SMW_FAST =         new IndividualMusics('fast bonus music (SMW)',         repeatableDuringThePlay('MW_BGM_Otoasobi_BonusHurry', 83_895,),)
    public static readonly BONUS_NSMBU =            new IndividualMusics('bonus music (NSMBU)',            repeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 1', 49_563,),)
    public static readonly BONUS_NSMBU_YOSHI =      new IndividualMusics('fast bonus music (NSMBU)',       repeatableDuringThePlay('WU_BGM_Otoasobi_Bonus - Track 2', 49_563,),)
    public static readonly BONUS_NSMBU_FAST =       new IndividualMusics('bonus music (NSMBU Yoshi)',      repeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 1', 94_334,),)
    public static readonly BONUS_NSMBU_YOSHI_FAST = new IndividualMusics('fast bonus music (NSMBU Yoshi)', repeatableDuringThePlay('WU_BGM_Otoasobi_BonusHurry - Track 2', 94_334,),)
    public static readonly BONUS_SM3DW =            new IndividualMusics('bonus music (SM3DW)',            repeatableDuringThePlay('3W_BGM_Otoasobi_Bonus', 233_756,),)
    public static readonly BONUS_SM3DW_FAST =       new IndividualMusics('fast bonus music (SM3DW)',       repeatableDuringThePlay('3W_BGM_Otoasobi_BonusHurry', 241_918,),)

    //endregion -------------------- Enum instances (bonus) --------------------
    //region -------------------- Enum instances (boss) --------------------

    public static readonly BOSS_SMB =        new IndividualMusics('boss music (SMB)',        repeatableDuringThePlay('M1_BGM_Otoasobi_Boss', 265_559,),)
    public static readonly BOSS_SMB_FAST =   new IndividualMusics('fast boss music (SMB)',   repeatableDuringThePlay('M1_BGM_Otoasobi_BossHurry', 220_012,),)
    public static readonly BOSS_LINK =       new IndividualMusics('boss music (Link)',       repeatableDuringThePlay('M1_BGM_Link_Boss', 15_931,),)
    public static readonly BOSS_LINK_FAST =  new IndividualMusics('fast boss music (Link)',  repeatableDuringThePlay('M1_BGM_Link_Boss_Hurry', 11_872,),)
    public static readonly BOSS_SMB2 =       new IndividualMusics('boss music (SMB2)',       repeatableDuringThePlay('BGM_M1_USA_Boss', 115_011,),)
    public static readonly BOSS_SMB2_FAST =  new IndividualMusics('fast boss music (SMB2)',  repeatableDuringThePlay('BGM_M1_USA_Boss_hurry', 102_231,),)
    public static readonly BOSS_SMB3 =       new IndividualMusics('boss music (SMB3)',       repeatableDuringThePlay('M3_BGM_Otoasobi_Boss', 206_172,),)
    public static readonly BOSS_SMB3_FAST =  new IndividualMusics('fast boss music (SMB3)',  repeatableDuringThePlay('M3_BGM_Otoasobi_BossHurry', 198_170,),)
    public static readonly BOSS_SMW =        new IndividualMusics('boss music (SMW)',        repeatableDuringThePlay('MW_BGM_Otoasobi_Boss', 69_552,),)
    public static readonly BOSS_SMW_FAST =   new IndividualMusics('fast boss music (SMW)',   repeatableDuringThePlay('MW_BGM_Otoasobi_BossHurry', 187_181,),)
    public static readonly BOSS_NSMBU =      new IndividualMusics('boss music (NSMBU)',      repeatableDuringThePlay('WU_BGM_Otoasobi_Boss', 280_392,),)
    public static readonly BOSS_NSMBU_FAST = new IndividualMusics('fast boss music (NSMBU)', repeatableDuringThePlay('WU_BGM_Otoasobi_BossHurry', 236_907,),)
    public static readonly BOSS_SM3DW =      new IndividualMusics('boss music (SM3DW)',      repeatableDuringThePlay('3W_BGM_Otoasobi_Boss', 233_238,),)
    public static readonly BOSS_SM3DW_FAST = new IndividualMusics('fast boss music (SM3DW)', repeatableDuringThePlay('3W_BGM_Otoasobi_BossHurry', 267_965,),)

    //endregion -------------------- Enum instances (boss) --------------------
    //region -------------------- Enum instances (final boss) --------------------

    public static readonly FINAL_BOSS_LINK =       new IndividualMusics('final boss music (Link)',       repeatableDuringThePlay('M1_BGM_Link_LastBoss', 23_984,),)
    public static readonly FINAL_BOSS_LINK_FAST =  new IndividualMusics('fast final boss music (Link)',  repeatableDuringThePlay('M1_BGM_Link_LastBoss_Hurry', 20_284,),)
    public static readonly FINAL_BOSS_SMB2 =       new IndividualMusics('final boss music (SMB2)',       repeatableDuringThePlay('BGM_M1_USA_LastBoss', 115_011,),)
    public static readonly FINAL_BOSS_SMB2_FAST =  new IndividualMusics('fast final boss music (SMB2)',  repeatableDuringThePlay('BGM_M1_USA_LastBoss_hurry', 102_231,),)
    public static readonly FINAL_BOSS_SMB3 =       new IndividualMusics('final boss music (SMB3)',       repeatableDuringThePlay('M3_BGM_Otoasobi_LastBoss', 89_453,),)
    public static readonly FINAL_BOSS_SMB3_FAST =  new IndividualMusics('fast final boss music (SMB3)',  repeatableDuringThePlay('M3_BGM_Otoasobi_LastBossHurry', 76_674,),)
    public static readonly FINAL_BOSS_SMW =        new IndividualMusics('final boss music (SMW)',        repeatableDuringThePlay('MW_BGM_Otoasobi_LastBoss', 90_251,),)
    public static readonly FINAL_BOSS_SMW_FAST =   new IndividualMusics('fast final boss music (SMW)',   repeatableDuringThePlay('MW_BGM_Otoasobi_LastBossHurry', 72_957,),)
    public static readonly FINAL_BOSS_NSMBU =      new IndividualMusics('final boss music (NSMBU)',      repeatableDuringThePlay('WU_BGM_Otoasobi_LastBoss', 487_912,),)
    public static readonly FINAL_BOSS_NSMBU_FAST = new IndividualMusics('fast final boss music (NSMBU)', repeatableDuringThePlay('WU_BGM_Otoasobi_LastBossHurry', 454_360,),)
    public static readonly FINAL_BOSS_SM3DW =      new IndividualMusics('final boss music (SM3DW)',      repeatableDuringThePlay('3W_BGM_Otoasobi_LastBoss', 2_794_396,),)
    public static readonly FINAL_BOSS_SM3DW_FAST = new IndividualMusics('fast final boss music (SM3DW)', repeatableDuringThePlay('3W_BGM_Otoasobi_LastBossHurry', 2_307_013,),)

    //endregion -------------------- Enum instances (final boss) --------------------
    //region -------------------- Enum instances (other game) --------------------

    public static readonly SMK =       new IndividualMusics('music (SMK)',       repeatableDuringThePlay('BGM_Otoasobi_SFCMarioKart_Circuit', 130_927,),)
    public static readonly SMK_FAST =  new IndividualMusics('fast music (SMK)',  repeatableDuringThePlay('BGM_Otoasobi_SFCMarioKartHurry_Circuit', 102_494,),)
    public static readonly SM64 =      new IndividualMusics('music (SM64)',      repeatableDuringThePlay('BGM_Otoasobi_SuperMario64_Slider', 181_140,),)
    public static readonly SM64_FAST = new IndividualMusics('fast music (SM64)', repeatableDuringThePlay('BGM_Otoasobi_SuperMario64Hurry_Slider', 151_154,),)
    public static readonly SMS =       new IndividualMusics('music (SMS)',       repeatableDuringThePlay('BGM_Otoasobi_MarioSunshine_DolphicTown', 434_950,),)
    public static readonly SMS_FAST =  new IndividualMusics('fast music (SMS)',  repeatableDuringThePlay('BGM_Otoasobi_MarioSunshineHurry_DolphicTown', 392_890,),)
    public static readonly SMG =       new IndividualMusics('music (SMG)',       repeatableDuringThePlay('BGM_Otoasobi_MarioGalaxy_WindGarden', 419_760,),)
    public static readonly SMG_FAST =  new IndividualMusics('fast music (SMG)',  repeatableDuringThePlay('BGM_Otoasobi_MarioGalaxyHurry_WindGarden', 353_407),)

    //endregion -------------------- Enum instances (other game) --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<IndividualMusics, typeof IndividualMusics> = class CompanionEnum_IndividualMusics
        extends CompanionEnum<IndividualMusics, typeof IndividualMusics> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_IndividualMusics

        private constructor() {
            super(IndividualMusics,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_IndividualMusics()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #file: FILE
    readonly #titleName: TITLE_NAME

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(titleName: TITLE_NAME, file: FILE,) {
        super()
        this.#file = file
        this.#titleName = titleName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get file(): FILE {
        return this.#file
    }

    public get titleName(): TITLE_NAME {
        return this.#titleName
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace IndividualMusics {

    //region -------------------- Fields (editor) --------------------

    export const SMB_GROUND_EDITORS =   [IndividualMusics.GROUND_SMB_EDITOR_1,   IndividualMusics.GROUND_SMB_EDITOR_2,   IndividualMusics.GROUND_SMB_EDITOR_3,   IndividualMusics.GROUND_SMB_EDITOR_4,   IndividualMusics.GROUND_SMB_EDITOR_5,   IndividualMusics.GROUND_SMB_EDITOR_6,   IndividualMusics.GROUND_SMB_EDITOR_7,  ] as const
    export const SMB3_GROUND_EDITORS =  [IndividualMusics.GROUND_SMB3_EDITOR_1,  IndividualMusics.GROUND_SMB3_EDITOR_2,  IndividualMusics.GROUND_SMB3_EDITOR_3,  IndividualMusics.GROUND_SMB3_EDITOR_4,  IndividualMusics.GROUND_SMB3_EDITOR_5,  IndividualMusics.GROUND_SMB3_EDITOR_6,  IndividualMusics.GROUND_SMB3_EDITOR_7, ] as const
    export const SMW_GROUND_EDITORS =   [IndividualMusics.GROUND_SMW_EDITOR_1,   IndividualMusics.GROUND_SMW_EDITOR_2,   IndividualMusics.GROUND_SMW_EDITOR_3,   IndividualMusics.GROUND_SMW_EDITOR_4,   IndividualMusics.GROUND_SMW_EDITOR_5,   IndividualMusics.GROUND_SMW_EDITOR_6,   IndividualMusics.GROUND_SMW_EDITOR_7,  ] as const
    export const NSMBU_GROUND_EDITORS = [IndividualMusics.GROUND_NSMBU_EDITOR_1, IndividualMusics.GROUND_NSMBU_EDITOR_2, IndividualMusics.GROUND_NSMBU_EDITOR_3, IndividualMusics.GROUND_NSMBU_EDITOR_4, IndividualMusics.GROUND_NSMBU_EDITOR_5, IndividualMusics.GROUND_NSMBU_EDITOR_6, IndividualMusics.GROUND_NSMBU_EDITOR_7,] as const
    export const SM3DW_GROUND_EDITORS = [IndividualMusics.GROUND_SM3DW_EDITOR_1, IndividualMusics.GROUND_SM3DW_EDITOR_2, IndividualMusics.GROUND_SM3DW_EDITOR_3, IndividualMusics.GROUND_SM3DW_EDITOR_4, IndividualMusics.GROUND_SM3DW_EDITOR_5, IndividualMusics.GROUND_SM3DW_EDITOR_6, IndividualMusics.GROUND_SM3DW_EDITOR_7,] as const

    export const SMB_UNDERGROUND_EDITORS =   [IndividualMusics.UNDERGROUND_SMB_EDITOR_1,   IndividualMusics.UNDERGROUND_SMB_EDITOR_2,   IndividualMusics.UNDERGROUND_SMB_EDITOR_3,   IndividualMusics.UNDERGROUND_SMB_EDITOR_4,   IndividualMusics.UNDERGROUND_SMB_EDITOR_5,   IndividualMusics.UNDERGROUND_SMB_EDITOR_6,   IndividualMusics.UNDERGROUND_SMB_EDITOR_7,  ] as const
    export const SMB3_UNDERGROUND_EDITORS =  [IndividualMusics.UNDERGROUND_SMB3_EDITOR_1,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_2,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_3,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_4,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_5,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_6,  IndividualMusics.UNDERGROUND_SMB3_EDITOR_7, ] as const
    export const SMW_UNDERGROUND_EDITORS =   [IndividualMusics.UNDERGROUND_SMW_EDITOR_1,   IndividualMusics.UNDERGROUND_SMW_EDITOR_2,   IndividualMusics.UNDERGROUND_SMW_EDITOR_3,   IndividualMusics.UNDERGROUND_SMW_EDITOR_4,   IndividualMusics.UNDERGROUND_SMW_EDITOR_5,   IndividualMusics.UNDERGROUND_SMW_EDITOR_6,   IndividualMusics.UNDERGROUND_SMW_EDITOR_7,  ] as const
    export const NSMBU_UNDERGROUND_EDITORS = [IndividualMusics.UNDERGROUND_NSMBU_EDITOR_1, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_2, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_3, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_4, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_5, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_6, IndividualMusics.UNDERGROUND_NSMBU_EDITOR_7,] as const
    export const SM3DW_UNDERGROUND_EDITORS = [IndividualMusics.UNDERGROUND_SM3DW_EDITOR_1, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_2, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_3, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_4, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_5, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_6, IndividualMusics.UNDERGROUND_SM3DW_EDITOR_7,] as const

    export const SMB_UNDERWATER_EDITORS =   [IndividualMusics.UNDERWATER_SMB_EDITOR_1,   IndividualMusics.UNDERWATER_SMB_EDITOR_2,   IndividualMusics.UNDERWATER_SMB_EDITOR_3,   IndividualMusics.UNDERWATER_SMB_EDITOR_4,   IndividualMusics.UNDERWATER_SMB_EDITOR_5,   IndividualMusics.UNDERWATER_SMB_EDITOR_6,   IndividualMusics.UNDERWATER_SMB_EDITOR_7,  ] as const
    export const SMB3_UNDERWATER_EDITORS =  [IndividualMusics.UNDERWATER_SMB3_EDITOR_1,  IndividualMusics.UNDERWATER_SMB3_EDITOR_2,  IndividualMusics.UNDERWATER_SMB3_EDITOR_3,  IndividualMusics.UNDERWATER_SMB3_EDITOR_4,  IndividualMusics.UNDERWATER_SMB3_EDITOR_5,  IndividualMusics.UNDERWATER_SMB3_EDITOR_6,  IndividualMusics.UNDERWATER_SMB3_EDITOR_7, ] as const
    export const SMW_UNDERWATER_EDITORS =   [IndividualMusics.UNDERWATER_SMW_EDITOR_1,   IndividualMusics.UNDERWATER_SMW_EDITOR_2,   IndividualMusics.UNDERWATER_SMW_EDITOR_3,   IndividualMusics.UNDERWATER_SMW_EDITOR_4,   IndividualMusics.UNDERWATER_SMW_EDITOR_5,   IndividualMusics.UNDERWATER_SMW_EDITOR_6,   IndividualMusics.UNDERWATER_SMW_EDITOR_7,  ] as const
    export const NSMBU_UNDERWATER_EDITORS = [IndividualMusics.UNDERWATER_NSMBU_EDITOR_1, IndividualMusics.UNDERWATER_NSMBU_EDITOR_2, IndividualMusics.UNDERWATER_NSMBU_EDITOR_3, IndividualMusics.UNDERWATER_NSMBU_EDITOR_4, IndividualMusics.UNDERWATER_NSMBU_EDITOR_5, IndividualMusics.UNDERWATER_NSMBU_EDITOR_6, IndividualMusics.UNDERWATER_NSMBU_EDITOR_7,] as const
    export const SM3DW_UNDERWATER_EDITORS = [IndividualMusics.UNDERWATER_SM3DW_EDITOR_1, IndividualMusics.UNDERWATER_SM3DW_EDITOR_2, IndividualMusics.UNDERWATER_SM3DW_EDITOR_3, IndividualMusics.UNDERWATER_SM3DW_EDITOR_4, IndividualMusics.UNDERWATER_SM3DW_EDITOR_5, IndividualMusics.UNDERWATER_SM3DW_EDITOR_6, IndividualMusics.UNDERWATER_SM3DW_EDITOR_7,] as const

    export const SMB_DESERT_EDITORS =   [IndividualMusics.DESERT_SMB_EDITOR_1,   IndividualMusics.DESERT_SMB_EDITOR_2,   IndividualMusics.DESERT_SMB_EDITOR_3,   IndividualMusics.DESERT_SMB_EDITOR_4,   IndividualMusics.DESERT_SMB_EDITOR_5,   IndividualMusics.DESERT_SMB_EDITOR_6,   IndividualMusics.DESERT_SMB_EDITOR_7,  ] as const
    export const SMB3_DESERT_EDITORS =  [IndividualMusics.DESERT_SMB3_EDITOR_1,  IndividualMusics.DESERT_SMB3_EDITOR_2,  IndividualMusics.DESERT_SMB3_EDITOR_3,  IndividualMusics.DESERT_SMB3_EDITOR_4,  IndividualMusics.DESERT_SMB3_EDITOR_5,  IndividualMusics.DESERT_SMB3_EDITOR_6,  IndividualMusics.DESERT_SMB3_EDITOR_7, ] as const
    export const SMW_DESERT_EDITORS =   [IndividualMusics.DESERT_SMW_EDITOR_1,   IndividualMusics.DESERT_SMW_EDITOR_2,   IndividualMusics.DESERT_SMW_EDITOR_3,   IndividualMusics.DESERT_SMW_EDITOR_4,   IndividualMusics.DESERT_SMW_EDITOR_5,   IndividualMusics.DESERT_SMW_EDITOR_6,   IndividualMusics.DESERT_SMW_EDITOR_7,  ] as const
    export const NSMBU_DESERT_EDITORS = [IndividualMusics.DESERT_NSMBU_EDITOR_1, IndividualMusics.DESERT_NSMBU_EDITOR_2, IndividualMusics.DESERT_NSMBU_EDITOR_3, IndividualMusics.DESERT_NSMBU_EDITOR_4, IndividualMusics.DESERT_NSMBU_EDITOR_5, IndividualMusics.DESERT_NSMBU_EDITOR_6, IndividualMusics.DESERT_NSMBU_EDITOR_7,] as const
    export const SM3DW_DESERT_EDITORS = [IndividualMusics.DESERT_SM3DW_EDITOR_1, IndividualMusics.DESERT_SM3DW_EDITOR_2, IndividualMusics.DESERT_SM3DW_EDITOR_3, IndividualMusics.DESERT_SM3DW_EDITOR_4, IndividualMusics.DESERT_SM3DW_EDITOR_5, IndividualMusics.DESERT_SM3DW_EDITOR_6, IndividualMusics.DESERT_SM3DW_EDITOR_7,] as const

    export const SMB_SNOW_EDITORS =   [IndividualMusics.SNOW_SMB_EDITOR_1,   IndividualMusics.SNOW_SMB_EDITOR_2,   IndividualMusics.SNOW_SMB_EDITOR_3,   IndividualMusics.SNOW_SMB_EDITOR_4,   IndividualMusics.SNOW_SMB_EDITOR_5,   IndividualMusics.SNOW_SMB_EDITOR_6,   IndividualMusics.SNOW_SMB_EDITOR_7,  ] as const
    export const SMB3_SNOW_EDITORS =  [IndividualMusics.SNOW_SMB3_EDITOR_1,  IndividualMusics.SNOW_SMB3_EDITOR_2,  IndividualMusics.SNOW_SMB3_EDITOR_3,  IndividualMusics.SNOW_SMB3_EDITOR_4,  IndividualMusics.SNOW_SMB3_EDITOR_5,  IndividualMusics.SNOW_SMB3_EDITOR_6,  IndividualMusics.SNOW_SMB3_EDITOR_7, ] as const
    export const SMW_SNOW_EDITORS =   [IndividualMusics.SNOW_SMW_EDITOR_1,   IndividualMusics.SNOW_SMW_EDITOR_2,   IndividualMusics.SNOW_SMW_EDITOR_3,   IndividualMusics.SNOW_SMW_EDITOR_4,   IndividualMusics.SNOW_SMW_EDITOR_5,   IndividualMusics.SNOW_SMW_EDITOR_6,   IndividualMusics.SNOW_SMW_EDITOR_7,  ] as const
    export const NSMBU_SNOW_EDITORS = [IndividualMusics.SNOW_NSMBU_EDITOR_1, IndividualMusics.SNOW_NSMBU_EDITOR_2, IndividualMusics.SNOW_NSMBU_EDITOR_3, IndividualMusics.SNOW_NSMBU_EDITOR_4, IndividualMusics.SNOW_NSMBU_EDITOR_5, IndividualMusics.SNOW_NSMBU_EDITOR_6, IndividualMusics.SNOW_NSMBU_EDITOR_7,] as const
    export const SM3DW_SNOW_EDITORS = [IndividualMusics.SNOW_SM3DW_EDITOR_1, IndividualMusics.SNOW_SM3DW_EDITOR_2, IndividualMusics.SNOW_SM3DW_EDITOR_3, IndividualMusics.SNOW_SM3DW_EDITOR_4, IndividualMusics.SNOW_SM3DW_EDITOR_5, IndividualMusics.SNOW_SM3DW_EDITOR_6, IndividualMusics.SNOW_SM3DW_EDITOR_7,] as const

    export const SMB_SKY_EDITORS =   [IndividualMusics.SKY_SMB_EDITOR_1,   IndividualMusics.SKY_SMB_EDITOR_2,   IndividualMusics.SKY_SMB_EDITOR_3,   IndividualMusics.SKY_SMB_EDITOR_4,   IndividualMusics.SKY_SMB_EDITOR_5,   IndividualMusics.SKY_SMB_EDITOR_6,   IndividualMusics.SKY_SMB_EDITOR_7,  ] as const
    export const SMB3_SKY_EDITORS =  [IndividualMusics.SKY_SMB3_EDITOR_1,  IndividualMusics.SKY_SMB3_EDITOR_2,  IndividualMusics.SKY_SMB3_EDITOR_3,  IndividualMusics.SKY_SMB3_EDITOR_4,  IndividualMusics.SKY_SMB3_EDITOR_5,  IndividualMusics.SKY_SMB3_EDITOR_6,  IndividualMusics.SKY_SMB3_EDITOR_7, ] as const
    export const SMW_SKY_EDITORS =   [IndividualMusics.SKY_SMW_EDITOR_1,   IndividualMusics.SKY_SMW_EDITOR_2,   IndividualMusics.SKY_SMW_EDITOR_3,   IndividualMusics.SKY_SMW_EDITOR_4,   IndividualMusics.SKY_SMW_EDITOR_5,   IndividualMusics.SKY_SMW_EDITOR_6,   IndividualMusics.SKY_SMW_EDITOR_7,  ] as const
    export const NSMBU_SKY_EDITORS = [IndividualMusics.SKY_NSMBU_EDITOR_1, IndividualMusics.SKY_NSMBU_EDITOR_2, IndividualMusics.SKY_NSMBU_EDITOR_3, IndividualMusics.SKY_NSMBU_EDITOR_4, IndividualMusics.SKY_NSMBU_EDITOR_5, IndividualMusics.SKY_NSMBU_EDITOR_6, IndividualMusics.SKY_NSMBU_EDITOR_7,] as const
    export const SM3DW_SKY_EDITORS = [IndividualMusics.SKY_SM3DW_EDITOR_1, IndividualMusics.SKY_SM3DW_EDITOR_2, IndividualMusics.SKY_SM3DW_EDITOR_3, IndividualMusics.SKY_SM3DW_EDITOR_4, IndividualMusics.SKY_SM3DW_EDITOR_5, IndividualMusics.SKY_SM3DW_EDITOR_6, IndividualMusics.SKY_SM3DW_EDITOR_7,] as const

    export const SMB_FOREST_EDITORS =   [IndividualMusics.FOREST_SMB_EDITOR_1,   IndividualMusics.FOREST_SMB_EDITOR_2,   IndividualMusics.FOREST_SMB_EDITOR_3,   IndividualMusics.FOREST_SMB_EDITOR_4,   IndividualMusics.FOREST_SMB_EDITOR_5,   IndividualMusics.FOREST_SMB_EDITOR_6,   IndividualMusics.FOREST_SMB_EDITOR_7,  ] as const
    export const SMB3_FOREST_EDITORS =  [IndividualMusics.FOREST_SMB3_EDITOR_1,  IndividualMusics.FOREST_SMB3_EDITOR_2,  IndividualMusics.FOREST_SMB3_EDITOR_3,  IndividualMusics.FOREST_SMB3_EDITOR_4,  IndividualMusics.FOREST_SMB3_EDITOR_5,  IndividualMusics.FOREST_SMB3_EDITOR_6,  IndividualMusics.FOREST_SMB3_EDITOR_7, ] as const
    export const SMW_FOREST_EDITORS =   [IndividualMusics.FOREST_SMW_EDITOR_1,   IndividualMusics.FOREST_SMW_EDITOR_2,   IndividualMusics.FOREST_SMW_EDITOR_3,   IndividualMusics.FOREST_SMW_EDITOR_4,   IndividualMusics.FOREST_SMW_EDITOR_5,   IndividualMusics.FOREST_SMW_EDITOR_6,   IndividualMusics.FOREST_SMW_EDITOR_7,  ] as const
    export const NSMBU_FOREST_EDITORS = [IndividualMusics.FOREST_NSMBU_EDITOR_1, IndividualMusics.FOREST_NSMBU_EDITOR_2, IndividualMusics.FOREST_NSMBU_EDITOR_3, IndividualMusics.FOREST_NSMBU_EDITOR_4, IndividualMusics.FOREST_NSMBU_EDITOR_5, IndividualMusics.FOREST_NSMBU_EDITOR_6, IndividualMusics.FOREST_NSMBU_EDITOR_7,] as const
    export const SM3DW_FOREST_EDITORS = [IndividualMusics.FOREST_SM3DW_EDITOR_1, IndividualMusics.FOREST_SM3DW_EDITOR_2, IndividualMusics.FOREST_SM3DW_EDITOR_3, IndividualMusics.FOREST_SM3DW_EDITOR_4, IndividualMusics.FOREST_SM3DW_EDITOR_5, IndividualMusics.FOREST_SM3DW_EDITOR_6, IndividualMusics.FOREST_SM3DW_EDITOR_7,] as const

    export const SMB_GHOST_HOUSE_EDITORS =   [IndividualMusics.GHOST_HOUSE_SMB_EDITOR_1,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_2,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_3,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_4,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_5,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_6,   IndividualMusics.GHOST_HOUSE_SMB_EDITOR_7,  ] as const
    export const SMB3_GHOST_HOUSE_EDITORS =  [IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_1,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_2,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_3,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_4,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_5,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_6,  IndividualMusics.GHOST_HOUSE_SMB3_EDITOR_7, ] as const
    export const SMW_GHOST_HOUSE_EDITORS =   [IndividualMusics.GHOST_HOUSE_SMW_EDITOR_1,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_2,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_3,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_4,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_5,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_6,   IndividualMusics.GHOST_HOUSE_SMW_EDITOR_7,  ] as const
    export const NSMBU_GHOST_HOUSE_EDITORS = [IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_1, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_2, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_3, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_4, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_5, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_6, IndividualMusics.GHOST_HOUSE_NSMBU_EDITOR_7,] as const
    export const SM3DW_GHOST_HOUSE_EDITORS = [IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_1, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_2, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_3, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_4, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_5, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_6, IndividualMusics.GHOST_HOUSE_SM3DW_EDITOR_7,] as const

    export const SMB_AIRSHIP_EDITORS =   [IndividualMusics.AIRSHIP_SMB_EDITOR_1,   IndividualMusics.AIRSHIP_SMB_EDITOR_2,   IndividualMusics.AIRSHIP_SMB_EDITOR_3,   IndividualMusics.AIRSHIP_SMB_EDITOR_4,   IndividualMusics.AIRSHIP_SMB_EDITOR_5,   IndividualMusics.AIRSHIP_SMB_EDITOR_6,   IndividualMusics.AIRSHIP_SMB_EDITOR_7,  ] as const
    export const SMB3_AIRSHIP_EDITORS =  [IndividualMusics.AIRSHIP_SMB3_EDITOR_1,  IndividualMusics.AIRSHIP_SMB3_EDITOR_2,  IndividualMusics.AIRSHIP_SMB3_EDITOR_3,  IndividualMusics.AIRSHIP_SMB3_EDITOR_4,  IndividualMusics.AIRSHIP_SMB3_EDITOR_5,  IndividualMusics.AIRSHIP_SMB3_EDITOR_6,  IndividualMusics.AIRSHIP_SMB3_EDITOR_7, ] as const
    export const SMW_AIRSHIP_EDITORS =   [IndividualMusics.AIRSHIP_SMW_EDITOR_1,   IndividualMusics.AIRSHIP_SMW_EDITOR_2,   IndividualMusics.AIRSHIP_SMW_EDITOR_3,   IndividualMusics.AIRSHIP_SMW_EDITOR_4,   IndividualMusics.AIRSHIP_SMW_EDITOR_5,   IndividualMusics.AIRSHIP_SMW_EDITOR_6,   IndividualMusics.AIRSHIP_SMW_EDITOR_7,  ] as const
    export const NSMBU_AIRSHIP_EDITORS = [IndividualMusics.AIRSHIP_NSMBU_EDITOR_1, IndividualMusics.AIRSHIP_NSMBU_EDITOR_2, IndividualMusics.AIRSHIP_NSMBU_EDITOR_3, IndividualMusics.AIRSHIP_NSMBU_EDITOR_4, IndividualMusics.AIRSHIP_NSMBU_EDITOR_5, IndividualMusics.AIRSHIP_NSMBU_EDITOR_6, IndividualMusics.AIRSHIP_NSMBU_EDITOR_7,] as const
    export const SM3DW_AIRSHIP_EDITORS = [IndividualMusics.AIRSHIP_SM3DW_EDITOR_1, IndividualMusics.AIRSHIP_SM3DW_EDITOR_2, IndividualMusics.AIRSHIP_SM3DW_EDITOR_3, IndividualMusics.AIRSHIP_SM3DW_EDITOR_4, IndividualMusics.AIRSHIP_SM3DW_EDITOR_5, IndividualMusics.AIRSHIP_SM3DW_EDITOR_6, IndividualMusics.AIRSHIP_SM3DW_EDITOR_7,] as const

    export const SMB_CASTLE_EDITORS =   [IndividualMusics.CASTLE_SMB_EDITOR_1,   IndividualMusics.CASTLE_SMB_EDITOR_2,   IndividualMusics.CASTLE_SMB_EDITOR_3,   IndividualMusics.CASTLE_SMB_EDITOR_4,   IndividualMusics.CASTLE_SMB_EDITOR_5,   IndividualMusics.CASTLE_SMB_EDITOR_6,   IndividualMusics.CASTLE_SMB_EDITOR_7,  ] as const
    export const SMB3_CASTLE_EDITORS =  [IndividualMusics.CASTLE_SMB3_EDITOR_1,  IndividualMusics.CASTLE_SMB3_EDITOR_2,  IndividualMusics.CASTLE_SMB3_EDITOR_3,  IndividualMusics.CASTLE_SMB3_EDITOR_4,  IndividualMusics.CASTLE_SMB3_EDITOR_5,  IndividualMusics.CASTLE_SMB3_EDITOR_6,  IndividualMusics.CASTLE_SMB3_EDITOR_7, ] as const
    export const SMW_CASTLE_EDITORS =   [IndividualMusics.CASTLE_SMW_EDITOR_1,   IndividualMusics.CASTLE_SMW_EDITOR_2,   IndividualMusics.CASTLE_SMW_EDITOR_3,   IndividualMusics.CASTLE_SMW_EDITOR_4,   IndividualMusics.CASTLE_SMW_EDITOR_5,   IndividualMusics.CASTLE_SMW_EDITOR_6,   IndividualMusics.CASTLE_SMW_EDITOR_7,  ] as const
    export const NSMBU_CASTLE_EDITORS = [IndividualMusics.CASTLE_NSMBU_EDITOR_1, IndividualMusics.CASTLE_NSMBU_EDITOR_2, IndividualMusics.CASTLE_NSMBU_EDITOR_3, IndividualMusics.CASTLE_NSMBU_EDITOR_4, IndividualMusics.CASTLE_NSMBU_EDITOR_5, IndividualMusics.CASTLE_NSMBU_EDITOR_6, IndividualMusics.CASTLE_NSMBU_EDITOR_7,] as const
    export const SM3DW_CASTLE_EDITORS = [IndividualMusics.CASTLE_SM3DW_EDITOR_1, IndividualMusics.CASTLE_SM3DW_EDITOR_2, IndividualMusics.CASTLE_SM3DW_EDITOR_3, IndividualMusics.CASTLE_SM3DW_EDITOR_4, IndividualMusics.CASTLE_SM3DW_EDITOR_5, IndividualMusics.CASTLE_SM3DW_EDITOR_6, IndividualMusics.CASTLE_SM3DW_EDITOR_7,] as const

    //endregion -------------------- Fields (editor) --------------------
    //region -------------------- Fields (lesson editor) --------------------

    export const GROUND_LESSON_EDITORS =      [IndividualMusics.GROUND_NSMBU_LESSON_EDITOR_1,      IndividualMusics.GROUND_NSMBU_LESSON_EDITOR_2,      IndividualMusics.GROUND_NSMBU_LESSON_EDITOR_3,      IndividualMusics.GROUND_NSMBU_LESSON_EDITOR_4,     ] as const
    export const UNDERWATER_LESSON_EDITORS =  [IndividualMusics.UNDERWATER_NSMBU_LESSON_EDITOR_1,  IndividualMusics.UNDERWATER_NSMBU_LESSON_EDITOR_2,  IndividualMusics.UNDERWATER_NSMBU_LESSON_EDITOR_3,  IndividualMusics.UNDERWATER_NSMBU_LESSON_EDITOR_4, ] as const
    export const FOREST_LESSON_EDITORS =      [IndividualMusics.FOREST_NSMBU_LESSON_EDITOR_1,      IndividualMusics.FOREST_NSMBU_LESSON_EDITOR_2,      IndividualMusics.FOREST_NSMBU_LESSON_EDITOR_3,      IndividualMusics.FOREST_NSMBU_LESSON_EDITOR_4,     ] as const
    export const GHOST_HOUSE_LESSON_EDITORS = [IndividualMusics.GHOST_HOUSE_NSMBU_LESSON_EDITOR_1, IndividualMusics.GHOST_HOUSE_NSMBU_LESSON_EDITOR_2, IndividualMusics.GHOST_HOUSE_NSMBU_LESSON_EDITOR_3, IndividualMusics.GHOST_HOUSE_NSMBU_LESSON_EDITOR_4,] as const
    export const CASTLE_LESSON_EDITORS =      [IndividualMusics.CASTLE_NSMBU_LESSON_EDITOR_1,      IndividualMusics.CASTLE_NSMBU_LESSON_EDITOR_2,      IndividualMusics.CASTLE_NSMBU_LESSON_EDITOR_3,      IndividualMusics.CASTLE_NSMBU_LESSON_EDITOR_4,     ] as const

    //endregion -------------------- Fields (lesson editor) --------------------
    //region -------------------- Fields (time) --------------------

    export const SMB_GROUND_TIMES =   [IndividualMusics.GROUND_SMB,              IndividualMusics.GROUND_SMB_FAST,              IndividualMusics.GROUND_SMB_NIGHT,   IndividualMusics.GROUND_SMB_NIGHT_FAST, IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMB3_GROUND_TIMES =  [IndividualMusics.GROUND_SMB3,             IndividualMusics.GROUND_SMB3_FAST,             IndividualMusics.GROUND_SMB3_NIGHT,  IndividualMusics.GROUND_SMB3_NIGHT_FAST,] as const
    export const SMW_GROUND_TIMES =   [IndividualMusics.GROUND_SMW_STANDALONE,   IndividualMusics.GROUND_SMW_STANDALONE_FAST,   IndividualMusics.GROUND_SMW_NIGHT,   IndividualMusics.GROUND_SMW_NIGHT_FAST,   IndividualMusics.GROUND_SMW_YOSHI,   IndividualMusics.GROUND_SMW_YOSHI_FAST, ] as const
    export const NSMBU_GROUND_TIMES = [IndividualMusics.GROUND_NSMBU_STANDALONE, IndividualMusics.GROUND_NSMBU_STANDALONE_FAST, IndividualMusics.GROUND_NSMBU_NIGHT, IndividualMusics.GROUND_NSMBU_NIGHT_FAST, IndividualMusics.GROUND_NSMBU_YOSHI, IndividualMusics.GROUND_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_GROUND_TIMES = [IndividualMusics.GROUND_SM3DW,            IndividualMusics.GROUND_SM3DW_FAST,] as const

    export const SMB_UNDERGROUND_TIMES =   [IndividualMusics.UNDERGROUND_SMB,              IndividualMusics.UNDERGROUND_SMB_FAST,              IndividualMusics.UNDERGROUND_SMB_NIGHT,   IndividualMusics.UNDERGROUND_SMB_NIGHT_FAST, IndividualMusics.UNDERGROUND_LINK, IndividualMusics.UNDERGROUND_LINK_FAST, IndividualMusics.UNDERGROUND_SMB2, IndividualMusics.UNDERGROUND_SMB2_FAST,] as const
    export const SMB3_UNDERGROUND_TIMES =  [IndividualMusics.UNDERGROUND_SMB3,             IndividualMusics.UNDERGROUND_SMB3_FAST,             IndividualMusics.UNDERGROUND_SMB3_NIGHT,  IndividualMusics.UNDERGROUND_SMB3_NIGHT_FAST,] as const
    export const SMW_UNDERGROUND_TIMES =   [IndividualMusics.UNDERGROUND_SMW_STANDALONE,   IndividualMusics.UNDERGROUND_SMW_STANDALONE_FAST,   IndividualMusics.UNDERGROUND_SMW_NIGHT,   IndividualMusics.UNDERGROUND_SMW_NIGHT_FAST,   IndividualMusics.UNDERGROUND_SMW_YOSHI,   IndividualMusics.UNDERGROUND_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_UNDERGROUND_TIMES = [IndividualMusics.UNDERGROUND_NSMBU_STANDALONE, IndividualMusics.UNDERGROUND_NSMBU_STANDALONE_FAST, IndividualMusics.UNDERGROUND_NSMBU_NIGHT, IndividualMusics.UNDERGROUND_NSMBU_NIGHT_FAST, IndividualMusics.UNDERGROUND_NSMBU_YOSHI, IndividualMusics.UNDERGROUND_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_UNDERGROUND_TIMES = [IndividualMusics.UNDERGROUND_SM3DW,            IndividualMusics.UNDERGROUND_SM3DW_FAST,] as const

    export const SMB_UNDERWATER_TIMES =   [IndividualMusics.UNDERWATER_SMB,              IndividualMusics.UNDERWATER_SMB_FAST,              IndividualMusics.UNDERWATER_SMB_NIGHT,   IndividualMusics.UNDERWATER_SMB_NIGHT_FAST, IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMB3_UNDERWATER_TIMES =  [IndividualMusics.UNDERWATER_SMB3,             IndividualMusics.UNDERWATER_SMB3_FAST,             IndividualMusics.UNDERWATER_SMB3_NIGHT,  IndividualMusics.UNDERWATER_SMB3_NIGHT_FAST,] as const
    export const SMW_UNDERWATER_TIMES =   [IndividualMusics.UNDERWATER_SMW_STANDALONE,   IndividualMusics.UNDERWATER_SMW_STANDALONE_FAST,   IndividualMusics.UNDERWATER_SMW_NIGHT,   IndividualMusics.UNDERWATER_SMW_NIGHT_FAST,   IndividualMusics.UNDERWATER_SMW_YOSHI,   IndividualMusics.UNDERWATER_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_UNDERWATER_TIMES = [IndividualMusics.UNDERWATER_NSMBU_STANDALONE, IndividualMusics.UNDERWATER_NSMBU_STANDALONE_FAST, IndividualMusics.UNDERWATER_NSMBU_NIGHT, IndividualMusics.UNDERWATER_NSMBU_NIGHT_FAST, IndividualMusics.UNDERWATER_NSMBU_YOSHI, IndividualMusics.UNDERWATER_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_UNDERWATER_TIMES = [IndividualMusics.UNDERWATER_SM3DW,            IndividualMusics.UNDERWATER_SM3DW_FAST,] as const

    export const SMB_DESERT_TIMES =   [IndividualMusics.DESERT_SMB,              IndividualMusics.DESERT_SMB_FAST,              IndividualMusics.DESERT_SMB_NIGHT,   IndividualMusics.DESERT_SMB_NIGHT_FAST,   IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMW_DESERT_TIMES =   [IndividualMusics.DESERT_SMW_STANDALONE,   IndividualMusics.DESERT_SMW_STANDALONE_FAST,   IndividualMusics.DESERT_SMW_NIGHT,   IndividualMusics.DESERT_SMW_NIGHT_FAST,   IndividualMusics.DESERT_SMW_YOSHI,   IndividualMusics.DESERT_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_DESERT_TIMES = [IndividualMusics.DESERT_NSMBU_STANDALONE, IndividualMusics.DESERT_NSMBU_STANDALONE_FAST, IndividualMusics.DESERT_NSMBU_NIGHT, IndividualMusics.DESERT_NSMBU_NIGHT_FAST, IndividualMusics.DESERT_NSMBU_YOSHI, IndividualMusics.DESERT_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_DESERT_TIMES = [IndividualMusics.DESERT_SM3DW,            IndividualMusics.DESERT_SM3DW_FAST,] as const

    export const SMB_SNOW_TIMES =   [IndividualMusics.SNOW_SMB,              IndividualMusics.SNOW_SMB_FAST,              IndividualMusics.SNOW_SMB_NIGHT,   IndividualMusics.SNOW_SMB_NIGHT_FAST, IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMB3_SNOW_TIMES =  [IndividualMusics.SNOW_SMB3,             IndividualMusics.SNOW_SMB3_FAST,             IndividualMusics.SNOW_SMB3_NIGHT,  IndividualMusics.SNOW_SMB3_NIGHT_FAST,] as const
    export const SMW_SNOW_TIMES =   [IndividualMusics.SNOW_SMW_STANDALONE,   IndividualMusics.SNOW_SMW_STANDALONE_FAST,   IndividualMusics.SNOW_SMW_NIGHT,   IndividualMusics.SNOW_SMW_NIGHT_FAST,   IndividualMusics.SNOW_SMW_YOSHI,   IndividualMusics.SNOW_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_SNOW_TIMES = [IndividualMusics.SNOW_NSMBU_STANDALONE, IndividualMusics.SNOW_NSMBU_STANDALONE_FAST, IndividualMusics.SNOW_NSMBU_NIGHT, IndividualMusics.SNOW_NSMBU_NIGHT_FAST, IndividualMusics.SNOW_NSMBU_YOSHI, IndividualMusics.SNOW_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_SNOW_TIMES = [IndividualMusics.SNOW_SM3DW,            IndividualMusics.SNOW_SM3DW_FAST,] as const

    export const SMB_SKY_TIMES =   [IndividualMusics.SKY_SMB,              IndividualMusics.SKY_SMB_FAST,              IndividualMusics.SKY_SMB_NIGHT,   IndividualMusics.SKY_SMB_NIGHT_FAST, IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMB3_SKY_TIMES =  [IndividualMusics.SKY_SMB3,             IndividualMusics.SKY_SMB3_FAST,             IndividualMusics.SKY_SMB3_NIGHT,  IndividualMusics.SKY_SMB3_NIGHT_FAST,] as const
    export const SMW_SKY_TIMES =   [IndividualMusics.SKY_SMW_STANDALONE,   IndividualMusics.SKY_SMW_STANDALONE_FAST,   IndividualMusics.SKY_SMW_NIGHT,   IndividualMusics.SKY_SMW_NIGHT_FAST,   IndividualMusics.SKY_SMW_YOSHI,   IndividualMusics.SKY_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_SKY_TIMES = [IndividualMusics.SKY_NSMBU_STANDALONE, IndividualMusics.SKY_NSMBU_STANDALONE_FAST, IndividualMusics.SKY_NSMBU_NIGHT, IndividualMusics.SKY_NSMBU_NIGHT_FAST, IndividualMusics.SKY_NSMBU_YOSHI, IndividualMusics.SKY_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_SKY_TIMES = [IndividualMusics.SKY_SM3DW,            IndividualMusics.SKY_SM3DW_FAST,] as const

    export const SMB_FOREST_TIMES =   [IndividualMusics.FOREST_SMB,              IndividualMusics.FOREST_SMB_FAST,              IndividualMusics.FOREST_SMB_NIGHT,        IndividualMusics.FOREST_SMB_NIGHT_FAST, IndividualMusics.GROUND_LINK, IndividualMusics.GROUND_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMW_FOREST_TIMES =   [IndividualMusics.FOREST_SMW_STANDALONE,   IndividualMusics.FOREST_SMW_STANDALONE_FAST,   IndividualMusics.FOREST_SMW_NIGHT,        IndividualMusics.FOREST_SMW_NIGHT_FAST,   IndividualMusics.FOREST_SMW_YOSHI,   IndividualMusics.FOREST_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_FOREST_TIMES = [IndividualMusics.FOREST_NSMBU_STANDALONE, IndividualMusics.FOREST_NSMBU_STANDALONE_FAST, IndividualMusics.FOREST_NSMBU_NIGHT,      IndividualMusics.FOREST_NSMBU_NIGHT_FAST, IndividualMusics.FOREST_NSMBU_YOSHI, IndividualMusics.FOREST_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_FOREST_TIMES = [IndividualMusics.FOREST_SM3DW,            IndividualMusics.FOREST_SM3DW_FAST,            IndividualMusics.FOREST_SM3DW_UNDERWATER, IndividualMusics.FOREST_SM3DW_UNDERWATER_FAST,] as const

    export const SMB_GHOST_HOUSE_TIMES =   [IndividualMusics.GHOST_HOUSE_SMB, IndividualMusics.GHOST_HOUSE_SMB_FAST, IndividualMusics.GHOST_HOUSE_SMB_NIGHT, IndividualMusics.GHOST_HOUSE_SMB_NIGHT_FAST, IndividualMusics.UNDERGROUND_LINK, IndividualMusics.UNDERGROUND_LINK_FAST, IndividualMusics.UNDERGROUND_SMB2, IndividualMusics.UNDERGROUND_SMB2_FAST,] as const
    export const SMB3_GHOST_HOUSE_TIMES =  [IndividualMusics.GHOST_HOUSE_SMB3, IndividualMusics.GHOST_HOUSE_SMB3_FAST, IndividualMusics.GHOST_HOUSE_SMB3_NIGHT, IndividualMusics.GHOST_HOUSE_SMB3_NIGHT_FAST,] as const
    export const SMW_GHOST_HOUSE_TIMES =   [IndividualMusics.GHOST_HOUSE_SMW_STANDALONE, IndividualMusics.GHOST_HOUSE_SMW_STANDALONE_FAST, IndividualMusics.GHOST_HOUSE_SMW_NIGHT, IndividualMusics.GHOST_HOUSE_SMW_NIGHT_FAST, IndividualMusics.GHOST_HOUSE_SMW_YOSHI, IndividualMusics.GHOST_HOUSE_SMW_YOSHI_FAST,] as const
    export const NSMBU_GHOST_HOUSE_TIMES = [IndividualMusics.GHOST_HOUSE_NSMBU_STANDALONE, IndividualMusics.GHOST_HOUSE_NSMBU_STANDALONE_FAST, IndividualMusics.GHOST_HOUSE_NSMBU_NIGHT, IndividualMusics.GHOST_HOUSE_NSMBU_NIGHT_FAST, IndividualMusics.GHOST_HOUSE_NSMBU_YOSHI, IndividualMusics.GHOST_HOUSE_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_GHOST_HOUSE_TIMES = [IndividualMusics.GHOST_HOUSE_SM3DW, IndividualMusics.GHOST_HOUSE_SM3DW_FAST,] as const

    export const SMB_AIRSHIP_TIMES =   [IndividualMusics.AIRSHIP_SMB,              IndividualMusics.AIRSHIP_SMB_FAST,              IndividualMusics.AIRSHIP_SMB_NIGHT,   IndividualMusics.AIRSHIP_SMB_NIGHT_FAST, IndividualMusics.CASTLE_LINK, IndividualMusics.CASTLE_LINK_FAST, IndividualMusics.GROUND_SMB2, IndividualMusics.GROUND_SMB2_FAST,] as const
    export const SMB3_AIRSHIP_TIMES =  [IndividualMusics.AIRSHIP_SMB3,             IndividualMusics.AIRSHIP_SMB3_FAST,             IndividualMusics.AIRSHIP_SMB3_NIGHT,  IndividualMusics.AIRSHIP_SMB3_NIGHT_FAST,] as const
    export const SMW_AIRSHIP_TIMES =   [IndividualMusics.AIRSHIP_SMW_STANDALONE,   IndividualMusics.AIRSHIP_SMW_STANDALONE_FAST,   IndividualMusics.AIRSHIP_SMW_NIGHT,   IndividualMusics.AIRSHIP_SMW_NIGHT_FAST,   IndividualMusics.AIRSHIP_SMW_YOSHI,   IndividualMusics.AIRSHIP_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_AIRSHIP_TIMES = [IndividualMusics.AIRSHIP_NSMBU_STANDALONE, IndividualMusics.AIRSHIP_NSMBU_STANDALONE_FAST, IndividualMusics.AIRSHIP_NSMBU_NIGHT, IndividualMusics.AIRSHIP_NSMBU_NIGHT_FAST, IndividualMusics.AIRSHIP_NSMBU_YOSHI, IndividualMusics.AIRSHIP_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_AIRSHIP_TIMES = [IndividualMusics.AIRSHIP_SM3DW,            IndividualMusics.AIRSHIP_SM3DW_FAST,] as const

    export const SMB_CASTLE_TIMES =   [IndividualMusics.CASTLE_SMB,              IndividualMusics.CASTLE_SMB_FAST,              IndividualMusics.CASTLE_SMB_NIGHT,   IndividualMusics.CASTLE_SMB_NIGHT_FAST, IndividualMusics.CASTLE_LINK, IndividualMusics.CASTLE_LINK_FAST, IndividualMusics.UNDERGROUND_SMB2, IndividualMusics.UNDERGROUND_SMB2_FAST,] as const
    export const SMB3_CASTLE_TIMES =  [IndividualMusics.CASTLE_SMB3,             IndividualMusics.CASTLE_SMB3_FAST,             IndividualMusics.CASTLE_SMB3_NIGHT,  IndividualMusics.CASTLE_SMB3_NIGHT_FAST,] as const
    export const SMW_CASTLE_TIMES =   [IndividualMusics.CASTLE_SMW_STANDALONE,   IndividualMusics.CASTLE_SMW_STANDALONE_FAST,   IndividualMusics.CASTLE_SMW_NIGHT,   IndividualMusics.CASTLE_SMW_NIGHT_FAST,   IndividualMusics.CASTLE_SMW_YOSHI,   IndividualMusics.CASTLE_SMW_YOSHI_FAST,  ] as const
    export const NSMBU_CASTLE_TIMES = [IndividualMusics.CASTLE_NSMBU_STANDALONE, IndividualMusics.CASTLE_NSMBU_STANDALONE_FAST, IndividualMusics.CASTLE_NSMBU_NIGHT, IndividualMusics.CASTLE_NSMBU_NIGHT_FAST, IndividualMusics.CASTLE_NSMBU_YOSHI, IndividualMusics.CASTLE_NSMBU_YOSHI_FAST,] as const
    export const SM3DW_CASTLE_TIMES = [IndividualMusics.CASTLE_SM3DW,            IndividualMusics.CASTLE_SM3DW_FAST,] as const

    //endregion -------------------- Fields (time) --------------------
    //region -------------------- Fields (sound effect) --------------------

    export const PEACEFUL =      [IndividualMusics.PEACEFUL_LINK, IndividualMusics.PEACEFUL_SMB2,] as const
    export const LINK_PEACEFUL = [IndividualMusics.PEACEFUL_LINK,] as const
    export const SMB2_PEACEFUL = [IndividualMusics.PEACEFUL_SMB2,] as const


    export const SMB_BONUSES =   [IndividualMusics.BONUS_SMB,   IndividualMusics.BONUS_SMB_FAST, IndividualMusics.BONUS_LINK, IndividualMusics.BONUS_LINK_FAST, IndividualMusics.BONUS_SMB2, IndividualMusics.BONUS_SMB2_FAST,] as const
    export const SMB3_BONUSES =  [IndividualMusics.BONUS_SMB3,  IndividualMusics.BONUS_SMB3_FAST, ] as const
    export const SMW_BONUSES =   [IndividualMusics.BONUS_SMW,   IndividualMusics.BONUS_SMW_FAST,  ] as const
    export const NSMBU_BONUSES = [IndividualMusics.BONUS_NSMBU, IndividualMusics.BONUS_NSMBU_FAST,] as const
    export const SM3DW_BONUSES = [IndividualMusics.BONUS_SM3DW, IndividualMusics.BONUS_SM3DW_FAST,] as const

    export const LINK_BONUSES = [IndividualMusics.BONUS_LINK, IndividualMusics.BONUS_LINK_FAST,] as const
    export const SMB2_BONUSES = [IndividualMusics.BONUS_SMB2, IndividualMusics.BONUS_SMB2_FAST,] as const


    export const SMB_BOSSES =   [IndividualMusics.BOSS_SMB,   IndividualMusics.BOSS_SMB_FAST,   IndividualMusics.BOSS_LINK, IndividualMusics.BOSS_LINK_FAST, IndividualMusics.BOSS_SMB2, IndividualMusics.BOSS_SMB2_FAST,] as const
    export const SMB3_BOSSES =  [IndividualMusics.BOSS_SMB3,  IndividualMusics.BOSS_SMB3_FAST, ] as const
    export const SMW_BOSSES =   [IndividualMusics.BOSS_SMW,   IndividualMusics.BOSS_SMW_FAST,  ] as const
    export const NSMBU_BOSSES = [IndividualMusics.BOSS_NSMBU, IndividualMusics.BOSS_NSMBU_FAST,] as const
    export const SM3DW_BOSSES = [IndividualMusics.BOSS_SM3DW, IndividualMusics.BOSS_SM3DW_FAST,] as const

    export const LINK_BOSSES = [IndividualMusics.BOSS_LINK, IndividualMusics.BOSS_LINK_FAST,] as const
    export const SMB2_BOSSES = [IndividualMusics.BOSS_SMB2, IndividualMusics.BOSS_SMB2_FAST,] as const


    export const SMB_FINAL_BOSSES =   [IndividualMusics.FINAL_BOSS_SMB3,  IndividualMusics.FINAL_BOSS_SMB3_FAST, IndividualMusics.FINAL_BOSS_LINK, IndividualMusics.FINAL_BOSS_LINK_FAST, IndividualMusics.FINAL_BOSS_SMB2, IndividualMusics.FINAL_BOSS_SMB2_FAST,] as const
    export const SMB3_FINAL_BOSSES =  [IndividualMusics.FINAL_BOSS_SMB3,  IndividualMusics.FINAL_BOSS_SMB3_FAST, ] as const
    export const SMW_FINAL_BOSSES =   [IndividualMusics.FINAL_BOSS_SMW,   IndividualMusics.FINAL_BOSS_SMW_FAST,  ] as const
    export const NSMBU_FINAL_BOSSES = [IndividualMusics.FINAL_BOSS_NSMBU, IndividualMusics.FINAL_BOSS_NSMBU_FAST,] as const
    export const SM3DW_FINAL_BOSSES = [IndividualMusics.FINAL_BOSS_SM3DW, IndividualMusics.FINAL_BOSS_SM3DW_FAST,] as const

    export const LINK_FINAL_BOSSES = [IndividualMusics.FINAL_BOSS_LINK, IndividualMusics.FINAL_BOSS_LINK_FAST,] as const
    export const SMB2_FINAL_BOSSES = [IndividualMusics.FINAL_BOSS_SMB2, IndividualMusics.FINAL_BOSS_SMB2_FAST,] as const


    export const SMB3_BONUSES_BOSSES_AND_FINAL_BOSSES =  [IndividualMusics.BONUS_SMB3,  IndividualMusics.BONUS_SMB3_FAST,                                                                               IndividualMusics.BOSS_SMB3,  IndividualMusics.BOSS_SMB3_FAST,  IndividualMusics.FINAL_BOSS_SMB3,  IndividualMusics.FINAL_BOSS_SMB3_FAST, ] as const
    export const SMW_BONUSES_BOSSES_AND_FINAL_BOSSES =   [IndividualMusics.BONUS_SMW,   IndividualMusics.BONUS_SMW_FAST,                                                                                IndividualMusics.BOSS_SMW,   IndividualMusics.BOSS_SMW_FAST,   IndividualMusics.FINAL_BOSS_SMW,   IndividualMusics.FINAL_BOSS_SMW_FAST,  ] as const
    export const NSMBU_BONUSES_BOSSES_AND_FINAL_BOSSES = [IndividualMusics.BONUS_NSMBU, IndividualMusics.BONUS_NSMBU_FAST, IndividualMusics.BONUS_NSMBU_YOSHI, IndividualMusics.BONUS_NSMBU_YOSHI_FAST, IndividualMusics.BOSS_NSMBU, IndividualMusics.BOSS_NSMBU_FAST, IndividualMusics.FINAL_BOSS_NSMBU, IndividualMusics.FINAL_BOSS_NSMBU_FAST,] as const
    export const SM3DW_BONUSES_BOSSES_AND_FINAL_BOSSES = [IndividualMusics.BONUS_SM3DW, IndividualMusics.BONUS_SM3DW_FAST,                                                                              IndividualMusics.BOSS_SM3DW, IndividualMusics.BOSS_SM3DW_FAST, IndividualMusics.FINAL_BOSS_SM3DW, IndividualMusics.FINAL_BOSS_SM3DW_FAST,] as const

    //endregion -------------------- Fields (sound effect) --------------------

}

/**@deprecated This type is temporary to allow null value */type PossibleSoundFile = NullOr<RepeatableSoundFile>
