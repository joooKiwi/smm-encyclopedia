import type {CollectionHolder} from '@joookiwi/collection'

import type {Entity}            from 'core/entity/Entity'
import type {GameProperty}      from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty} from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {TimeProperty}      from 'core/entity/properties/time/TimeProperty'
import type {NameTrait}         from 'lang/name/NameTrait'

export interface Instrument
    extends NameTrait<string>,
        GameProperty,
        GameStyleProperty,
        TimeProperty {

    readonly entities: CollectionHolder<Entity>

    readonly isInSuperMario3DWorldStyle: false

}
