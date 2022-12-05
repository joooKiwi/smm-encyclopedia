import type {EntityBehaviourLink, PossibleGroup} from 'core/behaviour/properties/EntityBehaviourLink'
import type {Entity}                             from 'core/entity/Entity'
import type {ObjectHolder}                       from 'util/holder/ObjectHolder'
import type {NullOr}                             from 'util/types/nullable'

export class EntityBehaviourLinkContainer<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends NullOr<Entity> = NullOr<Entity>, >
    implements EntityBehaviourLink<GROUP, ENTITY> {

    //region -------------------- Fields --------------------

    readonly #groupLinkHolder
    readonly #entityLinkHolder

    //endregion -------------------- Fields --------------------

    constructor(groupLink: ObjectHolder<GROUP>, entityLink: ObjectHolder<ENTITY>,) {
        this.#groupLinkHolder = groupLink
        this.#entityLinkHolder = entityLink
    }

    //region -------------------- Getter methods --------------------

    public get groupLink() {
        return this.#groupLinkHolder.get
    }

    public get entityLink() {
        return this.#entityLinkHolder.get
    }

    //endregion -------------------- Getter methods --------------------

}
