import type {Array, NullOr} from '@joookiwi/type'

import type {Entity}       from 'core/entity/Entity'
import type {NightEffects} from 'core/nightEffect/NightEffects'
import type {Theme}        from 'core/theme/Theme'

export interface CourseTheme
    extends Theme {

    readonly entities: Array<Entity>

    readonly effect: NullOr<NightEffects>

}
