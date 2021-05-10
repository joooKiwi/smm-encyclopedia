import {Theme} from "./Theme";
import {Entity} from "../simple/Entity";

export interface CourseTheme
    extends Theme {

    entities: readonly Entity[]

}
