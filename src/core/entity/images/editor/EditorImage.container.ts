import type {EditorImageFile}        from 'core/entity/file/EntityImageFile.editor'
import type {EditorImage, EditorMap} from 'core/entity/images/editor/EditorImage'

import {GameStyles}  from 'core/gameStyle/GameStyles'
import {Themes}      from 'core/theme/Themes'
import {Times}       from 'core/time/Times'
import {EMPTY_ARRAY} from 'util/emptyVariables'
import {nonNull}     from 'util/utilitiesMethods'

export class EditorImageContainer<const out T extends EditorImageFile, >
    implements EditorImage<T> {

    //region -------------------- Fields --------------------

    readonly #map
    readonly #all

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(all: readonly T[], map: EditorMap<T>,) {
        this.#all = all
        this.#map = map
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get all(): readonly T[] {
        return this.#all
    }

    public get map(): EditorMap<T> {
        return this.#map
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(gameStyle?: Nullable<GameStyles>, theme?: Nullable<Themes>, time?: Nullable<Times>,): readonly T[] {
        if (gameStyle == null && theme == null && time == null)
            return this.all

        const map = this.map
        if (map.size === 0)
            return EMPTY_ARRAY

        if (time == null) {
            if (gameStyle == null) {
                if (theme == null)
                    return this.all
                // return nonNull(Array.from(map.values(), it => Array.from(it.values(), it => it.get(theme,),),).flat(2,),)
                return this.#getValuesFromTheme(map, theme,)
            }
            if (theme == null)
                return this.#getValuesFromGameStyle(map, gameStyle,)

            debugger //TODO This part hasn't been tested yet
            const valuesFromGameStyleAndTheme = nonNull(Array.from(map.values(), it => it.get(gameStyle,)?.get(theme,),).flat(),)
            if (valuesFromGameStyleAndTheme.length === 0)
                return EMPTY_ARRAY
            // @ts-ignore (for the moment)
            return valuesFromGameStyleAndTheme
        }

        const valueFromTime = map.get(time,)
        if (valueFromTime == null)
            return EMPTY_ARRAY
        if (valueFromTime.size === 0)
            return EMPTY_ARRAY

        if (gameStyle == null) {
            debugger //TODO This part hasn't been tested yet
            if (theme == null)
                return Array.from(valueFromTime.values(), it => Array.from(it.values(),),).flat(2,)

            const valueFromTimeAndTheme = nonNull(Array.from(valueFromTime.values(), it => it.get(theme,),).flat(),)
            if (valueFromTimeAndTheme.length === 0)
                return EMPTY_ARRAY
            // @ts-ignore (for the moment)
            return valueFromTimeAndTheme
        }

        const valueFromGameStyle = valueFromTime.get(gameStyle,)
        if (valueFromGameStyle == null)
            return EMPTY_ARRAY
        if (valueFromGameStyle.size === 0)
            return EMPTY_ARRAY

        if (theme == null)
            return Array.from(valueFromGameStyle.values(),).flat()

        const valueFromTheme = valueFromGameStyle.get(theme,)
        if (valueFromTheme == null)
            return EMPTY_ARRAY
        if (valueFromTheme.length === 0)
            return EMPTY_ARRAY
        return valueFromTheme
    }

    //region -------------------- Methods (get from theme only) --------------------

    #getValuesFromTheme(map: EditorMap<T>, theme: Themes,): readonly T[] {
        debugger //TODO: This method hasn't been tested yet
        if (!this.#hasAllTime(map,))
            return this.#getValuesFromThemeInFirstTime(map, theme,)
        return this.#getValuesFromThemeAndBothTime(map, theme,)
    }


    #getValuesFromThemeInFirstTime(map: EditorMap<T>, theme: Themes,): readonly T[] {
        let iteratorResult_time = map[Symbol.iterator]().next()
        if (iteratorResult_time.done)
            return EMPTY_ARRAY // No time was present

        const iterator_gameStyle = iteratorResult_time.value[1][Symbol.iterator]()

        const images = [] as T[]
        let iteratorResult_gameStyle: IteratorResult<readonly [GameStyles, ReadonlyMap<Themes, readonly T[]>,], undefined>
        while (!(iteratorResult_gameStyle = iterator_gameStyle.next()).done) {
            const imagesToAdd = iteratorResult_gameStyle.value[1].get(theme,)
            if (imagesToAdd == null)
                continue

            const size = imagesToAdd.length
            let index = -1
            while (++index < size)
                images.push(imagesToAdd[index],)
        }
        if (images.length === 0)
            return EMPTY_ARRAY // No images in the game styles and theme were present

        return images
    }


    #getValuesFromThemeAndBothTime(map: EditorMap<T>, theme: Themes,): readonly T[] {
        const images = [] as T[]
        const iterator_time = map[Symbol.iterator]()
        const dayGameStyleMap = iterator_time.next().value[1]
        const nightGameStyleMap = iterator_time.next().value[1]

        const iterator_dayGameStyle = dayGameStyleMap[Symbol.iterator]()
        const iterator_nightGameStyle = nightGameStyleMap[Symbol.iterator]()

        let iteratorResult_dayGameStyle: IteratorResult<readonly [GameStyles, ReadonlyMap<Themes, readonly T[]>,], undefined> = iterator_dayGameStyle.next()
        let iteratorResult_nightGameStyle: IteratorResult<readonly [GameStyles, ReadonlyMap<Themes, readonly T[]>,], undefined> = iterator_nightGameStyle.next()

        while (!iteratorResult_dayGameStyle.done || !iteratorResult_nightGameStyle.done) {
            const iteratorResultValue_dayGameStyle = iteratorResult_dayGameStyle.value

            dayContext: if (iteratorResultValue_dayGameStyle != null) { // eslint-disable-line no-labels
                const dayImagesToAdd = iteratorResultValue_dayGameStyle[1].get(theme,)
                if (dayImagesToAdd == null)
                    break dayContext // eslint-disable-line no-labels

                const size = dayImagesToAdd.length
                let index = -1
                while (++index < size)
                    images.push(dayImagesToAdd[index],)
                iteratorResult_dayGameStyle = iterator_dayGameStyle.next()
            }

            const iteratorResultValue_nightGameStyle = iteratorResult_nightGameStyle.value
            if (iteratorResultValue_nightGameStyle == null)
                break // We no longer have any values (for some weird reason)
            if (iteratorResultValue_dayGameStyle != null)
                if (iteratorResultValue_dayGameStyle[0] !== iteratorResultValue_nightGameStyle[0])
                    continue

            nightContext: { // eslint-disable-line no-labels
                const nightImagesToAdd = iteratorResultValue_nightGameStyle[1].get(theme,)
                if (nightImagesToAdd == null)
                    break nightContext // eslint-disable-line no-labels

                const size = nightImagesToAdd.length
                let index = -1
                while (++index < size)
                    images.push(nightImagesToAdd[index],)
            }
            iteratorResult_nightGameStyle = iterator_nightGameStyle.next()
        }

        if (images.length === 0)
            return EMPTY_ARRAY // We had no images for either the day or night time in the theme
        return images
    }

    //endregion -------------------- Methods (get from theme only) --------------------
    //region -------------------- Methods (get from game style only) --------------------

    #getValuesFromGameStyle(map: EditorMap<T>, gameStyle: GameStyles,): readonly T[] {
        if (!this.#hasAllTime(map,))
            return this.#getValuesFromGameStyleInFirstTheme(map, gameStyle,)

        const iterator_time = map[Symbol.iterator]()
        const dayThemeMap = iterator_time.next().value[1].get(gameStyle,)
        const nightThemeMap = iterator_time.next().value[1].get(gameStyle,)

        if (nightThemeMap == null) {
            if (dayThemeMap == null)
                return EMPTY_ARRAY // No images in the day & night time in the game style
            return this.#getValuesFromGameStyleInTime(dayThemeMap,)
        }
        if (dayThemeMap == null)
            return this.#getValuesFromGameStyleInTime(nightThemeMap,)
        return this.#getValuesFromGameStyleInBothTime(dayThemeMap, nightThemeMap,)
    }


    #getValuesFromGameStyleInFirstTheme(map: EditorMap<T>, gameStyle: GameStyles,): readonly T[] {
        let iteratorResult_time = map[Symbol.iterator]().next()
        if (iteratorResult_time.done)
            return EMPTY_ARRAY // No time was present

        const gameStyleMap = iteratorResult_time.value[1].get(gameStyle,)
        if (gameStyleMap == null)
            return EMPTY_ARRAY // No game style to the time was present

        const images = [] as T[]

        const iterator_themeTime = gameStyleMap[Symbol.iterator]()
        let iteratorResult_themeTime: IteratorResult<readonly [Themes, readonly T[],], undefined>
        while (!(iteratorResult_themeTime = iterator_themeTime.next()).done) {
            const imagesToAdd = iteratorResult_themeTime.value[1]
            const size = imagesToAdd.length
            let index = -1
            while (++index < size)
                images.push(imagesToAdd[index],)
        }

        if (images.length === 0)
            return EMPTY_ARRAY // No images in the game style and themes were present

        return images
    }


    #getValuesFromGameStyleInBothTime(dayThemeMap: ReadonlyMap<Themes, readonly T[]>, nightThemeMap: ReadonlyMap<Themes, readonly T[]>,): readonly T[] {
        const images = [] as T[]

        const iterator_dayTheme = dayThemeMap[Symbol.iterator]()
        const iterator_nightTheme = nightThemeMap[Symbol.iterator]()

        let iteratorResult_dayTheme: IteratorResult<readonly [Themes, readonly T[],], undefined> = iterator_dayTheme.next()
        let iteratorResult_nightTheme: IteratorResult<readonly [Themes, readonly T[],], undefined> = iterator_nightTheme.next()

        while (!iteratorResult_dayTheme.done || !iteratorResult_nightTheme.done) {
            const iteratorResultValue_dayTheme = iteratorResult_dayTheme.value

            if (iteratorResultValue_dayTheme != null) {
                const dayImagesToAdd = iteratorResultValue_dayTheme[1]
                const size1 = dayImagesToAdd.length
                let index1 = -1
                while (++index1 < size1)
                    images.push(dayImagesToAdd[index1],)
                iteratorResult_dayTheme = iterator_dayTheme.next()
            }


            const iteratorResultValue_nightTheme = iteratorResult_nightTheme.value
            if (iteratorResultValue_nightTheme == null)
                break // We no longer have any values (for some weird reason)
            if (iteratorResultValue_dayTheme != null)
                if (iteratorResultValue_dayTheme[0] !== iteratorResultValue_nightTheme[0])
                    continue

            const nightImagesToAdd = iteratorResultValue_nightTheme[1]
            const size2 = nightImagesToAdd.length
            let index2 = -1
            while (++index2 < size2)
                images.push(nightImagesToAdd[index2],)
            iteratorResult_nightTheme = iterator_nightTheme.next()
        }

        if (images.length === 0)
            return EMPTY_ARRAY // We had no images for either the day or night time in the game style
        return images
    }

    #getValuesFromGameStyleInTime(themeMap: ReadonlyMap<Themes, readonly T[]>,): readonly T[] {
        const size = themeMap.size
        if (size === 0)
            return EMPTY_ARRAY // No images in the day time in the game style
        if (size === 1)
            return themeMap[Symbol.iterator]().next().value

        const images = [] as T[]
        const iterator = themeMap[Symbol.iterator]()
        let iteratorResult: IteratorResult<readonly [Themes, readonly T[],], undefined>
        while (!(iteratorResult = iterator.next()).done) {
            const imagesToAdd = iteratorResult.value[1]
            const size = imagesToAdd.length
            let index = -1
            while (++index < size)
                images.push(imagesToAdd[index],)
        }

        if (images.length === 0)
            return EMPTY_ARRAY // No images in the day time in the game style
        return images
    }

    //endregion -------------------- Methods (get from game style only) --------------------

    /**
     * Tell if the {@link map} has every {@link Times} based on its size
     *
     * @param map The current instance {@link map}
     */
    #hasAllTime(map: EditorMap<T>,): boolean {
        const size = map.size
        if (size === 0)
            return false
        if (size === 1)
            return false // There is only two times
        return true
    }

    //endregion -------------------- Methods --------------------

}
