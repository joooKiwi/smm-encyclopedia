import type {EntityBehaviourIsInOnly} from './EntityBehaviourIsInOnly';
import type {ProviderWithoutKey}      from '../../../util/provider/ProviderWithoutKey';

import {AbstractProvider}                 from '../../../util/provider/AbstractProvider';
import {EntityBehaviourIsInOnlyContainer} from './EntityBehaviourIsInOnly.container';

/**
 * An entity behaviour "is in only" {@link Provider}.
 *
 * It can only create a selected instances based on the arguments received:
 * <ol>
 *     <li>false, false</li>
 *     <li>true, false</li>
 *     <li>false, true</li>
 * </ol>
 * The [true, true] is not possible due to no "is in only" from a specific location.
 *
 * @singleton
 */
export class EntityBehaviourIsInOnlyProvider
    extends AbstractProvider<ArgumentsReceived, EntityBehaviourIsInOnly>
    implements ProviderWithoutKey<EntityBehaviourIsInOnly, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourIsInOnlyProvider;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public none(): EntityBehaviourIsInOnly {
        return this.get(false, false,);
    }

    public get(...argumentsReceived: ArgumentsReceived): EntityBehaviourIsInOnly {
        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new EntityBehaviourIsInOnlyContainer(...argumentsReceived),))
            .get(argumentsReceived);
    }

}

type ArgumentsReceived = readonly [
    isInOnline: boolean,
    isInMultiplayer: boolean,
];
