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
    public hasAllThemes(): boolean {
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
    public hasAllCourseThemes(): boolean {
        return this.#hasAllCourseThemes ??= this._hasAllByArray(COURSE_THEMES as unknown as Array<T>,)
    }

    /**
     * The collection has every world theme
     * ({@link Themes.GROUND}, {@link Themes.UNDERGROUND}, {@link Themes.DESERT},
     * {@link Themes.SNOW}, {@link Themes.SKY}, {@link Themes.FOREST},
     * {@link Themes.VOLCANO}, {@link Themes.SPACE})
     * type in its values
     */
    public hasAllWorldThemes(): boolean {
        return this.#hasAllWorldThemes ??= this._hasAllByArray(WORLD_THEMES as unknown as Array<T>,)
    }


    /** The collection has the {@link Themes.GROUND} type in its values */
    public hasGround(): boolean {
        return this.#hasGround ??= this.has(Themes.GROUND as T,)
    }

    /** The collection has the {@link Themes.UNDERGROUND} type in its values */
    public hasUnderground(): boolean {
        return this.#hasUnderground ??= this.has(Themes.UNDERGROUND as T,)
    }

    /** The collection has the {@link Themes.UNDERWATER} type in its values */
    public hasUnderwater(): boolean {
        return this.#hasUnderwater ??= this.has(Themes.UNDERWATER as T,)
    }

    /** The collection has the {@link Themes.DESERT} type in its values */
    public hasDesert(): boolean {
        return this.#hasDesert ??= this.has(Themes.DESERT as T,)
    }

    /** The collection has the {@link Themes.SNOW} type in its values */
    public hasSnow(): boolean {
        return this.#hasSnow ??= this.has(Themes.SNOW as T,)
    }

    /** The collection has the {@link Themes.SKY} type in its values */
    public hasSky(): boolean {
        return this.#hasSky ??= this.has(Themes.SKY as T,)
    }

    /** The collection has the {@link Themes.FOREST} type in its values */
    public hasForest(): boolean {
        return this.#hasForest ??= this.has(Themes.FOREST as T,)
    }

    /** The collection has the {@link Themes.GHOST_HOUSE} type in its values */
    public hasGhost_House(): boolean {
        return this.#hasGhostHouse ??= this.has(Themes.GHOST_HOUSE as T,)
    }

    /** The collection has the {@link Themes.AIRSHIP} type in its values */
    public hasAirship(): boolean {
        return this.#hasAirship ??= this.has(Themes.AIRSHIP as T,)
    }

    /** The collection has the {@link Themes.CASTLE} type in its values */
    public hasCastle(): boolean {
        return this.#hasCastle ??= this.has(Themes.CASTLE as T,)
    }

    /** The collection has the {@link Themes.VOLCANO} type in its values */
    public hasVolcano(): boolean {
        return this.#hasVolcano ??= this.has(Themes.VOLCANO as unknown as T,)
    }

    /** The collection has the {@link Themes.SPACE} type in its values */
    public hasSpace(): boolean {
        return this.#hasSpace ??= this.has(Themes.SPACE as unknown as T,)
    }

    //endregion -------------------- Methods --------------------

}
