import file from 'resources/compiled/Instrument.json'

import {CommonLazy} from '@joookiwi/lazy'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {Instrument}          from 'core/instrument/Instrument'
import type {PossibleEnglishName} from 'core/instrument/Instruments.types'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}        from 'variables'
import {InstrumentContainer}   from 'core/instrument/Instrument.container'
import {createNameFromContent} from 'lang/name/createNameFromContent'

/** @singleton */
export class InstrumentLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, Instrument>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: InstrumentLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, Instrument>

    public load(): ReadonlyMap<PossibleEnglishName, Instrument> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, Instrument>()
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

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

function createReference(content: Content,): Instrument {
    return new InstrumentContainer(
        createNameFromContent(content, 'all', false,),
        CommonLazy.EMPTY_ARRAY, //TODO add other entity references by the instrument
    )
}
