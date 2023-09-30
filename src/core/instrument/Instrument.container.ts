import type {Lazy} from '@joookiwi/lazy'

import type {Entity}     from 'core/entity/Entity'
import type {Instrument} from 'core/instrument/Instrument'
import type {Name}       from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class InstrumentContainer
    extends ClassContainingAName<string>
    implements Instrument {

    readonly #entitiesHolder

    public constructor(name: Name<string>, entities: Lazy<readonly Entity[]>,) {
        super(name,)
        this.#entitiesHolder = entities
    }

    public get entities(): readonly Entity[] {
        return this.#entitiesHolder.value
    }

}
