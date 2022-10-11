import type {CourseTheme} from './CourseTheme'
import type {Theme}       from './Theme'
import type {WorldTheme}  from './WorldTheme'

export interface CourseAndWorldTheme
    extends Theme {

    get courseTheme(): CourseTheme

    get isInCourseTheme(): boolean


    get worldTheme(): WorldTheme

    get isInWorldTheme(): boolean

}
