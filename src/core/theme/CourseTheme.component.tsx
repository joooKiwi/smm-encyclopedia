import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {ThemeProperty}            from 'core/entity/properties/theme/ThemeProperty'

import {COURSE_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                     from 'app/tools/images/Image'
import TextComponent             from 'app/tools/text/TextComponent'
import {Themes}                  from 'core/theme/Themes'
import ThemeImage                from 'core/theme/component/ThemeImage'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {ArrayAsCollection}       from 'util/collection/ArrayAsCollection'

import COURSE_THEMES = Themes.COURSE_THEMES

const courseThemes = new ArrayAsCollection(COURSE_THEMES,)

/**
 * @deprecated This should be replaced with something else
 * @reactComponent
 */
export default function CourseThemeComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<ThemeProperty>,) {
    if (courseThemes.all(it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('theme.course.all', {courseThemeImage: <Image file={COURSE_THEME_IMAGE_FILE}/>,},)}/>
        else
            return <div key={`${name.english} (every course themes)`}>{courseThemes.map(it => <ThemeImage reference={it}/>,)}</div>

    const filteredCourseThemes = courseThemes.filter(it => it.get(reference,),)
    if (filteredCourseThemes.length === 1)
        return <ThemeImage reference={filteredCourseThemes.getFirst()}/>
    return <div key={`${name.english} - group`}>{courseThemes.map(it => <ThemeImage reference={it}/>,)}</div>
}
