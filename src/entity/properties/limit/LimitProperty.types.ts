import type {PossibleComment}                                                                                                                                                                                       from '../../_properties/ClassWithComment';
import type {PossibleCustomLimitWhilePlaying, PossibleEditorLimit, PossibleGeneralLimitWhilePlaying, PossibleGlobalGeneralLimitWhilePlaying, PossiblePowerUpLimitWhilePlaying, PossibleProjectileLimitWhilePlaying} from './LimitProperty';
import type {SingleLimitThatCanBeUnknownProperty}                                                                                                                                                                   from './single/SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                                                                                                                                                                        from './single/SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty}                                                                                                                                                        from './single/SingleLimitWithCommentThatCanBeUnknownProperty';

export type EditorLimitReceived = | PossibleEditorLimit | '?' | null;
export type EditorLimitContainer = SingleLimitThatCanBeUnknownProperty<| PossibleEditorLimit | null>;

export type GeneralLimitReceived = | SingleGeneralLimitReceived | [regular: SingleGeneralLimitReceived, global: SingleGeneralGlobalLimitReceived,];
export type SingleGeneralLimitReceived = readonly [limit: | PossibleGeneralLimitWhilePlaying | null, comment: PossibleComment,];
export type SingleGeneralLimitContainer = SingleLimitWithCommentProperty<| PossibleGeneralLimitWhilePlaying | null>;
export type SingleGeneralGlobalLimitReceived = readonly [limit: | PossibleGlobalGeneralLimitWhilePlaying | null, comment: PossibleComment,];
export type SingleGeneralGlobalLimitContainer = SingleLimitWithCommentProperty<| PossibleGlobalGeneralLimitWhilePlaying | null>;

export type PowerUpLimitReceived = readonly [limit: | PossiblePowerUpLimitWhilePlaying | null, comment: PossibleComment,];
export type PowerUpLimitContainer = | SingleLimitWithCommentProperty<| PossiblePowerUpLimitWhilePlaying | null>;

export type ProjectileLimitReceived = readonly [limit: | PossibleProjectileLimitWhilePlaying | '?' | null, comment: PossibleComment,];
export type ProjectileLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<| PossibleProjectileLimitWhilePlaying | null>;

export type CustomLimitReceived = readonly [limit: | PossibleCustomLimitWhilePlaying | '?' | null, comment: PossibleComment,];
export type CustomLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<| PossibleCustomLimitWhilePlaying | null>;
