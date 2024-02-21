import './OfficialNotifications.scss'

import type {Lazy} from '@joookiwi/lazy'
import {Enum}      from '@joookiwi/enumerable'
import {lazy}      from '@joookiwi/lazy'
import {Fragment}  from 'react'

import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                   from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleAdditionalTranslationKey, PossibleAmount, PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal, PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert, PossibleEnglishName, PossibleEnglishNameWithAmount, PossibleEnglishNameWithEveryAmount, PossibleTranslationKey} from 'core/officialNotification/OfficialNotifications.types'
import type {ClassWithTranslationKey}                                                                                                                                                                                                                                                                                from 'lang/ClassWithTranslationKey'
import type {TranslationReplaceKeysMap}                                                                                                                                                                                                                                                                              from 'lang/components/TranslationProperty'
import type {CompanionEnumByNameSingleton}                                                                                                                                                                                                                                                                           from 'util/enumerable/Singleton.types'

import Image                                                                     from 'app/tools/images/Image'
import TextComponent                                                             from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText}                                          from 'app/tools/text/UnfinishedText'
import {gameContentTranslation}                                                  from 'lang/components/translationMethods'
import {FIRST_PLACE_IMAGE_FILE, SECOND_PLACE_IMAGE_FILE, THIRD_PLACE_IMAGE_FILE} from 'core/officialNotification/file/imageFiles'
import {BRONZE_MEDAL_IMAGE_FILE, GOLD_MEDAL_IMAGE_FILE, SILVER_MEDAL_IMAGE_FILE} from 'core/officialNotification/file/imageFiles'
import {LIKE_IMAGE_FILE, STAMP_IMAGE_FILE}                                       from 'core/officialNotification/file/imageFiles'
import {OtherWordInTheGames}                                                     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {EMPTY_ARRAY, EMPTY_STRING}                                               from 'util/emptyVariables'
import {StringContainer}                                                         from 'util/StringContainer'
import {CompanionEnumByName}                                                     from 'util/enumerable/companion/CompanionEnumByName'

//region -------------------- Import from deconstruction --------------------

const {
    ENDLESS_CHALLENGE, EASY, NORMAL, EXPERT, SUPER_EXPERT,
    STORY_MODE, MULTIPLAYER_VERSUS, MULTIPLAYER_COOP, LEADERBOARD, NINJI_SPEEDRUNS, SUPER_WORLD,
    COURSE, WORLD_RECORD,
} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------
//region -------------------- Constructor constants --------------------

const translationKey_finishAllCharacterJob: PossibleTranslationKey = 'finish all 3 job (character)'
const translationKey_finishSelectedPeachJob: PossibleTranslationKey = 'finish X job (Peach)'
const translationKey_receiveFeedback: PossibleTranslationKey = 'course.receive feedback (a lot)'
const translationKey_rank: PossibleTranslationKey = 'rank'
const translationKey_highScore: PossibleTranslationKey = 'high score'
const translationKey_medal: PossibleTranslationKey = 'medal'
const translationKey_place: PossibleTranslationKey = 'place'
const translationKey_stamp: PossibleTranslationKey = 'stamp'

const possibleAmountInEndlessMarioEasyOrNormal: readonly PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal[] = [10, 100, 300, 500, 1000,]
const possibleAmountInEndlessMarioExpertOrSuperExpert: readonly PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert[] = [10, 100,]

//endregion -------------------- Constructor constants --------------------

