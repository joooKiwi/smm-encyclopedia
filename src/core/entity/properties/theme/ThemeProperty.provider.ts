import type {NullOrBoolean}      from '../../../../util/types'
import type {ProviderWithoutKey} from '../../../../util/provider/ProviderWithoutKey'
import type {ThemeProperty}      from './ThemeProperty'

import {AbstractProvider}       from '../../../../util/provider/AbstractProvider'
import {ThemePropertyContainer} from './ThemeProperty.container'

/**
 * @singleton
 */
export class ThemePropertyProvider
    extends AbstractProvider<ArgumentsReceived, ThemeProperty>
    implements ProviderWithoutKey<ThemeProperty, ArgumentsReceived> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemePropertyProvider

    private constructor() {
        super()
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    /**
     * Get (or create) a property instance based on the {@link Themes} properties.
     *
     * @param isInGroundTheme Is in the {@link Themes.GROUND ground theme}
     * @param isInUndergroundTheme Is in the {@link Themes.UNDERGROUND underground theme}
     * @param isInUnderwaterTheme Is in the {@link Themes.UNDERWATER underwater theme}
     * @param isInDesertTheme Is in the {@link Themes.DESERT desert theme}
     * @param isInSnowTheme Is in the {@link Themes.SNOW snow theme}
     * @param isInSkyTheme Is in the {@link Themes.SKY sky theme}
     * @param isInForestTheme Is in the {@link Themes.FOREST forest theme}
     * @param isInGhostHouseTheme Is in the {@link Themes.GHOST_HOUSE ghost house theme}
     * @param isInAirshipTheme Is in the {@link Themes.AIRSHIP airship theme}
     * @param isInCastleTheme Is in the {@link Themes.CASTLE castle theme}
     */
    public get<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean, UNDERWATER extends boolean = boolean, DESERT extends NullOrBoolean = NullOrBoolean, SNOW extends NullOrBoolean = NullOrBoolean, SKY extends NullOrBoolean = NullOrBoolean, FOREST extends NullOrBoolean = NullOrBoolean, GHOST_HOUSE extends boolean = boolean, AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, >(isInGroundTheme: GROUND, isInUndergroundTheme: UNDERGROUND, isInUnderwaterTheme: UNDERWATER, isInDesertTheme: DESERT, isInSnowTheme: SNOW, isInSkyTheme: SKY, isInForestTheme: FOREST, isInGhostHouseTheme: GHOST_HOUSE, isInAirshipTheme: AIRSHIP, isInCastleTheme: CASTLE,): ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE>
    public get(...argumentsReceived: ArgumentsReceived): ThemeProperty {
        return this.everyContainers.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new ThemePropertyContainer(...argumentsReceived,)))
            .get(argumentsReceived)
    }

}

type ArgumentsReceived = readonly [
    isInGroundTheme: boolean,
    isInUndergroundTheme: boolean,
    isInUnderwaterTheme: boolean,
    isInDesertTheme: NullOrBoolean,
    isInSnowTheme: NullOrBoolean,
    isInSkyTheme: NullOrBoolean,
    isInForestTheme: NullOrBoolean,
    isInGhostHouseTheme: boolean,
    isInAirshipTheme: boolean,
    isInCastleTheme: boolean,
]
