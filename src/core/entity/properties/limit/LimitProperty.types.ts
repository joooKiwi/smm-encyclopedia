import type {EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType}                                        from './Loader.types';
import type {EntityLimits}                                                                                                                                                                                           from '../../../entityLimit/EntityLimits';
import type {InferredBooleanPropertyThatCanBeNotApplicableWithComment, InferredBooleanPropertyWithEverything, InferredStringPropertyThatCanBeNotApplicable, InferredStringPropertyThatCanBeNotApplicableWithComment} from '../../../_properties/Property';
import type {PropertyThatCanBeUnknown}                                                                                                                                                                               from '../../../_properties/PropertyThatCanBeUnknown';
import type {PropertyThatCanBeUnknownWithComment}                                                                                                                                                                    from '../../../_properties/PropertyThatCanBeUnknownWithComment';
import type {PossibleEnglishName}                                                                                                                                                                                    from '../../../entityLimit/EntityLimits.types';

export type CallbackToGetEntityLimit = (entityLimit: PossibleEnglishName,) => EntityLimits;

export type EditorLimitReceived = readonly [value: EditorLimitType, callback: CallbackToGetEntityLimit,];
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

export type OtherLimitReceived = readonly [value: OtherLimitType, comment: OtherLimitCommentType, callback: CallbackToGetEntityLimit,];
export type OtherLimitContainer<T extends OtherLimitType = OtherLimitType, C extends OtherLimitCommentType = OtherLimitCommentType, > = T extends PossibleEnglishName ? PropertyThatCanBeUnknownWithComment<EntityLimits, false, C> : InferredStringPropertyThatCanBeNotApplicableWithComment<T, C>;
