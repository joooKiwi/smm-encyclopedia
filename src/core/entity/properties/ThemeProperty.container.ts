import type {ExtendedMap}   from '../../../util/extended/ExtendedMap';
import type {ThemeProperty} from './ThemeProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import {Themes}               from '../../theme/Themes';

/**
 * @multiton
 * @provider
 * @classWithDynamicImport {@link Themes}
 */
export class ThemePropertyContainer
    implements ThemeProperty {

    //region -------------------- Fields --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, ThemeProperty> = new ExtendedMapContainer();

    #map?: ReadonlyMap<Themes, boolean>;
    readonly #isInGroundTheme: boolean;
    readonly #isInUndergroundTheme: boolean;
    readonly #isInUnderwaterTheme: boolean;
    readonly #isInDesertTheme: | boolean | null;
    readonly #isInSnowTheme: | boolean | null;
    readonly #isInSkyTheme: | boolean | null;
    readonly #isInForestTheme: | boolean | null;
    readonly #isInGhostHouseTheme: boolean;
    readonly #isInAirshipTheme: boolean;
    readonly #isInCastleTheme: boolean;

    //endregion -------------------- Fields --------------------

    private constructor([isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,]: ArgumentsReceived,) {
        this.#isInGroundTheme = isInGroundTheme;
        this.#isInUndergroundTheme = isInUndergroundTheme;
        this.#isInUnderwaterTheme = isInUnderwaterTheme;
        this.#isInDesertTheme = isInDesertTheme;
        this.#isInSnowTheme = isInSnowTheme;
        this.#isInSkyTheme = isInSkyTheme;
        this.#isInForestTheme = isInForestTheme;
        this.#isInGhostHouseTheme = isInGhostHouseTheme;
        this.#isInAirshipTheme = isInAirshipTheme;
        this.#isInCastleTheme = isInCastleTheme;
    }

    //region -------------------- Getter methods --------------------

    public get isInGroundTheme() {
        return this.#isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.#isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.#isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.#isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.#isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.#isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.#isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.#isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.#isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.#isInCastleTheme;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toCourseThemeMap(): ReadonlyMap<Themes, boolean> {
        return this.#map ??= new Map(Themes.courseThemes.map(theme => [theme, theme.get(this),]));
    }

    //endregion -------------------- Convertor methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    /**
     * Get a property instance based on the {@link Themes} properties.
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
     * @noDuplicateInstanceCreation
     */
    public static get<GROUND extends boolean = boolean, UNDERGROUND extends boolean = boolean, UNDERWATER extends boolean = boolean, DESERT extends | boolean | null = | boolean | null, SNOW extends | boolean | null = | boolean | null, SKY extends | boolean | null = | boolean | null, FOREST extends | boolean | null = | boolean | null, GHOST_HOUSE extends boolean = boolean, AIRSHIP extends boolean = boolean, CASTLE extends boolean = boolean, >(isInGroundTheme: GROUND, isInUndergroundTheme: UNDERGROUND, isInUnderwaterTheme: UNDERWATER, isInDesertTheme: DESERT, isInSnowTheme: SNOW, isInSkyTheme: SKY, isInForestTheme: FOREST, isInGhostHouseTheme: GHOST_HOUSE, isInAirshipTheme: AIRSHIP, isInCastleTheme: CASTLE,): ThemeProperty<GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE>
    public static get(...argumentsReceived: ArgumentsReceived) {
        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(argumentsReceived,)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: | boolean | null, isInSnowTheme: | boolean | null, isInSkyTheme: | boolean | null, isInForestTheme: | boolean | null, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,];
