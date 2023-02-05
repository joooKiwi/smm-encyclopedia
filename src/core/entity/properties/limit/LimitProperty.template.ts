import type {CollectedCoinLimitType, EditorLimitType_SMM1And3DS, EditorLimitType_SMM2, GeneralEntityLimitType, GeneralGlobalEntityLimitType, LimitAmountType, OtherLimitCommentType, OtherLimitType, PowerUpLimitType, ProjectileEntityLimitType, RenderedObjectLimitType} from 'core/entity/properties/limit/loader.types'
import type {SimpleGameFrom1And2Template}                                                                                                                                                                                                                                  from 'core/game/SimpleGame.template'

/**
 * @template
 */
export interface LimitPropertyTemplate {

    amount: LimitAmountType

    editor: SimpleGameFrom1And2Template<EditorLimitType_SMM1And3DS, EditorLimitType_SMM2>

    whilePlaying: {
        isInGEL: GeneralEntityLimitTemplate
        isInPL: PowerUpLimitType
        isInPJL: ProjectileEntityLimitType
        isInRenderedObjectLimit: RenderedObjectLimitType
        isInCollectedCoinLimit: CollectedCoinLimitType
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
