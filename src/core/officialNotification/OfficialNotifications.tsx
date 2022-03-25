import {Fragment, lazy} from 'react';

import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                         from '../ClassWithEnglishName';
import type {ClassWithTranslationKey}                                                                                                                                                                                                                                                                                                                                                                                                                                      from '../../lang/ClassWithTranslationKey';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAdditionalTranslationKey, PossibleAmount, PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal, PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert, PossibleEnglishName, PossibleEnglishNameWithAmount, PossibleEnglishNameWithEveryAmount, PossibleNonNullableValue, PossibleStringValue, PossibleTranslationKey, PossibleValue} from './OfficialNotifications.types';
import type {ReactElement}                                                                                                                                                                                                                                                                                                                                                                                                                                                 from '../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../../util/enum/Enum.types';
import type {TranslationReplaceKeysMap}                                                                                                                                                                                                                                                                                                                                                                                                                                    from '../../lang/components/TranslationProperty';

import {EMPTY_ARRAY, EMPTY_STRING}     from '../../util/emptyVariables';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {StringContainer}               from '../../util/StringContainer';
import {TranslationUtility}            from '../../lang/components/TranslationUtility';

//region -------------------- dynamic imports --------------------

const TextComponent = lazy(() => import('../../app/tools/text/TextComponent'));
const Image =         lazy(() => import('../../app/tools/images/Image'));

//endregion -------------------- dynamic imports --------------------

