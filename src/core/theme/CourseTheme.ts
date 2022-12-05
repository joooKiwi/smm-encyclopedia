import type {Entity}       from 'core/entity/Entity'
import type {NightEffects} from 'core/nightEffect/NightEffects'
import type {Theme}        from 'core/theme/Theme'
import type {NullOr}       from 'util/types/nullable'

export interface CourseTheme
    extends Theme {

    get entities(): readonly Entity[]

    get effect(): NullOr<NightEffects>

}
