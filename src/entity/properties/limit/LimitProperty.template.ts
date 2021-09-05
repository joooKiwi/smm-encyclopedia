import type {CustomLimitType, EditorLimitType, GeneralEntityLimitType, GeneralGlobalEntityLimitType, PowerUpEntityLimitType, ProjectileEntityLimitType} from './Loader.types';
import {LimitAmountCommentType, PossibleLimitAmount}                                                                                                    from './Loader.types';

export interface LimitPropertyTemplate {

    amount: {
        value: PossibleLimitAmount
        comment: LimitAmountCommentType
    }

    editor: EditorLimitType

    whilePlaying: {
        isInGEL: {
            value: LimitWithComment<GeneralEntityLimitType>
            isSuperGlobal: LimitWithComment<GeneralGlobalEntityLimitType>
        }
        isInPEL: LimitWithComment<PowerUpEntityLimitType>
        isInPJL: LimitWithComment<ProjectileEntityLimitType>
        customLimit: LimitWithComment<CustomLimitType>
    }

}

export interface LimitWithComment<T extends | EditorLimitType | GeneralEntityLimitType | GeneralGlobalEntityLimitType | PowerUpEntityLimitType | ProjectileEntityLimitType | CustomLimitType> {
    value: T
    comment: | string | null
}