export class OfficialNotifications
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithTranslationKey<PossibleTranslationKey> {

    //region -------------------- Enum instances --------------------

    public static readonly FINISH_ALL_JOBS =                                   new class OfficialNotifications_FinishAllJobs extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addStoryMode(key, this._addJobs(key, keyMap,),)
        }

    }('Finish all jobs', 'finish all job',)
    public static readonly FINISH_ALL_JOBS_UNDODOG =                           new class OfficialNotifications_FinishAllJobsUndodog extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Undodog', key,
                this._addStoryMode(key,
                    this._addJobs(key, keyMap,),),)
        }

    }('Finish all jobs (Undodog)', translationKey_finishAllCharacterJob,)
    public static readonly FINISH_ALL_JOBS_YAMAMURA =                          new class OfficialNotifications_FinishAllJobsYamamura extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Yamamura', key,
                this._addStoryMode(key,
                    this._addJobs(key, keyMap,),),)
        }

    }('Finish all jobs (Yamamura)', translationKey_finishAllCharacterJob,)
    public static readonly FINISH_ALL_JOBS_PARTRICK =                          new class OfficialNotifications_FinishAllJobsPartrick extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Partrick', key,
                this._addStoryMode(key,
                    this._addJobs(key, keyMap,),),)
        }

    }('Finish all jobs (Partrick)', translationKey_finishAllCharacterJob,)
    public static readonly FINISH_ALL_JOBS_SOUNDFROG =                         new class OfficialNotifications_FinishAllJobsSoundfrog extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Soundfrog', key,
                this._addStoryMode(key,
                    this._addJobs(key, keyMap,),),)
        }

    }('Finish all jobs (Soundfrog)', translationKey_finishAllCharacterJob,)
    public static readonly FINISH_ALL_JOBS_MR_ERASER =                         new class OfficialNotifications_FinishAllJobsMrEraser extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Mr. Eraser', key,
                this._addStoryMode(key,
                    this._addJobs(key, keyMap,),),)
        }

    }('Finish all jobs (Mr. Eraser)', translationKey_finishAllCharacterJob,)
    public static readonly FINISH_1ST_JOB_PEACH =                              new class OfficialNotifications_Finish1stJobPeach extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Princess Peach', key,
                this._addPosition(1, 'job', key,
                    this._addMissionTitle(null, key,
                        this._addStoryMode(key,
                            this._addJob(key, keyMap),),),),)
        }

    }('Finish 1st job (Peach)', translationKey_finishSelectedPeachJob,)
    public static readonly FINISH_2ND_JOB_PEACH =                              new class OfficialNotifications_Finish2ndJobPeach extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Princess Peach', key,
                this._addPosition(2, 'job', key,
                    this._addMissionTitle(null, key,
                        this._addStoryMode(key,
                            this._addJob(key, keyMap),),),),)
        }

    }('Finish 2nd job (Peach)', translationKey_finishSelectedPeachJob,)
    public static readonly FINISH_3RD_JOB_PEACH =                              new class OfficialNotifications_Finish3rdJobPeach extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCharacterImage('Princess Peach', key,
                this._addPosition(3, 'job', key,
                    this._addMissionTitle(null, key,
                        this._addStoryMode(key,
                            this._addJob(key, keyMap),),),),)
        }

    }('Finish 3rd job (Peach)', translationKey_finishSelectedPeachJob,)
    public static readonly HIT_MIDDLE_QUESTION_BLOCK_NEAR_PURPLE_TOAD =        new class OfficialNotifications_HitMiddleQuestionBlockNearPurpleToad extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.entityImage = <Image key={`${key} - entity image`} className="question-block-image" variable="question-block-sm3dw" isSquared/>
            return this._addCharacterImage('Purple Toad', key,
                this._addStoryMode(key, keyMap,),)
        }

    }('Hit Middle ? Block near Purple Toad', 'hit ? Block near Purple Toad',)
    public static readonly FINISH_REBUILDING_THE_CASTLE =                      new class OfficialNotifications_FinishRebuildingTheCastle extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addStoryMode(key, keyMap,)
        }

    }('Finish rebuilding the castle', 'finish rebuilding castle',)


    public static readonly RECEIVE_A_LIKE =                                    new class OfficialNotifications_ReceiveALike extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addLikeImage(key, keyMap,)
        }

    }('Receive a like', 'course.receive like',)
    public static readonly RECEIVE_A_COMMENT =                                 new OfficialNotifications('Receive a comment', 'course.receive comment',)
    public static readonly RECEIVE_A_LOT_OF_FEEDBACK_1 =                       new class OfficialNotifications_ReceiveALotOfFeedback1 extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Receive a lot of feedback - 1', translationKey_receiveFeedback,)
    public static readonly RECEIVE_A_LOT_OF_FEEDBACK_2 =                       new class OfficialNotifications_ReceiveALotOfFeedback2 extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Receive a lot of feedback - 2', translationKey_receiveFeedback,)
    public static readonly RECEIVE_X_PLAY =                                    new class OfficialNotifications_ReceiveXPlay extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Receive # play', 'course.receive play', 100, 500, 1000, 2000, 5000,)

    public static readonly LIKE_A_COURSE =                                     new class OfficialNotifications_LikeACourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addLikeImage(key,
                this._addCourse(key, keyMap,),)
        }

    }('Like a course', 'course.like',)
    public static readonly POST_A_COMMENT =                                    new class OfficialNotifications_PostAComment extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Post a comment', 'course.comment',)
    public static readonly UPLOAD_A_COURSE =                                   new class OfficialNotifications_UploadACourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Upload a course', 'course.upload',)

    public static readonly _1_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                new class OfficialNotifications_1Of1stClearToFinishACourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('1 of 1st clear to finish a course', 'course.1st to clear - 1', 1,)
    public static readonly X_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                 new class OfficialNotifications_XOf1stClearToFinishACourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourses(key, keyMap,)
        }

    }('# of 1st clear to finish a course', 'course.1st to clear', 10, 100,)

    public static readonly CLEAR_1_COURSE =                                    new class OfficialNotifications_Clear1Course extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key, keyMap,)
        }

    }('Clear 1 course', 'course.clear - 1', 1,)
    public static readonly CLEAR_X_COURSE =                                    new class OfficialNotifications_ClearXCourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourses(key, keyMap,)
        }

    }('Clear # course', 'course.clear', 10, 100, 500, 1000, 3000, 5000, 10000,)

    public static readonly PLAY_X_COURSE =                                     new class OfficialNotifications_PlayXCourse extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourses(key, keyMap,)
        }

    }('Play # course', 'course.play', 10, 100, 500, 1000, 3000,)

    public static readonly SET_1_WORLD_RECORD =                                new class OfficialNotifications_Set1WorldRecord extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addWorldRecord(key, keyMap,)
        }

    }('Set 1 world record', 'set world record',)
    public static readonly HOLD_X_WORLD_RECORD =                               new class OfficialNotifications_HoldXWorldRecord extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addWorldRecords(key, keyMap,)
        }

    }('Hold # world record', 'hold world record', 10, 100, 500,)


    public static readonly WIN_1_MATCH_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_Win1MatchInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key, keyMap,)
        }

    }('Win 1 match in Multiplayer VS', 'win match - 1', 1,)
    public static readonly WIN_X_MATCH_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_WinXMatchInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key, keyMap,)
        }

    }('Win # match in Multiplayer VS', 'win match', 2, 5, 10,)
    public static readonly WIN_CONSECUTIVE_MATCH_IN_MULTIPLAYER_VS =           new class OfficialNotifications_WinConsecutiveMatchInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key, keyMap,)
        }

    }('Win consecutive match in Multiplayer VS', 'win consecutive match',)

    public static readonly RANK_C_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankCInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key,
                this._addRank('C', key, keyMap,),)
        }

    }('Rank C in Multiplayer VS', translationKey_rank,)
    public static readonly RANK_B_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankBInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key,
                this._addRank('B', key, keyMap,),)
        }

    }('Rank B in Multiplayer VS', translationKey_rank,)
    public static readonly RANK_A_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankAInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key,
                this._addRank('A', key, keyMap,),)
        }

    }('Rank A in Multiplayer VS', translationKey_rank,)
    public static readonly RANK_S_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankSInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key,
                this._addRank('S', key, keyMap,),)
        }

    }('Rank S in Multiplayer VS', translationKey_rank,)
    public static readonly RANK_S_PLUS_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_RankSPlusInMultiplayerVS extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerVS(key,
                this._addRank('S⁺', key, keyMap,),)
        }

    }('Rank S⁺ in Multiplayer VS', translationKey_rank,)

    public static readonly CLEAR_1_COURSE_IN_MULTIPLAYER_COOP =                new class OfficialNotifications_Clear1CourseInMultiplayerCoop extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerCoop(key,
                this._addCourse(key, keyMap,),)
        }

    }('Clear 1 course in Multiplayer Co-op', 'clear course multiplayer coop - 1', 1,)
    public static readonly CLEAR_X_COURSE_IN_MULTIPLAYER_COOP =                new class OfficialNotifications_ClearXCourseInMultiplayerCoop extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMultiplayerCoop(key,
                this._addCourses(key, keyMap,),)
        }

    }('Clear # course in Multiplayer Co-op', 'clear course multiplayer coop', 10, 100,)

    public static readonly X_MAKER_POINT_EARN =                                new class OfficialNotifications_XMakerPointsEarn extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addMakerPoints(key, keyMap,)
        }

    }('Earn # Maker Point', 'maker point', 2000, 5000, 7000,)

    public static readonly HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EASY =         new class OfficialNotifications_HighScoreOfXInEndlessChallengeEasy extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key,
                this._addEndlessChallenge(key,
                    this._addDifficulty('easy', key, keyMap,),),)
        }

    }('High score of # in Endless Challenge (easy)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,)
    public static readonly HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_NORMAL =       new class OfficialNotifications_HighScoreOfXInEndlessChallengeNormal extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key,
                this._addEndlessChallenge(key,
                    this._addDifficulty('normal', key, keyMap,),),)
        }

    }('High score of # in Endless Challenge (normal)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,)
    public static readonly HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EXPERT =       new class OfficialNotifications_HighScoreOfXInEndlessChallengeExpert extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key,
                this._addEndlessChallenge(key,
                    this._addDifficulty('expert', key, keyMap,),),)
        }

    }('High score of # in Endless Challenge (expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,)
    public static readonly HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_SUPER_EXPERT = new class OfficialNotifications_HighScoreOfXInEndlessChallengeSuperExpert extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addCourse(key,
                this._addEndlessChallenge(key,
                    this._addDifficulty('super expert', key, keyMap,),),)
        }

    }('High score of # in Endless Challenge (super expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,)

    public static readonly GOLD_MEDAL_ON_THE_LEADERBOARD =                     new class OfficialNotifications_GoldMedalOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - gold medal image`} file={GOLD_MEDAL_IMAGE_FILE}/>
            return this._addLeaderboard(key, keyMap,)
        }

    }('Gold medal on the leaderboard', translationKey_medal,)
    public static readonly SILVER_MEDAL_ON_THE_LEADERBOARD =                   new class OfficialNotifications_SilverMedalOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - silver medal image`} file={SILVER_MEDAL_IMAGE_FILE}/>
            return this._addLeaderboard(key, keyMap,)
        }

    }('Silver medal on the leaderboard', translationKey_medal,)
    public static readonly BRONZE_MEDAL_ON_THE_LEADERBOARD =                   new class OfficialNotifications_BronzeMedalOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - bronze medal image`} file={BRONZE_MEDAL_IMAGE_FILE}/>
            return this._addLeaderboard(key, keyMap,)
        }

    }('Bronze medal on the leaderboard', translationKey_medal,)
    public static readonly FIRST_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_1stPlaceOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - 1st place image (medal)`} file={FIRST_PLACE_IMAGE_FILE}/>
            return super._addLeaderboard(key,
                this._addPosition(1, 'place', key, keyMap,),)
        }

    }('1st place on the leaderboard', translationKey_place,)
    public static readonly SECOND_PLACE_ON_THE_LEADERBOARD =                   new class OfficialNotifications_2ndPlaceOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - 2nd place image (medal)`} file={SECOND_PLACE_IMAGE_FILE}/>
            return super._addLeaderboard(key,
                this._addPosition(2, 'place', key, keyMap,),)
        }

    }('2nd place on the leaderboard', translationKey_place,)
    public static readonly THIRD_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_3rdPlaceOnTheLeaderboard extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.medalImage = <Image key={`${key} - 3rd place image (medal)`} file={THIRD_PLACE_IMAGE_FILE}/>
            return super._addLeaderboard(key,
                this._addPosition(3, 'place', key, keyMap,),)
        }

    }('3rd place on the leaderboard', translationKey_place,)

    public static readonly COLLECT_1_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_Collect1StampInTheNinjiSpeedruns extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addStampImage(key,
                this._addNinjiSpeedruns(key, keyMap,),)
        }

    }('Collect 1 stamp in the Ninji Speedruns', translationKey_stamp, 1,)
    public static readonly COLLECT_X_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_CollectXStampInTheNinjiSpeedruns extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addStampImage(key,
                this._addNinjiSpeedruns(key, keyMap,),)
        }

    }('Collect # stamp in the Ninji Speedruns', translationKey_stamp, 4, 7, 10, 11, 14, 17, 20,)

    public static readonly UPLOAD_A_SUPER_WORLD =                              new class OfficialNotifications_UploadASuperWorld extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addSuperWorld(key, keyMap,)
        }

    }('Upload a Super World', 'super world.upload',)
    public static readonly CLEAR_1_SUPER_WORLD =                               new class OfficialNotifications_Clear1SuperWorld extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addSuperWorld(key, keyMap,)
        }

    }('Clear 1 Super World', 'super world.clear - 1', 1,)
    public static readonly CLEAR_X_SUPER_WORLD =                               new class OfficialNotifications_ClearXSuperWorld extends OfficialNotifications {

        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addSuperWorlds(key, keyMap,)
        }

    }('Clear # Super World', 'super world.clear', 2, 3, 4, 5, 10,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<OfficialNotifications, typeof OfficialNotifications> = class CompanionEnum_OfficialNotifications
        extends CompanionEnumByName<OfficialNotifications, typeof OfficialNotifications> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_OfficialNotifications

        private constructor() {
            super(OfficialNotifications,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_OfficialNotifications()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| OfficialNotifications | string>,): OfficialNotifications {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.find(it =>
                it.englishName === value
                || it.additionalEnglishName.includes(value as never,),)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #additionalEnglishName: readonly PossibleEnglishNameWithEveryAmount[]

    readonly #translationKey
    #additionalTranslationKeyHolder: Lazy<NullOr<PossibleAdditionalTranslationKey>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: Exclude<PossibleEnglishName, PossibleEnglishNameWithAmount>, translationKey: PossibleTranslationKey,)
    private constructor(englishName: PossibleEnglishNameWithAmount<'#'>, translationKey: PossibleTranslationKey, ...amount: readonly PossibleAmount[])
    private constructor(englishName: PossibleEnglishNameWithAmount<1>, translationKey: PossibleTranslationKey, amount: 1,)
    private constructor(englishName: PossibleEnglishName, translationKey: PossibleTranslationKey, ...amount: readonly PossibleAmount[]) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#translationKey = translationKey
        this.#additionalEnglishName = amount[0] === 1 ? EMPTY_ARRAY : amount.map(amount => this.englishName.replace('#', amount.toString(),) as PossibleEnglishNameWithEveryAmount)
        this.#additionalTranslationKeyHolder = lazy(() => this._createAdditionalTranslationKey,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get additionalEnglishName(): readonly PossibleEnglishNameWithEveryAmount[] {
        return this.#additionalEnglishName
    }

    //endregion -------------------- Getter methods (english name) --------------------
    //region -------------------- Getter methods (translation key) --------------------

    public get translationKey(): PossibleTranslationKey {
        return this.#translationKey
    }

    protected get _createAdditionalTranslationKey(): NullOr<PossibleAdditionalTranslationKey> {
        return null
    }

    public get additionalTranslationKey(): NullOr<PossibleAdditionalTranslationKey> {
        return this.#additionalTranslationKeyHolder.value
    }

    //endregion -------------------- Getter methods (translation key) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Add argument to "key map" --------------------

    /**
     * Add any arguments specified by the current instance to be ready to
     * @param key
     * @param keyMap the key map (that is modified)
     */
    protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        return keyMap
    }


    protected _addJob(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.job = <UnfinishedText key={`${key} - job`}>job</UnfinishedText>//TODO add job translation
        return keyMap
    }

    protected _addJobs(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.jobs = <UnfinishedText key={`${key} - job`}>jobs</UnfinishedText>//TODO add jobs translation
        return keyMap
    }


    protected _addCourse(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.course = COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName).toLowerCase()
        return keyMap
    }

    protected _addCourses(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName).toLowerCase()
        return keyMap
    }


    protected _addWorldRecord(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.worldRecord = WORLD_RECORD.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(WORLD_RECORD.singularEnglishName).toLowerCase()
        return keyMap
    }

    protected _addWorldRecords(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.worldRecords = WORLD_RECORD.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(WORLD_RECORD.pluralEnglishName).toLowerCase()
        return keyMap
    }

    protected _addLeaderboard(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.leaderboard = <TextComponent key={`${key} - leaderboard`} content={LEADERBOARD.singularNameOnReference.toLowerCase()} className="text-decoration-underline"/>
        return keyMap
    }


    protected _addMultiplayerVS(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MultiplayerVersus = <TextComponent key={`${key} - Multiplayer Versus`} content={MULTIPLAYER_VERSUS.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addMultiplayerCoop(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MultiplayerCoop = <TextComponent key={`${key} - Multiplayer Co-op`} content={MULTIPLAYER_COOP.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addStoryMode(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.StoryMode = <TextComponent key={`${key} - Story Mode`} content={STORY_MODE.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addMakerPoints(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MakerPoints = <Fragment key={`${key} - Maker Points`}>--Maker Points--</Fragment>//TODO add Maker Points reference
        return keyMap
    }

    protected _addEndlessChallenge(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.EndlessChallenge = <TextComponent key={`${key} - Endless Challenge`} content={ENDLESS_CHALLENGE.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addNinjiSpeedruns(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.NinjiSpeedruns = <TextComponent key={`${key} - Ninji Speedruns`} content={NINJI_SPEEDRUNS.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addSuperWorld(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.SuperWorld = <TextComponent key={`${key} - Super World`} content={SUPER_WORLD.singularNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }

    protected _addSuperWorlds(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.SuperWorlds = <TextComponent key={`${key} - Super World`} content={SUPER_WORLD.pluralNameOnReference} className="text-decoration-underline"/>
        return keyMap
    }


    protected _addLikeImage(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.likeImage = <Image key={`${key} - like image`} className="like-image" file={LIKE_IMAGE_FILE}/>
        return keyMap
    }

    protected _addCharacterImage(character: | 'Undodog' | 'Yamamura' | 'Partrick' | 'Soundfrog' | 'Mr. Eraser' | 'Princess Peach' | 'Purple Toad', key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.characterImage = <Fragment key={`${key} - character`}>--{character} image--</Fragment>//TODO add character reference
        return keyMap
    }

    protected _addStampImage(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.stampImage = <Image key={`${key} - stamp image`} className="stamp-image" file={STAMP_IMAGE_FILE}/>
        return keyMap
    }


    protected _addMissionTitle(missionTitle: null, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MissionTitle = <Fragment key={`${key} - Mission title`}>--Mission title--</Fragment>//TODO add mission title reference
        return keyMap
    }


    protected _addRank(rank: | 'C' | 'B' | 'A' | `S${| '' | '⁺'}`, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.rank = <Fragment key={`${key} - rank`}>{rank}</Fragment>
        return keyMap
    }

    protected _addDifficulty(difficulty: | 'easy' | 'normal' | `${| '' | 'super '}expert`, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        if (difficulty === 'easy')
            keyMap.difficulty = <TextComponent key={`${key} - difficulty`} content={EASY.singularNameOnReference.toLowerCase()}/>
        else if (difficulty === 'normal')
            keyMap.difficulty = <TextComponent key={`${key} - difficulty`} content={NORMAL.singularNameOnReference.toLowerCase()}/>
        else if (difficulty === 'expert')
            keyMap.difficulty = <TextComponent key={`${key} - difficulty`} content={EXPERT.singularNameOnReference.toLowerCase()}/>
        else
            keyMap.difficulty = <TextComponent key={`${key} - difficulty`} content={SUPER_EXPERT.singularNameOnReference.toLowerCase()}/>
        return keyMap
    }


    protected _addPosition(position: | 1 | 2 | 3, type: | 'job' | 'place', key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        const upperText = gameContentTranslation(`Official notification.position.${type}.${position}`,)
        keyMap.position = <Fragment key={`${key} - position (${type})`}>
            {position}
            {upperText === EMPTY_STRING ? null : <sup>{upperText}</sup>}
        </Fragment>
        return keyMap
    }

    //endregion -------------------- Add argument to "key map" --------------------

    public createSimpleTranslationComponent(key: string, amount: NullableNumber,): ReactElement {
        const keyMap: TranslationReplaceKeysMap = {}
        if (amount != null)
            keyMap.amount = <Fragment key={`${key} - amount`}>{amount}</Fragment>

        return <TextComponent content={gameContentTranslation(`Official notification.${this.translationKey}`, this._addArgumentTo(key, keyMap,),)}/>
    }

    //endregion -------------------- Methods --------------------

}
