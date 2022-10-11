import type {Builder}            from '../../util/builder/Builder'
import type {Entity}             from '../entity/Entity'
import type {Instrument}         from './Instrument'
import type {InstrumentTemplate} from './Instrument.template'
import type {Name}               from '../../lang/name/Name'
import type {ObjectHolder}       from '../../util/holder/ObjectHolder'

import {InstrumentContainer}     from './Instrument.container'
import {ObjectHolders}           from '../../util/holder/objectHolders'
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder'

export class InstrumentBuilder
    extends TemplateWithNameBuilder<InstrumentTemplate, Instrument> {

    public constructor(templateBuilder_or_template: Builder<InstrumentTemplate> | InstrumentTemplate,) {
        super(templateBuilder_or_template, 'all', false,)
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return InstrumentBuilder
    }


    static #getEntitiesReference(template: InstrumentTemplate,): ObjectHolder<readonly Entity[]> {
        //TODO add other entity references by the instrument
        return ObjectHolders.EMPTY_ARRAY
    }

    //endregion -------------------- Build helper methods --------------------

    protected _build(name: Name<string>,): Instrument {
        return new InstrumentContainer(
            name,
            InstrumentBuilder.#getEntitiesReference(this.template),
        )
    }

}