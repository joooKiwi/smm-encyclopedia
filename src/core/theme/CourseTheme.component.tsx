import type {MutableArray} from '@joookiwi/type'
import {getFirstByArray}   from '@joookiwi/collection'

import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {ThemeProperty}            from 'core/entity/properties/theme/ThemeProperty'

import {COURSE_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                     from 'app/tools/images/Image'
import TextComponent             from 'app/tools/text/TextComponent'
import ThemeImage                from 'core/theme/ThemeImage'
import {Themes}                  from 'core/theme/Themes'
import {gameContentTranslation}  from 'lang/components/translationMethods'

import COURSE_THEMES = Themes.COURSE_THEMES

/**
 * @deprecated This should be replaced with something else
 * @reactComponent
 */
export default function CourseThemeComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<ThemeProperty>,) {
    if (reference.isInGroundTheme
        && reference.isInUndergroundTheme
        && reference.isInUnderwaterTheme
        && (reference.isInDesertTheme ?? false)
        && (reference.isInSnowTheme ?? false)
        && (reference.isInSkyTheme ?? false)
        && (reference.isInForestTheme ?? false)
        && reference.isInGhostHouseTheme
        && reference.isInAirshipTheme
        && reference.isInCastleTheme) {
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('theme.course.all', {courseThemeImage: <Image file={COURSE_THEME_IMAGE_FILE}/>,},)}/>
        return <div key={`${name.english} (every course themes)`}>{COURSE_THEMES.map(courseTheme =>
            <ThemeImage reference={courseTheme}/>,)}</div>
    }

    const enumInstances: MutableArray<Themes> = []
    reference.toCourseThemeMap().forEach((isInEnumInstance, enumInstance,) => {
        if (isInEnumInstance)
            enumInstances.push(enumInstance)
    })
    if (enumInstances.length === 1)
        return <ThemeImage reference={getFirstByArray(enumInstances,)}/>
    return <div key={`${name.english} - group`}>{enumInstances.map(enumInstance =>
        <ThemeImage reference={enumInstance}/>,)}</div>
}
