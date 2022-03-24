import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                                   from '../ClassWithEnglishName';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAdditionalTranslationKey, PossibleAmount, PossibleAmount_HighScoreOfXInEndlessMarioEasyOrNormal, PossibleAmount_HighScoreOfXInEndlessMarioExpertOrSuperExpert, PossibleEnglishName, PossibleEnglishNameWithAmount, PossibleEnglishNameWithEveryAmount, PossibleImageAssociation, PossibleNonNullableValue, PossibleStringValue, PossibleTranslationKey, PossibleValue} from './OfficialNotifications.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from '../../util/enum/Enum.types';

import {Enum}                    from '../../util/enum/Enum';
import {StringContainer}         from '../../util/StringContainer';
import {EMPTY_ARRAY}             from '../../util/emptyVariables';
import {ClassWithTranslationKey} from '../../lang/ClassWithTranslationKey';

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

        const associationImage_like: PossibleImageAssociation = ['likeImage', 'other/Heart_00^s.tiff',];
        const associationImage_stamp: PossibleImageAssociation = ['stampImage', 'other/EventClearListIcon_00^s.tiff',];


        this.FINISH_ALL_JOBS =                                   new OfficialNotifications('Finish all jobs', 'finish all job',);
        this.FINISH_ALL_JOBS_UNDODOG =                           new OfficialNotifications('Finish all jobs (Undodog)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_YAMAMURA =                          new OfficialNotifications('Finish all jobs (Yamamura)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_PARTRICK =                          new OfficialNotifications('Finish all jobs (Partrick)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_SOUNDFROG =                         new OfficialNotifications('Finish all jobs (Soundfrog)', translationKey_finishAllCharacterJob,);
        this.FINISH_ALL_JOBS_MR_ERASER =                         new OfficialNotifications('Finish all jobs (Mr. Eraser)', translationKey_finishAllCharacterJob,);
        this.FINISH_1ST_JOB_PEACH =                              new class OfficialNotifications_Finish1stJobPeach extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.job.1';
            }

        }('Finish 1st job (Peach)', translationKey_finishSelectedPeachJob,);
        this.FINISH_2ND_JOB_PEACH =                              new class OfficialNotifications_Finish2ndJobPeach extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.job.2';
            }

        }('Finish 2nd job (Peach)', translationKey_finishSelectedPeachJob,);
        this.FINISH_3RD_JOB_PEACH =                              new class OfficialNotifications_Finish3rdJobPeach extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.job.3';
            }

        }('Finish 3rd job (Peach)', translationKey_finishSelectedPeachJob,);
        this.HIT_MIDDLE_QUESTION_BLOCK_NEAR_PURPLE_TOAD =        new OfficialNotifications('Hit Middle ? Block near Purple Toad', 'hit ? Block near Purple Toad',);
        this.FINISH_REBUILDING_THE_CASTLE =                      new OfficialNotifications('Finish rebuilding the castle', 'finish rebuilding castle',);


        this.RECEIVE_A_LIKE =                                    new class OfficialNotifications_ReceiveALike extends OfficialNotifications {

            protected get _createImageAssociation(): PossibleImageAssociation | null {
                return associationImage_like;
            }

        }('Receive a like', 'course.receive like',);
        this.RECEIVE_A_COMMENT =                                 new OfficialNotifications('Receive a comment', 'course.receive comment',);
        this.RECEIVE_A_LOT_OF_FEEDBACK_1 =                       new OfficialNotifications('Receive a lot of feedback - 1', translationKey_receiveFeedback,);
        this.RECEIVE_A_LOT_OF_FEEDBACK_2 =                       new OfficialNotifications('Receive a lot of feedback - 2', translationKey_receiveFeedback,);
        this.RECEIVE_X_PLAY =                                    new OfficialNotifications('Receive # play', 'course.receive play', 100, 500, 1000, 2000, 5000,);

        this.LIKE_A_COURSE =                                     new class OfficialNotifications_LikeACourse extends OfficialNotifications {

            protected get _createImageAssociation(): PossibleImageAssociation | null {
                return associationImage_like;
            }

        }('Like a course', 'course.like',);
        this.POST_A_COMMENT =                                    new OfficialNotifications('Post a comment', 'course.comment',);
        this.UPLOAD_A_COURSE =                                   new OfficialNotifications('Upload a course', 'course.upload',);

        this._1_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                new OfficialNotifications('1 of 1st clear to finish a course', 'course.1st to clear - 1', one,);
        this.X_OF_1ST_CLEAR_TO_FINISH_A_COURSE =                 new OfficialNotifications('# of 1st clear to finish a course', 'course.1st to clear', 10, 100,);

        this.CLEAR_1_COURSE =                                    new OfficialNotifications('Clear 1 course', 'course.clear - 1', one,);
        this.CLEAR_X_COURSE =                                    new OfficialNotifications('Clear # course', 'course.clear', 10, 100, 500, 1000, 3000, 5000, 10000,);

        this.PLAY_X_COURSE =                                     new OfficialNotifications('Play # course', 'course.play', 10, 100, 500, 1000, 3000,);

        this.SET_1_WORLD_RECORD =                                new OfficialNotifications('Set 1 world record', 'set world record',);
        this.HOLD_X_WORLD_RECORD =                               new OfficialNotifications('Hold # world record', 'hold world record', 10, 100, 500,);


        this.WIN_1_MATCH_IN_MULTIPLAYER_VS =                     new OfficialNotifications('Win 1 match in Multiplayer VS', 'win match - 1', one,);
        this.WIN_X_MATCH_IN_MULTIPLAYER_VS =                     new OfficialNotifications('Win # match in Multiplayer VS', 'win match', 2, 5, 10,);
        this.WIN_CONSECUTIVE_MATCH_IN_MULTIPLAYER_VS =           new OfficialNotifications('Win consecutive match in Multiplayer VS', 'win consecutive match',);

        this.RANK_C_IN_MULTIPLAYER_VS =                          new OfficialNotifications('Rank C in Multiplayer VS', translationKey_rank,);
        this.RANK_B_IN_MULTIPLAYER_VS =                          new OfficialNotifications('Rank B in Multiplayer VS', translationKey_rank,);
        this.RANK_A_IN_MULTIPLAYER_VS =                          new OfficialNotifications('Rank A in Multiplayer VS', translationKey_rank,);
        this.RANK_S_IN_MULTIPLAYER_VS =                          new OfficialNotifications('Rank S in Multiplayer VS', translationKey_rank,);
        this.RANK_S_PLUS_IN_MULTIPLAYER_VS =                     new OfficialNotifications('Rank S⁺ in Multiplayer VS', translationKey_rank,);

        this.CLEAR_1_COURSE_IN_MULTIPLAYER_COOP =                new OfficialNotifications('Clear 1 course in Multiplayer Co-op', 'course.clear - 1.multiplayer coop', one,);
        this.CLEAR_X_COURSE_IN_MULTIPLAYER_COOP =                new OfficialNotifications('Clear # course in Multiplayer Co-op', 'course.clear.multiplayer coop', 10, 100,);

        this.X_MAKER_POINT_EARN =                                new OfficialNotifications('Earn # Maker Point', 'maker point', 2000, 5000, 7000,);

        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EASY =         new OfficialNotifications('High score of # in Endless Challenge (easy)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_NORMAL =       new OfficialNotifications('High score of # in Endless Challenge (normal)', translationKey_highScore, ...possibleAmountInEndlessMarioEasyOrNormal,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_EXPERT =       new OfficialNotifications('High score of # in Endless Challenge (expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,);
        this.HIGH_SCORE_OF_X_IN_ENDLESS_CHALLENGE_SUPER_EXPERT = new OfficialNotifications('High score of # in Endless Challenge (super expert)', translationKey_highScore, ...possibleAmountInEndlessMarioExpertOrSuperExpert,);

        this.GOLD_MEDAL_ON_THE_LEADERBOARD =                     new OfficialNotifications('Gold medal on the leaderboard', translationKey_medal,);
        this.SILVER_MEDAL_ON_THE_LEADERBOARD =                   new OfficialNotifications('Silver medal on the leaderboard', translationKey_medal,);
        this.BRONZE_MEDAL_ON_THE_LEADERBOARD =                   new OfficialNotifications('Bronze medal on the leaderboard', translationKey_medal,);
        this.FIRST_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_1stPlaceOnTheLeaderboard extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.place.1';
            }

        }('1st place on the leaderboard', translationKey_place,);
        this.SECOND_PLACE_ON_THE_LEADERBOARD =                   new class OfficialNotifications_2ndPlaceOnTheLeaderboard extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.place.2';
            }

        }('2nd place on the leaderboard', translationKey_place,);
        this.THIRD_PLACE_ON_THE_LEADERBOARD =                    new class OfficialNotifications_3rdPlaceOnTheLeaderboard extends OfficialNotifications {

            protected get _createAdditionalTranslationKey(): PossibleAdditionalTranslationKey | null {
                return 'position.place.3';
            }

        }('3rd place on the leaderboard', translationKey_place,);

        this.COLLECT_1_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_Collect1StampInTheNinjiSpeedruns extends OfficialNotifications {

            protected get _createImageAssociation(): PossibleImageAssociation | null {
                return associationImage_stamp;
            }

        }('Collect 1 stamp in the Ninji Speedruns', translationKey_stamp, one,);
        this.COLLECT_X_STAMP_IN_THE_NINJI_SPEEDRUNS =            new class OfficialNotifications_CollectXStampInTheNinjiSpeedruns extends OfficialNotifications {

            protected get _createImageAssociation(): PossibleImageAssociation | null {
                return associationImage_stamp;
            }

        }('Collect # stamp in the Ninji Speedruns', translationKey_stamp, 4, 7, 10, 11, 14, 17, 20,);

        this.UPLOAD_A_SUPER_WORLD =                              new OfficialNotifications('Upload a Super World', 'super world.upload',);
        this.CLEAR_1_SUPER_WORLD =                               new OfficialNotifications('Clear 1 Super World', 'super world.clear - 1', one,);
        this.CLEAR_X_SUPER_WORLD =                               new OfficialNotifications('Clear # Super World', 'super world.clear', 2, 3, 4, 5, 10,);
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

    private _imageAssociation?: | PossibleImageAssociation | null;

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
    //region -------------------- Getter methods (image association) --------------------

    protected get _createImageAssociation(): PossibleImageAssociation | null {
        return null;
    }

    public get imageAssociation(): PossibleImageAssociation | null {
        return this._imageAssociation ??= this._createImageAssociation;
    }

    //endregion -------------------- Getter methods (image association) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<OfficialNotifications> {
        return OfficialNotifications;
    }


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


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
