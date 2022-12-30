enum Enum {

    FINISH_ALL_JOBS,
    FINISH_ALL_JOBS_UNDODOG,
    FINISH_ALL_JOBS_YAMAMURA,
    FINISH_ALL_JOBS_PARTRICK,
    FINISH_ALL_JOBS_SOUNDFROG,
    FINISH_ALL_JOBS_MR_ERASER,
    FINISH_1ST_JOB_PEACH, FINISH_2ND_JOB_PEACH, FINISH_3RD_JOB_PEACH,
    HIT_MIDDLE_QUESTION_BLOCK_NEAR_PURPLE_TOAD,
    FINISH_REBUILDING_THE_CASTLE,


    RECEIVE_A_LIKE,
    RECEIVE_A_COMMENT,
    RECEIVE_A_LOT_OF_FEEDBACK_1, RECEIVE_A_LOT_OF_FEEDBACK_2,
    RECEIVE_X_PLAY,

    LIKE_A_COURSE,
    POST_A_COMMENT,
    UPLOAD_A_COURSE,

    _1_OF_1ST_CLEAR_TO_FINISH_A_COURSE, X_OF_1ST_CLEAR_TO_FINISH_A_COURSE,

    CLEAR_1_COURSE, CLEAR_X_COURSE,

    PLAY_X_COURSE,

    SET_1_WORLD_RECORD,
    HOLD_X_WORLD_RECORD,


    WIN_1_MATCH_IN_MULTIPLAYER_VS, WIN_X_MATCH_IN_MULTIPLAYER_VS,
    WIN_CONSECUTIVE_MATCH_IN_MULTIPLAYER_VS,

    RANK_C_IN_MULTIPLAYER_VS,
    RANK_B_IN_MULTIPLAYER_VS,
    RANK_A_IN_MULTIPLAYER_VS,
    RANK_S_IN_MULTIPLAYER_VS,
    RANK_S_PLUS_IN_MULTIPLAYER_VS,

    CLEAR_1_COURSE_IN_MULTIPLAYER_COOP, CLEAR_X_COURSE_IN_MULTIPLAYER_COOP,

    X_MAKER_POINT_EARN,

    HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EASY,
    HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_NORMAL,
    HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EXPERT,
    HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_SUPER_EXPERT,

    GOLD_MEDAL_ON_THE_LEADERBOARD, SILVER_MEDAL_ON_THE_LEADERBOARD, BRONZE_MEDAL_ON_THE_LEADERBOARD,
    FIRST_PLACE_ON_THE_LEADERBOARD, SECOND_PLACE_ON_THE_LEADERBOARD, THIRD_PLACE_ON_THE_LEADERBOARD,

    COLLECT_1_STAMP_IN_THE_NINJI_SPEEDRUNS, COLLECT_X_STAMP_IN_THE_NINJI_SPEEDRUNS,

    UPLOAD_A_SUPER_WORLD,
    CLEAR_1_SUPER_WORLD, CLEAR_X_SUPER_WORLD,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Amount --------------------

export type PossibleAmount =
    | PossibleAmount_ReceiveXPlay | PossibleAmount_X1stClear
    | PossibleAmount_ClearXCourse | PossibleAmount_PlayXCourse
    | PossibleAmount_HoldXWorldRecord | PossibleAmount_WinXMatchInVS
    | PossibleAmount_ClearCourseInCoop | PossibleAmount_EarnMakerPoint
    | PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal | PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert
    | PossibleAmount_XStampInNinjiSpeedrun | PossibleAmount_ClearXSuperWorld

export type PossibleAmount_ReceiveXPlay = | 100 | 500 | 1000 | 2000 | 5000
export type PossibleAmount_X1stClear = | 1 | 10 | 100
export type PossibleAmount_ClearXCourse = | 1 | 10 | 100 | 500 | 1000 | 3000 | 5000 | 10000
export type PossibleAmount_PlayXCourse = | 10 | 100 | 500 | 1000 | 3000
export type PossibleAmount_HoldXWorldRecord = | 10 | 100 | 500
export type PossibleAmount_WinXMatchInVS = | 1 | 2 | 5 | 10
export type PossibleAmount_ClearCourseInCoop = | 1 | 10 | 100
export type PossibleAmount_EarnMakerPoint = | 2000 | 5000 | 7000
export type PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal = | PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert | 300 | 500 | 1000
export type PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert = | 10 | 100
export type PossibleAmount_XStampInNinjiSpeedrun = | 1 | 4 | 7 | 10 | 11 | 14 | 17 | 20
export type PossibleAmount_ClearXSuperWorld = | 1 | 2 | 3 | 4 | 5 | 10

//endregion -------------------- Amount --------------------
//region -------------------- English name --------------------

//region -------------------- English name (with amount) --------------------

export type PossibleEnglishNameWithEveryAmount =
    | PossibleEnglishName_ReceivePlay<PossibleAmount_ReceiveXPlay> | PossibleEnglishName_1stClear<PossibleAmount_X1stClear>
    | PossibleEnglishName_ClearCourse<PossibleAmount_ClearXCourse> | PossibleEnglishName_PlayCourse<PossibleAmount_PlayXCourse>
    | PossibleEnglishName_HoldWorldRecord<PossibleAmount_HoldXWorldRecord> | PossibleEnglishName_WinMatchInVS<PossibleAmount_WinXMatchInVS>
    | PossibleEnglishName_ClearCourseInCoop<PossibleAmount_ClearCourseInCoop> | PossibleEnglishName_EarnMakerPoint<PossibleAmount_EarnMakerPoint>
    | PossibleEnglishName_HighScoreInEndlessMarioEasy<PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal> | PossibleEnglishName_HighScoreInEndlessMarioNormal<PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal>
    | PossibleEnglishName_HighScoreInEndlessMarioExpert<PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert> | PossibleEnglishName_HighScoreInEndlessMarioSuperExpert<PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert>
    | PossibleEnglishName_StampInNinjiSpeedrun<PossibleAmount_XStampInNinjiSpeedrun> | PossibleEnglishName_ClearSuperWorld<PossibleAmount_ClearXSuperWorld>
export type PossibleEnglishNameWithAmount<T extends | 1 | '#' = | 1 | '#'> =
    | PossibleEnglishName_ReceivePlay<Exclude<T, 1>> | PossibleEnglishName_1stClear<T>
    | PossibleEnglishName_ClearCourse<T> | PossibleEnglishName_PlayCourse
    | PossibleEnglishName_HoldWorldRecord<Exclude<T, 1>> | PossibleEnglishName_WinMatchInVS<T>
    | PossibleEnglishName_ClearCourseInCoop<T> | PossibleEnglishName_EarnMakerPoint<Exclude<T, 1>>
    | PossibleEnglishName_HighScoreInEndlessMarioEasy<Exclude<T, 1>> | PossibleEnglishName_HighScoreInEndlessMarioNormal<Exclude<T, 1>>
    | PossibleEnglishName_HighScoreInEndlessMarioExpert<Exclude<T, 1>> | PossibleEnglishName_HighScoreInEndlessMarioSuperExpert<Exclude<T, 1>>
    | PossibleEnglishName_StampInNinjiSpeedrun<T> | PossibleEnglishName_ClearSuperWorld<T>

export type PossibleEnglishName_ReceivePlay<T extends | PossibleAmount_ReceiveXPlay | '#' = '#', > = `Receive ${T} play`
export type PossibleEnglishName_1stClear<T extends | PossibleAmount_X1stClear | '#' = | '#' | 1, > = `${T} of 1st clear to finish a course`
export type PossibleEnglishName_ClearCourse<T extends | PossibleAmount_ClearXCourse | '#' = | '#' | 1, > = `Clear ${T} course`
export type PossibleEnglishName_PlayCourse<T extends | PossibleAmount_PlayXCourse | '#' = '#', > = `Play ${T} course`
export type PossibleEnglishName_HoldWorldRecord<T extends | PossibleAmount_HoldXWorldRecord | '#' = '#', > = `Hold ${T} world record`
export type PossibleEnglishName_WinMatchInVS<T extends | PossibleAmount_WinXMatchInVS | '#' = | '#' | 1, > = `Win ${T} match in Multiplayer VS`
export type PossibleEnglishName_ClearCourseInCoop<T extends | PossibleAmount_ClearCourseInCoop | '#' = | '#' | 1, > = `Clear ${T} course in Multiplayer Co-op`
export type PossibleEnglishName_EarnMakerPoint<T extends | PossibleAmount_EarnMakerPoint | '#' = '#', > = `Earn ${T} Maker Point`
export type PossibleEnglishName_HighScoreInEndlessMarioEasy<T extends | PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal | '#' = '#', > = `High score of ${T} in Endless Challenge (easy)`
export type PossibleEnglishName_HighScoreInEndlessMarioNormal<T extends | PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal | '#' = '#', > = `High score of ${T} in Endless Challenge (normal)`
export type PossibleEnglishName_HighScoreInEndlessMarioExpert<T extends | PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert | '#' = '#', > = `High score of ${T} in Endless Challenge (expert)`
export type PossibleEnglishName_HighScoreInEndlessMarioSuperExpert<T extends | PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert | '#' = '#', > = `High score of ${T} in Endless Challenge (super expert)`
export type PossibleEnglishName_StampInNinjiSpeedrun<T extends | PossibleAmount_XStampInNinjiSpeedrun | '#' = | '#' | 1, > = `Collect ${T} stamp in the Ninji Speedruns`
export type PossibleEnglishName_ClearSuperWorld<T extends | PossibleAmount_ClearXSuperWorld | '#' = | '#' | 1, > = `Clear ${T} Super World`

//endregion -------------------- English name (with amount) --------------------

export type PossibleEnglishNameWithOnlyAmount =
    | Exclude<PossibleEnglishName, PossibleEnglishNameWithAmount> | PossibleEnglishNameWithEveryAmount
export type PossibleEnglishName =
    | `Finish all jobs${| '' | ` (${| 'Undodog' | 'Yamamura' | 'Partrick' | 'Soundfrog' | 'Mr. Eraser'})`}`
    | 'Hit Middle ? Block near Purple Toad'
    | 'Finish rebuilding the castle'
    | `Finish ${| '1st' | '2nd' | '3rd'} job (Peach)`

    | `Receive ${| `a ${| 'like' | 'comment'}` | 'feedback' | `a lot of feedback - ${| 1 | 2}`}`
    | PossibleEnglishName_ReceivePlay
    | 'Post a comment'
    | `${| 'Like' | 'Upload'} a course`
    | PossibleEnglishName_1stClear
    | PossibleEnglishName_ClearCourse
    | PossibleEnglishName_PlayCourse
    | 'Set 1 world record' | PossibleEnglishName_HoldWorldRecord


    | PossibleEnglishName_WinMatchInVS | 'Win consecutive match in Multiplayer VS'

    | `Rank ${| 'C' | 'B' | 'A' | `S${| '' | '⁺'}`} in Multiplayer VS`

    | PossibleEnglishName_ClearCourseInCoop

    | PossibleEnglishName_EarnMakerPoint

    | PossibleEnglishName_HighScoreInEndlessMarioEasy | PossibleEnglishName_HighScoreInEndlessMarioNormal
    | PossibleEnglishName_HighScoreInEndlessMarioExpert | PossibleEnglishName_HighScoreInEndlessMarioSuperExpert

    | `${| `${'Gold' | 'Silver' | 'Bronze'} medal`
         | `${| '1st' | '2nd' | '3rd'} place`} on the leaderboard`


    | PossibleEnglishName_StampInNinjiSpeedrun
    | 'Upload a Super World' | PossibleEnglishName_ClearSuperWorld

//endregion -------------------- English name --------------------
//region -------------------- Translation key --------------------

type TranslationPartThatCanContainMultiple<T extends string, > = | `${T} - 1` | T
export type PossibleTranslationKey =
    | `finish ${| `all ${| 'job' | '3 job (character)'}` | 'X job (Peach)' | 'rebuilding castle'}` | 'hit ? Block near Purple Toad'
    | `course.${| `receive ${| 'like' | 'comment' | 'feedback (a lot)' | 'play'}`
                | 'like' | 'comment' | 'upload'
                | TranslationPartThatCanContainMultiple<'1st to clear'>
                | TranslationPartThatCanContainMultiple<'clear'>
                | 'play'}`
    | `${| 'set' | 'hold'} world record`
    | TranslationPartThatCanContainMultiple<'win match'> | 'win consecutive match'
    | `${TranslationPartThatCanContainMultiple<'clear course multiplayer coop'>}`
    | 'maker point'
    | 'high score'
    | 'rank'
    | 'medal' | 'place'
    | 'stamp'
    | `super world.${| 'upload' | TranslationPartThatCanContainMultiple<'clear'>}`

export type PossibleAdditionalTranslationKey = `position.${| 'place' | 'job'}.${1 | 2 | 3}`

//endregion -------------------- Translation key --------------------
