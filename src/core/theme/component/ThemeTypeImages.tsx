import type {Themes}          from 'core/theme/Themes'
import type {ReactProperties} from 'util/react/ReactProperties'

import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import Image                                             from 'app/tools/images/Image'

interface ThemeTypeImagesProperties
    extends ReactProperties {

    readonly reference: Themes

}

/** @reactComponent */
export default function ThemeTypeImages({reference,}: ThemeTypeImagesProperties,) {
    const reference2 = reference.reference
    return <div id={`${reference.englishNameInHtml}-themeTypesImages-container`} className="themeTypesImages-container d-inline-flex flex-column">
        {reference2.isInCourseTheme ? <Image file={COURSE_THEME_IMAGE_FILE} className="themeType-image themeType-courseTheme"/> : null}
        {reference2.isInWorldTheme ? <Image file={WORLD_THEME_IMAGE_FILE} className="themeType-image themeType-worldTheme"/> : null}
    </div>
}
