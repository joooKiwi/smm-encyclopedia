import type {EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, OtherLimitCommentType, OtherLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType, RenderedObjectLimitType} from './Loader.types';
import type {SimpleGameFrom1And2Template}                                                                                                                                                                                                                from '../../../game/SimpleGame.template';

/**
 * @template
 */
export interface LimitPropertyTemplate {

    amount: LimitAmountType

    editor: SimpleGameFrom1And2Template<EditorLimitType_SMM1And3DS, EditorLimitType_SMM2>

    whilePlaying: {
        isInGEL: GeneralEntityLimitTemplate
        isInPEL: PowerUpEntityLimitType
        isInPJL: ProjectileEntityLimitType
        isInRenderedObjectLimit: RenderedObjectLimitType
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
