import {EntityLimitLink, PossibleEntityLink, PossibleGroupLink} from './EntityLimitLink';

export class EntityLimitLinkContainer<GROUP extends PossibleGroupLink = PossibleGroupLink,
    ENTITY extends PossibleEntityLink = PossibleEntityLink, >
    implements EntityLimitLink<GROUP, ENTITY> {

    readonly #group;
    readonly #entity;

    public constructor(group: GROUP, entity: ENTITY,) {
        this.#group = group;
        this.#entity = entity;
    }

    public get group() {
        return this.#group;
    }

    public get entity() {
        return this.#entity;
    }

}
