import {EntityBehaviourLink}                 from './EntityBehaviourLink';
import {Entity}                              from '../../simple/Entity';
import {PossibleGroupName, SingleEntityName} from '../../entityTypes';
import {EntityLoader}                        from '../../simple/EntityLoader';

/**
 * @multiton
 * @provider
 */
export class EntityBehaviourLinkContainer
    implements EntityBehaviourLink {

    //region -------------------- predefined containers --------------------

    static readonly #IS_IN_NONE =               new EntityBehaviourLinkContainer(null,        null,             );

    static readonly #VINE_LINK =                new EntityBehaviourLinkContainer(null,        'Vine',           );
    static readonly #QUESTION_MARK_BLOCK_LINK = new EntityBehaviourLinkContainer(null,        '? Block',        );
    static readonly #PINK_COIN_LINK =           new EntityBehaviourLinkContainer(null,        'Pink Coin',      );
    static readonly #CHECKPOINT_FLAG_LINK =     new EntityBehaviourLinkContainer(null,        'Checkpoint Flag',);

    static readonly #COINS_LINK =               new EntityBehaviourLinkContainer('Coins',     null,             );
    static readonly #POWER_UPS_LINK =           new EntityBehaviourLinkContainer('Power-ups', null,             );


    //endregion -------------------- predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #groupLink;
    readonly #entityLink;

    private constructor(groupLink: | PossibleGroupName | null, entityLink: | SingleEntityName | null,) {
        this.#groupLink = groupLink == null ? null : EntityBehaviourLinkContainer.__getEntityGroupByName(groupLink);
        this.#entityLink = entityLink == null ? null : EntityBehaviourLinkContainer.__getEntityByName(entityLink);
    }


    public get groupLink() {
        return this.#groupLink;
    }

    public get entityLink() {
        return this.#entityLink;
    }


    private static __getEntityGroupByName(name: PossibleGroupName,): object {
        return {};//TODO implement this methods when the group name is added.
    }

    private static __getEntityByName(name: SingleEntityName,): Entity {
        return EntityLoader.get.load().get(name)!.entity!;
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------

    public static get(groupLink: | PossibleGroupName | null, entityLink: | SingleEntityName | null,): EntityBehaviourLink {
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

        throw new ReferenceError(`No predefined behaviour (link) container is compatible with ("${groupLink}" & "${entityLink}").`);
    }

}