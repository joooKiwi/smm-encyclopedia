import type {EntityLimitLink, PossibleEntityLink, PossibleGroupLink} from './EntityLimitLink';
import type {ObjectHolder}                                           from '../../../util/holder/ObjectHolder';

export class EntityLimitLinkContainer<GROUP extends PossibleGroupLink = PossibleGroupLink,
    ENTITY extends PossibleEntityLink = PossibleEntityLink, >
    implements EntityLimitLink<GROUP, ENTITY> {

    readonly #group;
    readonly #entity;

    public constructor(group: ObjectHolder<GROUP>, entity: ObjectHolder<ENTITY>,) {
        this.#group = group;
        this.#entity = entity;
    }

    public get group() {
        return this.#group.get;
    }

    public get entity() {
        return this.#entity.get;
    }

}
