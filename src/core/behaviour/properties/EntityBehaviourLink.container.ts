import type {Entity}                            from '../../entity/Entity';
import type {EntityBehaviourLink}               from './EntityBehaviourLink';
import type {ObjectHolder}                      from '../../../util/holder/ObjectHolder';
import type {PossibleEnglishName as EntityName} from '../../entity/Entities.types';
import type {PossibleGroupName}                 from '../../entityTypes';

import {assert}                       from '../../../util/utilitiesMethods';
import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container';
import {Entities}                     from '../../entity/Entities';
import {ObjectHolders}                from '../../../util/holder/objectHolders';

/**
 * @todo change the predefined to be in a map instead
 * @multiton
 * @provider
 */
export class EntityBehaviourLinkContainer
    implements EntityBehaviourLink {

    //region -------------------- Predefined containers --------------------

    static readonly #IS_IN_NONE =               new EntityBehaviourLinkContainer(null,        null,             );

    static readonly #VINE_LINK =                new EntityBehaviourLinkContainer(null,        'Vine',           );
    static readonly #QUESTION_MARK_BLOCK_LINK = new EntityBehaviourLinkContainer(null,        '? Block',        );
    static readonly #PINK_COIN_LINK =           new EntityBehaviourLinkContainer(null,        'Pink Coin',      );
    static readonly #CHECKPOINT_FLAG_LINK =     new EntityBehaviourLinkContainer(null,        'Checkpoint Flag',);

    static readonly #COINS_LINK =               new EntityBehaviourLinkContainer('Coins',     null,             );
    static readonly #POWER_UPS_LINK =           new EntityBehaviourLinkContainer('Power-ups', null,             );

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Fields, constructor & methods --------------------

    readonly #groupLinkHolder: ObjectHolder<| object | null>;
    readonly #entityLinkHolder: ObjectHolder<| Entity | null>;

    private constructor(groupLink: | PossibleGroupName | null, entityLink: | EntityName | null,) {
        this.#groupLinkHolder = groupLink == null ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => EntityBehaviourLinkContainer.#getEntityGroupByName(groupLink));
        this.#entityLinkHolder = entityLink == null ? ObjectHolders.NULL : new DelayedObjectHolderContainer(() => EntityBehaviourLinkContainer.#getEntityByName(entityLink));
    }


    public get groupLink() {
        return this.#groupLinkHolder.get;
    }

    public get entityLink() {
        return this.#entityLinkHolder.get;
    }


    static #getEntityGroupByName(name: PossibleGroupName,): object {
        return {};//TODO implement this methods when the group name is added.
    }

    static #getEntityByName(name: EntityName,): Entity {
        return Entities.getValue(name).reference;
    }

    //endregion -------------------- Fields, constructor & methods --------------------

    public static get(groupLink: | PossibleGroupName | null, entityLink: | EntityName | null,): EntityBehaviourLink {
        if (groupLink == null && entityLink == null)
            return this.#IS_IN_NONE;

        if (groupLink != null)
            switch (groupLink) {
                case 'Coins':
                    return this.#COINS_LINK;
                case 'Power-ups':
                    return this.#POWER_UPS_LINK;
            }
        if (entityLink != null)
            switch (entityLink) {
                case 'Vine':
                    return this.#VINE_LINK;
                case 'Pink Coin':
                    return this.#PINK_COIN_LINK;
                case '? Block':
                    return this.#QUESTION_MARK_BLOCK_LINK;
                case 'Checkpoint Flag':
                    return this.#CHECKPOINT_FLAG_LINK;
            }

        assert(false, `No predefined behaviour (link) container is compatible with ("${groupLink}" & "${entityLink}").`,);
    }

}