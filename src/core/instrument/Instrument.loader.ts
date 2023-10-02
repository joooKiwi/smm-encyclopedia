import file from 'resources/compiled/Instrument.json'

import type {LanguageContent}     from 'core/_template/LanguageContent'
import type {Instrument}          from 'core/instrument/Instrument'
import type {PossibleEnglishName} from 'core/instrument/Instruments.types'
import type {InstrumentTemplate}  from 'core/instrument/Instrument.template'
import type {Loader}              from 'util/loader/Loader'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import * as TemplateMethods      from 'core/_template/templateMethods'
import {InstrumentCreator}       from 'core/instrument/Instrument.creator'

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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, Instrument>()

            file.map(it => new InstrumentCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "instrument" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "instrument" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent {}

class TemplateCreator
    extends AbstractTemplateCreator<InstrumentTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): InstrumentTemplate {
        const content = this._content

        return {
            name: TemplateMethods.createNameTemplate(content,),
        }
    }

}
