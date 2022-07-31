import type {EntityBehaviourLink, PossibleEntity, PossibleGroup} from './EntityBehaviourLink';
import type {ObjectHolder}                                       from '../../../util/holder/ObjectHolder';
import type {PossibleEnglishName as PossibleEntityName}          from '../../entity/Entities.types';
import type {PossibleGroupName}                                  from '../../entityTypes';
import type {ProviderForNullable}                                from '../../../util/provider/ProviderForNullable';
import type {ProviderWithKey}                                    from '../../../util/provider/ProviderWithKey';

import {AbstractProvider}             from '../../../util/provider/AbstractProvider';
import {EntityBehaviourLinkContainer} from './EntityBehaviourLink.container';
import {ObjectHolders}                from '../../../util/holder/objectHolders';

/**
 * An entity behaviour link {@link Provider}.
 *
 * It can create multiple instances based on the arguments received:
 * <ol>
 *     <li><b>null</b>, <b>null</b></li>
 *     <li><b>null</b>, {@link Entities.VINE Vine}</li>
 *     <li><b>null</b>, {@link Entities.QUESTION_MARK_BLOCK ? Block}</li>
 *     <li><b>null</b>, {@link Entities.PINK_COIN Pink Coin}</li>
 *     <li><b>null</b>, {@link Entities.CHECKPOINT_FLAG Checkpoint Flag}</li>
 *     <li>{@link EntityGroups.COINS Coins}, <b>null</b></li>
 *     <li>{@link EntityGroups.POWER_UPS Power-ups}, <b>null</b></li>
 * </ol>
 *
 * @singleton
 */
export class EntityBehaviourLinkProvider
    extends AbstractProvider<Key, EntityBehaviourLink>
    implements ProviderWithKey<EntityBehaviourLink, Key, ArgumentsReceived>, ProviderForNullable<EntityBehaviourLink, EntityBehaviourLink<null, null>, Key> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLinkProvider;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    static #NULL_KEYS = [null, null,] as const;
    static #NULL_ARGUMENTS = [ObjectHolders.NULL, ObjectHolders.NULL,] as const;

    public get null() {
        return this.get(EntityBehaviourLinkProvider.#NULL_KEYS, ...EntityBehaviourLinkProvider.#NULL_ARGUMENTS,);
    }

    /**
     * Get (or create) a null {@link EntityBehaviourLink}
     *
     * @param key the null keys
     * @param argumentsReceived the null arguments
     * @see EntityBehaviourLinkProvider.null
     */
    public get(key: Key<null, null>, ...argumentsReceived: ArgumentsReceived<null, null>): EntityBehaviourLink<null, null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with no group.
     *
     * @param key The null group & nullable entity names
     * @param argumentsReceived The null group & nullable entity
     */
    public get(key: Key<null>, ...argumentsReceived: ArgumentsReceived<null>): EntityBehaviourLink<null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with no entity.
     *
     * @param key The nullable group & null entity names
     * @param argumentsReceived The nullable group & null entity
     */
    public get(key: Key<| PossibleGroupName | null, null>, ...argumentsReceived: ArgumentsReceived<PossibleGroup, null>): EntityBehaviourLink<PossibleGroup, null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with a nullable group & a nullable entity.
     *
     * @param key The nullable group & entity names
     * @param argumentsReceived The nullable group & entity
     */
    public get(key: Key, ...argumentsReceived: ArgumentsReceived): EntityBehaviourLink
    public get(key: Key, ...argumentsReceived: ArgumentsReceived): EntityBehaviourLink {
        return this.everyContainers.if(map => map.has(key))
            .isNotMet(map => map.set(key, new EntityBehaviourLinkContainer(...argumentsReceived),))
            .get(key);
    }

}

type Key<GROUP extends | PossibleGroupName | null = PossibleGroupName | null, ENTITY extends | PossibleEntityName | null = | PossibleEntityName | null, > = readonly [
    groupLink: GROUP,
    entityLink: ENTITY,
];
type ArgumentsReceived<GROUP extends PossibleGroup = PossibleGroup, ENTITY extends PossibleEntity = PossibleEntity, > = readonly [
    groupLink: ObjectHolder<GROUP>,
    entityLink: ObjectHolder<ENTITY>,
];
