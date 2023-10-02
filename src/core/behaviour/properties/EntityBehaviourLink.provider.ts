import type {Lazy}  from '@joookiwi/lazy'
import {CommonLazy} from '@joookiwi/lazy'

import type {PossibleGroupName}                         from 'core/entityTypes'
import type {EntityBehaviourLink, PossibleGroup}        from 'core/behaviour/properties/EntityBehaviourLink'
import type {PossibleEnglishName as PossibleEntityName} from 'core/entity/Entities.types'
import type {Entity}                                    from 'core/entity/Entity'
import type {ProviderForNullable}     from 'util/provider/ProviderForNullable'
import type {ProviderWithExplicitKey} from 'util/provider/ProviderWithExplicitKey'

import {EntityBehaviourLinkContainer} from 'core/behaviour/properties/EntityBehaviourLink.container'
import {isArrayEquals}                from 'util/utilitiesMethods'
import {AbstractProvider}             from 'util/provider/AbstractProvider'

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
    implements ProviderWithExplicitKey<EntityBehaviourLink, Key, ArgumentsReceived>, ProviderForNullable<EntityBehaviourLink, EntityBehaviourLink<null, null>, Key> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLinkProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    static #NULL_KEYS = [null, null,] as const
    static #NULL_ARGUMENTS = [CommonLazy.NULL, CommonLazy.NULL,] as const

    public get null() {
        return this.get(EntityBehaviourLinkProvider.#NULL_KEYS, ...EntityBehaviourLinkProvider.#NULL_ARGUMENTS,)
    }

    /**
     * Get (or create) a null {@link EntityBehaviourLink}
     *
     * @param key the null keys
     * @param groupLink the <b>null</b> group
     * @param entityLink the <b>null</b> {@link Entity}
     * @see EntityBehaviourLinkProvider.null
     */
    public get(key: Key<null, null>, groupLink: Lazy<null>, entityLink: Lazy<null>,): EntityBehaviourLink<null, null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with no group.
     *
     * @param key The null group & nullable entity names
     * @param groupLink The <b>null</b> group
     * @param entityLink The nullable {@link Entity}
     */
    public get(key: Key<null>, groupLink: Lazy<null>, entityLink: Lazy<NullOr<Entity>>,): EntityBehaviourLink<null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with no entity.
     *
     * @param key The nullable group & null entity names
     * @param groupLink The nullable group
     * @param entityLink The <b>null</b> {@link Entity}
     */
    public get(key: Key<NullOr<PossibleGroupName>, null>, groupLink: Lazy<PossibleGroup>, entityLink: Lazy<null>,): EntityBehaviourLink<PossibleGroup, null>
    /**
     * Get (or create) an {@link EntityBehaviourLink} with a nullable group & a nullable entity.
     *
     * @param key The nullable group & entity names
     * @param groupLink The nullable group
     * @param entityLink The nullable {@link Entity}
     */
    public get(key: Key, groupLink: Lazy<PossibleGroup>, entityLink: Lazy<NullOr<Entity>>,): EntityBehaviourLink
    public get(key: Key, groupLink: Lazy<PossibleGroup>, entityLink: Lazy<NullOr<Entity>>,): EntityBehaviourLink {
        const everyContainer = this.everyContainers
        let keyReferenced = key
        for (let [keyInMap,] of everyContainer) {
            if (!isArrayEquals(keyInMap, key,))
                continue
            keyReferenced = keyInMap
            break
        }
        if (keyReferenced === key)
            everyContainer.set(key, new EntityBehaviourLinkContainer(groupLink, entityLink,),)
        return everyContainer.get(keyReferenced,)!
    }

}

type Key<GROUP extends NullOr<PossibleGroupName> = NullOr<PossibleGroupName>, ENTITY extends NullOr<PossibleEntityName> = NullOr<PossibleEntityName>, > = readonly [
    groupLink: GROUP,
    entityLink: ENTITY,
]
type ArgumentsReceived = readonly [groupLink: Lazy<PossibleGroup>, entityLink: Lazy<NullOr<Entity>>,]
