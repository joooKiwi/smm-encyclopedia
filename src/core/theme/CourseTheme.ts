import type {Entity}  from '../entity/Entity';
import type {NightEffects} from './NightEffects';
import type {Theme}   from './Theme';

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

    get effect(): | NightEffects | null

}
