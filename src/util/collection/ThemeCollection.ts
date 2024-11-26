import type {Array}                                                                    from '@joookiwi/type'
import type {PossibleIterableArraySetOrCollectionHolder, PossibleIterableOrCollection} from '@joookiwi/collection'
import {GenericCollectionHolder}                                                       from '@joookiwi/collection'

import {Themes} from 'core/theme/Themes'

import ALL =           Themes.ALL
import COURSE_THEMES = Themes.COURSE_THEMES
import WORLD_THEMES =  Themes.WORLD_THEMES

export class ThemeCollection<const T extends Themes = Themes,
    const REFERENCE extends PossibleIterableOrCollection<T> = PossibleIterableArraySetOrCollectionHolder<T>, >
    extends GenericCollectionHolder<T, REFERENCE> {

    //region -------------------- Fields --------------------

    #hasAllThemes?: boolean
    #hasAllCourseThemes?: boolean
    #hasAllWorldThemes?: boolean
    #hasGround?: boolean
    #hasUnderground?: boolean
    #hasUnderwater?: boolean
    #hasDesert?: boolean
    #hasSnow?: boolean
    #hasSky?: boolean
    #hasForest?: boolean
    #hasGhostHouse?: boolean
    #hasAirship?: boolean
    #hasCastle?: boolean
    #hasVolcano?: boolean
    #hasSpace?: boolean
    #hasOnlyGround?: boolean
    #hasOnlyUnderground?: boolean
    #hasOnlyUnderwater?: boolean
    #hasOnlyDesert?: boolean
    #hasOnlySnow?: boolean
    #hasOnlySky?: boolean
    #hasOnlyForest?: boolean
    #hasOnlyGhostHouse?: boolean
    #hasOnlyAirship?: boolean
    #hasOnlyCastle?: boolean
    #hasOnlyVolcano?: boolean
    #hasOnlySpace?: boolean

    //endregion -------------------- Fields --------------------
    //region -------------------- Methods --------------------

    /**
     * The collection has every theme
     * ({@link Themes.GROUND}, {@link Themes.UNDERGROUND}, {@link Themes.UNDERWATER},
     * {@link Themes.DESERT}, {@link Themes.SNOW}, {@link Themes.SKY},
     * {@link Themes.FOREST}, {@link Themes.GHOST_HOUSE}, {@link Themes.AIRSHIP},
     * {@link Themes.CASTLE}, {@link Themes.VOLCANO}, {@link Themes.SPACE})
     * type in its values
     */
    public get hasAllThemes(): boolean {
        return this.#hasAllThemes ??= this._hasAllByArray(ALL as unknown as Array<T>,)
    }

    /**
     * The collection has every course theme
     * ({@link Themes.GROUND}, {@link Themes.UNDERGROUND}, {@link Themes.UNDERWATER},
     * {@link Themes.DESERT}, {@link Themes.SNOW}, {@link Themes.SKY},
     * {@link Themes.FOREST}, {@link Themes.GHOST_HOUSE}, {@link Themes.AIRSHIP},
     * {@link Themes.CASTLE})
     * type in its values
     */
    public get hasAllCourseThemes(): boolean {
        return this.#hasAllCourseThemes ??= this._hasAllByArray(COURSE_THEMES as unknown as Array<T>,)
    }

    /**
     * The collection has every world theme
     * ({@link Themes.GROUND}, {@link Themes.UNDERGROUND}, {@link Themes.DESERT},
     * {@link Themes.SNOW}, {@link Themes.SKY}, {@link Themes.FOREST},
     * {@link Themes.VOLCANO}, {@link Themes.SPACE})
     * type in its values
     */
    public get hasAllWorldThemes(): boolean {
        return this.#hasAllWorldThemes ??= this._hasAllByArray(WORLD_THEMES as unknown as Array<T>,)
    }


    /** The collection has the {@link Themes.GROUND} type in its values */
    public get hasGround(): boolean {
        return this.#hasGround ??= this.has(Themes.GROUND as T,)
    }

    /** The collection has the {@link Themes.UNDERGROUND} type in its values */
    public get hasUnderground(): boolean {
        return this.#hasUnderground ??= this.has(Themes.UNDERGROUND as T,)
    }

    /** The collection has the {@link Themes.UNDERWATER} type in its values */
    public get hasUnderwater(): boolean {
        return this.#hasUnderwater ??= this.has(Themes.UNDERWATER as T,)
    }

    /** The collection has the {@link Themes.DESERT} type in its values */
    public get hasDesert(): boolean {
        return this.#hasDesert ??= this.has(Themes.DESERT as T,)
    }

    /** The collection has the {@link Themes.SNOW} type in its values */
    public get hasSnow(): boolean {
        return this.#hasSnow ??= this.has(Themes.SNOW as T,)
    }

    /** The collection has the {@link Themes.SKY} type in its values */
    public get hasSky(): boolean {
        return this.#hasSky ??= this.has(Themes.SKY as T,)
    }

    /** The collection has the {@link Themes.FOREST} type in its values */
    public get hasForest(): boolean {
        return this.#hasForest ??= this.has(Themes.FOREST as T,)
    }

    /** The collection has the {@link Themes.GHOST_HOUSE} type in its values */
    public get hasGhostHouse(): boolean {
        return this.#hasGhostHouse ??= this.has(Themes.GHOST_HOUSE as T,)
    }

    /** The collection has the {@link Themes.AIRSHIP} type in its values */
    public get hasAirship(): boolean {
        return this.#hasAirship ??= this.has(Themes.AIRSHIP as T,)
    }

    /** The collection has the {@link Themes.CASTLE} type in its values */
    public get hasCastle(): boolean {
        return this.#hasCastle ??= this.has(Themes.CASTLE as T,)
    }

    /** The collection has the {@link Themes.VOLCANO} type in its values */
    public get hasVolcano(): boolean {
        return this.#hasVolcano ??= this.has(Themes.VOLCANO as unknown as T,)
    }

    /** The collection has the {@link Themes.SPACE} type in its values */
    public get hasSpace(): boolean {
        return this.#hasSpace ??= this.has(Themes.SPACE as unknown as T,)
    }


    /** The collection has <b>only</b> the {@link Themes.GROUND} type in its values */
    public get hasOnlyGround(): boolean {
        return this.#hasOnlyGround ??= this.hasGround && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.UNDERGROUND} type in its values */
    public get hasOnlyUnderground(): boolean {
        return this.#hasOnlyUnderground ??= this.hasUnderground && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.UNDERWATER} type in its values */
    public get hasOnlyUnderwater(): boolean {
        return this.#hasOnlyUnderwater ??= this.hasUnderwater && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.DESERT} type in its values */
    public get hasOnlyDesert(): boolean {
        return this.#hasOnlyDesert ??= this.hasDesert && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.SNOW} type in its values */
    public get hasOnlySnow(): boolean {
        return this.#hasOnlySnow ??= this.hasSnow && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.SKY} type in its values */
    public get hasOnlySky(): boolean {
        return this.#hasOnlySky ??= this.hasSky && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.FOREST} type in its values */
    public get hasOnlyForest(): boolean {
        return this.#hasOnlyForest ??= this.hasForest && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.GHOST_HOUSE} type in its values */
    public get hasOnlyGhostHouse(): boolean {
        return this.#hasOnlyGhostHouse ??= this.hasGhostHouse && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.AIRSHIP} type in its values */
    public get hasOnlyAirship(): boolean {
        return this.#hasOnlyAirship ??= this.hasAirship && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.CASTLE} type in its values */
    public get hasOnlyCastle(): boolean {
        return this.#hasOnlyCastle ??= this.hasCastle && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.VOLCANO} type in its values */
    public get hasOnlyVolcano(): boolean {
        return this.#hasOnlyVolcano ??= this.hasVolcano && this.size === 1
    }

    /** The collection has <b>only</b> the {@link Themes.SPACE} type in its values */
    public get hasOnlySpace(): boolean {
        return this.#hasOnlySpace ??= this.hasSpace && this.size === 1
    }

    //endregion -------------------- Methods --------------------

}
