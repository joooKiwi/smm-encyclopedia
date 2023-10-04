import type {PossibleEnglishName} from 'core/medal/Medals.types'

export interface MedalTemplate {

    amount: {
        allowedLevelToUpload: PossibleMaximumAmountAllowedToUploadALevel
        amountOfStarReceived: PossibleAmountOfStarReceivedToUnlockIt
    }

    imageName: PossibleEnglishName

}

export type PossibleMaximumAmountAllowedToUploadALevel = | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
export type PossibleAmountOfStarReceivedToUnlockIt = | 1 | 50 | 150 | 300 | 500 | 800 | 1300 | 2000 | 3000 | 5000
