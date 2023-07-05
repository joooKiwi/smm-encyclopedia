import type {Lazy} from '@joookiwi/lazy'

import type {EntityBehaviourLink, PossibleGroup} from 'core/behaviour/properties/EntityBehaviourLink'
import type {Entity}                             from 'core/entity/Entity'
import type {NullOr}                             from 'util/types/nullable'

export class EntityBehaviourLinkContainer<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends NullOr<Entity> = NullOr<Entity>, >
    implements EntityBehaviourLink<GROUP, ENTITY> {

    //region -------------------- Fields --------------------

    readonly #groupLinkHolder
    readonly #entityLinkHolder

    //endregion -------------------- Fields --------------------

    constructor(groupLink: Lazy<GROUP>, entityLink: Lazy<ENTITY>,) {
        this.#groupLinkHolder = groupLink
        this.#entityLinkHolder = entityLink
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get groupLink() {
        return this.#groupLinkHolder.value
    }

    public get entityLink() {
        return this.#entityLinkHolder.value
    }

    //endregion -------------------- Getter methods --------------------

}
