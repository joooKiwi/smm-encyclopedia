import {Entity} from '../simple/Entity';
import {Theme}  from './Theme';

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

}
