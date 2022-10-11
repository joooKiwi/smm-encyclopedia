import type {Entity}                                    from '../entity/Entity'
import type {Instrument}                                from './Instrument'
import type {ObjectHolder, PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'
import type {Name}                                      from '../../lang/name/Name'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'

export class InstrumentContainer
    extends ClassContainingAName<string>
    implements Instrument {

    //region -------------------- Fields --------------------

    readonly #entitiesHolder

    //endregion -------------------- Fields --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<string>>, entities: ObjectHolder<readonly Entity[]>,) {
        super(name,)
        this.#entitiesHolder = entities
    }

    //region -------------------- Getter methods --------------------

    public get entities(): readonly Entity[] {
        return this.#entitiesHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
