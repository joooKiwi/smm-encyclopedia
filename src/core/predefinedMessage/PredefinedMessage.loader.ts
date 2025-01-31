import file from 'resources/compiled/Predefined message (SMM2).json'

import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {PredefinedMessage}   from 'core/predefinedMessage/PredefinedMessage'
import type {PossibleEnglishName} from 'core/predefinedMessage/PredefinedMessages.types'
import type {Loader}              from 'util/loader/Loader'

import {isInDevelopment}            from 'variables'
import {PredefinedMessageContainer} from 'core/predefinedMessage/PredefinedMessage.container'
import {createNameFromContent}      from 'lang/name/createNameFromContent'
import {LanguageContent}            from 'core/_template/LanguageContent'

/** @singleton */
export class PredefinedMessageLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, PredefinedMessage>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: PredefinedMessageLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, PredefinedMessage>

    public load(): ReadonlyMap<PossibleEnglishName, PredefinedMessage> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, PredefinedMessage>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (isInDevelopment)
            console.info(
                '-------------------- "predefined message" has been loaded --------------------\n',
                references,
                '\n-------------------- "predefined message" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {

    //region -------------------- Language --------------------

    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null

    readonly german: string

    readonly italian: string

    readonly dutch: string

    readonly portuguese: null
    readonly americanPortuguese: null
    readonly europeanPortuguese: null

    readonly russian: string

    readonly japanese: string

    readonly korean: string

    //endregion -------------------- Language --------------------

}

function createReference(content: Content,): PredefinedMessage {
    return new PredefinedMessageContainer(createNameFromContent(content, 2, true,),)
}
