import file from 'resources/compiled/Medals (SMM).json'

import type {Medal}                                                                                             from 'core/medal/Medal'
import type {MedalTemplate, PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/Medal.template'
import type {PossibleEnglishName}                                                                               from 'core/medal/Medals.types'
import type {Loader}                                                                                            from 'util/loader/Loader'

import {isInProduction} from 'variables'
import {createContent}  from 'core/medal/Medal.creator'

/**
 *
 * @recursiveReference<{@link Medals}>
 * @singleton
 */
export class MedalLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Medal>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MedalLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Medal>

    public load(): ReadonlyMap<PossibleEnglishName, Medal> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Medal>()
        let index = file.length
        while (index-- > 0) {
            const reference = createContent(createTemplate(file[index] as Content,),)
            references.set(reference.imageName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "medal" has been loaded --------------------\n',
                references,
                '\n-------------------- "medal" has been loaded --------------------',
            )

        return this.#map = references

    }

}

interface Content {

    amountOfAllowedLevelToUpload: PossibleMaximumAmountAllowedToUploadALevel,
    amountOfStarReceived: PossibleAmountOfStarReceivedToUnlockIt,
    image: PossibleEnglishName

}

function createTemplate(content: Content,): MedalTemplate {
    return {
        amount: {
            allowedLevelToUpload: content.amountOfAllowedLevelToUpload,
            amountOfStarReceived: content.amountOfStarReceived,
        },
        imageName: content.image,
    }
}
