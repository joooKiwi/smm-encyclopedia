import type {CourseTheme} from 'core/theme/CourseTheme'
import type {Theme}       from 'core/theme/Theme'
import type {WorldTheme}  from 'core/theme/WorldTheme'

export interface CourseAndWorldTheme
    extends Theme {

    get courseTheme(): CourseTheme

    get isInCourseTheme(): boolean


    get worldTheme(): WorldTheme

    get isInWorldTheme(): boolean

}
