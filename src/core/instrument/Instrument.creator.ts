import {CommonLazy} from '@joookiwi/lazy'

import type {Instrument}         from 'core/instrument/Instrument'
import type {InstrumentTemplate} from 'core/instrument/Instrument.template'

import {InstrumentContainer}  from 'core/instrument/Instrument.container'
import {NameBuilderContainer} from 'lang/name/Name.builder.container'

export function createContent(template: InstrumentTemplate,): Instrument {
    return new InstrumentContainer(
        new NameBuilderContainer(template.name, 'all', false,).build(),
        CommonLazy.EMPTY_ARRAY, //TODO add other entity references by the instrument
    )
}
