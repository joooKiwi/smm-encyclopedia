import type {ThemeProperty}                      from 'core/entity/properties/theme/ThemeProperty'
import type {ProviderWithMultipleArgumentsAsKey} from 'util/provider/ProviderWithMultipleArgumentsAsKey'

import {ThemePropertyContainer} from 'core/entity/properties/theme/ThemeProperty.container'
import {isArrayEquals}          from 'util/utilitiesMethods'
import {AbstractProvider}       from 'util/provider/AbstractProvider'

/** @singleton */
export class ThemePropertyProvider
    extends AbstractProvider<ArgumentsReceived, ThemeProperty>
    implements ProviderWithMultipleArgumentsAsKey<ArgumentsReceived, ThemeProperty> {

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
    public get<const GROUND extends boolean = boolean,
        const UNDERGROUND extends boolean = boolean,
        const UNDERWATER extends boolean = boolean,
        const DESERT extends NullOrBoolean = NullOrBoolean,
        const SNOW extends NullOrBoolean = NullOrBoolean,
        const SKY extends NullOrBoolean = NullOrBoolean,
        const FOREST extends NullOrBoolean = NullOrBoolean,
        const GHOST_HOUSE extends boolean = boolean,
        const AIRSHIP extends boolean = boolean,
        const CASTLE extends boolean = boolean, >(isInGroundTheme: GROUND, isInUndergroundTheme: UNDERGROUND, isInUnderwaterTheme: UNDERWATER, isInDesertTheme: DESERT, isInSnowTheme: SNOW, isInSkyTheme: SKY, isInForestTheme: FOREST, isInGhostHouseTheme: GHOST_HOUSE, isInAirshipTheme: AIRSHIP, isInCastleTheme: CASTLE,): ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE>
    public get(isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: NullOrBoolean, isInSnowTheme: NullOrBoolean, isInSkyTheme: NullOrBoolean, isInForestTheme: NullOrBoolean, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,): ThemeProperty {
        const argumentsReceived = [isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,] as const satisfies ArgumentsReceived

        const everyContainer = this.everyContainers
        let argumentsReferenced = argumentsReceived
        for (let [argument,] of everyContainer) {
            if (!isArrayEquals(argument, argumentsReceived,))
                continue
            argumentsReferenced = argument
            break
        }
        if (argumentsReferenced === argumentsReceived)
            everyContainer.set(argumentsReceived, new ThemePropertyContainer(isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,),)
        return everyContainer.get(argumentsReferenced,)!
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
