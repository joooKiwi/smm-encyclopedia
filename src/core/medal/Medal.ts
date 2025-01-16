import type {PossibleEnglishName}                                                                from 'core/medal/Medals.types'
import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/loader.types'
import type {NameTrait}                                                                          from 'lang/name/NameTrait'

export interface Medal
    extends NameTrait<string> {

    readonly imageName: PossibleEnglishName
    readonly maximumAmountAllowedToUploadALevel: PossibleMaximumAmountAllowedToUploadALevel
    readonly amountOfStarReceivedToUnlockIt: PossibleAmountOfStarReceivedToUnlockIt

}
