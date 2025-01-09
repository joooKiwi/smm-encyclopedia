import type {CourseTheme} from 'core/theme/CourseTheme'
import type {Theme}       from 'core/theme/Theme'
import type {WorldTheme}  from 'core/theme/WorldTheme'

export interface CourseAndWorldTheme
    extends Theme {

    readonly courseTheme: CourseTheme
    readonly isInCourseTheme: boolean

    readonly worldTheme: WorldTheme
    readonly isInWorldTheme: boolean

}