export class OfficialNotifications
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithTranslationKey<PossibleTranslationKey> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ FINISH_ALL_JOBS;
    public static/* readonly*/ FINISH_ALL_JOBS_UNDODOG;
    public static/* readonly*/ FINISH_ALL_JOBS_YAMAMURA;
    public static/* readonly*/ FINISH_ALL_JOBS_PARTRICK;
    public static/* readonly*/ FINISH_ALL_JOBS_SOUNDFROG;
    public static/* readonly*/ FINISH_ALL_JOBS_MR_ERASER;
    public static/* readonly*/ FINISH_1ST_JOB_PEACH;
    public static/* readonly*/ FINISH_2ND_JOB_PEACH;
    public static/* readonly*/ FINISH_3RD_JOB_PEACH;
    public static/* readonly*/ HIT_MIDDLE_QUESTION_BLOCK_NEAR_PURPLE_TOAD;
    public static/* readonly*/ FINISH_REBUILDING_THE_CASTLE;


    public static/* readonly*/ RECEIVE_A_LIKE;
    public static/* readonly*/ RECEIVE_A_COMMENT;
    public static/* readonly*/ RECEIVE_A_LOT_OF_FEEDBACK_1;
    public static/* readonly*/ RECEIVE_A_LOT_OF_FEEDBACK_2;
    public static/* readonly*/ RECEIVE_X_PLAY;

    public static/* readonly*/ LIKE_A_COURSE;
    public static/* readonly*/ POST_A_COMMENT;
    public static/* readonly*/ UPLOAD_A_COURSE;

    public static/* readonly*/ _1_OF_1ST_CLEAR_TO_FINISH_A_COURSE;
    public static/* readonly*/ X_OF_1ST_CLEAR_TO_FINISH_A_COURSE;

    public static/* readonly*/ CLEAR_1_COURSE;
    public static/* readonly*/ CLEAR_X_COURSE;

    public static/* readonly*/ PLAY_X_COURSE;

    public static/* readonly*/ SET_1_WORLD_RECORD;
    public static/* readonly*/ HOLD_X_WORLD_RECORD;


    public static/* readonly*/ WIN_1_MATCH_IN_MULTIPLAYER_VS;
    public static/* readonly*/ WIN_X_MATCH_IN_MULTIPLAYER_VS;
    public static/* readonly*/ WIN_CONSECUTIVE_MATCH_IN_MULTIPLAYER_VS;

    public static/* readonly*/ RANK_C_IN_MULTIPLAYER_VS;
    public static/* readonly*/ RANK_B_IN_MULTIPLAYER_VS;
    public static/* readonly*/ RANK_A_IN_MULTIPLAYER_VS;
    public static/* readonly*/ RANK_S_IN_MULTIPLAYER_VS;
    public static/* readonly*/ RANK_S_PLUS_IN_MULTIPLAYER_VS;

    public static/* readonly*/ CLEAR_1_COURSE_IN_MULTIPLAYER_COOP;
    public static/* readonly*/ CLEAR_X_COURSE_IN_MULTIPLAYER_COOP;

    public static/* readonly*/ X_MAKER_POINT_EARN;

    public static/* readonly*/ HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EASY;
    public static/* readonly*/ HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_NORMAL;
    public static/* readonly*/ HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EXPERT;
    public static/* readonly*/ HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_SUPER_EXPERT;

    public static/* readonly*/ GOLD_MEDAL_ON_THE_LEADERBOARD;
    public static/* readonly*/ SILVER_MEDAL_ON_THE_LEADERBOARD;
    public static/* readonly*/ BRONZE_MEDAL_ON_THE_LEADERBOARD;
    public static/* readonly*/ FIRST_PLACE_ON_THE_LEADERBOARD;
    public static/* readonly*/ SECOND_PLACE_ON_THE_LEADERBOARD;
    public static/* readonly*/ THIRD_PLACE_ON_THE_LEADERBOARD;

    public static/* readonly*/ COLLECT_1_STAMP_IN_THE_NINJI_SPEEDRUNS;
    public static/* readonly*/ COLLECT_X_STAMP_IN_THE_NINJI_SPEEDRUNS;

    public static/* readonly*/ UPLOAD_A_SUPER_WORLD;
    public static/* readonly*/ CLEAR_1_SUPER_WORLD;
    public static/* readonly*/ CLEAR_X_SUPER_WORLD;

    static {
        const translationKey_finishAllCharacterJob: PossibleTranslationKey = 'finish all 3 job (character)';
        const translationKey_finishSelectedPeachJob: PossibleTranslationKey = 'finish X job (Peach)';
        const translationKey_receiveFeedback: PossibleTranslationKey = 'course.receive feedback (a lot)';
        const translationKey_rank: PossibleTranslationKey = 'rank';
        const translationKey_highScore: PossibleTranslationKey = 'high score';
        const translationKey_medal: PossibleTranslationKey = 'medal';
        const translationKey_place: PossibleTranslationKey = 'place';
        const translationKey_stamp: PossibleTranslationKey = 'stamp';

        const one = 1;
        const possibleAmountInEndlessMarioEasyOrNormal: readonly PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal[] = [10, 100, 300, 500, 1000,];
        const possibleAmountInEndlessMarioExpertOrSuperExpert: readonly PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert[] = [10, 100,];


        this.FINISH_ALL_JOBS =                                   new class OfficialNotifications_FinishAllJobs extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addStoryMode(key, this._addJobs(key, keyMap,),);
            }

        }('Finish all jobs', 'finish all job',);
        this.FINISH_ALL_JOBS_UNDODOG =                           new class OfficialNotifications_FinishAllJobsUndodog extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Undodog', key,
                    this._addStoryMode(key,
                        this._addJobs(key, keyMap,),),);
            }

        }('Finish all jobs (Undodog)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_YAMAMURA =                          new class OfficialNotifications_FinishAllJobsYamamura extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Yamamura', key,
                    this._addStoryMode(key,
                        this._addJobs(key, keyMap,),),);
            }

        }('Finish all jobs (Yamamura)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_PARTRICK =                          new class OfficialNotifications_FinishAllJobsPartrick extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Partrick', key,
                    this._addStoryMode(key,
                        this._addJobs(key, keyMap,),),);
            }

        }('Finish all jobs (Partrick)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_SOUNDFROG =                         new class OfficialNotifications_FinishAllJobsSoundfrog extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Soundfrog', key,
                    this._addStoryMode(key,
                        this._addJobs(key, keyMap,),),);
            }

        }('Finish all jobs (Soundfrog)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_MR_ERASER =                         new class OfficialNotifications_FinishAllJobsMrEraser extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Mr. Eraser', key,
                    this._addStoryMode(key,
                        this._addJobs(key, keyMap,),),);
            }

        }('Finish all jobs (Mr. Eraser)', translationKey_finishAllCharacterJob,);
        this.FINISH_1ST_JOB_PEACH =                              new class OfficialNotifications_Finish1stJobPeach extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Princess Peach', key,
                    this._addPosition(1, 'job', key,
                        this._addMissionTitle(null, key,
                            this._addStoryMode(key,
                                this._addJob(key, keyMap),),),),);
            }

        }('Finish 1st job (Peach)', translationKey_finishSelectedPeachJob,);
        this.FINISH_2ND_JOB_PEACH =                              new class OfficialNotifications_Finish2ndJobPeach extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Princess Peach', key,
                    this._addPosition(2, 'job', key,
                        this._addMissionTitle(null, key,
                            this._addStoryMode(key,
                                this._addJob(key, keyMap),),),),);
            }

        }('Finish 2nd job (Peach)', translationKey_finishSelectedPeachJob,);
        this.FINISH_3RD_JOB_PEACH =                              new class OfficialNotifications_Finish3rdJobPeach extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCharacterImage('Princess Peach', key,
                    this._addPosition(3, 'job', key,
                        this._addMissionTitle(null, key,
                            this._addStoryMode(key,
                                this._addJob(key, keyMap),),),),);
            }

        }('Finish 3rd job (Peach)', translationKey_finishSelectedPeachJob,);
        this.HIT_MIDDLE_QUESTION_BLOCK_NEAR_PURPLE_TOAD =        new class OfficialNotifications_HitMiddleQuestionBlockNearPurpleToad extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.entityImage = <Image key={`${key} - entity image`} source={'/entity/5 - SM3DW/Editor/3W_Lyt_P_HatenaBlock_00.tiff'} fallbackName={'"? Block" image'}/>;
                return this._addCharacterImage('Purple Toad', key,
                    this._addStoryMode(key, keyMap,),);
            }

        }('Hit Middle ? Block near Purple Toad', 'hit ? Block near Purple Toad',);
        this.FINISH_REBUILDING_THE_CASTLE =                      new class OfficialNotifications_FinishRebuildingTheCastle extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addStoryMode(key, keyMap,);
            }

        }('Finish rebuilding the castle', 'finish rebuilding castle',);


        this.RECEIVE_A_LIKE =                                    new class OfficialNotifications_ReceiveALike extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addLikeImage(key, keyMap,);
            }

        }('Receive a like', 'course.receive like',);
        this.RECEIVE_A_COMMENT =                                 new OfficialNotifications('Receive a comment', 'course.receive comment',);
        this.RECEIVE_A_LOT_OF_FEEDBACK_1 =                       new class OfficialNotifications_ReceiveALotOfFeedback1 extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Receive a lot of feedback - 1', translationKey_receiveFeedback,);
        this.RECEIVE_A_LOT_OF_FEEDBACK_2 =                       new class OfficialNotifications_ReceiveALotOfFeedback2 extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Receive a lot of feedback - 2', translationKey_receiveFeedback,);
        this.RECEIVE_X_PLAY =                                    new class OfficialNotifications_ReceiveXPlay extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Receive # play', 'course.receive play', 100, 500, 1000, 2000, 5000,);

        this.LIKE_A_COURSE =                                     new class OfficialNotifications_LikeACourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addLikeImage(key,
                    this._addCourse(key, keyMap,),);
            }

        }('Like a course', 'course.like',);
        this.POST_A_COMMENT =                                    new class OfficialNotifications_PostAComment extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Post a comment', 'course.comment',);
        this.UPLOAD_A_COURSE =                                   new class OfficialNotifications_UploadACourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Upload a course', 'course.upload',);

        this._1_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                new class OfficialNotifications_1Of1stClearToFinishACourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('1 of 1st clear to finish a course', 'course.1st to clear - 1', one,);
        this.X_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                 new class OfficialNotifications_XOf1stClearToFinishACourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourses(key, keyMap,);
            }

        }('# of 1st clear to finish a course', 'course.1st to clear', 10, 100,);

        this.CLEAR_1_COURSE =                                    new class OfficialNotifications_Clear1Course extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key, keyMap,);
            }

        }('Clear 1 course', 'course.clear - 1', one,);
        this.CLEAR_X_COURSE =                                    new class OfficialNotifications_ClearXCourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourses(key, keyMap,);
            }

        }('Clear # course', 'course.clear', 10, 100, 500, 1000, 3000, 5000, 10000,);

        this.PLAY_X_COURSE =                                     new class OfficialNotifications_PlayXCourse extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourses(key, keyMap,);
            }

        }('Play # course', 'course.play', 10, 100, 500, 1000, 3000,);

        this.SET_1_WORLD_RECORD =                                new class OfficialNotifications_Set1WorldRecord extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addWorldRecord(key, keyMap,);
            }

        }('Set 1 world record', 'set world record',);
        this.HOLD_X_WORLD_RECORD =                               new class OfficialNotifications_HoldXWorldRecord extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addWorldRecords(key, keyMap,);
            }

        }('Hold # world record', 'hold world record', 10, 100, 500,);


        this.WIN_1_MATCH_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_Win1MatchInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key, keyMap,);
            }

        }('Win 1 match in Multiplayer VS', 'win match - 1', one,);
        this.WIN_X_MATCH_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_WinXMatchInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key, keyMap,);
            }

        }('Win # match in Multiplayer VS', 'win match', 2, 5, 10,);
        this.WIN_CONSECUTIVE_MATCH_IN_MULTIPLAYER_VS =           new class OfficialNotifications_WinConsecutiveMatchInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key, keyMap,);
            }

        }('Win consecutive match in Multiplayer VS', 'win consecutive match',);

        this.RANK_C_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankCInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key,
                    this._addRank('C', key, keyMap,),);
            }

        }('Rank C in Multiplayer VS', translationKey_rank,);
        this.RANK_B_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankBInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key,
                    this._addRank('B', key, keyMap,),);
            }

        }('Rank B in Multiplayer VS', translationKey_rank,);
        this.RANK_A_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankAInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key,
                    this._addRank('A', key, keyMap,),);
            }

        }('Rank A in Multiplayer VS', translationKey_rank,);
        this.RANK_S_IN_MULTIPLAYER_VS =                          new class OfficialNotifications_RankSInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key,
                    this._addRank('S', key, keyMap,),);
            }

        }('Rank S in Multiplayer VS', translationKey_rank,);
        this.RANK_S_PLUS_IN_MULTIPLAYER_VS =                     new class OfficialNotifications_RankSPlusInMultiplayerVS extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerVS(key,
                    this._addRank('S⁺', key, keyMap,),);
            }

        }('Rank S⁺ in Multiplayer VS', translationKey_rank,);

        this.CLEAR_1_COURSE_IN_MULTIPLAYER_COOP =                new class OfficialNotifications_Clear1CourseInMultiplayerCoop extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerCoop(key,
                    this._addCourse(key, keyMap,),);
            }

        }('Clear 1 course in Multiplayer Co-op', 'clear course multiplayer coop - 1', one,);
        this.CLEAR_X_COURSE_IN_MULTIPLAYER_COOP =                new class OfficialNotifications_ClearXCourseInMultiplayerCoop extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMultiplayerCoop(key,
                    this._addCourses(key, keyMap,),);
            }

        }('Clear # course in Multiplayer Co-op', 'clear course multiplayer coop', 10, 100,);

        this.X_MAKER_POINT_EARN =                                new class OfficialNotifications_XMakerPointsEarn extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addMakerPoints(key, keyMap,);
            }

        }('Earn # Maker Point', 'maker point', 2000, 5000, 7000,);

        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EASY =         new class OfficialNotifications_HighScoreOfXInEndlessChallengeEasy extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key,
                    this._addEndlessChallenge(key,
                        this._addDifficulty('easy', key, keyMap,),),);
            }

        }('High score of # in Endless Challenge (easy)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_NORMAL =       new class OfficialNotifications_HighScoreOfXInEndlessChallengeNormal extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key,
                    this._addEndlessChallenge(key,
                        this._addDifficulty('normal', key, keyMap,),),);
            }

        }('High score of # in Endless Challenge (normal)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EXPERT =       new class OfficialNotifications_HighScoreOfXInEndlessChallengeExpert extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key,
                    this._addEndlessChallenge(key,
                        this._addDifficulty('expert', key, keyMap,),),);
            }

        }('High score of # in Endless Challenge (expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_SUPER_EXPERT = new class OfficialNotifications_HighScoreOfXInEndlessChallengeSuperExpert extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addCourse(key,
                    this._addEndlessChallenge(key,
                        this._addDifficulty('super expert', key, keyMap,),),);
            }

        }('High score of # in Endless Challenge (super expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,);

        this.GOLD_MEDAL_ON_THE_LEADERBOARD =                     new class OfficialNotifications_GoldMedalOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - gold medal image`} source="/others/medal/BadgeS_03^u.tiff" fallbackName="Gold medal image"/>;
                return this._addLeaderboard(key, keyMap,);
            }

        }('Gold medal on the leaderboard', translationKey_medal,);
        this.SILVER_MEDAL_ON_THE_LEADERBOARD =                   new class OfficialNotifications_SilverMedalOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - silver medal image`} source="/others/medal/BadgeS_04^u.tiff" fallbackName="Silver medal image"/>;
                return this._addLeaderboard(key, keyMap,);
            }

        }('Silver medal on the leaderboard', translationKey_medal,);
        this.BRONZE_MEDAL_ON_THE_LEADERBOARD =                   new class OfficialNotifications_BronzeMedalOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - bronze medal image`} source="/others/medal/BadgeS_05^u.tiff" fallbackName="Bronze medal image"/>;
                return this._addLeaderboard(key, keyMap,);
            }

        }('Bronze medal on the leaderboard', translationKey_medal,);
        this.FIRST_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_1stPlaceOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - gold medal image (position)`} source="/others/medal/BadgeS_00^u.tiff" fallbackName="Gold medal image (position)"/>;
                return super._addLeaderboard(key,
                    this._addPosition(1, 'place', key, keyMap,),);
            }

        }('1st place on the leaderboard', translationKey_place,);
        this.SECOND_PLACE_ON_THE_LEADERBOARD =                   new class OfficialNotifications_2ndPlaceOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - silver medal image (position)`} source="/others/medal/BadgeS_01^u.tiff" fallbackName="Silver medal image (position)"/>;
                return super._addLeaderboard(key,
                    this._addPosition(2, 'place', key, keyMap,),);
            }

        }('2nd place on the leaderboard', translationKey_place,);
        this.THIRD_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_3rdPlaceOnTheLeaderboard extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                keyMap.medalImage = <Image key={`${key} - bronze medal image (position)`} source="/others/medal/BadgeS_02^u.tiff" fallbackName="Bronze medal image (position)"/>;
                return super._addLeaderboard(key,
                    this._addPosition(3, 'place', key, keyMap,),);
            }

        }('3rd place on the leaderboard', translationKey_place,);

        this.COLLECT_1_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_Collect1StampInTheNinjiSpeedruns extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addStampImage(key,
                    this._addNinjiSpeedruns(key, keyMap,),);
            }

        }('Collect 1 stamp in the Ninji Speedruns', translationKey_stamp, one,);
        this.COLLECT_X_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_CollectXStampInTheNinjiSpeedruns extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addStampImage(key,
                    this._addNinjiSpeedruns(key, keyMap,),);
            }

        }('Collect # stamp in the Ninji Speedruns', translationKey_stamp, 4, 7, 10, 11, 14, 17, 20,);

        this.UPLOAD_A_SUPER_WORLD =                              new class OfficialNotifications_UploadASuperWorld extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addSuperWorld(key, keyMap,);
            }

        }('Upload a Super World', 'super world.upload',);
        this.CLEAR_1_SUPER_WORLD =                               new class OfficialNotifications_Clear1SuperWorld extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addSuperWorld(key, keyMap,);
            }

        }('Clear 1 Super World', 'super world.clear - 1', one,);
        this.CLEAR_X_SUPER_WORLD =                               new class OfficialNotifications_ClearXSuperWorld extends OfficialNotifications {

            protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
                return this._addSuperWorlds(key, keyMap,);
            }

        }('Clear # Super World', 'super world.clear', 2, 3, 4, 5, 10,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: OfficialNotifications;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #additionalEnglishName: readonly PossibleEnglishNameWithEveryAmount[];

    readonly #translationKey;
    #additionalTranslationKey?: | PossibleAdditionalTranslationKey | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: Exclude<PossibleEnglishName, PossibleEnglishNameWithAmount>, translationKey: PossibleTranslationKey,)
    private constructor(englishName: PossibleEnglishNameWithAmount<'#'>, translationKey: PossibleTranslationKey, ...amount: readonly PossibleAmount[])
    private constructor(englishName: PossibleEnglishNameWithAmount<1>, translationKey: PossibleTranslationKey, amount: 1,)
    private constructor(englishName: PossibleEnglishName, translationKey: PossibleTranslationKey, ...amount: readonly PossibleAmount[]) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#translationKey = translationKey;
        this.#additionalEnglishName = amount[0] === 1 ? EMPTY_ARRAY : amount.map(amount => this.englishName.replace('#', amount.toString(),) as PossibleEnglishNameWithEveryAmount);
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get additionalEnglishName(): readonly PossibleEnglishNameWithEveryAmount[] {
        return this.#additionalEnglishName;
    }

    //endregion -------------------- Getter methods (english name) --------------------
    //region -------------------- Getter methods (translation key) --------------------

    public get translationKey(): PossibleTranslationKey {
        return this.#translationKey;
    }

    protected get _createAdditionalTranslationKey(): | PossibleAdditionalTranslationKey | null {
        return null;
    }

    public get additionalTranslationKey(): | PossibleAdditionalTranslationKey | null {
        return this.#additionalTranslationKey ??= this._createAdditionalTranslationKey;
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
        return keyMap;
    }


    protected _addJob(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.job = <Fragment key={`${key} - job`}>--job--</Fragment>;//TODO add job translation
        return keyMap;
    }

    protected _addJobs(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.jobs = <Fragment key={`${key} - job`}>--jobs--</Fragment>;//TODO add jobs translation
        return keyMap;
    }


    protected _addCourse(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.course = <Fragment key={`${key} - course`}>--course--</Fragment>;//TODO add course translation
        return keyMap;
    }

    protected _addCourses(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.courses = <Fragment key={`${key} - course`}>--courses--</Fragment>;//TODO add courses translation
        return keyMap;
    }


    protected _addWorldRecord(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.worldRecord = <Fragment key={`${key} - world record`}>--world record--</Fragment>;//TODO add world record translation
        return keyMap;
    }

    protected _addWorldRecords(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.worldRecords = <Fragment key={`${key} - world record`}>--world records--</Fragment>;//TODO add world records translation
        return keyMap;
    }

    protected _addLeaderboard(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.leaderboard = <Fragment key={`${key} - leaderboard`}>--leaderboard--</Fragment>;//TODO add leaderboard translation
        return keyMap;
    }


    protected _addMultiplayerVS(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MultiplayerVersus = <Fragment key={`${key} - Multiplayer Versus`}>--Multiplayer Versus--</Fragment>;//TODO add Multiplayer Versus reference
        return keyMap;
    }

    protected _addMultiplayerCoop(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MultiplayerCoop = <Fragment key={`${key} - Multiplayer Co-op`}>--Multiplayer Co-op--</Fragment>;//TODO add Multiplayer Co-op reference
        return keyMap;
    }

    protected _addStoryMode(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.StoryMode = <Fragment key={`${key} - Story Mode`}>--Story Mode--</Fragment>;//TODO add Story Mode reference
        return keyMap;
    }

    protected _addMakerPoints(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MakerPoints = <Fragment key={`${key} - Maker Points`}>--Maker Points--</Fragment>;//TODO add Maker Points reference
        return keyMap;
    }

    protected _addEndlessChallenge(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.EndlessChallenge = <Fragment key={`${key} - Endless Challenge`}>--Endless Challenge--</Fragment>;//TODO add Endless Challenge reference
        return keyMap;
    }

    protected _addNinjiSpeedruns(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.NinjiSpeedruns = <Fragment key={`${key} - Ninji Speedruns`}>--Ninji Speedruns--</Fragment>;//TODO add Ninji Speedruns reference
        return keyMap;
    }

    protected _addSuperWorld(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.SuperWorld = <Fragment key={`${key} - Super World`}>--Super World--</Fragment>;//TODO add Super World reference
        return keyMap;
    }

    protected _addSuperWorlds(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.SuperWorlds = <Fragment key={`${key} - Super World`}>--Super Worlds--</Fragment>;//TODO add Super Worlds reference
        return keyMap;
    }


    protected _addLikeImage(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.likeImage = <Image key={`${key} - like image`} className="like-image" source={'/others/Heart_00^d.tiff'} fallbackName={'Like image'}/>;//TODO change color (in css) to match the one in the game
        return keyMap;
    }

    protected _addCharacterImage(character: | 'Undodog' | 'Yamamura' | 'Partrick' | 'Soundfrog' | 'Mr. Eraser' | 'Princess Peach' | 'Purple Toad', key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.characterImage = <Fragment key={`${key} - character`}>--{character} image--</Fragment>;//TODO add character reference
        return keyMap;
    }

    protected _addStampImage(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.stampImage = <Image key={`${key} - stamp image`} className="stamp-image" source={'/others/EventClearListIcon_00^s.tiff'} fallbackName={'Stamp image'}/>;//TODO change color (in css) to match the one in the game
        return keyMap;
    }


    protected _addMissionTitle(missionTitle: null, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.MissionTitle = <Fragment key={`${key} - Mission title`}>--Mission title--</Fragment>;//TODO add mission title reference
        return keyMap;
    }



    protected _addRank(rank: | 'C' | 'B' | 'A' | `S${| '' | '⁺'}`, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.rank = <Fragment key={`${key} - rank`}>{rank}</Fragment>;
        return keyMap;
    }

    protected _addDifficulty(difficulty: | 'easy' | 'normal' | `${| '' | 'super '}expert`, key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.difficulty = <Fragment key={`${key} - difficulty`}>--{difficulty}--</Fragment>;//TODO add rank reference
        return keyMap;
    }


    protected _addPosition(position: | 1 | 2 | 3, type: | 'job' | 'place', key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.position = <GameContentTranslationComponent key={`${key} - position (${type})`}>{translation => {
            const upperText = translation(`Official notification.position.${type}.${position}`,);
            return <Fragment key={`${key} - position`}>
                {position}
                {upperText === EMPTY_STRING ? EMPTY_REACT_ELEMENT : <sup>{upperText}</sup>}
            </Fragment>;
        }}</GameContentTranslationComponent>;
        return keyMap;
    }

    //endregion -------------------- Add argument to "key map" --------------------

    public createSimpleTranslationComponent(key: string, amount: | number | null,): ReactElement {
        const keyMap: TranslationReplaceKeysMap = {};
        if (amount != null)
            keyMap.amount = <Fragment key={`${key} - amount`}>{amount}</Fragment>;

        return <GameContentTranslationComponent>{translation =>
            <TextComponent content={TranslationUtility.replaceAndInterpretTranslation(translation, `Official notification.${this.translationKey}`, this._addArgumentTo(key, keyMap,),)}/>
        }</GameContentTranslationComponent>;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<OfficialNotifications> {
        return OfficialNotifications;
    }

    //region -------------------- Enum value methods --------------------

    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.additionalEnglishName.includes(value as never))
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends OfficialNotifications = OfficialNotifications, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): OfficialNotifications
    public static getValue(value: PossibleValue,): | OfficialNotifications | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
