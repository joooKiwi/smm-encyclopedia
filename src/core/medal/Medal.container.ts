import type {Medal}                                                                              from 'core/medal/Medal'
import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/Medal.template'
import type {PossibleEnglishName}                                                                from 'core/medal/Medals.types'
import type {Entity}                                                                             from 'core/entity/Entity'
import type {CharacterName}                                                                      from 'core/characterName/CharacterName'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class MedalContainer
    extends ClassContainingAName<string>
    implements Medal {

    //region -------------------- Fields --------------------

    readonly #imageName
    readonly #maximumAmountAllowedToUploadALevel
    readonly #amountOfStarReceivedToUnlockIt

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(associatedReference: | Entity | CharacterName,
                       imageName: PossibleEnglishName,
                       maximumAmountAllowedToUploadALevel: PossibleMaximumAmountAllowedToUploadALevel,
                       amountOfStarReceivedToUnlockIt: PossibleAmountOfStarReceivedToUnlockIt,) {
        super(associatedReference,)
        this.#imageName = imageName
        this.#maximumAmountAllowedToUploadALevel = maximumAmountAllowedToUploadALevel
        this.#amountOfStarReceivedToUnlockIt = amountOfStarReceivedToUnlockIt
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get imageName(): PossibleEnglishName {
        return this.#imageName
    }

    public get maximumAmountAllowedToUploadALevel(): PossibleMaximumAmountAllowedToUploadALevel {
        return this.#maximumAmountAllowedToUploadALevel
    }

    public get amountOfStarReceivedToUnlockIt(): PossibleAmountOfStarReceivedToUnlockIt {
        return this.#amountOfStarReceivedToUnlockIt
    }

    //endregion -------------------- Getter methods --------------------

}
