import {Entity} from '../simple/Entity';
import {Theme}  from './Theme';

export interface CourseTheme
    extends Theme {

    entities: readonly Entity[]

}
