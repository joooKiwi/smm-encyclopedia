import type {Entity}             from 'core/entity/Entity'
import type {Instrument}         from 'core/instrument/Instrument'
import type {InstrumentTemplate} from 'core/instrument/Instrument.template'
import type {Name}               from 'lang/name/Name'
import type {ObjectHolder}       from 'util/holder/ObjectHolder'

import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {InstrumentContainer}     from 'core/instrument/Instrument.container'
import {ObjectHolders}           from 'util/holder/ObjectHolders'

export class InstrumentCreator
    extends TemplateWithNameCreator<InstrumentTemplate, Instrument> {

    public constructor(template: InstrumentTemplate,) {
        super(template, 'all', false,)
    }

    //region -------------------- Build helper methods --------------------

    static #getEntitiesReference(template: InstrumentTemplate,): ObjectHolder<readonly Entity[]> {
        //TODO add other entity references by the instrument
        return ObjectHolders.EMPTY_ARRAY
    }

    //endregion -------------------- Build helper methods --------------------

    protected _create(name: Name<string>,): Instrument {
        return new InstrumentContainer(
            name,
            InstrumentCreator.#getEntitiesReference(this.template),
        )
    }

}