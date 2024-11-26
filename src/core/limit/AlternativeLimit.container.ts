import type {NullOr} from '@joookiwi/type'

import type {AlternativeLimit}           from 'core/limit/AlternativeLimit'
import type {PossibleAlternativeAcronym} from 'core/limit/Limits.types'
import type {Name}                       from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class AlternativeLimitContainer
    extends ClassContainingAName<string>
    implements AlternativeLimit {

    //region -------------------- Fields --------------------

    readonly #acronym

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, acronym: NullOr<PossibleAlternativeAcronym>,) {
        super(name,)
        this.#acronym = acronym
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get acronym(): NullOr<PossibleAlternativeAcronym> {
        return this.#acronym
    }

    //endregion -------------------- Getter methods --------------------

}
