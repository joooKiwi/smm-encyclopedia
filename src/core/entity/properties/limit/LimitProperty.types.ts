import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                                      from './Loader.types';
import type {EntityLimits}                                                                                                                                                                                           from '../../../limit/EntityLimits';
import type {InferredBooleanPropertyThatCanBeNotApplicableWithComment, InferredBooleanPropertyWithEverything, InferredStringPropertyThatCanBeNotApplicable, InferredStringPropertyThatCanBeNotApplicableWithComment} from '../../../_properties/Property';
import type {PropertyThatCanBeUnknown}                                                                                                                                                                               from '../../../_properties/PropertyThatCanBeUnknown';
import type {PropertyThatCanBeUnknownWithComment}                                                                                                                                                                    from '../../../_properties/PropertyThatCanBeUnknownWithComment';
import type {PossibleEnglishName}                                                                                                                                                                                    from '../../../limit/EntityLimits.types';

export type CallbackToGetEntityLimit = (entityLimit: PossibleEnglishName,) => EntityLimits;

export type EditorLimitReceived = [value: EditorLimitType, callback: CallbackToGetEntityLimit,];
export type EditorLimitContainer<T extends EditorLimitType = EditorLimitType, > = T extends PossibleEnglishName ? PropertyThatCanBeUnknown<EntityLimits> : InferredStringPropertyThatCanBeNotApplicable<T>;

export type GeneralLimitReceived = | SingleGeneralLimitReceived | readonly [regular: SingleGeneralLimitReceived, global: SingleGeneralGlobalLimitReceived,];
export type SingleGeneralLimitReceived = GeneralEntityLimitType;
export type SingleGeneralLimitContainer<T extends GeneralEntityLimitType = GeneralEntityLimitType, > = InferredBooleanPropertyWithEverything<T, null>;
export type SingleGeneralGlobalLimitReceived = GeneralGlobalEntityLimitType;
export type SingleGeneralGlobalLimitContainer<T extends GeneralGlobalEntityLimitType = GeneralGlobalEntityLimitType, > = InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, null>;

export type PowerUpLimitReceived = PowerUpEntityLimitType;
export type PowerUpLimitContainer<T extends PowerUpEntityLimitType = PowerUpEntityLimitType, > = InferredBooleanPropertyThatCanBeNotApplicableWithComment<T, null>;

export type ProjectileLimitReceived = ProjectileEntityLimitType
export type ProjectileLimitContainer<T extends ProjectileEntityLimitType = ProjectileEntityLimitType, > = InferredBooleanPropertyWithEverything<T, null>;

export type CustomLimitReceived = [value: CustomLimitType, comment: CustomLimitCommentType, callback: CallbackToGetEntityLimit,];
export type CustomLimitContainer<T extends CustomLimitType = CustomLimitType, C extends CustomLimitCommentType = CustomLimitCommentType, > = T extends PossibleEnglishName ? PropertyThatCanBeUnknownWithComment<EntityLimits, false, C> : InferredStringPropertyThatCanBeNotApplicableWithComment<T, C>;
