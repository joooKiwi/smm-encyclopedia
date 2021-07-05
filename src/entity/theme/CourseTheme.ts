import type {Entity} from '../simple/Entity';
import type {Theme}  from './Theme';

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

}
