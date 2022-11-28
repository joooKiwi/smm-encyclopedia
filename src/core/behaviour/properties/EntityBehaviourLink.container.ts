import type {Entity}                             from '../../entity/Entity'
import type {EntityBehaviourLink, PossibleGroup} from './EntityBehaviourLink'
import type {NullOr}                             from '../../../util/types'
import type {ObjectHolder}                       from '../../../util/holder/ObjectHolder'

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
