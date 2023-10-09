import file from 'resources/compiled/Predefined message (SMM2).json'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {PredefinedMessage}   from 'core/predefinedMessage/PredefinedMessage'
import type {PossibleEnglishName} from 'core/predefinedMessage/PredefinedMessages.types'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}                  from 'variables'
import {PredefinedMessageContainer}      from 'core/predefinedMessage/PredefinedMessage.container'
import {NameFromContentBuilderContainer} from 'lang/name/NameFromContent.builder.container'

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
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "predefined message" has been loaded --------------------\n',
                references,
                '\n-------------------- "predefined message" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {}

function createReference(content: Content,): PredefinedMessage {
    return new PredefinedMessageContainer(new NameFromContentBuilderContainer(content, 2, true,).build(),)
}
