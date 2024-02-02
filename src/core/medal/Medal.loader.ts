import file from 'resources/compiled/Medals (SMM).json'

import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/loader.types'
import type {Medal}                                                                              from 'core/medal/Medal'
import type {PossibleEnglishName}                                                                from 'core/medal/Medals.types'
import type {Loader}                                                                             from 'util/loader/Loader'

import {isInProduction}      from 'variables'
import {MedalContainer}      from 'core/medal/Medal.container'
import {Medals}              from 'core/medal/Medals'
import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

/**
 * @dependsOn<{@link Medals}>
 * @indirectlyDependsOn<{@link CharacterNameLoader}>
 * @indirectlyDependsOn<{@link CharacterNames}>
 * @indirectlyDependsOn<{@link Entities}>
 * @indirectlyDependsOn<{@link EntityLoader}>
 * @recursiveReference<{@link Medals}>
 * @singleton
 */
export class MedalLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Medal>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MedalLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Medal>

    public load(): ReadonlyMap<PossibleEnglishName, Medal> {
        if (this.#map != null)
            return this.#map

        const medalCompanion = Medals.CompanionEnum.get
        const references = new Map<PossibleEnglishName, Medal>()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            references.set(content.image, createReference(content, medalCompanion,),)
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

    readonly amountOfAllowedLevelToUpload: PossibleMaximumAmountAllowedToUploadALevel
    readonly amountOfStarReceived: PossibleAmountOfStarReceivedToUnlockIt
    readonly image: PossibleEnglishName

}

/** A type-alias definition of the {@link Medals.CompanionEnum} */
type MedalCompanion = CompanionEnumByName<Medals, typeof Medals>

function createReference(content: Content, medalCompanion: MedalCompanion,): Medal {
    const imageName = content.image

    return new MedalContainer(
        medalCompanion.getValueByName(imageName,).associatedReference.reference,
        imageName,
        content.amountOfAllowedLevelToUpload,
        content.amountOfStarReceived,
    )
}
