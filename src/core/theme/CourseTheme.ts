import type {Entity}       from '../entity/Entity'
import type {NightEffects} from '../nightEffect/NightEffects'
import type {NullOr}       from '../../util/types'
import type {Theme}        from './Theme'

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

    get effect(): NullOr<NightEffects>

}
