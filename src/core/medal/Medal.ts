import type {PossibleEnglishName}                                                                from 'core/medal/Medals.types'
import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/Medal.template'
import type {NameTrait}                                                                          from 'lang/name/NameTrait'

export interface Medal
    extends NameTrait<string> {

    get imageName(): PossibleEnglishName

    get maximumAmountAllowedToUploadALevel(): PossibleMaximumAmountAllowedToUploadALevel

    get amountOfStarReceivedToUnlockIt(): PossibleAmountOfStarReceivedToUnlockIt

}
