import type {Entity}                     from '../simple/Entity';
import type {PossibleEffectInNightTheme} from './Theme.template';
import type {Theme}                      from './Theme';

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

    get effect(): PossibleEffectInNightTheme

}
