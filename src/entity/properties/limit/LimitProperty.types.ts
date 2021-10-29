import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                                                             from './Loader.types';
import type {InferredBooleanPropertyWithAmountAndComment, InferredBooleanPropertyWithComment, InferredBooleanPropertyWithEverything, InferredStringPropertyThatCanBeNotApplicable, InferredStringPropertyThatCanBeNotApplicableWithComment} from '../../_properties/Property';
import type {PossibleCustomLimitWhilePlaying, PossibleEditorLimit, PossibleGeneralLimitWhilePlaying, PossibleGlobalGeneralLimitWhilePlaying, PossiblePowerUpLimitWhilePlaying, PossibleProjectileLimitWhilePlaying}                         from './LimitProperty';
import type {SingleLimitThatCanBeUnknownProperty}                                                                                                                                                                                           from './single/SingleLimitThatCanBeUnknownProperty';
import type {SingleLimitWithCommentProperty}                                                                                                                                                                                                from './single/SingleLimitWithCommentProperty';
import type {SingleLimitWithCommentThatCanBeUnknownProperty}                                                                                                                                                                                from './single/SingleLimitWithCommentThatCanBeUnknownProperty';

export type EditorLimitReceived = InferredStringPropertyThatCanBeNotApplicable<EditorLimitType>;
/** @deprecated */export type EditorLimitContainer = SingleLimitThatCanBeUnknownProperty<| PossibleEditorLimit | null>;

export type GeneralLimitReceived = | SingleGeneralLimitReceived | [regular: SingleGeneralLimitReceived, global: SingleGeneralGlobalLimitReceived,];
export type SingleGeneralLimitReceived = InferredBooleanPropertyWithAmountAndComment<GeneralEntityLimitType, null>;
/** @deprecated */export type SingleGeneralLimitContainer = SingleLimitWithCommentProperty<| PossibleGeneralLimitWhilePlaying | null>;
export type SingleGeneralGlobalLimitReceived = InferredBooleanPropertyWithComment<GeneralGlobalEntityLimitType, null>;
/** @deprecated */export type SingleGeneralGlobalLimitContainer = SingleLimitWithCommentProperty<| PossibleGlobalGeneralLimitWhilePlaying | null>;

export type PowerUpLimitReceived = InferredBooleanPropertyWithComment<PowerUpEntityLimitType, null>;
/** @deprecated */export type PowerUpLimitContainer = | SingleLimitWithCommentProperty<| PossiblePowerUpLimitWhilePlaying | null>;

export type ProjectileLimitReceived = InferredBooleanPropertyWithEverything<ProjectileEntityLimitType, null>;
/** @deprecated */export type ProjectileLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<| PossibleProjectileLimitWhilePlaying | null>;

export type CustomLimitReceived = InferredStringPropertyThatCanBeNotApplicableWithComment<CustomLimitType, CustomLimitCommentType>;
/** @deprecated */export type CustomLimitContainer = | SingleLimitWithCommentThatCanBeUnknownProperty<| PossibleCustomLimitWhilePlaying | null>;
