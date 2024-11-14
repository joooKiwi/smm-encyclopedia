import {allByArray, filterByArray} from '@joookiwi/collection'

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
    if (allByArray(COURSE_THEMES, it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('theme.course.all', {courseThemeImage: <Image file={COURSE_THEME_IMAGE_FILE}/>,},)}/>
        else
            return <div key={`${name.english} (every course themes)`}>{COURSE_THEMES.map(it => <ThemeImage reference={it}/>,)}</div>

    const courseThemes = filterByArray(COURSE_THEMES, it => it.get(reference,),)
    if (courseThemes.length === 1)
        return <ThemeImage reference={courseThemes.getFirst()}/>
    return <div key={`${name.english} - group`}>{courseThemes.map(it => <ThemeImage reference={it}/>,)}</div>
}
