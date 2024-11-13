import type {Array} from '@joookiwi/type'

import type {Entity}       from 'core/entity/Entity'
import type {GameProperty} from 'core/entity/properties/game/GameProperty'
import type {NameTrait}    from 'lang/name/NameTrait'

export interface Instrument
    extends NameTrait<string>,
        GameProperty {

    get entities(): Array<Entity>

}
