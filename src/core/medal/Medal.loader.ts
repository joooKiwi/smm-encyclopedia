import file from 'resources/compiled/Medals (SMM).json'

import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {PossibleAmountOfStarReceivedToUnlockIt, PossibleMaximumAmountAllowedToUploadALevel} from 'core/medal/loader.types'
import type {Medal}                                                                              from 'core/medal/Medal'
import type {PossibleEnglishName}                                                                from 'core/medal/Medals.types'
import type {Loader}                                                                             from 'util/loader/Loader'

import {isInProduction}      from 'variables'
import {MedalContainer}      from 'core/medal/Medal.container'
import {Medals}              from 'core/medal/Medals'

import Companion = Medals.Companion

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

        const references = new Map<PossibleEnglishName, Medal>()
        forEachByArray(file as Array<Content>, content =>
            references.set(content.image, createReference(content,),),)

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

function createReference(content: Content,): Medal {
    const imageName = content.image

    return new MedalContainer(
        Companion.getValueByName(imageName,).associatedReference.reference,
        imageName,
        content.amountOfAllowedLevelToUpload,
        content.amountOfStarReceived,
    )
}
