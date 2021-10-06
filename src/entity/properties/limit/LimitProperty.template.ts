import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitCommentType, GeneralEntityLimitType, GeneralGlobalEntityLimitCommentType, GeneralGlobalEntityLimitType, LimitAmountCommentType, LimitAmountType, PowerUpEntityLimitCommentType, PowerUpEntityLimitType, ProjectileEntityLimitCommentType, ProjectileEntityLimitType} from './Loader.types';

/**
 * @template
 */
export interface LimitPropertyTemplate {

    amount: {
        value: LimitAmountType
        comment: LimitAmountCommentType
    }

    editor: EditorLimitType

    whilePlaying: {
        isInGEL: {
            value: LimitWithCommentTemplate<GeneralEntityLimitType, GeneralEntityLimitCommentType>
            isSuperGlobal: LimitWithCommentTemplate<GeneralGlobalEntityLimitType, GeneralGlobalEntityLimitCommentType>
        }
        isInPEL: LimitWithCommentTemplate<PowerUpEntityLimitType, PowerUpEntityLimitCommentType>
        isInPJL: LimitWithCommentTemplate<ProjectileEntityLimitType, ProjectileEntityLimitCommentType>
        customLimit: LimitWithCommentTemplate<CustomLimitType, CustomLimitCommentType>
    }

}

/**
 * @template
 */
export interface LimitWithCommentTemplate<TYPE extends | EditorLimitType | GeneralEntityLimitType | GeneralGlobalEntityLimitType | PowerUpEntityLimitType | ProjectileEntityLimitType | CustomLimitType,
    COMMENT extends | GeneralEntityLimitCommentType | GeneralGlobalEntityLimitCommentType | PowerUpEntityLimitCommentType | ProjectileEntityLimitCommentType | CustomLimitCommentType> {

    value: TYPE

    comment: | string | null

}
