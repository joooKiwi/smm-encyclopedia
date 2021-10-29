import type {CustomLimitCommentType, CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, PowerUpEntityLimitType, ProjectileEntityLimitType} from './Loader.types';

/**
 * @template
 */
export interface LimitPropertyTemplate {

    amount: LimitAmountType

    editor: EditorLimitType

    whilePlaying: {
        isInGEL: GeneralEntityLimitTemplate
        isInPEL: PowerUpEntityLimitType
        isInPJL: ProjectileEntityLimitType
        customLimit: CustomLimitTemplate
    }

}

/**
 * @template
 */
export interface GeneralEntityLimitTemplate {

    value: GeneralEntityLimitType

    isSuperGlobal: GeneralGlobalEntityLimitType

}

/**
 * @template
 */
export interface CustomLimitTemplate {

    value: CustomLimitType

    comment: CustomLimitCommentType

}
