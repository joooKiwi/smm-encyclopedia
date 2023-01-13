import type {GameProperty}       from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}  from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {ThemeProperty}      from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}       from 'core/entity/properties/time/TimeProperty'
import type {LimitProperty}      from 'core/entity/properties/limit/LimitProperty'
import type {InstrumentProperty} from 'core/entity/properties/instrument/InstrumentProperty'

export interface Property
    extends GameProperty, GameStyleProperty, ThemeProperty, TimeProperty, LimitProperty, InstrumentProperty {

    get gameContainer(): GameProperty

    get gameStyleContainer(): GameStyleProperty

    get themeContainer(): ThemeProperty

    get timeContainer(): TimeProperty

    get limitContainer(): LimitProperty

    get instrumentContainer(): InstrumentProperty

}
