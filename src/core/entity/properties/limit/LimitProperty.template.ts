import type {OtherLimitCommentType, OtherLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, PowerUpEntityLimitType, ProjectileEntityLimitType} from './Loader.types';

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
        otherLimit: OtherLimitTemplate
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
export interface OtherLimitTemplate {

    value: OtherLimitType

    comment: OtherLimitCommentType

}
