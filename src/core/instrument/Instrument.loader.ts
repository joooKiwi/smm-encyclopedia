import file from 'resources/compiled/Instrument.json'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {Instrument}          from 'core/instrument/Instrument'
import type {PossibleEnglishName} from 'core/instrument/Instruments.types'
import type {InstrumentTemplate}  from 'core/instrument/Instrument.template'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {InstrumentCreator}  from 'core/instrument/Instrument.creator'

/**
 * @singleton
 * @recursiveReference<{@link Instruments}>
 */
export class InstrumentLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Instrument>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Instrument>

    public load(): ReadonlyMap<PossibleEnglishName, Instrument> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Instrument>()

        file.map(it => new InstrumentCreator(createTemplate(it as Content,),).create(),)
            .forEach(it => references.set(it.english as PossibleEnglishName, it,))

        if (!isInProduction)
            console.info(
                '-------------------- "instrument" has been loaded --------------------\n',
                references,
                '\n-------------------- "instrument" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent {}

function createTemplate(content: Content,): InstrumentTemplate {
    return {
        name: TemplateMethods.createNameTemplate(content,),
    }
}
