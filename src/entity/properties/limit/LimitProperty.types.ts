import type {PossibleCustomLimitWhilePlaying, PossibleEditorLimit, PossibleGeneralLimitWhilePlaying, PossibleGlobalGeneralLimitWhilePlaying, PossiblePowerUpLimitWhilePlaying, PossibleProjectileLimitWhilePlaying} from './LimitProperty';
import type {SingleLimitThatCanBeUnknownProperty}                                                                                                                                                                   from './single/SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                                                                                                                                                                        from './single/SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty}                                                                                                                                                        from './single/SingleLimitWithCommentThatCanBeUnknownProperty';

export type CommentReceived = | string | null;

export type EditorLimitReceived = | PossibleEditorLimit | '?' | null;
export type EditorLimitContainer = SingleLimitThatCanBeUnknownProperty<PossibleEditorLimit>;

export type SingleGeneralLimitReceived = readonly [limit: | PossibleGeneralLimitWhilePlaying | null, comment: CommentReceived,];
export type SingleGeneralLimitContainer = SingleLimitWithCommentProperty<PossibleGeneralLimitWhilePlaying>;
export type SingleGeneralGlobalLimitReceived = readonly [limit: | PossibleGlobalGeneralLimitWhilePlaying | null, comment: CommentReceived,];
export type SingleGeneralGlobalLimitContainer = SingleLimitWithCommentProperty<PossibleGlobalGeneralLimitWhilePlaying>;
export type GeneralLimitReceived = | SingleGeneralLimitReceived | [regular: SingleGeneralLimitReceived, global: SingleGeneralGlobalLimitReceived,];

export type PowerUpLimitReceived = readonly [limit: | PossiblePowerUpLimitWhilePlaying | null, comment: CommentReceived,];
export type PowerUpLimitContainer = | SingleLimitWithCommentProperty<boolean>;

export type ProjectileLimitReceived = readonly [limit: | PossibleProjectileLimitWhilePlaying | '?' | null, comment: CommentReceived,];
export type ProjectileLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<PossibleProjectileLimitWhilePlaying>;

export type CustomLimitReceived = readonly [limit: | PossibleCustomLimitWhilePlaying | '?' | null, comment: CommentReceived,];
export type CustomLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<PossibleCustomLimitWhilePlaying>;
