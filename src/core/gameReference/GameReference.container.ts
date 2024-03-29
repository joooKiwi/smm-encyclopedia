import type {GameReference}   from 'core/gameReference/GameReference'
import type {PossibleAcronym} from 'core/gameReference/GameReferences.types'
import type {Name}            from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class GameReferenceContainer
    extends ClassContainingAName<string>
    implements GameReference {

    //region -------------------- Fields --------------------

    readonly #acronym

    //endregion -------------------- Fields --------------------

    public constructor(acronym: PossibleAcronym, name: Name<string>,) {
        super(name,)
        this.#acronym = acronym
    }

    //region -------------------- Getter methods --------------------

    public get acronym() {
        return this.#acronym
    }

    //endregion -------------------- Getter methods --------------------

}
