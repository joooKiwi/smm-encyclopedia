import type {ViewDisplays}        from 'display/ViewDisplays'
import type {GameCollection}      from 'util/collection/GameCollection'
import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {TimeCollection}      from 'util/collection/TimeCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

export interface AppProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly games: GameCollection

    readonly gameStyles: GameStyleCollection

    readonly times: TimeCollection

}

export interface AppPropertiesWithType<out T, >
    extends AppProperties {

    readonly type: T

}
